import React from "react";
import { motion } from "framer-motion";
import { FileSpreadsheet } from "lucide-react";

export default function AnalysisList() {
  const recentAnalyses = [
    {
      restaurant: "Warung Sehat Sejahtera",
      date: "Today",
      parameters: {
        ph: "7.2",
        turbidity: "2.1 NTU",
        tds: "450 ppm",
      },
      status: "Normal",
    },
    {
      restaurant: "Rumah Makan Barokah",
      date: "Yesterday",
      parameters: {
        ph: "8.1",
        turbidity: "4.5 NTU",
        tds: "850 ppm",
      },
      status: "Attention Required",
    },
    {
      restaurant: "Kedai Makan Berkah",
      date: "2 days ago",
      parameters: {
        ph: "7.4",
        turbidity: "2.3 NTU",
        tds: "520 ppm",
      },
      status: "Normal",
    },
  ];

  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.2 }}
      className="bg-white rounded-xl p-4 shadow-sm"
    >
      <div className="flex items-center justify-between mb-4">
        <h2 className="font-semibold text-gray-800">Recent Analyses</h2>
        <FileSpreadsheet className="w-5 h-5 text-gray-400" />
      </div>
      <div className="space-y-4">
        {recentAnalyses.map((analysis, index) => (
          <div key={index} className="p-3 bg-gray-50 rounded-lg">
            <div className="flex justify-between items-start mb-2">
              <div>
                <p className="font-medium text-gray-800">
                  {analysis.restaurant}
                </p>
                <p className="text-sm text-gray-500">{analysis.date}</p>
              </div>
              <span
                className={`px-2 py-1 rounded-full text-sm font-medium ${
                  analysis.status === "Normal"
                    ? "bg-green-100 text-green-800"
                    : "bg-red-100 text-red-800"
                }`}
              >
                {analysis.status}
              </span>
            </div>
            <div className="grid grid-cols-3 gap-2 text-sm">
              <div>
                <p className="text-gray-600">pH</p>
                <p className="font-medium">{analysis.parameters.ph}</p>
              </div>
              <div>
                <p className="text-gray-600">Turbidity</p>
                <p className="font-medium">{analysis.parameters.turbidity}</p>
              </div>
              <div>
                <p className="text-gray-600">TDS</p>
                <p className="font-medium">{analysis.parameters.tds}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
