import React from "react";
import logo from "../assets/logo.png";
import Input from "../Components/Input";
import { useNavigate } from "react-router-dom";
const Register = () => {
  return (
    <div>
      {/* Nav */}
      <div className="  h-[190vh] md:h-screen flex flex-col md:justify-center   items-center md:pt-[3rem]  ">
        <nav className="md:block hidden fixed w-full  top-0 bg-white ">
          <div className="flex w-screen   shadow py-2 px-5 justify-between items-center">
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
          className="grid    md:grid-cols-2 items-center place-items-center bg-white w-[20rem]   mt-20 h-[160vh] md:w-[90vw] md:h-[80vh] md:mt-4 lg:h-[88vh] xl:w-[60vw] lg:w-[70vw] rounded-md shadow-md "
          onSubmit={() => alert("adasd")}
        >
          <div className="md:w-[20rem] w-[15rem]">
            <label className="block text-gray-700 text-sm  mb-2">
              Firstname
            </label>
            <input
              className=" appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight  "
              id="firstname"
              type="text"
              placeholder="John"
              required
            />
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
              required
            />
          </div>
          <div className="md:w-[20rem] w-[15rem]">
            <label className="block text-gray-700 text-sm  mb-2">
              Department
            </label>
            <input
              className=" appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight  "
              id="lastname"
              type="text"
              placeholder="e.g computer science"
              required
            />
          </div>
          <div className="md:w-[20rem] w-[15rem]">
            <label className="block text-gray-700 text-sm  mb-2">Webmail</label>
            <input
              className=" appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight  "
              id="lastname"
              type="email"
              placeholder="e.g doe.john@lmu.edu.ng"
              required
            />
          </div>

          <div className="md:w-[20rem] w-[15rem]">
            <label className="block text-gray-700 md:text-sm  tex mb-2">
              Phone No.(Whatsapp/Telegram)
            </label>
            <input
              class=" appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight  "
              id="phonenumber"
              type="tel"
              placeholder="e.g 08088223490"
              required
            />
          </div>
          <div className="md:w-[20rem]  w-[15rem]">
            <label className="block text-gray-700 text-sm  mb-2">Gender</label>
            <select
              name=""
              id=""
              className=" appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight  "
            >
              <option value="">Male</option>
              <option value="">Male</option>
              <option value="">Female</option>
            </select>
          </div>
          <div className="md:w-[20rem]  w-[15rem]">
            <label className="block text-gray-700 text-sm  mb-2">Hall</label>
            <select
              name=""
              id=""
              className=" appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight  "
            >
              <option value="">Daniel</option>
              <option value="">Dorcas</option>
              <option value="">Isaac</option>
              <option value="">Abigail</option>
              <option value="">Abraham</option>
              <option value="">Sarah</option>
              <option value="">Joseph</option>
              <option value="">Deborah</option>
            </select>
          </div>
          <div className="md:w-[20rem]  w-[15rem]">
            <label className="block text-gray-700 text-sm  mb-2">
              Room Number
            </label>
            <input
              class=" appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight  "
              id="phonenumber"
              type="tel"
              placeholder="e.g C308"
              required
            />
          </div>
          <div class="w-full px-9 md:col-span-2 ">
            <label class="block text-gray-700 text-sm  mb-2">Join a Team</label>
            <select
              name=""
              id=""
              className=" appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight  "
            >
              <option value="Follow-up Team">Follow-up Team</option>
              <option value="Media Team">Media Team</option>
              <option value="Welfare Team">Welfare Team</option>
            </select>
          </div>
          <button className="bg-[#FD8C00] md:col-span-2 md:w-[30rem]  p-2 rounded-lg  text-white hover:bg-[#fda335]">
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
