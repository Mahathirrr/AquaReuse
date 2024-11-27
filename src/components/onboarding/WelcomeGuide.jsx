import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

export default function WelcomeGuide() {
  const navigate = useNavigate();
  const { isNewUser } = useAuth();

  const handleComplete = () => {
    navigate("/dashboard");
  };

  if (!isNewUser) {
    navigate("/dashboard");
    return null;
  }

  return (
    <div className="min-h-screen bg-white flex flex-col justify-center p-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-6"
      >
        <div className="p-6 bg-white rounded-xl shadow-sm space-y-6">
          <h3 className="text-lg font-semibold text-gray-800">
            Getting Started
          </h3>
          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                <span className="text-blue-600 text-sm">1</span>
              </div>
              <div>
                <p className="font-medium text-gray-800">Take a Photo</p>
                <p className="text-sm text-gray-600">
                  Capture or upload an image of your water sample
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                <span className="text-green-600 text-sm">2</span>
              </div>
              <div>
                <p className="font-medium text-gray-800">Get Analysis</p>
                <p className="text-sm text-gray-600">
                  Our AI will analyze the water quality instantly
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0">
                <span className="text-purple-600 text-sm">3</span>
              </div>
              <div>
                <p className="font-medium text-gray-800">
                  Follow Recommendations
                </p>
                <p className="text-sm text-gray-600">
                  Get personalized suggestions for water reuse
                </p>
              </div>
            </div>
          </div>
          <button
            onClick={handleComplete}
            className="w-full bg-blue-500 text-white py-3 rounded-lg font-medium"
          >
            Got it
          </button>
        </div>
      </motion.div>
    </div>
  );
}
