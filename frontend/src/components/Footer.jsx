import React from "react";
import { Mail, Phone } from "lucide-react"; // icon imports
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-blue-900 text-blue-100 py-4 mt-auto shadow-inner">
      <div className=" mx-auto flex  justify-between items-center px-8 py-0">
        {/* Brand / Logo */}
        <Link
          to="/About"
          className="text-2xl md:text-3xl font-extrabold text-white tracking-tight hover:scale-105 transition-transform"
        >
          Sepsis<span className="text-blue-400">Predict</span>
        </Link>

        <p className="text-center text-blue-300 text-sm mt-0">
        © {new Date().getFullYear()} SepsisPredict — Built with ❤️ by the SepsisPredict Team.
        </p>

        {/* Contact icons */}
        <div className="flex items-center gap-6">
          <a
            href="mailto:support@sepsispredict.ai"
            className="flex items-center gap-2 hover:text-blue-400 transition-all"
          >
            <Mail className="w-5 h-5" />
            <span className="hidden sm:inline">Email</span>
          </a>
          <a
            href="tel:+919876543210"
            className="flex items-center gap-2 hover:text-blue-400 transition-all"
          >
            <Phone className="w-5 h-5" />
            <span className="hidden sm:inline">Call</span>
          </a>
        </div>
      </div>
    </footer>
  );
}

