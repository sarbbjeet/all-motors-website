import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import styled from "styled-components";

const CardImage = styled.div`
  background: url(${(props) => props.image}) no-repeat center center;
  background-size: cover;
  height: 100%;
  width: 100%;
`;

import stylesExt from "../../../styles/Slider.module.scss";
export default function Handler({ slides, handleEvent, selectedIndex }) {
  const sliderRef = useRef(null);
  const resizeRef = useRef(null);
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });
  resizeRef.current = ({ target: { innerWidth, innerHeight } }) => {
    setWindowSize({ width: innerWidth, height: innerHeight });
  };
  const { width, height } = windowSize;
  useEffect(() => {
    //  sliderRef.current.goTo(5);
    //  console.log("slider- ", sliderRef.current);
    //resizeRef.current = handleResize;
    let onResize;
    if (typeof window !== "undefined") {
      onResize = window.addEventListener("resize", (e) => resizeRef.current(e));
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    }
    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, []);
  return (
    <div style={styles.sliderContainer}>
      {slides?.length > 0 && (
        <Slide
          ref={sliderRef}
          slidesToScroll={2}
          slidesToShow={width > 900 ? 7 : 4}
          indicators={true}
        >
          {slides?.map((s, i) => (
            <div
              className={stylesExt.imageItem}
              key={i}
              style={{ ...styles.imageItem }}
              onClick={() => handleEvent(i)}
            >
              <CardImage image={`/store/${s?.image}`} />
              <div
                className={`${stylesExt.shild} ${
                  i == selectedIndex && stylesExt.activeImage
                }`}
              ></div>
            </div>
          ))}
        </Slide>
      )}
      <div className="frameToHide" />

      <style jsx>
        {`
          .frameToHide {
            position: absolute;
            width: 100%;
            height: 30px;
            bottom: 0;
            background-color: #eee;
          }
        `}
      </style>
    </div>
  );
}

const styles = {
  imageItem: {
    display: "flex",
    aspectRatio: "16/12",

    padding: "0 !important",
    margin: "0 !important",
    margin: 0,
    cursor: "pointer",
    // margin: "2px",
    borderLeft: "1.5px solid black",
    borderRight: "1.5px solid black",
    borderTop: "3px solid black",
    borderBottom: "3px solid black",
    position: "relative",
    transition: "all 0.5s",
  },
  sliderContainer: {
    minHeight: "180px !important",
    backgroundColor: "rgba(0, 0, 0, 0.9)",
    padding: "0!important",
    margin: "0 !important",
    position: "relative",
  },
};
