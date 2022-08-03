import React from "react";

import { f2 as ff, secondary } from "../../../styles/variables.module.scss";
import {
  body,
  fuel,
  vehicles,
  doors,
  steering,
} from "../../../utils/selectOptions";
import AppInput from "./AppInput";
import AppSelect from "./AppSelect";
import AppTextArea from "./AppTextArea";

export default function Stage2({ state, setState }) {
  const onChangeEvent = ({ target }) => {
    //initial object data
    setState({
      ...state,
      features: {
        ...state["features"],
        [`${target.name}`]: target.value,
      },
    });
  };

  const { errors, features } = state; //

  return (
    <section className="px-4">
      <header className="my-4">
        <h4 className="font-weight-light">
          <i className="fas fa-tags"></i> Features:
        </h4>
      </header>
      <div className="py-3">
        <div className="form-row">
          <div className="col-6 col-lg-3">
            <AppSelect
              name="vehicle_type"
              label="Vehicle Type"
              list={vehicles}
              value={features?.vehicle_type}
              error={errors?.features?.vehicle_type}
              onChange={onChangeEvent}
            />
          </div>

          <div className="col-6 col-lg-3">
            <AppSelect
              name="body_style"
              label="Body Style"
              list={body}
              value={features?.body_style}
              error={errors?.features?.body_style}
              onChange={onChangeEvent}
            />
          </div>

          <div className="col-6 col-lg-3">
            <AppInput
              name="mileage"
              label="Mileage"
              type="number"
              optional
              value={features?.mileage}
              error={errors?.features?.mileage}
              onChange={onChangeEvent}
            />
          </div>

          <div className="col-6 col-lg-3">
            <AppInput
              name="numberOfCylinders"
              label="Number of Cylinders"
              type="number"
              optional
              value={features?.numberOfCylinders}
              error={errors?.features?.numberOfCylinders}
              onChange={onChangeEvent}
            />
          </div>
        </div>
        <div className="form-row">
          <div className="col-6  col-lg-3">
            <AppSelect
              name="fuel"
              label="Fuel"
              list={fuel}
              value={features?.fuel}
              error={errors?.features?.fuel}
              onChange={onChangeEvent}
            />
          </div>
          <div className="col-6 col-lg-3">
            <AppInput
              name="yearOfModel"
              label="Year of Model"
              type="number"
              value={features?.yearOfModel}
              error={errors?.features?.yearOfModel}
              onChange={onChangeEvent}
            />
          </div>
          <div className="col-6  col-lg-3">
            <AppSelect
              name="doors"
              label="Doors"
              list={doors}
              value={features?.doors}
              error={errors?.features?.doors}
              onChange={onChangeEvent}
            />
          </div>
          <div className="col-6  col-lg-3">
            <AppSelect
              name="steering"
              label="Steering"
              list={steering}
              value={features?.steering}
              error={errors?.features?.steering}
              onChange={onChangeEvent}
            />
          </div>
        </div>
        <AppTextArea
          name="features"
          label="features"
          placeholder="Features"
          onChange={onChangeEvent}
          value={features?.features}
          error={errors?.features?.features}
        />
      </div>

      <style jsx>
        {`
          header,
          h4 {
            font-family: ${ff};
            color: ${secondary};
          }
          header {
            border-bottom: 1px solid ${secondary};
          }

          label,
          div,
          p {
            font-family: ${ff} !important;
          }
          label {
            font-size: 16px;
            font-weight: 600;
          }
          input,
          textarea,
          select,
          option {
            font-size: 18px;
            font-weight: 400;
          }
        `}
      </style>
    </section>
  );
}
