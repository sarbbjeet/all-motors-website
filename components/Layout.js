import React from "react";
import AppHead from "../components/Head";
import AppNav from "../components/AppNav";
import AppFooter from "../components/AppFooter";
export default function Layout({ children }) {
  return (
    <div>
      <AppHead />
      <AppNav />
      {children}
      <AppFooter />
    </div>
  );
}
