import React, { useEffect, useState } from "react";
import axios from "../api/axios";
import { useNavigate } from "react-router-dom";

export default function ProfilePage() {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const nav = useNavigate();

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await axios.get("/profile/me");
        if (res.data.profile) {
          setProfile(res.data.profile);
        } else {
          // No profile? Redirect to form
          nav("/profile/edit");
        }
      } catch (e) {
        console.error("Profile fetch failed:", e);
        nav("/auth"); // redirect to login if unauthorized
      } finally {
        setLoading(false);
      }
    };
    fetchProfile();
  }, [nav]);

  // ✅ Corrected navigation route
  const handleEdit = () => nav("/profile/edit");

  const handleLogout = () => {
    localStorage.removeItem("token");
    alert("You have been logged out!");
    nav("/");
  };

  if (loading)
    return (
      <div className="flex items-center justify-center min-h-screen bg-blue-50">
        <p className="text-blue-600 text-lg font-semibold animate-pulse">
          Loading your profile...
        </p>
      </div>
    );

  if (!profile)
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p>No profile data available.</p>
      </div>
    );

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-xl shadow-lg mt-30 border border-gray-100">
      <h2 className="text-3xl font-bold text-blue-700 mb-6 text-center pt-2 pb-4 border-b border-gray-200">
        My Profile 🩺
      </h2>

      <div className="space-y-3 text-lg text-gray-700">
        <p><strong>Age:</strong> {profile.age}</p>
        <p><strong>Gender:</strong> {profile.gender}</p>
        <p><strong>Weight:</strong> {profile.weight} kg</p>
        <p><strong>Comorbidities:</strong> {profile.comorbidities || "None"}</p>
      </div>

      <div className="flex justify-center gap-4 mt-8">
        <button
          onClick={handleEdit}
          className="bg-blue-600 text-white px-5 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-all"
        >
          Edit Profile
        </button>
        <button
          onClick={handleLogout}
          className="bg-gray-400 text-white px-5 py-2 rounded-lg font-semibold hover:bg-gray-500 transition-all"
        >
          Logout
        </button>
        <div> </div>
      </div>
    </div>
    
  );
}
