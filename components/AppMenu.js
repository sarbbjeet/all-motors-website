import Image from "next/image";
import Link from "next/link";
import React from "react";
import { f2 as ff } from "../styles/variables.module.scss";
import { workshop_list } from "../utils/variables";

export default function AppMenu() {
  return (
    <div className="menu_mobile_box position-fixed d-block w-100 slow_3s">
      <div
        className="main_nav_mobile position-fixed bg-white accordion py-3"
        id="accordion_menumobile"
      >
        <div className="d-block text-right">
          <div className="nav-icon menu_action float-right d-block mb-3">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <ul className="list-unstyled mb-0 pr-0">
          <li>
            <Link href="/">
              <a
                className="nav-click btn btn-outline-dark border-0 w-100 text-left py-3 font-weight-bold"
                title="home"
              >
                <div
                  style={{ whiteSpace: "nowrap" }}
                  className="d-flex  align-items-center p-0 m-0"
                >
                  <Image
                    src="/images/icons/home.png"
                    width="35px"
                    height="35px"
                    alt=""
                    color="white"
                  />
                  <span style={{ marginLeft: "10px", fontSize: "1rem" }}>
                    Home
                  </span>
                </div>
              </a>
            </Link>
          </li>
          <li className="has_sub">
            <a
              className="btn btn-outline-dark border-0 w-100 text-left py-4 font-weight-bold"
              title="Vehicles"
              href="#"
              data-toggle="collapse"
              data-target="#collapse-1"
              aria-expanded="false"
              aria-controls="collapse-1"
            >
              <div
                style={{ whiteSpace: "nowrap" }}
                className="d-flex position-absolute align-items-center p-0 m-0"
              >
                <Image
                  src="/images/icons/car.png"
                  width="35px"
                  height="35px"
                  color="white"
                  alt=""
                />
                <span style={{ marginLeft: "10px", fontSize: "1rem" }}>
                  Approved Vehicles
                </span>
              </div>
            </a>
            <ul
              id="collapse-1"
              className="collapse slow_3s list-unstyled pl-2 py-2 border-bottom border-dark"
              data-parent="#accordion_menumobile"
            >
              <li className="list-inline-item">
                <Link href="/vehicles/search?vehicle_type=car">
                  <a
                    className="nav-click btn btn-outline-dark border-0 w-100 text-left py-3"
                    title=""
                  >
                    <i className="fas fa-chevron-right mr-2"></i>Used Cars
                  </a>
                </Link>
              </li>
              <li className="list-inline-item">
                <Link href="/vehicles/search?vehicle_type=van">
                  <a
                    className="nav-click btn btn-outline-dark border-0 w-100 text-left py-3"
                    title=""
                  >
                    <i className="fas fa-chevron-right mr-2"></i>Used Vans
                  </a>
                </Link>
              </li>
            </ul>
          </li>

          <li>
            <Link href="/finance">
              <a
                className="nav-click btn btn-outline-dark border-0 w-100 text-left py-4 font-weight-bold"
                title="finance"
              >
                <div
                  style={{ whiteSpace: "nowrap" }}
                  className="d-flex align-items-center p-0 m-0"
                >
                  <Image
                    src="/images/icons/finance.png"
                    width="35px"
                    height="35px"
                    color="white"
                    alt=""
                  />
                  <span style={{ marginLeft: "10px", fontSize: "1rem" }}>
                    Finance
                  </span>
                </div>
              </a>
            </Link>
          </li>
          <li className="has_sub">
            <a
              className="py-3 btn btn-outline-dark border-0 w-100 text-left font-weight-bold"
              title="Blog"
              href="#"
              data-toggle="collapse"
              data-target="#collapse-2"
              aria-expanded="false"
              aria-controls="collapse-2"
            >
              <div
                style={{ whiteSpace: "nowrap" }}
                className="d-flex position-absolute align-items-center p-0 m-0"
              >
                <Image
                  src="/images/icons/maintenance.png"
                  width="35px"
                  alt="maintenance"
                  height="35px"
                  color="white"
                />
                <span style={{ marginLeft: "10px", fontSize: "1rem" }}>
                  Workshop
                </span>
              </div>
            </a>
            <ul
              id="collapse-2"
              className="collapse slow_3s list-unstyled  border-bottom border-dark"
              data-parent="#accordion_menumobile"
            >
              {workshop_list.map((item, i) => (
                <li className="w-100" key={i}>
                  <Link href={`/workshop?query=${item?.name}`}>
                    <a
                      className={`btn btn-outline-dark w-100 text-left py-2`}
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
                          alt="logo"
                        />
                        <span style={{ marginLeft: "10px", fontSize: "1rem" }}>
                          {item?.name}
                        </span>
                      </div>
                      {/* <i className="fas fa-chevron-right mr-2"></i> {item} */}
                    </a>
                  </Link>
                </li>
              ))}

              {/* <li className="list-inline-item">
                <Link href="services/sellcars">
                  <a
                    className="nav-click btn btn-outline-dark border-0 w-100 text-left py-3"
                    title=""
                  >
                    <i className="fas fa-chevron-right mr-2"></i> Sell Cars
                  </a>
                </Link>
              </li> */}
            </ul>
          </li>
          <li className="has_sub">
            <a
              href="#"
              className="btn btn-outline-dark border-0 w-100 text-left py-4 font-weight-bold"
              title="about"
              data-toggle="collapse"
              data-target="#collapse-3"
              aria-expanded="false"
              aria-controls="collapse-3"
            >
              <div
                style={{ whiteSpace: "nowrap" }}
                className="d-flex position-absolute align-items-center p-0 m-0"
              >
                <Image
                  src="/images/icons/about.png"
                  width="35px"
                  height="35px"
                  color="white"
                  alt=""
                />
                <span style={{ marginLeft: "10px", fontSize: "1rem" }}>
                  About
                </span>
              </div>
            </a>

            <ul
              id="collapse-3"
              className="collapse slow_3s list-unstyled pl-2 py-2 border-bottom border-dark"
              data-parent="#accordion_menumobile"
            >
              <li className="list-inline-item">
                <Link href="/about/page">
                  <a
                    className="nav-click btn btn-outline-dark border-0 w-100 text-left py-3"
                    title=""
                  >
                    <i className="fas fa-chevron-right mr-2"></i>About Us
                  </a>
                </Link>
              </li>
              <li className="list-inline-item">
                <Link href="/about/feedback">
                  <a
                    className="nav-click btn btn-outline-dark border-0 w-100 text-left py-3"
                    title=""
                  >
                    <i className="fas fa-chevron-right mr-2"></i>Customer
                    Feedbacks
                  </a>
                </Link>
              </li>
            </ul>
          </li>
          <li className="list-inline-item">
            <Link href="/contact">
              <a
                className="nav-click btn btn-outline-dark border-0 w-100 text-left py-3 font-weight-bold"
                title=""
              >
                <div
                  style={{ whiteSpace: "nowrap" }}
                  className="d-flex align-items-center p-0 m-0"
                >
                  <Image
                    src="/images/icons/contact.png"
                    width="35px"
                    height="35px"
                    color="white"
                    alt=""
                  />
                  <span style={{ marginLeft: "10px", fontSize: "1rem" }}>
                    Contact
                  </span>
                </div>
              </a>
            </Link>
          </li>
        </ul>

        {/* <div className="px-1 mt-3">
          <a
            className="btn btn-block btn-outline-success p-3"
            href="account-login.html"
            title="Restrict Area"
          >
            Login
          </a>
          <a
            className="btn btn-block btn-success p-3 mt-2"
            href="landing-page.html"
          >
            Submit Vehicles
          </a>
        </div> */}
      </div>

      <style jsx>
        {`
          a {
            font-family: ${ff};
            font-size: 1rem !important;
            font-weight: 600 !important;
          }
        `}
      </style>
    </div>
  );
}
