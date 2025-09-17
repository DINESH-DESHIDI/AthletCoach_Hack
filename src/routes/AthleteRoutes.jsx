import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Athlete/Home";
import AthleteLayout from "../Layouts/AthleteLayout";
import Dashboard from "../pages/Athlete/Dashboard";
import Profile from "../pages/Athlete/AthleteProfile";
import VideoUpload from "../pages/Athlete/VideoUpload";
import AthleteRanking from "../pages/Athlete/AthleteRanking";
function AthleteRoutes() {
  return (
    <Routes>
      {/* Athlete side */}
      <Route element={<AthleteLayout />}>
        <Route index element={<Navigate to="home" replace />} />
        <Route path="home" element={<Home />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="profile" element={<Profile />} />
        <Route path="videoupload" element={<VideoUpload />} />
        <Route path="rankings" element={<AthleteRanking />} />

        {/* Unknown athlete path */}
        <Route path="*" element={<Navigate to="home" replace />} />
      </Route>
    </Routes>
  );
}

export default AthleteRoutes;
