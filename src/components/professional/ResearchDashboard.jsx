import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FlaskConical,
  FileSpreadsheet,
  Users,
  BarChart2,
  LineChart,
  Download,
  Filter,
  Plus,
} from "lucide-react";
import ResearchStats from "./research/ResearchStats";
import ResearchProjects from "./research/ResearchProjects";
import WaterQualityTrends from "./research/WaterQualityTrends";
import TeamMembers from "./research/TeamMembers";

export default function ResearchDashboard() {
  const [timeRange, setTimeRange] = useState("week");
  const [showFilters, setShowFilters] = useState(false);

  return (
    <div className="p-4 space-y-6">
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="flex items-center justify-between"
      >
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Research Hub</h1>
          <p className="text-gray-600">Track and analyze research projects</p>
        </div>
        <div className="flex space-x-2">
          <button className="p-2 rounded-lg bg-blue-50 text-blue-600">
            <Download className="w-5 h-5" />
          </button>
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="p-2 rounded-lg bg-blue-50 text-blue-600"
          >
            <Filter className="w-5 h-5" />
          </button>
        </div>
      </motion.div>

      <ResearchStats />

      <div className="grid gap-6">
        <WaterQualityTrends
          timeRange={timeRange}
          onTimeRangeChange={setTimeRange}
        />

        <ResearchProjects />

        <TeamMembers />
      </div>

      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        className="fixed bottom-20 right-4 p-4 bg-blue-500 text-white rounded-full shadow-lg"
      >
        <Plus className="w-6 h-6" />
      </motion.button>
    </div>
  );
}
