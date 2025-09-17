// CoachProgress.jsx
import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaMedal, FaTrophy, FaDownload } from "react-icons/fa";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend
);

function CoachProgress() {
  const [athleteData, setAthleteData] = useState(null);
  const [leaderboard, setLeaderboard] = useState([]);
  const [filters, setFilters] = useState({
    sport: "All Sports",
    timeframe: "Monthly",
    group: "All Groups",
  });

  useEffect(() => {
    // Fetch athlete progress
    axios
      .get("/api/athlete/progress", { params: filters })
      .then((res) => setAthleteData(res.data))
      .catch((err) => {
        console.error("Error fetching athlete progress:", err);
        // fallback
        setAthleteData({
          stamina: [65, 70, 72, 80],
          strength: [60, 65, 70, 75],
          speed: [55, 60, 68, 74],
          badges: ["MVP of the Month"],
        });
      });

    // Fetch leaderboard
    axios
      .get("/api/athlete/leaderboard", { params: filters })
      .then((res) => {
        const data = res.data;
        if (Array.isArray(data)) {
          setLeaderboard(data);
        } else if (Array.isArray(data?.leaderboard)) {
          setLeaderboard(data.leaderboard);
        } else {
          setLeaderboard([]);
        }
      })
      .catch((err) => {
        console.error("Error fetching leaderboard:", err);
        // fallback dummy data
        setLeaderboard([
          { name: "John Doe", points: 120 },
          { name: "Jane Smith", points: 110 },
          { name: "Rahul Kumar", points: 95 },
        ]);
      });
  }, [filters]);

  // Graph data
  const graphData = {
    labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
    datasets: [
      {
        label: "Stamina",
        data: athleteData?.stamina || [],
        borderColor: "#4f46e5",
        fill: false,
      },
      {
        label: "Strength",
        data: athleteData?.strength || [],
        borderColor: "#22c55e",
        fill: false,
      },
      {
        label: "Speed",
        data: athleteData?.speed || [],
        borderColor: "#f59e0b",
        fill: false,
      },
    ],
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#f5f5f5] font-sans text-gray-800">
      {/* Hero Section */}
      <header className="bg-white px-6 py-12 text-center shadow-md rounded-b-2xl">
        <h1 className="text-4xl font-bold mb-2">Athlete Progress & Leaderboard</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Dive deep into analytics, recognize achievements, and track team performance.
        </p>
      </header>

      <main className="flex flex-col gap-10 px-6 py-12 max-w-6xl mx-auto w-full">
        {/* Filters */}
        <section className="bg-white rounded-2xl shadow-md p-6 flex flex-wrap gap-4 justify-between items-center">
          <select
            value={filters.sport}
            onChange={(e) => setFilters({ ...filters, sport: e.target.value })}
            className="border rounded-lg p-2"
          >
            <option>All Sports</option>
            <option>Football</option>
            <option>Basketball</option>
            <option>Cricket</option>
          </select>
          <select
            value={filters.timeframe}
            onChange={(e) => setFilters({ ...filters, timeframe: e.target.value })}
            className="border rounded-lg p-2"
          >
            <option>Weekly</option>
            <option>Monthly</option>
            <option>Yearly</option>
          </select>
          <select
            value={filters.group}
            onChange={(e) => setFilters({ ...filters, group: e.target.value })}
            className="border rounded-lg p-2"
          >
            <option>All Groups</option>
            <option>U-16</option>
            <option>U-18</option>
            <option>Senior</option>
          </select>
        </section>

        {/* Performance Graph */}
        <section className="bg-white rounded-2xl shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">Performance Dashboard</h2>
          <Line data={graphData} />
        </section>

        {/* Badges & Achievements */}
        <section className="bg-white rounded-2xl shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">Badges & Achievements</h2>
          <div className="flex flex-wrap gap-4">
            {athleteData?.badges?.length ? (
              athleteData.badges.map((badge, idx) => (
                <div
                  key={idx}
                  className="bg-gray-50 p-4 rounded-lg shadow-inner flex items-center gap-3"
                >
                  <FaMedal className="text-yellow-500 text-2xl" />
                  <span className="font-medium">{badge}</span>
                </div>
              ))
            ) : (
              <p className="text-gray-500">No achievements yet.</p>
            )}
          </div>
        </section>

        {/* Leaderboard */}
        <section className="bg-white rounded-2xl shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">Leaderboard</h2>
          <ul className="divide-y">
            {leaderboard.length ? (
              leaderboard.map((player, idx) => (
                <li
                  key={idx}
                  className="flex justify-between items-center py-3 px-2 hover:bg-gray-50 rounded-lg"
                >
                  <span className="font-medium">
                    #{idx + 1} {player.name}
                  </span>
                  <span className="flex items-center gap-2 text-gray-600">
                    {player.points} pts{" "}
                    {idx === 0 && <FaTrophy className="text-yellow-500" />}
                  </span>
                </li>
              ))
            ) : (
              <p className="text-gray-500">No leaderboard data available.</p>
            )}
          </ul>
        </section>

        {/* Reports */}
        <section className="bg-white rounded-2xl shadow-md p-6 text-center">
          <h2 className="text-xl font-semibold mb-4">Reports</h2>
          <div className="flex justify-center gap-4">
            <button className="flex items-center gap-2 bg-[#4f46e5] text-white px-4 py-2 rounded-lg shadow hover:bg-[#4338ca] transition">
              <FaDownload /> Export PDF
            </button>
            <button className="flex items-center gap-2 bg-[#22c55e] text-white px-4 py-2 rounded-lg shadow hover:bg-green-600 transition">
              <FaDownload /> Export Excel
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}

export default CoachProgress;
