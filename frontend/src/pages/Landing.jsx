import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <div className="flex flex-col font-sans bg-gradient-to-b from-blue-50 via-white to-blue-100 min-h-screen">
      {/* Hero Section */}
      <motion.section
        className="flex flex-col md:flex-row items-center justify-between px-8 md:px-16 pt-36 md:pt-44 pb-24 gap-10"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Left Text */}
        <div className="md:w-1/2 space-y-8 text-center md:text-left">
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight text-blue-900 drop-shadow-sm">
            Detect <span className="text-blue-500">Sepsis Early</span> with AI
          </h1>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-lg mx-auto md:mx-0">
            Leverage <span className="font-semibold text-blue-700">AI-powered analytics</span> 
            to predict early signs of sepsis using vital signs and lab data — 
            securely stored in your personalized dashboard.
          </p>
        </div>

        {/* Right Side: Quote + Button */}
        <div className="md:w-1/2 flex flex-col items-center md:items-end space-y-8 text-center md:text-right">
          <p className="italic text-gray-700 text-xl md:text-2xl font-medium max-w-md leading-relaxed">
            “Early detection saves lives — empower clinicians with intelligent insights.”
          </p>

          <Link to="/auth">
            <motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.98 }}
              className="bg-gradient-to-r from-blue-600 to-blue-500 text-white px-10 py-4 rounded-xl text-lg font-semibold shadow-lg hover:from-blue-700 hover:to-blue-600 transition-all"
            >
              Get Started — It’s Free
            </motion.button>
          </Link>
        </div>
      </motion.section>

      {/* Stats Section */}
      <section className="bg-white py-16 shadow-inner border-t border-blue-100">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
          {[
            ["120+", "Active Users"],
            ["350+", "Predictions Done"],
            ["99%", "Demo Accuracy"],
            ["24/7", "Support"],
          ].map(([value, label], i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="transition-all"
            >
              <h3 className="text-5xl font-bold text-blue-700">{value}</h3>
              <p className="text-gray-600 text-lg mt-2">{label}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
