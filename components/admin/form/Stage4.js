import Image from "next/image";
import Script from "next/script";
import React, { useEffect, useState } from "react";
import { f1 as ff, secondary } from "../../../styles/variables.module.scss";
import DropImages from "./DropImages";

export default function Stage4() {
  const [ssr, setSSR] = useState(false);
  const [files, setFiles] = useState([]);
  useEffect(() => {
    setSSR(true);
  }, []);
  return (
    <section className="px-4 pb-5">
      <header className="my-4">
        <h3 className="font-weight-light">
          <i className="far fa-image"></i> Image Gallary:
        </h3>
      </header>
      <div className="pb-3">
        <div className="text-right pb-3">
          <button
            className="btn btn-outline-primary"
            type="button"
            data-toggle="collapse"
            data-target="#collapseDropzone"
            aria-expanded="false"
            aria-controls="collapseDropzone"
          >
            Add Images
          </button>
        </div>

        {ssr && (
          <div className="collapse slow_3s py-5" id="collapseDropzone">
            <form
              method="post"
              encType="multipart/form-data"
              action="/api/usedcars/gallery"
            >
              <DropImages files={files} setFiles={setFiles} />
              <button
                type="submit"
                onClick={async (e) => {
                  e.preventDefault();
                  //const obj = document.getElementById("image");
                  const formData = new FormData();
                  for (let file of files) {
                    //send multiple files with same key
                    formData.append("images", file);
                  }

                  const response = await fetch("/api/usedcars/gallery", {
                    method: "POST",
                    body: formData,
                    //   headers: {
                    //     "Content-Type": "application/json",
                    //   },
                  });
                  console.log(response);
                  //    const oReq = new XMLHttpRequest();
                  //    oReq.open("POST", "/api/usedcars/gallery", true);
                  //    oReq.onload = function (oEvent) {
                  //      if (oReq.status === 200) {
                  //        console.log("success..");
                  //      } else {
                  //        console.log("errror..");
                  //      }
                  //    };
                  //    oReq.send(_form);
                }}
                className="upload-btn btn btn-primary float-right"
              >
                Publish
              </button>
            </form>
          </div>
        )}
      </div>

      <div className="wrapper">
        <p style={{ margin: 0 }}>Published images</p>
        <div className="uploaded-images-wrapper">
          <div className="uploaded-images">
            {[
              1, 43, 23, 12, 1, 4, 6, 4, 2, 1, 1, 3, 5, 6, 7, 4, 2, 1, 2, 4, 3,
              4,
            ].map((img) => (
              <Image
                className="m-2"
                src="/images/no-image.jpg"
                width="340px"
                height="200px"
                objectFit="cover"
              />
            ))}
          </div>
        </div>
      </div>

      <style jsx>
        {`
          header,
          label,
          input,
          select,
          p,
          h3 {
            font-family: ${ff}!important;
          }
          label {
            font-size: 16px;
            font-weight: 500;
          }
          input,
          select {
            font-size: 16px;
            font-weight: 400;
          }
          header {
            border-bottom: 1px solid ${secondary};
          }
          h3 {
            color: ${secondary};
          }

          .uploaded-images-wrapper {
            width: 100%;
            min-height: 200px;
            max-height: 500px;
            overflow-x: hidden;
            overflow-y: auto;
            border: 2px dotted #aaa;
            margin: 1rem 0;
          }
          .uploaded-images {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
          }
          .upload-btn {
            padding: 5px;
            width: 150px;
            margin: 5px 0;
          }
        `}
      </style>

      <Script>
        {`
              $(document).ready(function () {
               Dropzone.autoDiscover = false;
               $(function () {

                   $(".dropzone").dropzone({

                       method: "post",
                       url: "_yourURL",
                       paramName: 'name',
                       uploadMultiple: true,
                       parallelUploads: 100,
                       maxFiles: 100,
                       acceptedFiles: ".png, .jpg, .jpeg",
                       init: function () {
                           this.on("complete", function () {});
                           this.on("sendingmultiple", function () {});
                           this.on("successmultiple", function (files, response) {});
                           this.on("errormultiple", function (files, response) {});
                       }

                   });

               });
           });
              `}
      </Script>
    </section>
  );
}
