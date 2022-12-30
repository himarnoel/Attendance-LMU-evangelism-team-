import { useState } from "react";
import "./App.css";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import Cool from "./Components/Cool";
import { Routes, Route, Navigate } from "react-router-dom";
import Att from "./Pages/Att";
import Register from "./Pages/Register";
import "react-toastify/dist/ReactToastify.min.css";
import Admin from "./Pages/Admin";
import Login from "./Pages/Login";

function App() {
  const token = localStorage.getItem("token");
  return (
    <>
      <Routes>
        <Route element={<Register />} path="/" />
        <Route element=  {token ? <Navigate to="/att" /> : <Login />}path="/login" />
        <Route
          path="/att"
          element={token ? <Att /> : <Navigate to="/login" />}
        />

        <Route
          path="/admin"
          element={token ? <Admin /> : <Navigate to="/login" />}
        />
      </Routes>
    </>
  );
}

export default App;
