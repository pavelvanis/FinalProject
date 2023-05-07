import React, { useEffect, useState } from "react";
import { CurrentUser, useAuth } from "../../contexts/UserAuth";
import { Button } from "react-bootstrap";
import "./login.css";

export default function LoginContainer() {
  const { login, logout, signup, error } = useAuth();
  const [userInfo, setUserInfo] = useState(null);
  const currentUser = CurrentUser();

  const handleAction = (action) => {
    switch (action) {
      case "login":
        login(userInfo);
        break;
      case "logout":
        logout();
        break;
      case "signup":
        signup(userInfo);
        break;
    }
  };

  return (
    <div className="login_container">
      <input
        type="email"
        placeholder="email"
        onChange={(e) => setUserInfo({ ...userInfo, email: e.target.value })}
      />

      <input
        type="password"
        placeholder="password"
        onChange={(e) => setUserInfo({ ...userInfo, password: e.target.value })}
      />

      <Button onClick={() => handleAction("login")}>Login</Button>
      <Button onClick={() => logout()}>Log out</Button>
      <Button onClick={() => handleAction("login")}>Sign up</Button>

      <p>{currentUser ? currentUser.email : null}</p>
      {error && <p>{error.message}</p>}
    </div>
  );
}
