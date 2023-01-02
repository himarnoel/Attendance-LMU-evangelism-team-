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
const Admin = () => {
  const navi = useNavigate();
  const [member, setmember] = useState([]);
  const [load, setload] = useState(false);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    const token = localStorage.getItem("token");
    setload(true);
    axios
      .get(`${link}`, {
        headers: { authorization: `Bearer ${token}` },
      })
      .then((res) => {
        setmember(res.data);
        setload(false);
      })
      .catch((e) => {
        setload(false);
      });
  };
  const getMedia = (val) => {
    return member.filter((arr) => arr.Subunit === val).length;
  };

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
  console.log(formik.values);
  const Download = (values) => {
    const token = localStorage.getItem("token");
    let today = new Date(values.date);
    let month = today.toLocaleString("default", { month: "long" }).toString();
    let day = ("0" + today.getDate()).slice(-2).toString();
    let year = today.getFullYear().toString();
    axios
      .get(
        `${link}/getallattendance?month=${month}&year=${year}&date=&${day}&serviceType=${values.serviceType}`,

        {
          headers: { authorization: `Bearer ${token}` },
        }
      )
      .then((res) => {
        console.log(res);
        // saveAs(res.data, `attendance ${day}-${month}-${year}`);
        let blob = new Blob([res.data], {
          type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
        });
        fileDownload(blob, "comx.xlsx");
        // const url = window.URL.createObjectURL(new Blob([res.data]));
        // const link = document.createElement("a");
        // link.href = url;
        // link.download = `attendance ${day}-${month}-${year}.xlsx`;
        // // document.body.appendChild(link);
        // link.click();
      });
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
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
            strokeWidth={2}
            strokeWidthSecondary={2}
          />
        </div>
      ) : (
        ""
      )}
      <nav className="lg:block hidden fixed w-full  top-0 bg-white ">
        <div className="flex w-screen   shadow py-2 px-5 justify-between items-center">
          <span className="flex items-center" id="logo">
            <img src={logo} alt="logo" className="object-contain w-14" />
            <p className="text-[#FD8C00] text-[1.2rem] ">Evangelism Team</p>
          </span>
          <p className="text-bold text-[#FD8C00] text-2xl">Mangement System</p>
          <div className="flex justify-between ">
            <button
              className="bg-[#FD8C00] p-2 rounded  text-white hover:bg-[#fda335]"
              onClick={() => navi("/att")}
            >
              Take Attendance
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

      <div className="pt-10 lg:px-10 md:px-10 px-2">
        <div className="grid place-items-center lg:grid-cols-3 gap-3 lg:gap-5 mt-10 ">
          <div className="bg-red-500/60 text-white h-[40vh] md:h-[40vh]  lg:h-[30vh] xl:h-[34vh] flex flex-col justify-center items-center w-[90vw]   md:w-full rounded-lg">
            <p className="text-xl text-center"> Total number of members</p>
            <p className="text-4xl mt-3"> {member.length}</p>
          </div>{" "}
          <div className="bg-orange-500/60 text-white h-[40vh] md:h-[40vh]  lg:h-[30vh] xl:h-[34vh]  flex flex-col  justify-evenly text gap-[0.6rem] items-center  w-[90vw] md:w-full rounded-lg">
            <p className="text-xl ">Subunit</p>
            <p className="text-base">
              <span className="mr-2"> {getMedia("media")}</span>
              Media
            </p>
            <p className="text-base">
              <span className="mr-2"> {getMedia("follow-up")}</span>
              Follow-up
            </p>
            <p className="text-base">
              <span className="mr-2"> {getMedia("welfare")}</span>
              Welfare
            </p>
            <p className="text-xl ">Total {member.length}</p>
          </div>{" "}
          <div className="bg-green-500/60 text-white h-[40vh] md:h-[40vh]  lg:h-[30vh] xl:h-[34vh] flex flex-col justify-center items-center  w-[90vw] md:w-full rounded-lg">
            <p className="text-xl "> New Converts</p>
            <p className="text-4xl mt-3"> 64</p>
          </div>{" "}
        </div>

        <div className="flex flex-col lg:flex-row  justify-between mb-10  items-center ">
          {/*table */}

          <div className="lg:w-[36rem] xl:w-[48rem] w-[90vw] md:w-full max-h-60 mt-10 overflow-auto lg:text-lg rounded-md bg-white">
            <table className=" w-full">
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
                  <th className=" sticky top-0 px-[0.4rem] py-[0.2rem] md:p-2 font-bold  bg-gray-200 text-gray-600 border border-gray-300 table-cell">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {member.map((arr, i) => (
                  <tr
                    key={i}
                    className="bg-white lg:hover:bg-gray-100  mb-10 lg:mb-0 "
                  >
                    <td className="bg-white w-auto px-[0.4rem] py-[0.2rem] md:p-2 text border border-b text-center ">
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

                    <td className="w-auto px-[0.4rem] py-[0.2rem] md:p-2 gap-x-2  flex text-gray-800  border border-b text-center ">
                      <button className="p-2 bg-yellow-500 rounded  ">
                        Edit
                      </button>
                      <button className="p-2 bg-red-500 rounded text-white">
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <form
            onSubmit={formik.handleSubmit}
            className="mt-10  flex flex-col items-center justify-evenly  mx-auto md:mx-0  w-[20rem] h-[20rem]  md:w-[26rem] md:h-[22rem] lg:w-[22rem] lg:h-[20rem] sm:w-[24rem] xl:h-[20rem] xl:w-[25rem]   bg-white shadow-lg rounded-lg "
          >
            <div className="h-full flex justify-evenly items-center flex-col  w-[17rem]">
              <div className="text-xl ">Download attendance</div>
              <div>
                <div className="w-[17rem]">
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 w-[17rem]"
                  >
                    Pick the date
                  </label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    className="bg-gray-50 border border-gray-300 border-solid w-[17rem]  focus:outline-[#FD8C00]   text-sm rounded   p-2.5"
                    placeholder="reg no."
                    onChange={formik.handleChange}
                    value={formik.values.date}
                    onBlur={formik.handleBlur}
                  />
                  {formik.errors.date && formik.touched.date ? (
                    <p className="text-red-500 text-sm ">
                      {formik.errors.date}
                    </p>
                  ) : (
                    ""
                  )}
                </div>
              </div>
              <div className="w-[17rem] ">
                {" "}
                <label
                  htmlFor=""
                  className="block mb-2 text-sm font-medium text-gray-900 w-[17rem]"
                >
                  Pick Service
                </label>
                <select
                  name="serviceType"
                  id="serviceType"
                  className={
                    "appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight "
                  }
                  onChange={formik.handleChange}
                  value={formik.values.serviceType}
                  onBlur={formik.handleBlur}
                  placeholder=""
                >
                  <option
                    value=""
                    disabled
                    defaultValue
                    className="text-red-500"
                  >
                    Select Service Type
                  </option>
                  <option value="tuesday preservice">Tuesday Preservice</option>
                  <option value="thursday preservice">
                    Thursday Preservice
                  </option>
                  <option value="thursday prayer meeting">
                    Thursday Prayer Meeting
                  </option>
                  <option value="saturday meeting">Saturday Meeting</option>
                  <option value="sunday preservice">Sunday Preservice</option>
                </select>
                {formik.errors.serviceType && formik.touched.serviceType ? (
                  <p className="text-red-500 text-sm ">
                    {formik.errors.serviceType}
                  </p>
                ) : (
                  ""
                )}
              </div>

              <button
                type="submit"
                className="px-5 py-3 bg-[#FD8C00] rounded text-white w-full hover:bg-[#fda335] text-center"
              >
                Download
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Admin;
