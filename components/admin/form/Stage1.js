import React, { useState } from "react";
import { f2 as ff, secondary } from "../../../styles/variables.module.scss";
import getDeviceSize from "../../../utils/getDeviceSize";
export default function Stage1({
  make_list = ["BMW", "audi"],
  color_list = ["red", "green", "blue", "white", "black", "gray"],
  transmission_list = ["manual", "automatic", "semi auto"],
  stageName = "search",
}) {
  const [image_file, setImage_file] = useState("/images/no-image.jpg");
  return (
    <section className="px-4 position-relative">
      <header className="border-bottom my-4">
        <h4 className="font-weight-light">
          <i className="fas fa-laptop-house"></i> Basic Setup:
        </h4>
      </header>
      <div className="row justify-content-center">
        <div className="col-11 image_container border col-md-5 p-2 mb-5 mb-lg-2">
          <input
            className="w-100 h-100 p-0 m-0 position-relative placeholder"
            type="file"
            id="img"
            name="img"
            onChange={(e) => {
              setImage_file(URL.createObjectURL(e.target.files[0]));
              /*
                   //another way to display image
                 const fr = new FileReader();
                  fr.addEventListener("load", () => {
                 setImage_file(fr.result);
                  });
                  fr.readAsDataURL(e.target.files[0]);
                  */
            }}
            accept="image/png, image/jpeg, image/jpg"
          />
          <label className="d-block w-100 text-muted text_small text-center">
            Cover: (JPG 1280x628px)
          </label>
        </div>
        <div className="row col-12 col-md-7">
          <div className="form-group col-md-6 col-12">
            <label
              htmlFor="make"
              className="text-capitalize label w-100 p-0 m-0 "
            >
              make:
            </label>
            <select
              id="make"
              className="form-control text-uppercase"
              placeholder="make of the vehicle"
              required
            >
              {make_list?.map((m, i) => (
                <option key={i} value={m}>
                  {m}
                </option>
              ))}
            </select>
          </div>

          <div className="form-group col-12 col-md-6">
            <label
              htmlFor="model"
              className="text-capitalize label w-100 p-0 m-0 "
            >
              model:
            </label>
            <input
              id="model"
              className="form-control"
              placeholder="model of the vehicle"
              required
            />
          </div>

          <div className="form-group col-md-6 col-12">
            <label
              htmlFor="color"
              className="text-capitalize label w-100 p-0 m-0 "
            >
              color:
            </label>
            <select
              id="color"
              className="form-control text-lowercase"
              placeholder="color of the vehicle"
              required
            >
              {color_list?.map((c, i) => (
                <option key={i} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </div>

          <div className="form-group col-md-6 col-12">
            <label
              htmlFor="engine_size"
              className="text-capitalize label w-100 p-0 m-0 "
            >
              engine size:
            </label>
            <input
              id="engine_size"
              className="form-control text-lowercase"
              placeholder="2 l"
              required
            />
          </div>

          <div className="form-group col-12 col-md-6 col-lg-4">
            <label
              htmlFor="transmission"
              className="text-capitalize label w-100 p-0 m-0 "
            >
              transmission:
            </label>
            <select
              id="transmission"
              className="form-control text-lowercase"
              placeholder="color of the vehicle"
              required
            >
              {transmission_list?.map((t, i) => (
                <option key={i} value={t}>
                  {t}
                </option>
              ))}
            </select>
          </div>

          <div className="form-group col-12 col-md-6 col-lg-4">
            <label
              htmlFor="reg"
              className="text-capitalize label w-100 p-0 m-0 "
            >
              Registration:
            </label>
            <input
              id="reg"
              className="form-control text-lowercase"
              placeholder="67267879"
              required
            />
          </div>
          <div
            style={{ whiteSpace: "nowrap" }}
            className="form-group col-12 col-lg-4"
          >
            <label
              htmlFor="reg"
              className="text-capitalize label w-100 p-0 m-0 "
            >
              Previous Owners:
            </label>
            <input
              id="reg"
              type="number"
              min="0"
              max="10"
              className="form-control text-lowercase"
              placeholder="2"
              required
            />
          </div>
        </div>
        <div className="col-12 my-3 px-4 ">
          <label htmlFor="description" className="m-0 text-capitalize">
            description<small className="text-success">(Optional)</small>
            <i
              className="far fa-question-circle text-warning"
              data-toggle="popover"
              data-placement="top"
              data-content="details about the vehicle!"
            ></i>
          </label>
          <textarea
            id="description"
            type="text"
            rows="5"
            className="form-control"
            placeholder="description"
          />
        </div>
      </div>
      <style jsx>
        {`
          section,
          label,
          div,
          p {
            font-size: 20px;
            font-weight: 500;
            font-family: ${ff};
          }
          h4 {
            font-family: ${ff};
            color: ${secondary}!important;
          }

          header {
            border-bottom: 1px solid ${secondary}!important;
          }
          textarea,
          input {
            font-size: 18px;
          }

          button {
            outline: none !important;
            width: 100px;
          }
          #img {
            cursor: pointer;
          }
          #img:before {
            content: "";
            width: 100%;
            height: 100%;
            background: url(${image_file}) no-repeat center;
            background-size: cover;
            // position: absolute;
            display: inline-block;
          }

          .image_container {
            height: 270px;
          }
        `}
      </style>
    </section>
  );
}
