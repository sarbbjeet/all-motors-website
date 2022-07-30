import { prisma } from "../../../../database/prisma";
import uploadImage from "../../../../middlewars/uploadImage";
import fs from "fs";

import formidable from "formidable";

export default async function index(req, res) {
  if (req.method === "GET") {
    return res.json(await prisma.VehicleGallary.findMany());
  } else if (req.method === "POST") {
    try {
      const data = await uploadImage(req, res, "images");
      if (typeof data?.images === "undefined")
        throw new Error("error uploading images");
      const _images = [];
      for (let file of data?.images) _images.push({ image: file });
      const response = await prisma.VehicleGallary.createMany({
        data: _images,
        skipDuplicates: true, // Skip 'Bobo'
      });
      res.json({ data: response });
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  } else if (req.method === "DELETE") {
    try {
      //convert id or get id when body parser is false set.
      const data = await new Promise((resolve, reject) => {
        const form = formidable();
        form.parse(req, (err, fields, files) => {
          if (err) reject({ err });
          resolve({ err, fields, files });
        });
      });
      // const imageId = data?.fields?.id;
      //perform database delete operation
      const _res =
        data?.fields?.id &&
        (await prisma.VehicleGallary.delete({
          where: {
            id: data?.fields?.id,
          },
        }));
      if (!_res) throw new Error("id props not found");
      fs.unlink(_res?.image, () => {});
      res.json({ data: _res });
    } catch (err) {
      return res.status(404).json({ error: err.message });
    }
  }
}

export const config = {
  api: {
    bodyParser: false, // Disallow body parsing, consume as stream
  },
};
