import React from "react";
import { Navigate, useRoutes } from "react-router-dom";
import {
  PageHome,
  Register,
  Login,
  Forgetpassword,
  Resetpassword,
} from "../components/index";

const NoAuthentificatedRouter = () => {
  const routes = useRoutes([
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },

    {
      path: "/",
      element: <PageHome />,
    },
    {
      path: "/forgot-password",
      element: <Forgetpassword />,
    },
    {
      path: "/password-reset/:token",
      element: <Resetpassword />,
    },
    {
      path: "/*",
      element: <Navigate to="login" replace />,
    },
  ]);
  return routes;
};

export default NoAuthentificatedRouter;
