import Link from "next/link";

export default function About() {
  return (
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
                    Curabitur in dignissim lectus. Ut tincidunt enim quis neque
                    tempor&apos; mollis imperdiet felis convallis. Phasellus
                    commodo magna eget varius semper. Morbi id dictum sem. Ut
                    varius volutpat sapien in congue.
                  </p>
                  <p>
                    Nam ex nulla&apos; scelerisque at porttitor at&apos; egestas
                    at dolor. Nulla sit amet nunc ac dolor egestas rhoncus id et
                    nunc. Donec volutpat sem eget tellus volutpat pretium.
                    Pellentesque mollis&apos; nibh id maximus ultrices, lectus
                    metus porta dui, quis scelerisque purus turpis et libero.
                    Praesent laoreet venenatis justo, in lacinia metus elementum
                    sit amet.
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
                      Curabitur in dignissim lectus. Ut tincidunt enim quis
                      neque tempor, mollis imperdiet felis convallis. Phasellus
                      commodo magna eget varius semper. Morbi id dictum sem. Ut
                      varius volutpat sapien in congue. Nam ex nulla,
                      scelerisque at porttitor at&#44; egestas at dolor.
                    </p>
                  </div>
                  <div
                    className="bg-white p-3 clearfix tab-pane fade slow_3s text-muted border border-dark mb-3 bg-light"
                    id="pills_vision"
                    role="tabpanel"
                  >
                    <p>
                      Nulla sit amet nunc ac dolor egestas rhoncus id et nunc.
                      Donec volutpat sem eget tellus volutpat pretium.
                      Pellentesque mollis&#44; nibh id maximus ultrices&#44;
                      lectus metus porta dui&#44; quis scelerisque purus turpis
                      et libero.
                    </p>
                  </div>
                  <div
                    className="bg-white p-3 clearfix tab-pane fade slow_3s text-muted border border-dark mb-3 bg-light"
                    id="pills_values"
                    role="tabpanel"
                  >
                    <p>
                      Praesent laoreet venenatis justo, in lacinia metus
                      elementum sit amet. Morbi id dictum sem. Ut varius
                      volutpat sapien in congue. Nam ex nulla, scelerisque at
                      porttitor at, egestas at dolor.
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
              <p className="text-muted">Our customers are happy to recommend</p>
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
                  <p className="h2 font_exbold mb-4 text_shadow">
                    We help you find the vehicle you want
                  </p>
                  <p className="h5 text_shadow">
                    With professional video guides&#44; articles&#44; and
                    information on what&#39;s cool in the world of used
                    cars&#44; we aim to make the process of finding the suitable
                    used car for you as simple as possible. And with the help of
                    our
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
  );
}
