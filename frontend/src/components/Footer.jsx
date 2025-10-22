import React from "react";

export default function Footer() {
  return (
    <footer className="bg-blue-900 text-blue-100 py-4 mt-auto">
      <div className="mx-auto flex justify-between items-center px-8 py-0">
        <div>
          <h4 className="text-lg font-semibold mb-2">About</h4>
          <p className="text-sm text-blue-200">
            SepsisPredict helps detect early signs of sepsis using AI-based models.
          </p>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-2">Contact</h4>
          <p>Email: support@sepsispredict.ai</p>
          <p>Phone: +91 98765 43210</p>
        </div>
      </div>
      <p className="text-center text-blue-300 text-sm mt-0">
        © {new Date().getFullYear()} SepsisPredict — Built with ❤️ 
      </p>
    </footer>
  );
}
