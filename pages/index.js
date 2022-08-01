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

export default function Home() {
  let { width } = getDeviceSize();
  return (
    <Layout>
      <main className={styles.main} style={{ position: "relative", zIndex: 1 }}>
        <div
          style={{
            width: "100%",
            overflow: "auto",
            position: "relative",
            zIndex: 1,
          }}
        >
          <Banner1 />
          {/* <div
          style={{
            position: "absolute",
            backgroundColor: "rgba(50, 50, 50, 0.2)",
            width: "100%",
            top: 0,
            height: "100%",
          }}
        /> */}

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

        <LatestCars />

        <Feedback />
        {/* <Slider />
       <FeatureCars /> */}
      </main>
    </Layout>
  );
}
