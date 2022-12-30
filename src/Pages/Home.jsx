import React from "react";

const Home = () => {
  return (
    <div className="h-screen w-screen flex justify-center items-center flex-col">
      <button className="bg-[#FD8C00] p-2 lg:w-[20rem] rounded  text-white hover:bg-[#fda335] mb-20">
        Join Evangelism Unit
      </button>
      <button className="bg-[#FD8C00] p-2  lg:w-[20rem]  rounded  text-white hover:bg-[#fda335]">
        Admin Login
      </button>
    </div>
  );
};

export default Home;
