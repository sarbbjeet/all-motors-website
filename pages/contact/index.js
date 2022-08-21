import Link from "next/link";
import React, { useState } from "react";
import Layout from "../../components/Layout";
import SendUsMessage from "../../components/SendUsMessage";
import { f2 as ff } from "../../styles/variables.module.scss";

export default function Index() {
  const [closeWindow, setCloseWindow] = useState(false);
  return (
    <Layout>
      <main className="bg-light mt-4">
        <section>
          <header
            className="text-center bg_parallax bg-white"
            style={{
              background: `url(/images/bac2.jpeg) center no-repeat`,
              // height: "300px",
              backgroundSize: "cover",
              backgroundAttachment: "fixed",
            }}
          >
            <div className="bg_shadow py-5">
              <div className="container py-3 position-relative text_shadow text-white">
                <div className="row justify-content-center">
                  <div className="col-md-10 col-lg-8 col-xl-6">
                    <h2 className="font-weight-bold h1 section_title">
                      Contact Us
                    </h2>

                    <nav className="d-inline-block" aria-label="breadcrumb">
                      <h2 className="sr-only">Breadcrumb</h2>
                      <ol className="breadcrumb bg-transparent py-0">
                        <li className="breadcrumb-item">
                          <Link href="/">
                            <a className="text-light font-weight-bold">Home</a>
                          </Link>
                        </li>
                        <li className="breadcrumb-item active text-white">
                          Contact
                        </li>
                      </ol>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          </header>

          <div className="message-wrapper">
            <SendUsMessage closeEvent={(state) => setCloseWindow(state)} />
          </div>

          <div className="container py-5">
            <div className="row py-3">
              <SendUsMessage hiddenCloseBtn={true} />
              <div className="col-lg-6 col-xl-5">
                <div
                  className="bg-dark border px-3 px-md-4 py-3"
                  style={{ height: "100%" }}
                >
                  <p className="h5 font-weight-bold footer_title mb-2 text-light">
                    Get In Touch
                  </p>
                  <p className="text-light">
                    To view our most recent selection of top-notch used
                    vehicles, visit our website. Call All Motors Ltd., send us
                    an email, or get in touch with us on WhatsApp to find out
                    more about any of our automobiles.
                  </p>

                  <a
                    className="btn btn-dark text-left py-3"
                    href="tel:+44792-768-4797"
                    title="Phone"
                  >
                    <i className="fas fa-phone-alt mr-2"></i> (44) 7927684797
                  </a>
                  <a
                    className="btn btn-dark text-left py-3"
                    href="https://wa.me/0447927684797"
                    title="Whatsapp"
                  >
                    <i className="fab fa-whatsapp mr-2"></i> (44) 7927684797
                  </a>
                  <a
                    onClick={() => setCloseWindow(true)}
                    className="btn btn-dark text-left py-3"
                    href="#"
                    title="E-mail"
                  >
                    <i className="far fa-envelope mr-2"></i>{" "}
                    contact@allmotors.co.uk
                  </a>

                  <p className="h5 font-weight-bold footer_title mb-2 mt-4 text-light">
                    Visit us
                  </p>
                  <a className="btn btn-dark text-left py-3" href="#" title="">
                    <i className="far fa-map"></i> Camps industrial estates
                    kirknewton EH27 8DF
                  </a>

                  <p className="h5 font-weight-bold footer_title mb-2 mt-4 text-light">
                    Follow us
                  </p>

                  <div className="d-block">
                    <a
                      className="btn btn-lg btn-dark"
                      href="#"
                      title="Facebook"
                    >
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a className="btn btn-lg btn-dark" href="#" title="Youtube">
                      <i className="fab fa-youtube"></i>
                    </a>
                    <a
                      className="btn btn-lg btn-dark"
                      href="#"
                      title="Instagram"
                    >
                      <i className="fab fa-instagram"></i>
                    </a>
                    <a className="btn btn-lg btn-dark" href="#" title="Twitter">
                      <i className="fab fa-twitter"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <style jsx>
            {`
              h2,
              h4,
              a,
              li,
              label,
              div,
              span,
              button,
              p {
                font-family: ${ff};
              }

              .message-wrapper {
                top: 0;
                width: 100%;
                height: 200%;
                padding-top: 70px;
                justify-content: center;
                z-index: 100;
                position: fixed;
                background-color: rgba(0, 0, 0, 0.9);
                display: ${closeWindow ? "flex" : "none"};
              }
            `}
          </style>
        </section>
      </main>
    </Layout>
  );
}
