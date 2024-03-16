import * as React from "react";
import { createRoot } from "react-dom/client";

import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  Outlet,
} from "react-router-dom";

// import {
//   createBrowserRouter,
//   RouterProvider,
//   Route,
//   Link,
//   Outlet,
//   createRoutesFromElements,
// } from "react-router-dom";
import Home from "./components/Home"
import Squads from "./components/Squads"
import Create from "./components/Create"
import Login from "./components/Login"
import NavBar from "./components/NavBar"
import "./App.css"

const AppLayout = () => (
  <>
    <NavBar />
    <Outlet />
  </>
);


const Router = () => (
  <BrowserRouter>
    <AppLayout />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="squads" element={<Squads />} />
      <Route path="create" element={<Create />} />
      <Route path="login" element={<Login />} />
    </Routes>
  </BrowserRouter>
);

createRoot(document.getElementById("root")).render(<Router />);

// const router = createBrowserRouter([
//   {
//     element: <AppLayout />,
//     children: [
//       {
//         path: "/",
//         element: <Home />,
//       },
//       {
//         path: "squads",
//         element: <Squads />,
//       },
//       {
//         path: "create",
//         element: <Create />,
//       },
//       {
//         path: "login",
//         element: <Login />,
//       },
//     ],
//   },
// ]);

// createRoot(document.getElementById("root")).render(
//   <RouterProvider router={router} />
// );
