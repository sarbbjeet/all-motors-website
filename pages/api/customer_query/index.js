import { Prisma } from "@prisma/client";
import Joi from "joi";
import { prisma } from "../../../database/prisma";

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
    return res.json(await prisma.CustomerQuery.findMany());
  } else if (req.method === "POST") {
    try {
      //validate data
      await validation(req.body);
      const response = await prisma.CustomerQuery.create({
        data: req.body,
      });
      return res.json({ data: response });
    } catch (err) {
      if (err instanceof Prisma.PrismaClientKnownRequestError)
        return res.status(404).json({
          error: `error code=${err.code}, '${err.meta.target}'`,
        });
      return res.status(404).json({ error: err?.message || "request failed" });
    }
  } else {
    res.status(404).json({ error: "wrong request method" });
  }
}
const validation = async (data) => {
  const schema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    phone: Joi.string().allow("", null).default(""),
    type: Joi.string().required(),
    message: Joi.string().allow("", null).default(""),
  });
  return await schema.validateAsync(data);
};
