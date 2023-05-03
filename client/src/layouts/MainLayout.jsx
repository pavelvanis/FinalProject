import React from "react";
import { Outlet, useLocation } from "react-router";

import { Header, Footer } from "../components";

export default function MainLayout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}
