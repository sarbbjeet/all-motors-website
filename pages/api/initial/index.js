import { prisma } from "../../../database/prisma";
import Joi from "joi";
import uploadImage from "../../../middlewars/uploadImage";
import { Prisma } from "@prisma/client";

export default async function handler(req, res) {
  if (req.method === "GET") {
  } else if (req.method === "POST") {
    //create startup setup of vehicles
    try {
      //upload single image
      const data = await uploadImage(req, res, "image", validation, false);
      //form-data covert int value to string so -->covert string to integer
      const vehicle = await prisma.Initial.create({
        data: convertToInt(data),
      });
      return res.json({ data: vehicle });
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
  _data["previous_owners"] = parseInt(_data["previous_owners"]);
  return _data;
};
const validation = async (data) => {
  const schema = Joi.object({
    make: Joi.string().max(40).required(),
    model: Joi.string().required(),
    color: Joi.string().max(20).required(),
    engine_size: Joi.string().max(20).required(),
    transmission: Joi.string().max(30).required(),
    registration: Joi.string().max(30).required(),
    previous_owners: Joi.number().integer().required(),
    description: Joi.string(),
  });
  return await schema.validateAsync(data);
};

//  export default auth(handler);

export const config = {
  api: {
    bodyParser: false, // Disallow body parsing, consume as stream
  },
};
