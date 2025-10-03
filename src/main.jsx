import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

import Home from "./pages/Home";
import Bibliotecario from "./pages/Bibliotecario";
import Login from "./pages/Login";
import Emprestimo from "./pages/Emprestimo";
import Acervo from "./pages/Acervo";
import Alunos from "./pages/Alunos";
import Relatorio from "./pages/Relatorio";
import Reserva from "./pages/Reserva";
import AddFuncionario from "./pages/AddFuncionario";
import AddAluno from "./pages/AddAluno";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/AddAluno",
    element: <AddAluno />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/bibliotecario",
    element: <Bibliotecario />,
  },
  {
    path: "/Acervo",
    element: <Acervo />,
  },
  {
    path: "/Alunos",
    element: <Alunos />,
  },
  {
    path: "/AddFuncionario",
    element: <AddFuncionario />,
  },

  {
    path: "/Emprestimo",
    element: <Emprestimo />,
  },
  {
    path: "/Relatorio",
    element: <Relatorio />,
  },
  {
    path: "/Reserva",
    element: <Reserva />,
  },

]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
