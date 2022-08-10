import Joi from "joi";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { prisma } from "../../../database/prisma";
import { getCookies, setCookie, deleteCookie } from "cookies-next";

function extractToken(req) {
  if (
    req.headers.authorization &&
    req.headers.authorization.split(" ")[0] === "Bearer"
  ) {
    return req.headers.authorization.split(" ")[1];
  } else if (req.query && req.query.token) {
    return req.query.token;
  }
  return null;
}

export default async function login(req, res) {
  if (req.method === "GET") {
    try {
      const token = extractToken(req);
      if (!token) throw new Error("token not found");
      // process.env.PRIVATE_KEY || "abcjkjklsd"
      const payload = await jwt.verify(
        token,
        process.env.PRIVATE_KEY || "abcjkjklsd"
      );
      //get user   //
      const user = await prisma.User.findUnique({
        where: { id: payload?.id },
      });
      delete user.password;
      res.json({ data: user });
    } catch (err) {
      res.status(401).json({ error: err.message });
    }
    //validate token
  } else if (req.method === "POST") {
    try {
      //validate email and  password
      await validation(req.body);
      //get user information
      const user = await prisma.User.findUnique({
        where: { email: req.body.email },
      });
      if (!user) throw new Error("user is not existing");
      //compare password
      const match = await bcrypt.compare(req.body.password, user.password);
      if (!match) throw new Error("password is incorrect");
      //generete jwt token
      const token = jwt.sign(
        { id: user.id },
        process.env.PRIVATE_KEY || "abcjkjklsd"
      );
      //cookies
      // setCookie("authToken", token, { req, res, maxAge: 60 * 60 * 24 });
      //   return res.json({ data: { message: "login successfully" } });

      return res.json({ data: token }); //send token
    } catch (err) {
      return res.status(401).json({ error: err.message });
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
