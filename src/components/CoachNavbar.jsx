// Navbar.jsx

import React, { useState } from "react";
import { Link } from "react-router-dom";

function CoachNavbar() {
  // const location = useLocation(); // get current route
  const [activeLink, setActiveLink] = useState(location.pathname);// 🚀 initially nothing is selected

  const linkClasses = (path) =>
    `text-gray-700 no-underline text-base font-medium px-4 py-2 rounded-md transition-colors duration-300 ${
      activeLink === path
        ? "bg-sky-500 text-white"
        : "hover:bg-#f8c25e hover:text-white"
    }`;

  return (
    <nav className="flex justify-between items-center bg-[#f8c25e] text-white py-[1.7%] px-[1%] sticky top-0 z-[1000]">
      {/* Logo */}
      <Link
        to="/"
        className="text-[#383838] no-underline text-[1.3rem] font-bold"
      >
        Coach-Logo
      </Link>

      {/* Navigation Links */}
      <div className="flex gap-[1.2rem]">
        <Link to="/coach/home" onClick={() => setActiveLink("/coach/home")} className={linkClasses("/coach/home")}>
          My Athletes
        </Link>

        <Link
          to="/coach/videoreview"
          onClick={() => setActiveLink("/coach/videoupload")}
          className={linkClasses("/coach/videoupload")}
        >
          Video Review
        </Link>

        <Link
          to="/coach/progress"
          onClick={() => setActiveLink("/coach/progress")}
          className={linkClasses("/coach/progress")}
        >
          Progress & Leaderboard
        </Link>

        <Link
          to="/coach/profile"
          onClick={() => setActiveLink("/coach/profile")}
          className={linkClasses("/coach/profile")}
        >
          Profile
        </Link>
      </div>
    </nav>
  );
}

export default CoachNavbar;
