import React from "react";
import logo from "../assets/logo.png";

import { Link, useNavigate } from "react-router-dom";
import { basicSchema } from "../schema";
import { useFormik } from "formik";
import { ToastContainer, toast } from "react-toastify";
import { useState } from "react";
import { BallTriangle, MutatingDots, Oval } from "react-loader-spinner";
import { link } from "./../schema/index";
import axios from "axios";
const Register = () => {
  const [load, setload] = useState(false);
  const Join = (values) => {
    let today = new Date(values.dob);
    let month = today.toLocaleString("default", { month: "long" }).toString();
    let day = ("0" + today.getDate()).slice(-2).toString();
    let year = today.getFullYear().toString();
    console.log(`${month}  ${day} ${year}`);
    setload(true);
    axios
      .post(`${link}/createUser`, {
        firstname: values.firstname,
        lastname: values.lastname,
        regNo: values.regNo,
        matricNo: values.matricNo,
        Gender: values.gender,
        level: parseInt(values.level),
        hall: values.hall,
        roomNO: values.roomNo,
        department: values.department,
        webmail: values.webmail,
        Subunit: values.subunit,
        phoneNo: values.PhoneNo,
        dob: `${day} ${month}  ${year}`,
      })
      .then((res) => {
        if (res.status == 200) {
          console.log(res.status);
          setload(false);
          toast.success("Registered Successfully");
        } else {
          toast.error(e.response.data);
          console.log(e.response);
        }
        formik.resetForm();
      })
      .catch((e) => {
        setload(false);
        if (e.response.status == 400) {
          toast.warning("You've registered earlier");
        } else {
          toast.error("Network Error");
        }
        formik.resetForm();
      });
  };
  const formik = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      regNo: "",
      matricNo: "",
      gender: "",
      level: "",
      roomNo: "",
      hall: "",
      department: "",
      webmail: "",
      subunit: "",
      PhoneNo: "",
      dob: "12/12/2022",
    },
    validationSchema: basicSchema,
    onSubmit: async (values) => {
      window.scrollTo(0, 0);
      Join(values);
    },
  });
  // console.log(formik.values);

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
      {/* Nav */}
      <div className=" flex flex-col sm:justify-center   items-center sm:pt-[2rem] md:pt-[3rem]  lg:pt-[4rem] ">
        <nav className="sm:block hidden fixed w-full  top-0 bg-white ">
          <div className="flex w-screen   shadow py-1 px-5  items-center">
            <Link to="/">
              <span className="flex items-center" id="logo">
                <img src={logo} alt="logo" className="object-contain w-14" />
                <p className="text-[#FD8C00] text-[1rem] ">Evangelism Team</p>
              </span>
            </Link>
            <p className="text-bold text-[#FD8C00] text-2xl mx-auto">
              Join the team
            </p>
          </div>
        </nav>

        {/* Mobile Nav bar */}

        <div className="sm:hidden fixed top-0  bg-white w-screen">
          <Link to="/">
            <div className=" flex  shadow-md items-center py-2 px-2">
              <img src={logo} alt="" className="object-contain w-10" />
              <p className="text-[#FD8C00] text-[1rem]  mx-auto">
                Register to Join
              </p>
            </div>
          </Link>
        </div>
        <form
          className="grid    sm:grid-cols-2 items-center place-items-center bg-white overflow-auto md:overflow-hidden py-10 md:py-4 gap-y-12 md:gap-y-2  w-[20rem]   mt-20 mb-8 sm:mb-10 h-[190vh] sm:w-[90vw]  sm:h-[120vh] md:h-[96vh] md:mb-36 md:mt-4 lg:mt-0 lg:h-[140vh] xl:w-[60vw] lg:w-[70vw] rounded-md "
          onSubmit={formik.handleSubmit}
        >
          <div className="md:w-[20rem] w-[15rem]">
            <label className="block text-gray-700 text-sm mb-2">
              Firstname
            </label>
            <input
              className={
                formik.errors.firstname && formik.touched.firstname
                  ? "border-red-500 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight  "
                  : "appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight "
              }
              id="firstname"
              type="text"
              placeholder="John"
              onChange={formik.handleChange}
              value={formik.values.firstname}
              onBlur={formik.handleBlur}
            />
            {formik.errors.firstname && formik.touched.firstname ? (
              <p className="text-red-500 text-sm ">{formik.errors.firstname}</p>
            ) : (
              ""
            )}
          </div>
          <div className="md:w-[20rem] w-[15rem]">
            <label className="block text-gray-700 text-sm  mb-2">
              Lastname
            </label>
            <input
              className={
                formik.errors.lastname && formik.touched.lastname
                  ? "border-red-500 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight  "
                  : "appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight "
              }
              id="lastname"
              type="text"
              placeholder="Doe"
              onChange={formik.handleChange}
              value={formik.values.lastname}
              onBlur={formik.handleBlur}
            />
            {formik.errors.lastname && formik.touched.lastname ? (
              <p className="text-red-500 text-sm ">{formik.errors.lastname}</p>
            ) : (
              ""
            )}
          </div>
          <div className="md:w-[20rem] w-[15rem]">
            <label className="block text-gray-700 text-sm  mb-2">RegNo</label>
            <input
              className={
                formik.errors.regNo && formik.touched.regNo
                  ? "border-red-500 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight  "
                  : "appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight "
              }
              id="regNo"
              type="text"
              placeholder="e.g 1900231"
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
          <div className="md:w-[20rem] w-[15rem]">
            <label className="block text-gray-700 text-sm  mb-2">
              Matric No.
            </label>
            <input
              className={
                formik.errors.matricNo && formik.touched.matricNo
                  ? "border-red-500 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight  "
                  : "appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight "
              }
              id="matricNo"
              type="text"
              placeholder="e.g computer science"
              onChange={formik.handleChange}
              value={formik.values.matricNo}
              onBlur={formik.handleBlur}
            />
            {formik.errors.matricNo && formik.touched.matricNo ? (
              <p className="text-red-500 text-sm ">{formik.errors.matricNo}</p>
            ) : (
              ""
            )}
          </div>
          <div class="md:w-[20rem] w-[15rem]">
            <label class="block text-gray-700 text-sm  mb-2">Level</label>
            <select
              name="level"
              id="level"
              className={
                formik.errors.level && formik.touched.level
                  ? "border-red-500 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight  "
                  : "appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight "
              }
              onChange={formik.handleChange}
              value={formik.values.level}
              onBlur={formik.handleBlur}
              placeholder="Select Level"
            >
              <option value="" disabled selected className=" ">
                Select Level
              </option>
              <option value="100">100</option>
              <option value="200">200</option>
              <option value="300">300</option>
              <option value="400">400</option>
              <option value="500">500</option>
            </select>
            {formik.errors.level && formik.touched.level ? (
              <p className="text-red-500 text-sm ">{formik.errors.level}</p>
            ) : (
              ""
            )}
          </div>
          <div className="md:w-[20rem] w-[15rem]">
            <label className="block text-gray-700 text-sm  mb-2">
              Department
            </label>
            <input
              className={
                formik.errors.department && formik.touched.department
                  ? "border-red-500 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight  "
                  : "appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight "
              }
              id="department"
              type="text"
              placeholder="e.g computer science"
              onChange={formik.handleChange}
              value={formik.values.department}
              onBlur={formik.handleBlur}
            />
            {formik.errors.department && formik.touched.department ? (
              <p className="text-red-500 text-sm ">
                {formik.errors.department}
              </p>
            ) : (
              ""
            )}
          </div>
          <div className="md:w-[20rem] w-[15rem]">
            <label className="block text-gray-700 text-sm  mb-2">Webmail</label>
            <input
              className={
                formik.errors.webmail && formik.touched.webmail
                  ? "border-red-500 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight  "
                  : "appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight "
              }
              id="webmail"
              type="email"
              placeholder="e.g doe.john@lmu.edu.ng"
              onChange={formik.handleChange}
              value={formik.values.webmail}
              onBlur={formik.handleBlur}
            />
            {formik.errors.webmail && formik.touched.webmail ? (
              <p className="text-red-500 text-sm ">{formik.errors.webmail}</p>
            ) : (
              ""
            )}
          </div>

          <div className="md:w-[20rem] w-[15rem]">
            <label className="block text-gray-700 md:text-sm  tex mb-2">
              Phone No.(Whatsapp/Telegram)
            </label>
            <input
              className={
                formik.errors.PhoneNo && formik.touched.PhoneNo
                  ? "border-red-500 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight  "
                  : "appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight "
              }
              id="PhoneNo"
              type="tel"
              placeholder="e.g 08088223490"
              onChange={formik.handleChange}
              value={formik.values.PhoneNo}
              onBlur={formik.handleBlur}
            />
            {formik.errors.PhoneNo && formik.touched.PhoneNo ? (
              <p className="text-red-500 text-sm ">{formik.errors.PhoneNo}</p>
            ) : (
              ""
            )}
          </div>
          <div className="md:w-[20rem]  w-[15rem]">
            <label className="block text-gray-700 text-sm  mb-2">Gender</label>
            <select
              name="gender"
              id="gender"
              className={
                formik.errors.gender && formik.touched.gender
                  ? "border-red-500 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight  "
                  : "appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight "
              }
              onChange={formik.handleChange}
              value={formik.values.gender}
              onBlur={formik.handleBlur}
              placeholder="Select Gender"
            >
              <option value="" disabled selected className=" ">
                Select Gender
              </option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
            {formik.errors.gender && formik.touched.gender ? (
              <p className="text-red-500 text-sm ">{formik.errors.gender}</p>
            ) : (
              ""
            )}
          </div>
          <div className="md:w-[20rem]  w-[15rem]">
            <label className="block text-gray-700 text-sm  mb-2">Hall</label>
            <select
              name="hall"
              id="hall"
              className={
                formik.errors.hall && formik.touched.hall
                  ? "border-red-500 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight  "
                  : "appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight "
              }
              onChange={formik.handleChange}
              value={formik.values.hall}
              onBlur={formik.handleBlur}
              placeholder=""
            >
              <option value="" disabled selected className="text-red-500">
                Select Hall e.g Daniel
              </option>
              <option value="Daniel">Daniel</option>
              <option value="Dorcas">Dorcas</option>
              <option value="Isaac">Isaac</option>
              <option value="Abigail">Abigail</option>
              <option value="Abraham">Abraham</option>
              <option value="Sarah">Sarah</option>
              <option value="Joseph">Joseph</option>
              <option value="Deborah">Deborah</option>
            </select>
            {formik.errors.hall && formik.touched.hall ? (
              <p className="text-red-500 text-sm ">{formik.errors.hall}</p>
            ) : (
              ""
            )}
          </div>
          <div className="md:w-[20rem]  w-[15rem]">
            <label className="block text-gray-700 text-sm  mb-2">
              Room Number
            </label>
            <input
              className={
                formik.errors.roomNo && formik.touched.roomNo
                  ? "border-red-500 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight  "
                  : "appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight "
              }
              id="roomNo"
              type="text"
              placeholder="e.g C308"
              onChange={formik.handleChange}
              value={formik.values.roomNo}
              onBlur={formik.handleBlur}
            />
            {formik.errors.roomNo && formik.touched.roomNo ? (
              <p className="text-red-500 text-sm ">{formik.errors.roomNo}</p>
            ) : (
              ""
            )}
          </div>
          <div class=" w-[15rem] md:w-[20rem]">
            <label class="block text-gray-700 text-sm  mb-2">
              Join a Subunit
            </label>
            <select
              name="subunit"
              id="subunit"
              className={
                formik.errors.subunit && formik.touched.subunit
                  ? "border-red-500 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight  "
                  : "appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight "
              }
              onChange={formik.handleChange}
              value={formik.values.subunit}
              onBlur={formik.handleBlur}
              placeholder=""
            >
              <option value="" disabled selected className="text-red-500">
                Select Subunit
              </option>
              <option value="follow-up">Follow-up Team</option>
              <option value="media">Media Team</option>
              <option value="welfare">Welfare Team</option>
            </select>
            {formik.errors.subunit && formik.touched.subunit ? (
              <p className="text-red-500 text-sm ">{formik.errors.subunit}</p>
            ) : (
              ""
            )}
          </div>
          <div className="md:w-[20rem]  w-[15rem] sm:col-span-2">
            <label className="block text-gray-700 text-sm  mb-2">
              Date of Birth
            </label>
            <input
              className={
                formik.errors.dob && formik.touched.dob
                  ? "border-red-500 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight  "
                  : "appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight "
              }
              id="dob"
              type="date"
              placeholder="12/12/2022"
              onChange={formik.handleChange}
              value={formik.values.dob}
              onBlur={formik.handleBlur}
            />
            {formik.errors.dob && formik.touched.dob ? (
              <p className="text-red-500 text-sm ">{formik.errors.dob}</p>
            ) : (
              ""
            )}
          </div>
          <button
            type="submit"
            className="bg-[#FD8C00]  mb-5  md:mt-0 sm:col-span-2 sm:w-[30rem]  p-3 md:p-2 lg:p-[0.79rem]  rounded  text-white hover:bg-[#fda335]"
          >
            Join the team
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
/*
 
       
         

          
          
        
        
     
*/
