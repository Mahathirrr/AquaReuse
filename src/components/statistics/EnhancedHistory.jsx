import React, { useState } from "react";
import { motion } from "framer-motion";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import { Calendar, TrendingUp, Filter, Download } from "lucide-react";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
);

export default function EnhancedHistory() {
  const [timeRange, setTimeRange] = useState("week");
  const [selectedMetric, setSelectedMetric] = useState("quality");

  const metrics = {
    quality: {
      label: "Water Quality Score",
      data: [85, 82, 88, 87, 84, 90, 88],
      color: "rgb(59, 130, 246)",
    },
    turbidity: {
      label: "Turbidity (NTU)",
      data: [2.1, 2.3, 2.0, 2.4, 2.2, 2.1, 2.3],
      color: "rgb(139, 92, 246)",
    },
    ph: {
      label: "pH Level",
      data: [7.2, 7.1, 7.3, 7.2, 7.1, 7.2, 7.3],
      color: "rgb(34, 197, 94)",
    },
  };

  const chartData = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        label: metrics[selectedMetric].label,
        data: metrics[selectedMetric].data,
        borderColor: metrics[selectedMetric].color,
        backgroundColor: `${metrics[selectedMetric].color}20`,
        tension: 0.4,
        fill: true,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        mode: "index",
        intersect: false,
        backgroundColor: "white",
        titleColor: "black",
        bodyColor: "black",
        borderColor: "rgb(229, 231, 235)",
        borderWidth: 1,
        padding: 12,
        displayColors: false,
        callbacks: {
          label: function (context) {
            return `${context.parsed.y} ${selectedMetric === "quality" ? "%" : ""}`;
          },
        },
      },
    },
    scales: {
      y: {
        beginAtZero: false,
        grid: {
          color: "rgb(243, 244, 246)",
        },
      },
      x: {
        grid: {
          display: false,
        },
      },
    },
    interaction: {
      intersect: false,
      mode: "index",
    },
  };

  const stats = [
    { label: "Average Score", value: "86%", change: "+2.3%" },
    { label: "Analyses", value: "28", change: "+5" },
    { label: "Water Saved", value: "1,240L", change: "+180L" },
    { label: "Success Rate", value: "94%", change: "+1.2%" },
  ];

  return (
    <div className="p-4 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Analysis History</h1>
          <p className="text-gray-600">
            Track and analyze your water quality data
          </p>
        </div>
        <button className="p-2 rounded-lg bg-blue-50 text-blue-600">
          <Download className="w-5 h-5" />
        </button>
      </div>

      <div className="grid grid-cols-2 gap-4">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white p-4 rounded-xl shadow-sm">
            <p className="text-sm text-gray-600">{stat.label}</p>
            <div className="flex items-end justify-between mt-1">
              <p className="text-2xl font-bold text-gray-800">{stat.value}</p>
              <span
                className={`text-sm ${
                  stat.change.startsWith("+")
                    ? "text-green-600"
                    : "text-red-600"
                }`}
              >
                {stat.change}
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-xl p-6 shadow-sm">
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center space-x-4">
            <select
              value={selectedMetric}
              onChange={(e) => setSelectedMetric(e.target.value)}
              className="px-3 py-2 rounded-lg border border-gray-200 text-sm focus:ring-2 focus:ring-blue-500"
            >
              <option value="quality">Quality Score</option>
              <option value="turbidity">Turbidity</option>
              <option value="ph">pH Level</option>
            </select>
            <div className="flex items-center space-x-2 text-sm">
              <button
                onClick={() => setTimeRange("week")}
                className={`px-3 py-1 rounded-lg ${
                  timeRange === "week"
                    ? "bg-blue-50 text-blue-600"
                    : "text-gray-600"
                }`}
              >
                Week
              </button>
              <button
                onClick={() => setTimeRange("month")}
                className={`px-3 py-1 rounded-lg ${
                  timeRange === "month"
                    ? "bg-blue-50 text-blue-600"
                    : "text-gray-600"
                }`}
              >
                Month
              </button>
              <button
                onClick={() => setTimeRange("year")}
                className={`px-3 py-1 rounded-lg ${
                  timeRange === "year"
                    ? "bg-blue-50 text-blue-600"
                    : "text-gray-600"
                }`}
              >
                Year
              </button>
            </div>
          </div>
          <button className="p-2 rounded-lg hover:bg-gray-50">
            <Filter className="w-5 h-5 text-gray-400" />
          </button>
        </div>
        <Line data={chartData} options={options} className="h-64" />
      </div>

      <div className="space-y-4">
        <h2 className="font-semibold text-gray-800">Recent Analyses</h2>
        {[
          {
            date: "Today, 2:30 PM",
            score: 88,
            status: "Good",
            parameters: { turbidity: "2.1 NTU", ph: "7.2" },
          },
          {
            date: "Yesterday, 4:15 PM",
            score: 92,
            status: "Excellent",
            parameters: { turbidity: "1.9 NTU", ph: "7.1" },
          },
          {
            date: "2 days ago, 3:00 PM",
            score: 85,
            status: "Good",
            parameters: { turbidity: "2.3 NTU", ph: "7.3" },
          },
        ].map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white rounded-xl p-4 shadow-sm"
          >
            <div className="flex justify-between items-start">
              <div>
                <div className="flex items-center space-x-2">
                  <Calendar className="w-4 h-4 text-gray-400" />
                  <p className="text-gray-600">{item.date}</p>
                </div>
                <div className="mt-2 space-y-1">
                  <div className="flex items-center space-x-2">
                    <span className="text-sm text-gray-600">Turbidity:</span>
                    <span className="text-sm font-medium">
                      {item.parameters.turbidity}
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-sm text-gray-600">pH:</span>
                    <span className="text-sm font-medium">
                      {item.parameters.ph}
                    </span>
                  </div>
                </div>
              </div>
              <div className="text-right">
                <span
                  className={`px-3 py-1 rounded-full text-sm font-medium ${
                    item.status === "Excellent"
                      ? "bg-green-100 text-green-800"
                      : "bg-blue-100 text-blue-800"
                  }`}
                >
                  {item.score}%
                </span>
                <p className="text-sm text-gray-500 mt-1">{item.status}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
