import React from "react";
import logo from "../assets/logo.png";

import { useNavigate } from "react-router-dom";
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
        toast.error(e.response.data);
        console.log(e.response);
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
      level: 100,
      roomNo: "",
      hall: "",
      department: "",
      webmail: "",
      subunit: "",
      PhoneNo: "",
    },
    validationSchema: basicSchema,
    onSubmit: async (values) => {
      Join(values);
    },
  });

  return (
    <div>
      <ToastContainer />
      {load ? (
        <div className="w-screen md:h-screen h-[190vh]  bg-white/60 absolute flex flex-col items-center justify-center top-0 left-0  z-10 ">
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
      <div className="  h-[190vh] md:h-screen flex flex-col md:justify-center   items-center md:pt-[3rem]  ">
        <nav className="md:block hidden fixed w-full  top-0 bg-white ">
          <div className="flex w-screen   shadow py-1 px-5 justify-between items-center">
            <span className="flex items-center" id="logo">
              <img src={logo} alt="logo" className="object-contain w-14" />
              <p className="text-[#FD8C00] text-[1rem] ">Evangelism Team</p>
            </span>
            <p className="text-bold text-[#FD8C00] text-lg">Join the team</p>
          </div>
        </nav>

        {/* Mobile Nav bar */}

        <div className="md:hidden fixed top-0  bg-white w-screen">
          <div className=" flex justify-between shadow-md items-center py-2 px-2">
            <img src={logo} alt="" className="object-contain w-10" />
            <p className="text-[#FD8C00] text-[0.8rem] ">Register to Join</p>
          </div>
        </div>
        <form
          className="grid    md:grid-cols-2 items-center place-items-center bg-white w-[20rem]   mt-20 h-[160vh] md:w-[90vw] md:h-[80vh] md:mt-4 lg:mt-0 lg:h-[90vh] xl:w-[60vw] lg:w-[70vw] rounded-md shadow-md "
          onSubmit={formik.handleSubmit}
        >
          <div className="md:w-[20rem] w-[15rem]">
            <label className="block text-gray-700 text-xs  mb-2">
              Firstname
            </label>
            <input
              className=" appearance-none border rounded w-full py-[0.24rem] px-3 text-gray-700 leading-tight  "
              id="firstname"
              type="text"
              placeholder="John"
              onChange={formik.handleChange}
              value={formik.values.firstname}
              onBlur={formik.handleBlur}
              required
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
              className=" appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight  "
              id="lastname"
              type="text"
              placeholder="Doe"
              onChange={formik.handleChange}
              value={formik.values.lastname}
              onBlur={formik.handleBlur}
              required
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
              className=" appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight  "
              id="regNo"
              type="text"
              placeholder="e.g 1900231"
              onChange={formik.handleChange}
              value={formik.values.regNo}
              onBlur={formik.handleBlur}
              required
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
              className=" appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight  "
              id="matricNo"
              type="text"
              placeholder="e.g computer science"
              onChange={formik.handleChange}
              value={formik.values.matricNo}
              onBlur={formik.handleBlur}
              required
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
              className=" appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight  "
              onChange={formik.handleChange}
              value={formik.values.level}
              onBlur={formik.handleBlur}
            >
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
              className=" appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight  "
              id="department"
              type="text"
              placeholder="e.g computer science"
              onChange={formik.handleChange}
              value={formik.values.department}
              onBlur={formik.handleBlur}
              required
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
              className=" appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight  "
              id="webmail"
              type="email"
              placeholder="e.g doe.john@lmu.edu.ng"
              onChange={formik.handleChange}
              value={formik.values.webmail}
              onBlur={formik.handleBlur}
              required
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
              className=" appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight  "
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
              className=" appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight  "
              onChange={formik.handleChange}
              value={formik.values.gender}
              onBlur={formik.handleBlur}
            >
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
              className=" appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight  "
              onChange={formik.handleChange}
              value={formik.values.hall}
              onBlur={formik.handleBlur}
            >
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
              class=" appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight  "
              id="roomNo"
              type="text"
              placeholder="e.g C308"
              onChange={formik.handleChange}
              value={formik.values.roomNo}
              onBlur={formik.handleBlur}
              required
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
              className=" appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight  "
              onChange={formik.handleChange}
              value={formik.values.Subunit}
              onBlur={formik.handleBlur}
            >
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
          <button
            type="submit"
            className="bg-[#FD8C00] md:col-span-2 md:w-[30rem]  p-2 lg:p-1  rounded  text-white hover:bg-[#fda335]"
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
