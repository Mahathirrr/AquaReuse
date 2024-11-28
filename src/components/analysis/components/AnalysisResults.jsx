import React from "react";
import { motion } from "framer-motion";
import { getQualityLevel, getRecommendations } from "../utils/qualityUtils";
import { QUALITY_LEVELS } from "../constants/qualityLevels";
import { WATER_PARAMETERS } from "../constants/waterParameters";

export default function AnalysisResults({ qualityScore, onReset }) {
  const currentLevel = getQualityLevel(qualityScore);

  return (
    <motion.div
      key="complete"
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -20, opacity: 0 }}
      className="space-y-6"
    >
      <div className="bg-white rounded-xl p-6 shadow-sm">
        <div className="flex items-center space-x-3 mb-6">
          {React.createElement(currentLevel.icon, {
            className: `h-8 w-8 text-${currentLevel.color}-500`,
          })}
          <div>
            <h2 className="text-lg font-semibold">Analysis Results</h2>
            <p className="text-sm text-gray-600">
              Based on vegetable wash water standards
            </p>
          </div>
        </div>

        <div className="space-y-6">
          <div className={`bg-${currentLevel.color}-50 p-4 rounded-lg`}>
            <div className="flex justify-between items-center mb-2">
              <p className={`text-${currentLevel.color}-800 font-medium`}>
                Quality Score
              </p>
              <span
                className={`px-3 py-1 bg-${currentLevel.color}-100 text-${currentLevel.color}-800 rounded-full text-sm font-medium`}
              >
                {currentLevel.label}
              </span>
            </div>
            <p className={`text-4xl font-bold text-${currentLevel.color}-600`}>
              {qualityScore}%
            </p>
            <p className={`text-${currentLevel.color}-700 text-sm mt-1`}>
              {currentLevel.description}
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="font-medium text-gray-800">
              Quality Level Criteria
            </h3>
            <div className="grid gap-4">
              {Object.entries(QUALITY_LEVELS).map(([key, level]) => (
                <div
                  key={key}
                  className={`p-3 rounded-lg ${
                    currentLevel.label === level.label
                      ? `bg-${level.color}-50 border-2 border-${level.color}-200`
                      : "bg-gray-50"
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span
                      className={`text-sm font-medium text-${level.color}-700`}
                    >
                      {level.label} ({level.range[0]}-{level.range[1]}%)
                    </span>
                    {React.createElement(level.icon, {
                      className: `h-5 w-5 text-${level.color}-500`,
                    })}
                  </div>
                  <ul className="space-y-1">
                    {level.criteria.map((criterion, index) => (
                      <li
                        key={index}
                        className="text-sm text-gray-600 flex items-center space-x-2"
                      >
                        <span
                          className={`w-1.5 h-1.5 rounded-full bg-${level.color}-400`}
                        />
                        <span>{criterion}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-medium text-gray-800">Water Parameters</h3>
            <div className="grid gap-4">
              {Object.entries(WATER_PARAMETERS).map(([key, param]) => (
                <div key={key} className="bg-gray-50 p-4 rounded-lg">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <p className="font-medium text-gray-800">{param.label}</p>
                      <p className="text-lg font-semibold">
                        {param.value}
                        <span className="text-sm text-gray-500 ml-1">
                          {param.unit}
                        </span>
                      </p>
                    </div>
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium bg-${param.status}-100 text-${param.status}-800`}
                    >
                      {param.status}
                    </span>
                  </div>
                  <div className="mt-2 space-y-1">
                    <p className="text-sm text-gray-600 font-medium">
                      Thresholds:
                    </p>
                    {Object.entries(param.thresholds).map(
                      ([level, threshold]) => (
                        <div
                          key={level}
                          className="flex items-center space-x-2 text-sm"
                        >
                          <span
                            className={`w-2 h-2 rounded-full bg-${level === "excellent" ? "green" : level === "good" ? "blue" : level === "moderate" ? "yellow" : "red"}-400`}
                          />
                          <span className="text-gray-600">
                            {level}: {threshold}
                          </span>
                        </div>
                      ),
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-3">
            <h3 className="font-medium text-gray-800">Recommendations</h3>
            <ul className="space-y-2">
              {getRecommendations(qualityScore).map((rec, index) => (
                <li
                  key={index}
                  className="text-gray-600 flex items-start space-x-2"
                >
                  <span>{rec}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="border-t pt-4">
            <h3 className="font-medium text-gray-800 mb-2">
              Storage Guidelines
            </h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• Store in clean, covered containers</li>
              <li>• Use within 24 hours</li>
              <li>• Keep away from direct sunlight</li>
              <li>• Monitor for any changes in appearance</li>
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
