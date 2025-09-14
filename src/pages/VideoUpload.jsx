// VideoUpload.jsx

import React, { useState } from "react";

function VideoUpload() {
  const [video, setVideo] = useState(null);
  const [results, setResults] = useState(null);

  const handleVideoUpload = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith("video/")) {
      setVideo(URL.createObjectURL(file));
      setResults(null);
    } else {
      alert("Please upload a valid video file.");
    }
  };

  const handleSubmit = () => {
    setResults({
      correctReps: 12,
      wrongForm: 3,
      suggestion: "Keep back straight.",
    });
  };

  return (
    <div className="max-w-[700px] mx-auto p-8 text-center font-['Segoe_UI',Tahoma,Geneva,Verdana,sans-serif]">
      <h1 className="text-[1.8rem] mb-6 text-[#2c3e50]">
        Upload / Record Your Performance
      </h1>

      {/* Upload Section */}
      <div className="mb-5 p-8 border-2 border-dashed border-[#aaa] rounded-xl bg-[#f9fafc] transition duration-300 hover:border-[#3498db]">
        <label
          htmlFor="video-input"
          className="inline-block px-5 py-3 bg-[#3498db] text-white font-bold rounded-lg cursor-pointer transition duration-300 hover:bg-[#2980b9]"
        >
          Choose a video file
        </label>
        <input
          type="file"
          id="video-input"
          accept="video/*"
          onChange={handleVideoUpload}
          style={{ display: "none" }}
        />

        {video && (
          <div className="mt-5 rounded-lg overflow-hidden shadow-md">
            <video src={video} controls width="100%" />
          </div>
        )}
      </div>

      {/* Submit Button */}
      {video && (
        <button
          className="mt-5 px-6 py-3 text-base bg-[#2ecc71] text-white font-bold rounded-xl cursor-pointer transition duration-300 hover:bg-[#27ae60]"
          onClick={handleSubmit}
        >
          Submit for Analysis
        </button>
      )}

      {/* Results */}
      {results && (
        <div className="mt-8 p-5 bg-[#ecf9f1] rounded-xl shadow-md text-left">
          <h2 className="mb-4 text-[#2c3e50] text-xl font-semibold">
            AI Analysis Results
          </h2>
          <p>✅ Correct reps: {results.correctReps}</p>
          <p>❌ Wrong form: {results.wrongForm} (elbows not aligned)</p>
          <p>🔮 Suggestion: {results.suggestion}</p>
        </div>
      )}
    </div>
  );
}

export default VideoUpload;
