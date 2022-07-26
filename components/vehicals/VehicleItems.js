import React from "react";

export default function VehicleItems({ items }) {
  return (
    <section className="bg-white p-3 px-lg-4 pt-4 pb-5 border mb-4">
      <header className="border-bottom border-dark mb-4">
        <h4 className="text-dark font-weight-bold mb-3">Vehicle Items</h4>
      </header>
      <ul className="product_elements list-unstyled text-muted clearfix row">
        {!items && <p className="w-100 text-center">List of items is empty</p>}
        {items?.map((item, i) => (
          <li key={i} className="col-sm-6 col-md-4 col-lg-6 col-xl-4">
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
}
