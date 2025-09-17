// Login.jsx

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [formData, setFormData] = useState({
    role: "athlete", // default role
    name: "",
    sport: "",
    password: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const savedUser = JSON.parse(localStorage.getItem("user"));

    if (
      savedUser &&
      savedUser.name === formData.name &&
      savedUser.password === formData.password &&
      (savedUser.role === "athlete" || savedUser.role === "coach")
    ) {
      if (savedUser.role === "athlete") {
        navigate("/athlete/profile", { state: { user: savedUser } });
      } else if (savedUser.role === "coach") {
        navigate("/coach/profile", { state: { user: savedUser } });
      }
    } else {
      setError("Incorrect details, please try again.");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-[#f7f7f7] font-['Montserrat','Roboto',sans-serif] p-5">
      <form
        className="bg-white p-8 rounded-xl shadow-md w-full max-w-md transition-transform duration-200 text-center hover:-translate-y-[3px]"
        onSubmit={handleSubmit}
      >
        <h2 className="text-[1.8rem] mb-2 text-[#111]">Login</h2>
        <p className="text-[#666] text-[0.95rem] mb-6">
          Enter your details to continue
        </p>

        {error && (
          <p className="text-[#e74c3c] text-center mt-2 text-[0.9rem] font-medium">
            {error}
          </p>
        )}

        {/* Role Selection */}
        <label className="flex flex-col items-start font-medium text-[#333]">
          Role
          <select
            name="role"
            value={formData.role}
            onChange={handleChange}
            className="mt-2 w-full p-3 border border-[#ccc] rounded-lg text-base transition duration-200 focus:border-[#ff9800] focus:outline-none"
          >
            <option value="athlete">Athlete</option>
            <option value="coach">Coach</option>
          </select>
        </label>

        {/* Name */}
        <label className="flex flex-col items-start font-medium text-[#333] mt-4">
          Name
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
            required
            className="mt-2 w-full p-3 border border-[#ccc] rounded-lg text-base transition duration-200 focus:border-[#ff9800] focus:outline-none"
          />
        </label>

        {/* Sport (Only for Athlete) */}
        {formData.role === "athlete" && (
          <label className="flex flex-col items-start font-medium text-[#333] mt-4">
            Sport Interest
            <input
              type="text"
              name="sport"
              placeholder="Enter your sport"
              value={formData.sport}
              onChange={handleChange}
              required={formData.role === "athlete"}
              className="mt-2 w-full p-3 border border-[#ccc] rounded-lg text-base transition duration-200 focus:border-[#ff9800] focus:outline-none"
            />
          </label>
        )}

        {/* Password */}
        <label className="flex flex-col items-start font-medium text-[#333] mt-4">
          Password
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            value={formData.password}
            onChange={handleChange}
            required
            className="mt-2 w-full p-3 border border-[#ccc] rounded-lg text-base transition duration-200 focus:border-[#ff9800] focus:outline-none"
          />
        </label>

        <button
          type="submit"
          className="mt-6 bg-[rgb(238,156,23)] text-white text-base font-semibold p-3 w-full rounded-lg cursor-pointer transition duration-300 hover:bg-[#f6b936]"
        >
          Login
        </button>

        <p className="text-center mt-6 text-[#666] text-[0.95rem]">
          Don’t have an account?{" "}
          <a
            href="/signup"
            className="text-[#ff5722] font-semibold no-underline hover:underline"
          >
            Signup
          </a>
        </p>
      </form>
    </div>
  );
}

export default Login;
