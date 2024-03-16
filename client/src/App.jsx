import * as React from "react";
import { createRoot } from "react-dom/client";

import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  Outlet,
} from "react-router-dom";

import Home from "./components/Home"
import Squads from "./components/Squads"
import Create from "./components/Create"
import Login from "./components/Login"

import "./App.css"


function App() {


  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="squads" element={<Squads />} />
        <Route path="create" element={<Create />} />
        <Route path="login" element={<Login />} />
      </Routes>
    </>
  )
}

export default App
