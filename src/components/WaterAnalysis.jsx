import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  CameraIcon,
  ArrowPathIcon,
  CheckCircleIcon,
  PhotoIcon,
  XMarkIcon,
  BeakerIcon,
  ExclamationTriangleIcon,
  InformationCircleIcon,
} from "@heroicons/react/24/solid";

const QUALITY_LEVELS = {
  EXCELLENT: {
    range: [85, 100],
    color: "green",
    label: "Excellent",
    description: "Safe for most non-food contact purposes",
    icon: CheckCircleIcon,
  },
  GOOD: {
    range: [70, 84],
    color: "blue",
    label: "Good",
    description: "Suitable for limited reuse applications",
    icon: BeakerIcon,
  },
  MODERATE: {
    range: [50, 69],
    color: "yellow",
    label: "Moderate",
    description: "Restricted use recommended",
    icon: ExclamationTriangleIcon,
  },
  POOR: {
    range: [0, 49],
    color: "red",
    label: "Poor",
    description: "Not recommended for reuse",
    icon: XMarkIcon,
  },
};

const WATER_PARAMETERS = {
  turbidity: {
    label: "Turbidity",
    value: 2.5,
    unit: "NTU",
    status: "good",
  },
  ph: {
    label: "pH Level",
    value: 7.2,
    unit: "pH",
    status: "excellent",
  },
  tds: {
    label: "Total Dissolved Solids",
    value: 450,
    unit: "ppm",
    status: "good",
  },
  temperature: {
    label: "Temperature",
    value: 23,
    unit: "°C",
    status: "excellent",
  },
};

