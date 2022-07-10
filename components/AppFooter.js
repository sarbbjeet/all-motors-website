//import React from "react";
import Image from "next/image";

export default function AppFooter() {
  return (
    <footer className="main_footer bg-dark text-light d-print-none">
      <div className="container">
        <div className="row pt-5">
          <div className="col-sm-6 col-lg-3 pb-5">
            <a
              className="main_brand d-inline-block mb-3"
              href="index.html"
              title="MaxMotors - Home"
            >
              <Image
                className="d-block w-100"
                width="120px"
                height="40px"
                src="/images/brand-white.png"
                alt=""
                title=""
              />
            </a>
            <p>
              Lorem ipsum dolor sit amet, ed do eiusmod tempor incididunt ut
              labore et dolore. Sed do eiusmod tempor incididunt ut labore et
              dolore
            </p>

            <a className="btn btn-lg btn-outline-light mb-2" href="#" title="">
              <i className="fab fa-google-play"></i> Play Store
            </a>

            <a className="btn btn-lg btn-outline-light mb-2" href="#" title="">
              <i className="fab fa-apple"></i> App Store
            </a>
          </div>

          <div className="col-sm-6 col-lg-3 pb-5">
            <p className="h5 font-weight-bold footer_title mb-4">Quick Links</p>

            <ul className="list-unstyled">
              <li className="list-inline-item w-100">
                <a
                  className="btn btn-block btn_height btn-dark text-left border-0 px-1"
                  href="about.html"
                  title=""
                >
                  <i className="fas fa-angle-double-right"></i> About us
                </a>
              </li>
              <li className="list-inline-item w-100">
                <a
                  className="btn btn-block btn_height btn-dark text-left border-0 px-1"
                  href="vehicles-search.html"
                  title=""
                >
                  <i className="fas fa-angle-double-right"></i> Vehicles Search
                </a>
              </li>
              <li className="list-inline-item w-100">
                <a
                  className="btn btn-block btn_height btn-dark text-left border-0 px-1"
                  href="landing-page.html"
                  title=""
                >
                  <i className="fas fa-angle-double-right"></i> Submit Vehicles
                </a>
              </li>
              <li className="list-inline-item w-100">
                <a
                  className="btn btn-block btn_height btn-dark text-left border-0 px-1"
                  href="blog-home.html"
                  title=""
                >
                  <i className="fas fa-angle-double-right"></i> Blog
                </a>
              </li>
              <li className="list-inline-item w-100">
                <a
                  className="btn btn-block btn_height btn-dark text-left border-0 px-1"
                  href="contact.html"
                  title=""
                >
                  <i className="fas fa-angle-double-right"></i> Contact us
                </a>
              </li>
            </ul>
          </div>

          <div className="col-sm-6 col-lg-3 pb-5">
            <p className="h5 font-weight-bold footer_title mb-4">Contact us</p>
            <ul className="list-unstyled">
              <li className="list-inline-item w-100">
                <a
                  className="btn btn-block btn_height btn-dark text-left border-0 px-1"
                  href="#"
                  title="Phone"
                >
                  <i className="fas fa-phone-alt mr-2"></i> (44) 7927684797
                </a>
              </li>
              <li className="list-inline-item w-100">
                <a
                  className="btn btn-block btn_height btn-dark text-left border-0 px-1"
                  href="#"
                  title="Whatsapp"
                >
                  <i className="fab fa-whatsapp mr-2"></i> (44) 7927684797
                </a>
              </li>
              <li className="list-inline-item w-100">
                <a
                  className="btn btn-block btn_height btn-dark text-left border-0 px-1 text_small"
                  href="#"
                  title="E-mail"
                >
                  <i className="far fa-envelope mr-2"></i>
                  contact@allmotors.co.uk
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

          <div className="col-sm-6 col-lg-3 pb-5">
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
          </div>
        </div>
      </div>
      <div className="content_copy bg-primary text-light text-center py-3">
        <div className="container text_small">
          AllMotors © 2022. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
