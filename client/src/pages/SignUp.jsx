import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

import ErrorSign from "../assets/error.svg";

export const SignUp = () => {
  const [values, setValues] = useState({
    name: "",
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
      .post("http://localhost:8081/signup", values)
      .then((res) => navigate("/"))
      .catch((err) => console.log(err));
  };

  return (
    <div className="flex h-screen justify-center items-center">
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col gap-2">
          <h2 className="text-center font-bold text-2xl">Sign Up</h2>
          <div className="flex flex-col gap-3">
            <label
              htmlFor="name"
              className="flex flex-col text-base text-neutral-500 font-medium gap-1"
            >
              Name
              <input
                type="name"
                name="name"
                placeholder="Type name here"
                onChange={handleInput}
                className="p-2 min-w-[350px] rounded-md bg-neutral-700 text-white"
              />
            </label>
            <label
              htmlFor="email"
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
          <Link to="/">
            <button className="w-full border hover:bg-neutral-600 text-neutral-400 border-neutral-600 p-2 rounded-md">
              Login
            </button>
          </Link>
        </div>
      </form>
    </div>
  );
};
