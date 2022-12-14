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
import Home from './Pages/Home';
import Main from "./Pages/Main";

function App() {
  const token = localStorage.getItem("token");
  return (
    <>
      <Routes>
      <Route element={<Home />} path="/" />
        <Route element={<Register />} path="/join" />
        <Route element=  {token ? <Navigate to="/admin" /> : <Login />} path="/login" />
        <Route
          path="/att"
          element={token ? <Att /> : <Navigate to="/login" />}
        />

        <Route
          path="/admin"
          element={token ? <Main /> : <Navigate to="/login" />}
        />
         <Route
          path="*"
          element={<Navigate to="/"/>}
        />
      </Routes>
    </>
  );
}

export default App;
