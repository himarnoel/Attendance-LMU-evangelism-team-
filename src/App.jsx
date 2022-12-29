import { useState } from "react";
import "./App.css";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import Cool from "./Components/Cool";
import { Routes, Route } from "react-router-dom";
import Att from "./Pages/Att";
import Register from "./Pages/Register";
import "react-toastify/dist/ReactToastify.min.css";
import Admin from "./Pages/Admin";
import Login from "./Pages/Login";

function App() {
  return (
    <>
      <Routes>
      <Route element={<Register />} path="/" />
        <Route element={<Att />} path="/att" />
       
        <Route element={<Admin />} path="/admin" />
        <Route element={<Login />} path="/login" />
      </Routes>
    </>
  );
}

export default App;
