export default function RequestForm() {
  return (
    <div className="col-md-6 col-lg-12">
      <section className="bg-white border p-3 px-lg-4 pt-4 mb-4">
        <header className="text-right border-bottom border-dark pb-3 mb-4">
          <h4 className="text-dark font-weight-bold mb-0">Request a contact</h4>
          <p className="tagline mb-0 text-muted">
            Request a contact without obligation!
          </p>
        </header>

        <form
          className="pb-4"
          action="#"
          method="post"
          encType="multipart/form-data"
        >
          <div className="input-group border mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text bg-light border-0 text-muted">
                <i className="far fa-user"></i>
              </span>
            </div>
            <input
              type="text"
              className="form-control text-muted border-0 bg-light"
              name="client_name"
              id="name"
              placeholder="Name"
              required
            />
          </div>

          <div className="input-group border mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text border-0 text-muted bg-light">
                <i className="far fa-envelope"></i>
              </span>
            </div>
            <input
              type="text"
              className="form-control border-0 text-muted bg-light"
              name="client_email"
              id="email"
              placeholder="E-mail"
              required
            />
          </div>

          <div className="input-group border mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text border-0 text-muted bg-light">
                <i className="fas fa-phone-alt"></i>
              </span>
            </div>
            <input
              type="tel"
              className="form-control text-muted border-0 bg-light"
              name="client_phone"
              id="phone"
              placeholder="Phone"
              required
            />
          </div>

          <div className="form-group mt-2 border">
            <textarea
              className="form-control border-0 bg-light"
              name="client_message"
              rows="5"
              id="message"
              placeholder="I liked this Vehicles and would like more information."
            />
          </div>

          <button className="btn btn-primary btn-block py-3" type="submit">
            Send Message
          </button>
        </form>
      </section>
    </div>
  );
}
