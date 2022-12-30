import React from "react";
import { useState } from "react";
import logo from "../assets/logo.png";
const Login = () => {
  return (
    <div className="w-screen h-screen flex  flex-col justify-center items-center">
      <nav className="lg:block hidden fixed w-full  top-0 bg-white ">
        <div className="flex w-screen   shadow py-2 px-3  items-center">
          <span className="flex items-center" id="logo">
            <img src={logo} alt="logo" className="object-contain w-14" />
            <p className="text-[#FD8C00] text-[1.2rem] ">Evangelism Team</p>
          </span>
          <p className="text-bold text-[#FD8C00] text-2xl mx-auto">
            Admin Login{" "}
          </p>
        </div>
      </nav>

      {/* Mobile Nav bar */}

      <div className="lg:hidden fixed top-0 bg-white w-full">
        <div className=" flex  shadow-md items-center py-3">
          <img src={logo} alt="" className="object-contain w-16" />
          <p className="text-[#FD8C00] text-[1.5rem] mx-auto">Admin Login</p>
         
        </div>
      </div>

      <div className="flex justify-evenly items-center flex-col  w-[20rem] h-[20rem]  md:w-[26rem] md:h-[22rem] lg:w-[22rem] lg:h-[20rem] sm:w-[24rem] xl:h-[20rem] xl:w-[25rem]   bg-white shadow-lg rounded-lg">
        <div>
          <div className="w-[17rem]">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 w-[17rem]"
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              pattern="[0-9]{7}"
              className="bg-gray-50 border border-gray-300 border-solid w-[17rem]  focus:outline-[#FD8C00]   text-sm rounded   p-2.5"
              placeholder="e.g john.doe"
              required
            />
          </div>
        </div>
        <div>
          <div className="w-[17rem]">
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-gray-900 w-[17rem]"
            >
             Password
            </label>
            <input
              type="text"
              id="password"
              name="id"
              pattern="[0-9]{7}"
              className="bg-gray-50 border border-gray-300 border-solid w-[17rem]  focus:outline-[#FD8C00]   text-sm rounded   p-2.5"
              placeholder="password"
              required
            />
          </div>
        </div>
        <button className="w-[17rem] py-2 bg-[#FD8C00] rounded text-white  hover:bg-[#fda335]">
          Click here
        </button>
      </div>
    </div>
  );
};

export default Login;
