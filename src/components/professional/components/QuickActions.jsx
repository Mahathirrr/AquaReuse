import React from "react";
import { motion } from "framer-motion";
import { TestTube, FileCheck, BarChart, TrendingUp } from "lucide-react";

export default function QuickActions() {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.4 }}
      className="bg-white rounded-xl p-4 shadow-sm"
    >
      <div className="flex items-center justify-between mb-4">
        <h2 className="font-semibold text-gray-800">Quick Actions</h2>
        <TrendingUp className="w-5 h-5 text-gray-400" />
      </div>
      <div className="grid grid-cols-3 gap-4">
        <button className="p-4 bg-purple-50 rounded-lg text-left">
          <TestTube className="w-6 h-6 text-purple-600 mb-2" />
          <p className="font-medium text-purple-900">New Analysis</p>
        </button>
        <button className="p-4 bg-blue-50 rounded-lg text-left">
          <FileCheck className="w-6 h-6 text-blue-600 mb-2" />
          <p className="font-medium text-blue-900">Research Report</p>
        </button>
        <button className="p-4 bg-green-50 rounded-lg text-left">
          <BarChart className="w-6 h-6 text-green-600 mb-2" />
          <p className="font-medium text-green-900">View Trends</p>
        </button>
      </div>
    </motion.div>
  );
}
