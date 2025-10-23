import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const isLoggedIn = Boolean(localStorage.getItem("token"));

  // Determine where brand should redirect based on login state
  const brandLink = isLoggedIn ? "/dashboard" : "/auth";

  return (
    <nav className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-lg shadow-sm z-50">
      <div className="mx-auto flex justify-between items-center px-8 py-4">
        {/* Brand */}
        <Link
          to={brandLink}
          className="text-2xl md:text-3xl font-extrabold text-blue-700 tracking-tight hover:scale-105 transition-transform"
        >
          Sepsis<span className="text-blue-500">Predict</span>
        </Link>

        {/* Navigation Links */}
        {isLoggedIn && (
          <div className="hidden md:flex items-center space-x-6 font-medium">
            <Link
              to="/dashboard"
              className={`hover:text-blue-600 ${
                location.pathname === "/dashboard"
                  ? "text-blue-600"
                  : "text-gray-700"
              }`}
            >
              Home
            </Link>

            {/* ✅ FIXED: Replaced <a href="#about"> with proper Link */}
            <Link
              to="/about"
              className={`hover:text-blue-600 ${
                location.pathname === "/about"
                  ? "text-blue-600"
                  : "text-gray-700"
              }`}
            >
              About
            </Link>

            <Link
              to="/profile"
              className={`hover:text-blue-600 ${
                location.pathname === "/profile"
                  ? "text-blue-600"
                  : "text-gray-700"
              }`}
            >
              Profile
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
