import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Award, Gift, Trophy, TrendingUp, ChevronRight } from "lucide-react";

export default function RewardsScreen() {
  const [selectedReward, setSelectedReward] = useState(null);

  const rewards = [
    {
      icon: Trophy,
      title: "Water Saver",
      description: "Save 1000L of water",
      progress: 70,
      points: 100,
      details: {
        benefits: [
          "10% discount on next water bill",
          "Special badge on profile",
          "Access to exclusive tips",
        ],
        requirements: [
          "Save 1000L of water through reuse",
          "Maintain 80% quality score",
          "Complete 30 analyses",
        ],
        milestones: [
          { target: "250L", achieved: true },
          { target: "500L", achieved: true },
          { target: "750L", achieved: false },
          { target: "1000L", achieved: false },
        ],
      },
    },
    {
      icon: Award,
      title: "Eco Warrior",
      description: "Complete 50 analyses",
      progress: 45,
      points: 200,
      details: {
        benefits: [
          "Premium features unlock",
          "Community leader badge",
          "Monthly newsletter feature",
        ],
        requirements: [
          "50 successful water analyses",
          "Share 20 tips with community",
          "90% accuracy rate",
        ],
        milestones: [
          { target: "10 analyses", achieved: true },
          { target: "25 analyses", achieved: true },
          { target: "40 analyses", achieved: false },
          { target: "50 analyses", achieved: false },
        ],
      },
    },
    {
      icon: TrendingUp,
      title: "Consistency King",
      description: "7-day streak",
      progress: 85,
      points: 150,
      details: {
        benefits: [
          "Double points week",
          "Exclusive profile frame",
          "Early access to features",
        ],
        requirements: [
          "Daily water analysis",
          "Maintain quality above 85%",
          "Share daily insights",
        ],
        milestones: [
          { target: "3 days", achieved: true },
          { target: "5 days", achieved: true },
          { target: "6 days", achieved: true },
          { target: "7 days", achieved: false },
        ],
      },
    },
  ];

  const badges = [
    { name: "Novice Analyst", achieved: true },
    { name: "Water Guardian", achieved: true },
    { name: "Sustainability Expert", achieved: false },
    { name: "Master Recycler", achieved: false },
  ];

  return (
    <div className="p-4 space-y-6">
      <AnimatePresence>
        {selectedReward && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedReward(null)}
          >
            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              className="bg-white rounded-xl p-6 w-full max-w-md"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center space-x-4 mb-6">
                <div className="p-3 bg-blue-50 rounded-lg">
                  <selectedReward.icon className="w-8 h-8 text-blue-500" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">
                    {selectedReward.title}
                  </h3>
                  <p className="text-gray-600">{selectedReward.description}</p>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="font-medium text-gray-800 mb-2">Benefits</h4>
                  <ul className="space-y-2">
                    {selectedReward.details.benefits.map((benefit, index) => (
                      <li
                        key={index}
                        className="flex items-center space-x-2 text-gray-600"
                      >
                        <span className="w-1.5 h-1.5 bg-green-400 rounded-full"></span>
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-medium text-gray-800 mb-2">
                    Requirements
                  </h4>
                  <ul className="space-y-2">
                    {selectedReward.details.requirements.map((req, index) => (
                      <li
                        key={index}
                        className="flex items-center space-x-2 text-gray-600"
                      >
                        <span className="w-1.5 h-1.5 bg-blue-400 rounded-full"></span>
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-medium text-gray-800 mb-2">Progress</h4>
                  <div className="space-y-3">
                    {selectedReward.details.milestones.map(
                      (milestone, index) => (
                        <div
                          key={index}
                          className="flex items-center justify-between"
                        >
                          <span className="text-sm text-gray-600">
                            {milestone.target}
                          </span>
                          <span
                            className={`text-sm ${milestone.achieved ? "text-green-500" : "text-gray-400"}`}
                          >
                            {milestone.achieved ? "✓" : "Pending"}
                          </span>
                        </div>
                      ),
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="flex items-center justify-between"
      >
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Rewards</h1>
          <p className="text-gray-600">Track your achievements</p>
        </div>
        <div className="flex items-center space-x-2 bg-blue-50 px-4 py-2 rounded-lg">
          <Gift className="w-5 h-5 text-blue-500" />
          <span className="font-medium text-blue-700">450 pts</span>
        </div>
      </motion.div>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.1 }}
        className="space-y-4"
      >
        <h2 className="font-semibold text-gray-800">Current Challenges</h2>
        {rewards.map((reward, index) => (
          <div
            key={index}
            className="bg-white rounded-xl p-4 shadow-sm"
            onClick={() => setSelectedReward(reward)}
          >
            <div className="flex items-start space-x-4">
              <div className="p-3 bg-blue-50 rounded-lg">
                <reward.icon className="w-6 h-6 text-blue-500" />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <h3 className="font-medium text-gray-800">{reward.title}</h3>
                  <ChevronRight className="w-5 h-5 text-gray-400" />
                </div>
                <p className="text-sm text-gray-600">{reward.description}</p>
                <div className="mt-2">
                  <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-blue-500 rounded-full"
                      style={{ width: `${reward.progress}%` }}
                    />
                  </div>
                  <div className="flex justify-between items-center mt-1">
                    <span className="text-sm text-gray-600">
                      {reward.progress}%
                    </span>
                    <span className="text-sm font-medium text-blue-600">
                      +{reward.points} pts
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </motion.div>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <h2 className="font-semibold text-gray-800 mb-4">Badges</h2>
        <div className="grid grid-cols-2 gap-4">
          {badges.map((badge, index) => (
            <div
              key={index}
              className={`p-4 rounded-xl text-center ${
                badge.achieved ? "bg-blue-50" : "bg-gray-50"
              }`}
            >
              <Award
                className={`w-8 h-8 mx-auto mb-2 ${
                  badge.achieved ? "text-blue-500" : "text-gray-400"
                }`}
              />
              <p
                className={`text-sm font-medium ${
                  badge.achieved ? "text-blue-700" : "text-gray-500"
                }`}
              >
                {badge.name}
              </p>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
