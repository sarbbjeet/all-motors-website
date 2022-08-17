export default function handler(req, res) {
  if (req.method === "GET") {
    return res.json({ messgae: "hello" });
  } else if (req.method === "POST") {
    return res.json({ outpit: req.body });
  }
}
