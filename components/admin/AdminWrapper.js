import React from "react";
import Header from "./Header";
import { useAuth, ProtectRoute } from "../../components/auth/auth";

export default function AdminWrapper({ children }) {
  return (
    //--> authenticate user
    <ProtectRoute>
      <div className="bg-light  dashbord_content">
        {/* <AppHead /> */}
        <div className="position-relative wrapper_content clearfix d-block float-left w-100">
          <Header />
          {children}
        </div>
      </div>
    </ProtectRoute>
  );
}
