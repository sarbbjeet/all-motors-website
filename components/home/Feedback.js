import getDeviceSize from "../../utils/getDeviceSize";

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
            className="text-center letter-spacing-1 text_shadow mb-5"
          >
            Decent selection and the guy took his time with us as we werenâ€™t
            sure what we wanted got a car in the end and itâ€™s been good itâ€™s
            done everything itâ€™s says on the tin
          </p>
          <h5>Sarbjit Singh </h5>
          <div className="starRating">
            <i style={{ color: "blue" }} className="fas fa-star p-1"></i>
            <i style={{ color: "blue" }} className="fas fa-star p-1"></i>
            <i style={{ color: "blue" }} className="fas fa-star p-1"></i>
            <i style={{ color: "blue" }} className="fas fa-star p-1"></i>
            <i style={{ color: "blue" }} className="fas fa-star-half p-1"></i>
          </div>
        </div>
      </div>
    </div>
  );
}
