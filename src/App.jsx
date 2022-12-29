import { useState } from "react";
import "./App.css";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import Cool from "./Components/Cool";
import { Routes, Route } from "react-router-dom";
import Att from "./Pages/Att";
import Register from "./Pages/Register";
import "react-toastify/dist/ReactToastify.min.css";
import Admin from "./Pages/Admin";

function App() {
  return (
    <>
      <Routes>
        <Route element={<Att />} path="/" />
        <Route element={<Register />} path="/join" />
        <Route element={<Admin />} path="/admin" />
      </Routes>
    </>
  );
}

export default App;
