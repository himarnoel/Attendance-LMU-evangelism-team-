import React, { useEffect, useState } from "react";
import logo from "../assets/logo.png";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { download, link } from "./../schema/index";
import { ToastContainer } from "react-toastify";
import { Oval, ThreeDots } from "react-loader-spinner";
import { useFormik } from "formik";
import { saveAs } from "file-saver";
import fileDownload from "js-file-download";
import { writeXLSX } from "xlsx";
import * as XLSX from "xlsx";
const Main = () => {
  const navi = useNavigate();
  const [att, setatt] = useState([]);
  const [load, setload] = useState(false);
  let global = [];

  const formik = useFormik({
    initialValues: {
      date: "",
      serviceType: "",
    },
    validationSchema: download,
    onSubmit: (values) => {
      Download(values);
    },
  });
  //   console.log(formik.values);
  const Download = (values) => {
    setload(true);
    const token = localStorage.getItem("token");
    let today = new Date(values.date);
    let month = today.toLocaleString("default", { month: "long" }).toString();
    let day = ("0" + today.getDate()).slice(-2).toString();
    let year = today.getFullYear().toString();

    axios
      .get(
        `${link}/getAttandanceJson?month=${month}&year=${year}&date=${day}&serviceType=${values.serviceType}`,

        {
          headers: { authorization: `Bearer ${token}` },
        }
      )
      .then((res) => {
        setatt(res.data.totalAttendance);

        setload(false);
      })
      .catch((e) => {
        console.log(e);
        setload(false);
      });
  };

  const dowloadXlsx = () => {
    let wb = XLSX.utils.book_new();
    let ws = XLSX.utils.json_to_sheet(att);
    XLSX.utils.book_append_sheet(wb, ws, "Sheet1");
    console.log("woshed", global);
    XLSX.writeFile(wb, "MyExcel.xlsx");
  };
  return (
    <div className="">
      <ToastContainer autoClose={1200} />
      {load ? (
        <div className="w-screen  h-screen  bg-white/90 absolute flex flex-col items-center justify-center top-0 left-0  z-10 ">
          <ThreeDots
            height="100"
            width="100"
            radius="9"
            color="#FD8C00"
            visible={true}
            strokeWidth={2}
            strokeWidthSecondary={2}
          />
        </div>
      ) : (
        ""
      )}
      <nav className="md:block hidden fixed w-full  top-0 bg-white ">
        <div className="flex w-screen   shadow py-2 md:px-2 lg:px-6  lg:pr-10 xl:pr-10 justify-between items-center">
          <span className="flex items-center" id="logo">
            <img src={logo} alt="logo" className="object-contain w-14" />
            <p className="text-[#FD8C00] text-[1.1rem] ">Evangelism Team</p>
          </span>
          <p className="text-bold text-[#FD8C00] text-xl">Mangement System</p>
          <div className="flex justify-between ">
            <button
              className="bg-[#FD8C00] p-2 text-sm rounded  text-white hover:bg-[#fda335]"
              onClick={() => navi("/att")}
            >
              Take Attendance
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Nav bar */}

      <div className="md:hidden fixed top-0 bg-white w-full">
        <div className=" flex  shadow-md items-center py-2 sm:px-2 pr-[0.8rem]">
          <img src={logo} alt="" className="object-contain sm:w-16 w-12" />
          <p className="text-[#FD8C00] text-[0.8rem] sm:text-[1.3rem] mx-auto  ">
            Management System
          </p>
          <button
            className="bg-[#FD8C00] sm:p-6 sm:px-0 sm:py-0 px-3  py-[0.4rem]  text-[0.6rem] sm:text-[1rem] rounded  text-white hover:bg-[#fda335]"
            onClick={() => navi("/att")}
          >
            Take Attendance
          </button>
        </div>
      </div>

      <div className="pt-10 lg:px-10 md:px-3 px-2">
        <form
          onSubmit={formik.handleSubmit}
          className="mt-10  flex flex-col md:flex-row items-center justify-evenly  mx-auto md:mx-0   h-[15rem] w-full md:h-[8rem] lg:h-[6rem] sm:w-[24rem]    bg-white shadow-lg rounded-lg "
        >
          <div className="h-full flex justify-evenly items-center flex-col md:flex-row  w-[20rem] md:w-full md:items-center">
            <div>
              <div className="w-[17rem]">
                <label
                  htmlFor="email"
                  className="block mb-2 sm:text-sm text-xs font-medium text-gray-900 w-[17rem]"
                >
                  Pick the date
                </label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  className="bg-gray-50 border border-gray-300 border-solid w-[17rem] sm:text-sm text-xs  focus:outline-[#FD8C00]    rounded   py-2 px-3"
                  placeholder="reg no."
                  onChange={formik.handleChange}
                  value={formik.values.date}
                  onBlur={formik.handleBlur}
                />
                {formik.errors.date && formik.touched.date ? (
                  <p className="text-red-500 text-sm ">{formik.errors.date}</p>
                ) : (
                  ""
                )}
              </div>
            </div>
            <div className="w-[17rem] ">
              {" "}
              <label
                htmlFor=""
                className="block mb-2 sm:text-sm text-xs font-medium text-gray-900 w-[17rem]"
              >
                Pick Service
              </label>
              <select
                name="serviceType"
                id="serviceType"
                className={
                  "appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight sm:text-sm text-xs"
                }
                onChange={formik.handleChange}
                value={formik.values.serviceType}
                onBlur={formik.handleBlur}
                placeholder=""
              >
                <option value="" disabled defaultValue className="text-red-500">
                  Select Service Type
                </option>
                <option value="tuesday preservice">Tuesday Preservice</option>
                <option value="thursday preservice">Thursday Preservice</option>
                <option value="thursday prayer meeting">
                  Thursday Prayer Meeting
                </option>
                <option value="saturday meeting">Saturday Meeting</option>
                <option value="sunday preservice">Sunday Preservice</option>
              </select>
              {formik.errors.serviceType && formik.touched.serviceType ? (
                <p className="text-red-500 sm:text-sm text-xs">
                  {formik.errors.serviceType}
                </p>
              ) : (
                ""
              )}
            </div>

            <button
              type="submit"
              className="hidden md:block px-5 py-3 lg:px-5 lg:py-3 md:py-2 md:px-4 md:mt-7 lg:mt-0 bg-[#FD8C00] rounded text-white  text-xs hover:bg-[#fda335] text-center"
            >
              View
            </button>
            {att.length !== 0 ? (
              <button
                onClick={() => dowloadXlsx()}
                type="button"
                className="hidden md:block px-5 py-3 lg:px-5 lg:py-3 md:py-2 md:px-4 md:mt-7 lg:mt-0 bg-[#FD8C00] rounded text-white  text-xs hover:bg-[#fda335] text-center"
              >
                Download
              </button>
            ) : (
              ""
            )}
            <div className="md:hidden block flex">
              {" "}
              <button
                type="submit"
                className="mr-4 px-5 py-3 lg:px-5 lg:py-3 md:py-2 md:px-4 md:mt-7 lg:mt-0 bg-[#FD8C00] rounded text-white  text-xs hover:bg-[#fda335] text-center"
              >
                View
              </button>
              {att.length !== 0 ? (
                <button
                  onClick={() => dowloadXlsx()}
                  type="button"
                  className="sm: px-5 py-3 lg:px-5 lg:py-3 md:py-2 md:px-4 md:mt-7 lg:mt-0 bg-[#FD8C00] rounded text-white  text-xs hover:bg-[#fda335] text-center"
                >
                  Download
                </button>
              ) : (
                ""
              )}
            </div>
          </div>
        </form>

        <div className="flex flex-col lg:flex-row  justify-between mb-10  items-center ">
          {/*table */}

          <div className="w-full max-h-60 xl:max-h-72 mt-10 overflow-auto lg:text-lg rounded-md bg-white">
            <table className=" w-full sm:text-sm text-xs">
              <thead className=" sticky top-0">
                <tr>
                  <th className="sticky top-0 px-[0.4rem] py-[0.2rem] md:p-2  font-bold  bg-gray-200 text-gray-600 border border-gray-300 ">
                    S/N
                  </th>
                  <th className=" sticky top-0 px-[0.4rem] py-[0.2rem] md:p-2  font-bold  bg-gray-200 text-gray-600 border border-gray-300 ">
                    FirstName
                  </th>
                  <th className=" sticky top-0 px-[0.4rem] py-[0.2rem] md:p-2 font-bold  bg-gray-200 text-gray-600 border border-gray-300 table-cell">
                    LastName
                  </th>
                  <th className=" sticky top-0 px-[0.4rem] py-[0.2rem] md:p-2 font-bold  bg-gray-200 text-gray-600 border border-gray-300 table-cell">
                    RegNo
                  </th>
                  <th className=" sticky top-0 px-[0.4rem] py-[0.2rem] md:p-2 font-bold  bg-gray-200 text-gray-600 border border-gray-300 table-cell">
                    MatricNo
                  </th>
                  <th className=" sticky top-0 px-[0.4rem] py-[0.2rem] md:p-2 font-bold  bg-gray-200 text-gray-600 border border-gray-300  ltable-cell">
                    DOB
                  </th>
                  <th className=" sticky top-0 px-[0.4rem] py-[0.2rem] md:p-2 font-bold  bg-gray-200 text-gray-600 border border-gray-300  ltable-cell">
                    Gender
                  </th>
                  <th className=" sticky top-0 px-[0.4rem] py-[0.2rem] md:p-2 font-bold  bg-gray-200 text-gray-600 border border-gray-300  table-cell">
                    Level
                  </th>
                  <th className=" sticky top-0 px-[0.4rem] py-[0.2rem] md:p-2 font-bold  bg-gray-200 text-gray-600 border border-gray-300 table-cell">
                    Hall
                  </th>
                  <th className=" sticky top-0 px-[0.4rem] py-[0.2rem] md:p-2 font-bold  bg-gray-200 text-gray-600 border border-gray-300 table-cell">
                    RoomNo
                  </th>
                  <th className=" sticky top-0 px-[0.4rem] py-[0.2rem] md:p-2 font-bold  bg-gray-200 text-gray-600 border border-gray-300 table-cell">
                    Dept
                  </th>
                  <th className=" sticky top-0 px-[0.4rem] py-[0.2rem] md:p-2 font-bold  bg-gray-200 text-gray-600 border border-gray-300 table-cell">
                    Webmail
                  </th>
                  <th className=" sticky top-0 px-[0.4rem] py-[0.2rem] md:p-2 font-bold  bg-gray-200 text-gray-600 border border-gray-300 table-cell">
                    Subunit
                  </th>
                </tr>
              </thead>
              <tbody>
                {att.map((arr, i) => (
                  <tr
                    key={i}
                    className="bg-white lg:hover:bg-gray-100  mb-10 lg:mb-0 "
                  >
                    <td className="bg-white w-auto px-[0.4rem] py-[0.2rem] md:p-2 text-gray-800  border border-b text-center ">
                      {i + 1}
                    </td>
                    <td className="w-auto px-[0.4rem] py-[0.2rem] md:p-2 text-gray-800  border border-b text-center ">
                      {arr.firstname}
                    </td>
                    <td className="w-auto px-[0.4rem] py-[0.2rem] md:p-2 text-gray-800  border border-b text-center ">
                      {arr.lastname}
                    </td>
                    <td className="w-auto px-[0.4rem] py-[0.2rem] md:p-2 text-gray-800  border border-b text-center ">
                      {arr.regNo}
                    </td>
                    <td className="w-auto px-[0.4rem] py-[0.2rem] md:p-2 text-gray-800  border border-b text-center ">
                      {arr.matricNo}
                    </td>
                    <td className="w-auto px-[0.4rem] py-[0.2rem] md:p-2 text-gray-800  border border-b text-center ">
                      {arr.dob}
                    </td>
                    <td className="w-auto px-[0.4rem] py-[0.2rem] md:p-2 text-gray-800  border border-b text-center ">
                      {arr.Gender}
                    </td>
                    <td className="w-auto px-[0.4rem] py-[0.2rem] md:p-2 text-gray-800  border border-b text-center ">
                      {arr.level}
                    </td>
                    <td className="w-auto px-[0.4rem] py-[0.2rem] md:p-2 text-gray-800  border border-b text-center ">
                      {arr.hall}
                    </td>
                    <td className="w-auto px-[0.4rem] py-[0.2rem] md:p-2 text-gray-800  border border-b text-center ">
                      {arr.roomNO}
                    </td>
                    <td className="w-auto px-[0.4rem] py-[0.2rem] md:p-2 text-gray-800  border border-b text-center ">
                      {arr.department}
                    </td>
                    <td className="w-auto px-[0.4rem] py-[0.2rem] md:p-2 text-gray-800  border border-b text-center ">
                      {arr.webmail.split("@lmu.edu.ng")}
                    </td>
                    <td className="w-auto px-[0.4rem] py-[0.2rem] md:p-2 text-gray-800  border border-b text-center ">
                      {arr.Subunit}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Main;
