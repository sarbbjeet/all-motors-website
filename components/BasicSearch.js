import React, { useState } from "react";
import styles from "./BasicSearch.module.css";

export default function BasicSearch({ closeBtn = () => {} }) {
  const cars = {
    BMW: ["bl-21", "ay90", "c56"],
    Audi: ["S01", "S02", "S12"],
    Ford: ["figo", "ford 3600"],
  };
  const [selectedCar, setSelectedCar] = useState("");

  return (
    <form
      className="row d-flex justify-content-center px-4"
      style={{ marginTop: "100px" }}
    >
      <div className="row col-12 align-Items-center">
        {/* <span className="col-6 mt-auto">Refine Search</span> */}
        <div className="col-12 d-flex justify-content-end p-0">
          <button
            className="btn btn-secondary rounded"
            onClick={() => closeBtn(false)}
          >
            <i className="fa fa-window-close" aria-hidden="true"></i> close
          </button>
        </div>
      </div>
      <div className="col-12 p-0">
        <p className={`${styles.title} text-center p-0 m-0`}>
          Search for a vehical
        </p>
      </div>
      <div className="col-sm-6 py-2">
        <label className={`${styles.label} p-0 w-100 m-0`} htmlFor="make">
          Choose a make:
        </label>
        <select
          id="make"
          name="make"
          className={styles.select}
          onChange={({ target: { value } }) => setSelectedCar(value)}
        >
          <option>Any make</option>
          {Object.keys(cars).map((car, i) => (
            <option key={i} value={car}>
              {car}
            </option>
          ))}
        </select>
      </div>
      <div className="col-sm-6 py-2">
        <label className={`${styles.label} p-0 w-100 m-0`} htmlFor="model">
          Choose a model:
        </label>
        <select
          className={styles.select}
          id="model"
          name="model"
          disabled={cars[selectedCar] ? false : true}
        >
          <option>Any model</option>
          {cars[selectedCar]?.map((model, i) => (
            <option value={model} key={i}>
              {model}
            </option>
          ))}
        </select>
      </div>

      <div className="col-sm-6 py-2 mt-4">
        <button className={styles.btn}>
          <i className="fas fa-search"></i> Search
        </button>
      </div>

      {/* <div>
        <label for="model">Choose a model:</label>
        <select id="make" name="make"></select>
      </div>
      <div>
        <button>
          <i class="fas fa-search"></i>Search
        </button>
      </div> */}
    </form>
  );
}
