import React from "react";
import logo from "../assets/logo.png";

import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { atten, link } from "./../schema/index";
import { ToastContainer, toast } from "react-toastify";
import { Oval } from "react-loader-spinner";
import { useFormik } from "formik";
const Att = () => {
  const [load, setload] = useState(false);
  const formik = useFormik({
    initialValues: {
      regNo: "",
      serviceType: "",
    },
    validationSchema: atten,

    onSubmit: (values) => {
      const token = localStorage.getItem("token");
      window.scrollTo(0, 0);

      setload(true);
      axios
        .post(
          `https://attendance-system.up.railway.app/attendance/enter`,
          values,
          {
            headers: { authorization: `Bearer ${token}` },
          }
        )
        .then((res) => {
          setload(false);
          if (res.data == "user not found") {
            toast.warning("Please register");
          }  else {
            toast.success("Attendance Captured");
          }
          formik.setValues({
            regNo: formik.initialValues.regNo,
            serviceType: formik.values.serviceType,
          });
          // formik.handleChange("", formik.values.serviceType);
        })
        .catch((e) => {
          formik.setValues({
            regNo: formik.initialValues.regNo,
            serviceType: formik.values.serviceType,
          });
          setload(false);
          console.log(e);
          if (e.message == "Network Error") {
            toast.error(e.message);
          }else if (e.response.data == "you have already signed today ") {
            toast.info("Attendace already taken");
          } else {
            toast.error("An error occured");
          }
        });
    },
  });
  const navi = useNavigate();
  const Logout = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };
  return (
    <div>
      <ToastContainer autoClose={1200} />
      {load ? (
        <div className="w-screen  h-screen  bg-white/60 absolute flex flex-col items-center justify-center top-0 left-0  z-10 ">
          <Oval
            height={90}
            width={90}
            color="#FD8C00"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
            ariaLabel="oval-loading"
            secondaryColor="#FD8C00"
            strokeWidth={2}
            strokeWidthSecondary={2}
          />
        </div>
      ) : (
        ""
      )}
      <div className="  h-screen flex justify-center items-center ">
        <nav className="lg:block hidden fixed w-full  top-0 bg-white ">
          <div className="flex w-screen   shadow py-2 px-3 justify-between items-center">
            <span className="flex items-center" id="logo">
              <img src={logo} alt="logo" className="object-contain w-14" />
              <p className="text-[#FD8C00] text-[1.2rem] ">Evangelism Team</p>
            </span>
            <p className="text-bold text-[#FD8C00] text-2xl">
              Attendance System
            </p>
            <div className="flex justify-between ">
              <button
                onClick={() => Logout()}
                className="bg-[#FD8C00] p-2 rounded  text-white hover:bg-[#fda335]"
              >
                Logout
              </button>
            </div>
          </div>
        </nav>

        {/* Mobile Nav bar */}

        <div className="lg:hidden fixed top-0 bg-white w-full">
          <div className=" flex justify-between shadow-md items-center py-3">
            <img src={logo} alt="" className="object-contain w-16" />
            <p className="text-[#FD8C00] text-[1rem] ">Attendance System</p>
            <button
              onClick={() => Logout()}
              className="py-[0.5rem] px-[0.8rem] text-xs bg-[#FD8C00] rounded-md text-white mr-2"
            >
              Logout
            </button>
          </div>
        </div>

        <form
          onSubmit={formik.handleSubmit}
          className="  flex flex-col items-center justify-evenly  mx-auto  w-[20rem] h-[20rem]  md:w-[26rem] md:h-[22rem] lg:w-[22rem] lg:h-[20rem] sm:w-[24rem] xl:h-[20rem] xl:w-[25rem]   bg-white shadow-lg rounded-lg "
        >
          <div className="h-full flex justify-evenly items-center flex-col  w-[17rem]">
            <div className="text-xl ">Enter your Attendance</div>
            <div>
              <div className="w-[17rem]">
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 w-[17rem]"
                >
                  Enter Reg No
                </label>
                <input
                  type="number"
                  id="regNo"
                  name="regNo"
                  className={
                    formik.errors.regNo && formik.touched.regNo
                      ? "bg-gray-50 border border-red-500  border-solid w-[17rem]  focus:outline-[#FD8C00]   text-sm rounded   p-2.5"
                      : "bg-gray-50 border border-gray-300 border-solid w-[17rem]  focus:outline-[#FD8C00]   text-sm rounded   p-2.5"
                  }
                  placeholder="reg no."
                  onChange={formik.handleChange}
                  value={formik.values.regNo}
                  onBlur={formik.handleBlur}
                />
                {formik.errors.regNo && formik.touched.regNo ? (
                  <p className="text-red-500 text-sm ">{formik.errors.regNo}</p>
                ) : (
                  ""
                )}
              </div>
            </div>
            <div className="w-[17rem]">
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
                  formik.errors.serviceType && formik.touched.serviceType
                    ? "border-red-500 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight  "
                    : "appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight "
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
                <p className="text-red-500 text-sm ">
                  {formik.errors.serviceType}
                </p>
              ) : (
                ""
              )}
            </div>
            <button
              type="submit"
              className="px-5 py-3 bg-[#FD8C00] rounded text-white w-full hover:bg-[#fda335]"
            >
              Click here
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Att;
