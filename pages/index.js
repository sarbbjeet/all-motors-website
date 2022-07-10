import FeatureCars from "../components/home/FeatureCars";
import Feedback from "../components/home/Feedback";
import LatestCars from "../components/home/LatestCars";
import SearchVehicle from "../components/home/SearchVehicle";
import Slider from "../components/home/Slider";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <main>
      <SearchVehicle />
      <LatestCars />
      <Feedback />
      {/* <Slider />
      <FeatureCars /> */}
    </main>
  );
}
