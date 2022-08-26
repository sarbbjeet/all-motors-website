import Image from "next/image";
import * as font from "../../styles/variables.module.scss";
import { f2 as ff } from "../../styles/variables.module.scss";

export default function Feedback() {
  return (
    <div
      className="bg_parallax"
      style={{
        backgroundImage: "url(/images/feedback.jpeg)",
      }}
    >
      <div
        style={{ backgroundColor: "rgba(50, 50, 50, 0.5)", height: "300px" }}
        className="w-100 text-white d-flex flex-column justify-content-center align-items-center"
      >
        <div className="w-75 text-center">
          <p
            style={{ letterSpacing: "1px", fontSize: "18px" }}
            className="messageText text-center letter-spacing-1 text_shadow mb-5"
          >
            Car are clean and well condition. I am fully satisfied with the give
            services.
          </p>
          <h5 className="sendText">Pool Cambell </h5>
          <div className="starRating">
            <i style={{ color: "white" }} className="fas fa-star p-1"></i>
            <i style={{ color: "white" }} className="fas fa-star p-1"></i>
            <i style={{ color: "white" }} className="fas fa-star p-1"></i>
            <i style={{ color: "white" }} className="fas fa-star p-1"></i>
            <i style={{ color: "white" }} className="fas fa-star p-1"></i>
          </div>
        </div>
      </div>

      <style jsx>
        {`
          .messageText {
            font-family: ${ff} !important;
            font-size: 1.1rem !important;
            font-weight: 300;
          }
          .senderText {
            font-family: ${ff} !important;
            font-size: 1.1rem !important;
            font-weight: 500;
            letter-spacing: 1px !important;
          }
        `}
      </style>
    </div>
  );
}
