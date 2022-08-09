import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
// import { useSelector, useDispatch } from "react-redux";
import { f2 as ff, secondary } from "../styles/variables.module.scss";
import axios from "axios";

import { useSelector, useDispatch } from "react-redux";
import { applyFilter, changeFilterKey } from "../store/slice/filtersSlice";

export default function AppFilterSelect({ filter, ...props }) {
  const [_vehicle, setVehicles] = useState([]);
  const router = useRouter();
  const dispatch = useDispatch();
  const { optionsGroup } = useSelector((state) => state.filters);
  useEffect(() => {
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
    }
    //getVehicles();
  }, []);
  return (
    <select
      {...props}
      name={filter?.key}
      onChange={({ target: { name, value } }) => {
        dispatch(changeFilterKey({ key: name, value }));
        dispatch(applyFilter());
      }}
      value={String(filter?.value)}
    >
      <option key="a" value="null">
        Any {filter?.key}
      </option>
      {filter?.key in optionsGroup &&
        Object.keys(optionsGroup[`${filter?.key}`]).map((k, i) => (
          <option key={i} value={k}>{`${k} (${
            optionsGroup[`${filter?.key}`][k]
          })`}</option>
        ))}

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
            border: 1px solid #ccc;
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
    </select>
  );
}
