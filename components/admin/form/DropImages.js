import Image from "next/image";
import Script from "next/script";
import React, { useEffect, useRef, useState } from "react";
import { f2 as ff, secondary } from "../../../styles/variables.module.scss";

export default function DropImages({ files, setFiles }) {
  const [imageHover, setImageHover] = useState(-1);
  const [isTrashHover, setisTrashHover] = useState(false);

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
              <div
                key={i}
                className={`image-container ${
                  i == imageHover && "animate-image"
                }`}
                onMouseOver={() => setImageHover(i)}
                onMouseOut={() => setImageHover(-1)}
              >
                <Image src={file} layout="fill" />
                {i == imageHover && (
                  <div className="trash">
                    <i
                      className="fas fa-trash fa-lg trash-hover"
                      onMouseOver={() => setisTrashHover(true)}
                      onMouseOut={() => setisTrashHover(false)}
                      onClick={() => {
                        setFiles(files.filter((_f) => files.indexOf(_f) !== i));
                      }}
                    />
                  </div>
                )}
              </div>
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

        .trash {
          position: absolute !important;
          z-index: 101;
          width: 100%;
          height: 100%;
          color: red;
          align-items: center;
          justify-content: center;
          background-color: rgba(255, 255, 255, 0.6);
          display: flex;
          transition: all 0.5s;
        }
        .animate-image {
          box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.6);
          transform: rotate(-2deg);
        }

        .trash-hover {
          transition: all 0.5s;
          cursor: pointer;
          transform: ${isTrashHover && "scale(1.4)"};
        }

        .image-container {
          position: relative;
          min-width: 200px;
          min-height: 180px;
          margin: 0.3rem;
          border: 1px solid #ddd;
          transition: all 0.5s;
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
      <Script>
        {`
            //  var drop_wrapper = document.querySelector('#drop-wrapper');
            //   drop_wrapper.addEventListener('drop',(e)=>{
            //    e.stopPropagation();
            //      e.preventDefault();
            //      console.log(e.target);
            //   });

              `}
      </Script>
    </div>
  );
}
