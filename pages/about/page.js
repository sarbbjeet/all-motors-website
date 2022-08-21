import Link from "next/link";
import Layout from "../../components/Layout";
import { f2 as ff } from "../../styles/variables.module.scss";

export default function About() {
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
                      About Us
                    </h2>
                    <nav className="d-inline-block" aria-label="breadcrumb">
                      <h2 className="sr-only">Breadcrumb</h2>
                      <ol className="breadcrumb bg-transparent py-0">
                        <li className="breadcrumb-item">
                          <Link href="/">
                            <a
                              className="text-light font-weight-bold"
                              href="index.html"
                            >
                              Home
                            </a>
                          </Link>
                        </li>
                        <li className="breadcrumb-item active text-white">
                          About Us
                        </li>
                      </ol>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          </header>
          <div className="container py-5">
            <div className="row py-3">
              <div className="col-lg-6 order-1 order-lg-0">
                <div
                  className="bg_cover"
                  style={{
                    backgroundImage: `url(/images/metting1.jpg)`,
                    minHeight: "360px",
                    height: "100%",
                  }}
                ></div>
              </div>
              <div className="col-lg-6 order-0 order-lg-1 mb-5 mb-lg-0">
                <section
                  className="bg-white p-3 px-lg-4 pt-4 border d-print-none"
                  style={{ height: "100 %" }}
                >
                  <header className="border-bottom border-dark mb-4">
                    <h4 className="text-dark font-weight-bold mb-3">
                      About Our Company
                    </h4>
                  </header>
                  <div className="text-muted">
                    <p>
                      The feedback from our clients is important to us at All
                      Motors Ltd. As a reputable used vehicle dealership in
                      Edinburgh, Midlothian, it is our goal to develop strong
                      bonds with each of our clients. Therefore, if you have any
                      concerns about our used cars or services, don&apos;t
                      hesitate to get in touch with us by phone or email. We
                      also always appreciate your comments and suggestions.
                    </p>
                    <p>
                      Our friendly service will go beyond and above to make sure
                      you get the guidance you require. The majority of our
                      clients return to us because of this.
                    </p>
                  </div>

                  <div
                    className="nav nav-pills text-center mt-5"
                    id="pills-tab"
                    role="tablist"
                  >
                    <a
                      className="nav-link active btn btn-dark font-weight-bold py-3 mb-3 px-0"
                      id="tab_mission"
                      data-toggle="pill"
                      href="#pills_mission"
                      role="tab"
                      aria-controls="pills_mission"
                      aria-selected="true"
                    >
                      <i className="fas fa-medal fa-2x"></i>{" "}
                      <span className="d-inline-block w-100">Our Mission</span>
                    </a>
                    <a
                      className="nav-link btn btn-primary font-weight-bold py-3 mb-3 mx-3 px-0"
                      id="tab_vision"
                      data-toggle="pill"
                      href="#pills_vision"
                      role="tab"
                      aria-controls="pills_vision"
                      aria-selected="false"
                    >
                      <i className="fas fa-medal fa-2x"></i>{" "}
                      <span className="d-inline-block w-100">Our Vision</span>
                    </a>
                    <a
                      className="nav-link btn btn-success font-weight-bold py-3 mb-3 px-0"
                      id="tab_cvalue"
                      data-toggle="pill"
                      href="#pills_values"
                      role="tab"
                      aria-controls="pills_values"
                      aria-selected="false"
                    >
                      <i className="fas fa-medal fa-2x"></i>{" "}
                      <span className="d-inline-block w-100">Our Value</span>
                    </a>
                  </div>
                  <div className="tab-content" id="pills-tabContent">
                    <div
                      className="bg-white p-3 clearfix tab-pane fade active show slow_3s text-muted border border-dark mb-3 bg-light"
                      id="pills_mission"
                      role="tabpanel"
                    >
                      <p>
                        The feedback from our clients is important to us at All
                        Motors Ltd. As a reputable used vehicle dealership in
                        Edinburgh, Midlothian, it is our goal to develop strong
                        bonds with each of our clients. Therefore, if you have
                        any concerns about our used cars or services, don&apos;t
                        hesitate to get in touch with us by phone or email. We
                        also always appreciate your comments and suggestions.
                      </p>
                    </div>
                    <div
                      className="bg-white p-3 clearfix tab-pane fade slow_3s text-muted border border-dark mb-3 bg-light"
                      id="pills_vision"
                      role="tabpanel"
                    >
                      <p>
                        Our friendly staff will go the extra mile to guarantee
                        that you receive the advice you need. This is the reason
                        why many of our customers keep coming back to us.
                      </p>
                    </div>
                    <div
                      className="bg-white p-3 clearfix tab-pane fade slow_3s text-muted border border-dark mb-3 bg-light"
                      id="pills_values"
                      role="tabpanel"
                    >
                      <p>
                        Our aim is simple: to provide a wide choice of cars at
                        fantastic prices in a pleasant environment with no sales
                        pressure. Our sales team do not have sales targets, so
                        you will be left in peace to browse with help at hand
                        when you need it.
                      </p>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>

          <div className="container pb-5">
            <div className="row text-dark text-center no-gutters">
              <div className="col-sm-4 py-4">
                <div className="d-inline-block p-4 bg-white rounded-circle border border-primary">
                  <i className="fas fa-search-dollar fa-4x text-primary"></i>
                </div>
                <p className="font-weight-bold mb-0 mt-3 h5">Best prices</p>
                <p className="text-muted">
                  We offer the best prices in the region
                </p>
              </div>
              <div className="col-sm-4 py-4">
                <div className="d-inline-block p-4 bg-white rounded-circle border border-primary">
                  <i className="fas fa-trophy fa-4x text-primary"></i>
                </div>
                <p className="font-weight-bold mb-0 mt-3 h5">Quality</p>
                <p className="text-muted">Our vehicles are amazing</p>
              </div>
              <div className="col-sm-4 py-4">
                <div className="d-inline-block p-4 bg-white rounded-circle border border-primary">
                  <i className="fas fa-laugh-wink fa-4x text-primary"></i>
                </div>
                <p className="font-weight-bold mb-0 mt-3 h5">Happy customers</p>
                <p className="text-muted">
                  Our customers are happy to recommend
                </p>
              </div>
            </div>
          </div>

          <div
            className="bg_parallax"
            style={{ backgroundImage: `url(/images/bac1.jpg)` }}
          >
            <div className="bg_shadow">
              <div className="container py-5 text-center text-white">
                <div className="row justify-content-center">
                  <div className="col-lg-9 col-xl-7">
                    <p className="font_exbold mb-4 text_shadow">
                      We help you find the vehicle you want
                    </p>
                    <p className="text_shadow">
                      With professional video guides&#44; articles&#44; and
                      information on what&#39;s cool in the world of used
                      cars&#44; we aim to make the process of finding the
                      suitable used car for you as simple as possible. And with
                      the help of our
                      <b> Smart Search </b>
                      feature&#44; it couldn&#39;t be simpler.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <style jsx>{`
        h2,
        h4,
        a,
        li,
        label,
        div,
        span,
        p {
          font-family: ${ff};
        }
        .font_exbold {
          font-size: 1.2rem;
        }
      `}</style>
    </Layout>
  );
}
