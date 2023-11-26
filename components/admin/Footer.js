import React from "react";
import moment from "moment";

import { f2, f1 } from "../../styles/variables.module.scss";
import SendUsMessage from "../SendUsMessage";
export default function Footer() {
  return (
    <div className="border-top">
      <div className="py-2 footer container">
        <p>
          <span>System Name</span> - User Panel - By
          <span> AllMotorsLtd © {moment().format("YYYY")}</span>
        </p>

        <style jsx>
          {`
            .footer,
            span,
            p {
              font-size: 16px;
              font-weight: 700;
              font-family: ${f2};
            }
            .footer span {
              color: #0044ff;
            }
          `}
        </style>
      </div>
    </div>
  );
}
