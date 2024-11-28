import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  CameraIcon,
  ArrowPathIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import AnalysisGuide from "./analysis/components/AnalysisGuide";
import ImageCapture from "./analysis/components/ImageCapture";
import AnalysisResults from "./analysis/components/AnalysisResults";

export default function WaterAnalysis() {
  const [analysisStep, setAnalysisStep] = useState("guide");
  const [selectedImage, setSelectedImage] = useState(null);
  const [qualityScore, setQualityScore] = useState(null);
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
          <>
            <AnalysisGuide />
            <ImageCapture
              onCapture={handleCameraCapture}
              onFileSelect={handleImageSelect}
              fileInputRef={fileInputRef}
            />
          </>
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
          <>
            {selectedImage && (
              <div className="relative mb-6">
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
            <AnalysisResults
              qualityScore={qualityScore}
              onReset={resetAnalysis}
            />
          </>
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
