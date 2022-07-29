import React from "react";

import { f2, f1 } from "../../styles/variables.module.scss";
export default function Footer() {
  return (
    <div className="border-top">
      <div className="py-2 footer container">
        <p>
          <span>System Name</span> - User Panel - By
          <span> AllMotorsLtd © 2022</span>
        </p>

        <style jsx>
          {`
            .footer,
            span,
            p {
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
