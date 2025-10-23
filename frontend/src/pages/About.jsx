import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-blue-50 to-blue-100 text-gray-800 pt-32 pb-16 px-6 md:px-20">
      <motion.div
        className="max-w-5xl mx-auto text-center md:text-left"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <h1 className="text-4xl md:text-5xl font-extrabold text-blue-700 mb-6 text-center">
          About <span className="text-blue-500">SepsisPredict</span>
        </h1>

        <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8">
          <strong>SepsisPredict</strong> is an AI-powered clinical decision support tool designed
          to help in the <span className="text-blue-600 font-semibold">early detection of sepsis</span> — 
          a life-threatening condition that occurs when the body’s response to infection causes 
          organ dysfunction. Early identification is critical for timely medical intervention, 
          and SepsisPredict aims to support healthcare professionals and patients in this process.
        </p>

        <div className="bg-white rounded-2xl shadow-lg p-8 mb-10 border border-blue-100">
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">
            🌡️ How SepsisPredict Works
          </h2>
          <ul className="list-disc list-inside text-gray-700 space-y-3 text-lg">
            <li>
              Users enter vital signs and lab values — such as lactate level, heart rate, white
              blood cell count, and blood pressure.
            </li>
            <li>
              Our AI model analyzes these parameters and predicts the likelihood of sepsis using
              data patterns trained from medical datasets.
            </li>
            <li>
              The system provides a <strong>sepsis risk score</strong> (0–100%) and visual indicators to
              help users and doctors assess the severity.
            </li>
            <li>
              All predictions and previous assessments are stored securely in the patient’s
              personal dashboard for easy monitoring.
            </li>
          </ul>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8 mb-10 border border-blue-100">
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">
            🔒 Data Privacy & Security
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            We prioritize your privacy. All user data is stored in a secure database and is only
            accessible to the authenticated user. Sensitive medical inputs are used strictly for
            prediction purposes and are never shared with third parties.
            <br />
            Our system follows best practices in healthcare data protection, ensuring your
            information remains <span className="font-semibold text-blue-600">confidential and encrypted</span>.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8 mb-10 border border-blue-100">
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">
            🧠 Why Early Detection Matters
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Every hour of delayed sepsis treatment increases mortality risk. Early prediction helps
            clinicians act fast — initiating antibiotics and supportive care in time to save lives.
            SepsisPredict bridges the gap between data and timely diagnosis, empowering both
            patients and healthcare providers.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8 border border-blue-100">
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">
            🤝 Our Vision
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            SepsisPredict’s vision is to make AI-driven healthcare accessible to everyone. We aim
            to reduce preventable deaths due to sepsis through technology, awareness, and proactive
            health monitoring. <br />
            <br />
            Together, we can use the power of data and AI to save lives and build a healthier
            tomorrow.
          </p>
        </div>

        <div className="text-center mt-10">
          <p className="text-gray-500 text-sm">
            ⚕️ Disclaimer: SepsisPredict is a prototype for educational and research purposes. It is
            <strong> not a substitute for professional medical advice</strong>. Always consult a healthcare
            provider for clinical decisions.
          </p>
        </div>
      </motion.div>
    </div>
  );
}
