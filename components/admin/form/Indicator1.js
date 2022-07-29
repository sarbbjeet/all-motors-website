import React from "react";

export default function Indicator1() {
  return (
    <section className="step-wizard">
      <ul className="step-wizard-list">
        <li className="step-wizard-item">
          <span className="progress-count">1</span>
          <span className="progress-label">Billing Info</span>
        </li>
        <li className="step-wizard-item">
          <span className="progress-count">2</span>
          <span className="progress-label">Payment Method</span>
        </li>
        <li className="step-wizard-item current-item">
          <span className="progress-count">3</span>
          <span className="progress-label">Checkout</span>
        </li>
        <li className="step-wizard-item">
          <span className="progress-count">4</span>
          <span className="progress-label">Success</span>
        </li>
      </ul>

      <style jsx>
        {`
          .step-wizard {
            // display: flex;
            // flex: 0 0 100%;
            // justify-content: center;
            // align-items: center;
          }
          .step-wizard-list {
            background: #fff;
            // width: 100%;
            //box-shadow: 0 15px 25px rgba(0, 0, 0, 0.1);
            // color: #333;
            list-style-type: none;
            border-radius: 10px;
            display: flex;
            flex: 0 0 100%;
            padding: 20px 10px;
            position: relative;
            z-index: 10;
          }

          .step-wizard-item {
            padding: 0 20px;
            flex-basis: 0;
            -webkit-box-flex: 1;
            -ms-flex-positive: 1;
            flex-grow: 1;
            max-width: 100%;
            display: flex;
            flex-direction: column;
            text-align: center;
            width: 170px;
            position: relative;
          }
          .step-wizard-item + .step-wizard-item:after {
            content: "";
            position: absolute;
            left: 0;
            top: 19px;
            background: #21d4fd;
            width: 100%;
            height: 2px;
            transform: translateX(-50%);
            z-index: -10;
          }
          .progress-count {
            height: 40px;
            width: 40px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 50%;
            font-weight: 600;
            margin: 0 auto;
            position: relative;
            z-index: 10;
            color: transparent;
          }
          .progress-count:after {
            content: "";
            height: 40px;
            width: 40px;
            background: #21d4fd;
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            border-radius: 50%;
            z-index: -10;
          }
          .progress-count:before {
            content: "";
            height: 10px;
            width: 20px;
            border-left: 3px solid #fff;
            border-bottom: 3px solid #fff;
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -60%) rotate(-45deg);
            transform-origin: center center;
            display: none;
          }
          .progress-label {
            font-size: 14px;
            font-weight: 600;
            margin-top: 10px;
          }
          .current-item .progress-count:before,
          .current-item ~ .step-wizard-item .progress-count:before {
            display: none;
          }
          .current-item ~ .step-wizard-item .progress-count:after {
            height: 10px;
            width: 10px;
          }
          .current-item ~ .step-wizard-item .progress-label {
            opacity: 0.5;
          }
          .current-item .progress-count:after {
            background: #fff;
            border: 2px solid #21d4fd;
          }
          .current-item .progress-count {
            color: #21d4fd;
          }
        `}
      </style>
    </section>
  );
}
