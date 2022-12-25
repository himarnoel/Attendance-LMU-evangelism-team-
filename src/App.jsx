import { useState } from "react";
import "./App.css";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import Cool from "./Components/Cool";
import { Routes, Route } from "react-router-dom";
import Att from "./Pages/Att";
import Register from "./Pages/Register";

function App() {
  return (
    <>
      <Routes>
        <Route element={<Att />} path="/" />
        <Route element={<Register />} path="/join" />
      </Routes>
    </>
  );
}

export default App;
