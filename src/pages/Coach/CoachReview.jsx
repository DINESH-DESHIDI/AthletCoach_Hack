// CoachReview.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaCheckCircle, FaTimesCircle, FaRegClock } from "react-icons/fa";

function CoachReview() {
  const [submissions, setSubmissions] = useState([]);
  const [selectedSubmission, setSelectedSubmission] = useState(null);
  const [feedback, setFeedback] = useState("");

  // Fetch submissions from backend
  useEffect(() => {
    axios
      .get("/api/coach/submissions") // replace with your backend API
      .then((res) => setSubmissions(res.data || []))
      .catch((err) => console.error("Error fetching submissions:", err));
  }, []);

  const handleSubmitFeedback = (action) => {
    if (!selectedSubmission) return;

    const payload = {
      submissionId: selectedSubmission.id,
      feedback,
      action,
      date: new Date(),
    };

    // Send feedback to backend
    axios
      .post("/api/coach/submissions/feedback", payload)
      .then(() => {
        alert("Feedback submitted successfully!");
        setFeedback("");
        setSelectedSubmission(null);
      })
      .catch((err) => console.error("Error submitting feedback:", err));
  };

  return (
    <div className="min-h-screen bg-[#f5f5f5] font-sans text-gray-800 flex flex-col">
      {/* Hero */}
      <header className="bg-white shadow-md rounded-b-2xl px-6 py-12 text-center">
        <h1 className="text-4xl font-bold mb-2">Review Athlete Submissions</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          View athlete submissions, give feedback, and approve or reject videos.
        </p>
      </header>

      <main className="flex flex-col md:flex-row gap-8 px-6 py-12 max-w-7xl mx-auto w-full">
        {/* Submissions List */}
        <div className="md:flex-1 bg-white rounded-2xl shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">Pending Submissions</h2>
          {Array.isArray(submissions) && submissions.length > 0 ? (
            <ul className="space-y-3 max-h-[500px] overflow-y-auto">
              {submissions.map((item) => (
                <li
                  key={item.id}
                  onClick={() => setSelectedSubmission(item)}
                  className={`flex justify-between items-center p-4 rounded-lg cursor-pointer hover:bg-gray-50 ${
                    selectedSubmission?.id === item.id
                      ? "bg-gray-100 border-l-4 border-[#4f46e5]"
                      : ""
                  }`}
                >
                  <span className="font-medium">{item.athleteName}</span>
                  <span className="text-sm text-gray-500">
                    {new Date(item.submittedAt).toLocaleString()}
                  </span>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-500">No submissions available.</p>
          )}
        </div>

        {/* Selected Submission & Feedback */}
        {selectedSubmission && (
          <div className="md:flex-1 flex flex-col gap-6">
            {/* Video Player */}
            <div className="bg-white rounded-2xl shadow-md p-4">
              <video
                src={selectedSubmission.videoUrl}
                controls
                className="w-full rounded-lg"
              />
              <div className="mt-4 text-gray-500 text-sm">
                Submitted on:{" "}
                {new Date(selectedSubmission.submittedAt).toLocaleString()}
              </div>
            </div>

            {/* Feedback Box */}
            <div className="bg-white rounded-2xl shadow-md p-6">
              <h3 className="text-xl font-semibold mb-2">Provide Feedback</h3>
              <textarea
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
                placeholder="Write feedback for the athlete..."
                className="w-full h-32 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4f46e5] resize-none"
              />
              <div className="flex gap-4 mt-4 flex-wrap">
                <button
                  onClick={() => handleSubmitFeedback("approve")}
                  className="flex-1 bg-green-500 hover:bg-green-600 text-white font-semibold py-3 rounded-lg shadow-md transition-colors duration-300"
                >
                  <FaCheckCircle className="inline mr-2" /> Approve
                </button>
                <button
                  onClick={() => handleSubmitFeedback("reject")}
                  className="flex-1 bg-red-500 hover:bg-red-600 text-white font-semibold py-3 rounded-lg shadow-md transition-colors duration-300"
                >
                  <FaTimesCircle className="inline mr-2" /> Reject
                </button>
              </div>
            </div>

            {/* Feedback History */}
            <div className="bg-white rounded-2xl shadow-md p-6">
              <h3 className="text-xl font-semibold mb-4">Previous Feedback</h3>
              {selectedSubmission.feedbackHistory?.length ? (
                <ul className="space-y-3">
                  {selectedSubmission.feedbackHistory.map((item, idx) => (
                    <li
                      key={idx}
                      className="border-l-4 border-[#4f46e5] pl-4 py-2 bg-gray-50 rounded-lg shadow-inner"
                    >
                      <p className="text-gray-700">{item.notes}</p>
                      <p className="text-gray-500 text-sm flex items-center">
                        <FaRegClock className="mr-1" />{" "}
                        {new Date(item.date).toLocaleString()} —{" "}
                        <span className="ml-1 font-semibold">
                          {item.action}
                        </span>
                      </p>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-gray-500">No feedback given yet.</p>
              )}
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

export default CoachReview;
