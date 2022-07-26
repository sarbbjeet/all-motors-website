import React from "react";
import Header from "./Header";

export default function AdminWrapper({ children }) {
  return (
    <div className="bg-light  dashbord_content">
      <div className="position-relative wrapper_content clearfix d-block float-left w-100">
        <Header />
        {children}
      </div>
    </div>
  );
}
