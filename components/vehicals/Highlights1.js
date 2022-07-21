import React from "react";

export default function Highlights1() {
  return (
    <section className="bg-white p-3 px-lg-4 pt-4 pb-5 border mb-4">
      <header className="border-bottom border-dark ">
        <h4 className="text-dark font-weight-bold mb-3">Vehicle highlights</h4>
      </header>
      <div className="py-4 row text-muted text_small product_content ">
        <div className="col-sm-6 col-12 px-3">
          <div className="itemWrapper">
            <h4 className="textHeading col-6">Year</h4>
            <h4 className="textResponse col-6">2022</h4>
          </div>
        </div>

        <div className="col-sm-6 px-3 col-12">
          <div className="itemWrapper">
            <h4 className="textHeading col-6 text-capitalize">color</h4>
            <h4 className="textResponse col-6 text-capitalize">red</h4>
          </div>
        </div>
      </div>

      <style jsx>
        {`
          .itemWrapper {
            display: flex;
            border-bottom: 1px dotted gray;
          }

          .textHeading {
            font: inherit;
            font-weight: 400;
            font-size: 18px;
          }
          .textResponse {
            color: #0077da;
            font: inherit;
            font-size: 18px;
            font-weight: 700;
          }
        `}
      </style>
    </section>
  );
}
