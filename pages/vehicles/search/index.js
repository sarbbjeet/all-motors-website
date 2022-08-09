import { useEffect, useState } from "react";
import { useRouter } from "next/router";
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
  applyFilter,
  changeFilterKey,
} from "../../../store/slice/filtersSlice";
import { wrapper } from "../../../store/store";
import MobileFilter from "../../../components/vehicals/MobileFilter";
export default function Handler({ query }) {
  const { vehicles, filtered_data } = useSelector((state) => state.filters);
  const [adSearch, setAdSearch] = useState(false);
  const dispatch = useDispatch();

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  useEffect(() => {
    if (Object.keys(query).length > 0)
      dispatch(
        changeFilterKey({
          key: "vehicle_type",
          value: capitalizeFirstLetter(query?.vehicle_type),
        })
      );
    dispatch(applyFilter());
  }, [query?.vehicle_type]);
  //const [filteredVehicles, setFilteredVehicles] = useState(vehicles);
  return (
    <Layout>
      <main className="bg-light">
        {/* <div className="bg-light p-0 pt-4 m-0"> */}
        <div className="row m-0 p-0 pt-5">
          <div className="col-lg-3 p-0 px-lg-2">
            <SideFilter
              data={vehicles}
              // setFilteredVehicles={setFilteredVehicles}
              filterEvent={(state) => setAdSearch(state)}
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
                  {filtered_data?.length}
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
              <Pagination data={filtered_data} RenderComponent={CarCard} />
            </div>
          </div>
        </div>

        <MobileFilter hidden={!adSearch} setHidden={setAdSearch} />

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

export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({ query }) => {
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
          vehicle_type: vehicle?.features?.vehicle_type,
        })),
      ];
      //vehicles list added to redux store
      store.dispatch(vehiclesAdded(_vehicles));
      //apply filter

      return { props: { vehicles: _vehicles, query } };
    }
);
