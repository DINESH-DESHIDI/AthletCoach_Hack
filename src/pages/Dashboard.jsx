/* Dashboard.jsx */
import React from "react";

function Dashboard() {
  return (
    <div className="max-w-[900px] mx-auto p-8 font-['Segoe_UI',Tahoma,Geneva,Verdana,sans-serif] text-gray-800">
      <h1 className="text-center mb-6 text-2xl font-bold text-[#2c3e50]">
        Athlete Dashboard
      </h1>

      {/* Graph Placeholder */}
      <div className="mb-8 p-5 bg-[#f9fafc] rounded-xl shadow-md">
        <h2 className="text-lg font-semibold mb-4">Performance Over Time</h2>
        <div className="h-[200px] border-2 border-dashed border-[#bbb] rounded-lg flex justify-center items-center text-gray-500 italic">
          [Graph will be displayed here]
        </div>
      </div>

      {/* Metrics */}
      <div className="mb-8 p-5 bg-[#f9fafc] rounded-xl shadow-md">
        <h2 className="text-lg font-semibold mb-4">Key Metrics</h2>
        <div className="flex gap-5 justify-around flex-wrap">
          <div className="flex-1 min-w-[120px] text-center bg-white rounded-lg p-4 shadow-sm transition-transform duration-200 hover:-translate-y-1">
            <h3 className="mb-2 text-[#34495e] font-semibold">Stamina</h3>
            <p className="text-xl font-bold text-[#27ae60]">78%</p>
          </div>
          <div className="flex-1 min-w-[120px] text-center bg-white rounded-lg p-4 shadow-sm transition-transform duration-200 hover:-translate-y-1">
            <h3 className="mb-2 text-[#34495e] font-semibold">Strength</h3>
            <p className="text-xl font-bold text-[#27ae60]">85%</p>
          </div>
          <div className="flex-1 min-w-[120px] text-center bg-white rounded-lg p-4 shadow-sm transition-transform duration-200 hover:-translate-y-1">
            <h3 className="mb-2 text-[#34495e] font-semibold">Speed</h3>
            <p className="text-xl font-bold text-[#27ae60]">72%</p>
          </div>
        </div>
      </div>

      {/* Badges */}
      <div className="mb-8 p-5 bg-[#f9fafc] rounded-xl shadow-md">
        <h2 className="text-lg font-semibold mb-4">Achievements</h2>
        <div className="inline-block px-5 py-3 mt-3 bg-[#fff7e6] border border-[#f39c12] rounded-lg font-bold text-[#d35400] shadow-sm">
          🥉 Bronze Push-up Champion
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
