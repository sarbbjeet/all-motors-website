import Link from "next/link";
import React, { useState, useEffect } from "react";
import AdminWrapper from "../../../components/admin/AdminWrapper";

import { useRouter } from "next/router";
import Image from "next/image";
import Script from "next/script";
import Indicator from "../../../components/admin/form/Indicator";
import Stage1 from "../../../components/admin/form/Stage1";
import Stage2 from "../../../components/admin/form/Stage2";
import { f1 as ff, secondary } from "../../../styles/variables.module.scss";
import Stage3 from "../../../components/admin/form/Stage3";
import Stage4 from "../../../components/admin/form/Stage4";
export default function Register({ props }) {
  const { query } = useRouter(); //page-->edit
  const [ssr, setSSR] = useState(true);
  useEffect(() => {
    //useEffect run on client side
    setSSR(false); //when window is fully loaded
  }, []);
  return (
    <AdminWrapper>
      <div className="py-2 container">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb bg-transparent p-0 text_small">
            <li className="breadcrumb-item">
              <Link href="/admin">
                <a href="dashboard.html">Home</a>
              </Link>
            </li>
            <li className="breadcrumb-item">
              <Link href="/admin/vehicles">
                <a href="dashboard.html">My Vehicles</a>
              </Link>
            </li>
            <li className="breadcrumb-item active">Register Vehicle</li>
          </ol>
        </nav>
        <header className="border-bottom my-4 mb-4">
          <h3 className="font-weight-light">
            <i className="fas fa-sign"></i> Register Vehicles
          </h3>
          {/* <p className="text-muted">
            <b>Refer:</b> #0112
          </p> */}
        </header>
        <div className="py-3">
          <div className="position-relative bg-white rounded border shadow-sm py-3">
            <Indicator>
              <Stage4 />
            </Indicator>
          </div>
        </div>

        <style jsx>
          {`
            header {
              border-bottom: 1px solid ${secondary}!important;
            }
            h3 {
              font-family: ${ff};
              color: ${secondary};
            }
          `}
        </style>
      </div>
    </AdminWrapper>
  );
}
