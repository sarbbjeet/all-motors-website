import React from "react";
import { f2 as ff } from "../../../styles/variables.module.scss";

export default function AppTextArea({ name, label, error, ...props }) {
  return (
    <div>
      <label htmlFor="description" className="m-0 text-capitalize">
        {label}
        <small> (Optional)</small>
        <i
          className="far fa-question-circle text-warning"
          data-toggle="popover"
          data-placement="top"
          data-content="details about the vehicle!"
        ></i>
      </label>
      <textarea
        id={name}
        name={name}
        type="text"
        rows="5"
        className="form-control"
        {...props}
      />

      <span className={`text-danger ${!error && "d-none"}`}>{error}</span>

      <style jsx>
        {`
          label,
          p {
            font-size: 16px;
            font-weight: 600;
            font-family: ${ff};
          }
          textarea,
          input {
            font-family: ${ff};
            font-size: 18px;
            border-color: ${error && "red"};
          }

          span {
            font-size: 16px;
          }
          small {
            font-family: ${ff};
            color: #449922;
            font-size: 14px;
            font-weight: 500;
          }
        `}
      </style>
    </div>
  );
}
