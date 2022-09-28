import { prisma } from "../../../../database/prisma";
import auth from "../../../../middlewars/auth";

async function handler(req, res) {
  if (req.method === "GET") {
    try {
      if (!req.query?.id) throw new Error("query parameter missing");

      const initial = await prisma.Initial.findUnique({
        where: { id: req.query?.id },
      });
      if (!initial) throw new Error("id is not found");
      delete initial.id;
      initial.favorite = !initial.favorite; //toggle favourite
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

export default handler;
