import Image from "next/image";
import { useState } from "react";
import BasicSearch from "../../../components/BasicSearch";
import CarCard from "../../../components/CarCard";
import SideFilter from "../../../components/vehicals/SideFilter";
import { latestCars } from "../../../utils/variables";
import styles from "./search.module.css";

export default function Handler() {
  const [adSearch, setAdSearch] = useState(false);
  return (
    <main className="bg-light m-0 p-0">
      <div className="bg-light pt-4 p-0 m-0">
        <div className="row col-12 m-0">
          <div className="col-lg-3 p-0">
            <SideFilter filterEvent={(state) => setAdSearch(state)} />
          </div>

          <div
            style={{ paddingTop: "1px" }}
            className="col-lg-9 shadow-sm bg-white shadow-sm p-0 pr-lg-2  pl-lg-0"
          >
            <div
              style={{ marginTop: "1px", marginBottom: "1px" }}
              className="px-4 row shadow-sm bg-white py-4 justify-content-between align-items-center px-lg-0"
            >
              <div className="col-auto text-dark font-weight-bold">
                Total Vehicles Find Is: <span className="text-success">38</span>
              </div>

              <div className="col-auto">
                <div className="btn-group">
                  <button
                    className="btn btn-outline-primary btn-lg py-3 dropdown-toggle text_small"
                    type="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Order By
                  </button>
                  <div className="dropdown-menu dropdown-menu-right text-right p-0 shadow-sm rounded-0">
                    <a className="dropdown-item text_small px-2 py-3" href="#">
                      Price ASC
                    </a>
                    <a className="dropdown-item text_small px-2 py-3" href="#">
                      Price DESC
                    </a>
                    <a className="dropdown-item text_small px-2 py-3" href="#">
                      More seen
                    </a>
                    <a className="dropdown-item text_small px-2 py-3" href="#">
                      More News
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="row shadow-sm justify-content-content pt-5 bg-white">
              {latestCars.map(
                (
                  { year, model, km, description, brandImage, image, price },
                  i
                ) => (
                  <CarCard
                    id={i}
                    key={i}
                    info={description}
                    price={price}
                    km={km}
                    img={image}
                    brandLogo={brandImage}
                    year={year}
                    model={model}
                  />

                  // <article
                  //   className="col-md-6 col-xl-4 mb-5 post_item"
                  //   style={{ height: "100%" }}
                  //   id="vehicles-01"
                  // >
                  //   <a
                  //     className="text-decoration-none bg-white d-block border"
                  //     title="Vehicles Datails"
                  //     href="vehicles-single.html"
                  //   >
                  //     <div
                  //       className="position-relative"
                  //       style={{ width: "100%", height: "200px" }}
                  //     >
                  //       <div className="overflow-hidden">
                  //         <Image
                  //           layout="fill"
                  //           className="d-block w-100 slow_3s"
                  //           src="/images/1200x628.jpg"
                  //           title=""
                  //           alt=""
                  //         />
                  //       </div>
                  //       <span className="product_brand position-absolute bg-white shadow-sm rounded-circle p-1">
                  //         <Image
                  //           layout="fill"
                  //           className="rounded-circle d-block slow_7s w-100"
                  //           src="/images/600x600.jpg"
                  //           title="Title Brand"
                  //           alt="Alt Brand"
                  //         />
                  //       </span>
                  //     </div>
                  //     <header>
                  //       <h3
                  //         className="d-flex align-items-center px-2 h5 text-dark mt-4 mb-0 text-uppercase"
                  //         style={{ minHeight: "50px" }}
                  //       >
                  //         Toyota GT86
                  //         <i className="fas fa-check-circle text-success ml-1"></i>
                  //       </h3>
                  //       <p
                  //         className="d-flex align-items-center text-secondary px-2 mb-0"
                  //         style={{ minHeight: "70px" }}
                  //       >
                  //         2.0 16v Power Vip 2p 220cv Automatic Complete
                  //       </p>

                  //       <span className="text-center text-muted text_small product_content py-2 mt-2 d-flex flex-wrap justify-content-around align-items-center">
                  //         <span className="p-1">
                  //           <i className="fas fa-calendar-check fa-2x text-muted"></i>
                  //           2021
                  //         </span>
                  //         <span className="p-1">
                  //           <i className="fas fa-gas-pump fa-2x  text-muted"></i>Flex
                  //         </span>
                  //         <span className="p-1">
                  //           <i class="fas fa-tachometer-alt fa-2x  text-muted"></i>
                  //           0
                  //         </span>
                  //       </span>
                  //       <span
                  //         class="d-flex align-items-center align-content-center border-top px-2 text-muted bg-light mb-0 font-weight-bold h5"
                  //         style={{ minHeight: "50px" }}
                  //       >
                  //         <span class="d-inline-block w-100 text-center">
                  //           <sup class="text-success font-weight-bold">$</sup>
                  //           <span class="text-success font-weight-bold h3">
                  //             156.000.00
                  //           </span>
                  //         </span>
                  //       </span>
                  //     </header>
                  //   </a>
                  //   <span
                  //     class="btn_compare j_compare position-absolute text_shadow fa-2x py-1 px-2"
                  //     data-toggle="tooltip"
                  //     data-placement="top"
                  //     title="Compare"
                  //   >
                  //     <i class="fas fa-heart"></i>
                  //   </span>
                  // </article>
                )
              )}
            </div>

            <nav
              aria-label="Navigation Pagination"
              style={{ marginTop: "1px", marginBottom: "1px" }}
              className="row justify-content-content align-items-center"
            >
              <ul className="col-12 py-2 bg-white pagination pagination-lg justify-content-center shadow-sm">
                <li className="page-item">
                  <a className="page-link" href="#" aria-label="Previous">
                    <span aria-hidden="true">
                      <i className="fas fa-angle-double-left"></i>
                    </span>
                    <span className="sr-only">Previous</span>
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
                  <a className="page-link" href="#" aria-label="Next">
                    <span aria-hidden="true">
                      <i className="fas fa-angle-double-right"></i>
                    </span>
                    <span className="sr-only">Next</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
      <div
        className={`d-lg-none ${adSearch ? "" : "d-none"}`}
        style={{
          width: "100%",
          height: "100%",
          position: "fixed",
          zIndex: 9,
          backgroundColor: "#ddd",
          top: 0,
          left: 0,
        }}
      >
        <BasicSearch closeBtn={(state) => setAdSearch(state)} />
      </div>
    </main>
  );
}
