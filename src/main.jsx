import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Components/Root";
import Home from "./Components/Home";
import Login from "./Components/Login";
import Register from "./Components/Register";
import AuthContext from "./AuthContext/AuthContext";
import Order from "./Components/Order";
import PrivateRouter from "./PrivateRouter/PrivateRouter";
import Profile from "./Components/Profile";
import Dashboard from "./Components/Dashboard";
import "./index.css";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path : "/order",
        element : <PrivateRouter>
          <Order></Order>
        </PrivateRouter>
      },
      {
        path : "/profile",
        element : <PrivateRouter>
          <Profile></Profile>
        </PrivateRouter>
      },
      {
        path : "/dashboard",
        element : <PrivateRouter>
          <Dashboard></Dashboard>
        </PrivateRouter>
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthContext>
      <RouterProvider router={router} />
    </AuthContext>
  </React.StrictMode>
);
