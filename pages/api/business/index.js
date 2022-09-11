import { prisma } from "../../../database/prisma";
import Joi from "joi";
import { Prisma } from "@prisma/client";

export default async function handler(req, res) {
  //cors
  if (req.method === "OPTIONS") res.status(200).send("ok");
  if (req.method === "GET") {
  } else if (req.method === "POST") {
    //create startup setup of vehicles
    try {
      //upload single image
      await validation(req.body);
      //form-data covert int value to string so -->covert string to integer
      const business = await prisma.Business.create({
        data: convertToInt(req.body),
      });
      return res.json({ data: business });
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
  if (typeof _data?.price !== "undefined")
    _data["price"] = parseInt(_data["price"]);
  if (typeof _data?.finance_month !== "undefined")
    _data["finance_month"] = parseInt(_data["finance_month"]);
  if (typeof _data?.insurance_group !== "undefined")
    _data["insurance_group"] = parseInt(_data["insurance_group"]);

  if (typeof _data?.months12_tax !== "undefined")
    _data["months12_tax"] = parseInt(_data["months12_tax"]);
  if (typeof _data?.months6_tax !== "undefined")
    _data["months6_tax"] = parseInt(_data["months6_tax"]);

  return _data;
};
const validation = async (data) => {
  const schema = Joi.object({
    vehicleId: Joi.string().min(10).max(50).required(),
    price: Joi.number(),
    finance_month: Joi.number(),
    insurance_group: Joi.number(),
    months12_tax: Joi.number(),
    months6_tax: Joi.number(),
  });
  return await schema.validateAsync(data);
};

//  export default auth(handler);

// export const config = {
//   api: {
//     bodyParser: false, // Disallow body parsing, consume as stream
//   },
// };
