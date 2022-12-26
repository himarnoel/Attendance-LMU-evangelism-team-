import React from "react";
import logo from "../assets/logo.png";
import Input from "../Components/Input";
import { useNavigate } from "react-router-dom";
const Register = () => {
  return (
    <div>
      {/* Nav */}
      <div className="  h-screen flex justify-center items-center pt-[3rem] ">
        <nav className="lg:block hidden fixed w-full  top-0 bg-white ">
          <div className="flex w-screen   shadow py-2 px-5 justify-between items-center">
            <span className="flex items-center" id="logo">
              <img src={logo} alt="logo" className="object-contain w-14" />
              <p className="text-[#FD8C00] text-[1rem] ">Evangelism Team</p>
            </span>
            <p className="text-bold text-[#FD8C00] text-lg">Join the team</p>
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
        <form
          className="grid  lg:grid-cols-2 items-center place-items-center bg-white h-[88vh] w-[60vw] rounded-sm "
          onSubmit={() => alert("adasd")}
        >
          <div class="w-[20rem]">
            <label class="block text-gray-700 text-sm  mb-2" for="username">
              Firstname
            </label>
            <input
              class=" appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight  "
              id="firstname"
              type="text"
              placeholder="John"
              required
            />
          </div>
          <div class="w-[20rem]">
            <label class="block text-gray-700 text-sm  mb-2" for="username">
              Lastname
            </label>
            <input
              class=" appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight  "
              id="lastname"
              type="text"
              placeholder="Doe"
              required
            />
          </div>
          <div class="w-[20rem]">
            <label class="block text-gray-700 text-sm  mb-2" for="username">
              Department
            </label>
            <input
              class=" appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight  "
              id="lastname"
              type="text"
              placeholder="e.g computer science"
              required
            />
          </div>
          <div class="w-[20rem]">
            <label class="block text-gray-700 text-sm  mb-2" for="username">
              Webmail
            </label>
            <input
              class=" appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight  "
              id="lastname"
              type="email"
              placeholder="e.g doe.john@lmu.edu.ng"
              required
            />
          </div>
          <div class="w-[20rem]">
            <label class="block text-gray-700 text-sm  mb-2" for="username">
              Phone number(Whatsapp/Telegram)
            </label>
            <input
              class=" appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight  "
              id="phonenumber"
              type="tel"
              placeholder="e.g 08088223490"
              required
            />
          </div>

          <div class="w-[20rem]">
            <label class="block text-gray-700 text-sm  mb-2" for="username">
              Gender
            </label>
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
          <div class="w-[20rem]">
            <label class="block text-gray-700 text-sm  mb-2" for="username">
              Hall
            </label>
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
          <div class="w-[20rem]">
            <label class="block text-gray-700 text-sm  mb-2" for="username">
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
          <div class="w-full px-9 col-span-2 ">
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
          <button className="bg-[#FD8C00] col-span-2  p-2 rounded  text-white hover:bg-[#fda335]">
            Join the team
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
