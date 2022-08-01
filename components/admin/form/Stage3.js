import React from "react";
import { f1 as ff, secondary } from "../../../styles/variables.module.scss";
import AppInput from "./AppInput";

export default function Stage3({ state, setState }) {
  const onChangeEvent = ({ target }) => {
    //initial object data
    setState({
      ...state,
      business: { ...state["business"], [`${target.name}`]: target.value },
    });
  };

  const { errors, business } = state; //

  return (
    <section className="px-4 pb-2">
      <header className="my-4">
        <h3 className="font-weight-light">
          <i className="far fa-money-bill-alt"></i> Business:
        </h3>
      </header>

      <div className="form-row" style={{ whiteSpace: "nowrap" }}>
        <div className="form-group col-12 col-sm-6 col-md-4">
          <AppInput
            name="price"
            label="£ Price"
            placeholder="price"
            optional
            type="number"
            onChange={onChangeEvent}
            error={errors?.business?.price}
            value={business?.price}
          />
        </div>
        <div className="form-group col-12 col-sm-6 col-md-4">
          <AppInput
            name="finance_month"
            label="£ Finance/month"
            placeholder="finance price"
            type="number"
            optional
            onChange={onChangeEvent}
            error={errors?.business?.finance_month}
            value={business?.finance_month}
          />
        </div>

        <div className="form-group col-12 col-sm-6 col-md-4">
          <AppInput
            name="insurance_group"
            label="Insurance Group"
            placeholder="insurance group"
            type="number"
            optional
            onChange={onChangeEvent}
            error={errors?.business?.insurance_group}
            value={business?.insurance_group}
          />
        </div>

        <div className="form-group col-12 col-sm-6 col-md-4">
          <AppInput
            name="months12_tax"
            label="12 months tax"
            placeholder="12 months tax"
            type="number"
            optional
            onChange={onChangeEvent}
            error={errors?.business?.months12_tax}
            value={business?.months12_tax}
          />
        </div>

        <div className="form-group col-12 col-sm-6 col-md-4">
          <AppInput
            name="months6_tax"
            label="6 months tax"
            placeholder="6 months tax"
            type="number"
            optional
            onChange={onChangeEvent}
            error={errors?.business?.months6_tax}
            value={business?.months6_tax}
          />
        </div>
      </div>

      <style jsx>
        {`
          header,
          label,
          input,
          select,
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
        `}
      </style>
    </section>
  );
}
