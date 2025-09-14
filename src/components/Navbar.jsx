// Navbar.jsx

import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [activeLink, setActiveLink] = useState(null); // 🚀 initially nothing is selected

  const linkClasses = (path) =>
    `text-[#292727] no-underline text-base font-medium px-[0.9rem] py-[0.4rem] rounded-md transition-colors duration-300 ${
      activeLink === path
        ? " text-white"
        : "hover:text-white"
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
        <Link to="/" onClick={() => setActiveLink("/")} className={linkClasses("/")}>
          Home
        </Link>

        <Link
          to="/videoupload"
          onClick={() => setActiveLink("/videoupload")}
          className={linkClasses("/videoupload")}
        >
          Upload Video
        </Link>

        <Link
          to="/dashboard"
          onClick={() => setActiveLink("/dashboard")}
          className={linkClasses("/dashboard")}
        >
          Dashboard
        </Link>

        <Link
          to="/profile"
          onClick={() => setActiveLink("/profile")}
          className={linkClasses("/profile")}
        >
          Profile
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
