import { useState } from "react";
import logo from "./assets/logo.png";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="">
      <nav className="flex  w-screen shadow-lg py-3">
        <div className="flex items-center" id="logo">
          <img src={logo} alt="" className="object-contain w-24" />
          <p className="text-[#FD8C00] text-xl font-[]">
            Landmark University Evangelism Team
          </p>
        </div>
      </nav>
      <div className="p-20 "></div>
    </div>
  );
}

export default App;
