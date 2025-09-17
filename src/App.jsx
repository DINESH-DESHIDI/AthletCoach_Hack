import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
// import Navbar from "./components/AthletNavbar.jsx";
// import Footer from "./components/Footer.jsx";
import Login from "./pages/Auth/Login";
import Signup from "./pages/Auth/Signup";
import "./App.css";
import AthleteRoutes from "./routes/AthleteRoutes.jsx";
import CoachRoutes from "./routes/CoachRoutes.jsx";

function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        <Routes>
          {/* Auth */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />

          {/* Athlete Routes */}
          <Route path="/athlete/*" element={<AthleteRoutes />} />

          {/* Coach Routes */}
          <Route path="/coach/*" element={<CoachRoutes />} />

          {/* Redirect root ("/") to login */}
          <Route path="/" element={<Navigate to="/login" replace />} />

          
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
