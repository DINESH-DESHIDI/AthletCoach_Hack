// Home.jsx

import React from "react";
import { FaVideo, FaChartLine, FaTrophy } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import VideoUpload from "./VideoUpload";
import Dashboard from "./Dashboard";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col min-h-screen bg-[#f5f5f5] text-[#333] font-sans">
      {/* Hero Section */}
      <header className="bg-white px-6 py-12 text-center shadow-md">
        <h1 className="text-4xl mb-4">Discover Hidden Sports Talent</h1>
        <p className="text-lg max-w-xl mx-auto text-[#555]">
          AI-powered platform to find, train, and track athletes across India.
          Equal opportunities for young talent from all regions.
        </p>
      </header>

      {/* Action Cards */}
      <section className="flex justify-center flex-wrap gap-8 px-8 py-12">
        <div className="bg-white rounded-xl p-6 flex-1 max-w-xs text-center shadow-md transition-transform duration-200 hover:-translate-y-1 hover:shadow-lg">
          <FaVideo className="text-[2.5rem] text-[#ff9800] mb-4 mx-auto" />
          <h3 className="text-lg mb-2">Upload / Record Video</h3>
          <p className="text-base mb-4">
            Show your skills and let AI evaluate your performance.
          </p>
          <button
            onClick={() => navigate("/videoupload")}
            className="bg-[#ff9800] text-white border-none px-5 py-2 rounded-md font-bold cursor-pointer hover:bg-[#e68900]"
          >
            Start Upload
          </button>
        </div>

        <div className="bg-white rounded-xl p-6 flex-1 max-w-xs text-center shadow-md transition-transform duration-200 hover:-translate-y-1 hover:shadow-lg">
          <FaChartLine className="text-[2.5rem] text-[#ff9800] mb-4 mx-auto" />
          <h3 className="text-lg mb-2">My Progress</h3>
          <p className="text-base mb-4">
            Track growth, receive insights, and avoid injuries.
          </p>
          <button
            onClick={() => navigate("/dashboard")}
            className="bg-[#ff9800] text-white border-none px-5 py-2 rounded-md font-bold cursor-pointer hover:bg-[#e68900]"
          >
            View Progress
          </button>
        </div>

        <div className="bg-white rounded-xl p-6 flex-1 max-w-xs text-center shadow-md transition-transform duration-200 hover:-translate-y-1 hover:shadow-lg">
          <FaTrophy className="text-[2.5rem] text-[#ff9800] mb-4 mx-auto" />
          <h3 className="text-lg mb-2">Leaderboard</h3>
          <p className="text-base mb-4">
            Compete, compare, and get noticed by coaches.
          </p>
          <button className="bg-[#ff9800] text-white border-none px-5 py-2 rounded-md font-bold cursor-pointer hover:bg-[#e68900]">
            Check Rankings
          </button>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-[#f9f9f9] px-8 py-16 text-center">
        <h2 className="text-2xl mb-4 text-[#222]">Why This Project?</h2>
        <p className="text-lg mb-8 text-[#555] max-w-2xl mx-auto">
          Many athletes, especially in rural areas, lack coaching and exposure.
          Our solution bridges this gap:
        </p>
        <div className="grid gap-6 max-w-5xl mx-auto grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          <div className="bg-white p-6 rounded-xl border border-[#e0e0e0] shadow-md transition-transform duration-200 hover:-translate-y-1 hover:shadow-lg">
            <h3 className="text-lg mb-2 text-[#ff9800]">🎥 Remote Discovery</h3>
            <p className="text-base text-[#555] leading-relaxed">
              Upload videos from anywhere and get AI assessments easily.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl border border-[#e0e0e0] shadow-md transition-transform duration-200 hover:-translate-y-1 hover:shadow-lg">
            <h3 className="text-lg mb-2 text-[#ff9800]">
              📊 Progress Tracking
            </h3>
            <p className="text-base text-[#555] leading-relaxed">
              Track growth, monitor performance, and prevent injuries.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl border border-[#e0e0e0] shadow-md transition-transform duration-200 hover:-translate-y-1 hover:shadow-lg">
            <h3 className="text-lg mb-2 text-[#ff9800]">🖥 Dashboards</h3>
            <p className="text-base text-[#555] leading-relaxed">
              Insights for athletes and coaches to improve training.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl border border-[#e0e0e0] shadow-md transition-transform duration-200 hover:-translate-y-1 hover:shadow-lg">
            <h3 className="text-lg mb-2 text-[#ff9800]">🏅 Inclusive Design</h3>
            <p className="text-base text-[#555] leading-relaxed">
              Motivational, gamified, and fair for all athletes.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
