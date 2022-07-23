import Image from "next/image";
import Link from "next/link";
import { fontFamily as font, fontSize } from "../utils/constants";
import styled from "styled-components";

const CardImage = styled.div`
  background: url(${(props) => props.image}) no-repeat center center;
  background-size: cover;
  height: 300px;
`;

export default function CarCard({
  img,
  model,
  info,
  year,
  fuel,
  km,
  price,
  finance = 600,
  id,
}) {
  return (
    <article
      className="col-12 col-sm-6 col-md-6 col-xl-4 mb-4 post_item"
      id="vehicles"
    >
      <Link href={`/vehicles/search/${id}`}>
        <a
          className="w-100 d-block position-relative text-decoration-none bg-white border border-light shadow rounded"
          title="Vehicles Datails"
        >
          <CardImage image={img} />

          {/* <span className="product_brand position-absolute bg-white shadow-sm rounded-circle p-1">
              <Image
                layout="fill"
                className="rounded-circle d-block slow_7s w-100"
                src={brandLogo}
                title="Title Brand"
                alt="Alt Brand"
              />
            </span> */}
          {/* </div> */}
          <header>
            <h2
              className="textH d-flex align-items-center px-2 mt-4 mb-0 text-uppercase"
              style={{ minHeight: "30px" }}
            >
              {model}
              <i className="fas fa-check-circle text-success ml-1"></i>
            </h2>
            <p
              className="varient text-uppercase d-flex align-items-center text-secondary px-2 mb-0"
              style={{ minHeight: "40px" }}
            >
              {info}
            </p>

            <span className="features text-muted text_small product_content py-2 mt-2">
              <span className="var p-1">
                <i className="fas fa-calendar-check fa-2x text-muted"></i>
                <br />
                {year}
              </span>
              <span className="var p-1">
                <i className="fas fa-gas-pump fa-2x  text-muted"></i>
                <br />
                {fuel}
              </span>
              <span className="var p-1">
                <i className="fas fa-tachometer-alt fa-2x  text-muted"></i>
                <br />
                {km}
              </span>
            </span>
            <span
              className="d-flex align-items-center px-4  border-top text-muted bg-light mb-0"
              style={{ minHeight: "50px" }}
            >
              <div className="flex text-center">
                <span className="textF fText text-success ml-1">£</span>
                <span className="textF fText text-success">
                  {finance}/month
                </span>
              </div>

              <div className="flex w-100 text-right">
                <span className="textF ml-1">£</span>
                <span className="textF">{price}</span>
              </div>
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

      <style jsx>
        {`
          .textH {
            font-family: ${font.f4};
            font-size: 1rem;
            font-weight: 700;
            text-transform: capitalize; !important;
          }

          .textF {
            font-family: ${font.f4};
            font-size: 1.1rem;
            font-weight: 700;
          }
          .varient {
            font-family: ${font.f4} !important;
            font-size: 0.9rem;
            font-weight: 400;
            text-transform: capitalize; !important;
          }
          header {
            background-color: #fff;
          }
          .var{
            font-family: ${font.f4};
            font-size: 0.8rem;
            font-weight: 500;
          }
          .features{
            display:flex;
            justify-content:space-around;
            align-items:center;
            text-align:center;
            }
  .fText{
    color:red;
    font-size: 1.2rem; 
  }
        `}
      </style>
    </article>
  );
}
