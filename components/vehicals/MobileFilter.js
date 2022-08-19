import { useRouter } from "next/router";
import AppFilterSelect from "../AppFilterSelect";
import React, { useState } from "react";
import {
  f2 as ff,
  primary,
  primaryLight,
} from "../../styles/variables.module.scss";
import { useSelector } from "react-redux";

export default function MobileFilter({ hidden = true, setHidden }) {
  const { filterKeysValues } = useSelector((state) => state.filters);
  const router = useRouter();
  return (
    <div
      className={`d-lg-none ${hidden ? "d-none" : ""}`}
      style={{
        width: "100%",
        height: "200%",
        position: "fixed",
        zIndex: 102,
        backgroundColor: "#eee",
        top: 0,
        left: 0,
      }}
    >
      <div
        className="row d-flex  px-4 overflow-auto"
        style={{ marginTop: "100px" }}
      >
        <div className="col-12 p-0 mb-4">
          <p className={`title text-center p-0 m-1`}>Search for a vehicle</p>
        </div>
        {filterKeysValues?.map((filter, i) => (
          <div key={i} className="col-sm-6">
            <AppFilterSelect
              filter={filter}
              disabled={i == 2 && filterKeysValues[0]?.value == null && true}
            />
          </div>
        ))}

        <div
          className="row col-12 flex m-0 p-0 mt-4 justify-content-end p-2"
          style={{ borderTop: "1px solid #eee" }}
        >
          <button
            className="search "
            onClick={() => {
              setHidden(false);
              router.push("/vehicles/search");
            }}
          >
            <i className="fa fa-search" aria-hidden="true"></i> Search
          </button>
          <button className="cancel " onClick={() => setHidden(false)}>
            <i className="fa fa-window-close" aria-hidden="true"></i> Cancel
          </button>
        </div>

        <style jsx>
          {`
            .title {
              font-size: 22px;
              font-weight: bold;
              font-family: ${ff};
              color: #444;
              position: relative;
              transition: all 0.5s;
            }
            .title::after {
              content: "";
              position: absolute;
              bottom: -3px;
              transform: translateX(-50%);
              left: 50%;
              width: 120px;
              height: 5px;
              border-radius: 10px;
              background-color: ${primary};
            }
            button {
              padding: 10px 15px;
              border: none;
              border-radius: 5px;
              font-size: 1rem;
              font-family: ${ff};
              font-weight: 500;
              background-color: ${primary};
              color: white;
              margin: 5px;
              transition: all 0.5s;
              box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
            }
            button:hover {
              background-color: ${primaryLight};
            }
          `}
        </style>
      </div>
    </div>
  );
}
