import React from "react";
import { useState } from "react";
import logo from "../assets/logo.png";
import { useFormik } from "formik";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { basic } from "../schema";
const Login = () => {
  const navigate = useNavigate();
  const [load, setload] = useState(false);

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: basic,
    onSubmit: (values) => {
      setload(true);
      axios
        .post("https://attendance-system.up.railway.app/admin/login", values)
        .then((res) => {
          localStorage.setItem("token", res.data.token);
                   setload(false);
          toast.success("Login successful");
         
          window.location.reload();
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
  return (
    <>
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
      <div className="w-screen h-screen flex  flex-col justify-center items-center">
        <nav className="lg:block hidden fixed w-full  top-0 bg-white ">
          <div className="flex w-screen   shadow py-2 px-3  items-center">
          <Link to="/">     <span className="flex items-center" id="logo">
              <img src={logo} alt="logo" className="object-contain w-14" />
              <p className="text-[#FD8C00] text-[1.2rem] ">Evangelism Team</p>
            </span>
            </Link > 
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

        <form
          onSubmit={formik.handleSubmit}
          className="flex justify-evenly items-center flex-col  w-[20rem] h-[20rem]  md:w-[26rem] md:h-[22rem] lg:w-[22rem] lg:h-[20rem] sm:w-[24rem] xl:h-[20rem] xl:w-[25rem]   bg-white shadow-lg rounded-lg"
        >
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
                className="bg-gray-50 border border-gray-300 border-solid w-[17rem]  focus:outline-[#FD8C00]   text-sm rounded   p-2.5"
                placeholder="e.g john.doe"
                onChange={formik.handleChange}
                value={formik.values.username}
                onBlur={formik.handleBlur}
              />
              {formik.errors.username && formik.touched.username ? (
                <p className="text-red-500 text-sm ">
                  {formik.errors.username}
                </p>
              ) : (
                ""
              )}
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
                type="password"
                id="password"
                name="password"
                className="bg-gray-50 border border-gray-300 border-solid w-[17rem]  focus:outline-[#FD8C00]   text-sm rounded   p-2.5"
                placeholder="password"
                onChange={formik.handleChange}
                value={formik.values.password}
                onBlur={formik.handleBlur}
              />
              {formik.errors.password && formik.touched.password ? (
                <p className="text-red-500 text-sm ">
                  {formik.errors.password}
                </p>
              ) : (
                ""
              )}
            </div>
          </div>
          <button
            type="submit"
            className="w-[17rem] py-2 bg-[#FD8C00] rounded text-white  hover:bg-[#fda335]"
          >
            Click here
          </button>
     
        </form>
      </div>
    </>
  );
};

export default Login;
