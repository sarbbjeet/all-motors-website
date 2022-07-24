// const auth = (handler) => {
//   return (req, res) => {
//     return handler(req, res);
//   };
// };
const auth = (handler) => (req, res) => {
  req.cookies["authToken"] = "hjskhfkjhsjkdhklsjdlkmnqjoiu029u3908092";
  if (req.cookies && req.cookies["authToken"]) return handler(req, res);
  return res.status(400).json({ message: "token not found" });
};

export default auth;
