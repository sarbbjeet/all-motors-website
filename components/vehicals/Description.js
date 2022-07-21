import React from "react";

export default function Description({ description }) {
  return (
    <section className="bg-white p-3 px-lg-4 pt-4 pb-5 border mb-4">
      <header className="border-bottom border-dark mb-4">
        <h4 className="text-dark font-weight-bold mb-3">Description</h4>
      </header>
      <div className="text-muted">
        <p>{description}</p>
      </div>
    </section>
  );
}
