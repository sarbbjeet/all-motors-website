import { prisma } from "../../../database/prisma";
import Joi from "joi";
import { Prisma } from "@prisma/client";
import NextCors from "nextjs-cors";

export default async function handler(req, res) {
  //cors
  await NextCors(req, res, {
    // Options
    methods: ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE"],
    origin: "*",
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
  });
  if (req.method === "GET") {
    res.json({ messgae: "get request ..... " });
  } else if (req.method === "POST") {
    //create startup setup of vehicles
    try {
      //upload single image
      await validation(req.body);
      //form-data covert int value to string so -->covert string to integer
      const features = await prisma.Features.create({
        data: convertToInt(req.body),
      });
      return res.json({ data: features });
    } catch (err) {
      if (err instanceof Prisma.PrismaClientKnownRequestError)
        return res.status(404).json({
          error: `error code=${err.code}, '${err.meta.target}'`,
        });
      return res.status(404).json({ error: err?.message || "request failed" });
    }
  }
}

const convertToInt = (data) => {
  let _data = { ...data };
  if (typeof _data?.mileage !== "undefined")
    _data["mileage"] = parseInt(_data["mileage"]);
  if (typeof _data?.numberOfCylinders !== "undefined")
    _data["numberOfCylinders"] = parseInt(_data["numberOfCylinders"]);

  _data["yearOfModel"] = parseInt(_data["yearOfModel"]);
  return _data;
};
const validation = async (data) => {
  const schema = Joi.object({
    vehicleId: Joi.string().min(10).max(50).required(),
    vehicle_type: Joi.string().max(40).required(),
    body_style: Joi.string().max(40).required(),
    mileage: Joi.number().min(0),
    numberOfCylinders: Joi.number().min(0),
    fuel: Joi.string().max(40).required(),
    yearOfModel: Joi.number().min(1950).required(),
    doors: Joi.number().min(1).max(10).required(),
    steering: Joi.string().max(40).required(),
    features: Joi.string(),
  });
  return await schema.validateAsync(data);
};

//  export default auth(handler);

// export const config = {
//   api: {
//     bodyParser: false, // Disallow body parsing, consume as stream
//   },
// };
