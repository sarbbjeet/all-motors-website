//import React from "react";
import Image from "next/image";
import Link from "next/link";
import { f2 as ff } from "../styles/variables.module.scss";

export default function AppFooter() {
  return (
    <footer className="main_footer bg-dark text-light d-print-none">
      <div className="container">
        <div className="row pt-5">
          <div className="col-sm-6 col-lg-3 pb-2">
            <p className="h5 font-weight-bold footer_title mb-4">
              Get In Touch
            </p>
            <span>
              All Motors Ltd <br />
              Camps industrial <br />
              estates Kirknewton <br />
              EH27 8DF
            </span>
          </div>
          <div className="col-sm-6 col-lg-3 pb-2">
            <p className="h5 font-weight-bold footer_title mb-4">Quick Links</p>

            <ul className="list-unstyled">
              <li className="list-inline-item w-100">
                <Link href="/about/page">
                  <a
                    className="btn btn-block  btn-dark text-left border-0 px-1"
                    title=""
                  >
                    <i className="fas fa-angle-double-right"></i> About us
                  </a>
                </Link>
              </li>
              <li className="list-inline-item w-100">
                <Link href="/vehicles/search?vehicle_type=car">
                  <a
                    className="btn btn-block btn-dark text-left border-0 px-1"
                    title=""
                  >
                    <i className="fas fa-angle-double-right"></i> Vehicles
                    Search
                  </a>
                </Link>
              </li>
              <li className="list-inline-item w-100">
                <Link href="/finance">
                  <a
                    className="btn btn-block btn-dark text-left border-0 px-1"
                    title=""
                  >
                    <i className="fas fa-angle-double-right"></i> Finance
                  </a>
                </Link>
              </li>
              {/* <li className="list-inline-item w-100">
                <Link href="/about/reviews/">
                  <a
                    className="btn btn-block btn_height btn-dark text-left border-0 px-1"
                    title=""
                  >
                    <i className="fas fa-angle-double-right"></i> Reviews
                  </a>
                </Link>
              </li> */}
              <li className="list-inline-item w-100">
                <Link href="/contact">
                  <a
                    className="btn btn-block btn-dark text-left border-0 px-1"
                    title=""
                  >
                    <i className="fas fa-angle-double-right"></i> Contact us
                  </a>
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-sm-6 col-lg-3 pb-2">
            <p className="h5 font-weight-bold footer_title mb-4">Contact us</p>
            <ul className="list-unstyled">
              <li className="list-inline-item w-100">
                <a
                  className="btn btn-block btn-dark text-left border-0 px-1"
                  href="#"
                  title="Phone"
                >
                  <i className="fas fa-phone-alt mr-2"></i> (44) 7927684797
                </a>
              </li>
              <li className="list-inline-item w-100">
                <a
                  className="btn btn-block  btn-dark text-left border-0 px-1"
                  href="#"
                  title="Whatsapp"
                >
                  <i className="fab fa-whatsapp mr-2"></i> (44) 7927684797
                </a>
              </li>
              <li className="list-inline-item w-100">
                <a
                  className="btn btn-block  btn-dark text-left border-0 px-1 text_small"
                  href="#"
                  title="E-mail"
                >
                  <i className="far fa-envelope mr-2"></i>
                  contact@allmotorsltd.co.uk
                </a>
              </li>
              <li className="list-inline-item w-100">
                <a className="btn btn-lg btn-dark" href="#" title="Facebook">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a className="btn btn-lg btn-dark" href="#" title="Youtube">
                  <i className="fab fa-youtube"></i>
                </a>
                <a className="btn btn-lg btn-dark" href="#" title="Instagram">
                  <i className="fab fa-instagram"></i>
                </a>
                <a className="btn btn-lg btn-dark" href="#" title="Twitter">
                  <i className="fab fa-twitter"></i>
                </a>
              </li>
            </ul>
          </div>
          <div className="col-sm-6 col-lg-3 pb-2">
            <p className="h5 font-weight-bold footer_title mb-4">
              Opening Hours
            </p>
            <ul className="list-unstyled opening-list">
              {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day, i) => (
                <li key={i}>
                  <span className="day-name">
                    <i className="fas fa-calendar pr-2" aria-hidden="true" />
                    {day}
                  </span>
                  <span className="day-time">10:00 - 18:00</span>
                </li>
              ))}
              <li>
                <span className="day-name">
                  <i className="fas fa-calendar pr-2" aria-hidden="true" />
                  Sun
                </span>
                <span className="day-time">10:00 - 14:00</span>
              </li>
            </ul>
          </div>

          {/* <div className="col-sm-6 col-lg-3 pb-5">
            <p className="h5 font-weight-bold footer_title mb-4">Newsletter</p>

            <p>
              Leo ultrices habitant fringilla turpis eu sapien proin us fames
              nullam cum tempus eleifend varius in. Amet curabitur vel fames
              scelerisque ac placerat.
            </p>

            <form action="#" method="post" className="validate" noValidate="">
              <div className="input-group input-group-lg w-100">
                <input
                  type="text"
                  className="form-control bg-dark"
                  placeholder="enter your email address"
                  required
                />
                <div className="input-group-prepend">
                  <button className="input-group-text btn bg-primary text-white border border-primary">
                    <i className="far fa-paper-plane"></i>
                  </button>
                </div>
              </div>
            </form>
          </div> */}
        </div>

        <div className="mb-3">
          <header className="header-tag">
            <h4>Company Info</h4>
          </header>

          <span className="company-registration">
            VAT No. 249 8202 86
            <span className="space" /> Company No. 543547
            <span className="space" />
            FCA No. 790567
            <br />
          </span>
          <span className="body">
            All Motors Ltd has authorisation and supervision from the Financial
            Conduct Authority.The company&apos;s FRN is 790567. All aspects of
            finance are influenced by status and income. Request for a written
            quotation. We act as a broker, not a lender, of credit. We work with
            a number of highly vetted credit companies who may be able to offer
            you finance for your purchase. Only these providers&apos; financial
            products are available from us.
          </span>
        </div>
      </div>
      <div className="content_copy bg-primary text-light text-center py-3">
        <div className="container text_small">
          AllMotorsLtd © 2022. All rights reserved.
        </div>
      </div>

      <style jsx>
        {`
          h4,
          p,
          ul,
          span,
          a,
          div,
          li {
            font-family: ${ff};
          }
          .header-tag {
            border-bottom: 1px solid gray;
            margin-bottom: 5px;
          }

          .body {
            padding: 0 !important;
            margin: 0 !important;
            line-height: 0px !important;
            font-family: ${ff};
            font-size: 14px;
            font-weight: 400;
          }

          .company-registration {
            // white-space: nowrap;
            font-size: 18px;
            font-weight: 600;
            color: #888;
          }

          .space {
            padding: 0 5px;
          }

          .opening-list {
            padding: 0 10px;
          }
          .opening-list li {
            border-bottom: 1px solid #444;
            display: flex;
            padding: 2px 0;
            justify-content: space-between;
          }
        `}
      </style>
    </footer>
  );
}
