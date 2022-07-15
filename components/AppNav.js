import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import BasicSearch from "./BasicSearch";

export default function AppNav() {
  const [browse, setBrowse] = useState(false);
  return (
    //header_bottom
    <>
      <div
        style={{
          position: "fixed",
          zIndex: 100,
          top: 0,
          // borderBottom: "2px solid red",
          boxShadow: "1px 1px 2px rgba(255, 0,0, 0.1)",
        }}
        className="slow_7s py-2 shadow-md w-100 bg-white"
      >
        <div className="container">
          <nav className="d-flex justify-content-between no-gutters align-items-center">
            <h2 className="sr-only">Main Nav</h2>
            <Link className="main_brand d-inline-block" href="/">
              <Image
                style={{ cursor: "pointer" }}
                className="d-block w-100 logoA"
                width="100px"
                height="60px"
                src="/images/logo3.png"
                alt="MaxMotors"
                title="MaxMotors"
              />
            </Link>
            <div className="d-none d-md-inline-block">
              <ul
                style={{ fontSize: "18px" }}
                className="main_nav list-unstyled mb-0 pr-0"
              >
                <li className="float-left position-relative mx-2">
                  <Link
                    className="btn btn-outline-dark border-0 py-3 font-weight-bold"
                    title=""
                    href="/"
                    as="/"
                  >
                    <a className="btn btn-outline-dark border-0 py-3 font-weight-bold">
                      Home
                    </a>
                  </Link>
                </li>
                <li className="float-left position-relative has_sub mx-2">
                  <a
                    className="btn btn-outline-dark border-0 py-3 font-weight-bold"
                    title=""
                    href="/vehicles/search"
                  >
                    Purchase Cars
                  </a>
                  <ul className="list-unstyled position-absolute slow_3s shadow-8dp">
                    <li className="w-100">
                      <a
                        className="btn btn-dark w-100 text-left py-3"
                        title=""
                        href="/vehicals/search"
                      >
                        <i className="fas fa-chevron-right mr-2"></i> Search
                        Vehicles
                      </a>
                    </li>
                    <li className="w-100">
                      <a
                        className="btn btn-dark w-100 text-left py-3"
                        title=""
                        href="/vehicles/compare"
                      >
                        <i className="fas fa-chevron-right mr-2"></i> Compare
                        Vehicles
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="float-left position-relative has_sub mx-2">
                  <a
                    className="btn btn-outline-dark border-0 py-3 font-weight-bold"
                    title=""
                    href="/services/sellcars"
                  >
                    Services
                  </a>
                  <ul className="list-unstyled position-absolute slow_3s shadow-8dp">
                    <li className="w-100">
                      <a
                        className="btn btn-dark w-100 text-left py-3"
                        title=""
                        href="/services/sellcars"
                      >
                        <i className="fas fa-chevron-right mr-2"></i> Sell Car
                      </a>
                    </li>
                    <li className="w-100">
                      <a
                        className="btn btn-dark w-100 text-left py-3"
                        title=""
                        href="/services/parts"
                      >
                        <i className="fas fa-chevron-right mr-2"></i> Parts
                        Exchange
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="float-left position-relative has_sub mx-2">
                  <Link title="" href="/about">
                    <a className="btn btn-outline-dark border-0 py-3 font-weight-bold">
                      About
                    </a>
                  </Link>
                  <ul className="list-unstyled position-absolute slow_3s shadow-8dp">
                    <li className="list-inline-item">
                      <a
                        className="btn btn-dark w-100 text-left py-3"
                        title=""
                        href="/about/page"
                      >
                        <i className="fas fa-chevron-right mr-2"></i> About Us
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a
                        className="btn btn-dark w-100 text-left py-3"
                        title=""
                        href="/about/reviews"
                      >
                        <i className="fas fa-chevron-right mr-2"></i> Customer
                        Reviews
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="float-left mx-2">
                  <Link title="" href="/contact">
                    <a className="btn btn-outline-dark border-0 py-3 font-weight-bold">
                      Contact
                    </a>
                  </Link>
                </li>
              </ul>
            </div>

            {/* <div className="d-none d-md-inline-block">
            <Link
              className="btn btn-outline-success p-3"
              href="account-login.html"
              title="Restrict Area"
            >
              Login
            </a>
            <a className="btn btn-success p-3" href="landing-page.html">
              Submit Vehicles
            </a>
          </div> */}
            <div
              id="searchIcon"
              style={{ cursor: "pointer" }}
              className="d-md-none text-center"
              onClick={() => setBrowse(!browse)}
            >
              <span>
                <i
                  style={{ color: "#666" }}
                  className="fas fa-search fa-lg"
                ></i>
              </span>
              <div style={{ fontSize: "16px", color: "#666" }}>Browse</div>
            </div>

            <div className="d-md-none">
              <div className="nav-icon menu_action">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          </nav>
        </div>
      </div>

      <div
        className={`d-md-none  ${browse ? "" : "d-none"}`}
        style={{
          width: "100%",
          height: "100%",
          position: "fixed",
          zIndex: 10,
          backgroundColor: "#ddd",
          top: 0,
          left: 0,
        }}
      >
        <BasicSearch />
      </div>
    </>
  );
}
