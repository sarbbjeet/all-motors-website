import React, { useState } from "react";
import Arrow from "./Arrow";
import Slider from "./Slider";
import HeaderText from "./HeaderText";
import Image from "next/image";

export default function Index({ slides }) {
  const [selectedIndex, setSelectedIndex] = useState(2);

  const changeImage = (val) => {
    setSelectedIndex(selectedIndex + val);
    if (selectedIndex + val >= slides.length - 1) setSelectedIndex(0);
    else if (selectedIndex + val < 0) setSelectedIndex(slides.length - 1);
  };
  return (
    <article className="pb-4 overflow-hidden">
      <div className="row">
        <div className="col-lg-8 col-12 position-relative order-0">
          <div
            style={{
              ...styles.headerImage,
              backgroundImage: `url(${slides[selectedIndex]?.image}`,
            }}
          />
          <Arrow direction="left" handleClick={changeImage} />
          <Arrow direction="right" handleClick={changeImage} />

          <span
            className="product_brand position-absolute bg-white shadow-sm rounded-circle p-1"
            style={styles.logo}
          >
            <Image
              layout="fill"
              className="rounded-circle d-block slow_7s w-100"
              src={slides[selectedIndex]?.logo}
              title="Title Brand"
              alt="Alt Brand"
            />
          </span>
        </div>
        <div className="col-lg-4 d-lg-block d-none">
          <HeaderText />
        </div>
      </div>
      <Slider
        slides={slides}
        selectedIndex={selectedIndex}
        handleEvent={(index) => setSelectedIndex(index)}
      />
      <div className="d-lg-none container pt-3">
        <HeaderText />
      </div>
    </article>
  );
}
const styles = {
  headerImage: {
    height: "450px",
    margin: "1px",
    overflow: "hidden",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
    transition: "transform 0.2s",
  },
  logo: {
    bottom: "5px",
    right: "20px",
    display: "flex",
    width: "3rem",
    height: "3rem",
  },
};
