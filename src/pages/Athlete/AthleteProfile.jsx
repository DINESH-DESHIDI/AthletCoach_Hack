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
      <div className="max-w-4xl mx-auto mt-16 p-10 bg-white rounded-xl shadow-lg text-center">
        <h2 className="text-2xl font-semibold">No Profile Found</h2>
        <p className="text-gray-600 mt-2">Please login again.</p>
        <button
          className="mt-6 px-6 py-2 bg-red-500 text-white rounded-lg text-base hover:bg-red-600 transition"
          onClick={() => navigate("/login")}
        >
          Go to Login
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto mt-10 p-8 bg-white rounded-xl shadow-md font-['Segoe_UI',sans-serif]">
      {/* Top Section */}
      <div className="flex items-center gap-6 border-b pb-6 mb-6">
        <div className="w-24 h-24 rounded-full bg-indigo-600 text-white flex items-center justify-center text-3xl font-bold shadow-md">
          {user?.name ? user.name[0].toUpperCase() : "?"}
        </div>
        <div>
          <h2 className="text-3xl font-bold text-gray-800">{user.name}</h2>
          <p className="text-gray-500">{user.sport} Enthusiast</p>
        </div>
        <div className="ml-auto">
          <button
            className="px-5 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
            onClick={() => navigate("/login")}
          >
            Logout
          </button>
        </div>
      </div>

      {/* Main Content - Two Column Layout */}
      <div className="grid grid-cols-3 gap-8">
        {/* Left - User Info */}
        <div className="col-span-1 bg-gray-50 p-6 rounded-lg shadow-sm">
          <h3 className="text-lg font-semibold text-gray-700 mb-4">
            User Information
          </h3>
          <ul className="space-y-3 text-sm text-gray-700">
            <li>
              <strong>Age:</strong> {user.age}
            </li>
            <li>
              <strong>Gender:</strong> {user.gender}
            </li>
            <li>
              <strong>Region:</strong> {user.region}
            </li>
            <li>
              <strong>Sport:</strong> {user.sport}
            </li>
          </ul>
        </div>

        {/* Right - Stats */}
        <div className="col-span-2 bg-gray-50 p-6 rounded-lg shadow-sm">
          <h3 className="text-lg font-semibold text-gray-700 mb-4">
            Performance Summary
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-white p-4 rounded-lg shadow-sm text-center hover:-translate-y-1 transition-transform">
              <p className="text-sm text-gray-500">Workouts</p>
              <p className="text-2xl font-bold text-indigo-600">24</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm text-center hover:-translate-y-1 transition-transform">
              <p className="text-sm text-gray-500">Correct Reps</p>
              <p className="text-2xl font-bold text-indigo-600">312</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm text-center hover:-translate-y-1 transition-transform">
              <p className="text-sm text-gray-500">Wrong Form</p>
              <p className="text-2xl font-bold text-red-500">15</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm text-center hover:-translate-y-1 transition-transform">
              <p className="text-sm text-gray-500">Rank</p>
              <p className="text-2xl font-bold text-green-600">#8</p>
            </div>
          </div>
        </div>
      </div>
      {/* Growth Graph Section */}
      <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
        <h3 className="text-lg font-semibold text-gray-700 mb-4">
          Growth Over Time
        </h3>
        <div className="h-[250px] border-2 border-dashed border-gray-300 rounded-lg flex justify-center items-center text-gray-500 italic">
          [Mini Dashboard Graph will be displayed here]
        </div>
        <p className="mt-3 text-sm text-gray-500 text-center">
          This graph is synced with your Dashboard and will update automatically once backend data is available.
        </p>
      </div>
    </div>
  );
}

export default Profile;
