import React from "react";
import { f1 as ff, secondary } from "../../../styles/variables.module.scss";

export default function Stage3() {
  return (
    <section className="px-4 pb-2">
      <header className="my-4">
        <h3 className="font-weight-light">
          <i className="far fa-money-bill-alt"></i> Business:
        </h3>
      </header>

      <div className="form-row" style={{ whiteSpace: "nowrap" }}>
        <div className="form-group col-12 col-sm-6 col-md-4">
          <label htmlFor="Vehicles_price">
            £ Price
            <small className="text-success">(OPTIONAL)</small>
          </label>
          <input
            type="number"
            name="Vehicles_price"
            id="Vehicles_price"
            className="form-control form-control-lg formCurrency"
            placeholder="15000"
          />
        </div>
        <div className="form-group col-12 col-sm-6 col-md-4">
          <label htmlFor="Vehicles_finance">
            £ Finance/month <small className="text-success">(OPTIONAL)</small>
          </label>
          <input
            type="number"
            name="Vehicles_finance"
            id="Vehicles_finance"
            className="form-control form-control-lg formCurrency"
            placeholder="600"
          />
        </div>

        <div className="form-group col-12 col-sm-6 col-md-4">
          <label htmlFor="Vehicles_insurance" style={{ whiteSpace: "nowrap" }}>
            Insurance group <small className="text-success">(OPTIONAL)</small>
          </label>
          <input
            type="number"
            name="Vehicles_insurance"
            id="Vehicles_insurance"
            className="form-control form-control-lg"
            placeholder="0"
          />
        </div>

        <div className="form-group col-12 col-sm-6 col-md-4">
          <label htmlFor="Vehicles_12month_tax">
            £ 12-months tax<small className="text-success">(OPTIONAL)</small>
          </label>
          <input
            type="number"
            name="Vehicles_12month_tax"
            id="Vehicles_12month_tax"
            className="form-control form-control-lg"
            placeholder="120"
          />
        </div>

        <div className="form-group col-12 col-sm-6 col-md-4">
          <label htmlFor="Vehicles_6month_tax">
            £ 6-months tax<small className="text-success">(OPTIONAL)</small>
          </label>
          <input
            type="number"
            name="Vehicles_6month_tax"
            id="Vehicles_6month_tax"
            className="form-control form-control-lg"
            placeholder="60"
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
