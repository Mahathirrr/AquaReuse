import React from "react";
import { motion } from "framer-motion";
import { Award, Gift, Trophy, TrendingUp } from "lucide-react";

export default function RewardsScreen() {
  const rewards = [
    {
      icon: Trophy,
      title: "Water Saver",
      description: "Save 1000L of water",
      progress: 70,
      points: 100,
    },
    {
      icon: Award,
      title: "Eco Warrior",
      description: "Complete 50 analyses",
      progress: 45,
      points: 200,
    },
    {
      icon: TrendingUp,
      title: "Consistency King",
      description: "7-day streak",
      progress: 85,
      points: 150,
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
          <div key={index} className="bg-white rounded-xl p-4 shadow-sm">
            <div className="flex items-start space-x-4">
              <div className="p-3 bg-blue-50 rounded-lg">
                <reward.icon className="w-6 h-6 text-blue-500" />
              </div>
              <div className="flex-1">
                <h3 className="font-medium text-gray-800">{reward.title}</h3>
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
