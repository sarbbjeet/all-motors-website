import Image from "next/image";
import React, { useEffect, useState } from "react";
import CarCard from "../CarCard";
import getDeviceSize from "../../utils/getDeviceSize";

import { latestCars } from "../../utils/variables";

export default function LatestCars() {
  return (
    <section className="section_content py-5">
      <header className="container section_header text-center py-3">
        <div className="row justify-content-center">
          <div className="col-md-10 col-lg-8 col-xl-6">
            <h2 className="font-weight-bold text-dark section_title">
              Our latest Offers
            </h2>
            <p className="tagline text-muted">
              These deals are based on newly added cars that are reasonably
              priced.
            </p>
          </div>
        </div>
      </header>
      <div className="pb-3">
        <div
          id=""
          className="d-flex align-items-center flex-sm-column flex-md-row flex-wrap"
        >
          {latestCars?.map(
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
        <a
          href="vehicles-search.html"
          className="btn btn-primary btn-lg"
          title="See more vehicles"
        >
          See more vehicles
        </a>
      </div>
    </section>
  );
}
