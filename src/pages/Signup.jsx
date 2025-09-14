/* Signup.jsx */
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function Signup() {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    gender: "",
    region: "",
    sport: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Profile Saved:", formData);

    // Save user in localStorage
    localStorage.setItem("user", JSON.stringify(formData));

    // Navigate to profile
    navigate("/profile", { state: { user: formData } });
  };

  return (
    <div className="max-w-[500px] mt-[100px] mb-[50px] mx-auto bg-white p-8 rounded-xl shadow-md text-center font-['Montserrat','Roboto',sans-serif]">
      <h2 className="text-[1.8rem] mb-2 text-[#111]">Create Your Profile</h2>
      <p className="text-[#666] text-[0.95rem] mb-6">
        Fill in your details to personalize your experience.
      </p>

      <form
        className="flex flex-col gap-5 text-left"
        onSubmit={handleSubmit}
      >
        <label className="flex flex-col items-start font-medium text-[#333]">
          Name
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
            required
            className="mt-1 w-full p-3 border border-[#ccc] rounded-lg text-base focus:border-[#ff9800] focus:outline-none focus:shadow-[0_0_4px_rgba(255,152,0,0.5)]"
          />
        </label>

        <label className="flex flex-col items-start font-medium text-[#333]">
          Age
          <input
            type="number"
            name="age"
            placeholder="Enter your age"
            value={formData.age}
            onChange={handleChange}
            required
            className="mt-1 w-full p-3 border border-[#ccc] rounded-lg text-base focus:border-[#ff9800] focus:outline-none focus:shadow-[0_0_4px_rgba(255,152,0,0.5)]"
          />
        </label>

        <label className="flex flex-col items-start font-medium text-[#333]">
          Gender
          <select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            required
            className="mt-1 w-full p-3 border border-[#ccc] rounded-lg text-base focus:border-[#ff9800] focus:outline-none focus:shadow-[0_0_4px_rgba(255,152,0,0.5)]"
          >
            <option value="">Select gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </label>

        <label className="flex flex-col items-start font-medium text-[#333]">
          Region
          <input
            type="text"
            name="region"
            placeholder="Enter your region"
            value={formData.region}
            onChange={handleChange}
            required
            className="mt-1 w-full p-3 border border-[#ccc] rounded-lg text-base focus:border-[#ff9800] focus:outline-none focus:shadow-[0_0_4px_rgba(255,152,0,0.5)]"
          />
        </label>

        <label className="flex flex-col items-start font-medium text-[#333]">
          Sport Interest
          <input
            type="text"
            name="sport"
            placeholder="e.g. Cricket, Football"
            value={formData.sport}
            onChange={handleChange}
            required
            className="mt-1 w-full p-3 border border-[#ccc] rounded-lg text-base focus:border-[#ff9800] focus:outline-none focus:shadow-[0_0_4px_rgba(255,152,0,0.5)]"
          />
        </label>

        <label className="flex flex-col items-start font-medium text-[#333]">
          Password
          <input
            type="password"
            name="password"
            placeholder="Enter a password"
            value={formData.password}
            onChange={handleChange}
            required
            className="mt-1 w-full p-3 border border-[#ccc] rounded-lg text-base focus:border-[#ff9800] focus:outline-none focus:shadow-[0_0_4px_rgba(255,152,0,0.5)]"
          />
        </label>

        <button
          type="submit"
          className="mt-4 bg-[rgb(238,156,23)] text-white text-base font-semibold py-3 rounded-lg cursor-pointer transition-colors hover:bg-[#f6b936]"
        >
          Sign up
        </button>

        <p className="text-center mt-4 text-[#666]">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-[#ff5722] no-underline hover:underline"
          >
            Login
          </Link>
        </p>
      </form>
    </div>
  );
}

export default Signup;
