import React from "react";
import { motion } from "framer-motion";
import { BarChart } from "lucide-react";

export default function ResearchProgress() {
  const researchAreas = [
    {
      name: "Water Quality Patterns",
      progress: 75,
      color: "blue",
    },
    {
      name: "Treatment Effectiveness",
      progress: 60,
      color: "green",
    },
    {
      name: "Data Collection",
      progress: 90,
      color: "purple",
    },
  ];

  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.3 }}
      className="bg-white rounded-xl p-4 shadow-sm"
    >
      <div className="flex items-center justify-between mb-4">
        <h2 className="font-semibold text-gray-800">Research Progress</h2>
        <BarChart className="w-5 h-5 text-gray-400" />
      </div>
      <div className="space-y-4">
        <div className="space-y-3">
          {researchAreas.map((area, index) => (
            <div key={index}>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-gray-600">{area.name}</span>
                <span className={`text-${area.color}-600`}>
                  {area.progress}%
                </span>
              </div>
              <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                <div
                  className={`h-full bg-${area.color}-500 rounded-full`}
                  style={{ width: `${area.progress}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
