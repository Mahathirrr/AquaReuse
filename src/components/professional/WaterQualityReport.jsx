import React from "react";
import { motion } from "framer-motion";
import {
  Download,
  Share2,
  FileText,
  CheckCircle,
  AlertTriangle,
  XCircle,
} from "lucide-react";

export default function WaterQualityReport() {
  const reportData = {
    restaurantName: "Warung Sehat Sejahtera",
    date: "2024-01-15",
    inspectorName: "Dr. Sarah Johnson",
    overallScore: 92,
    parameters: [
      {
        name: "pH Level",
        value: 7.2,
        status: "optimal",
        recommendation: "Maintain current practices",
      },
      {
        name: "Turbidity",
        value: 2.1,
        unit: "NTU",
        status: "good",
        recommendation: "Consider minor filtration improvements",
      },
      {
        name: "Total Dissolved Solids",
        value: 450,
        unit: "ppm",
        status: "optimal",
        recommendation: "Continue monitoring",
      },
      {
        name: "Chemical Oxygen Demand",
        value: 180,
        unit: "mg/L",
        status: "attention",
        recommendation: "Implement additional treatment steps",
      },
    ],
    recommendations: [
      "Maintain current water treatment protocol",
      "Schedule regular equipment maintenance",
      "Consider upgrading filtration system within 6 months",
      "Implement staff training on water quality monitoring",
    ],
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "optimal":
        return "green";
      case "good":
        return "blue";
      case "attention":
        return "yellow";
      default:
        return "red";
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case "optimal":
        return CheckCircle;
      case "good":
        return CheckCircle;
      case "attention":
        return AlertTriangle;
      default:
        return XCircle;
    }
  };

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="flex items-center justify-between mb-6"
      >
        <div>
          <h1 className="text-2xl font-bold text-gray-800">
            Water Quality Report
          </h1>
          <p className="text-gray-600">Detailed analysis and recommendations</p>
        </div>
        <div className="flex space-x-2">
          <button className="p-2 rounded-lg bg-gray-100 text-gray-600">
            <Share2 className="w-5 h-5" />
          </button>
          <button className="p-2 rounded-lg bg-blue-500 text-white">
            <Download className="w-5 h-5" />
          </button>
        </div>
      </motion.div>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.1 }}
        className="bg-white rounded-xl p-6 shadow-sm mb-6"
      >
        <div className="grid grid-cols-2 gap-6">
          <div>
            <p className="text-sm text-gray-600">Restaurant</p>
            <p className="font-semibold text-gray-800">
              {reportData.restaurantName}
            </p>
          </div>
          <div>
            <p className="text-sm text-gray-600">Inspection Date</p>
            <p className="font-semibold text-gray-800">{reportData.date}</p>
          </div>
          <div>
            <p className="text-sm text-gray-600">Inspector</p>
            <p className="font-semibold text-gray-800">
              {reportData.inspectorName}
            </p>
          </div>
          <div>
            <p className="text-sm text-gray-600">Overall Score</p>
            <p className="font-semibold text-green-600">
              {reportData.overallScore}%
            </p>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="bg-white rounded-xl p-6 shadow-sm mb-6"
      >
        <h2 className="text-lg font-semibold text-gray-800 mb-4">
          Water Parameters
        </h2>
        <div className="space-y-4">
          {reportData.parameters.map((param, index) => {
            const StatusIcon = getStatusIcon(param.status);
            const statusColor = getStatusColor(param.status);

            return (
              <div key={index} className="border rounded-lg p-4">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <p className="font-medium text-gray-800">{param.name}</p>
                    <p className="text-2xl font-bold text-gray-800">
                      {param.value}
                      {param.unit && (
                        <span className="text-sm text-gray-500 ml-1">
                          {param.unit}
                        </span>
                      )}
                    </p>
                  </div>
                  <StatusIcon className={`w-6 h-6 text-${statusColor}-500`} />
                </div>
                <p className="text-sm text-gray-600">{param.recommendation}</p>
              </div>
            );
          })}
        </div>
      </motion.div>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="bg-white rounded-xl p-6 shadow-sm"
      >
        <div className="flex items-center space-x-3 mb-4">
          <FileText className="w-6 h-6 text-blue-500" />
          <h2 className="text-lg font-semibold text-gray-800">
            Recommendations
          </h2>
        </div>
        <ul className="space-y-3">
          {reportData.recommendations.map((rec, index) => (
            <li key={index} className="flex items-start space-x-3">
              <span className="w-6 h-6 bg-blue-50 rounded-full flex items-center justify-center text-blue-600 font-medium">
                {index + 1}
              </span>
              <span className="text-gray-700">{rec}</span>
            </li>
          ))}
        </ul>
      </motion.div>
    </div>
  );
}
