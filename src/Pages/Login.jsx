import React from "react";
import { useState } from "react";

const Login = () => {
  const [date, setdate] = useState("");

  return (
    <div>
      <input type="date" onChange={(e) => setdate(e.target.value)} />
      <button
        className="p-5 bg-red-500"
        onClick={() =>
          console.log(new Intl.DateTimeFormat("en-US").format(date))
        }
      >
        sfdfasdf
      </button>
    </div>
  );
};

export default Login;
