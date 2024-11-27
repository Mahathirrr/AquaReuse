import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  CameraIcon,
  ArrowPathIcon,
  CheckCircleIcon,
  PhotoIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";

function WaterAnalysis() {
  const [analysisStep, setAnalysisStep] = useState("guide");
  const [showResult, setShowResult] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const fileInputRef = useRef(null);

  const handleImageSelect = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result);
        startAnalysis();
      };
      reader.readAsDataURL(file);
    }
  };

  const startAnalysis = () => {
    setAnalysisStep("analyzing");
    // Simulate analysis process
    setTimeout(() => {
      setAnalysisStep("complete");
      setShowResult(true);
    }, 2000);
  };

  const handleCameraCapture = () => {
    // Simulate camera capture
    const mockImageUrl =
      "https://images.unsplash.com/photo-1548839140-29a749e7172f?q=80&w=1000";
    setSelectedImage(mockImageUrl);
    startAnalysis();
  };

  const resetAnalysis = () => {
    setAnalysisStep("guide");
    setSelectedImage(null);
    setShowResult(false);
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
            className="space-y-6"
          >
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h2 className="text-lg font-semibold mb-4">
                Photography Guidelines
              </h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="bg-blue-100 text-blue-600 rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1">
                    1
                  </span>
                  <p className="text-gray-700">
                    Ensure good lighting conditions
                  </p>
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
            </div>

            <div className="grid grid-cols-2 gap-4">
              <button
                onClick={handleCameraCapture}
                className="bg-blue-500 text-white p-4 rounded-xl flex flex-col items-center justify-center space-y-2"
              >
                <CameraIcon className="h-8 w-8" />
                <span className="text-sm font-medium">Take Photo</span>
              </button>
              <button
                onClick={() => fileInputRef.current?.click()}
                className="bg-gray-100 text-gray-700 p-4 rounded-xl flex flex-col items-center justify-center space-y-2"
              >
                <PhotoIcon className="h-8 w-8" />
                <span className="text-sm font-medium">Upload Image</span>
              </button>
            </div>
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleImageSelect}
              accept="image/*"
              className="hidden"
            />
          </motion.div>
        )}

        {analysisStep === "analyzing" && (
          <motion.div
            key="analyzing"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            className="space-y-6"
          >
            {selectedImage && (
              <div className="relative">
                <img
                  src={selectedImage}
                  alt="Water sample"
                  className="w-full h-64 object-cover rounded-xl"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 rounded-xl flex items-center justify-center">
                  <div className="text-center">
                    <ArrowPathIcon className="h-12 w-12 text-white animate-spin mx-auto mb-4" />
                    <p className="text-white font-medium">
                      Analyzing sample...
                    </p>
                  </div>
                </div>
              </div>
            )}
          </motion.div>
        )}

        {analysisStep === "complete" && (
          <motion.div
            key="complete"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            className="space-y-6"
          >
            {selectedImage && (
              <div className="relative">
                <img
                  src={selectedImage}
                  alt="Water sample"
                  className="w-full h-64 object-cover rounded-xl"
                />
                <button
                  onClick={resetAnalysis}
                  className="absolute top-2 right-2 p-2 bg-white rounded-full shadow-lg"
                >
                  <XMarkIcon className="h-6 w-6 text-gray-600" />
                </button>
              </div>
            )}

            <div className="bg-white rounded-xl p-6 shadow-sm">
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
                  <h3 className="font-medium text-gray-800">
                    Recommendations:
                  </h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>✓ Suitable for plant watering</li>
                    <li>✓ Can be used for cleaning</li>
                    <li>✓ Safe for general household use</li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {analysisStep === "complete" && (
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="fixed bottom-20 left-4 right-4 max-w-md mx-auto"
        >
          <button
            onClick={resetAnalysis}
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
