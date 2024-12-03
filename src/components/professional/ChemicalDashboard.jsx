import React from "react";
import { motion } from "framer-motion";
import {
  Beaker,
  FileSpreadsheet,
  AlertTriangle,
  TestTube,
  TrendingUp,
  FileCheck,
  BarChart,
} from "lucide-react";
import StatsCard from "./components/StatsCard";
import AnalysisList from "./components/AnalysisList";
import ResearchProgress from "./components/ResearchProgress";
import QuickActions from "./components/QuickActions";

export default function ChemicalDashboard() {
  const stats = [
    {
      label: "Total Analyses",
      value: "342",
      icon: Beaker,
      color: "purple",
    },
    {
      label: "Critical Cases",
      value: "5",
      icon: AlertTriangle,
      color: "red",
    },
    {
      label: "Research Studies",
      value: "12",
      icon: TestTube,
      color: "indigo",
    },
  ];

  return (
    <div className="p-4 space-y-6">
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="flex items-center justify-between"
      >
        <div>
          <h1 className="text-2xl font-bold text-gray-800">
            Chemical Expert Dashboard
          </h1>
          <p className="text-gray-600">
            Advanced water quality analysis and research
          </p>
        </div>
      </motion.div>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.1 }}
        className="grid grid-cols-3 gap-4"
      >
        {stats.map((stat, index) => (
          <StatsCard key={index} {...stat} />
        ))}
      </motion.div>

      <div className="grid grid-cols-2 gap-6">
        <AnalysisList />
        <ResearchProgress />
      </div>

      <QuickActions />
    </div>
  );
}
