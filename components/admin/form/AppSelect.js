import React from "react";
import { f2 as ff } from "../../../styles/variables.module.scss";

export default function AppSelect({
  label,
  name,
  error,
  required = true,
  list,
  ...props
}) {
  return (
    <div className="form-group">
      <label htmlFor={name} className="text-capitalize label w-100 p-0 m-0 ">
        {label}
      </label>
      <select
        id={name}
        name={name}
        className="form-control text-lowercase"
        required={required}
        {...props}
      >
        <option value="">Select {name}</option>
        {list?.map((m, i) => (
          <option key={i} value={m}>
            {m}
          </option>
        ))}
      </select>
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
          select {
            border-color: ${error && "#cc0000"};
            font-size: 16px;
          }
          span {
            font-size: 16px;
            font-weight: 500;
            font-family: ${ff};
          }
        `}
      </style>
    </div>
  );
}
