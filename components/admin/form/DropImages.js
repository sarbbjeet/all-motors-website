import React, { useEffect, useState } from "react";
import { f2 as ff, secondary } from "../../../styles/variables.module.scss";
import AppImage from "./AppImage";

export default function DropImages({ files, setFiles }) {
  const [loading, setLoading] = useState(false);
  const storeDragImages = (new_files) => {
    if (new_files?.length > 0) {
      setLoading(true);
      const dropImage = [];
      const imagesEvent = [];
      let WIDTH = 1080;
      //let image = document.createElement("img");
      for (let f of new_files) {
        let image = document.createElement("img");
        image.src = URL?.createObjectURL(f);
        imagesEvent.push(image);
      }
      for (let f2 of imagesEvent) {
        f2.addEventListener("load", (e) => {
          let canvas = document.createElement("canvas");
          let ratio = WIDTH / e.target.width;
          canvas.width = WIDTH;
          canvas.height = e.target.height * ratio;
          const context = canvas.getContext("2d");
          context.drawImage(f2, 0, 0, canvas.width, canvas.height);
          const newImageUrl = context.canvas.toDataURL("image/jpeg", 90);
          dropImage.push(newImageUrl);
          //remove element
          f2.remove();
          if (dropImage.length == new_files.length) {
            setFiles([...files, ...dropImage]);
            setLoading(false);
          }
        });
      }
    }
  };

  return (
    <div className="main-waraper position-relative">
      {loading && (
        <div className="spinner">
          <span>
            <i className="fas fa-spinner"></i> wait to upload ...
          </span>
        </div>
      )}
      {!loading && (
        <div
          className="drop-wrapper"
          id="drop-wrapper"
          onChange={(e) => {
            e.preventDefault();
            e.stopPropagation();
            storeDragImages(e.target.files);
          }}
          onDrop={(e) => {
            e.preventDefault();
            e.stopPropagation();
            storeDragImages(e.dataTransfer.files);
          }}
        >
          <div className="drop-msg">
            <div className="drag-icon-cph">
              <i className="fas fa-cloud-upload-alt fa-4x"></i>
            </div>
            <p htmlFor="image">
              Click here or drag images here <br />
              to upload
            </p>
            <input
              id="image"
              name="image"
              type="file"
              multiple="multiple"
              accept="image/png, image/jpeg, image/jpg"
            />
          </div>
          <div className="render-images">
            {files?.length > 0 &&
              files.map((file, i) => (
                <AppImage
                  key={i}
                  id={i}
                  image={file}
                  deleteEvent={(id) =>
                    setFiles(files.filter((_f) => files.indexOf(_f) !== id))
                  }
                />
              ))}
          </div>
        </div>
      )}
      <style jsx>{`
        .main-waraper {
          height: 400px;
          border: 2px dotted #aaa;
        }
        .drop-wrapper {
          // border: 2px dotted #aaa;
          width: 100%;
          height: 100%;
          position: relative !important;
        }
        #image {
          position: absolute !important;
          z-index: 10;
          border: 1px solid red;
          width: 100% !important;
          height: 100% !important;
          top: 0;
          left: 0;
          opacity: 0;
        }

        .image_file {
          border: 2px solid white;
          margin: 20px;
        }

        .render-images {
          padding-bottom: 1rem;
          bottom: 0;
          position: absolute;
          width: 100%;
          overflow: auto !important;
          z-index: 100;
          display: flex;
          flex: 0 0 100%;
          //  border: 1px solid #eee;
        }

        .drop-msg {
          text-align: center;
          margin: 20px 0;
          font-size: 18px;
        }
        p,
        label,
        div,
        h3,
        span,
        input {
          font-family: ${ff};
        }
        .spinner {
          position: absolute;
          background-color: #eee;
          width: 100%;
          zindex: 200;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .spinner span {
          font-size: 1.2rem;
        }
      `}</style>
    </div>
  );
}
