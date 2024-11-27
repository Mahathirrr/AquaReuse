import React from "react";
import { motion } from "framer-motion";
import { UserCircle, Bell, Languages, Settings2, LogOut } from "lucide-react";
import ProfileSettings from "./settings/ProfileSettings";
import NotificationSettings from "./settings/NotificationSettings";
import AppSettings from "./settings/AppSettings";

function Settings() {
  const [activeSection, setActiveSection] = React.useState(null);

  const renderContent = () => {
    switch (activeSection) {
      case "profile":
        return <ProfileSettings />;
      case "notifications":
        return <NotificationSettings />;
      case "app":
        return <AppSettings />;
      default:
        return (
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="space-y-4"
          >
            <div className="bg-white rounded-xl shadow-sm">
              <button
                onClick={() => setActiveSection("profile")}
                className="w-full p-4 flex items-center space-x-4"
              >
                <UserCircle className="h-6 w-6 text-gray-600" />
                <div className="flex-1 text-left">
                  <p className="font-medium text-gray-800">Profile Settings</p>
                  <p className="text-sm text-gray-600">
                    Update your personal information
                  </p>
                </div>
              </button>

              <button
                onClick={() => setActiveSection("notifications")}
                className="w-full p-4 flex items-center space-x-4 border-t border-gray-100"
              >
                <Bell className="h-6 w-6 text-gray-600" />
                <div className="flex-1 text-left">
                  <p className="font-medium text-gray-800">Notifications</p>
                  <p className="text-sm text-gray-600">
                    Configure alert preferences
                  </p>
                </div>
              </button>

              <button
                onClick={() => setActiveSection("language")}
                className="w-full p-4 flex items-center space-x-4 border-t border-gray-100"
              >
                <Languages className="h-6 w-6 text-gray-600" />
                <div className="flex-1 text-left">
                  <p className="font-medium text-gray-800">Language</p>
                  <p className="text-sm text-gray-600">
                    Choose your preferred language
                  </p>
                </div>
              </button>

              <button
                onClick={() => setActiveSection("app")}
                className="w-full p-4 flex items-center space-x-4 border-t border-gray-100"
              >
                <Settings2 className="h-6 w-6 text-gray-600" />
                <div className="flex-1 text-left">
                  <p className="font-medium text-gray-800">App Settings</p>
                  <p className="text-sm text-gray-600">
                    General app configuration
                  </p>
                </div>
              </button>
            </div>

            <div className="bg-white rounded-xl p-4 shadow-sm">
              <h2 className="font-semibold text-gray-800 mb-2">About</h2>
              <p className="text-sm text-gray-600">Version 1.0.0</p>
            </div>

            <button className="w-full bg-red-50 text-red-600 py-3 rounded-xl font-medium flex items-center justify-center space-x-2">
              <LogOut className="w-5 h-5" />
              <span>Sign Out</span>
            </button>
          </motion.div>
        );
    }
  };

  return (
    <div className="p-4">
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="mb-6 flex items-center justify-between"
      >
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Settings</h1>
          <p className="text-gray-600">Manage your preferences</p>
        </div>
        {activeSection && (
          <button
            onClick={() => setActiveSection(null)}
            className="text-blue-500 font-medium"
          >
            Back
          </button>
        )}
      </motion.div>

      {renderContent()}
    </div>
  );
}

export default Settings;
