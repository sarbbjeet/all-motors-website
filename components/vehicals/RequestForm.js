import _ from "lodash";
import axios from "axios";
import { useEffect, useState } from "react";
const initialQueryObj = {
  name: "",
  email: "",
  phone: "",
  type: "request",
  message: "",
  loading: "",
  error: "",
  success: false,
};
const url = "/api/customer_query";
export default function RequestForm() {
  const [query, setQuery] = useState(initialQueryObj);
  const onChangeInput = ({ target: { name, value } }) => {
    setQuery({ ...query, [name]: value, success: false, error: "" });
  };

  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      setQuery({ ...initialQueryObj, loading: true });
      await axios(url, {
        method: "POST",
        data: _.pick(query, ["name", "email", "phone", "type", "message"]),
      });
      setQuery({ ...initialQueryObj, success: true });
    } catch (err) {
      setQuery({
        ...query,
        loading: false,
        error: err?.response?.data?.error || err?.message,
        success: false,
      });
    }
  };
  return (
    <div
      className="col-md-6 col-lg-12"
      onClick={() => setQuery({ ...query, success: false, error: "" })}
    >
      <section className="bg-white border p-3 px-lg-4 pt-4 mb-4">
        <header className="text-right border-bottom border-dark pb-3 mb-4">
          <h4 className="text-dark font-weight-bold mb-0">Request a contact</h4>
          <p className="tagline mb-0 text-muted">
            Request a contact without obligation!
          </p>
        </header>

        <div className="notification">
          {query?.success && (
            <p className="alert alert-success">
              Successfully sent query <br />
              Any member of the team will contact you soon!
            </p>
          )}
          {query?.error != "" && (
            <p className="alert alert-danger">{query?.error}</p>
          )}
        </div>
        <form
          className="pb-4"
          action="#"
          method="post"
          onSubmit={onSubmitForm}
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
              name="name"
              id="name"
              placeholder="Name"
              required
              value={query.name}
              onChange={onChangeInput}
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
              name="email"
              id="email"
              placeholder="E-mail"
              required
              value={query.email}
              onChange={onChangeInput}
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
              name="phone"
              id="phone"
              placeholder="Phone"
              value={query.phone}
              onChange={onChangeInput}
            />
          </div>

          <div className="form-group mt-2 border">
            <textarea
              className="form-control border-0 bg-light"
              name="message"
              rows="5"
              id="message"
              value={query.messgae}
              onChange={onChangeInput}
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