function WaterAnalysis() {
  const [analysisStep, setAnalysisStep] = useState("guide");
  const [selectedImage, setSelectedImage] = useState(null);
  const [qualityScore, setQualityScore] = useState(null);
  const fileInputRef = useRef(null);

  const getQualityLevel = (score) => {
    return Object.entries(QUALITY_LEVELS).find(
      ([_, level]) => score >= level.range[0] && score <= level.range[1],
    )[1];
  };

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
      const mockScore = 82; // This would come from actual analysis
      setQualityScore(mockScore);
      setAnalysisStep("complete");
    }, 2000);
  };

  const handleCameraCapture = () => {
    const mockImageUrl =
      "https://images.unsplash.com/photo-1548839140-29a749e7172f?q=80&w=1000";
    setSelectedImage(mockImageUrl);
    startAnalysis();
  };

  const resetAnalysis = () => {
    setAnalysisStep("guide");
    setSelectedImage(null);
    setQualityScore(null);
  };

  const getRecommendations = (score) => {
    const level = getQualityLevel(score);
    if (level.color === "green") {
      return [
        "✓ Ideal for plant watering and gardening",
        "✓ Suitable for floor cleaning and mopping",
        "✓ Can be used for toilet flushing",
        "✓ Safe for outdoor cleaning tasks",
      ];
    } else if (level.color === "blue") {
      return [
        "✓ Suitable for outdoor cleaning",
        "✓ Can be used for toilet flushing",
        "✓ Appropriate for non-food contact surfaces",
        "⚠️ Not recommended for plant watering",
      ];
    } else if (level.color === "yellow") {
      return [
        "⚠️ Limited to toilet flushing only",
        "⚠️ Consider additional treatment",
        "❌ Avoid contact with surfaces",
        "❌ Not suitable for plant watering",
      ];
    } else {
      return [
        "❌ Not suitable for reuse",
        "❌ Requires proper disposal",
        "❌ Consider adjusting washing process",
        "❌ Check water source quality",
      ];
    }
  };

  return (
    <div className="p-4">
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="mb-6"
      >
        <h1 className="text-2xl font-bold text-gray-800">
          Vegetable Wash Water Analysis
        </h1>
        <p className="text-gray-600">Analyze and get reuse recommendations</p>
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
              <div className="flex items-center space-x-3 mb-4">
                <InformationCircleIcon className="h-6 w-6 text-blue-500" />
                <h2 className="text-lg font-semibold">Analysis Guidelines</h2>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="bg-blue-100 text-blue-600 rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1">
                    1
                  </span>
                  <div>
                    <p className="text-gray-700 font-medium">Collect Sample</p>
                    <p className="text-gray-600 text-sm">
                      Gather water after vegetable washing in a clear container
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="bg-blue-100 text-blue-600 rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1">
                    2
                  </span>
                  <div>
                    <p className="text-gray-700 font-medium">Lighting</p>
                    <p className="text-gray-600 text-sm">
                      Ensure good, even lighting without shadows
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="bg-blue-100 text-blue-600 rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1">
                    3
                  </span>
                  <div>
                    <p className="text-gray-700 font-medium">Position</p>
                    <p className="text-gray-600 text-sm">
                      Place container against a white background
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <button
                onClick={handleCameraCapture}
                className="bg-blue-500 text-white p-6 rounded-xl flex flex-col items-center justify-center space-y-2"
              >
                <CameraIcon className="h-8 w-8" />
                <span className="text-sm font-medium">Take Photo</span>
                <span className="text-xs text-blue-100">Quick capture</span>
              </button>
              <button
                onClick={() => fileInputRef.current?.click()}
                className="bg-gray-100 text-gray-700 p-6 rounded-xl flex flex-col items-center justify-center space-y-2"
              >
                <PhotoIcon className="h-8 w-8" />
                <span className="text-sm font-medium">Upload Image</span>
                <span className="text-xs text-gray-500">From gallery</span>
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
                      Analyzing water quality...
                    </p>
                    <p className="text-blue-200 text-sm mt-2">
                      Checking parameters
                    </p>
                  </div>
                </div>
              </div>
            )}
          </motion.div>
        )}

        {analysisStep === "complete" && qualityScore && (
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
              <div className="flex items-center space-x-3 mb-6">
                {React.createElement(getQualityLevel(qualityScore).icon, {
                  className: `h-8 w-8 text-${getQualityLevel(qualityScore).color}-500`,
                })}
                <div>
                  <h2 className="text-lg font-semibold">Analysis Results</h2>
                  <p className="text-sm text-gray-600">
                    Based on vegetable wash water standards
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <div
                  className={`bg-${getQualityLevel(qualityScore).color}-50 p-4 rounded-lg`}
                >
                  <div className="flex justify-between items-center mb-2">
                    <p
                      className={`text-${getQualityLevel(qualityScore).color}-800 font-medium`}
                    >
                      Quality Score
                    </p>
                    <span
                      className={`px-3 py-1 bg-${getQualityLevel(qualityScore).color}-100 text-${getQualityLevel(qualityScore).color}-800 rounded-full text-sm font-medium`}
                    >
                      {getQualityLevel(qualityScore).label}
                    </span>
                  </div>
                  <p
                    className={`text-4xl font-bold text-${getQualityLevel(qualityScore).color}-600`}
                  >
                    {qualityScore}%
                  </p>
                  <p
                    className={`text-${getQualityLevel(qualityScore).color}-700 text-sm mt-1`}
                  >
                    {getQualityLevel(qualityScore).description}
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="font-medium text-gray-800">
                    Water Parameters
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                    {Object.entries(WATER_PARAMETERS).map(([key, param]) => (
                      <div key={key} className="bg-gray-50 p-3 rounded-lg">
                        <p className="text-sm text-gray-600">{param.label}</p>
                        <div className="flex items-end justify-between">
                          <p className="text-lg font-semibold text-gray-800">
                            {param.value}
                            <span className="text-sm text-gray-500 ml-1">
                              {param.unit}
                            </span>
                          </p>
                          <span
                            className={`px-2 py-0.5 rounded-full text-xs font-medium bg-${param.status}-100 text-${param.status}-800`}
                          >
                            {param.status}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-3">
                  <h3 className="font-medium text-gray-800">Recommendations</h3>
                  <ul className="space-y-2">
                    {getRecommendations(qualityScore).map((rec, index) => (
                      <li
                        key={index}
                        className="text-gray-600 flex items-start space-x-2"
                      >
                        <span>{rec}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="border-t pt-4">
                  <h3 className="font-medium text-gray-800 mb-2">
                    Storage Guidelines
                  </h3>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Store in clean, covered containers</li>
                    <li>• Use within 24 hours</li>
                    <li>• Keep away from direct sunlight</li>
                    <li>• Monitor for any changes in appearance</li>
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
