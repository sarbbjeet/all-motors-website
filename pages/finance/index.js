import Link from "next/link";
import styles from "./index.module.css";
export default function Finance() {
  return (
    <main className="bg-light mt-5">
      <section>
        <header
          className="text-center bg_parallax bg-white "
          style={{
            background: `url(/images/bac1.jpg) center no-repeat`,
            // height: "300px",
            backgroundSize: "cover",
          }}
        >
          <div className="bg_shadow py-5">
            <div className="container py-3 position-relative text_shadow text-white">
              <div className="row justify-content-center">
                <div className="col-md-10 col-lg-8 col-xl-6">
                  <h2 className="font-weight-bold h1 section_title">Finance</h2>

                  <nav className="d-inline-block" aria-label="breadcrumb">
                    <h2 className="sr-only">Breadcrumb</h2>
                    <ol className="breadcrumb bg-transparent py-0">
                      <li className="breadcrumb-item">
                        <Link href="/">
                          <a className="text-light font-weight-bold">Home</a>
                        </Link>
                      </li>
                      <li className="breadcrumb-item active text-white">
                        Finance
                      </li>
                    </ol>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </header>
        <div className="container py-5">
          <div className="row py-3  px-2 ">
            <div className=" col-lg-11">
              <header>
                <h4 className={styles.boldText}>
                  A specialised team of finance specialists at All Motors Ltd is
                  here to assist you with your inquiry.
                </h4>
                <p className={styles.supportText}>
                  Because of our connections with high street lenders and
                  specialised auto finance companies, we have assisted hundreds
                  of clients in finding the ideal financing option for their
                  budget. <br />
                  <br />
                  Even if you have a bad credit rating, we can still help you
                  arrange financing thanks to our knowledge in the financial
                  sector.
                </p>
              </header>
              <div className="mt-4">
                <h4 className={styles.boldText}>Applicaiton Form</h4>
                <p className={styles.supportText}>
                  Please complete the application below so that we can instantly
                  offer you with a very appropriate options.
                  <br />
                  This form complies to SSL security policy, ensuring that
                  client information is kept private.
                </p>
              </div>
            </div>
            <div
              className="row col-12 col-lg-10 border border-light py-4 bg-white rounded shadow w-100 container application_form mt-4"
              style={{ marginLeft: "50%", transform: "translate(-50%)" }}
            >
              <header className="p-0 col-12 row form_header border-bottom border-light">
                <h4
                  className={`${styles.boldText} col-6`}
                  style={{
                    fontSize: "1.2rem",
                    color: "#555",
                  }}
                >
                  Online Finance Applicaion
                </h4>
                <h4 className="col-6">1 of 5</h4>
                {/* <span>
                  Very straightforward application form; <br /> after you submit
                  it, a member of our finance team will get in touch with you.
                </span> */}
              </header>
              <form className="p-0 col-12">
                <div className="form-row mt-4">
                  <div className="form-group col-md-6">
                    <label htmlFor="name4">Name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="name4"
                      placeholder="Name"
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <label htmlFor="email4">Email</label>
                    <input
                      type="email"
                      className="form-control"
                      id="email4"
                      placeholder="Email"
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="inputAddress">Address</label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputAddress"
                    placeholder="1234 Main St"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="inputAddress2">Address 2</label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputAddress2"
                    placeholder="Apartment, studio, or floor"
                  />
                </div>
                <div className="form-row">
                  <div className="form-group col-md-6">
                    <label htmlFor="inputCity">City</label>
                    <input
                      type="text"
                      className="form-control"
                      id="inputCity"
                    />
                  </div>
                  <div className="form-group col-md-4">
                    <label htmlFor="inputState">State</label>
                    <select id="inputState" className="form-control">
                      <option selected>Choose...</option>
                      <option>...</option>
                    </select>
                  </div>
                  <div className="form-group col-md-2">
                    <label htmlFor="inputZip">Zip</label>
                    <input type="text" className="form-control" id="inputZip" />
                  </div>
                </div>

                <button
                  type="submit"
                  className="mt-4 btn btn-primary float-right"
                >
                  Next
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
