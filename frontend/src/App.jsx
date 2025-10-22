import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-blue-50 via-white to-blue-100 text-gray-800">
      {/* Shared Navbar across all pages */}
      <Navbar />

      {/* Page content */}
      <main >
        <Outlet />
      </main>

      {/* Shared Footer */}
      <Footer />
    </div>
  );
}
