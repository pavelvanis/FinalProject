import React from "react";
import { Footer } from "../components";
import { Login } from "../components/Auth";

export default function LoginPage() {
  return (
    <div className="d-flex align-items-center justify-content-center min-vh-100">
      <Login />
    </div>
  );
}
