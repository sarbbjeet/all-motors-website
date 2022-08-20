import styled from "styled-components";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { bannerImages as images } from "../utils/variables";

const ImageDiv = ({ image, height = "670px" }) => (
  <div>
    <style jsx>
      {`
        div {
          background: url(${image}) no-repeat center center;
          background-size: cover;
          height: ${height};
          // to overcome error of safari background
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
    <div>
      <div className="web_bac">
        <Slide slidesToScroll={1} slidesToShow={1} indicators={true}>
          {images?.map((img, i) => (
            <ImageDiv key={i} image={img} />
          ))}
        </Slide>
      </div>
      <div className="mobile_bac">
        <ImageDiv image={images[0]} height="450px" />
      </div>

      <style jsx>{`
        .mobile_bac {
          display: none;
        }

        @media (max-width: 768px) {
          .mobile_bac {
            display: block;
          }
          .web_bac {
            display: none;
          }
        }
      `}</style>
    </div>
  );
}
