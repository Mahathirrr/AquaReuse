import React from 'react';
import { motion } from 'framer-motion';
import {
  BellIcon,
  LanguageIcon,
  UserCircleIcon,
  CogIcon
} from '@heroicons/react/24/outline';

function Settings() {
  return (
    <div className="p-4">
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="mb-6"
      >
        <h1 className="text-2xl font-bold text-gray-800">Settings</h1>
        <p className="text-gray-600">Manage your preferences</p>
      </motion.div>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.1 }}
        className="space-y-4"
      >
        <div className="bg-white rounded-xl shadow-sm">
          <button className="w-full p-4 flex items-center space-x-4">
            <UserCircleIcon className="h-6 w-6 text-gray-600" />
            <div className="flex-1 text-left">
              <p className="font-medium text-gray-800">Profile Settings</p>
              <p className="text-sm text-gray-600">Update your personal information</p>
            </div>
          </button>

          <button className="w-full p-4 flex items-center space-x-4 border-t border-gray-100">
            <BellIcon className="h-6 w-6 text-gray-600" />
            <div className="flex-1 text-left">
              <p className="font-medium text-gray-800">Notifications</p>
              <p className="text-sm text-gray-600">Configure alert preferences</p>
            </div>
          </button>

          <button className="w-full p-4 flex items-center space-x-4 border-t border-gray-100">
            <LanguageIcon className="h-6 w-6 text-gray-600" />
            <div className="flex-1 text-left">
              <p className="font-medium text-gray-800">Language</p>
              <p className="text-sm text-gray-600">Choose your preferred language</p>
            </div>
          </button>

          <button className="w-full p-4 flex items-center space-x-4 border-t border-gray-100">
            <CogIcon className="h-6 w-6 text-gray-600" />
            <div className="flex-1 text-left">
              <p className="font-medium text-gray-800">App Settings</p>
              <p className="text-sm text-gray-600">General app configuration</p>
            </div>
          </button>
        </div>

        <div className="bg-white rounded-xl p-4 shadow-sm">
          <h2 className="font-semibold text-gray-800 mb-2">About</h2>
          <p className="text-sm text-gray-600">Version 1.0.0</p>
        </div>

        <button className="w-full bg-red-50 text-red-600 py-3 rounded-xl font-medium">
          Sign Out
        </button>
      </motion.div>
    </div>
  );
}

export default Settings;