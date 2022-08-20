import uploadImage from "../../../middlewars/uploadImage";

export default async function Handler(req, res) {
  if (req.method == "POST") {
    try {
      const response = await uploadImage(req, res, "image", () => {}, true);
      console.log("response=", response);
      return res.json({ message: "postive response" });
    } catch (err) {
      res.json({ error: err.message });
    }
  }
}

export const config = {
  api: {
    bodyParser: false, // Disallow body parsing, consume as stream
  },
};
