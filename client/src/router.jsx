import { createBrowserRouter, Navigate, Route } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/HomePage";
import { Login, SignUp } from "./components/Auth";
import { useAuth } from "./contexts/UserAuth";
import LoginPage from "./pages/LoginPage";

function AuthenticatedRoute({ path, ...props }) {
  const { currentUser } = useAuth;
  return currentUser ? (
    <Route path={path} {...props} />
  ) : (
    <Navigate to="/login" />
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <AuthenticatedRoute path="/" element={<HomePage />} />,
      },
      {
        path: "/home",
        element: <AuthenticatedRoute path="/" element={<HomePage />} />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/loginPage",
    element: <LoginPage />,
  },

]);

export default router;
