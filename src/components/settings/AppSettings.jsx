import React from "react";
import { motion } from "framer-motion";
import { Settings2, Moon, Sun } from "lucide-react";

export default function AppSettings() {
  const [settings, setSettings] = React.useState({
    theme: "light",
    autoAnalysis: true,
    dataSync: true,
  });

  const handleSettingChange = (key, value) => {
    setSettings((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-6 p-4"
    >
      <div className="flex items-center space-x-3 mb-4">
        <Settings2 className="w-6 h-6 text-blue-500" />
        <h2 className="text-xl font-semibold">App Settings</h2>
      </div>

      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Theme
          </label>
          <div className="flex space-x-4">
            <button
              onClick={() => handleSettingChange("theme", "light")}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg ${
                settings.theme === "light"
                  ? "bg-blue-500 text-white"
                  : "bg-gray-100 text-gray-700"
              }`}
            >
              <Sun className="w-4 h-4" />
              <span>Light</span>
            </button>
            <button
              onClick={() => handleSettingChange("theme", "dark")}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg ${
                settings.theme === "dark"
                  ? "bg-blue-500 text-white"
                  : "bg-gray-100 text-gray-700"
              }`}
            >
              <Moon className="w-4 h-4" />
              <span>Dark</span>
            </button>
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium text-gray-800">Automatic Analysis</p>
              <p className="text-sm text-gray-600">
                Enable automatic water quality analysis
              </p>
            </div>
            <button
              onClick={() =>
                handleSettingChange("autoAnalysis", !settings.autoAnalysis)
              }
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                settings.autoAnalysis ? "bg-blue-500" : "bg-gray-200"
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  settings.autoAnalysis ? "translate-x-6" : "translate-x-1"
                }`}
              />
            </button>
          </div>

          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium text-gray-800">Data Synchronization</p>
              <p className="text-sm text-gray-600">
                Keep your data synced across devices
              </p>
            </div>
            <button
              onClick={() =>
                handleSettingChange("dataSync", !settings.dataSync)
              }
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                settings.dataSync ? "bg-blue-500" : "bg-gray-200"
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  settings.dataSync ? "translate-x-6" : "translate-x-1"
                }`}
              />
            </button>
          </div>
        </div>
      </div>

      <button className="w-full bg-blue-500 text-white py-3 rounded-lg font-medium hover:bg-blue-600 transition-colors">
        Save Changes
      </button>
    </motion.div>
  );
}
