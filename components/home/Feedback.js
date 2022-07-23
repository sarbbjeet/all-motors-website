import getDeviceSize from "../../utils/getDeviceSize";

import * as font from "../../styles/variables.module.scss";

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
            Decent selection and the guy took his time with us as we werenâ€™t
            sure what we wanted got a car in the end and itâ€™s been good itâ€™s
            done everything itâ€™s says on the tin
          </p>
          <h5 className="sendText">Sarbjit Singh </h5>
          <div className="starRating">
            <i style={{ color: "white" }} className="fas fa-star p-1"></i>
            <i style={{ color: "white" }} className="fas fa-star p-1"></i>
            <i style={{ color: "white" }} className="fas fa-star p-1"></i>
            <i style={{ color: "white" }} className="far fa-star p-1"></i>
            <i style={{ color: "white" }} className="far fa-star p-1"></i>
          </div>
        </div>
      </div>

      <style jsx>
        {`
          .messageText {
            font-family: ${font.f1} !important;
            font-size: 1rem !important;
            font-weight: 300;
          }
          .senderText {
            font-family: ${font.f1} !important;
            font-size: 1rem !important;
            font-weight: 500;
            letter-spacing: 1px !important;
          }
        `}
      </style>
    </div>
  );
}
