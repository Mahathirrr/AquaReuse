import React from "react";
import { motion } from "framer-motion";
import {
  ArrowPathIcon,
  ChartBarIcon,
  AcademicCapIcon,
  LightBulbIcon,
  CalendarIcon,
  ClockIcon,
  BookOpenIcon,
  BeakerIcon,
} from "@heroicons/react/24/solid";
import { useNavigate } from "react-router-dom";
import Logo from "../assets/Logo";
import WaterQualityCard from "./dashboard/WaterQualityCard";
import TipsCard from "./dashboard/TipsCard";
import StatsGrid from "./dashboard/StatsGrid";
import NextAnalysisCard from "./dashboard/NextAnalysisCard";

function Dashboard() {
  const navigate = useNavigate();

  const handleQuickAction = (action) => {
    switch (action) {
      case "analysis":
        navigate("/analysis");
        break;
      case "guidelines":
        navigate("/guide");
        break;
      case "statistics":
        navigate("/history");
        break;
      default:
        break;
    }
  };

  return (
    <div className="p-4 space-y-4">
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="flex items-center justify-between mb-2"
      >
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Welcome back! 👋</h1>
          <p className="text-gray-600">Let's check your water quality</p>
        </div>
        <Logo className="w-12 h-12" />
      </motion.div>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.1 }}
        className="grid grid-cols-2 gap-4"
      >
        <div className="bg-blue-500 rounded-xl p-4 text-white">
          <ArrowPathIcon className="h-8 w-8 mb-2" />
          <p className="text-sm opacity-90">Water Saved</p>
          <h2 className="text-xl font-bold">127L</h2>
        </div>
        <div className="bg-green-500 rounded-xl p-4 text-white">
          <LightBulbIcon className="h-8 w-8 mb-2" />
          <p className="text-sm opacity-90">Efficiency</p>
          <h2 className="text-xl font-bold">92%</h2>
        </div>
      </motion.div>

      <WaterQualityCard />

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="grid grid-cols-2 gap-4"
      >
        <div className="bg-purple-100 p-4 rounded-xl">
          <AcademicCapIcon className="h-8 w-8 text-purple-600 mb-2" />
          <h3 className="font-semibold text-purple-800">Achievements</h3>
          <p className="text-sm text-purple-600">3 new badges!</p>
        </div>
        <div className="bg-amber-100 p-4 rounded-xl">
          <CalendarIcon className="h-8 w-8 text-amber-600 mb-2" />
          <h3 className="font-semibold text-amber-800">Streak</h3>
          <p className="text-sm text-amber-600">7 days</p>
        </div>
      </motion.div>

      <StatsGrid />

      <NextAnalysisCard />

      <TipsCard />

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="bg-white rounded-xl p-4 shadow-sm"
      >
        <h3 className="font-semibold text-gray-800 mb-3">Quick Actions</h3>
        <div className="space-y-3">
          <button
            onClick={() => handleQuickAction("analysis")}
            className="w-full bg-blue-50 text-blue-700 py-3 px-4 rounded-lg text-left font-medium hover:bg-blue-100 transition-colors flex items-center space-x-2"
          >
            <BeakerIcon className="h-5 w-5" />
            <span>Start New Analysis</span>
          </button>
          <button
            onClick={() => handleQuickAction("guidelines")}
            className="w-full bg-gray-50 text-gray-700 py-3 px-4 rounded-lg text-left font-medium hover:bg-gray-100 transition-colors flex items-center space-x-2"
          >
            <BookOpenIcon className="h-5 w-5" />
            <span>View Guidelines</span>
          </button>
          <button
            onClick={() => handleQuickAction("statistics")}
            className="w-full bg-gray-50 text-gray-700 py-3 px-4 rounded-lg text-left font-medium hover:bg-gray-100 transition-colors flex items-center space-x-2"
          >
            <ChartBarIcon className="h-5 w-5" />
            <span>Check Statistics</span>
          </button>
        </div>
      </motion.div>
    </div>
  );
}

export default Dashboard;
