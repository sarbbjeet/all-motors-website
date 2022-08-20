import multer from "multer";
const storagePath = process.env.STORAGE_PATH || "public/uploads";
const tempStoragePath = storagePath + "temp";
import fs from "fs";
import { mkdir, rm } from "fs/promises";

import imagemin from "imagemin";
import imageminJpegtran from "imagemin-jpegtran";
import imageminPngquant from "imagemin-pngquant";
import imageminMozjpeg from "imagemin-mozjpeg";

// middleware that process files uploaded in multipart/form-data format.
const upload = multer({
  storage: multer.diskStorage({
    destination: tempStoragePath, //add timestamping with image name
    filename: (req, file, cb) =>
      cb(null, `${new Date().toISOString()}-${file.originalname}`),
  }),

  //apply filter on image extensions only .jpeg and png allowed
  fileFilter: (req, file, cb) => {
    if (
      file.mimetype === "image/jpeg" ||
      file.mimetype === "image/png" ||
      file.mimetype === "image/jpg"
    )
      cb(null, true);
    else cb(new Error("upload only png or jpeg image file"), false);
    //cb(null,false)
  },

  limits: { filename: 1024 * 1024 * 2 }, //only 2mb image size allowed to upload
});

//main function
const uploadImage1 = async (
  req,
  res,
  fdataKey = "image", //key of file or files
  validation = () => {}, //validation schema  function
  multiple = true //true-->upload multiple files and false-->single
) => {
  return new Promise((resolve) => {
    (multiple ? upload.array(fdataKey) : upload.single(fdataKey))(
      req,
      res,
      async (err) => {
        try {
          if (err instanceof multer.MulterError)
            return res.status(404).json({ error: err.message });
          else if (err)
            return res
              .status(404)
              .json({ error: err?.message || "error to upload image" });
          //Everthing is fine
          await validation({ ...req.body });
          const files = await imagemin([`${tempStoragePath}/*.{jpg,png}`], {
            destination: storagePath,
            plugins: [
              //imageminJpegtran({ quality: 50 }),
              imageminMozjpeg({ quality: 40 }),
              imageminPngquant({
                quality: [0.6, 0.8],
              }),
            ],
          });
          //remove folder
          await rm(tempStoragePath, { recursive: true });
          await mkdir(tempStoragePath);
          //fs.unlinkSync(`${tempStoragePath}/*.{jpeg,jpg,png}`); //remove folder
          console.log(files);
          resolve({
            ...req.body,
            [`${fdataKey}`]: multiple
              ? files.map((file) => file?.destinationPath)
              : files[0]?.destinationPath,
          });
        } catch (err) {
          // remove file if error occured
          const path = req?.file?.path;
          if (path) fs.unlinkSync(path);
          return res
            .status(404)
            .json({ error: err?.message || "error to upload image" });
        }
      }
    );
  });
};

export default uploadImage1;
