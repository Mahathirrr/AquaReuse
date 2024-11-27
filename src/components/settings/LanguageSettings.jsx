import React from "react";
import { motion } from "framer-motion";
import { Languages } from "lucide-react";

export default function LanguageSettings() {
  const [selectedLanguage, setSelectedLanguage] = React.useState("en");

  const languages = [
    { code: "en", name: "English", flag: "🇺🇸" },
    { code: "es", name: "Español", flag: "🇪🇸" },
    { code: "fr", name: "Français", flag: "🇫🇷" },
    { code: "de", name: "Deutsch", flag: "🇩🇪" },
    { code: "it", name: "Italiano", flag: "🇮🇹" },
    { code: "pt", name: "Português", flag: "🇵🇹" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-6 p-4"
    >
      <div className="flex items-center space-x-3 mb-4">
        <Languages className="w-6 h-6 text-blue-500" />
        <h2 className="text-xl font-semibold">Language Settings</h2>
      </div>

      <div className="space-y-4">
        {languages.map((language) => (
          <button
            key={language.code}
            onClick={() => setSelectedLanguage(language.code)}
            className={`w-full flex items-center justify-between p-4 rounded-lg border ${
              selectedLanguage === language.code
                ? "border-blue-500 bg-blue-50"
                : "border-gray-200"
            }`}
          >
            <div className="flex items-center space-x-3">
              <span className="text-2xl">{language.flag}</span>
              <span className="font-medium text-gray-800">{language.name}</span>
            </div>
            {selectedLanguage === language.code && (
              <div className="w-4 h-4 rounded-full bg-blue-500" />
            )}
          </button>
        ))}
      </div>

      <button className="w-full bg-blue-500 text-white py-3 rounded-lg font-medium hover:bg-blue-600 transition-colors">
        Apply Changes
      </button>
    </motion.div>
  );
}
