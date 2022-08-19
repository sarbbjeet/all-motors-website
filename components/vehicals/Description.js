import React from "react";
import { f2 as ff } from "../../styles/variables.module.scss";

export default function Description({ description }) {
  return (
    <section className="bg-white p-3 px-lg-4 pt-4 pb-5 border mb-4">
      <header className="border-bottom border-dark mb-4">
        <h4 className="text-dark font-weight-bold mb-3">Description</h4>
      </header>
      <div className="text-muted">
        <p>{description}</p>
      </div>

      <style jsx>{`
        h4,
        p,
        span {
          font-family: ${ff};
        }
        p {
          font-size: 1.1rem;
        }
      `}</style>
    </section>
  );
}
