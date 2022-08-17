import api from "../services/api";
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
  const token = extractToken(req);
  if (token) {
    //send token to get user data
    api.defaults.headers.Authorization = `Bearer ${token}`;
    const { data: user } = await api.get("/api/user/login");
    if (user?.data) req.user = user?.data;
  }
  return handler(req, res);
};

export default auth;
