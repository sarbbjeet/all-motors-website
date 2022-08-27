import { slice } from "lodash";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import styled from "styled-components";
import * as variables from "../styles/variables.module.scss";

const CardImage = styled.div`
  background: url(${(props) => props.image}) no-repeat center center;
  background-size: cover;
  height: 210px;
`;

export default function CarCard({ data, _id }) {
  const { id, features, business } = data;
  const [loading, setLoading] = useState(true);
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
          <div
            className="position-relative"
            style={{ width: "100%", height: "220px" }}
          >
            <Image
              src={`http://localhost:4000/store${data?.image}`}
              layout="fill"
              alt=""
              style={{
                filter: loading ? "blur(4px)" : "none",
                scale: loading ? "3" : "1",
                transition: "all ease-in-out 0.5s",
              }}
              objectFit="center"
              onLoadingComplete={() => setLoading(false)}
            />
          </div>
          {/* access from custom store express route */}
          {/* <CardImage image={`/store/${data?.image}`} /> */}
          {/* <CardImage image={`http://localhost:4000/store${data?.image}`} /> */}

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
            <div
              className="textH d-flex align-items-center px-2 mt-4 mb-0 text-uppercase"
              style={{ minHeight: "30px" }}
            >
              {data?.title && (
                <>
                  {data?.title}
                  <i className="fas fa-check-circle text-success ml-1"></i>
                </>
              )}
            </div>
            <p
              className="varient text-uppercase d-flex align-items-center text-secondary px-2 mb-0"
              style={{ minHeight: "40px", height: "40px" }}
            >
              {`${data?.model} ${data?.transmission} ${data?.engine_size} ${data?.color}`}
            </p>

            <span className="features text-muted text_small product_content py-2 mt-2">
              <span className="var p-1">
                <i className="fas fa-calendar-check fa-2x text-muted"></i>
                <br />
                {features?.yearOfModel}
              </span>
              <span className="var p-1 text-capitalize">
                <i className="fas fa-gas-pump fa-2x  text-muted"></i>
                <br />
                {features?.fuel}
              </span>
              <span className="var p-1">
                <i className="fas fa-tachometer-alt fa-2x  text-muted"></i>
                <br />
                {features?.mileage || "..."}
              </span>
            </span>
            <span
              className="d-flex align-items-center px-4  border-top text-muted bg-light mb-0"
              style={{ minHeight: "50px" }}
            >
              <div className="flex text-center">
                <span
                  style={{ whiteSpace: "nowrap" }}
                  className="textF fText text-success"
                >
                  {`£ ${business?.finance_month || ".."}/month`}
                </span>
              </div>

              <div className="flex w-100 text-right">
                <span
                  style={{ whiteSpace: "nowrap", fontSize: "20px" }}
                  className="textF"
                >
                  {`£ ${business?.price || ".."}`}
                </span>
              </div>
            </span>
          </header>
        </a>
      </Link>

      {/* <span
        className="btn_compare j_compare position-absolute text_shadow fa-2x py-1 px-2"
        data-toggle="tooltip"
        data-placement="top"
        title="Compare"
      >
        <i className="fas fa-heart"></i>
      </span> */}

      <style jsx>
        {`
      
          .textH {
            font-family: ${variables.f2};
            font-size: 1.2rem;
            font-weight: 700;
            text-transform: capitalize; !important;
          }

          .textF {
            font-family: ${variables.f2};
            font-size: 1.1rem;
            font-weight: 700;
          }
          .varient {
            font-family: ${variables.f2} !important;
            font-size: 1rem;
            font-weight: 500;
            color: #777!important;
            text-transform: capitalize; !important;
          }
          header {
            background-color: #fff;
          }
          .var{
            font-family: ${variables.f2};
            font-size: 0.9rem;
            font-weight: 500;
          }
          .features{
            display:flex;
            justify-content:space-around;
            align-items:center;
            text-align:center;
            }
  .fText {
    color:red;
    font-size: 1.2rem; 
  }
 
        `}
      </style>
    </article>
  );
}
