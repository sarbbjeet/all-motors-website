import React, { useState } from "react";
import Arrow from "./Arrow";
import Slider from "./Slider";
import HeaderText from "./HeaderText";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Image from "next/image";
import { f2 as ff, primary } from "../../../styles/variables.module.scss";

export default function Index({ vehicle }) {
  const { imageGallery: slides } = vehicle;
  const [loading, setLoading] = useState(true);
  const headerProps = {
    info: `${vehicle?.transmission} ${vehicle?.model} ${vehicle.features?.fuel}`,
    make: `${vehicle?.make}`,
    price: vehicle?.business?.price,
    quality: "premium",
  };
  const [selectedIndex, setSelectedIndex] = useState(2);

  const changeImage = (val) => {
    setSelectedIndex(selectedIndex + val);
    if (selectedIndex + val >= slides?.length - 1) setSelectedIndex(0);
    else if (selectedIndex + val < 0) setSelectedIndex(slides?.length - 1);
  };
  return (
    <article className="pb-4 overflow-hidden">
      <div className="row">
        <div className="show-image bg-dark col-lg-7 col-12 position-relative order-0 p-0 m-0">
          <div
            className="col-12 mt-4 mt-lg-5"
            style={{
              width: "100%",
              height: "100px",
              textAlign: "end",
              position: "relative",
              zIndex: "10",
            }}
          >
            {vehicle?.features?.buying_status == "sold" && (
              <Image
                src="/images/sold_out1.png"
                width="100px"
                height="100%"
                objectFit="center"
              />
            )}
            {vehicle.features?.buying_status == "reserved" && (
              <span
                className="py-2 px-4 text-danger"
                style={{
                  borderRadius: "10%",
                  fontFamily: ff,
                  fontSize: "24px",
                  fontWeight: 800,
                  letterSpacing: "2px",
                  backgroundColor: "rgba(0, 0, 0,0.2)",
                }}
              >
                Reserved
              </span>
            )}
          </div>

          {/* <div
            className="position-relative"
            style={{ width: "100%", height: "300px" }}
          > */}
          <Image
            src={`http://localhost:4000/store${slides[selectedIndex]?.image}`}
            layout="fill"
            alt=""
            style={{
              filter: loading ? "blur(4px)" : "none",
              scale: loading ? "3" : "1",
              transition: "all ease-in-out 0.5s",
            }}
            onLoadingComplete={() => setLoading(false)}
            objectFit="contain"
          />
          {/* </div> */}

          {/* <LazyLoadImage
            style={{ objectFit: "contain" }}
            src={`${slides[selectedIndex]?.image}`}
            alt=""
            property
            width="100%"
            height="100%"
            effect="blur"
          /> */}

          {/* <CardImage image={`/store/${slides[selectedIndex]?.image}`} /> */}
          <Arrow direction="left" handleClick={changeImage} />
          <Arrow direction="right" handleClick={changeImage} />

          {/* <span
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
          </span> */}
        </div>
        <div className="pt-4 col-lg-4 d-lg-block d-none">
          <HeaderText
            price={headerProps.price}
            make={headerProps.make}
            info={headerProps.info}
            quality={headerProps.quality}
          />
        </div>
      </div>
      <Slider
        slides={slides}
        selectedIndex={selectedIndex}
        handleEvent={(index) => setSelectedIndex(index)}
      />
      <div className="d-lg-none container pt-3">
        <HeaderText
          price={headerProps.price}
          make={headerProps.make}
          info={headerProps.info}
          quality={headerProps.quality}
        />
      </div>

      <style jsx>
        {`
          .show-image {
            backgroundcolor: rgba(0, 0, 0, 0.7);
            height: 470px;
          }
          @media (max-width: 500px) {
            .show-image {
              height: 300px;
            }
          }
        `}
      </style>
    </article>
  );
}
