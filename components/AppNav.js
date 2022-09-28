import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import ContactHeader from "./ContactHeader";
import { colors } from "../utils/constants";
import styled from "styled-components";
import styles from "../styles/AppNav.module.scss";
import { f2 as ff } from "../styles/variables.module.scss";
import MobileFilter from "./vehicals/MobileFilter";

import { workshop_list } from "../utils/variables";
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
          <nav className="position-relative py-1 d-flex justify-content-between no-gutters align-items-center">
            <h2 className="sr-only">Main Nav</h2>
            <Link href="/">
              <a className="navbar-brand">
                {/* LOGO */}
                <div className="logo-container" style={{ top: "2px" }}>
                  <Image
                    alt="logo"
                    src="/images/Group1.png"
                    layout="fill"
                    objectFit="center"
                    priority
                  />
                  {/* <p className={styles.logoP}>
                    All<span> </span>
                    <span style={{ font: "inherit", color: primary }}>
                      Motors
                    </span>
                  </p> */}
                </div>
              </a>
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
                    Approved Vehicles
                  </a>
                  <ul
                    style={{
                      backgroundColor: "rgba(0, 0, 0,0.9)",
                      left: "50%",
                      top: "100%",
                    }}
                    className="list-unstyled position-absolute slow_3s shadow-8dp"
                  >
                    <li className="w-100">
                      <Link href="/vehicles/search?vehicle_type=car">
                        <a
                          className={`${styles.linkFont} btn btn-dark w-100 text-left py-3`}
                          title=""
                        >
                          <div
                            style={{ whiteSpace: "nowrap" }}
                            className="d-flex align-items-center"
                          >
                            <Image
                              src="/images/icons/car (1).png"
                              width="40px"
                              height="40px"
                              objectFit="center"
                              color="white"
                              alt=""
                            />
                            <span className={`nested-nav ml-2 text-white`}>
                              Used Cars
                            </span>
                          </div>
                        </a>
                      </Link>
                    </li>
                    <li className="w-100">
                      <Link href="/vehicles/search?vehicle_type=van">
                        <a
                          className={`${styles.linkFont} btn btn-dark w-100 text-left py-3`}
                          title=""
                        >
                          <div
                            style={{ whiteSpace: "nowrap" }}
                            className="d-flex align-items-center"
                          >
                            <Image
                              src="/images/icons/van.png"
                              width="35px"
                              height="35px"
                              color="white"
                              alt=""
                            />
                            <span className={`nested-nav ml-2 text-white`}>
                              Used Vans
                            </span>
                          </div>

                          {/* <i className="fas fa-chevron-right mr-2"></i> Approved
                          Vans */}
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
                    Workshop
                  </a>
                  <ul className="overflow-scroll list-unstyled position-absolute slow_3s shadow-8dp">
                    {workshop_list.map((item, i) => (
                      <li className="w-100" key={i}>
                        <Link href={`/workshop?query=${item?.name}`}>
                          <a
                            className={`${styles.linkFont} btn btn-dark w-100 text-left py-2`}
                            title=""
                          >
                            <div
                              style={{ whiteSpace: "nowrap" }}
                              className="d-flex align-items-center"
                            >
                              <Image
                                src={item?.image}
                                width="35px"
                                height="35px"
                                color="white"
                                alt="image"
                              />
                              <span className={`nested-nav ml-2 text-white`}>
                                {item?.name}
                              </span>
                            </div>
                            {/* <i className="fas fa-chevron-right mr-2"></i> {item} */}
                          </a>
                        </Link>
                      </li>
                    ))}
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
              <span className="search-btn">
                <i
                  style={{ color: colors.primary }}
                  className="fas fa-search fa-lg"
                ></i>
                <br />
                Filter
              </span>
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

        <style jsx>
          {`
            #searchIcon {
              margin-left: 50px;
            }
            .search-btn {
              font-family: ${ff};
              font-size: 1rem;
              font-weight: 600;
              text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.2);
            }

            .nested-nav {
              font-family: ${ff};
              font-weight: 700 !important;
            }
            .logo-container {
              cursor: pointer;
              width: 160px;
              height: 60px;
              position: absolute;
              margin-top: 3px;
              box-shadow: 0.5px 0.5px 1px 1px rgba(0, 0, 0, 0.1);
            }

            @media (max-width: 1200px) {
              .logo-container {
                margin-top: 2px;
                width: 130px;
                height: 55px;
              }
            }
          `}
        </style>
      </div>
      <MobileFilter hidden={!browse} setHidden={setBrowse} />
    </Wrapper>
  );
}
