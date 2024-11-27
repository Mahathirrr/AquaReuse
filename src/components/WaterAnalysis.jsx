import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  CameraIcon,
  ArrowPathIcon,
  CheckCircleIcon,
} from "@heroicons/react/24/solid";

function WaterAnalysis() {
  const [analysisStep, setAnalysisStep] = useState("guide");
  const [showResult, setShowResult] = useState(false);

  const handleTakePhoto = () => {
    setAnalysisStep("analyzing");
    // Simulate analysis process
    setTimeout(() => {
      setAnalysisStep("complete");
      setShowResult(true);
    }, 2000);
  };

  return (
    <div className="p-4">
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="mb-6"
      >
        <h1 className="text-2xl font-bold text-gray-800">Water Analysis</h1>
        <p className="text-gray-600">Follow the steps to analyze your water</p>
      </motion.div>

      <AnimatePresence mode="wait">
        {analysisStep === "guide" && (
          <motion.div
            key="guide"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            className="bg-white rounded-xl p-6 shadow-sm mb-6"
          >
            <h2 className="text-lg font-semibold mb-4">
              Photography Guidelines
            </h2>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="bg-blue-100 text-blue-600 rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1">
                  1
                </span>
                <p className="text-gray-700">Ensure good lighting conditions</p>
              </li>
              <li className="flex items-start">
                <span className="bg-blue-100 text-blue-600 rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1">
                  2
                </span>
                <p className="text-gray-700">
                  Place water sample against white background
                </p>
              </li>
              <li className="flex items-start">
                <span className="bg-blue-100 text-blue-600 rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1">
                  3
                </span>
                <p className="text-gray-700">Keep camera steady and level</p>
              </li>
            </ul>
          </motion.div>
        )}

        {analysisStep === "analyzing" && (
          <motion.div
            key="analyzing"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            className="bg-white rounded-xl p-6 shadow-sm mb-6 flex flex-col items-center"
          >
            <ArrowPathIcon className="h-12 w-12 text-blue-500 animate-spin mb-4" />
            <h2 className="text-lg font-semibold">Analyzing Water Sample</h2>
            <p className="text-gray-600">
              Please wait while we process your sample...
            </p>
          </motion.div>
        )}

        {analysisStep === "complete" && (
          <motion.div
            key="complete"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            className="bg-white rounded-xl p-6 shadow-sm mb-6"
          >
            <div className="flex items-center space-x-3 mb-4">
              <CheckCircleIcon className="h-8 w-8 text-green-500" />
              <h2 className="text-lg font-semibold">Analysis Complete</h2>
            </div>
            <div className="space-y-4">
              <div className="bg-green-50 p-4 rounded-lg">
                <p className="text-green-800 font-medium">
                  Water Quality Score
                </p>
                <p className="text-3xl font-bold text-green-600">92%</p>
                <p className="text-green-700 text-sm">
                  Excellent quality for reuse
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="font-medium text-gray-800">Recommendations:</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>✓ Suitable for plant watering</li>
                  <li>✓ Can be used for cleaning</li>
                  <li>✓ Safe for general household use</li>
                </ul>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {analysisStep === "guide" && (
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="fixed bottom-20 left-4 right-4 max-w-md mx-auto"
        >
          <button
            onClick={handleTakePhoto}
            className="w-full bg-blue-600 text-white py-4 rounded-xl flex items-center justify-center space-x-2 font-medium"
          >
            <CameraIcon className="h-6 w-6" />
            <span>Take Photo</span>
          </button>
        </motion.div>
      )}

      {analysisStep === "complete" && (
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="fixed bottom-20 left-4 right-4 max-w-md mx-auto"
        >
          <button
            onClick={() => setAnalysisStep("guide")}
            className="w-full bg-blue-600 text-white py-4 rounded-xl flex items-center justify-center space-x-2 font-medium"
          >
            <CameraIcon className="h-6 w-6" />
            <span>New Analysis</span>
          </button>
        </motion.div>
      )}
    </div>
  );
}

export default WaterAnalysis;

