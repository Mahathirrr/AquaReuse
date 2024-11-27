import React from 'react';
import { motion } from 'framer-motion';
import { ClockIcon } from '@heroicons/react/24/solid';

function NextAnalysisCard() {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.3 }}
      className="bg-white rounded-xl p-4 shadow-sm"
    >
      <div className="flex items-center space-x-3 mb-3">
        <ClockIcon className="h-6 w-6 text-blue-500" />
        <h3 className="font-semibold text-gray-800">Next Scheduled Analysis</h3>
      </div>
      <div className="flex justify-between items-center">
        <div>
          <p className="text-gray-600">Today</p>
          <p className="text-sm text-gray-500">4:00 PM</p>
        </div>
        <button className="bg-blue-50 text-blue-600 px-4 py-2 rounded-lg text-sm font-medium">
          Set Reminder
        </button>
      </div>
    </motion.div>
  );
}

export default NextAnalysisCard;