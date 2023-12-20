import React from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";

export default function Layout() {
  return (
    <div className="max-w-7xl mx-auto">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
