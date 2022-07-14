import Image from "next/image";

export default function CarCard({
  img,
  brandLogo,
  model,
  info,
  year,
  fuel,
  km,
  price,
}) {
  return (
    <article className="w-100 p-2 " style={{ height: "100%" }}>
      <div
        className="bg-white d-block border"
        title="Vehicles Datails"
        //   href="vehicles-single.html"
      >
        <div className="position-relative">
          <div
            className="overflow-hidden"
            style={{ height: "250px", width: "300px" }}
          >
            <Image
              className="d-block w-100 slow_3s"
              //   src="/images/1200x628.jpg"
              src={img}
              alt={img}
              title=""
              layout="fill"
              objectFit="cover"
            />
          </div>

          {/* <span className="product_observation position-absolute bg-success px-3 py-1 text-white shadow-sm rounded-pill text_small">
         Detach
       </span> */}
          <span className="product_brand position-absolute bg-white shadow-sm rounded-circle p-1">
            <Image
              className="rounded-circle d-block slow_7s w-100"
              //   src="/images/600x600.jpg"
              src={brandLogo}
              alt=""
              title="logo"
              width="100%"
              height="100%"
              layout="responsive"
              objectFit="contain"
            />
          </span>
        </div>
        <header>
          <h3
            className="d-flex align-items-center px-2 h5 text-dark mt-4 mb-0 text-uppercase"
            style={{ minHeight: "50px" }}
          >
            {model}
          </h3>
          <p
            className="d-flex align-items-center text-secondary px-2 mb-0"
            style={{ minHeight: "70px" }}
          >
            {info}
          </p>

          <span className="text-center text-muted text_small product_content py-2 mt-2 d-flex flex-wrap justify-content-around align-items-center">
            <span className="p-1">
              <i className="fas fa-calendar-check fa-2x text-muted"></i>
              <p>{year}</p>
            </span>
            <span className="p-1">
              <i className="fas fa-gas-pump fa-2x  text-muted"></i>
              <p>{fuel}</p>
            </span>
            <span className="p-1">
              <i className="fas fa-tachometer-alt fa-2x  text-muted"></i>
              <p>{km}</p>
            </span>
          </span>
          <span
            className="d-flex align-items-center align-content-center border-top px-2 text-muted bg-light mb-0 font-weight-bold h5"
            style={{ minHeight: "50px" }}
          >
            <span className="d-inline-block w-100 text-center">
              <sup className="text-success font-weight-bold">$</sup>
              <span className="text-success font-weight-bold h3">{price}</span>
            </span>
          </span>
        </header>
      </div>
      <span
        className="btn_compare j_compare position-absolute text_shadow fa-2x py-1 px-2"
        data-toggle="tooltip"
        data-placement="top"
        title="Compare"
      >
        <i className="fas fa-heart"></i>
      </span>
    </article>
  );
}
