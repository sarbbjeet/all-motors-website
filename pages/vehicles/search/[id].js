import { prisma } from "../../../database/prisma";

import _ from "lodash";
import Gallery from "../../../components/vehicals/Gallery/index.js";
import Highlights from "../../../components/vehicals/Highlights.js";
import VehicleItems from "../../../components/vehicals/VehicleItems.js";
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
import Layout from "../../../components/Layout.js";
import { initialPicker } from "../../../validation/dataPicker";

const url = "/api/image_gallery";

export default function handler({ vehicle }) {
  //vehicles items
  const highlights = {
    ...initialPicker(vehicle),
    ..._.pick(vehicle?.features, [
      "fuel",
      "doors",
      "body_style",
      "vehicle_type",
      "mileage",
      "yearOfModel",
      "numberOfCylinders",
      "steering",
    ]),
  };
  //modified keywords
  highlights["year"] = highlights["yearOfModel"];
  //highlights["number of cylinder"] = highlights["numberOfCylinders"];
  delete highlights?.yearOfModel;
  // delete highlights?.numberOfCylinders;
  delete highlights?.image;
  delete highlights?.description;
  //features
  const vehicleItems = vehicle?.features?.features?.split(",");
  const description = vehicle?.description;

  //initial can get from directly vehicles
  return (
    <Layout>
      <div className="pt-5 mt-3">
        <main style={{ backgroundColor: "#eee" }}>
          <Gallery vehicle={vehicle} />
          <div className="px-lg-3 m-0 row overflow-hidden">
            <div className="col-lg-7 col-xl-8">
              <Highlights highlights={highlights} />
              <Description description={description} />
              <VehicleItems items={vehicleItems} />
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
        </main>
      </div>
    </Layout>
  );
}

export const getServerSideProps = async (context) => {
  const {
    params: { id },
  } = context;
  const vehicle = await prisma.Initial.findUnique({
    where: { id },
    include: {
      imageGallery: true,
      features: true,
      business: true,
    },
  });
  return { props: { vehicle } };
};
