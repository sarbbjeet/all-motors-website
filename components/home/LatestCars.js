import Image from "next/image";
import React, { useEffect, useState } from "react";
import CarCard from "../CarCard";
import getDeviceSize from "../../utils/getDeviceSize";

import { latestCars } from "../../utils/variables";
import Link from "next/link";

export default function LatestCars({
  cars = latestCars,
  title = "Our latest Offers",
  desc = "These deals are based on newly added cars that are reasonably priced.",
}) {
  return (
    <section className="section_content py-5">
      <header className="container section_header text-center py-3">
        <div className="row justify-content-center">
          <div className="col-md-10 col-lg-8 col-xl-6">
            <h2 className="font-weight-bold text-dark section_title">
              {title}
            </h2>
            <p className="tagline text-muted">{desc}</p>
          </div>
        </div>
      </header>

      <div className="bg-white pt-5 overflow-hidden">
        <div className="row px-md-5 px-2">
          {/* <div className="d-flex align-items-center flex-sm-column flex-md-row flex-wrap"
        > */}
          {cars?.map(
            (
              { price, image, model, description, year, fuel, km, brandImage },
              i
            ) => (
              <CarCard
                key={i}
                img={image}
                brandLogo={brandImage}
                model={model}
                info={description}
                year={year}
                fuel={fuel}
                km={km}
                price={price}
              />
            )
          )}
        </div>
      </div>

      <div className="text-center">
        <Link href="/vehicles/search">
          <a className="btn btn-primary btn-lg" title="See more vehicles">
            See more vehicles
          </a>
        </Link>
      </div>
    </section>
  );
}
