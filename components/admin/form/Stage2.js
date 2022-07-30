import React from "react";

import { f2 as ff, secondary } from "../../../styles/variables.module.scss";

export default function Stage2() {
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
            <div className="form-group">
              <label htmlFor="Vehicles_type">Vehicles Type:</label>
              <select
                name="Vehicles_type"
                id="Vehicles_type"
                className="form-control"
                required
              >
                <option value="" selected="selected">
                  Vehicles type:
                </option>
                <option value="car">Car</option>
                <option value="pickup">Pickup</option>
                <option value="truck">Truck</option>
              </select>
            </div>
          </div>

          <div className="col-6 col-lg-3">
            <div className="form-group">
              <label htmlFor="Vehicles_body">Body Style</label>
              <select
                name="Vehicles_body"
                id="Vehicles_body"
                className="form-control"
                required
              >
                <option value="" selected="selected">
                  Select bodystyle
                </option>
                <option value="convertible">Convertible</option>
                <option value="coupe">Coupe</option>
                <option value="pick up">Pick Up</option>
                <option value="estate">Estate</option>
                <option value="hatchback">Hatchback</option>
                <option value="saloon">Saloon</option>
              </select>
            </div>
          </div>
          <div className="col-6  col-lg-3">
            <div className="form-group">
              <label htmlFor="Vehicles_cylinder">
                Mileage<small className="text-success">(Optional)</small>
                {/* <i
                  className="far fa-question-circle text-warning"
                  data-toggle="popover"
                  data-placement="top"
                  data-content="!"
                ></i> */}
              </label>
              <input
                placeholder="10520"
                type="number"
                min="0"
                max="999999"
                name="Vehicles_mileage"
                id="Vehicles_mileage"
                className="form-control"
              />
            </div>
          </div>

          <div className="col-6 col-lg-3">
            <div className="form-group">
              <label htmlFor="Vehicles_cylinder">
                Number of cylinder
                <small className="text-success">(Optional)</small>
                {/* <i
                  className="far fa-question-circle text-warning"
                  data-toggle="popover"
                  data-placement="top"
                  data-content="Separate the Features with a comma!"
                ></i> */}
              </label>
              <input
                placeholder="4"
                type="number"
                min="1"
                max="99"
                name="Vehicles_cylinder"
                id="Vehicles_cylinder"
                className="form-control"
              />
            </div>
          </div>
        </div>
        <div className="form-row">
          <div className="col-6  col-lg-3">
            <div className="form-group">
              <label htmlFor="Vehicles_fuel">Fuel</label>
              <select
                name="Vehicles_fuel"
                id="Vehicles_fuel"
                className="form-control"
                required
              >
                <option value="" selected="selected">
                  Fuel
                </option>
                <option value="gasoline">Gasoline</option>
                <option value="ethanol">Ethanol</option>
                <option value="flex">Flex</option>
                <option value="hybrid">Hybrid</option>
              </select>
            </div>
          </div>
          <div className="col-6 col-lg-3">
            <div className="form-group">
              <label htmlFor="Vehicles_year_model">Year of Model</label>
              <input
                placeholder="2019"
                type="number"
                min="1950"
                max="2022"
                name="Vehicles_year_model"
                id="Vehicles_year_model"
                className="form-control"
                required
              />
            </div>
          </div>
          <div className="col-6  col-lg-3">
            <div className="form-group">
              <label className="Vehicles_doors">Doors:</label>
              <select
                name="Vehicles_type"
                id="Vehicles_type"
                className="form-control"
                required
              >
                <option value="" selected="selected">
                  Number of doors
                </option>
                <option value="2">2 Doors</option>
                <option value="4">4 Doors</option>
                <option value="5">5 Doors</option>
              </select>
            </div>
          </div>
          <div className="col-6  col-lg-3">
            <div className="form-group">
              <label htmlFor="Vehicles_steerin">Steering</label>
              <select
                name="Vehicles_steerin"
                id="Vehicles_steerin"
                className="form-control"
                required
              >
                <option value="" selected="selected">
                  Steering
                </option>
                <option value="hydraulic">Hydraulic steering</option>
                <option value="mecanic">Mecanic steering</option>
                <option value="electric">Electric steering</option>
              </select>
            </div>
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="Vehicles_particulars">
            Features:
            <i
              className="far fa-question-circle text-warning"
              data-toggle="popover"
              data-placement="top"
              data-content="Separate the Features with a comma!"
            ></i>
          </label>
          <textarea
            type="text"
            name="Vehicles_particulars"
            id="Vehicles_particulars"
            className="form-control"
            rows="5"
            placeholder="Features:"
          />
        </div>
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
