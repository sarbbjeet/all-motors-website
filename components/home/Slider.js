export default function Slider() {
  return (
    <section className="section_content py-5 bg-light border-bottom">
      <header>
        <h2 className="sr-only">Featured Content:</h2>
      </header>
      <div className="container py-3">
        <div className="slide_max slide_detach position-relative shadow-8dp">
          {/* slide 1 */}

          <article
            className="max_slide_item bg_cover"
            style={{ backgroundImage: "url(/images/1370x500.jpg)" }}
          >
            <div className="bg_shadow">
              <div
                className="row align-items-center"
                style={{ height: "100%" }}
              >
                <header className="col-lg-10 col-xl-7 ">
                  <div className="text-white text-center text-lg-left px-3 px-lg-5">
                    <h3 className="h1 font_exbold text_shadow">
                      At vero eos et accusamus
                    </h3>
                    <p className="tagline h5 mb-4 text_shadow">
                      At vero eos et accusamus et iusto odio dignissimos ducimus
                      qui blanditiis praesentium voluptatum deleniti atque
                      corrupti quos dolores et quas molestias excepturi sint
                      occaecati cupiditate non provident
                    </p>
                    <a
                      className="btn btn-primary px-lg-5 btn-lg shadow-sm"
                      title="At vero eos et accusamus"
                      href="#"
                    >
                      Know more
                    </a>
                  </div>
                </header>
              </div>
            </div>
          </article>

          {/* <!-- slide 2 --> */}
          <article
            className="max_slide_item bg_cover"
            style={{ backgroundImage: "url(/images/1370x500.jpg)" }}
          >
            <div className="bg_shadow">
              <div
                className="row align-items-center"
                style={{ height: "100%" }}
              >
                <header className="col-lg-10 col-xl-7">
                  <div className="text-white text-center text-lg-left px-3 px-lg-5">
                    <h3 className="h1 font_exbold text_shadow">
                      Lorem ipsum dolor sit amet
                    </h3>
                    <p className="tagline h5 mb-4 text_shadow">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                    <a
                      className="btn btn-primary px-lg-5 btn-lg shadow-sm"
                      title="Lorem ipsum dolor sit amet"
                      href="#"
                    >
                      Know more
                    </a>
                  </div>
                </header>
              </div>
            </div>
          </article>

          {/* <!-- slide 3 --> */}
          <article
            className="max_slide_item bg_cover"
            style={{ backgroundImage: "url(/images/1370x500.jpg)" }}
          >
            <div className="bg_shadow">
              <div
                className="row align-items-center"
                style={{ height: "100%" }}
              >
                <header className="col-lg-10 col-xl-7 ">
                  <div className="text-white text-center text-lg-left px-3 px-lg-5">
                    <h3 className="h1 font_exbold text_shadow">
                      Dicta sunt explicabo
                    </h3>
                    <p className="tagline h5 mb-4 text_shadow">
                      Sed ut perspiciatis unde omnis iste natus error sit
                      voluptatem accusantium doloremque laudantium, totam rem
                      aperiam, eaque ipsa quae ab illo inventore veritatis et
                      quasi architecto beatae vitae dicta sunt explicabo.
                    </p>
                    <a
                      className="btn btn-primary px-lg-5 btn-lg shadow-sm"
                      title="Dicta sunt explicabo"
                      href="#"
                    >
                      Know more
                    </a>
                  </div>
                </header>
              </div>
            </div>
          </article>

          {/* <!-- slide 4 --> */}
          <article
            className="max_slide_item bg_cover"
            style={{ backgroundImage: "url(/images/1370x500.jpg)" }}
          >
            <div className="bg_shadow">
              <div
                className="row align-items-center"
                style={{ height: "100%" }}
              >
                <header className="col-lg-10 col-xl-7 ">
                  <div className="text-white text-center text-lg-left px-3 px-lg-5">
                    <h3 className="h1 font_exbold text_shadow">
                      At vero eos et accusamus
                    </h3>
                    <p className="tagline h5 mb-4 text_shadow">
                      At vero eos et accusamus et iusto odio dignissimos ducimus
                      qui blanditiis praesentium voluptatum deleniti atque
                      corrupti quos dolores et quas molestias excepturi sint
                      occaecati cupiditate non provident
                    </p>
                    <a
                      className="btn btn-primary px-lg-5 btn-lg shadow-sm"
                      title="At vero eos et accusamus"
                      href="#"
                    >
                      Know more
                    </a>
                  </div>
                </header>
              </div>
            </div>
          </article>

          {/* <!-- slide 5 --> */}
          <article
            className="max_slide_item bg_cover"
            style={{ backgroundImage: "url(/images/1370x500.jpg)" }}
          >
            <div className="bg_shadow">
              <div
                className="row align-items-center"
                style={{ height: "100%" }}
              >
                <header className="col-lg-10 col-xl-6">
                  <div className="text-white text-center text-lg-left px-3 px-lg-5">
                    <h3 className="h1 font_exbold text_shadow">
                      At vero eos et accusamus
                    </h3>
                    <p className="tagline h5 mb-4 text_shadow">
                      At vero eos et accusamus et iusto odio dignissimos ducimus
                      qui blanditiis praesentium voluptatum deleniti atque
                      corrupti quos dolores et quas molestias excepturi sint
                      occaecati cupiditate non provident
                    </p>
                    <a
                      className="btn btn-primary px-lg-5 btn-lg shadow-sm"
                      title="At vero eos et accusamus"
                      href="#"
                    >
                      Know more
                    </a>
                  </div>
                </header>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
