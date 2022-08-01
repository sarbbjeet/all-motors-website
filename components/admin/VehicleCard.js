import axios from "axios";
import Link from "next/link";
import React from "react";
import styled from "styled-components";
import { f2 } from "../../styles/variables.module.scss";
import { Router, useRouter } from "next/router";
const url = "/api/vehicles";

const CardImage = styled.div`
  background: url(${(props) => props.image}) no-repeat center center;
  background-size: cover;
  height: 250px;
`;
const deleteCard = async ({ id, router }) => {
  try {
    const res = await fetch(`${url}?id=${id}`, {
      method: "DELETE",
    });
    const json_res = await res.json();
    if (res.status !== 200) throw new Error(json_res.error);
    console.info(json_res);
  } catch (err) {
    alert(err.message);
  } finally {
    router.push("/admin/vehicles");
  }
};

export default function VehicleCard({ data }) {
  const {
    make,
    id,
    model,
    color,
    decription,
    transmission,
    engine_size,
    features,
    business,
  } = data;
  const router = useRouter();
  return (
    <article className="col-12 col-sm-6 col-md-6 col-xl-4 mb-4" id="vehicles">
      <div className="w-100 d-block position-relative text-decoration-none bg-white border border-light shadow rounded">
        <CardImage image={data?.image} />
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
            {`${model} ${transmission} ${engine_size}`}
            <i className="fas fa-check-circle text-success ml-1"></i>
          </div>
          <p
            className=" varient text-uppercase d-flex align-items-center text-secondary px-2 mb-0"
            style={{
              minHeight: "30px",
              height: "30px",
              //  overflowWrap: "break-word",
            }}
          >
            {decription?.length > 100
              ? decription?.substring(0, 100) + "..."
              : data?.decription}
          </p>
          <span className="features text-muted text_small product_content py-2 mt-2 bg-light border mb-2">
            <span className="var p-1">
              <i className="fas fa-calendar-check fa-2x text-muted"></i>
              <br />
              {features?.yearOfModel}
            </span>
            <span className="var p-1">
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
                pathname: "/admin/vehicles/register",
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
              onClick={() => deleteCard({ id, router })}
            >
              <i className="fas fa-trash-alt"></i>
            </a>
          </nav>
        </header>
      </div>

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
         font-size: 1rem;
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
         font-size: 0.9rem;
         font-weight: 400;
         text-transform: capitalize; !important;
       }
       header {
         background-color: #fff;
       }
       .var{
         font-family: ${f2};
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
