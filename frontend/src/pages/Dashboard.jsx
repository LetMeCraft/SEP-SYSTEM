import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Dashboard() {
  return (
    <div className=" bg-gradient-to-b from-blue-50 via-white to-blue-100 pt-30 pb-20 p-20">
      {/* Container */}
      <div className="mx-auto px-6 md:px-4">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}  
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold text-blue-800 mb-15">
            Welcome Back 👋
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Monitor your health analytics, view past predictions, and manage
            your AI-powered sepsis prediction data in one dashboard.
          </p>
        </motion.div>

        {/* Stats Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-20"
        >
          {[
            { label: "Predictions Made", value: "350+", icon: "📈" },
            { label: "Accuracy Rate", value: "99%", icon: "🎯" },
            { label: "Support Availability", value: "24/7", icon: "💬" },
          ].map((stat, i) => (
            <div
              key={i}
              className="bg-white/80 backdrop-blur-md border border-blue-100 rounded-2xl shadow-md hover:shadow-xl transition-all p-6 text-center"
            >
              <div className="text-4xl mb-2">{stat.icon}</div>
              <h3 className="text-3xl font-bold text-blue-700">{stat.value}</h3>
              <p className="text-gray-600 mt-1">{stat.label}</p>
            </div>
          ))}
        </motion.div>

        {/* Action Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="flex flex-col md:flex-row justify-center gap-8"
        >
          <Link
            to="/predict"
            className="flex-1 text-center bg-gradient-to-r from-blue-600 to-blue-500 text-white text-lg font-semibold py-5 rounded-2xl shadow-lg hover:from-blue-700 hover:to-blue-600 transition-all"
          >
            🧠 Start New Prediction
          </Link>
          <Link
            to="/history"
            className="flex-1 text-center bg-white/80 border border-blue-300 text-blue-700 text-lg font-semibold py-5 rounded-2xl shadow-lg hover:bg-blue-50 transition-all"
          >
            📊 View Past Predictions
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
