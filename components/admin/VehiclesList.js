import React, { useState } from "react";
import { latestCars as items } from "../../utils/variables";
import VehicleCard from "./VehicleCard";
import { f2 as ff } from "../../styles/variables.module.scss";
import Pagination from "../Pagination";

export default function VehiclesList({ items }) {
  return (
    <section className="pb-5">
      <header className="border-bottom my-4">
        <h3 className="text-primary font-weight-light">
          <i className="fas fa-home"></i> My Vehicles
        </h3>
      </header>
      <div
        className="product_elements list-unstyled text-muted clearfix row"
        style={{ minHeight: "300px" }}
      >
        <Pagination data={items} RenderComponent={VehicleCard} />
      </div>

      <style jsx>
        {`
          div,
          p,
          a,
          li,
          label,
          span,
          h3 {
            font-family: ${ff};
          }
          p {
            text-transform: capitalize;
            top: 50px;
            font-weight: 300;
            font-size: 20px;
          }
          a {
            font-size: 18px;
            font-weight: 500;
          }
        `}
      </style>
    </section>
  );
}
