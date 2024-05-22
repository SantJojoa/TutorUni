import ReactDOM from "react-dom/client";
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Index from "./pages/Index.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Login from "./pages/Login.jsx";
import RolSelect from "./pages/RolSelect.jsx";
import RegisterStudent from "./pages/RegisterStudent.jsx";
import RegisterTeacher from "./pages/RegisterTeacher.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Index />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/rolSelect",
    element: <RolSelect />,
  },
  {
    path: "/registerStudent",
    element: <RegisterStudent />,
  },
  {
    path: "/registerTeacher",
    element: <RegisterTeacher />,
  },
  {
    path: "/frontend/src/pages/selectTeachersPage/selectTeacher.html",
    element: <selectTeacher />,
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
