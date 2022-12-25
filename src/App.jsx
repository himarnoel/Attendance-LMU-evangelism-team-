import { useState } from "react";
import logo from "./assets/logo.png";
import "./App.css";
import Input from "./Components/Input";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import Cool from "./Components/Cool";

function App() {
  const [change, setchange] = useState(false);

  return (
    <div className="  h-screen flex justify-center items-center ">
      <nav className="lg:block hidden fixed w-full  top-0 bg-white ">
        <div className="flex w-screen   shadow py-2 px-3 justify-between items-center">
          <span className="flex items-center" id="logo">
            <img src={logo} alt="logo" className="object-contain w-14" />
            <p className="text-[#FD8C00] text-[1.2rem] ">Evangelism Team</p>
          </span>
          <p className="text-bold text-[#FD8C00] text-2xl">Attendance System</p>
          <div className="flex justify-between ">
            <button className="bg-[#FD8C00] p-2 rounded  text-white hover:bg-[#fda335]">
              Join the team
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Nav bar */}

      <div className="lg:hidden fixed top-0 bg-white w-full">
        <div className=" flex justify-between shadow-md items-center py-3">
          <img src={logo} alt="" className="object-contain w-16" />
          <p className="text-[#FD8C00] text-[1rem] ">Attendance System</p>
          <button className="py-[0.5rem] px-[0.4rem] text-xs bg-[#FD8C00] rounded-md text-white mr-2">
            Join the team
          </button>
        </div>
      </div>

      <div className="  flex flex-col items-center justify-evenly  mx-auto  w-[20rem] h-[20rem]  md:w-[26rem] md:h-[22rem] lg:w-[22rem] lg:h-[20rem] sm:w-[24rem] xl:h-[20rem] xl:w-[25rem]   bg-white shadow-lg rounded-lg ">
        <div className="h-full flex justify-evenly items-center flex-col  w-[17rem]">
          <div className="text-xl ">Enter your Attendance</div>
          <Input name="Enter Reg Number" />
          <button className="px-5 py-3 bg-[#FD8C00] rounded text-white w-full hover:bg-[#fda335]">
            Click here
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
