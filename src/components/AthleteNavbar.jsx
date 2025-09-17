// Navbar.jsx

import React, { useState } from "react";
import { Link } from "react-router-dom";

function AthleteNavbar() {
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
        Athlet-Logo
      </Link>

      {/* Navigation Links */}
      <div className="flex gap-[1.2rem]">
        <Link to="/athlete/home" onClick={() => setActiveLink("/athlete/home")} className={linkClasses("/athlete/home")}>
          Home
        </Link>

        <Link
          to="/athlete/videoupload"
          onClick={() => setActiveLink("/athlete/videoupload")}
          className={linkClasses("/athlete/videoupload")}
        >
          Upload Video
        </Link>

        <Link
          to="/athlete/dashboard"
          onClick={() => setActiveLink("/athlete/dashboard")}
          className={linkClasses("/athlete/dashboard")}
        >
          Dashboard
        </Link>

        <Link
          to="/athlete/profile"
          onClick={() => setActiveLink("/athlete/profile")}
          className={linkClasses("/athlete/profile")}
        >
          Profile
        </Link>
      </div>
    </nav>
  );
}

export default AthleteNavbar;
