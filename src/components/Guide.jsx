import React from 'react';
import { motion } from 'framer-motion';
import { BookOpenIcon, BeakerIcon, ArrowPathIcon } from '@heroicons/react/24/solid';

function Guide() {
  return (
    <div className="p-4">
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="mb-6"
      >
        <h1 className="text-2xl font-bold text-gray-800">User Guide</h1>
        <p className="text-gray-600">Learn how to use water efficiently</p>
      </motion.div>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.1 }}
        className="space-y-4"
      >
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <div className="flex items-center space-x-4 mb-4">
            <BeakerIcon className="h-8 w-8 text-blue-600" />
            <h2 className="text-lg font-semibold">Vegetable Washing</h2>
          </div>
          <ul className="space-y-3 text-gray-700">
            <li>1. Pre-rinse vegetables thoroughly</li>
            <li>2. Use clean container for washing</li>
            <li>3. Collect used water for analysis</li>
            <li>4. Follow app recommendations</li>
          </ul>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm">
          <div className="flex items-center space-x-4 mb-4">
            <ArrowPathIcon className="h-8 w-8 text-green-600" />
            <h2 className="text-lg font-semibold">Water Reuse Tips</h2>
          </div>
          <ul className="space-y-3 text-gray-700">
            <li>• Use for non-food cleaning</li>
            <li>• Water plants and gardens</li>
            <li>• Flush toilets</li>
            <li>• Clean outdoor areas</li>
          </ul>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm">
          <div className="flex items-center space-x-4 mb-4">
            <BookOpenIcon className="h-8 w-8 text-purple-600" />
            <h2 className="text-lg font-semibold">Best Practices</h2>
          </div>
          <ul className="space-y-3 text-gray-700">
            <li>• Regular water quality checks</li>
            <li>• Proper storage methods</li>
            <li>• Maintenance of filters</li>
            <li>• Documentation of results</li>
          </ul>
        </div>
      </motion.div>
    </div>
  );
}

export default Guide;