import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

import Home from "./pages/Home";
import Bibliotecario from "./pages/Bibliotecario";
import Login from "./pages/Login";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />, 
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/bibliotecario",
    element: <Bibliotecario />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
