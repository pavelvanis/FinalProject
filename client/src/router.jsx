import { createBrowserRouter } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/home",
        element: <HomePage />,
      },
    ],
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
]);

export default router;
