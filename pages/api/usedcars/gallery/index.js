import { prisma } from "../../../../database/prisma";
import Joi from "joi";
import uploadImage from "../../../../middlewars/uploadImage";

export default async function index(req, res) {
  if (req.method === "GET") {
    return res.json(await prisma.VehicleGallary.findMany());
  } else if (req.method === "POST") {
    try {
      const data = await uploadImage(req, res, "images");
      res.json({ data });
    } catch (err) {
      console.log({ error: err });
    }
  }
}

export const config = {
  api: {
    bodyParser: false, // Disallow body parsing, consume as stream
  },
};
