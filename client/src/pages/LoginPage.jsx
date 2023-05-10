import React from "react";
import { Login, Logout } from "../components/Auth";
import { ThemeButton } from "../lib";


export default function LoginPage() {
  return (
    <div className="d-flex align-items-center justify-content-center min-vh-100">
      <Logout />
      <Login />
      <ThemeButton />
    </div>
  );
}
