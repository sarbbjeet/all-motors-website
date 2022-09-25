import React, { useState } from "react";
import { f2 as ff } from "../styles/variables.module.scss";
import axios from "axios";
const url = "/api/customer_query";
const _ = require("lodash");

const initialQueryObj = {
  name: "",
  email: "",
  phone: "",
  type: "",
  message: "",
  loading: "",
  error: "",
  success: false,
};
export default function SendUsMessage({ closeEvent, hiddenCloseBtn = false }) {
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
    <div className="col-12 col-sm-8 col-md-6 mb-5 mb-lg-0 ">
      <div className="bg-white p-4 p-lg-4 border">
        <div
          className={`close ${hiddenCloseBtn && "d-none"}`}
          onClick={() => closeEvent(false)}
        >
          <i className="fa fa-window-close " aria-hidden="true"></i>
        </div>
        <div className="border-bottom border-dark mb-4">
          <h4 className="text-dark font-weight-bold mb-3">Send us a message</h4>
        </div>
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
          className="text-muted formContact"
          action="#"
          method="post"
          encType="multipart/form-data"
          onSubmit={onSubmitForm}
        >
          <div className="form-row">
            <div className="col-xl-6">
              <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <span className="input-group-text bg-light border-right-0 text-muted rounded-0">
                    <i className="far fa-user"></i>
                  </span>
                </div>
                <input
                  type="text"
                  className="form-control text-muted border-left-0 bg-light rounded-0"
                  name="name"
                  placeholder="Name"
                  onChange={onChangeInput}
                  value={query.name}
                  required
                />
              </div>
            </div>
            <div className="col-xl-6">
              <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <span className="input-group-text border-right-0 text-muted bg-light rounded-0">
                    <i className="far fa-envelope"></i>
                  </span>
                </div>
                <input
                  type="text"
                  className="form-control border-left-0 text-muted bg-light rounded-0"
                  name="email"
                  placeholder="Email"
                  required
                  onChange={onChangeInput}
                  value={query.email}
                />
              </div>
            </div>
          </div>

          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text border-right-0 text-muted bg-light rounded-0">
                <i className="fas fa-bullhorn"></i>
              </span>
            </div>
            <input
              type="text"
              className="form-control border-left-0 text-muted bg-light rounded-0"
              name="type"
              id="type"
              placeholder="Subject"
              required
              onChange={onChangeInput}
              value={query.type}
            />
          </div>

          <div className="form-group">
            <label htmlFor="message" className="sr-only">
              Message:
            </label>
            <textarea
              className="form-control bg-light rounded-0"
              name="message"
              id="message"
              placeholder="Message"
              rows="5"
              onChange={onChangeInput}
              value={query.message}
            ></textarea>
          </div>

          <div className="form-group">
            <button
              className="btn btn-block btn-lg btn-primary position-relative"
              type="submit"
            >
              Send Message
              <span
                className="spinner-border text-light spinner form_load position-absolute"
                role="status"
                style={{ display: "none" }}
              >
                <span className="sr-only">Mostrar Mais...</span>
              </span>
            </button>
          </div>
        </form>
      </div>

      <style jsx>
        {`
              
              h2,
              h4,
              a,
              li,
              label,
              div,
              span,
              button,
              p {
                font-family: ${ff};
              }

              }
              
              `}
      </style>
    </div>
  );
}
