import React from "react";
import AppHead from "../components/Head";
import Header from "../components/Header";
import AppFooter from "../components/AppFooter";
export default function Layout({ children }) {
  return (
    <div>
      <AppHead />
      <Header />
      {children}
      <AppFooter />
    </div>
  );
}
