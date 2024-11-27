import React from "react";
import { motion } from "framer-motion";
import {
  ArrowPathIcon,
  ChartBarIcon,
  AcademicCapIcon,
  LightBulbIcon,
  CalendarIcon,
  ClockIcon,
} from "@heroicons/react/24/solid";
import Logo from "../assets/Logo";
import WaterQualityCard from "./dashboard/WaterQualityCard";
import TipsCard from "./dashboard/TipsCard";
import StatsGrid from "./dashboard/StatsGrid";
import NextAnalysisCard from "./dashboard/NextAnalysisCard";

function Dashboard() {
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
          <button className="w-full bg-blue-50 text-blue-700 py-3 px-4 rounded-lg text-left font-medium hover:bg-blue-100 transition-colors">
            Start New Analysis
          </button>
          <button className="w-full bg-gray-50 text-gray-700 py-3 px-4 rounded-lg text-left font-medium hover:bg-gray-100 transition-colors">
            View Guidelines
          </button>
          <button className="w-full bg-gray-50 text-gray-700 py-3 px-4 rounded-lg text-left font-medium hover:bg-gray-100 transition-colors">
            Check Statistics
          </button>
        </div>
      </motion.div>
    </div>
  );
}

export default Dashboard;

