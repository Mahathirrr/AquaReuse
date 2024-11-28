import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Clock, Calendar, Bell } from "lucide-react";
import ScheduleAnalysis from "../scheduling/ScheduleAnalysis";

export default function NextAnalysisCard() {
  const [showScheduler, setShowScheduler] = useState(false);
  const [nextAnalysis, setNextAnalysis] = useState({
    date: "Today",
    time: "4:00 PM",
    repeat: "daily",
  });

  const handleSchedule = (scheduleData) => {
    setNextAnalysis({
      date: scheduleData.date,
      time: scheduleData.time,
      repeat: scheduleData.repeat,
    });
    // Here you would typically save to backend
  };

  return (
    <>
      <AnimatePresence>
        {showScheduler && (
          <ScheduleAnalysis
            onClose={() => setShowScheduler(false)}
            onSchedule={handleSchedule}
          />
        )}
      </AnimatePresence>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="bg-white rounded-xl p-4 shadow-sm"
      >
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-3">
            <Clock className="h-6 w-6 text-blue-500" />
            <h3 className="font-semibold text-gray-800">Next Analysis</h3>
          </div>
          <span className="px-2 py-1 bg-blue-50 text-blue-600 rounded-lg text-sm">
            {nextAnalysis.repeat}
          </span>
        </div>

        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-3">
            <Calendar className="h-5 w-5 text-gray-400" />
            <div>
              <p className="text-gray-800 font-medium">{nextAnalysis.date}</p>
              <p className="text-sm text-gray-500">{nextAnalysis.time}</p>
            </div>
          </div>
          <div className="flex items-center space-x-2 text-gray-400">
            <Bell className="h-5 w-5" />
            <span className="text-sm">15m before</span>
          </div>
        </div>

        <button
          onClick={() => setShowScheduler(true)}
          className="w-full bg-blue-50 text-blue-600 py-2 rounded-lg text-sm font-medium hover:bg-blue-100 transition-colors"
        >
          Reschedule
        </button>
      </motion.div>
    </>
  );
}
