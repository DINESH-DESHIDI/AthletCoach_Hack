import React from "react";
import AthleteNavbar from "../components/AthleteNavbar";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

export default function AthleteLayout() {
  return (
    <div className="flex flex-col min-h-screen">
      <AthleteNavbar/>
      <main className="flex-grow">
        <Outlet /> {/* Renders athlete pages */}
      </main>
      <Footer />
    </div>
  );
}
