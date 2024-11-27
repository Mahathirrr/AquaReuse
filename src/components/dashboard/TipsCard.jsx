import React from 'react';
import { motion } from 'framer-motion';
import { LightBulbIcon } from '@heroicons/react/24/solid';

function TipsCard() {
  const tips = [
    "Pre-rinse vegetables in cold water",
    "Use a water quality meter regularly",
    "Store filtered water properly"
  ];

  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.35 }}
      className="bg-white rounded-xl p-4 shadow-sm"
    >
      <div className="flex items-center space-x-3 mb-3">
        <LightBulbIcon className="h-6 w-6 text-yellow-500" />
        <h3 className="font-semibold text-gray-800">Daily Tips</h3>
      </div>
      <ul className="space-y-2">
        {tips.map((tip, index) => (
          <li key={index} className="text-sm text-gray-600 flex items-center space-x-2">
            <span className="w-1.5 h-1.5 bg-yellow-400 rounded-full"></span>
            <span>{tip}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

export default TipsCard;