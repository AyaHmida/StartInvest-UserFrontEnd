import React from "react";
import { Navigate, useRoutes } from "react-router-dom";
import {
  Publication,
  Profile,
  ProfileAutre,
  Notifications,
  Messaging,
  PostDetails,
  EditProfile,
  Reclamation,
  ListReclamation,
  Calendar,
  UpdateProfile,
  Forgetpassword,
  Resetpassword,
} from "../components/index";
const AuthentificatedRouter = () => {
  const routes = useRoutes([
    {
      path: "/publication",
      element: <Publication />,
    },
    {
      path: "/updateProfile",
      element: <UpdateProfile />,
    },
    {
      path: "/profile",
      element: <Profile />,
    },
    {
      path: "/:userId",
      element: <ProfileAutre />,
    },
    {
      path: "/notifications",
      element: <Notifications />,
    },
    {
      path: "/messaging",
      element: <Messaging />,
    },
    {
      path: "/postDetails",
      element: <PostDetails />,
    },
    {
      path: "/editProfile",
      element: <EditProfile />,
    },
    {
      path: "/calendar",
      element: <Calendar />,
    },
    {
      path: "/reclamation",
      element: <Reclamation />,
    },
    {
      path: "/listReclamation",
      element: <ListReclamation />,
    },

    {
      path: "/*",
      element: <Navigate to="/publication" replace />,
    },
  ]);

  return routes;
};

export default AuthentificatedRouter;
