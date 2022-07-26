import Link from "next/link";
import React from "react";
import AdminWrapper from "../../../components/admin/AdminWrapper";
import Footer from "../../../components/admin/Footer";
import VehiclesList from "../../../components/admin/VehiclesList";

export default function Vehicles() {
  return (
    <AdminWrapper>
      <div className="container py-3">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb bg-transparent p-0 text_small">
            <li className="breadcrumb-item">
              <Link href="/admin">
                <a href="dashboard.html">Home</a>
              </Link>
            </li>
            <li className="breadcrumb-item active">My Vehicles</li>
          </ol>
        </nav>

        {/* SERACH  */}
        <div className="row">
          <form
            name="searchImobi"
            action="#"
            method="post"
            encType="multipart/form-data"
            className="col-12"
          >
            <div className="input-group">
              <div className="input-group-prepend bg-white">
                <div className="input-group-text">
                  <i className="fas fa-search"></i>
                </div>
              </div>
              <input
                type="search"
                name="s"
                className="form-control form-control-lg"
                placeholder="Search Vehicles:"
                required
                autoComplete={"off"}
              />
            </div>
          </form>
        </div>

        {/* unpublished vehicles */}
        <div className="alert alert-info alert-dismissible my-4">
          <h4 className="font-weight-light">
            <i className="fas fa-store-alt-slash"></i> Deactivated Vehicles
          </h4>
          You own an unpublished Vehicles.{" "}
          <a href="#" title="">
            Click here
          </a>{" "}
          to check...
        </div>
        <VehiclesList />
        <Footer />
      </div>
    </AdminWrapper>
  );
}
