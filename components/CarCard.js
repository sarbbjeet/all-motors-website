import Image from "next/image";
import Link from "next/link";

export default function CarCard({
  img,
  brandLogo,
  model,
  info,
  year,
  fuel,
  km,
  price,
  id,
}) {
  return (
    <article
      className="col-12 col-sm-6 col-md-6 col-xl-4 mb-4 post_item"
      style={{ height: "100%", width: "100%" }}
      id="vehicles-01"
    >
      <Link href={`/vehicles/search/${id}`}>
        <a
          className="text-decoration-none bg-white border border-light shadow rounded d-block"
          title="Vehicles Datails"
        >
          <div
            className="position-relative"
            style={{ width: "100%", height: "250px" }}
          >
            <Image
              layout="fill"
              className="d-block w-100 slow_3s"
              src={img}
              title=""
              alt=""
              priority
              objectFit="cover"
            />

            <span className="product_brand position-absolute bg-white shadow-sm rounded-circle p-1">
              <Image
                layout="fill"
                className="rounded-circle d-block slow_7s w-100"
                src={brandLogo}
                title="Title Brand"
                alt="Alt Brand"
              />
            </span>
          </div>
          <header>
            <h3
              className="d-flex align-items-center px-2 h5 text-dark mt-4 mb-0 text-uppercase"
              style={{ minHeight: "50px" }}
            >
              {model}
              <i className="fas fa-check-circle text-success ml-1"></i>
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
                <br />
                {year}
              </span>
              <span className="p-1">
                <i className="fas fa-gas-pump fa-2x  text-muted"></i>
                <br />
                {fuel}
              </span>
              <span className="p-1">
                <i className="fas fa-tachometer-alt fa-2x  text-muted"></i>
                <br />
                {km}
              </span>
            </span>
            <span
              className="d-flex align-items-center align-content-center border-top px-2 text-muted bg-light mb-0 font-weight-bold h5"
              style={{ minHeight: "50px" }}
            >
              <span className="d-inline-block w-100 text-center">
                <sup
                  style={{ fontSize: "18px" }}
                  className="text-success font-weight-bold"
                >
                  £
                </sup>
                <span className="text-success font-weight-bold h3">
                  {price}
                </span>
              </span>
            </span>
          </header>
        </a>
      </Link>
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
