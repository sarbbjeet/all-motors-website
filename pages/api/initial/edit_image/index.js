import { prisma } from "../../../../database/prisma";
import auth from "../../../../middlewars/auth";
import uploadImages from "../../../../middlewars/uploadImages";
import fs from "fs";
import NextCors from "nextjs-cors";

async function handler(req, res) {
  //cors
  await NextCors(req, res, {
    // Options
    methods: ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE"],
    origin: "*",
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
  });
  if (req.method === "PUT") {
    try {
      if (!req.query?.id) throw new Error("query parameter missing");

      const initial = await prisma.Initial.findUnique({
        where: { id: req.query?.id },
      });
      if (!initial) throw new Error("id is not found");
      delete initial.id;
      //edit image
      const data = await uploadImages(req, res, "image", () => {}, false);

      //delete image from file system before insert new image
      fs.unlink(`public/${initial?.image}`, () => {});
      initial.image = data?.image?.split("public")[1];

      await prisma.Initial.update({
        where: {
          id: req.query?.id,
        },
        data: initial,
      });
      return res.json({ message: "success" });
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  }
}

export default auth(handler);

export const config = {
  api: {
    bodyParser: false, // Disallow body parsing, consume as stream
  },
};
