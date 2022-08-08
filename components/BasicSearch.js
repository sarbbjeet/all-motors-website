import React, { useEffect, useState } from "react";
import styles from "../styles/BasicSearch.module.scss";
import { useRouter } from "next/router";
// import { useSelector, useDispatch } from "react-redux";
import {
  f2 as ff,
  secondary,
  secondaryLight,
} from "../styles/variables.module.scss";
import axios from "axios";

import {
  fCars,
  dropEvent,
  filterObj as filters,
} from "../utils/filterOptionsGroup";

export default function BasicSearch({ closeBtn = () => {} }) {
  const [vehicles, setVehicles] = useState([]);
  const router = useRouter();
  const [filteredVehicles, setFilteredVehicles] = useState(vehicles);

  useEffect(() => {
    // dispatch(changeFilterKey({ key: "make", value: "BMW" }));
    //dispatch(todoAdded({ id: 78, text: "gello" }));
    async function getVehicles() {
      const { data } = await axios.get("/api/vehicles");
      const vehicles_data = data?.data;
      const _vehicles = [
        ...vehicles_data.map((vehicle) => ({
          ...vehicle,
          doors: vehicle?.features?.doors,
          fuel: vehicle?.features?.fuel,
        })),
      ];
      setVehicles(_vehicles);
      setOptionsObj(fCars(_vehicles));
    }
    getVehicles();
  }, []);
  const [optionsObj, setOptionsObj] = useState(fCars(vehicles));

  const getFilteredVehicles = () => {
    setFilteredVehicles(
      vehicles.filter((d) => {
        let found = true;
        filters?.forEach((c) => {
          if (found && c["value"] != null && d[`${c?.key}`] != c?.value)
            found = false;
        });
        return found;
      })
    );
  };

  return (
    <form
      className="row d-flex  px-4 overflow-auto"
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
      <div className="col-12 p-0 my-4">
        <p className={`${styles.title} text-center p-0 m-1`}>
          Search for a vehicle
        </p>
      </div>

      {filters.map((filter, i) => (
        <div key={i} className="select-wrapper col-sm-6 m-0 p-0 px-2">
          <select
            name={filter["key"]}
            onChange={({ target }) => {
              setOptionsObj(dropEvent(target, vehicles));
              getFilteredVehicles();
            }}
          >
            <option key="a">Any {filter["key"]}</option>
            {filter["key"] in optionsObj &&
              Object.keys(optionsObj[`${filter?.key}`]).map((k, i) => (
                <option key={i}>{`${k} (${
                  optionsObj[`${filter?.key}`][k]
                })`}</option>
              ))}
          </select>
        </div>
      ))}

      <div className="row col-12 justify-content-center mt-4">
        <button
          className="search col-sm-6"
          onClick={(e) => {
            e.preventDefault();
            router.push({
              pathname: "/vehicles/search",
            });
          }}
        >
          <i className="fas fa-search"></i> Search
        </button>
      </div>

      <style jsx>
        {`
          select {
            font-family: ${ff};
            font-size: 18px !important;
            font-weight: 500;
            margin: 5px 0;
            padding: 5px;
            border: none;
            width: 100%;
            border-radius: 5px;
          }

          .search {
            background-color: ${secondary};
            border: none;
            padding: 10px 0;
            color: white;
            border-radius: 5px;
          }
        `}
      </style>
    </form>
  );
}
