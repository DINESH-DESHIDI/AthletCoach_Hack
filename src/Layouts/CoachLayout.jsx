import React from "react";
import CoachNavbar from "../components/CoachNavbar";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

export default function CoachLayout() {
  return (
    <div className="flex flex-col min-h-screen">
      <CoachNavbar />
      <main className="flex-grow">
        <Outlet /> {/* Renders coach pages */}
      </main>
      <Footer/>
    </div>
  );
}
