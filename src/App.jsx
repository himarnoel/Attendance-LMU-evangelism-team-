import { useState } from "react";
import logo from "./assets/logo.png";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="">
      <nav className="flex  w-screen shadow-lg py-3 px-3 justify-between items-center">
        <div className="flex items-center" id="logo">
          <img src={logo} alt="logo" className="object-contain w-20" />
          <p className="text-[#FD8C00] text-[1.2rem] font-[]">
            Landmark University Evangelism Team
          </p>
        </div>
        <p className="text-bold text-[#FD8C00] text-3xl">Attendance System </p>
        <div className="flex justify-between ">
          <button className="bg-[#FD8C00] p-3 rounded  text-white hover:bg-[#e27e03] mx-2">
            Join the team
          </button>
          <button className="bg-[#FD8C00] p-3 rounded  text-white hover:bg-[#e27e03]">
            Join the team
          </button>
        </div>
      </nav>
      <div className="p-20 "></div>
    </div>
  );
}

export default App;
