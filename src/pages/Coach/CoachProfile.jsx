/* CoachProfile.jsx */
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

function CoachProfile() {
  const location = useLocation();
  const navigate = useNavigate();

  const [coach, setCoach] = useState(null);
  const [loading, setLoading] = useState(true);

  // Fetch coach data from backend
  useEffect(() => {
    const savedCoach =
      location.state?.user || JSON.parse(localStorage.getItem("user"));

    if (!savedCoach) {
      setLoading(false);
      return;
    }

    // Example: GET request to fetch updated coach details from backend
    axios
      .get(`http://localhost:5000/api/coaches/${savedCoach.name}`)
      .then((res) => {
        setCoach(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching coach data:", err);
        // Fallback → use local data if backend not ready
        setCoach(savedCoach);
        setLoading(false);
      });
  }, [location.state]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen text-lg font-medium text-gray-600">
        Loading profile...
      </div>
    );
  }

  if (!coach) {
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
        {/* Profile Pic / Initial */}
        <div className="w-24 h-24 rounded-full bg-indigo-600 text-white flex items-center justify-center text-3xl font-bold shadow-md overflow-hidden">
          {coach.profilePic ? (
            <img
              src={coach.profilePic}
              alt="Coach Profile"
              className="w-full h-full object-cover"
            />
          ) : (
            coach.name?.[0]?.toUpperCase() || "?"
          )}
        </div>
        <div>
          <h2 className="text-3xl font-bold text-gray-800">{coach.name}</h2>
          <p className="text-gray-500">{coach.specialization}</p>
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

      {/* Main Content */}
      <div className="grid grid-cols-3 gap-8">
        {/* Left - Basic Info */}
        <div className="col-span-1 bg-gray-50 p-6 rounded-lg shadow-sm">
          <h3 className="text-lg font-semibold text-gray-700 mb-4">
            Profile Information
          </h3>
          <ul className="space-y-3 text-sm text-gray-700">
            <li>
              <strong>Age:</strong> {coach.age || "N/A"}
            </li>
            <li>
              <strong>Gender:</strong> {coach.gender || "N/A"}
            </li>
            <li>
              <strong>Region:</strong> {coach.region || "N/A"}
            </li>
            <li>
              <strong>Experience:</strong> {coach.experience} years
            </li>
            <li>
              <strong>Certifications:</strong> {coach.certification || "N/A"}
            </li>
          </ul>
        </div>

        {/* Right - Assigned Athletes */}
        <div className="col-span-2 bg-gray-50 p-6 rounded-lg shadow-sm">
          <h3 className="text-lg font-semibold text-gray-700 mb-4">
            Assigned Athletes
          </h3>
          {coach.athletes && coach.athletes.length > 0 ? (
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {coach.athletes.map((athlete, idx) => (
                <li
                  key={idx}
                  className="bg-white p-4 rounded-lg shadow-sm flex items-center justify-between"
                >
                  <span className="text-gray-800 font-medium">{athlete}</span>
                  <button className="text-sm px-3 py-1 bg-indigo-500 text-white rounded-md hover:bg-indigo-600 transition">
                    View
                  </button>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-500 italic">No athletes assigned yet.</p>
          )}
        </div>
      </div>

      {/* Preferences Section */}
      <div className="bg-gray-50 mt-8 p-6 rounded-lg shadow-sm">
        <h3 className="text-lg font-semibold text-gray-700 mb-4">
          Preferences & Settings
        </h3>
        <p className="text-sm text-gray-600">
          Here you can customize your coaching preferences, update your
          availability, and manage notifications.
        </p>
        <button className="mt-4 px-5 py-2 bg-[#ff9800] text-white rounded-lg hover:bg-[#e68900] transition">
          Edit Profile
        </button>
      </div>
    </div>
  );
}

export default CoachProfile;
