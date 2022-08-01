import React from "react";
import { f2 as ff } from "../../../styles/variables.module.scss";

export default function AppInput({
  label,
  name,
  error,
  required = true,
  optional = false,
  ...props
}) {
  return (
    <div className="form-group">
      <label htmlFor={name} className="text-capitalize label w-100 p-0 m-0 ">
        {label} {optional && <small>(optional)</small>}
      </label>
      <input
        id={name}
        name={name}
        autoComplete="off"
        {...props}
        className="form-control text-lowercase"
        required={required}
      />
      <span className={`text-danger ${!error && "d-none"}`}>{error}</span>

      <style jsx>
        {`
          section,
          label,
          div,
          p {
            font-size: 16px;
            font-weight: 600;
            font-family: ${ff};
          }
          span {
            font-family: ${ff};
            font-size: 16px;
            font-weight: 500;
            margin: 0;
            padding: 0;
            border-color: ${error && "#cc0000"};
          }
          input {
            border-color: ${error && "red"};
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
