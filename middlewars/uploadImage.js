import multer from "multer";
const storagePath = process.env.STORAGE_PATH || "public/uploads";
import fs from "fs";
// middleware that process files uploaded in multipart/form-data format.
const upload = multer({
  storage: multer.diskStorage({
    destination: storagePath, //add timestamping with image name
    filename: (req, file, cb) =>
      cb(null, `${new Date().toISOString()}-${file.originalname}`),
  }),

  //apply filter on image extensions only .jpeg and png allowed
  fileFilter: (req, file, cb) => {
    if (file.mimetype === "image/jpeg" || file.mimetype === "image/png")
      cb(null, true);
    else cb(new Error("upload only png or jpeg image file"), false);
    //cb(null,false)
  },

  limits: { filename: 1024 * 1024 * 2 }, //only 2mb image size allowed to upload
});

const uploadImage = async (req, res, fdataKey = "image", validation) => {
  return new Promise((resolve) => {
    upload.single(fdataKey)(req, res, async (err) => {
      try {
        if (err instanceof multer.MulterError) return res.json({ error: err });
        else if (err)
          return res.json({ error: err?.message || "error to upload image" });
        //Everthing is fine
        await validation({ ...req.body });
        console.log(req.file);
        resolve({ ...req.body, [`${fdataKey}`]: req.file.path });
      } catch (err) {
        // remove file if error occured
        const path = req?.file?.path;
        if (path) fs.unlinkSync(path);
        return res.json({ error: err?.message || "error to upload image" });
      }
    });
  });
};

export default uploadImage;
