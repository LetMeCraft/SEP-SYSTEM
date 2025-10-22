import React, { useState } from "react";
import axios from "../api/axios";
import { Loader2, ActivitySquare } from "lucide-react";

export default function PredictForm() {
  const [inputs, setInputs] = useState({
    lactate: "",
    heart_rate: "",
    wbc: "",
    sbp: "",
  });
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const submit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setResult(null);
    try {
      const res = await axios.post("/predict/", inputs);
      setResult(res.data);
    } catch (err) {
      console.error("Prediction error:", err);
      alert("Prediction failed. Please check your input or login again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-[80vh] bg-gradient-to-b from-blue-50 to-blue-100 pt-30 pb-15">
      <div className="bg-white shadow-2xl rounded-2xl p-8 w-full max-w-md border border-blue-100">
        <h2 className="text-3xl font-bold text-center text-blue-700 mb-6 flex justify-center items-center gap-2">
          Sepsis Prediction <ActivitySquare size={28} className="text-blue-600" />
        </h2>

        <form onSubmit={submit} className="space-y-4">
          {[
            { name: "lactate", label: "Lactate (mmol/L)" },
            { name: "heart_rate", label: "Heart Rate (bpm)" },
            { name: "wbc", label: "WBC (×10⁹/L)" },
            { name: "sbp", label: "Systolic BP (mmHg)" },
          ].map((f) => (
            <input
              key={f.name}
              name={f.name}
              placeholder={f.label}
              value={inputs[f.name]}
              onChange={handleChange}
              className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all"
              required
            />
          ))}

          <button
            disabled={loading}
            className="w-full bg-blue-600 text-white py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-all flex justify-center items-center gap-2"
          >
            {loading ? (
              <>
                <Loader2 className="animate-spin" size={20} /> Predicting...
              </>
            ) : (
              "Predict"
            )}
          </button>
        </form>

        {result && (
          <div className="mt-6 bg-blue-50 border border-blue-200 rounded-xl p-4 text-center">
            <h3 className="font-semibold text-blue-700 mb-2">Prediction Result</h3>
            <p className="text-2xl font-bold text-blue-800">
              {(result.score * 100).toFixed(1)}% risk
            </p>
            <p className="text-gray-600 mt-1 text-sm">
              (Raw score: {result.score.toFixed(3)})
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
