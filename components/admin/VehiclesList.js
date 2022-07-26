import React from "react";
import { latestCars as items } from "../../utils/variables";
import VehicleCard from "./VehicleCard";

export default function VehiclesList() {
  return (
    <section className="mb-5 pb-5">
      <header className="border-bottom my-4">
        <h3 className="text-primary font-weight-light">
          <i className="fas fa-home"></i> My Vehicles
        </h3>
      </header>
      {/* <div className="row p-0 m-0 mt-1 col-12 shadow-sm justify-content-content pt-5 bg-white"> */}
      <div className="product_elements list-unstyled text-muted clearfix row">
        {!items && <p className="w-100 text-center">List of items is empty</p>}
        {items?.map((item, i) => (
          <VehicleCard key={i} data={item} />
        ))}
      </div>

      {/* pagination */}

      <nav aria-label="Page navigation example">
        <ul className="pagination justify-content-center">
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
    </section>
  );
}
