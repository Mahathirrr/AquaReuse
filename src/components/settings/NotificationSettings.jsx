import React from "react";
import { motion } from "framer-motion";
import { Bell } from "lucide-react";

export default function NotificationSettings() {
  const [notifications, setNotifications] = React.useState({
    waterQuality: true,
    maintenance: true,
    tips: false,
    updates: true,
  });

  const toggleNotification = (key) => {
    setNotifications((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-6 p-4"
    >
      <div className="flex items-center space-x-3 mb-4">
        <Bell className="w-6 h-6 text-blue-500" />
        <h2 className="text-xl font-semibold">Notification Preferences</h2>
      </div>

      <div className="space-y-4">
        {Object.entries(notifications).map(([key, enabled]) => (
          <div key={key} className="flex items-center justify-between">
            <div>
              <p className="font-medium text-gray-800">
                {key.charAt(0).toUpperCase() +
                  key.slice(1).replace(/([A-Z])/g, " $1")}
              </p>
              <p className="text-sm text-gray-600">
                Receive notifications about {key.toLowerCase()}
              </p>
            </div>
            <button
              onClick={() => toggleNotification(key)}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                enabled ? "bg-blue-500" : "bg-gray-200"
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  enabled ? "translate-x-6" : "translate-x-1"
                }`}
              />
            </button>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
