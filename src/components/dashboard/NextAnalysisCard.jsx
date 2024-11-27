import React, { useState } from "react";
import { motion } from "framer-motion";
import { ClockIcon } from "@heroicons/react/24/solid";

function NextAnalysisCard() {
  const [showNotification, setShowNotification] = useState(false);

  const handleSetReminder = () => {
    setShowNotification(true);
    // Here you would typically set up a real notification
    setTimeout(() => {
      setShowNotification(false);
    }, 3000);
  };

  return (
    <>
      {showNotification && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="fixed top-4 left-4 right-4 bg-green-100 text-green-800 p-4 rounded-lg shadow-md z-50"
        >
          Reminder set for next analysis at 4:00 PM
        </motion.div>
      )}

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="bg-white rounded-xl p-4 shadow-sm"
      >
        <div className="flex items-center space-x-3 mb-3">
          <ClockIcon className="h-6 w-6 text-blue-500" />
          <h3 className="font-semibold text-gray-800">
            Next Scheduled Analysis
          </h3>
        </div>
        <div className="flex justify-between items-center">
          <div>
            <p className="text-gray-600">Today</p>
            <p className="text-sm text-gray-500">4:00 PM</p>
          </div>
          <button
            onClick={handleSetReminder}
            className="bg-blue-50 text-blue-600 px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-100 transition-colors"
          >
            Set Reminder
          </button>
        </div>
      </motion.div>
    </>
  );
}

export default NextAnalysisCard;

