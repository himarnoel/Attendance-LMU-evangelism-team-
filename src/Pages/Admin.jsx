import React from "react";
import logo from "../assets/logo.png";
const Admin = () => {
  return (
    <div className="">
      <nav className="lg:block hidden fixed w-full  top-0 bg-white ">
        <div className="flex w-screen   shadow py-2 px-3 justify-between items-center">
          <span className="flex items-center" id="logo">
            <img src={logo} alt="logo" className="object-contain w-14" />
            <p className="text-[#FD8C00] text-[1.2rem] ">Evangelism Team</p>
          </span>
          <p className="text-bold text-[#FD8C00] text-2xl">Mangement System</p>
          <div className="flex justify-between ">
            <button className="bg-[#FD8C00] p-2 rounded  text-white hover:bg-[#fda335]">
              Join the team
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Nav bar */}

      <div className="lg:hidden fixed top-0 bg-white w-full">
        <div className=" flex  shadow-md items-center py-2">
          <img src={logo} alt="" className="object-contain w-16" />
          <p className="text-[#FD8C00] text-[1.3rem] mx-auto  ">
            Management System
          </p>
        </div>
      </div>

      <div className="pt-10 lg:px-32 md:px-10 px-2">
        <div className="grid place-items-center lg:grid-cols-3 gap-3 lg:gap-5 mt-10 ">
          <div className="bg-red-500/60 text-white h-[28vh] md:h-[15vh]  lg:h-[30vh] flex flex-col justify-center items-center w-[90vw]   md:w-full rounded-lg">
            <p className="text-xl "> Total number of members</p>
            <p className="text-4xl mt-3"> 64</p>
          </div>{" "}
          <div className="bg-orange-500/60 text-white h-[28vh] md:h-[15vh]  lg:h-[30vh]  flex flex-col justify-center gap-[0.6rem] items-center  w-[90vw] md:w-full rounded-lg">
            <p className="text-2xl "> Last Attendance</p>
            <p className="text-lg">40 male</p>
            <p className="text-lg">20 female</p>
            <p className="text-3xl ">Total 60</p>
          </div>{" "}
          <div className="bg-green-500/60 text-white h-[28vh] md:h-[15vh]  lg:h-[30vh] flex flex-col justify-center items-center  w-[90vw] md:w-full rounded-lg">
            <p className="text-xl "> Total number of members</p>
            <p className="text-4xl mt-3"> 64</p>
          </div>{" "}
        </div>

        <div className="grid lg:grid-cols-2 mb-20 place-items-center">
          {/*table */}

          <div className="lg:w-[39rem] w-[90vw] md:w-full max-h-60 mt-10 overflow-auto lg:text-lg rounded-md bg-white">
            <table className=" w-full">
              <thead>
                <tr>
                  <th className="px-[0.4rem] py-[0.2rem] md:p-2  font-bold  bg-gray-200 text-gray-600 border border-gray-300 ">
                    FirstName
                  </th>
                  <th className="px-[0.4rem] py-[0.2rem] md:p-2 font-bold  bg-gray-200 text-gray-600 border border-gray-300 table-cell">
                    LastName
                  </th>
                  <th className="px-[0.4rem] py-[0.2rem] md:p-2 font-bold  bg-gray-200 text-gray-600 border border-gray-300 table-cell">
                    RegNo
                  </th>
                  <th className="px-[0.4rem] py-[0.2rem] md:p-2 font-bold  bg-gray-200 text-gray-600 border border-gray-300 table-cell">
                    MatricNo
                  </th>
                  <th className="px-[0.4rem] py-[0.2rem] md:p-2 font-bold  bg-gray-200 text-gray-600 border border-gray-300  ltable-cell">
                    Gender
                  </th>
                  <th className="px-[0.4rem] py-[0.2rem] md:p-2 font-bold  bg-gray-200 text-gray-600 border border-gray-300  table-cell">
                    Level
                  </th>
                  <th className="px-[0.4rem] py-[0.2rem] md:p-2 font-bold  bg-gray-200 text-gray-600 border border-gray-300 table-cell">
                    Hall
                  </th>
                  <th className="px-[0.4rem] py-[0.2rem] md:p-2 font-bold  bg-gray-200 text-gray-600 border border-gray-300 table-cell">
                    RoomNo
                  </th>
                  <th className="px-[0.4rem] py-[0.2rem] md:p-2 font-bold  bg-gray-200 text-gray-600 border border-gray-300 table-cell">
                    Dept
                  </th>
                  <th className="px-[0.4rem] py-[0.2rem] md:p-2 font-bold  bg-gray-200 text-gray-600 border border-gray-300 table-cell">
                    Webmail
                  </th>
                  <th className="px-[0.4rem] py-[0.2rem] md:p-2 font-bold  bg-gray-200 text-gray-600 border border-gray-300 table-cell">
                    Subunit
                  </th>
                  <th className="px-[0.4rem] py-[0.2rem] md:p-2 font-bold  bg-gray-200 text-gray-600 border border-gray-300 table-cell">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white lg:hover:bg-gray-100  mb-10 lg:mb-0">
                  <td className="w-full  px-[0.4rem] py-[0.2rem] md:p-2 text-gray-800 text-center border border-b "></td>
                  <td className="w-auto px-[0.4rem] py-[0.2rem] md:p-2 text-gray-800 text-center border border-b text-center ">
                    sdfssf
                  </td>
                  <td className="w-auto px-[0.4rem] py-[0.2rem] md:p-2 text-gray-800 text-center border border-b text-center ">
                    sdfssf
                  </td>
                  <td className="w-auto px-[0.4rem] py-[0.2rem] md:p-2 text-gray-800 text-center border border-b text-center ">
                    sdfssf
                  </td>{" "}
                  <td className="w-auto px-[0.4rem] py-[0.2rem] md:p-2 text-gray-800 text-center border border-b text-center ">
                    sdfssf
                  </td>{" "}
                  <td className="w-auto px-[0.4rem] py-[0.2rem] md:p-2 text-gray-800 text-center border border-b text-center ">
                    sdfssf
                  </td>{" "}
                  <td className="w-auto px-[0.4rem] py-[0.2rem] md:p-2 text-gray-800 text-center border border-b text-center ">
                    sdfssf
                  </td>{" "}
                  <td className="w-auto px-[0.4rem] py-[0.2rem] md:p-2 text-gray-800 text-center border border-b text-center ">
                    sdfssf
                  </td>{" "}
                  <td className="w-auto px-[0.4rem] py-[0.2rem] md:p-2 text-gray-800 text-center border border-b text-center ">
                    sdfssf
                  </td>
                  <td className="w-auto px-[0.4rem] py-[0.2rem] md:p-2 text-gray-800 text-center border border-b text-center ">
                    sdfssf
                  </td>{" "}
                  <td className="w-auto px-[0.4rem] py-[0.2rem] md:p-2 text-gray-800 text-center border border-b text-center ">
                    sdfssf
                  </td>
                  <td className="w-auto px-[0.4rem] py-[0.2rem] md:p-2 gap-x-2 flex text-gray-800 text-center border border-b text-center ">
                    <button className="p-2 bg-yellow-500 rounded  ">
                      Edit
                    </button>
                    <button className="p-2 bg-red-500 rounded text-white">
                      Delete
                    </button>
                  </td>
                </tr>
                <tr className="bg-white lg:hover:bg-gray-100  mb-10 lg:mb-0">
                  <td className="w-full  px-[0.4rem] py-[0.2rem] md:p-2 text-gray-800 text-center border border-b "></td>
                  <td className="w-auto px-[0.4rem] py-[0.2rem] md:p-2 text-gray-800 text-center border border-b text-center ">
                    sdfssf
                  </td>
                  <td className="w-auto px-[0.4rem] py-[0.2rem] md:p-2 text-gray-800 text-center border border-b text-center ">
                    sdfssf
                  </td>
                  <td className="w-auto px-[0.4rem] py-[0.2rem] md:p-2 text-gray-800 text-center border border-b text-center ">
                    sdfssf
                  </td>{" "}
                  <td className="w-auto px-[0.4rem] py-[0.2rem] md:p-2 text-gray-800 text-center border border-b text-center ">
                    sdfssf
                  </td>{" "}
                  <td className="w-auto px-[0.4rem] py-[0.2rem] md:p-2 text-gray-800 text-center border border-b text-center ">
                    sdfssf
                  </td>{" "}
                  <td className="w-auto px-[0.4rem] py-[0.2rem] md:p-2 text-gray-800 text-center border border-b text-center ">
                    sdfssf
                  </td>{" "}
                  <td className="w-auto px-[0.4rem] py-[0.2rem] md:p-2 text-gray-800 text-center border border-b text-center ">
                    sdfssf
                  </td>{" "}
                  <td className="w-auto px-[0.4rem] py-[0.2rem] md:p-2 text-gray-800 text-center border border-b text-center ">
                    sdfssf
                  </td>
                  <td className="w-auto px-[0.4rem] py-[0.2rem] md:p-2 text-gray-800 text-center border border-b text-center ">
                    sdfssf
                  </td>{" "}
                  <td className="w-auto px-[0.4rem] py-[0.2rem] md:p-2 text-gray-800 text-center border border-b text-center ">
                    sdfssf
                  </td>
                  <td className="w-auto px-[0.4rem] py-[0.2rem] md:p-2 gap-x-2 flex text-gray-800 text-center border border-b text-center ">
                    <button className="p-2 bg-yellow-500 rounded  ">
                      Edit
                    </button>
                    <button className="p-2 bg-red-500 rounded text-white">
                      Delete
                    </button>
                  </td>
                </tr>
                <tr className="bg-white lg:hover:bg-gray-100  mb-10 lg:mb-0">
                  <td className="w-full  px-[0.4rem] py-[0.2rem] md:p-2 text-gray-800 text-center border border-b "></td>
                  <td className="w-auto px-[0.4rem] py-[0.2rem] md:p-2 text-gray-800 text-center border border-b text-center ">
                    sdfssf
                  </td>
                  <td className="w-auto px-[0.4rem] py-[0.2rem] md:p-2 text-gray-800 text-center border border-b text-center ">
                    sdfssf
                  </td>
                  <td className="w-auto px-[0.4rem] py-[0.2rem] md:p-2 text-gray-800 text-center border border-b text-center ">
                    sdfssf
                  </td>{" "}
                  <td className="w-auto px-[0.4rem] py-[0.2rem] md:p-2 text-gray-800 text-center border border-b text-center ">
                    sdfssf
                  </td>{" "}
                  <td className="w-auto px-[0.4rem] py-[0.2rem] md:p-2 text-gray-800 text-center border border-b text-center ">
                    sdfssf
                  </td>{" "}
                  <td className="w-auto px-[0.4rem] py-[0.2rem] md:p-2 text-gray-800 text-center border border-b text-center ">
                    sdfssf
                  </td>{" "}
                  <td className="w-auto px-[0.4rem] py-[0.2rem] md:p-2 text-gray-800 text-center border border-b text-center ">
                    sdfssf
                  </td>{" "}
                  <td className="w-auto px-[0.4rem] py-[0.2rem] md:p-2 text-gray-800 text-center border border-b text-center ">
                    sdfssf
                  </td>
                  <td className="w-auto px-[0.4rem] py-[0.2rem] md:p-2 text-gray-800 text-center border border-b text-center ">
                    sdfssf
                  </td>{" "}
                  <td className="w-auto px-[0.4rem] py-[0.2rem] md:p-2 text-gray-800 text-center border border-b text-center ">
                    sdfssf
                  </td>
                  <td className="w-auto px-[0.4rem] py-[0.2rem] md:p-2 gap-x-2 flex text-gray-800 text-center border border-b text-center ">
                    <button className="p-2 bg-yellow-500 rounded  ">
                      Edit
                    </button>
                    <button className="p-2 bg-red-500 rounded text-white">
                      Delete
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
