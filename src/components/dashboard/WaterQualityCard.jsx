import React from 'react';
import { motion } from 'framer-motion';
import { BeakerIcon } from '../icons';

function WaterQualityCard() {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.15 }}
      className="bg-white rounded-xl p-4 shadow-sm"
    >
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-semibold text-gray-800">Latest Water Quality</h3>
        <BeakerIcon className="h-6 w-6 text-blue-500" />
      </div>
      <div className="flex items-center justify-between">
        <div className="space-y-1">
          <p className="text-sm text-gray-600">Quality Score</p>
          <p className="text-2xl font-bold text-blue-600">92%</p>
        </div>
        <div className="text-right">
          <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
            Excellent
          </span>
          <p className="text-sm text-gray-500 mt-1">2 hours ago</p>
        </div>
      </div>
    </motion.div>
  );
}

export default WaterQualityCard;