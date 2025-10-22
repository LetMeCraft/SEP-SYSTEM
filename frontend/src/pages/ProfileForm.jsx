import React, { useEffect, useState } from "react";
import axios from "../api/axios";
import { useNavigate } from "react-router-dom";

export default function ProfileForm() {
  const [profile, setProfile] = useState({
    age: "",
    gender: "",
    weight: "",
    comorbidities: "",
  });
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const nav = useNavigate();

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await axios.get("/profile/me");
        if (res.data.profile) {
          // ✅ Profile already exists — go straight to dashboard
          nav("/dashboard");
        } else {
          // 🚀 No profile found — show the form
          setShowForm(true);
        }
      } catch (e) {
        console.error("Profile fetch error:", e);
        setShowForm(true); // fallback to show form if error occurs
      } finally {
        setLoading(false);
      }
    };
    fetchProfile();
  }, [nav]);

  const save = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/profile/create", profile);
      alert("✅ Profile saved successfully!");
      nav("/dashboard");
    } catch (e) {
      console.error("Profile save error:", e);
      alert("❌ Could not save profile");
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-blue-50/30">
        <p className="text-blue-600 text-lg font-medium animate-pulse">
          Loading your profile...
        </p>
      </div>
    );
  }

  if (!showForm) return null; // 🔒 Don't render form if profile exists

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-blue-50/30 backdrop-blur-md z-50">
      <div className="bg-white shadow-2xl p-8 rounded-2xl w-full max-w-lg border border-blue-100 animate-fadeIn">
        <h2 className="text-3xl font-bold text-center text-blue-700 mb-6">
          Complete Your Profile 🩺
        </h2>

        <form onSubmit={save} className="space-y-4">
          <input
            placeholder="Age"
            value={profile.age || ""}
            onChange={(e) => setProfile({ ...profile, age: e.target.value })}
            className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
          <input
            placeholder="Gender"
            value={profile.gender || ""}
            onChange={(e) => setProfile({ ...profile, gender: e.target.value })}
            className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
          <input
            placeholder="Weight (kg)"
            value={profile.weight || ""}
            onChange={(e) => setProfile({ ...profile, weight: e.target.value })}
            className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
          <textarea
            placeholder="Comorbidities"
            value={profile.comorbidities || ""}
            onChange={(e) =>
              setProfile({ ...profile, comorbidities: e.target.value })
            }
            className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 h-24"
          />
          <button className="w-full bg-blue-600 text-white py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-all shadow-md">
            Save & Continue
          </button>
        </form>
      </div>
    </div>
  );
}
