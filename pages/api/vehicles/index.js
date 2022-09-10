import { prisma } from "../../../database/prisma";
import Joi from "joi";
//import uploadImage from "../../../middlewars/uploadImage";
import { Prisma } from "@prisma/client";
import _ from "lodash";
import fs from "fs";

import Cookies from "js-cookie";
import schema from "../../../validation/schema";
const { initialSchema, featuresSchema, businessSchema } = schema(false);
import {
  businessPicker,
  featuresPicker,
  initialPicker,
} from "../../../validation/dataPicker";
import auth from "../../../middlewars/auth";
import uploadImage1 from "../../../middlewars/uploadImage1";
import uploadImage from "../../../middlewars/uploadImage";
import uploadImages from "../../../middlewars/uploadImages";
import formidable from "formidable";

import NextCors from "nextjs-cors";

//divide key/values per according to database table name
const dataPicker = (data) => {
  return {
    initial: {
      ...initialPicker(data),
      image: initialPicker(data)?.image?.split("public")[1],
    },
    features: featuresPicker(data),
    business: businessPicker(data),
  };
};
async function handler(req, res) {
  // nextjs-cors uses the cors package, so we invite you to check the documentation https://github.com/expressjs/cors
  await NextCors(req, res, {
    // Options
    methods: ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE"],
    origin: "*",
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
  });

  if (req.method === "GET") {
    try {
      // console.log(req?.user);
      const { query } = req;
      if (!Object.keys(query).length > 0)
        //query not exist return all vehicles
        return res.json({
          data: await prisma.Initial.findMany({
            include: {
              features: true,
              business: true,
            },
          }),
        });
      //return vehicle as per id
      if (query.id) {
        let vehicle = await prisma.Initial.findUnique({
          where: { id: query.id },
          include: {
            features: true,
            business: true,
            imageGallery: true,
          },
        });
        if (!vehicle) throw new Error("Invalid vehicle id");
        return res.json({
          data: vehicle,
        });
      }
      //search by vehicle make
      else if (query.make) {
        let vehicle = await prisma.Initial.findMany({
          where: { make: query.make },
          include: {
            features: true,
            business: true,
            imageGallery: true,
          },
        });
        if (!vehicle.length > 0) throw new Error("vehicle not found");
        return res.json({
          data: vehicle,
        });
      }

      res.json({ message: "wrong query..." });
    } catch (err) {
      res.status(404).json({ error: err.message });
    }
  } else if (req.method === "POST") {
    auth(async () => {
      //auth
      try {
        //before insert data to database check id user is logged in
        if (!req?.user) throw new Error("user is not logged in");
        //upload single image
        const { initial, features, business } = dataPicker(
          convertToInt(await uploadImages(req, res, "image", validation, false))
        );
        //initial --insert
        const vehicle = await prisma.Initial.create({
          data: initial,
        });
        //features --insert
        await prisma.Features.create({
          data: { ...features, vehicleId: vehicle.id },
        });
        //business --insert
        await prisma.Business.create({
          data: { ...business, vehicleId: vehicle.id },
        });
        res.status(200).json({ data: vehicle });
      } catch (err) {
        if (err instanceof Prisma.PrismaClientKnownRequestError)
          return res.status(401).json({ error: err.meta.cause });
        else if (err instanceof Prisma.PrismaClientValidationError)
          return res.status(401).json({ error: err.message });
        res.status(401).json({ error: err.message });
      }
    })(req, res);
  } else if (req.method === "PUT") {
    auth(async () => {
      try {
        //before updating data to database check id user is logged in
        if (!req?.user) throw new Error("user is not logged in");
        const {
          query: { id: vehicleId },
        } = req;
        //verify is vehicleId is exist or not
        const _vehicleOld = await prisma.Initial.findUnique({
          where: { id: vehicleId },
        });
        if (!_vehicleOld) throw new Error("vehicle id not found");

        const data = await new Promise((resolve, reject) => {
          const form = formidable();
          form.parse(req, (err, fields, files) => {
            if (err) reject({ err });
            resolve({ err, fields, files });
          });
        });

        const { initial, features, business } = dataPicker(
          convertToInt({
            ...data?.fields,
            image: `public${_vehicleOld?.image}`,
          })
        );

        // const { initial, features, business } = dataPicker(
        //   convertToInt(await uploadImages(req, res, "image", validation, false))
        // );
        //delete image from file system before insert new image
        // fs.unlink(`public/${_vehicleOld?.image}`, () => {});
        //initial --update
        const vehicle = await prisma.Initial.update({
          where: { id: vehicleId },
          data: initial,
        });
        //features --update
        await prisma.Features.update({
          where: { vehicleId },
          data: { ...features, vehicleId },
        });
        //business --update
        await prisma.Business.update({
          where: { vehicleId },
          data: { ...business, vehicleId },
        });
        res.json({ data: vehicle });
      } catch (err) {
        if (err instanceof Prisma.PrismaClientKnownRequestError)
          return res.status(401).json({ error: err.meta.cause });
        res.status(401).json({ error: err.message });
      }
    })(req, res);
  } else if (req.method === "DELETE") {
    auth(async () => {
      try {
        //before deleting data to database check id user is logged in
        if (!req?.user) throw new Error("user is not logged in");

        const {
          query: { id: vehicleId },
        } = req;
        //delete vehicle
        // const _vehicleOld = await prisma.Initial.findUnique({
        //   where: { id: vehicleId },
        // });
        const _vehicleOld = await prisma.Initial.delete({
          where: { id: vehicleId },
        });
        if (!_vehicleOld) throw new Error("vehicle id not found");
        fs.unlink(`public${_vehicleOld.image}`, () => {}); //delete image from file system
        res.json({ data: _vehicleOld });
      } catch (err) {
        if (err instanceof Prisma.PrismaClientKnownRequestError)
          return res.status(404).json({ error: err.meta.cause });
        res.status(404).json({ error: err.message });
        // console.log("erros====", err.message);
      }
    })(req, res);
  }
}
const convertToInt = (data) => {
  let _data = { ...data };
  //initial
  const int_keys = [
    "previous_owners",
    "mileage",
    "numberOfCylinders",
    "yearOfModel",
    "doors",
    "price",
    "finance_month",
    "insurance_group",
    "months12_tax",
    "months6_tax",
  ];
  for (let k of int_keys) {
    if (typeof _data[k] !== "undefined" && _data[k] !== "")
      _data[k] = parseInt(_data[k]);
    else if (_data[k] === "") _data[k] = -1;
  }
  return _data;
};

const validation = async (data) => {
  const schema = Joi.object({
    ...initialSchema,
    ...featuresSchema,
    ...businessSchema,
  });
  return await schema.validateAsync(data);
};

// export default auth(handler);
export default handler;

export const config = {
  api: {
    bodyParser: false, // Disallow body parsing, consume as stream
  },
};
