// CoachAthletes.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";

function CoachAthletes() {
  const [athletes, setAthletes] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("/api/coach/athletes")
      .then((res) => {
        // Ensure data is always an array
        const data = Array.isArray(res.data)
          ? res.data
          : res.data.athletes || [];

        setAthletes(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching athletes:", err);
        setAthletes([]); // fallback to empty
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p className="text-gray-600">Loading athletes...</p>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto mt-10 p-6 bg-white rounded-xl shadow-md">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">
        Athletes Under Your Coaching
      </h1>

      {athletes.length === 0 ? (
        <p className="text-gray-600">No athletes assigned yet.</p>
      ) : (
        <ul className="divide-y">
          {athletes.map((athlete, idx) => (
            <li
              key={idx}
              onClick={() =>
                navigate("/athlete/profile", { state: { user: athlete } })
              }
              className="flex items-center gap-4 p-4 hover:bg-gray-50 cursor-pointer transition rounded-lg"
            >
              {/* Avatar */}
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-indigo-100 text-indigo-600 text-2xl shadow-sm">
                {athlete.name ? (
                  athlete.name[0].toUpperCase()
                ) : (
                  <FaUserCircle className="text-indigo-500" />
                )}
              </div>

              {/* Athlete Info */}
              <div className="flex-1">
                <h2 className="text-lg font-semibold text-gray-800">
                  {athlete.name}
                </h2>
                <p className="text-sm text-gray-500">
                  {athlete.sport} • {athlete.region}
                </p>
              </div>

              {/* Status / Rank */}
              <div className="text-sm font-medium text-gray-600">
                Rank:{" "}
                <span className="text-green-600">{athlete.rank || "N/A"}</span>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default CoachAthletes;
