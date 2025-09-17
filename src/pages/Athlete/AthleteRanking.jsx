// AthleteLeaderboard.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaTrophy } from "react-icons/fa";

function AthleteRanking() {
  const [leaderboard, setLeaderboard] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState({
    sport: "All",
    group: "All",
  });

  // Fetch leaderboard from backend
  useEffect(() => {
    setLoading(true); // start loading
    const fetchLeaderboard = async () => {
      try {
        const res = await axios.get("/api/athlete/leaderboard", {
          params: filters,
        });
        const data = Array.isArray(res.data)
          ? res.data
          : Array.isArray(res.data.leaderboard)
          ? res.data.leaderboard
          : [];
        setLeaderboard(data);
      } catch (err) {
        console.error("Error fetching leaderboard:", err);
        setLeaderboard([]);
      } finally {
        setLoading(false);
      }
    };

    fetchLeaderboard();
  }, [filters.sport, filters.group]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p className="text-gray-600">Loading leaderboard...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f5f5f5] px-6 py-12 font-sans text-gray-800">
      {/* Hero Section */}
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-2">Leaderboard</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Compete, compare, and get noticed by coaches.
        </p>
      </header>

      {/* Filters */}
      <section className="max-w-5xl mx-auto mb-6 flex flex-wrap gap-4 justify-center">
        <select
          value={filters.sport}
          onChange={(e) => setFilters({ ...filters, sport: e.target.value })}
          className="border rounded-lg px-4 py-2"
        >
          <option>All Sports</option>
          <option>Football</option>
          <option>Basketball</option>
          <option>Cricket</option>
        </select>
        <select
          value={filters.group}
          onChange={(e) => setFilters({ ...filters, group: e.target.value })}
          className="border rounded-lg px-4 py-2"
        >
          <option>All Groups</option>
          <option>U-16</option>
          <option>U-18</option>
          <option>Senior</option>
        </select>
      </section>

      {/* Leaderboard List */}
      <section className="max-w-5xl mx-auto bg-white rounded-xl shadow-md p-6">
        <h2 className="text-xl font-semibold mb-4">Rankings</h2>

        {leaderboard.length === 0 ? (
          <p className="text-gray-500">No rankings available.</p>
        ) : (
          <ul className="divide-y">
            {leaderboard.map((athlete, idx) => (
              <li
                key={idx}
                className={`flex justify-between items-center py-4 px-2 rounded-lg hover:bg-gray-50 transition ${
                  idx === 0 ? "bg-yellow-50" : ""
                }`}
              >
                <div className="flex items-center gap-4">
                  <span className="font-bold text-lg">#{idx + 1}</span>
                  <div className="w-10 h-10 flex items-center justify-center rounded-full bg-indigo-100 text-indigo-700 text-lg font-semibold shadow-sm">
                    {athlete.name ? athlete.name[0].toUpperCase() : "?"}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">
                      {athlete.name}
                    </h3>
                    <p className="text-sm text-gray-500">
                      {athlete.sport} • {athlete.group}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2 font-medium text-gray-700">
                  {athlete.points} pts
                  {idx === 0 && (
                    <FaTrophy className="text-yellow-500 text-xl" />
                  )}
                </div>
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
}

export default AthleteRanking;
