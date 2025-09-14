/* Profile.jsx */
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

function Profile() {
  const location = useLocation();
  const navigate = useNavigate();

  // Get user data from navigation or localStorage
  const user = location.state?.user || JSON.parse(localStorage.getItem("user"));

  if (!user) {
    return (
      <div className="max-w-[800px] my-10 mx-auto p-6 bg-white rounded-xl shadow-md font-['Segoe_UI',sans-serif] text-center">
        <h2 className="text-xl font-semibold">No Profile Found</h2>
        <p className="text-gray-600">Please login again.</p>
        <button
          className="block mt-6 px-5 py-2 bg-red-500 text-white rounded-lg cursor-pointer text-[15px] transition-colors hover:bg-red-600"
          onClick={() => navigate("/login")}
        >
          Go to Login
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-[800px] my-10 mx-auto p-6 bg-white rounded-xl shadow-md font-['Segoe_UI',sans-serif]">
      {/* Profile Header */}
      <div className="text-center mb-6">
        <div className="w-20 h-20 mx-auto mb-3 rounded-full bg-indigo-600 text-white flex items-center justify-center text-[28px] font-bold">
          {user.name[0].toUpperCase()}
        </div>
        <h2 className="text-2xl font-semibold mb-1">{user.name}</h2>
        <p className="text-gray-600 text-sm">{user.sport} Enthusiast</p>
      </div>

      {/* User Details */}
      <div className="mb-6">
        <h3 className="mb-3 text-gray-800 font-semibold">User Information</h3>
        <ul className="list-none p-0">
          <li className="py-2 border-b border-gray-200 text-[15px]">
            <strong>Age:</strong> {user.age}
          </li>
          <li className="py-2 border-b border-gray-200 text-[15px]">
            <strong>Gender:</strong> {user.gender}
          </li>
          <li className="py-2 border-b border-gray-200 text-[15px]">
            <strong>Region:</strong> {user.region}
          </li>
          <li className="py-2 border-b border-gray-200 text-[15px]">
            <strong>Sport:</strong> {user.sport}
          </li>
        </ul>
      </div>

      {/* Dashboard Summary */}
      <div>
        <h3 className="mb-4 text-gray-800 font-semibold">Dashboard Summary</h3>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(150px,1fr))] gap-4">
          <div className="bg-gray-50 p-4 rounded-lg text-center shadow-sm hover:-translate-y-1 transition-transform duration-200">
            <h4 className="text-sm mb-2 text-indigo-600 font-semibold">
              🏋️ Workouts Completed
            </h4>
            <p className="text-xl font-bold text-gray-800">24</p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg text-center shadow-sm hover:-translate-y-1 transition-transform duration-200">
            <h4 className="text-sm mb-2 text-indigo-600 font-semibold">
              ✅ Correct Reps
            </h4>
            <p className="text-xl font-bold text-gray-800">312</p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg text-center shadow-sm hover:-translate-y-1 transition-transform duration-200">
            <h4 className="text-sm mb-2 text-indigo-600 font-semibold">
              ⚡ Wrong Form
            </h4>
            <p className="text-xl font-bold text-gray-800">15</p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg text-center shadow-sm hover:-translate-y-1 transition-transform duration-200">
            <h4 className="text-sm mb-2 text-indigo-600 font-semibold">
              🏆 Leaderboard Rank
            </h4>
            <p className="text-xl font-bold text-gray-800">#8</p>
          </div>
        </div>
      </div>

      <button
        className="block mt-6 px-5 py-2 bg-red-500 text-white rounded-lg cursor-pointer text-[15px] transition-colors hover:bg-red-600 mx-auto"
        onClick={() => navigate("/login")}
      >
        Logout
      </button>
    </div>
  );
}

export default Profile;
