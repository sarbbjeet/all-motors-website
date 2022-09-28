import axios from "axios";
import Link from "next/link";
import React from "react";
import styled from "styled-components";
import { f2 } from "../../styles/variables.module.scss";
import Cookies from "js-cookie";
import { Router, useRouter } from "next/router";
import Image from "next/image";
const url = "/api/vehicles";
const toggleFavoriteUrl = "/api/initial/toggle_favorite";

const CardImage = styled.div`
  background: url(${(props) => props.image}) no-repeat center center;
  background-size: cover;
  height: 250px;
`;

//delete or toggle favorite card
const event = async ({ id, router, toggle = false }) => {
  try {
    const token = Cookies.get("authToken");
    const res = await fetch(`${toggle ? toggleFavoriteUrl : url}?id=${id}`, {
      method: toggle ? "GET" : "DELETE",
      headers: { authorization: `Bearer ${token}` },
    });
    const json_res = await res.json();
    if (res.status !== 200) throw new Error(json_res.error);
    console.info(json_res);
  } catch (err) {
    alert(err.message);
  } finally {
    router.push("/1005/vehicles");
  }
};

export default function VehicleCard({ data }) {
  const {
    id,
    model,
    title,
    color,
    favorite,
    description,
    transmission,
    engine_size,
    features,
    business,
  } = data;
  const router = useRouter();
  return (
    <article className="col-12 col-sm-6 col-md-6 col-xl-4 mb-4" id="vehicles">
      <div className="w-100 d-block position-relative text-decoration-none bg-white border border-light shadow rounded">
        {/* <CardImage image={`http://localhost:4000/store${data?.image}`} /> */}

        <div
          className="position-relative"
          style={{ width: "100%", height: "240px" }}
        >
          <div
            className="col-12 m-0 p-0"
            style={{
              width: "100%",
              height: "100px",
              textAlign: "end",
              position: "absolute",
              bottom: "0",
              zIndex: "10",
            }}
          >
            {features?.buying_status == "sold" && (
              <Image
                src="/images/sold_out1.png"
                width="100px"
                height="100%"
                objectFit="center"
              />
            )}
            {features?.buying_status == "reserved" && (
              <span
                className="text-danger px-1"
                style={{
                  borderRadius: "10%",
                  fontFamily: f2,
                  fontSize: "24px",
                  fontWeight: 800,
                  letterSpacing: "2px",
                  backgroundColor: "rgba(255, 255, 255,0.2)",
                }}
              >
                Reserved
              </span>
            )}
          </div>
          <Image
            src={`http://localhost:4000/store${data?.image}`}
            layout="fill"
            alt=""
            objectFit="cover"
          />
        </div>

        <header className="mx-2">
          <span
            className="d-flex align-items-center px-4  border-top text-muted bg-light mb-0"
            style={{ minHeight: "50px" }}
          >
            <div className="flex text-center">
              <span className="textF fText text-success ml-1">£</span>
              <span className="textF fText text-success">
                {business?.finance_month || "600"}/month
              </span>
            </div>
            <div className="flex w-100 text-right">
              <span className="textF ml-1">£</span>
              <span className="textF">{business?.price || " .."}</span>
            </div>
          </span>

          <div
            className="textH d-flex align-items-center px-2 mt-2 mb-0 text-uppercase"
            style={{ minHeight: "30px" }}
          >
            {title}
            {title && <i className="fas fa-check-circle text-success ml-1"></i>}
          </div>
          <p
            className=" varient text-uppercase d-flex align-items-center text-secondary px-2 mb-0"
            style={{
              height: "40px",
              //  overflowWrap: "break-word",
            }}
          >
            {`${model} ${transmission} ${engine_size} ${color}`}
            {/* {description?.length > 90
              ? description?.substring(0, 90) + "..."
              : data?.description} */}
          </p>
          <span className="features text-muted text_small product_content py-2 mt-2 bg-light border mb-2">
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
              {`${features?.mileage || "..."}`}
            </span>
          </span>
          <nav className="cardEdit">
            <a className="bg-success">
              <i className="fas fa-eye"></i>
            </a>
            <Link
              href={{
                pathname: "/1005/vehicles/register",
                query: { id },
              }}
            >
              <a className="bg-info">
                <i className="fas fa-edit"></i>
              </a>
            </Link>
            <a
              className="bg-danger"
              //href="/admin/vehicles" //redirect
              onClick={() => event({ id, router })}
            >
              <i className="fas fa-trash-alt"></i>
            </a>
          </nav>
        </header>
      </div>
      <span
        onClick={() => event({ id, router, toggle: true })}
        className="btn_compare position-absolute text_shadow fa-2x py-1 px-2"
        data-toggle="tooltip"
        data-placement="top"
        title="Compare"
      >
        <i className={`fas fa-heart ${favorite && "text-danger"}`}></i>
      </span>

      <style jsx>
        {`
           
.cardEdit {
   display: flex; 
   justify-content: space-around; 
   margin-bottom:0.5rem;
   cursor: pointer;
}
.cardEdit a {
 flex:1;
 padding-top: 5px;
 padding-bottom: 5px;
text-align: center;
}

.cardEdit a:first-child{
   border-radius: 5px 0 0 5px;
}

.cardEdit a:last-child {
   border-radius: 0 5px 5px 0;
}
.cardEdit a i{
   color:white;
}

       .textH {
         font-family: ${f2};
         font-size: 1.2rem;
         font-weight: 700;
         text-transform: capitalize; !important;
       }

       .textF {
         font-family: ${f2};
         font-size: 1.1rem;
         font-weight: 700;
       }
       .varient {
         font-family: ${f2} !important;
         font-size: 1rem;
         color:#777!important;
         font-weight: 500;
         text-transform: capitalize; !important;
       }
       header {
         background-color: #fff;
       }
       .var{
         font-family: ${f2};
         font-size: 0.9rem;
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
