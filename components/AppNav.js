import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import BasicSearch from "./BasicSearch";
import ContactHeader from "./ContactHeader";
import { colors } from "../utils/constants";
import styled from "styled-components";
import styles from "../styles/AppNav.module.scss";

const Wrapper = styled.div``;
export default function AppNav() {
  const [browse, setBrowse] = useState(false);
  return (
    //header_bottom
    <Wrapper>
      <div
        style={{
          position: "fixed",
          zIndex: 100,
          top: 0,
          // borderBottom: "2px solid red",
          boxShadow: "1px 1px 2px rgba(255, 0,0, 0.1)",
        }}
        className="nav-container slow_7s shadow-md w-100 bg-white"
      >
        <ContactHeader />
        <div className="container">
          <nav className="py-1 d-flex justify-content-between no-gutters align-items-center">
            <h2 className="sr-only">Main Nav</h2>
            <Link className="main_brand d-block" href="/">
              <Image
                style={{ cursor: "pointer" }}
                width="70px"
                height="55px"
                // objectFit="contain"
                src="/images/logo3.png"
                alt="AllMotors"
                title="AllMotors"
              />
              {/* </div> */}
            </Link>
            <div className="d-none d-lg-inline-block">
              <ul
                className={`${styles.linkFont} main_nav list-unstyled mb-0 pr-0`}
              >
                <li className="float-left position-relative mx-2">
                  <Link title="" href="/">
                    <a
                      className={`${styles.linkFont} btn btn-outline-dark border-0 py-3`}
                    >
                      Home
                    </a>
                  </Link>
                </li>
                <li className="float-left position-relative has_sub mx-2">
                  <a
                    className={`${styles.linkFont} btn btn-outline-dark border-0 py-3`}
                    href="#"
                  >
                    Purchase Cars
                  </a>
                  <ul className="list-unstyled position-absolute slow_3s shadow-8dp">
                    <li className="w-100">
                      <Link href="/vehicles/search">
                        <a
                          className={`${styles.linkFont} btn btn-dark w-100 text-left py-3`}
                          title=""
                        >
                          <i className="fas fa-chevron-right mr-2"></i> Search
                          Vehicles
                        </a>
                      </Link>
                    </li>
                    <li className="w-100">
                      <Link href="/vehicles/compare">
                        <a
                          className={`${styles.linkFont} btn btn-dark w-100 text-left py-3`}
                          title=""
                        >
                          <i className="fas fa-chevron-right mr-2"></i> Compare
                          Vehicles
                        </a>
                      </Link>
                    </li>
                  </ul>
                </li>

                <li className="float-left position-relative mx-2">
                  <Link href="/finance">
                    <a
                      className={`${styles.linkFont} btn btn-outline-dark border-0 py-3`}
                    >
                      Finance
                    </a>
                  </Link>
                </li>

                <li className="float-left position-relative has_sub mx-2">
                  <a
                    className={`${styles.linkFont} btn btn-outline-dark border-0 py-3`}
                    href="#"
                  >
                    Services
                  </a>
                  <ul className="list-unstyled position-absolute slow_3s shadow-8dp">
                    <li className="w-100">
                      <Link href="/services/sellcars">
                        <a
                          className={`${styles.linkFont} btn btn-dark w-100 text-left py-3`}
                          title=""
                        >
                          <i className="fas fa-chevron-right mr-2"></i> Sell Car
                        </a>
                      </Link>
                    </li>
                    <li className="w-100">
                      <Link href="/services/parts">
                        <a
                          className={`${styles.linkFont} btn btn-dark w-100 text-left py-3`}
                          title=""
                        >
                          <i className="fas fa-chevron-right mr-2"></i> Parts
                          Exchange
                        </a>
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="float-left position-relative has_sub mx-2">
                  <a
                    className={`${styles.linkFont} btn btn-outline-dark border-0 py-3`}
                    title="about"
                    href="#"
                  >
                    About
                  </a>

                  <ul className="list-unstyled position-absolute slow_3s shadow-8dp">
                    <li className="list-inline-item">
                      <Link href="/about/page">
                        <a
                          className={`${styles.linkFont} btn btn-dark w-100 text-left py-3`}
                          title=""
                        >
                          <i className="fas fa-chevron-right mr-2"></i> About Us
                        </a>
                      </Link>
                    </li>
                    <li className="list-inline-item">
                      <Link href="/about/reviews">
                        <a
                          className={`${styles.linkFont} btn btn-dark w-100 text-left py-3`}
                          title=""
                        >
                          <i className="fas fa-chevron-right mr-2"></i> Customer
                          Reviews
                        </a>
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="float-left mx-2">
                  <Link title="" href="/contact">
                    <a
                      className={`${styles.linkFont} btn btn-outline-dark border-0 py-3`}
                    >
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
              className="d-lg-none text-center"
              onClick={() => setBrowse(!browse)}
            >
              <span>
                <i
                  style={{ color: colors.primary }}
                  className="fas fa-search fa-lg"
                ></i>
              </span>
              <div
                style={{
                  textShadow: "1px 1px rgba(0, 0, 0, 0.1)",
                  fontSize: "0.9rem",
                  fontWeight: "400",
                  color: "#555",
                }}
              >
                Search
              </div>
            </div>

            <div className="d-lg-none">
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
        className={`d-lg-none  ${browse ? "" : "d-none"}`}
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
    </Wrapper>
  );
}
