import Image from "next/image";
import React from "react";
import { latestCars } from "../utils/variables";
export default function Card() {
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

      <div className="row px-4 d-flex justify-content-center">
        {latestCars?.map(
          (
            { price, image, model, description, year, fuel, km, brandImage },
            i
          ) => (
            <div
              key={i}
              className="col-sm-6 col-md-4 col-lg-3"
              style={{ minHeight: "600px", overflow: "hidden" }}
            >
              <div
                className="shadow bg-white cardA"
                style={{
                  padding: "10px",
                  borderRadius: "10px",
                  transition: "all 0.3s",
                }}
              >
                <div
                  style={{
                    position: "relative",
                    minHeight: "200px",
                    width: "100%",
                  }}
                >
                  <Image src={image} alt="" layout="fill" objectFit="cover" />
                </div>
                {/* <div
                  className="p-2 product_brand bg-white shadow-sm rounded-circle brand"
                  style={{
                    position: "relative",
                    height: "60px",
                    width: "60px",
                    bottom: "30px",
                    right: "-75%",
                    transition: "all 0.2s",
                  }}
                >
                  <Image
                    className="rounded-circle d-block slow_7s w-100"
                    src={brandImage}
                    layout="fill"
                    objectFit="contain"
                  />
                </div> */}
                <header>
                  <h3
                    className="d-flex align-items-center px-2 h5 text-dark mt-4 mb-0 text-uppercase"
                    style={{ minHeight: "40px" }}
                  >
                    {model}
                  </h3>
                  <p
                    className="d-flex align-items-center text-secondary mb-0"
                    style={{ height: "80px" }}
                  >
                    {description}
                  </p>

                  <span
                    style={{ minHeight: "40px" }}
                    className="text-center text-muted text_small product_content py-2 mt-2 d-flex flex-wrap justify-content-around align-items-center"
                  >
                    <span className="p-1">
                      <i className="fas fa-calendar-check fa-2x text-muted"></i>
                      <p>{year}</p>
                    </span>
                    <span className="p-1">
                      <i className="fas fa-gas-pump fa-2x  text-muted"></i>
                      <p>{fuel}</p>
                    </span>
                    <span className="p-1">
                      <i className="fas fa-tachometer-alt fa-2x  text-muted"></i>
                      <p>{km}</p>
                    </span>
                  </span>
                  <span
                    className="d-flex align-items-center align-content-center border-top px-2 text-muted bg-light mb-0 font-weight-bold h5"
                    style={{ minHeight: "50px" }}
                  >
                    <span className="d-inline-block w-100 text-center">
                      <sup className="text-success font-weight-bold">£</sup>
                      <span className="text-success font-weight-bold h3">
                        {price}
                      </span>
                    </span>
                  </span>
                </header>
              </div>
            </div>
          )
        )}
      </div>

      <style jsx>
        {`
          .cardA:hover {
            transform: translateY(10px);
            cursor: pointer;
          }
          .brand:hover {
            transform: scale(1.2);
            cursor: pointer;
          }
        `}
      </style>
    </section>
  );
}
