import React from "react";
import { Outlet, useLocation } from "react-router";

import { Header, Footer } from "../components";

export default function MainLayout() {
  const location = useLocation();

  const shouldShowHeaderFooter = location.pathname !== "/login";

  return (
    <>
      {shouldShowHeaderFooter && <Header />}
      <Outlet />
      {shouldShowHeaderFooter && <Footer />}
    </>
  );
}
