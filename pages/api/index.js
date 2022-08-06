export default function handler(req, res) {
  console.log("method=", req.method);
  if (req.method === "GET") {
    return res.json({ messgae: "hello" });
  } else if (req.method === "POST") {
    return res.json({ outpit: req.body });
  }
}
