import React from "react";
import { Outlet } from "react-router";

import { Header } from "../components";

export default function MainLayout() {
  return (
    <div className="">
      <Header />
      <Outlet />
    </div>
  );
}
