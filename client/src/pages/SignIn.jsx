import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import ErrorSign from "../assets/error.svg";
import axios from "axios";

export const SignIn = () => {
  const [values, setValues] = useState({
    gmail: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleInput = (event) => {
    setValues((prev) => ({
      ...prev,
      [event.target.name]: [event.target.value],
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:8081/signin", values)
      .then((res) => {
        if (res.data === "Success") {
          navigate("/home");
        } else alert(res.data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="flex h-screen justify-center items-center">
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col gap-2">
          <h2 className="text-center font-bold text-2xl">Sign In</h2>
          <div className="flex flex-col gap-3">
            <label
              htmlFor="gmail"
              className="flex flex-col text-base text-neutral-500 font-medium gap-1"
            >
              E-mail
              <input
                type="email"
                name="gmail"
                placeholder="Type email here"
                onChange={handleInput}
                className="p-2 min-w-[350px] rounded-md bg-neutral-700 text-white"
              />
            </label>
            <label
              htmlFor="password"
              className="flex flex-col text-base text-neutral-500 font-medium gap-1"
            >
              Password
              <input
                type="password"
                name="password"
                placeholder="Type password here"
                onChange={handleInput}
                className="p-2 min-w-[350px] rounded-md bg-neutral-700 text-white"
              />
            </label>
          </div>
          <span className="flex gap-1 text-red-600 items-center">
            <img className="h-4" src={ErrorSign} alt="" />
            Incorrect password!
          </span>
          <button className="bg-green-600 p-2 rounded-md">Enter</button>
          <Link to="/signup">
            <button className="w-full border hover:bg-neutral-600 text-neutral-400 border-neutral-600 p-2 rounded-md">
              Register
            </button>
          </Link>
        </div>
      </form>
    </div>
  );
};
