import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function Signup() {
  const [formData, setFormData] = useState({
    role: "athlete",
    name: "",
    age: "",
    gender: "",
    region: "",
    sport: "",
    password: "",
    specialization: "",
    experience: "",
    team: "",
    certification: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Save user
    localStorage.setItem("user", JSON.stringify(formData));

    // Navigate based on role
    if (formData.role === "athlete") {
      navigate("/athlete/profile", { state: { user: formData } });
    } else if (formData.role === "coach") {
      navigate("/coach/profile", { state: { user: formData } });
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-[#f7f7f7] font-['Montserrat','Roboto',sans-serif] p-5">
      <div className="w-full max-w-[500px] bg-white p-8 rounded-xl shadow-md text-center">
        <h2 className="text-[1.8rem] mb-2 text-[#111]">Create Your Profile</h2>
        <p className="text-[#666] text-[0.95rem] mb-6">
          Fill in your details to personalize your experience.
        </p>

        <form className="flex flex-col gap-5 text-left" onSubmit={handleSubmit}>
          {/* Role */}
          <label className="flex flex-col items-start font-medium text-[#333]">
            Role
            <select
              name="role"
              value={formData.role}
              onChange={handleChange}
              className="mt-2 w-full p-3 border border-[#ccc] rounded-lg text-base focus:border-[#ff9800] focus:outline-none"
            >
              <option value="athlete">Athlete</option>
              <option value="coach">Coach</option>
            </select>
          </label>

          {/* Common Fields */}
          <label className="flex flex-col items-start font-medium text-[#333]">
            Name
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              required
              className="mt-1 w-full p-3 border border-[#ccc] rounded-lg text-base focus:border-[#ff9800] focus:outline-none"
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
              className="mt-1 w-full p-3 border border-[#ccc] rounded-lg text-base focus:border-[#ff9800] focus:outline-none"
            />
          </label>

          {/* Athlete-specific fields */}
          {formData.role === "athlete" && (
            <>
              <label className="flex flex-col items-start font-medium text-[#333]">
                Age
                <input
                  type="number"
                  name="age"
                  value={formData.age}
                  onChange={handleChange}
                  required
                  placeholder="Enter your age"
                  className="mt-1 w-full p-3 border border-[#ccc] rounded-lg text-base focus:border-[#ff9800] focus:outline-none"
                />
              </label>

              <label className="flex flex-col items-start font-medium text-[#333]">
                Gender
                <select
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  required
                  className="mt-1 w-full p-3 border border-[#ccc] rounded-lg text-base focus:border-[#ff9800] focus:outline-none"
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
                  className="mt-1 w-full p-3 border border-[#ccc] rounded-lg text-base focus:border-[#ff9800] focus:outline-none"
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
                  className="mt-1 w-full p-3 border border-[#ccc] rounded-lg text-base focus:border-[#ff9800] focus:outline-none"
                />
              </label>
            </>
          )}

          {/* Coach-specific fields */}
          {formData.role === "coach" && (
            <>
              <label className="flex flex-col items-start font-medium text-[#333]">
                Specialization
                <input
                  type="text"
                  name="specialization"
                  placeholder="e.g. Strength Training, Cricket Coaching"
                  value={formData.specialization}
                  onChange={handleChange}
                  required
                  className="mt-1 w-full p-3 border border-[#ccc] rounded-lg text-base focus:border-[#ff9800] focus:outline-none"
                />
              </label>

              <label className="flex flex-col items-start font-medium text-[#333]">
                Years of Experience
                <input
                  type="number"
                  name="experience"
                  placeholder="Enter years of experience"
                  value={formData.experience}
                  onChange={handleChange}
                  required
                  className="mt-1 w-full p-3 border border-[#ccc] rounded-lg text-base focus:border-[#ff9800] focus:outline-none"
                />
              </label>

              <label className="flex flex-col items-start font-medium text-[#333]">
                Team / Academy
                <input
                  type="text"
                  name="team"
                  placeholder="e.g. Delhi Cricket Academy"
                  value={formData.team}
                  onChange={handleChange}
                  required
                  className="mt-1 w-full p-3 border border-[#ccc] rounded-lg text-base focus:border-[#ff9800] focus:outline-none"
                />
              </label>

              <label className="flex flex-col items-start font-medium text-[#333]">
                Certifications
                <input
                  type="text"
                  name="certification"
                  placeholder="e.g. ICC Level 1 Coaching"
                  value={formData.certification}
                  onChange={handleChange}
                  required
                  className="mt-1 w-full p-3 border border-[#ccc] rounded-lg text-base focus:border-[#ff9800] focus:outline-none"
                />
              </label>
            </>
          )}

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
    </div>
  );
}

export default Signup;
