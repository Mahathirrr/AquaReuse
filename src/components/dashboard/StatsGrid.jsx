import React from 'react';
import { motion } from 'framer-motion';
import { ArrowTrendingUpIcon, ClockIcon } from '@heroicons/react/24/solid';

function StatsGrid() {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.25 }}
      className="grid grid-cols-2 gap-4"
    >
      <div className="bg-indigo-100 p-4 rounded-xl">
        <ArrowTrendingUpIcon className="h-8 w-8 text-indigo-600 mb-2" />
        <h3 className="font-semibold text-indigo-800">Monthly Savings</h3>
        <p className="text-sm text-indigo-600">1,240L saved</p>
      </div>
      <div className="bg-rose-100 p-4 rounded-xl">
        <ClockIcon className="h-8 w-8 text-rose-600 mb-2" />
        <h3 className="font-semibold text-rose-800">Usage Time</h3>
        <p className="text-sm text-rose-600">4.5 hours today</p>
      </div>
    </motion.div>
  );
}

export default StatsGrid;