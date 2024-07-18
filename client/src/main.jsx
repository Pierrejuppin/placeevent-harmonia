import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.css";
import App from "./App";
import HomePage from "./pages/HomePage";
import LandingPage from "./pages/LandingPage";
import RegisterPage from "./pages/RegisterPage";
import ConnexionPage from "./pages/ConnexionPage";
import ListEventPage from "./pages/ListEventPage";
import ReservationPage from "./pages/ReservationPage";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/landing",
        element: <LandingPage />,
      },
      {
        path: "/connexion",
        element: <ConnexionPage />,
      },
      {
        path: "/register",
        element: <RegisterPage />,
      },
      {
        path: "/event",
        element: <ListEventPage />,
      },
      {
        path: "reservation/:id",
        element: <ReservationPage />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
