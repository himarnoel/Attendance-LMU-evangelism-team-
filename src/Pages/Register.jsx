import React from 'react'
import logo from "../assets/logo.png";
import Input from "../Components/Input";
import { useNavigate } from 'react-router-dom';
const Register = () => {
  return (
    <div>
    {/* Nav */}
    <div className="  h-screen flex justify-center items-center ">
    <nav className="lg:block hidden fixed w-full  top-0 bg-white ">
      <div className="flex w-screen   shadow py-2 px-3 justify-between items-center">
        <span className="flex items-center" id="logo">
          <img src={logo} alt="logo" className="object-contain w-14" />
          <p className="text-[#FD8C00] text-[1rem] ">Evangelism Team</p>
        </span>
        <p className="text-bold text-[#FD8C00] text-2xl">Join the team</p>
        <div className="flex justify-between ">
          <button onClick={()=>navi("/join")} className="bg-[#FD8C00] p-2 rounded  text-white hover:bg-[#fda335]">
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
        <button onClick={()=>navi("/join")} className="py-[0.5rem] px-[0.4rem] text-xs bg-[#FD8C00] rounded-md text-white mr-2">
          Join the team
        </button>
      </div>
    </div>
    </div>
    </div>
  )
}

export default Register