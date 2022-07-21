import React from "react";

export default function HeaderText({
  info = "4.5 V8 Gasoline F1-DCT",
  quality = "Premium",
  make = "FERRARI 458 SPIDER",
  price = "12,000",
}) {
  return (
    <header className="py-lg-4 py-0 align-self-center pr-lg-5">
      <div className="pr-lg-2 pr-xl-5 px-3 px-sm-4">
        <span className="bg-primary px-3 py-1 text-white text_small rounded-pill ml-1">
          {quality}
        </span>

        <h3 className="mb-0 text-dark font-weight-bold mt-3 text-uppercase">
          {make}
          <i className="fas fa-check-circle text-success ml-1"></i>
        </h3>
        <p className="text-muted mb-0">{info}</p>

        <span className="text-success mb-1 font-weight-bold">
          <sup style={{ fontSize: "20px" }}>£</sup>
          <span className="h2">{price}</span>
        </span>
      </div>
    </header>
  );
}
