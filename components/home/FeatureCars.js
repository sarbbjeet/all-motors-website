import React from "react";
import Image from "next/image";

export default function FeatureCars() {
  return (
    <section className="section_content py-5">
      <header className="container text-center pt-3">
        <div className="row justify-content-center">
          <div className="col-md-10 col-lg-8 col-xl-6">
            <h2 className="font-weight-bold text-dark section_title">
              Featured Vehicles
            </h2>
            <p className="tagline text-muted">
              Diliges proximum tuum sicut te ipsum. Propitius esto tibi. Vivamus
              hodie iam vivere.
            </p>
          </div>
        </div>
      </header>
      <div className="py-3">
        <div className="container">
          <div className="mx-n3">
            <div className="slide_two slide_max arrow_inner">
              {/* featured 1 */}
              <article
                // style={{ width: "300px", height: "300px" }}
                className="post_item w-100 featured d-block overflow-hidden px-3"
                id="featured-10"
              >
                <div className="w-100 h-100 position-relative overflow-hidden">
                  <Image
                    className="d-block w-100 h-100 slow_3s position-relative"
                    src="/images/1200x628.jpg"
                    title=""
                    alt=""
                    width="200%"
                    height="200%"
                  />

                  {/* <a
                    className="text-decoration-none position-absolute d-flex w-100 text-white bg_shadow"
                    title=""
                    href="vehicles-single.html"
                  >
                    <header className="align-self-end p-3 text_shadow w-100">
                      <sup>$</sup>
                      <span className="h2">750.000.00</span>
                      <h3 className="h4 font-weight-bold">Toyota GT86</h3>
                    </header>
                  </a> */}
                </div>
              </article>

              <article
                style={{ width: "300px", height: "300px" }}
                className="post_item  featured d-block overflow-hidden px-3"
                id="featured-10"
              >
                <div className="w-100 h-100 position-relative overflow-hidden">
                  <Image
                    className="d-block w-100 h-100 slow_3s position-relative"
                    src="/images/1200x628.jpg"
                    title=""
                    alt=""
                    layout="fill"
                  />
                </div>
              </article>
              <article
                style={{ width: "300px", height: "300px" }}
                className="post_item  featured d-block overflow-hidden px-3"
                id="featured-10"
              >
                <div className="w-100 h-100 position-relative overflow-hidden">
                  <Image
                    className="d-block w-100 h-100 slow_3s position-relative"
                    src="/images/1200x628.jpg"
                    title=""
                    alt=""
                    layout="fill"
                  />
                </div>
              </article>

              {/* featured 2  */}

              {/* <article
                style={{ width: "300px", height: "300px" }}
                className="post_item featured d-block w-100 overflow-hidden px-3"
                id="featured-10"
              >
                <div
                  style={{ width: "100%", height: "100%" }}
                  className="w-100 position-relative overflow-hidden"
                >
                  <Image
                    className="d-block w-100 slow_3s position-relative"
                    src="/images/1200x628.jpg"
                    title=""
                    alt=""
                    layout="fill"
                  />

                  <a
                    className="text-decoration-none position-absolute d-flex w-100 text-white bg_shadow"
                    title=""
                    href="vehicles-single.html"
                  >
                    <header className="align-self-end p-3 text_shadow w-100">
                      <sup>$</sup>
                      <span className="h2">250.000.00</span>
                      <h3 className="h4 font-weight-bold">BMW GT86</h3>
                    </header>
                  </a>
                </div>
              </article> */}

              {/* featured 3  */}
              {/* <article
                style={{ width: "300px", height: "300px" }}
                className="post_item featured d-block w-100 overflow-hidden px-3"
                id="featured-10"
              >
                <div
                  style={{ width: "100%", height: "100%" }}
                  className="w-100 position-relative overflow-hidden"
                >
                  <Image
                    className="d-block w-100 slow_3s position-relative"
                    src="/images/1200x628.jpg"
                    title=""
                    alt=""
                    layout="fill"
                  />

                  <a
                    className="text-decoration-none position-absolute d-flex w-100 text-white bg_shadow"
                    title=""
                    href="vehicles-single.html"
                  >
                    <header className="align-self-end p-3 text_shadow w-100">
                      <sup>$</sup>
                      <span className="h2">250.000.00</span>
                      <h3 className="h4 font-weight-bold">BMW GT86</h3>
                    </header>
                  </a>
                </div>
              </article> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
