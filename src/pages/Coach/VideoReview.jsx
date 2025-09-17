// CoachVideoReview.jsx
import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  FaCheckCircle,
  FaTimesCircle,
  FaMagic,
  FaRegClock,
} from "react-icons/fa";

function CoachVideoReview({ videoId }) {
  const [videoData, setVideoData] = useState(null);
  const [feedback, setFeedback] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch video + AI analysis + feedback history from backend
    axios
      .get(`/api/videos/${videoId}`)
      .then((res) => {
        setVideoData(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching video:", err);
        setLoading(false);
      });
  }, [videoId]);

  const handleSubmitFeedback = (action) => {
    if (!feedback.trim()) return;

    axios
      .post(`/api/videos/${videoId}/feedback`, {
        notes: feedback,
        action,
      })
      .then((res) => {
        setVideoData((prev) => ({
          ...prev,
          feedbackHistory: [...(prev.feedbackHistory || []), res.data],
        }));
        setFeedback("");
      })
      .catch((err) => console.error("Error submitting feedback:", err));
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen text-lg font-medium text-gray-600">
        Loading video review...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans py-10 px-4">
      <div className="max-w-4xl mx-auto space-y-10">
        {/* Header */}
        <header className="text-center">
          <h1 className="text-3xl font-bold text-gray-900">
            {videoData?.athleteName || "Athlete"} – Video Review
          </h1>
          <p className="text-gray-600 mt-2">
            Watch, analyze, and provide personalized coaching feedback.
          </p>
        </header>

        {/* 1. Video Player */}
        <section className="bg-white rounded-2xl shadow-md overflow-hidden flex justify-center">
          <div className="w-full max-w-2xl">
            {" "}
            {/* limits width */}
            <video
              src={videoData?.url}
              controls
              className="w-full h-[380px] object-cover rounded-t-2xl" // increased height
            />
            <div className="p-4 text-sm text-gray-500">
              Uploaded on:{" "}
              {new Date(videoData?.uploadedAt).toLocaleString("en-US")}
            </div>
          </div>
        </section>

        {/* 2. AI Analysis */}
        <section className="bg-white rounded-2xl shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">AI Analysis</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
            <div className="p-4 bg-green-50 rounded-xl shadow-sm">
              <FaCheckCircle className="text-green-500 text-2xl mx-auto mb-2" />
              <p className="font-semibold text-lg">
                {videoData?.aiAnalysis?.correct || 0}
              </p>
              <p className="text-gray-600 text-sm">Correct Reps</p>
            </div>
            <div className="p-4 bg-red-50 rounded-xl shadow-sm">
              <FaTimesCircle className="text-red-500 text-2xl mx-auto mb-2" />
              <p className="font-semibold text-lg">
                {videoData?.aiAnalysis?.mistakes || 0}
              </p>
              <p className="text-gray-600 text-sm">Mistakes</p>
            </div>
            <div className="p-4 bg-purple-50 rounded-xl shadow-sm">
              <FaMagic className="text-purple-500 text-2xl mx-auto mb-2" />
              <p className="font-semibold text-lg">
                {videoData?.aiAnalysis?.suggestions || "No suggestions"}
              </p>
              <p className="text-gray-600 text-sm">AI Suggestions</p>
            </div>
          </div>
        </section>

        {/* 3. Feedback Input */}
        <section className="bg-white rounded-2xl shadow-md p-6">
          <h2 className="text-xl font-semibold mb-3">Coach Feedback</h2>
          <textarea
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            placeholder="Write your feedback or instructions here..."
            className="w-full h-32 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-none"
          />
          <div className="flex gap-3 mt-4 flex-wrap">
            <button
              onClick={() => handleSubmitFeedback("approve")}
              className="flex-1 min-w-[120px] bg-green-500 hover:bg-green-600 text-white py-2 rounded-lg font-medium transition"
            >
              Approve
            </button>
            <button
              onClick={() => handleSubmitFeedback("reject")}
              className="flex-1 min-w-[120px] bg-red-500 hover:bg-red-600 text-white py-2 rounded-lg font-medium transition"
            >
              Reject
            </button>
            <button
              onClick={() => handleSubmitFeedback("resubmit")}
              className="flex-1 min-w-[160px] bg-yellow-500 hover:bg-yellow-600 text-white py-2 rounded-lg font-medium transition"
            >
              Request Resubmission
            </button>
          </div>
        </section>

        {/* 4. Feedback History */}
        <section className="bg-white rounded-2xl shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">Previous Feedback</h2>
          {videoData?.feedbackHistory?.length ? (
            <ul className="space-y-4">
              {videoData.feedbackHistory.map((item, idx) => (
                <li
                  key={idx}
                  className="p-4 bg-gray-50 rounded-xl border-l-4 border-indigo-500 shadow-sm"
                >
                  <p className="text-gray-700">{item.notes}</p>
                  <p className="text-gray-500 text-sm mt-1 flex items-center">
                    <FaRegClock className="mr-1" />{" "}
                    {new Date(item.date).toLocaleString("en-US")} –{" "}
                    <span className="ml-1 font-semibold capitalize">
                      {item.action}
                    </span>
                  </p>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-500">No previous feedback available.</p>
          )}
        </section>
      </div>
    </div>
  );
}

export default CoachVideoReview;
