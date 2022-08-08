import React from "react";
import ContactHeader from "./ContactHeader";
import AppNav from "./AppNav";
import AppMenu from "./AppMenu";
export default function Header({ searchEvent }) {
  return (
    <header className="main_header d-print-none">
      <ContactHeader />
      <AppNav searchEvent={searchEvent} />
      <AppMenu />
    </header>
  );
}
