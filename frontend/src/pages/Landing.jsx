import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <div className="flex flex-col font-sans">
      {/* Hero Section */}
      <motion.section
        className="flex flex-col md:flex-row items-center justify-between px-6 md:px-16 pt-36 md:pt-44 pb-20 gap-10"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Left Text */}
        <div className="md:w-1/2 space-y-6 text-center md:text-center">
          <h2 className="text-5xl md:text-6xl font-extrabold leading-tight text-blue-800">
            Detect <span className="text-blue-500">Sepsis Early</span> with AI
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed max-w-lg mx-auto md:mx-0">
            Leverage AI-powered analytics to predict early signs of sepsis 
            using vital signs and lab data — securely stored in your personalized dashboard.
          </p>

          <div className="flex justify-center md:justify-start gap-4 mt-6">
            <Link to="/auth">
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all shadow-lg">
                Get Started - Free
              </button>
            </Link>
          </div>
        </div>

       
      </motion.section>

      {/* Stats Section */}
      <section className="bg-white py-16 shadow-inner">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            ["120+", "Active Users"],
            ["350+", "Predictions Done"],
            ["99%", "Accuracy (Demo)"],
            ["24/7", "Support"],
          ].map(([value, label], i) => (
            <div key={i}>
              <h3 className="text-4xl font-bold text-blue-700">{value}</h3>
              <p className="text-gray-600">{label}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
