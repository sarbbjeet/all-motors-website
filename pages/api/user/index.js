import Joi from "joi";
import { prisma } from "../../../database/prisma";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import NextCors from "nextjs-cors";

export default async function index(req, res) {
  // nextjs-cors uses the cors package, so we invite you to check the documentation https://github.com/expressjs/cors
  await NextCors(req, res, {
    // Options
    methods: ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE"],
    origin: "*",
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
  });

  if (req.method === "GET") {
    return res.json({ message: "user page" });
  } else if (req.method === "POST") {
    //create a new user
    try {
      //validation
      await validation(req.body);
      //Is email address is unique?
      const user = await prisma.User.findUnique({
        where: { email: req.body.email },
      });
      if (user) throw new Error("User already exist");
      //password hashing before inserting
      //generate salt
      const salt = await bcrypt.genSalt(10);
      const password = await bcrypt.hash(req.body.password, salt);
      //insert data to user table
      const userIsCreated = await prisma.User.create({
        data: { ...req.body, password },
      });
      //remove password
      delete userIsCreated.password;
      return res.json({ data: userIsCreated });
    } catch (err) {
      res.status(404).json({ error: err.message });
    }
  }
}

const validation = async (data) => {
  const schema = Joi.object({
    name: Joi.string(),
    email: Joi.string().required().email(),
    password: Joi.string().required().min(6).max(20),
    role: Joi.string(),
    verified: Joi.boolean(),
  });
  return await schema.validateAsync(data);
};
