import auth from "../../../middlewars/auth";
import { prisma } from "../../../database/prisma";
import Joi from "joi";
import uploadImage from "../../../middlewars/uploadImage";

const handler = async (req, res) => {
  //cors
  if (req.method === "OPTIONS") res.status(200).send("ok");
  if (req?.method === "GET") {
    return res.json(await prisma.UsedCar.findMany());
  } else if (req?.method === "POST") {
    //form-data key -->image
    try {
      const data = await uploadImage(req, res, "image", validation);
      //form-data covert int value to string so -->covert string to integer
      const createUsedCar = await prisma.UsedCar.create({
        data: convertToInt(data),
      });
      return res.json({ data: createUsedCar });
    } catch (err) {
      return res.json({ error: err?.message || "request failed" });
    }
  }
};

const convertToInt = (data) => {
  let _data = { ...data };
  _data["doors"] = parseInt(_data["doors"]);
  _data["mileage"] = parseInt(_data["mileage"]);
  _data["price"] = parseInt(_data["price"]);
  _data["year"] = parseInt(_data["year"]);
  return _data;
};

const validation = async (data) => {
  const schema = Joi.object({
    make: Joi.string().max(40).required(),
    model: Joi.string().required(),
    color: Joi.string().max(20).required(),
    transmission: Joi.string().max(30).required(),
    engine_size: Joi.string().max(20).required(),
    doors: Joi.number().integer().min(0).max(5).required(),
    year: Joi.number().required(),
    mileage: Joi.number().required(),
    price: Joi.number().required(),
    body_style: Joi.string().max(30),
    fuel: Joi.string().max(20).required(),
  });

  return await schema.validateAsync(data);
};

export default auth(handler);

export const config = {
  api: {
    bodyParser: false, // Disallow body parsing, consume as stream
  },
};
