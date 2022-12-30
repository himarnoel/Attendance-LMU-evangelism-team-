import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";

const Home = () => {
  const navi = useNavigate();
  return (
    <div className="h-screen w-screen flex items-center flex-col">
      <div className="flex flex-col md:flex-row items-center mb-32 md:mt-28 lg:mt-10 mt-28">
        <img
          src={logo}
          alt=""
          srcset=""
          className="object-contain md:w-32 w-24"
        />
        <div className="">
          <p className="mb-2 text-xl md:text-2xl">
            {" "}
            Welcome to Envangelism Unit{" "}
          </p>
          <p className="text-sm ml-2 italic">
            .....reaching out to transform lives
          </p>
        </div>
      </div>

      <button
        onClick={() => navi("/join")}
        className="bg-[#FD8C00] w-[12rem] h-10 lg:p-0 lg:w-[20rem] lg:h-[3rem] rounded  text-white hover:bg-[#fda335] mb-10 md:mb-20"
      >
        Join Evangelism Unit
      </button>
      <button
        onClick={() => navi("/login")}
        className="bg-[#FD8C00]  w-[12rem] h-10 lg:p-0  lg:w-[20rem] lg:h-[3rem] rounded  text-white hover:bg-[#fda335]"
      >
        Admin Login
      </button>
    </div>
  );
};

export default Home;
