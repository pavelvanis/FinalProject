import React from "react";
import { Footer, LoginContainer } from "../components";

export default function LoginPage() {
  return (
    <div className="d-flex flex-column align-items-center min-vh-100">
      <LoginContainer />
      <Footer />
    </div>
  );
}
