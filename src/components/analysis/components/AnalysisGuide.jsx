import React from "react";
import { InformationCircleIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";

export default function AnalysisGuide() {
  return (
    <motion.div
      key="guide"
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -20, opacity: 0 }}
      className="space-y-6"
    >
      <div className="bg-white rounded-xl p-6 shadow-sm">
        <div className="flex items-center space-x-3 mb-4">
          <InformationCircleIcon className="h-6 w-6 text-blue-500" />
          <h2 className="text-lg font-semibold">Analysis Guidelines</h2>
        </div>
        <ul className="space-y-4">
          <li className="flex items-start">
            <span className="bg-blue-100 text-blue-600 rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1">
              1
            </span>
            <div>
              <p className="text-gray-700 font-medium">Collect Sample</p>
              <p className="text-gray-600 text-sm">
                Gather water after vegetable washing in a clear container
              </p>
            </div>
          </li>
          <li className="flex items-start">
            <span className="bg-blue-100 text-blue-600 rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1">
              2
            </span>
            <div>
              <p className="text-gray-700 font-medium">Lighting</p>
              <p className="text-gray-600 text-sm">
                Ensure good, even lighting without shadows
              </p>
            </div>
          </li>
          <li className="flex items-start">
            <span className="bg-blue-100 text-blue-600 rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1">
              3
            </span>
            <div>
              <p className="text-gray-700 font-medium">Position</p>
              <p className="text-gray-600 text-sm">
                Place container against a white background
              </p>
            </div>
          </li>
        </ul>
      </div>
    </motion.div>
  );
}
