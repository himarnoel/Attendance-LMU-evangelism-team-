import React from "react";

const Input = (props) => {
  return (
    <div>
      <div className="w-[24rem]">
        <label
          htmlFor="email"
          className="block mb-2 text-sm font-medium text-gray-900 "
        >
          {props.name}
        </label>
        <input
          type="text"
          id="email"
          name="id"
          className="bg-gray-50 border border-gray-300 border-solid   focus:outline-[#FD8C00]   text-sm rounded  block w-full p-2.5"
          placeholder="yourname@email.com"
          required
        />
      </div>
    </div>
  );
};

export default Input;
