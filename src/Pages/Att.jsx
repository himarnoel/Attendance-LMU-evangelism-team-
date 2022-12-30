import React from "react";
import logo from "../assets/logo.png";

import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { link } from "./../schema/index";
import { ToastContainer, toast } from "react-toastify";
import { Oval } from "react-loader-spinner";
import { useFormik } from "formik";
const Att = () => {
  const [regNo, setregNo] = useState("");
  const [load, setload] = useState(false);
  const Attend = () => {
    
    axios
      .post(`${link}/enter`, {
        regNo: regNo.toString(),
      })
      .then((res) => {
        setload(false);
        if (res.data == "user not found") {
          toast.warning("Please register");
        } else if (res.data == "you have successfully signed in today") {
          toast.info("Attendace already taken");
        } else {
          toast.success("success");
        }
        // console.log(res);
      })
      .catch((e) => {
        setload(false);
        console.log(e.message);
        if (e.message == "Network Error") {
          toast.error(e.message);
        }
      });
  };
  
  const formik = useFormik({
    initialValues: {
      regNo: "",
      serviceType: "",
    },
    validationSchema: basicSchema,
    onSubmit: (values) => {
      const token = localStorage.getItem("token");
      window.scrollTo(0, 0);
      setload(true);
      axios
        .post(`https://attendance-system.up.railway.app/attendance/enter`, values, {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((res) => {
          setload(false);
          toast.success("Login successful");
        })
        .catch((e) => {
          if (e.code.toString() == "ERR_NETWORK") {
            toast.error(e.message.toString(), { position: "bottom-center" });
            setload(false);
          }

          if (e.response.status >= 400) {
            toast.error("Invalid username or pasword");
            setload(false);
          }

          setload(false);
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
      <ToastContainer
        pauseOnHover={false}
        autoClose={1000}
        hideProgressBar={false}
      />
      {load ? (
        <div className="w-screen h-screen   bg-white/60 absolute flex flex-col items-center justify-center top-0 left-0  z-10 ">
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
              onClick={() => navi("/join")}
              className="py-[0.5rem] px-[0.4rem] text-xs bg-[#FD8C00] rounded-md text-white mr-2"
            >
              Join the team
            </button>
          </div>
        </div>

        <form  className="  flex flex-col items-center justify-evenly  mx-auto  w-[20rem] h-[20rem]  md:w-[26rem] md:h-[22rem] lg:w-[22rem] lg:h-[20rem] sm:w-[24rem] xl:h-[20rem] xl:w-[25rem]   bg-white shadow-lg rounded-lg ">
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
                  id="email"
                  name="id"
                  pattern="[0-9]{7}"
                  className="bg-gray-50 border border-gray-300 border-solid w-[17rem]  focus:outline-[#FD8C00]   text-sm rounded   p-2.5"
                  placeholder="reg no."
                  onChange={(e) => {
                    setregNo(e.target.value);
                  }}
                  value={regNo}
                  required
                />
              </div>
            </div>
            <div className="w-[17rem]">
              {" "}
              <select
                name="hall"
                id="hall"
                className="appearance-none border rounded w-full py-2 px-3 text-black leading-tight "
                // onChange={formik.handleChange}
                // value={formik.values.hall}
                // onBlur={formik.handleBlur}
                placeholder=""
              >
                <option value="" disabled selected className="text-red-500">
                  Select Service Type
                </option>
                <option value="Tuesday Preservice">Tuesday Preservice</option>
                <option value="Thursday Preservice">Thursday Preservice</option>
                <option value="Thursday Prayer Meeting">
                  Thursday Prayer Meeting
                </option>
                <option value="Saturday Meeting">Saturday Meeting</option>
                <option value="Sunday Preservice">Sunday Preservice</option>
              </select>
            </div>
            <button
              onClick={() => Attend()}
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
