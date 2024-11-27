import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CameraIcon, ArrowPathIcon } from '@heroicons/react/24/solid';

function WaterAnalysis() {
  const [analysisStep, setAnalysisStep] = useState('guide');

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

      {analysisStep === 'guide' && (
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="bg-white rounded-xl p-6 shadow-sm mb-6"
        >
          <h2 className="text-lg font-semibold mb-4">Photography Guidelines</h2>
          <ul className="space-y-4">
            <li className="flex items-start">
              <span className="bg-blue-100 text-blue-600 rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1">1</span>
              <p className="text-gray-700">Ensure good lighting conditions</p>
            </li>
            <li className="flex items-start">
              <span className="bg-blue-100 text-blue-600 rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1">2</span>
              <p className="text-gray-700">Place water sample against white background</p>
            </li>
            <li className="flex items-start">
              <span className="bg-blue-100 text-blue-600 rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1">3</span>
              <p className="text-gray-700">Keep camera steady and level</p>
            </li>
          </ul>
        </motion.div>
      )}

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="fixed bottom-20 left-4 right-4 max-w-md mx-auto"
      >
        <button
          onClick={() => setAnalysisStep('camera')}
          className="w-full bg-blue-600 text-white py-4 rounded-xl flex items-center justify-center space-x-2 font-medium"
        >
          <CameraIcon className="h-6 w-6" />
          <span>Take Photo</span>
        </button>
      </motion.div>
    </div>
  );
}

export default WaterAnalysis;