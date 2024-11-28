import React from "react";
import { motion } from "framer-motion";
import { CameraIcon, CheckCircle } from "lucide-react";

export default function CameraPreview({ onCapture, onClose }) {
  return (
    <div className="fixed inset-0 bg-black z-50">
      <div className="relative h-full">
        {/* Camera Preview Frame */}
        <div className="absolute inset-0">
          <video
            id="camera-preview"
            autoPlay
            playsInline
            className="w-full h-full object-cover"
          />
        </div>

        {/* Scanning Frame Overlay */}
        <div className="absolute inset-0 flex items-center justify-center p-4">
          <div className="relative w-full max-w-sm aspect-square">
            {/* Corner Markers */}
            <div className="absolute top-0 left-0 w-12 h-12 border-t-4 border-l-4 border-blue-500" />
            <div className="absolute top-0 right-0 w-12 h-12 border-t-4 border-r-4 border-blue-500" />
            <div className="absolute bottom-0 left-0 w-12 h-12 border-b-4 border-l-4 border-blue-500" />
            <div className="absolute bottom-0 right-0 w-12 h-12 border-b-4 border-r-4 border-blue-500" />

            {/* Scanning Line Animation */}
            <motion.div
              className="absolute left-0 right-0 h-0.5 bg-blue-500"
              initial={{ top: "0%" }}
              animate={{ top: "100%" }}
              transition={{ duration: 2, repeat: Infinity }}
            />

            {/* Guide Text */}
            <div className="absolute -bottom-16 left-0 right-0 text-center text-white">
              <p className="text-sm">Position water sample within frame</p>
            </div>
          </div>
        </div>

        {/* Controls */}
        <div className="absolute bottom-8 inset-x-0 flex justify-center items-center space-x-8">
          <button
            onClick={onClose}
            className="p-3 bg-white/20 rounded-full text-white"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <button onClick={onCapture} className="p-6 bg-white rounded-full">
            <CameraIcon className="w-8 h-8 text-blue-500" />
          </button>
          <button className="p-3 bg-white/20 rounded-full text-white">
            <svg
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 10V3L4 14h7v7l9-11h-7z"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
