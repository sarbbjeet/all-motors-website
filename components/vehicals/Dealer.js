import Image from "next/image";

export default function Dealer({
  numberOfVehicles = "240",
  name = "mohomad",
  phone = "+44 7876778732",
  image = "/images/backgroundProfileImage.jpeg",
  profileImage = "/images/profile1.jpeg",
}) {
  return (
    <div className="col-md-6 col-lg-12 mb-4">
      <section className="bg-white border p-3 px-lg-4 pt-4">
        <header className="text-right border-bottom border-dark pb-3 mb-4">
          <h4 className="text-dark font-weight-bold mb-0">
            Did you like this Vehicles?
          </h4>
          <p className="tagline mb-0 text-muted">Talk directly to me!</p>
        </header>
        <div className="agent_item bg-white border border-back-50 overflow-hidden text-center position-relative">
          <div
            className="d-block bg_cover position-relative agent_bg mb-n3"
            style={{ backgroundImage: `url(${image})` }}
          ></div>
          <div className="agent_avatar rounded-circle d-inline-block overflow-hidden p-1 bg-white position-relative shadow-sm mt-n5">
            <Image
              src={"/images/profile-icon.png"}
              layout="fill"
              objectFit="center"
              className="d-block w-100 rounded-circle p-1 slow_7s"
              alt="Silvio Camargo"
            />
          </div>

          <div className="px-3 pb-3">
            <div
              className="d-flex align-content-center flex-wrap"
              style={{ height: "70px" }}
            >
              <p className="h5 font-weight-bold text-body w-100 mb-0">{name}</p>
              <p className="text_small w-100 mb-0">
                {numberOfVehicles} Vehicles
              </p>
            </div>
          </div>

          <div className="agent_item_content slow_3s px-3 pb-3">
            <div className="d-flex justify-content-between w-100">
              <a
                className="btn btn-lg btn-outline-secondary flex-grow-1"
                data-toggle="tooltip"
                data-placement="top"
                href="#"
                title="(99) 44444-4444"
              >
                <i className="fab fa-whatsapp fa-2x"></i>
              </a>

              <a
                className="btn btn-lg btn-outline-secondary flex-grow-1 mx-1"
                data-toggle="tooltip"
                data-placement="top"
                href="#"
                title="mail@mail.com"
              >
                <i className="far fa-envelope fa-2x"></i>
              </a>

              <a
                className="btn btn-lg btn-outline-secondary flex-grow-1"
                data-toggle="tooltip"
                data-placement="top"
                href="#"
                title="(99) 22222-2222"
              >
                <i className="fas fa-phone-alt fa-2x"></i>
              </a>
            </div>

            {/* <a
              href="agents-single.html"
              title="View Profile"
              className="btn py-3 btn-outline-secondary w-100 mt-3 d-flex justify-content-between align-items-center py-2"
            >
              View Profile <i className="fas fa-angle-right"></i>
            </a> */}
          </div>
        </div>
      </section>
    </div>
  );
}
