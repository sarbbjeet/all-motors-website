import { useState } from "react";
import BasicSearch from "../../../components/BasicSearch";
import CarCard from "../../../components/CarCard";
import SideFilter from "../../../components/vehicals/SideFilter";
import { prisma } from "../../../database/prisma";

import * as variables from "../../../styles/variables.module.scss";
import Layout from "../../../components/Layout";
import VehicleItems from "../../../components/vehicals/VehicleItems";
import { f2 as ff } from "../../../styles/variables.module.scss";

export default function Handler({ vehicles }) {
  const [adSearch, setAdSearch] = useState(false);
  return (
    <Layout>
      <main className="bg-light">
        {/* <div className="bg-light p-0 pt-4 m-0"> */}
        <div className="row m-0 p-0 pt-5">
          <div className="col-lg-3 p-0 px-2">
            <SideFilter filterEvent={(state) => setAdSearch(state)} />
          </div>

          <div
            style={{ paddingTop: "1px" }}
            className="col-lg-9 shadow-sm bg-white shadow-sm p-0 pr-lg-2  pl-lg-0"
          >
            <div
              style={{
                fontFamily: "Baloo Bhai 2, cursive",
                marginTop: "1px",
                marginBottom: "1px",
              }}
              className="p-0 m-0 row col-12 shadow-sm bg-white py-2 pt-lg-5 justify-content-between align-items-center px-lg-0"
            >
              <div className={`text col-auto text-dark`}>
                Total Vehicles Find Is:
                <span className="text text-success ml-2">38</span>
              </div>

              <div className="col-auto">
                <div className="btn-group">
                  <button
                    className="btn-outline-primary btn-lg py-3 dropdown-toggle"
                    type="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Order By
                  </button>
                  <div className="dropdown-menu dropdown-menu-right text-right p-0 shadow-sm rounded-0">
                    <a
                      className="_btn dropdown-item text_small px-2 py-3"
                      href="#"
                    >
                      Price ASC
                    </a>
                    <a
                      className="_btn  dropdown-item text_small px-2 py-3"
                      href="#"
                    >
                      Price DESC
                    </a>
                    <a
                      className="_btn dropdown-item text_small px-2 py-3"
                      href="#"
                    >
                      More seen
                    </a>
                    <a
                      className="_btn dropdown-item text_small px-2 py-3"
                      href="#"
                    >
                      More News
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="row p-0 m-0 mt-1 col-12 shadow-sm justify-content-content pt-5 bg-white">
              {!vehicles && (
                <div className="list-empty">
                  <p>no vehicle found ...</p>
                </div>
              )}
              {vehicles?.map((car, i) => (
                <CarCard key={i} data={car} id={i} />
              ))}
            </div>

            <nav
              aria-label="Navigation Pagination"
              style={{ marginTop: "1px", marginBottom: "1px" }}
              className="row m-0 p-0 mt-1 col-12 justify-content-content align-items-center"
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

        <style jsx>
          {`
            span,
            a,
            button,
            p {
              font-family: ${ff};
            }
            button {
              font-weight: 600 !important;
              font-size: 1rem;
            }
            span,
            a {
              font-weight: 600;
              font-size: 18px !important;
            }
            .text {
              font-family: ${variables.f2}!important;
              font-size: 1rem;
              font-weight: 500;
              text-transform: lowercase;
            }
            ._btn {
              font-family: "${variables.f2} !important";
              outline: none !important;
              font-size: 1rem !important;
              font-weight: 500 !important;
            }

            .list-empty {
              position: relative;
              text-align: center;
              width: 100%;
              top: 100px;
              min-height: 400px !important;
            }
            .list-empty p {
              font-family: ${ff};
              font-weight: 500;
              color: gray;
              font-size: 1.3rem !important;
            }
          `}
        </style>
      </main>
    </Layout>
  );
}

export const getServerSideProps = async () => {
  const vehicles = await prisma.Initial.findMany({
    include: {
      features: true,
      business: true,
    },
  });
  return { props: { vehicles } };
};
