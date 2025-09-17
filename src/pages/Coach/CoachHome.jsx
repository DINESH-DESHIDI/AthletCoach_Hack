// CoachHome.jsx
import React from "react";
import {
  FaUsers,
  FaChartLine,
  FaBullhorn,
  FaClipboardCheck,
  FaPlusCircle,
  FaEnvelope,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function CoachHome() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col min-h-screen bg-[#f5f5f5] text-[#333] font-sans">
      {/* Hero Section */}
      <header className="bg-white px-6 py-16 text-center shadow-lg rounded-b-2xl">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-gray-800">
          Coach Dashboard Overview
        </h1>
        <p className="text-lg sm:text-xl max-w-2xl mx-auto text-gray-600">
          Monitor your athletes, track progress, and keep them motivated—all in
          one place.
        </p>
      </header>

      {/* Summary Cards */}
      <section className="flex justify-center flex-wrap gap-8 px-6 py-12 max-w-7xl mx-auto">
        {/* My Athletes */}
        <div className="bg-white rounded-2xl p-8 flex-1 max-w-xs text-center shadow-lg hover:shadow-xl transition-transform transform hover:-translate-y-2 duration-300">
          <FaUsers className="text-[2.5rem] text-[#ff9800] mb-4 mx-auto" />
          <h3 className="text-xl font-semibold mb-2 text-gray-800">
            My Athletes
          </h3>
          <p className="text-gray-600 mb-4">
            View all active athletes and their latest activities.
          </p>
          <button
            onClick={() => navigate("/coach/athleteslist")}
            className="bg-[#ff9800] text-white border-none px-5 py-2 rounded-md font-bold cursor-pointer hover:bg-[#e68900]"
          >
            View Athletes
          </button>
        </div>

        {/* Athlete Progress */}
        <div className="bg-white rounded-2xl p-8 flex-1 max-w-xs text-center shadow-lg hover:shadow-xl transition-transform transform hover:-translate-y-2 duration-300">
          <FaChartLine className="text-[2.5rem] text-[#ff9800] mb-4 mx-auto" />
          <h3 className="text-xl font-semibold mb-2 text-gray-800">
            Athlete Progress
          </h3>
          <p className="text-gray-600 mb-4">
            Check top improvements and performance highlights.
          </p>
          <button
            onClick={() => navigate("/coach/progress")}
            className="bg-[#ff9800] text-white border-none px-5 py-2 rounded-md font-bold cursor-pointer hover:bg-[#e68900]"
          >
            View Progress
          </button>
        </div>

        {/* Announcements */}
        <div className="bg-white rounded-2xl p-8 flex-1 max-w-xs text-center shadow-lg hover:shadow-xl transition-transform transform hover:-translate-y-2 duration-300">
          <FaBullhorn className="text-[2.5rem] text-[#ff9800] mb-4 mx-auto" />
          <h3 className="text-xl font-semibold mb-2 text-gray-800">
            Announcements
          </h3>
          <p className="text-gray-600 mb-4">
            Send motivational notes or reminders to your athletes.
          </p>
          <button
            onClick={() => navigate("/coach/announcement")}
            className="bg-[#ff9800] text-white border-none px-5 py-2 rounded-md font-bold cursor-pointer hover:bg-[#e68900]"
          >
            Create Announcement
          </button>
        </div>

        {/* Quick Actions */}
        <div className="bg-white rounded-2xl p-8 flex-1 max-w-xs text-center shadow-lg hover:shadow-xl transition-transform transform hover:-translate-y-2 duration-300">
          <FaClipboardCheck className="text-[2.5rem] text-[#ff9800] mb-4 mx-auto" />
          <h3 className="text-xl font-semibold mb-2 text-gray-800">
            Quick Actions
          </h3>
          <p className="text-gray-600 mb-4">
            Review submissions, create challenges, or message athletes
            instantly.
          </p>
          <div className="flex justify-center gap-3 flex-wrap">
            <button
              onClick={() => navigate("/coach/review")}
              className="bg-[#ff9800] text-white border-none px-5 py-2 rounded-md font-bold cursor-pointer hover:bg-[#e68900] flex items-center"
            >
              <FaClipboardCheck className="mr-2" /> Review
            </button>
          </div>
        </div>
      </section>

      {/* About / Why Section */}
      <section className="bg-[#f9f9f9] px-6 py-16 text-center">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-4 text-gray-800">
          Why This Dashboard?
        </h2>
        <p className="text-gray-600 max-w-3xl mx-auto text-lg sm:text-xl">
          Coaches need a single platform to monitor, motivate, and guide their
          athletes effectively. This dashboard centralizes insights, progress
          tracking, and communication.
        </p>
      </section>
    </div>
  );
}

export default CoachHome;
