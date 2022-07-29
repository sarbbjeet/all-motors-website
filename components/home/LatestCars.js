import Image from "next/image";
import React, { useEffect, useState } from "react";
import CarCard from "../CarCard";
// import { colors, fontFamily as font } from "../../utils/constants";
import * as variables from "../../styles/variables.module.scss";
import { latestCars } from "../../utils/variables"; //get raw json data
import Link from "next/link";
import VehicleCard from "../admin/VehicleCard";
export default function LatestCars({
  cars = latestCars,
  title = "Our latest Offers",
  desc = "These deals are based on newly added cars that are reasonably priced.",
}) {
  return (
    <section className="mt-5 px-3 px-md-5">
      <header className="text-center py-3">
        <div className="row justify-content-center">
          <div className="col-md-10 col-lg-8 col-xl-6">
            <h2
              className="text text-dark section_title"
              // style={{ fontFamily: "Poppins, sans-serif" }}
            >
              {title}
            </h2>

            <p className="_tagline">{desc}</p>
          </div>
        </div>
      </header>

      {/* <div className="bg-white pt-5 overflow-hidden"> */}
      <div className="product_elements list-unstyled text-muted clearfix row">
        {/* <div className="row px-md-5 px-2"> */}
        {/* <div className="d-flex align-items-center flex-sm-column flex-md-row flex-wrap"
        > */}
        {cars?.map((car, i) => (
          <CarCard key={i} id={i} data={car} />
        ))}
        {/* </div> */}
      </div>

      <div className="text-center">
        <Link href="/vehicles/search">
          <a className="btnTxt btn btn-lg" title="See more vehicles">
            See more vehicles
          </a>
        </Link>
      </div>

      <style jsx>
        {`
          .text {
            font-family: ${variables.f1} !important;
            font-size: 1.8rem;
            font-weight: 500;
          }
          ._tagline {
            font-family: ${variables.f4} !important;
            font-size: 1.2rem;
            font-weight: 200;
          }
          .btnTxt {
            font-family: ${variables.f2};
            font-size: 1.2rem;
            font-weight: 400;
            background-color: ${variables.secondary};
            color: white;
            outline: none;
            transition: all 0.5s ease-in-out;
          }
          .btnTxt:hover {
            transform: scale(1.0299);
            background-color: ${variables.secondaryLight};
          }
        `}
      </style>
    </section>
  );
}
