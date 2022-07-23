import Link from "next/link";
import React from "react";

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
                className="nav-click btn btn-outline-dark border-0 w-100 text-left py-4 font-weight-bold"
                title="home"
              >
                Home
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
              Purchase Vehicle
            </a>
            <ul
              id="collapse-1"
              className="collapse slow_3s list-unstyled pl-2 py-2 border-bottom border-dark"
              data-parent="#accordion_menumobile"
            >
              <li className="list-inline-item">
                <Link href="/vehicles/search">
                  <a
                    className="nav-click btn btn-outline-dark border-0 w-100 text-left py-3"
                    title=""
                  >
                    <i className="fas fa-chevron-right mr-2"></i> Search
                    Vehicles
                  </a>
                </Link>
              </li>
              <li className="list-inline-item">
                <Link href="/vehicles/compare">
                  <a
                    className="nav-click btn btn-outline-dark border-0 w-100 text-left py-3"
                    title=""
                  >
                    <i className="fas fa-chevron-right mr-2"></i> Compare
                    Vehicles
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
                Finance
              </a>
            </Link>
          </li>
          <li className="has_sub">
            <a
              className="btn btn-outline-dark border-0 w-100 text-left py-4 font-weight-bold"
              title="Blog"
              href="services/sellcars"
              data-toggle="collapse"
              data-target="#collapse-2"
              aria-expanded="false"
              aria-controls="collapse-2"
            >
              Services
            </a>
            <ul
              id="collapse-2"
              className="collapse slow_3s list-unstyled pl-2 py-2 border-bottom border-dark"
              data-parent="#accordion_menumobile"
            >
              <li className="list-inline-item">
                <Link href="services/sellcars">
                  <a
                    className="nav-click btn btn-outline-dark border-0 w-100 text-left py-3"
                    title=""
                  >
                    <i className="fas fa-chevron-right mr-2"></i> Sell Cars
                  </a>
                </Link>
              </li>
              <li className="list-inline-item">
                <Link href="/services/parts">
                  <a
                    className="nav-click btn btn-outline-dark border-0 w-100 text-left py-3"
                    title=""
                    href="/services/parts"
                  >
                    <i className="fas fa-chevron-right mr-2"></i>Vehicle Parts
                  </a>
                </Link>
              </li>
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
              About
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
                className="nav-click btn btn-outline-dark border-0 w-100 text-left py-4 font-weight-bold"
                title=""
              >
                Contact
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
    </div>
  );
}
