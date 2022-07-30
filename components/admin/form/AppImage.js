import Image from "next/image";
import React, { useState } from "react";

import { f2 as ff } from "../../../styles/variables.module.scss";

export default function AppImage({
  id,
  deleteEvent,
  image,
  dimension = { width: "200px", height: "180px" },
}) {
  const [imageHover, setImageHover] = useState(-1);
  const [isTrashHover, setisTrashHover] = useState(false);
  return (
    <div
      className={`image-container ${id == imageHover && "animate-image"}`}
      onMouseOver={() => setImageHover(id)}
      onMouseOut={() => setImageHover(-1)}
    >
      <Image alt="car-" src={image} layout="fill" priority />
      {id == imageHover && (
        <div className="trash">
          <i
            className="fas fa-trash fa-lg trash-hover"
            onMouseOver={() => setisTrashHover(true)}
            onMouseOut={() => setisTrashHover(false)}
            onClick={() => deleteEvent(id)}
          />
        </div>
      )}

      <style jsx>
        {`
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
            min-width: ${dimension.width};
            min-height: ${dimension.height};
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
        `}
      </style>
    </div>
  );
}
