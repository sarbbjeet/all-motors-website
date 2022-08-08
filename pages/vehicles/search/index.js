import { useState } from "react";
import BasicSearch from "../../../components/BasicSearch";
import CarCard from "../../../components/CarCard";
import SideFilter from "../../../components/vehicals/SideFilter";
import { prisma } from "../../../database/prisma";

import * as variables from "../../../styles/variables.module.scss";
import Layout from "../../../components/Layout";
import VehicleItems from "../../../components/vehicals/VehicleItems";

import { f2 as ff } from "../../../styles/variables.module.scss";
import Pagination from "../../../components/Pagination";

import { useSelector, useDispatch } from "react-redux";
import {
  vehiclesAdded,
  changeFilterKey,
} from "../../../store/slice/filtersSlice";
import { wrapper } from "../../../store/store";
export default function Handler() {
  const { vehicles, filtered_data, filterOptionsGroup, filterKeySelector } =
    useSelector((state) => state.filters);
  const [adSearch, setAdSearch] = useState(false);
  const [filteredVehicles, setFilteredVehicles] = useState(vehicles);
  return (
    <Layout>
      <main className="bg-light">
        {/* <div className="bg-light p-0 pt-4 m-0"> */}
        <div className="row m-0 p-0 pt-5">
          <div className="col-lg-3 p-0 px-2">
            <SideFilter
              data={vehicles}
              setFilteredVehicles={setFilteredVehicles}
              // filterEvent={(state) => setAdSearch(state)}
            />
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
                Total vehicles find is:
                <span className="text text-success ml-2">
                  {filteredVehicles?.length}
                </span>
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
                    {["Price ASC", "Price DESC"].map((item, i) => (
                      <a
                        key={i}
                        className="_btn dropdown-item text_small px-2 py-3"
                        href="#"
                      >
                        {item}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="row p-0 m-0 mt-1 col-12 shadow-sm justify-content-content pt-5 bg-white">
              <Pagination data={filteredVehicles} RenderComponent={CarCard} />
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
              font-size: 0.9rem;
              padding: 0 !important;
              padding: 0 5px !important;
            }
            span,
            a {
              font-weight: 600;
              font-size: 0.9rem !important;
            }
            .text {
              font-family: ${variables.f2}!important;
              font-size: 1.2rem !important;
              font-weight: 500;
              // text-transform: lowercase;
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

// export const getServerSideProps = async () => {
//   //const dispatch = useDispatch();

//   const vehicles = await prisma.Initial.findMany({
//     include: {
//       features: true,
//       business: true,
//     },
//   });
//   const _vehicles = [
//     ...vehicles.map((vehicle) => ({
//       ...vehicle,
//       doors: vehicle?.features?.doors,
//       fuel: vehicle?.features?.fuel,
//     })),
//   ];

//   return { props: { vehicles: _vehicles } };
// };

export const getStaticProps = wrapper.getStaticProps((store) => async () => {
  const vehicles = await prisma.Initial.findMany({
    include: {
      features: true,
      business: true,
    },
  });
  const _vehicles = [
    ...vehicles.map((vehicle) => ({
      ...vehicle,
      doors: vehicle?.features?.doors,
      fuel: vehicle?.features?.fuel,
    })),
  ];
  //vehicles list added to redux store
  store.dispatch(vehiclesAdded({ vehicles: _vehicles }));

  return { props: { vehicles: _vehicles } };
});
