import Image from "next/image";

import Gallery from "../../../components/vehicals/Gallery/index.js";
import { useState } from "react";
import Highlights from "../../../components/vehicals/Highlights.js";
import VehicleItems from "../../../components/vehicals/VehicleItems.js";
import Highlights1 from "../../../components/vehicals/Highlights1.js";

import {
  items,
  highlights,
  slides,
  vehicleDescriptions,
} from "../../../utils/vehicalDetails";
import Description from "../../../components/vehicals/Description.js";
import VideoSection from "../../../components/vehicals/VideoSection.js";
import Dealer from "../../../components/vehicals/Dealer.js";
import RequestForm from "../../../components/vehicals/RequestForm.js";
import LatestCars from "../../../components/home/LatestCars.js";

export default function handler({ params }) {
  //vehicles items

  const moveItem = (n) => {};
  return (
    <div className="pt-5">
      <main className="bg-light">
        <Gallery slides={slides} />
        <div className="px-lg-3 m-0 row overflow-hidden">
          <div className="col-lg-7 col-xl-8">
            <Highlights highlights={highlights} />
            <VehicleItems items={items} />
            <Description description={vehicleDescriptions} />
            <VideoSection />
          </div>

          {/* sidebar   */}
          <div className="col-lg-5 col-xl-4 d-print-none pt-5 pt-lg-0">
            <div className="row justify-content-center">
              <Dealer />
              <RequestForm />
            </div>
          </div>

          <div className="col-12 bg-white">
            <LatestCars title="Similar Vehicles" />
          </div>
        </div>

        {/* <div style={{ display: "flex" }}>
          <Slider1 slides={images} />
        </div> */}

        {/* <div
          style={{
            display: "flex",
            width: "100%",
            height: "100px",
            backgroundColor: "green",
            marginBottom: "10px",
            overflow: "hidden",
            position: "relative",
          }}
        >
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13].map((z) => (
            <div
              style={{
                minWidth: "100px",
                height: "100%",
                backgroundColor: "red",
                border: "1px solid red",
                marginLeft: "2px",
                marginRight: "2px",
                transform: "translateX(-600px)",
              }}
            >
              {z}
            </div>
          ))}

          <div
            onClick={() => moveItem(-1)}
            style={{
              position: "absolute",
              top: "50%",
              padding: "10px",
              transform: "translateY(-50%)",
            }}
          >
            <i
              class="fas text-white fa-arrow-left fa-2x"
              aria-hidden="true"
            ></i>
          </div>
          <div
            onClick={() => moveItem(1)}
            style={{
              padding: "10px",
              position: "absolute",
              top: "50%",
              right: 0,
              transform: "translateY(-50%)",
            }}
          >
            <i
              class="text-white fas fa-arrow-right fa-2x"
              aria-hidden="true"
            ></i>
          </div>
        </div> */}
      </main>
    </div>
  );
}

export const getServerSideProps = (content) => {
  const { params } = content;
  return {
    props: {
      params,
    },
  };
};

const styles = {
  headerImage: {
    height: "400px",
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
  },
};
