import { f1, f2, f5 } from "../../styles/variables.module.scss";
import Image from "next/image";
import Link from "next/link";
export default function index() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container">
        <Link href="/admin">
          <a className="navbar-brand">
            {/* LOGO */}
            <div>
              <p
                className="m-0"
                style={{
                  textShadow: "2px 2px 5px rgba(0,100,0,0.9)",
                  fontFamily: f5,
                  fontSize: "1.5rem",
                }}
              >
                All-
                <span style={{ font: "inherit", color: "#00ff00" }}>
                  Motors
                </span>
              </p>
            </div>
          </a>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Open Navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <a className="nav-link" href="dashboard.html">
                Home <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item dropdown ">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="VehiclesDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Vehicles
              </a>
              <div
                className="dropdown-menu dropdown-menu-right p-0 overflow-hidden"
                aria-labelledby="VehiclesDropdown"
              >
                <Link href="/admin/vehicles">
                  <a className="dropdown-item py-3">
                    <i className="fas fa-home mr-2"></i> My Vehicles
                  </a>
                </Link>
                <Link href="/admin/vehicles/register">
                  <a className="dropdown-item py-3">
                    <i className="fas fa-sign mr-2"></i> Register Vehicles
                  </a>
                </Link>
                <Link href="/admin/vehicles/report">
                  <a className="dropdown-item py-3">
                    <i className="far fa-list-alt mr-2"></i> Vehicles Report
                  </a>
                </Link>
              </div>
            </li>
            <li className="nav-item dropdown notifications_menu">
              <a
                className="nav-link dropdown-toggle position-relative"
                href="#"
                id="navbarNotification"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <i className="far fa-bell"></i>
                <span className="badge badge-warning j_alert">2</span>
              </a>
              <div
                className="dropdown-menu dropdown-menu-right p-0 overflow-hidden"
                aria-labelledby="navbarNotification"
              >
                <a
                  className="dropdown-item py-3"
                  href="dashboard-vehicles-inactive.html"
                  title="Inactive Vehicles"
                >
                  You have 3 inactive Vehicles!
                </a>
                <a
                  className="dropdown-item py-3"
                  href="dashboard-profile.html"
                  title="Inactive Vehicles"
                >
                  You need add address in you profile
                </a>
                <div className="dropdown-divider"></div>
                <a
                  className="dropdown-item text-primary py-3"
                  href="dashboard-notification.html"
                >
                  View notification details
                </a>
              </div>
            </li>
            <li className="nav-item dropdown ">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Hello <b>Admin!</b>
              </a>
              <div
                className="dropdown-menu dropdown-menu-right overflow-hidden p-0 overflow-hidden"
                aria-labelledby="navbarDropdown"
              >
                <div className="dropdown-item disabled bg-info py-3 text-center text-white d-block px-lg-5">
                  <Image
                    className="rounded-circle img-thumbnail profile_img"
                    alt="Admin"
                    title="Admin"
                    src="/images/600x600.jpg"
                    width="50px"
                    height="50px"
                  />
                  <h5 className="mb-0 mt-2">Admin System</h5>
                  <small>Super Admin (adm)</small>
                </div>
                <a
                  className="dropdown-item py-3"
                  href="dashboard-profile.html"
                  title="My profile"
                >
                  <i className="far fa-id-badge mr-2"></i> My profile
                </a>
                <div className="dropdown-divider"></div>
                <span
                  className="dropdown-item py-3 j_confirm_url"
                  title="Disconnect from System"
                  data-title="Go out now?"
                  data-icon="warning"
                  data-url="account-login.html"
                  data-textgo="I want to leave now"
                >
                  <i className="fas fa-sign-out-alt"></i> Go out
                </span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
