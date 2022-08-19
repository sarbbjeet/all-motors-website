import React, { useState } from "react";
import { f2 as ff, secondary } from "../../../styles/variables.module.scss";
import AppInput from "./AppInput";
import AppSelect from "./AppSelect";
import AppTextArea from "./AppTextArea";
import { color, transmission, make } from "../../../utils/selectOptions";

export default function Stage1({ state, setState }) {
  const onChangeEvent = ({ target }) => {
    //initial object data
    setState({
      ...state,
      initial: { ...state["initial"], [`${target.name}`]: target.value },
    });
  };

  const { errors, initial } = state; //
  return (
    <section className="px-4 position-relative">
      <header className="border-bottom my-4">
        <h4 className="font-weight-light">
          <i className="fas fa-laptop-house"></i> Basic Setup:
        </h4>
      </header>

      <div className="row justify-content-center">
        <div
          className={`col-11 image_container border col-md-5 p-2 mb-5 mb-lg-2 ${
            errors?.initial?.image && "border-danger"
          }`}
        >
          <input
            className="w-100 h-100 p-0 m-0 position-relative placeholder"
            type="file"
            id="img"
            name="img"
            onChange={(e) => {
              onChangeEvent({
                target: {
                  name: "image",
                  value: URL?.createObjectURL(e?.target?.files[0]),
                },
              });
              //setImage_file(URL.createObjectURL(e.target.files[0]));
            }}
            accept="image/png, image/jpeg, image/jpg"
          />
          <label className="d-block w-100 text-muted text_small text-center">
            Cover: (JPG 1280x628px)
          </label>
        </div>

        <div className="row col-12 col-md-7">
          <div className="col-md-6 col-12">
            <AppSelect
              name="make"
              label="make"
              error={errors?.initial?.make}
              list={make}
              onChange={onChangeEvent}
              value={state?.initial?.make}
            />
          </div>

          <div className="col-md-6 col-12">
            <AppInput
              name="model"
              label="model"
              error={errors?.initial?.model}
              onChange={onChangeEvent}
              placeholder="model of your vehicle"
              value={initial?.model}
            />
          </div>

          <div className="col-md-4 col-12">
            <AppInput
              name="title"
              label="title"
              onChange={onChangeEvent}
              placeholder="vehicle name"
              value={initial?.title}
              error={errors?.initial?.title}
            />
          </div>
          <div className="col-md-4 col-12">
            <AppSelect
              name="color"
              label="color"
              list={color}
              onChange={onChangeEvent}
              value={initial?.color}
              error={errors?.initial?.color}
            />
          </div>

          <div className="col-md-4 col-12">
            <AppInput
              name="engine_size"
              label="Engine Size"
              onChange={onChangeEvent}
              placeholder="2 l"
              value={initial?.engine_size}
              error={errors?.initial?.engine_size}
            />
          </div>

          <div className="col-12 col-md-6 col-lg-4">
            <AppSelect
              name="transmission"
              label="Transmission"
              list={transmission}
              onChange={onChangeEvent}
              value={initial?.transmission}
              error={errors?.initial?.transmission}
            />
          </div>

          <div className="col-12 col-md-6 col-lg-4">
            <AppInput
              name="registration"
              label="Registration"
              onChange={onChangeEvent}
              placeholder="679632"
              value={initial?.registration}
              error={errors?.initial?.registration}
            />
          </div>
          <div
            style={{ whiteSpace: "nowrap" }}
            className="col-12 col-lg-4 mb-4"
          >
            <AppInput
              name="previous_owners"
              label="Previous Owners"
              type="number"
              onChange={onChangeEvent}
              placeholder="2"
              min="0"
              max="10"
              value={initial?.previous_owners}
              error={errors?.initial?.previous_owners}
            />
          </div>
        </div>

        {/* <div className="col-12 my-3 px-4">
          <AppTextArea
            name="description"
            label="Description"
            placeholder="description"
            onChange={onChangeEvent}
            value={initial?.description}
            error={errors?.initial?.description}
          />
        </div> */}
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

          span {
            font-size: 18px;
            font-weight: 400;
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
            background: url(${initial?.image?.startsWith("/")
                ? `/store/${initial?.image}`
                : `${initial?.image || "/images/no-image.jpg"}`})
              no-repeat center;
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
