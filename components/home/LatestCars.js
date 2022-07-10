import Image from "next/image";
import React, { useEffect, useState } from "react";
import CarCard from "../CarCard";
import getDeviceSize from "../../utils/getDeviceSize";

export default function LatestCars() {
  //   console.log(getDeviceSize().width);

  return (
    <section className="section_content py-5">
      <header className="container section_header text-center py-3">
        <div className="row justify-content-center">
          <div className="col-md-10 col-lg-8 col-xl-6">
            <h2 className="font-weight-bold text-dark section_title">
              Our latest Offers
            </h2>
            <p className="tagline text-muted">
              Diliges proximum tuum sicut te ipsum. Propitius esto tibi. Vivamus
              hodie iam vivere.
            </p>
          </div>
        </div>
      </header>
      <div className="container pb-3">
        <div className="d-flex justify-content-center slide_four slide_max arrow_inner">
          {[1, 2, 3, 4, 5].map((itm, i) => (
            <CarCard
              key={i}
              img={"/images/1200x628.jpg"}
              brandLogo={"/images/600x600.jpg"}
              model={"Toyota GT86"}
              info={"2.0 16v Power Vip 2p 220cv Automatic Complete"}
              year={"2021"}
              fuel={"Flex"}
              km={"0"}
              price={"15.00.00"}
            />
          ))}
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
