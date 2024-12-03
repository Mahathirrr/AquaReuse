import React from "react";
import { motion } from "framer-motion";
import { FlaskConical, Users, TrendingUp, CheckCircle } from "lucide-react";

export default function ResearchStats() {
  const stats = [
    {
      icon: FlaskConical,
      label: "Active Projects",
      value: "8",
      change: "+2",
      color: "blue",
    },
    {
      icon: Users,
      label: "Team Members",
      value: "12",
      change: "+3",
      color: "green",
    },
    {
      icon: TrendingUp,
      label: "Analyses",
      value: "124",
      change: "+18",
      color: "purple",
    },
    {
      icon: CheckCircle,
      label: "Completed",
      value: "16",
      change: "+4",
      color: "indigo",
    },
  ];

  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="grid grid-cols-2 gap-4"
    >
      {stats.map((stat, index) => (
        <div key={index} className={`bg-${stat.color}-50 p-4 rounded-xl`}>
          <stat.icon className={`w-6 h-6 text-${stat.color}-500 mb-2`} />
          <p className={`text-${stat.color}-900 font-medium text-sm`}>
            {stat.label}
          </p>
          <div className="flex items-end justify-between mt-1">
            <p className={`text-xl font-bold text-${stat.color}-700`}>
              {stat.value}
            </p>
            <span className={`text-sm text-${stat.color}-600`}>
              {stat.change}
            </span>
          </div>
        </div>
      ))}
    </motion.div>
  );
}
