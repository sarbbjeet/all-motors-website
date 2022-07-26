import React from "react";

import { f2, f1 } from "../../styles/variables.module.scss";
export default function Footer() {
  return (
    <div className="border-top py-2 footer">
      <p>
        <span>System Name</span> - User Panel - By
        <span>allmotorsltd.co.uk</span>
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
  );
}
