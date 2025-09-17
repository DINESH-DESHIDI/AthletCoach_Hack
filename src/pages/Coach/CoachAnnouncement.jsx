// CoachAnnouncement.jsx
import React, { useState } from "react";
import axios from "axios";
import { FaPaperPlane, FaHistory } from "react-icons/fa";

function CoachAnnouncement() {
  const [form, setForm] = useState({
    title: "",
    body: "",
    type: "Motivation",
    recipients: "all",
    schedule: "",
    attachment: null,
  });

  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setForm({
      ...form,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // ✅ prepare formData (to support file upload)
      const formData = new FormData();
      formData.append("title", form.title);
      formData.append("body", form.body);
      formData.append("type", form.type);
      formData.append("recipients", form.recipients);
      formData.append("schedule", form.schedule);
      if (form.attachment) formData.append("attachment", form.attachment);

      // ✅ Send to backend API
      const res = await axios.post("/api/coach/announcements", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      // ✅ Get saved announcement from backend
      const savedAnnouncement = res.data;

      // Update history log in UI
      setHistory([savedAnnouncement, ...history]);

      // Reset form
      setForm({
        title: "",
        body: "",
        type: "Motivation",
        recipients: "all",
        schedule: "",
        attachment: null,
      });
    } catch (err) {
      console.error("Error saving announcement:", err);
      alert("Failed to save announcement. Try again!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-5xl mx-auto mt-10 p-6 bg-white rounded-xl shadow-md space-y-8">
      <h1 className="text-3xl font-bold text-gray-800">Create Announcement</h1>

      {/* Announcement Form */}
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Title */}
        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1">
            Announcement Title
          </label>
          <input
            type="text"
            name="title"
            value={form.title}
            onChange={handleChange}
            className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-orange-400"
            placeholder="e.g., Great job this week!"
            required
          />
        </div>

        {/* Body */}
        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1">
            Message Body
          </label>
          <textarea
            name="body"
            value={form.body}
            onChange={handleChange}
            className="w-full border rounded-lg px-4 py-2 h-32 focus:ring-2 focus:ring-orange-400"
            placeholder="Write your message here..."
            required
          ></textarea>
        </div>

        {/* Type */}
        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1">
            Type of Announcement
          </label>
          <select
            name="type"
            value={form.type}
            onChange={handleChange}
            className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-orange-400"
          >
            <option>Motivation</option>
            <option>Training Reminder</option>
            <option>Event Update</option>
            <option>General</option>
          </select>
        </div>

        {/* Recipients */}
        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1">
            Recipients
          </label>
          <select
            name="recipients"
            value={form.recipients}
            onChange={handleChange}
            className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-orange-400"
          >
            <option value="all">All Athletes</option>
            <option value="group">Groups / Teams</option>
            <option value="specific">Specific Athletes</option>
          </select>
        </div>

        {/* Delivery Options */}
        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1">
            Delivery Options
          </label>
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <input
                type="radio"
                name="delivery"
                value="immediate"
                defaultChecked
              />
              <span>Send Immediately</span>
            </div>
            <div className="flex items-center gap-2">
              <input
                type="radio"
                name="delivery"
                value="schedule"
                onChange={() => {}}
              />
              <span>Schedule for Later</span>
              <input
                type="datetime-local"
                name="schedule"
                value={form.schedule}
                onChange={handleChange}
                className="ml-2 border rounded-lg px-2 py-1"
              />
            </div>
          </div>
        </div>

        {/* Attachment */}
        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1">
            Attachment (Optional)
          </label>
          <input
            type="file"
            name="attachment"
            onChange={handleChange}
            className="w-full border rounded-lg px-4 py-2"
          />
        </div>

        {/* Buttons */}
        <div className="flex justify-between items-center">
          <button
            type="submit"
            className="px-6 py-2 bg-[#ff9800] text-white font-semibold rounded-lg hover:bg-[#e68900] flex items-center gap-2"
          >
            <FaPaperPlane /> Send
          </button>
        </div>
      </form>

      {/* History Log */}
      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-800 flex items-center gap-2">
          <FaHistory /> History Log
        </h2>
        {history.length === 0 ? (
          <p className="text-gray-600 mt-2">No announcements sent yet.</p>
        ) : (
          <ul className="mt-4 space-y-3">
            {history.map((item, idx) => (
              <li
                key={idx}
                className="border rounded-lg p-4 bg-gray-50 flex justify-between items-center"
              >
                <div>
                  <h3 className="font-semibold">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.body}</p>
                  <p className="text-xs text-gray-500 mt-1">
                    Sent on {item.date} to {item.recipients}
                  </p>
                </div>
                <span className="text-green-600 font-medium">
                  {item.status}
                </span>
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
}

export default CoachAnnouncement;
