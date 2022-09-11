import api from "../services/api";
import NextCors from "nextjs-cors";
// const auth = (handler) => {
//   return (req, res) => {
//     return handler(req, res);
//   };
// };
const extractToken = (req) => {
  if (
    req.headers?.authorization &&
    req.headers?.authorization?.split(" ")[0] === "Bearer"
  )
    return req.headers?.authorization.split(" ")[1];
  return null;
};
const auth = (handler) => async (req, res) => {
  try {
    //cors middleware ..
    await NextCors(req, res, {
      // Options
      methods: ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE"],
      origin: "*",
      optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
    });
    const token = extractToken(req);
    if (!token) throw new Error("authorization token not found");
    if (token) {
      //send token to get user data
      api.defaults.headers.Authorization = `Bearer ${token}`;
      const { data: user } = await api.get("/api/user/login"); //verify token
      req.user = user?.data;
    }
    return handler(req, res);
  } catch (err) {
    return res
      .status(401)
      .json({ error: err.response?.data?.error || err.message });
  }
};

export default auth;
