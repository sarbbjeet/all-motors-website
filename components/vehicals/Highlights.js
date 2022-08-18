import React from "react";

import styles from "../../styles/Hightlights.module.scss";
export default function Highlights({
  highlights = { color: "white", fuel: "Gesoline" },
}) {
  return (
    <section className="bg-white p-3 px-lg-4 pt-4 pb-5 border mb-4">
      <header className="border-bottom border-dark mb-4">
        <h4 className="text-dark font-weight-bold mb-3">Vehicle highlights</h4>
      </header>
      <div className="text-muted text_small product_content d-flex flex-wrap">
        {typeof highlights != "undefined" &&
          highlights &&
          Object.keys(highlights)?.map((key, i) => {
            let keyName = "";
            if (key.includes("_"))
              keyName = `${key.split("_")[0]} ${key.split("_")[1]}`;
            return (
              <div key={i} className={styles.itemWrapper}>
                <span className={styles.headerText}>
                  {key.includes("_") ? keyName : key}
                </span>
                {/* <i className="mb-2 fas fa-calendar-check fa-2x text-muted"></i> */}
                <span
                  style={{
                    fontSize: "1rem",
                    textTransform: "capitalize",
                    fontWeight: 500,
                  }}
                >
                  {highlights[key]}
                </span>
              </div>
            );
          })}

        {/* <div className="itemWrapper">
          <i className="mb-2 fas fa-paint-brush fa-2x text-muted"></i>
          <span style={{ fontSize: "1rem", fontWeight: 500 }}>{color}</span>
        </div> */}
      </div>

      <style jsx>{``}</style>
    </section>
  );
}
