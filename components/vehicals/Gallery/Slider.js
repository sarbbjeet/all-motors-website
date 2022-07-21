import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

import stylesExt from "./Slider.module.css";
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
    <div className="" style={styles.sliderContainer}>
      <Slide
        ref={sliderRef}
        slidesToScroll={4}
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
            <Image src={s?.image} alt="item" layout="fill" objectFit="center" />
            <div
              className={`${stylesExt.shild} ${
                i == selectedIndex && stylesExt.activeImage
              }`}
            ></div>
          </div>
        ))}
      </Slide>
    </div>
  );
}

const styles = {
  imageItem: {
    display: "flex",
    aspectRatio: "16/12",
    // height: "150px",
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
    backgroundColor: "black",
    display: "inline",
  },
};
