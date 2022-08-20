import { prisma } from "../../../database/prisma";
import uploadImage from "../../../middlewars/uploadImage";
import fs from "fs";

export default async function Gallery(req, res) {
  if (req.method === "GET") {
    try {
      const {
        query: { id: vehicleId },
      } = req;
      if (!vehicleId)
        //get all images
        return res.json(await prisma.ImageGallery.findMany());
      //get images for given vehicle id
      return res.json(
        await prisma.ImageGallery.findMany({
          where: { vehicleId },
        })
      );
    } catch (err) {
      res.status(404).json({ error: err.message });
    }
  } else if (req.method === "POST") {
    try {
      const {
        query: { id },
      } = req;

      if (!id) throw new Error("query parameter missing");
      const _vehicle = await prisma.Initial.findUnique({
        where: { id },
      });
      if (!_vehicle) throw new Error("vehicle not found");
      const data = await uploadImage(req, res, "images");

      console.log("data==", data);
      if (typeof data?.images === "undefined")
        throw new Error("error uploading images");
      const _images = [];
      for (let file of data?.images)
        _images.push({ vehicleId: id, image: file?.split("public")[1] });
      const response = await prisma.ImageGallery.createMany({
        data: _images,
        skipDuplicates: true, // Skip 'Bobo'
      });
      res.json({ data: response });
    } catch (err) {
      res.status(404).json({ error: err.message });
    }
  } else if (req.method === "DELETE") {
    try {
      const {
        query: { image_id },
      } = req;
      if (!image_id) throw new Error("query parameter missing");
      const _oldImage = await prisma.ImageGallery.delete({
        where: { id: image_id },
      });
      if (!_oldImage) throw new Error("image not available");
      fs.unlink(`public/${_oldImage?.image}`, () => {});
      res.json({ data: _oldImage });
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
