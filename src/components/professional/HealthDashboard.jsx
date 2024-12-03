import React from "react";
import { motion } from "framer-motion";
import {
  Users,
  AlertTriangle,
  CheckCircle,
  FileText,
  Calendar,
  TrendingUp,
} from "lucide-react";

export default function HealthDashboard() {
  const stats = [
    {
      label: "Monitored Restaurants",
      value: "124",
      icon: Users,
      color: "blue",
    },
    {
      label: "Pending Reviews",
      value: "8",
      icon: AlertTriangle,
      color: "yellow",
    },
    {
      label: "Certifications Issued",
      value: "96",
      icon: CheckCircle,
      color: "green",
    },
  ];

  const recentInspections = [
    {
      restaurant: "Warung Sehat Sejahtera",
      date: "Today",
      status: "Passed",
      score: 92,
    },
    {
      restaurant: "Rumah Makan Barokah",
      date: "Yesterday",
      status: "Review Required",
      score: 78,
    },
    {
      restaurant: "Kedai Makan Berkah",
      date: "2 days ago",
      status: "Passed",
      score: 88,
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
            Health Department Dashboard
          </h1>
          <p className="text-gray-600">
            Monitor and manage food establishments
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
          <div key={index} className={`bg-${stat.color}-50 p-4 rounded-xl`}>
            <stat.icon className={`w-8 h-8 text-${stat.color}-500 mb-2`} />
            <p className={`text-${stat.color}-900 font-medium`}>{stat.label}</p>
            <p className={`text-2xl font-bold text-${stat.color}-700`}>
              {stat.value}
            </p>
          </div>
        ))}
      </motion.div>

      <div className="grid grid-cols-2 gap-6">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-xl p-4 shadow-sm"
        >
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-semibold text-gray-800">Recent Inspections</h2>
            <FileText className="w-5 h-5 text-gray-400" />
          </div>
          <div className="space-y-4">
            {recentInspections.map((inspection, index) => (
              <div key={index} className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-gray-800">
                    {inspection.restaurant}
                  </p>
                  <p className="text-sm text-gray-500">{inspection.date}</p>
                </div>
                <span
                  className={`px-2 py-1 rounded-full text-sm font-medium ${
                    inspection.status === "Passed"
                      ? "bg-green-100 text-green-800"
                      : "bg-yellow-100 text-yellow-800"
                  }`}
                >
                  {inspection.score}%
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="bg-white rounded-xl p-4 shadow-sm"
        >
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-semibold text-gray-800">Upcoming Reviews</h2>
            <Calendar className="w-5 h-5 text-gray-400" />
          </div>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium text-gray-800">
                  Scheduled Inspections
                </p>
                <p className="text-sm text-gray-500">Next 7 days</p>
              </div>
              <span className="text-2xl font-bold text-blue-600">12</span>
            </div>
            <button className="w-full bg-blue-50 text-blue-600 py-2 rounded-lg text-sm font-medium">
              View Schedule
            </button>
          </div>
        </motion.div>
      </div>

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
        <div className="grid grid-cols-2 gap-4">
          <button className="p-4 bg-blue-50 rounded-lg text-left">
            <FileText className="w-6 h-6 text-blue-600 mb-2" />
            <p className="font-medium text-blue-900">New Inspection</p>
          </button>
          <button className="p-4 bg-green-50 rounded-lg text-left">
            <CheckCircle className="w-6 h-6 text-green-600 mb-2" />
            <p className="font-medium text-green-900">Issue Certificate</p>
          </button>
        </div>
      </motion.div>
    </div>
  );
}
