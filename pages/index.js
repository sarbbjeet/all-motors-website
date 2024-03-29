import Banner1 from "../components/Banner1";
import Card from "../components/Card";
import DealMessage from "../components/home/DealMessage";
import FeatureCars from "../components/home/FeatureCars";
import Feedback from "../components/home/Feedback";
import LatestCars from "../components/home/LatestCars";
import SearchVehicle from "../components/home/SearchVehicle";
import Slider from "../components/home/Slider";
import Layout from "../components/Layout";
import ShortSearch from "../components/ShortSearch";
import styles from "../styles/Home.module.scss";
import getDeviceSize from "../utils/getDeviceSize";

import { prisma } from "../database/prisma";

import { useSelector, useDispatch } from "react-redux";
import { vehiclesAdded, applyFilter } from "../store/slice/filtersSlice";
import { wrapper } from "../store/store";
import { useEffect } from "react";

export default function Home({ vehicles }) {
  let { width } = getDeviceSize();
  const dispatch = useDispatch();
  // const { vehicles } = useSelector((state) => state.filters);

  useEffect(() => {
    //store vehicles to redux store
    dispatch(vehiclesAdded(vehicles));
    //applyFilter
    dispatch(applyFilter());
  }, []);
  return (
    <Layout>
      <main className="main-container">
        <div
          style={{
            width: "100%",
            overflow: "auto",
            position: "relative",
            zIndex: 1,
          }}
        >
          <Banner1 />

          <ShortSearch
            exStyle={{
              position: "absolute",
              left: "50%",
              top: "50%",
              zIndex: 1,
              padding: width < 768 ? "30px" : "15px 30px",
              backgroundColor: "rgba(50, 50, 50, 0.5)",
              transform:
                width < 768 ? "translate(-50%, -50%)" : "translate(-50%, 50%)",
            }}
          />
        </div>
        <DealMessage />
        {/* <Card /> */}
        <LatestCars vehicles={vehicles} />
        <Feedback />
        {/* <Slider />
       <FeatureCars /> */}
      </main>

      <style jsx>
        {`
          .main-container {
            position: relative;
            z-index: 1;
            padding-top: 60px;
          }
        `}
      </style>
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
  const _vehicles = [
    ...vehicles.map((vehicle) => ({
      ...vehicle,
      doors: vehicle?.features?.doors,
      fuel: vehicle?.features?.fuel,
      vehicle_type: vehicle?.features?.vehicle_type,
    })),
  ];

  return { props: { vehicles: _vehicles } };
};

// export const getStaticProps = wrapper.getStaticProps((store) => async () => {
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
//       vehicle_type: vehicle?.features?.vehicle_type,
//     })),
//   ];
//   //vehicles list added to redux store
//   store.dispatch(vehiclesAdded(_vehicles));

//   return { props: { vehicles: _vehicles } };
// });
