import Image from "next/image";

const Slide = ({ image }) => {
  return (
    //  <Image
    //    src={image}
    //    layout="fill"
    //    // width="100%"
    //    // // width="100%"
    //    objectFit="cover"
    //  />
    <div
      style={{
        height: "100%",
        width: "100%",
        backgroundImage: `url(${image})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center center",
        //   objectFit: "fill",
      }}
    />
  );
};

export default function Banner1() {
  return (
    <div
      id="carouselExampleSlidesOnly"
      className="carousel slide"
      data-ride="carousel"
      style={{ overflow: "hidden" }}
    >
      <div className="carousel-inner">
        <div style={{ height: "570px" }} className="carousel-item active">
          <Slide image={"/images/banner1.jpg"} />
        </div>
        <div style={{ height: "570px" }} className="carousel-item">
          <Slide image={"/images/feedback.jpeg"} />
        </div>
        <div style={{ height: "570px" }} className="carousel-item">
          <Slide image={"/images/feedback.jpeg"} />
        </div>
      </div>
    </div>
  );
}
