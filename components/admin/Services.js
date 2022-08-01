import Link from "next/link";

import { f2 as ff } from "../../styles/variables.module.scss";
export default function Services() {
  return (
    <section>
      <header className="border-bottom my-4">
        <h3 className="text-primary font-weight-light">Featured Services</h3>
      </header>

      <div className="row justify-content-center py-3">
        <div className="col-6 col-md-4 pb-4">
          <Link href="/admin/vehicles">
            <a
              className="btn btn-block btn-success text-white py-lg-4 px-lg-3"
              title="My Vehicles"
              style={{ height: "100%" }}
            >
              <div className="d-flex justify-content-between">
                <span className="h1">
                  <i className="fas fa-home"></i>
                </span>
                <i className="fas fa-chevron-right align-self-center"></i>
              </div>
              <h4 className="mt-3 text-left h5">My Vehicles</h4>
            </a>
          </Link>
        </div>
        <div className="col-6 col-md-4 pb-4">
          <Link href="/admin/vehicles/register">
            <a
              className="btn btn-block btn-primary text-white py-lg-4 px-lg-3"
              title="Register Vehicles"
              style={{ height: "100%" }}
            >
              <div className="d-flex justify-content-between">
                <span className="h1">
                  <i className="fas fa-sign"></i>
                </span>
                <i className="fas fa-chevron-right align-self-center"></i>
              </div>
              <h4 className="mt-3 text-left h5">Register Vehicles</h4>
            </a>
          </Link>
        </div>
        <div className="col-md-4 pb-4">
          <Link href="/admin/vehicles/report">
            <a
              className="btn btn-block btn-warning text-white py-lg-4 px-lg-3"
              title="Report"
              style={{ height: "100%" }}
            >
              <div className="d-flex justify-content-between">
                <span className="h1">
                  <i className="far fa-list-alt"></i>
                </span>
                <i className="fas fa-chevron-right align-self-center"></i>
              </div>
              <h4 className="mt-3 text-left h5">Reports</h4>
            </a>
          </Link>
        </div>
      </div>

      <style jsx>
        {`
          div,
          p,
          a,
          li,
          label,
          span,
          h3,
          h4 {
            font-family: ${ff};
          }
        `}
      </style>
    </section>
  );
}
