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
  Success,
  Failed,
  Abonnes,
  Connections,
  CompteFlouci,
  InvestFormation,
  EtatTache,
  InvestmentHistoryPage,
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
      path: "/investFormation",
      element: <InvestFormation />,
    },
    {
      path: "/reclamation",
      element: <Reclamation />,
    },
    {
      path: "/abonnes",
      element: <Abonnes />,
    },
    {
      path: "/listReclamation",
      element: <ListReclamation />,
    },
    {
      path: "/connection",
      element: <Connections />,
    },

    {
      path: "/abonnes",
      element: <Abonnes />,
    },
    {
      path: "/compteFlouci",
      element: <CompteFlouci />,
    },
    {
      path: "/failed",
      element: <Failed />,
    },
    {
      path: "/success",
      element: <Success />,
    },
    {
      path: "/investStartup",
      element: <InvestmentHistoryPage />,
    },
    {
      path: "/etatTache",
      element: <EtatTache />,
    },
    {
      path: "/*",
      element: <Navigate to="/publication" replace />,
    },
  ]);

  return routes;
};

export default AuthentificatedRouter;
