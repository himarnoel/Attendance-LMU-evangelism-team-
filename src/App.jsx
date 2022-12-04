import { useState } from "react";
import logo from "./assets/logo.png";
import "./App.css";
import Input from "./Components/Input";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
function App() {
  const [change, setchange] = useState(false);

  return (
    <div className="">
      <nav className="lg:block hidden">
        <div className="flex w-screen   shadow-md py-3 px-3 justify-between items-center">
          <div className="flex items-center" id="logo">
            <img src={logo} alt="logo" className="object-contain w-20" />
            <p className="text-[#FD8C00] text-[1.2rem] ">Evangelism Team</p>
          </div>
          <p className="text-bold text-[#FD8C00] text-3xl">Attendance System</p>
          <div className="flex justify-between ">
            <button className="bg-[#FD8C00] p-3 rounded  text-white hover:bg-[#e27e03]">
              Join the team
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Nav bar */}

      <div className="lg:hidden fixed top-0 bg-white w-full ">
        <div className=" flex justify-between shadow-md items-center py-3">
          <img src={logo} alt="" className="object-contain w-16 " />
          <p className="text-[#FD8C00] text-[1rem] ">Attendance System</p>
          <button className="py-[0.5rem] px-[0.2rem] text-xs bg-[#FD8C00] rounded-md text-white mr-2">
            Join the team
          </button>
        </div>
      </div>

      <div className="  flex flex-col justify-evenly items-center rounded-xl shadow-xl mt-[8rem] lg:mt-32 mx-auto lg:w-[30rem] w-[23rem] h-[20rem] pt-5">
        <div className="text-xl">Enter your Attendance</div>
        <Input name="Enter Reg Number" />
        <button className="px-5 py-3 bg-[#FD8C00] rounded text-white">
          Click here
        </button>
      </div>
      {/*   */}
    </div>
  );
}

export default App;
