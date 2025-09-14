import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Dashboard from "../pages/Dashboard";
import Login from "../pages/Login";
import Profile from "../pages/Profile"
import Signup from "../pages/Signup";
import VideoUpload from "../pages/VideoUpload";
function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dashboard" element={<Dashboard />} />
       <Route path="/login" element={<Login />} />
       <Route path="/signup" element={<Signup />} />
       <Route path="/profile" element={<Profile />} />
       <Route path="/videoupload" element={<VideoUpload />} />
    </Routes>
  );
}

export default AppRoutes;