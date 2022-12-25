import React from "react";

const Input = (props) => {
  return (
    <div>
      <div className="w-[17rem]">
        <label
          htmlFor="email"
          className="block mb-2 text-sm font-medium text-gray-900 w-[17rem]"
        >
          {props.name}
        </label>
        <input
          type="text"
          id="email"
          name="id"
          className="bg-gray-50 border border-gray-300 border-solid w-[17rem]  focus:outline-[#FD8C00]   text-sm rounded   p-2.5"
          placeholder="reg no."
          required
        />
      </div>
    </div>
  );
};

export default Input;
