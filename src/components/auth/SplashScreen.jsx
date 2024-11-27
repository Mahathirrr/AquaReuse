import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { ChevronRight, Droplets, Recycle, Award } from "lucide-react";

const slides = [
  {
    icon: Droplets,
    title: "Welcome to AquaReuse",
    description: "Smart water management for a sustainable future",
    color: "blue",
  },
  {
    icon: Recycle,
    title: "Analyze & Reuse",
    description: "Get instant water quality analysis and reuse recommendations",
    color: "green",
  },
  {
    icon: Award,
    title: "Earn Rewards",
    description:
      "Track your progress and earn rewards for sustainable practices",
    color: "purple",
  },
];

export default function SplashScreen() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();

  const handleNext = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide((prev) => prev + 1);
    } else {
      navigate("/auth");
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          className="flex-1 flex flex-col items-center justify-center p-8"
        >
          <motion.div
            className={`p-6 rounded-full bg-${slides[currentSlide].color}-100 mb-8`}
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
          >
            {React.createElement(slides[currentSlide].icon, {
              className: `w-16 h-16 text-${slides[currentSlide].color}-500`,
              strokeWidth: 1.5,
            })}
          </motion.div>

          <h1 className="text-2xl font-bold text-gray-800 text-center mb-4">
            {slides[currentSlide].title}
          </h1>
          <p className="text-gray-600 text-center max-w-xs">
            {slides[currentSlide].description}
          </p>
        </motion.div>
      </AnimatePresence>

      <div className="p-8">
        <div className="flex justify-center space-x-2 mb-8">
          {slides.map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === currentSlide ? "bg-blue-500" : "bg-gray-200"
              }`}
            />
          ))}
        </div>

        <button
          onClick={handleNext}
          className="w-full bg-blue-500 text-white py-4 rounded-xl font-medium flex items-center justify-center space-x-2"
        >
          <span>
            {currentSlide === slides.length - 1 ? "Get Started" : "Next"}
          </span>
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
