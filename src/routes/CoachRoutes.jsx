import { Routes, Route, Navigate } from "react-router-dom";
import CoachLayout from "../Layouts/CoachLayout";
import CoachProfile from "../pages/Coach/CoachProfile";
import CoachHome from "../pages/Coach/CoachHome";
import CoachVideoReview from "../pages/Coach/VideoReview";
import CoachProgress from "../pages/Coach/CoachProgress";
import CoachAthletes from "../pages/Coach/CoachAthletes";
import Profile from "../pages/Athlete/AthleteProfile";
import CoachAnnouncement from "../pages/Coach/CoachAnnouncement";
import CoachReview from "../pages/Coach/CoachReview";

const CoachRoutes = () => {
  return (
    <Routes>
      <Route element={<CoachLayout />}>
        <Route index element={<Navigate to="profile" replace />} />
        <Route path="profile" element={<CoachProfile />} />
        <Route path="home" element={<CoachHome />} />
        <Route path="videoreview" element={<CoachVideoReview />} />
        <Route path="progress" element={<CoachProgress />} />
        <Route path="athleteslist" element={<CoachAthletes />} />
        <Route path="athlete/profile" element={<Profile />} />
        <Route path="announcement" element={<CoachAnnouncement />} />
        <Route path="review" element={<CoachReview />} />
        {/* <Route path="/coach-dashboard" element={<CoachDashboard />} /> */}

        {/* Unknown coach path */}
        <Route path="*" element={<Navigate to="profile" replace />} />
      </Route>
    </Routes>
  );
};

export default CoachRoutes;
