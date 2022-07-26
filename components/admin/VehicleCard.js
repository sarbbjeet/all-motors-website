import React from "react";
import styled from "styled-components";
import { f2 } from "../../styles/variables.module.scss";

const CardImage = styled.div`
  background: url(${(props) => props.image}) no-repeat center center;
  background-size: cover;
  height: 250px;
`;
export default function VehicleCard({ data }) {
  return (
    <article className="col-12 col-sm-6 col-md-6 col-xl-4 mb-4" id="vehicles">
      <div className="w-100 d-block position-relative text-decoration-none bg-white border border-light shadow rounded">
        <CardImage image={data.image} />
        <header className="mx-2">
          <span
            className="d-flex align-items-center px-4  border-top text-muted bg-light mb-0"
            style={{ minHeight: "50px" }}
          >
            <div className="flex text-center">
              <span className="textF fText text-success ml-1">£</span>
              <span className="textF fText text-success">
                {data.finance || "600"}/month
              </span>
            </div>

            <div className="flex w-100 text-right">
              <span className="textF ml-1">£</span>
              <span className="textF">{data.price}</span>
            </div>
          </span>

          <h2
            className="textH d-flex align-items-center px-2 mt-2 mb-0 text-uppercase"
            style={{ minHeight: "30px" }}
          >
            {data.model}
            <i className="fas fa-check-circle text-success ml-1"></i>
          </h2>
          <p
            className=" varient text-uppercase d-flex align-items-center text-secondary px-2 mb-0"
            style={{
              minHeight: "30px",
              height: "30px",
              //  overflowWrap: "break-word",
            }}
          >
            {data.description.length > 100
              ? data.description.substring(0, 100) + "..."
              : data.description}
          </p>
          <span className="features text-muted text_small product_content py-2 mt-2 bg-light border mb-2">
            <span className="var p-1">
              <i className="fas fa-calendar-check fa-2x text-muted"></i>
              <br />
              {data.year}
            </span>
            <span className="var p-1">
              <i className="fas fa-gas-pump fa-2x  text-muted"></i>
              <br />
              {data.fuel}
            </span>
            <span className="var p-1">
              <i className="fas fa-tachometer-alt fa-2x  text-muted"></i>
              <br />
              {data.km}
            </span>
          </span>
          <nav className="cardEdit">
            <a className="bg-success">
              <i className="fas fa-eye"></i>
            </a>
            <a className="bg-info">
              <i className="fas fa-edit"></i>
            </a>
            <a className="bg-danger">
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
