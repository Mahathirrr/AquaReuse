import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  Droplets,
  Recycle,
  Award,
  ChevronRight,
  CheckCircle,
} from "lucide-react";

const slides = [
  {
    id: "welcome",
    icon: Droplets,
    title: "Welcome to AquaReuse",
    description: "Your smart companion for sustainable water management",
    color: "blue",
    features: [
      "Smart water quality analysis",
      "Personalized recommendations",
      "Track your sustainability impact",
    ],
  },
  {
    id: "analysis",
    icon: Recycle,
    title: "Water Analysis Made Easy",
    description: "Get instant insights about your water quality",
    color: "green",
    steps: [
      "Take a photo of your water sample",
      "Our AI analyzes the quality instantly",
      "Receive reuse recommendations",
    ],
  },
  {
    id: "rewards",
    icon: Award,
    title: "Earn While Saving",
    description: "Get rewarded for your sustainable practices",
    color: "purple",
    benefits: [
      "Earn points for each analysis",
      "Complete sustainability challenges",
      "Unlock special achievements",
    ],
  },
];

export default function WelcomeGuide() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [completedSteps, setCompletedSteps] = useState([]);
  const navigate = useNavigate();

  const handleNext = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide((prev) => prev + 1);
      setCompletedSteps((prev) => [...prev, slides[currentSlide].id]);
    } else {
      navigate("/dashboard");
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
          <p className="text-gray-600 text-center mb-8 max-w-xs">
            {slides[currentSlide].description}
          </p>

          <div className="w-full max-w-xs space-y-4">
            {slides[currentSlide].features?.map((feature, index) => (
              <motion.div
                key={feature}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="flex items-center space-x-3 bg-gray-50 p-4 rounded-lg"
              >
                <CheckCircle
                  className={`w-5 h-5 text-${slides[currentSlide].color}-500`}
                />
                <span className="text-gray-700">{feature}</span>
              </motion.div>
            ))}

            {slides[currentSlide].steps?.map((step, index) => (
              <motion.div
                key={step}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="flex items-center space-x-3 bg-gray-50 p-4 rounded-lg"
              >
                <span
                  className={`w-6 h-6 rounded-full bg-${slides[currentSlide].color}-500 text-white flex items-center justify-center text-sm font-medium`}
                >
                  {index + 1}
                </span>
                <span className="text-gray-700">{step}</span>
              </motion.div>
            ))}

            {slides[currentSlide].benefits?.map((benefit, index) => (
              <motion.div
                key={benefit}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="flex items-center space-x-3 bg-gray-50 p-4 rounded-lg"
              >
                <Award
                  className={`w-5 h-5 text-${slides[currentSlide].color}-500`}
                />
                <span className="text-gray-700">{benefit}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </AnimatePresence>

      <div className="p-8">
        <div className="flex justify-center space-x-2 mb-8">
          {slides.map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === currentSlide
                  ? "bg-blue-500"
                  : completedSteps.includes(slides[index].id)
                    ? "bg-green-500"
                    : "bg-gray-200"
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
