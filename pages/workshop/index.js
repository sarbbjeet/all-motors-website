import Layout from "../../components/Layout";
import { f2 as ff } from "../../styles/variables.module.scss";
import Link from "next/link";
import { useEffect, useState } from "react";
const url = "/api/customer_query";
import _ from "lodash";
import axios from "axios";

const initialQueryObj = {
  name: "",
  email: "",
  phone: "",
  type: "general",
  message: "",
  loading: "",
  error: "",
  success: false,
};
export default function Handler({ queryType }) {
  const [query, setQuery] = useState(initialQueryObj);
  const onChangeInput = ({ target: { name, value } }) => {
    setQuery({ ...query, [name]: value, success: false, error: "" });
  };

  useEffect(() => {
    setQuery({ ...query, type: queryType });
  }, [queryType]);
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
      console.log(err);
      setQuery({
        ...query,
        loading: false,
        error: err?.response?.data?.error || err?.message,
        success: false,
      });
    }
  };
  return (
    <Layout>
      <main
        className="bg-light mt-4"
        onClick={() => setQuery({ ...query, success: false, error: "" })}
      >
        <section>
          <header
            className="text-center bg_parallax bg-white"
            style={{
              background: `url(/images/bac2.jpeg) center no-repeat`,
              // height: "300px",
              backgroundSize: "cover",
              backgroundAttachment: "fixed",
            }}
          >
            <div className="bg_shadow py-5">
              <div className="container py-3 position-relative text_shadow text-white">
                <div className="row justify-content-center">
                  <div className="col-md-10 col-lg-8 col-xl-6">
                    <h2 className="hText section_title">Workshop</h2>

                    <nav className="d-inline-block" aria-label="breadcrumb">
                      <h2 className="sr-only">Breadcrumb</h2>
                      <ol className="breadcrumb bg-transparent py-0">
                        <li className="breadcrumb-item">
                          <Link href="/">
                            <a className="text-light font-weight-bold">Home</a>
                          </Link>
                        </li>
                        <li className="breadcrumb-item active text-white">
                          Workshop
                        </li>
                      </ol>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          </header>
          <div className="container py-5">
            <div className="row py-3">
              <div className="col-lg-6 col-xl-7 mb-5 mb-lg-0">
                <div
                  className="bg-white p-4 p-lg-4 border"
                  style={{ height: "100%" }}
                >
                  <div className="border-bottom border-dark mb-4">
                    <h4 className="text-dark font-weight-bold mb-3">
                      Send us a query
                    </h4>
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
                            required
                            onChange={onChangeInput}
                            value={query.name}
                          />
                        </div>
                      </div>
                      <div className="col-xl-6">
                        <div className="input-group mb-3">
                          <div className="input-group-prepend">
                            <span className="input-group-text border-right-0 text-muted bg-light rounded-0">
                              <i className="fa fa-phone-alt"></i>
                            </span>
                          </div>
                          <input
                            type="number"
                            // min={9}
                            // max={15}
                            className="form-control border-left-0 text-muted bg-light rounded-0"
                            name="phone"
                            value={query.phone}
                            placeholder="Phone Number"
                            // required
                            onChange={onChangeInput}
                          />
                        </div>
                      </div>
                    </div>

                    <div className="input-group mb-3">
                      <div className="input-group-prepend">
                        <span className="input-group-text border-right-0 text-muted bg-light rounded-0">
                          <i className="fas fa-envelope"></i>
                        </span>
                      </div>
                      <input
                        type="text"
                        className="form-control border-left-0 text-muted bg-light rounded-0"
                        name="email"
                        id="email"
                        placeholder="Email"
                        required
                        value={query.email}
                        onChange={onChangeInput}
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
                        value={query.message}
                        onChange={onChangeInput}
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
              </div>
              <div className="col-lg-6 col-xl-5">
                <div
                  className="bg-dark border px-3 px-md-4 py-3"
                  style={{ height: "100%" }}
                >
                  <p className="h5 font-weight-bold footer_title mb-2 text-light">
                    Get In Touch
                  </p>
                  <p className="text-light">
                    To view our most recent selection of top-notch used
                    vehicles, visit our website. Call All Motors Ltd., send us
                    an email, or get in touch with us on WhatsApp to find out
                    more about any of our automobiles.
                  </p>

                  <a
                    className="btn btn-dark text-left py-3"
                    href="#"
                    title="Phone"
                  >
                    <i className="fas fa-phone-alt mr-2"></i> (44) 7927684797
                  </a>
                  <a
                    className="btn btn-dark text-left py-3"
                    href="#"
                    title="Whatsapp"
                  >
                    <i className="fab fa-whatsapp mr-2"></i> (44) 7927684797
                  </a>
                  <a
                    className="btn btn-dark text-left py-3"
                    href="#"
                    title="E-mail"
                  >
                    <i className="far fa-envelope mr-2"></i>{" "}
                    contact@allmotorsltd.co.uk
                  </a>

                  <p className="h5 font-weight-bold footer_title mb-2 mt-4 text-light">
                    Visit us
                  </p>
                  <a className="btn btn-dark text-left py-3" href="#" title="">
                    <i className="far fa-map"></i> Camps industrial estates
                    kirknewton EH27 8DF
                  </a>

                  <p className="h5 font-weight-bold footer_title mb-2 mt-4 text-light">
                    Follow us
                  </p>

                  <div className="d-block">
                    <a
                      className="btn btn-lg btn-dark"
                      href="#"
                      title="Facebook"
                    >
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a className="btn btn-lg btn-dark" href="#" title="Youtube">
                      <i className="fab fa-youtube"></i>
                    </a>
                    <a
                      className="btn btn-lg btn-dark"
                      href="#"
                      title="Instagram"
                    >
                      <i className="fab fa-instagram"></i>
                    </a>
                    <a className="btn btn-lg btn-dark" href="#" title="Twitter">
                      <i className="fab fa-twitter"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <style jsx>
            {`
              .query-form {
                position: relative;
                height: 100%;
              }
              .notification {
                // position: absolute;
                // width: 100%;
                // height: 100%;
                // border: 1px solid red;
                // padding: 0 !important;
                // margin: 0 !important;
                // z-index: 100;
              }

              .text {
                font-family: ${ff} !important;
                font-size: 1rem !important;
                font-weight: 500 !important;
              }
              .hText {
                font-family: ${ff} !important;
                font-size: 2rem !important;
                font-weight: 600 !important;
              }
              .form-control:focus {
                border-color: #ccc;
              }
            `}
          </style>
        </section>
      </main>
    </Layout>
  );
}

export const getServerSideProps = (content) => {
  return {
    props: {
      queryType: content?.query?.query || "",
    },
  };
};
