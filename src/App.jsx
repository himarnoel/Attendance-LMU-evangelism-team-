import { useState } from "react";
import logo from "./assets/logo.png";
import "./App.css";
import Input from "./Components/Input";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="">
      <nav className="flex  w-screen shadow-md py-3 px-3 justify-between items-center">
        <div className="flex items-center" id="logo">
          <img src={logo} alt="logo" className="object-contain w-20" />
          <p className="text-[#FD8C00] text-[1.2rem] font-[]">
            Evangelism Team
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
      <div className=" flex flex-col justify-evenly items-center rounded-xl shadow-lg mt-24 mx-auto w-[29rem] h-[20rem] pt-5">
        <div className="text-xl">Enter your Attendance</div>
        <Input name="Enter Reg Number" />
        <button className="px-5 py-3 bg-[#FD8C00] rounded text-white">
          Register
        </button>
      </div>
    </div>
  );
}

export default App;
