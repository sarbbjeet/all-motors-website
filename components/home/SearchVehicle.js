import React from "react";

export default function SearchVehicle() {
  return (
    <div
      className="bg_parallax py-5"
      style={{
        backgroundImage: "url(/images/banner1.jpg)",
      }}
    >
      <div className="container py-5">
        <div className="row justify-content-center pb-5">
          <div className="col-12 col-xl-9 pb-5 mb-5">
            <p className="h1 font_exbold text_shadow text-white text-center mb-4">
              Find your future vehicle here!
            </p>

            <div className="shadow-8dp">
              <ul
                className="nav nav-pills bg-dark d-flex"
                id="pills-tab"
                role="tablist"
              >
                <li className="nav-item border-white overflow-hidden flex-fill">
                  <a
                    className="nav-link active btn btn-dark font-weight-bold rounded-0 p-3 px-sm-4 px-md-5"
                    id="tab_car"
                    data-toggle="pill"
                    href="#pills_car"
                    role="tab"
                    aria-controls="pills_car"
                    aria-selected="true"
                  >
                    <i className="fas fa-car-side"></i>
                    <span className="d-none d-sm-inline-block ml-1">Cars</span>
                  </a>
                </li>

                <li className="nav-item overflow-hidden flex-fill">
                  <a
                    className="nav-link btn btn-dark font-weight-bold rounded-0 p-3 px-sm-4 px-md-5"
                    id="tab_truck"
                    data-toggle="pill"
                    href="#pills_truck"
                    role="tab"
                    aria-controls="pills_truck"
                    aria-selected="false"
                  >
                    <i className="fas fa-truck"></i>
                    <span className="d-none d-sm-inline-block ml-1">Truck</span>
                  </a>
                </li>
              </ul>

              <div className="tab-content" id="pills-tabContent">
                <div
                  className="bg-white px-3 px-xl-4 py-4 tab-pane fade show active slow_3s"
                  id="pills_car"
                  role="tabpanel"
                  aria-labelledby="tab_car"
                >
                  <form
                    className="input-group input-group-lg border p-1 bg-light"
                    action="#"
                    name="search_car"
                    method="post"
                  >
                    <div className="input-group-prepend">
                      <span className="input-group-text bg-light text-muted border-0">
                        <i className="fas fa-car-side"></i>
                      </span>
                    </div>
                    <input
                      type="text"
                      name="cap_search"
                      placeholder="Brand or Model"
                      className="form-control border-0 bg-light"
                    />
                    <div className="input-group-append">
                      <button className="btn btn-primary rounded-0">
                        <i className="fas fa-search"></i>
                        <span className="d-none d-sm-inline-block ml-1">
                          Search
                        </span>
                      </button>
                    </div>
                  </form>
                </div>

                <div
                  className="bg-white px-3 px-xl-4 py-4 tab-pane fade slow_3s"
                  id="pills_truck"
                  role="tabpanel"
                  aria-labelledby="tab_truck"
                >
                  <form
                    className="input-group input-group-lg border p-1 bg-light"
                    action="#"
                    name="search_truck"
                    method="post"
                  >
                    <div className="input-group-prepend">
                      <span className="input-group-text bg-light text-muted border-0">
                        <i className="fas fa-truck"></i>
                      </span>
                    </div>
                    <input
                      type="text"
                      name="cap_search"
                      placeholder="Brand or Model"
                      className="form-control border-0 bg-light"
                    />
                    <div className="input-group-append">
                      <button className="btn btn-primary rounded-0">
                        <i className="fas fa-search"></i>{" "}
                        <span className="d-none d-sm-inline-block ml-1">
                          Search
                        </span>
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
