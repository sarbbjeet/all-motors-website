import styled from "styled-components";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { bannerImages as images } from "../utils/variables";
import getDeviceSize from "../utils/getDeviceSize";

const ImageDiv = ({ image }) => (
  <div>
    <style jsx>
      {`
        div {
          background: url(${image}) no-repeat center white;
          background-size: cover;
          height: 600px;
          background-attachment: fixed;
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
        <ImageDiv image={images[1]} />
      )}
    </>
  );
}
