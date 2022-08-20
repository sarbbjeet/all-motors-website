import multer from "multer";
const storagePath = process.env.STORAGE_PATH || "public/uploads";
const tempStoragePath = storagePath + "temp";
import fs from "fs";
import compressImages from "compress-images";

//compress image or images
const compress_template = (filePath, compressedFilePath, callback) => {
  const compression = 40;
  compressImages(
    filePath,
    compressedFilePath,
    { compress_force: false, statistic: true, autoupdate: true },
    false,
    { jpg: { engine: "mozjpeg", command: ["-quality", compression] } },
    {
      png: {
        engine: "pngquant",
        command: ["--quality=" + compression + "-" + compression, "-o"],
      },
    },
    { svg: { engine: "svgo", command: "--multipass" } },
    {
      gif: {
        engine: "gifsicle",
        command: ["--colors", "64", "--use-col=web"],
      },
    },
    async function (error, completed, statistic) {
      callback(error, completed, statistic);
    }
  );
};

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
const uploadImage = async (
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
          if (multiple) {
            // const files = await new Promise((_resolve) => {
            let files = [];
            for (let file of req.files) {
              compress_template(
                file?.path,
                storagePath,
                (error, completed, statistic) => {
                  files.push(statistic?.path_out_new);
                  //remove original file
                  fs.unlinkSync(file?.path);
                  if (req.files.length == files.length) {
                    resolve({
                      ...req.body,
                      [`${fdataKey}`]: files,
                    });
                  }
                }
              );
            }
          } else {
            compress_template(
              req.file?.path,
              storagePath,
              (error, completed, statistic) => {
                //remove original file
                fs.unlinkSync(req.file?.path);
                resolve({
                  ...req.body,
                  [`${fdataKey}`]: statistic?.path_out_new,
                });
              }
            );
          }
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

export default uploadImage;
