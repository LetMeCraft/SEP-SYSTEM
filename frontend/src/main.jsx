import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";

// Pages
import Landing from "./pages/Landing.jsx";
import Auth from "./pages/Auth.jsx";
import ProfileForm from "./pages/ProfileForm.jsx";
import ProfilePage from "./pages/ProfilePage.jsx"; // ✅ NEW PAGE
import Dashboard from "./pages/Dashboard.jsx";
import PredictForm from "./pages/PredictForm.jsx";
import History from "./pages/History.jsx";
import About from "./pages/About.jsx";

// Optional: Smooth scroll to top
import ScrollToTop from "./utils/ScrollToTop.jsx";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        {/* Shared layout (Navbar + Footer) */}
        <Route path="/" element={<App />}>
          <Route index element={<Landing />} />                {/* / */}
          <Route path="auth" element={<Auth />} />             {/* /auth */}
          <Route path="profile" element={<ProfilePage />} />   {/* /profile */}
          <Route path="profile/edit" element={<ProfileForm />} /> {/* /profile/edit */}
          <Route path="dashboard" element={<Dashboard />} />   {/* /dashboard */}
          <Route path="predict" element={<PredictForm />} />   {/* /predict */}
          <Route path="history" element={<History />} />       {/* /history */}
          <Route path="about" element={<About />} />

        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
