import { useEffect, useRef, useState } from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { LazyLoadImage } from "react-lazy-load-image-component";

import stylesExt from "../../../styles/Slider.module.scss";
import Image from "next/image";
export default function Handler({ slides, handleEvent, selectedIndex }) {
  const sliderRef = useRef(null);
  const resizeRef = useRef(null);
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });
  resizeRef.current = ({ target: { innerWidth, innerHeight } }) => {
    setWindowSize({ width: innerWidth, height: innerHeight });
  };
  const { width, height } = windowSize;
  useEffect(() => {
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
    <div className={stylesExt.sliderContainer}>
      {slides?.length > 0 && (
        <Slide
          ref={sliderRef}
          slidesToScroll={2}
          slidesToShow={width > 900 ? 7 : 4}
          // indicators={true}
        >
          {slides?.map((s, i) => (
            <div
              className={stylesExt.imageItem}
              key={i}
              onClick={() => handleEvent(i)}
            >
              <Image
                src={`http://localhost:4000/store${s?.image}`}
                layout="fill"
                alt=""
                objectFit="contain"
              />

              {/* <LazyLoadImage
                alt=""
                style={{ objectFit: "contain" }}
                src={`${s?.image}`}
                width="100%"
                height="100%"
              /> */}
              <div
                className={`${stylesExt.shild} ${
                  i == selectedIndex && stylesExt.activeImage
                }`}
              ></div>
            </div>
          ))}
        </Slide>
      )}
    </div>
  );
}
