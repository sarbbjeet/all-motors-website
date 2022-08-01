import React from "react";
import { latestCars as items } from "../../utils/variables";
import VehicleCard from "./VehicleCard";
import { f2 as ff } from "../../styles/variables.module.scss";

export default function VehiclesList({ items }) {
  return (
    <section className="pb-5">
      <header className="border-bottom my-4">
        <h3 className="text-primary font-weight-light">
          <i className="fas fa-home"></i> My Vehicles
        </h3>
      </header>
      {/* <div className="row p-0 m-0 mt-1 col-12 shadow-sm justify-content-content pt-5 bg-white"> */}
      <div
        className="product_elements list-unstyled text-muted clearfix row "
        style={{ minHeight: "300px" }}
      >
        {!items.length > 0 && (
          <p className="w-100 text-center position-relative">
            --- No vehicle found ---
          </p>
        )}
        {items?.map((item, i) => (
          <VehicleCard key={i} data={item} />
        ))}
      </div>

      {/* pagination */}

      <nav aria-label="Page navigation example">
        <ul className="pagination justify-content-center disabled">
          <li className="page-item disabled">
            <a
              className="page-link"
              href="#"
              tabIndex="-1"
              aria-disabled="true"
            >
              Previous
            </a>
          </li>
          <li className="page-item active">
            <a className="page-link" href="#">
              1
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              2
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              3
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              Next
            </a>
          </li>
        </ul>
      </nav>

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
