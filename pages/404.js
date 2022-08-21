import Link from "next/link";
import React from "react";
import Layout from "../components/Layout";
import { f2 as ff } from "../styles/variables.module.scss";

export default function FourOhFour() {
  return (
    <Layout>
      <div className="body-container">
        <h4>404 - Page Not Found</h4>
      </div>

      <style jsx>
        {`
          h4 {
            font-family: ${ff};
            color: #666;
          }
          .body-container {
            display: flex;
            width: 100%;
            direction: column;
            justify-content: center;
            align-items: center;
            min-height: 500px;
          }
        `}
      </style>
    </Layout>
  );
}
