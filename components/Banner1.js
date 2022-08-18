import styled from "styled-components";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { bannerImages as images } from "../utils/variables";
import getDeviceSize from "../utils/getDeviceSize";

const ImageDiv = ({ image, height = "650px" }) => (
  <div>
    <style jsx>
      {`
        div {
          background: url(${image}) no-repeat center center;
          background-size: cover;
          height: ${height};
          // to overcome error of safari
          -webkit-background-size: cover;
          -moz-background-size: cover;
          -o-background-size: cover;
        }
      `}
    </style>
  </div>
);

export default function Banner1() {
  return (
    <>
      {getDeviceSize().width > 768 ? (
        <Slide slidesToScroll={1} slidesToShow={1} indicators={true}>
          {images?.map((img, i) => (
            <ImageDiv key={i} image={img} />
          ))}
        </Slide>
      ) : (
        <ImageDiv image={images[1]} height="450px" />
      )}
    </>
  );
}
