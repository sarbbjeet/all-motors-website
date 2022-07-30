import React from "react";
import { f2 as ff, secondary } from "../../../styles/variables.module.scss";
import AppImage from "./AppImage";

export default function DropImages({ files, setFiles }) {
  const storeDragImages = (new_files) => {
    const convertFiles = [];
    if (new_files?.length > 0) {
      for (let f of new_files) {
        convertFiles.push(URL.createObjectURL(f)); //URL.createObjectURL
      }
      //setFiles({dataURL:[...files, ...convertFiles]})
      setFiles([...files, ...convertFiles]);
    }
  };
  return (
    <div className="main-waraper">
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
      <style jsx>{`
        .drop-wrapper {
          border: 2px dotted #aaa;
          width: 100%;
          height: 400px;
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
        input {
          font-family: ${ff};
        }
      `}</style>
    </div>
  );
}
