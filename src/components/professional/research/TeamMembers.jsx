import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone } from "lucide-react";

export default function TeamMembers() {
  const team = [
    {
      name: "Dr. Sarah Johnson",
      role: "Lead Researcher",
      avatar: "https://i.pravatar.cc/150?img=1",
      status: "online",
    },
    {
      name: "Michael Chen",
      role: "Water Quality Specialist",
      avatar: "https://i.pravatar.cc/150?img=2",
      status: "offline",
    },
    {
      name: "Dr. Emily Brown",
      role: "Chemical Analyst",
      avatar: "https://i.pravatar.cc/150?img=3",
      status: "online",
    },
  ];

  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.4 }}
      className="bg-white rounded-xl p-4 shadow-sm"
    >
      <h2 className="font-semibold text-gray-800 mb-4">Team Members</h2>
      <div className="space-y-4">
        {team.map((member, index) => (
          <div
            key={index}
            className="flex items-center justify-between p-2 hover:bg-gray-50 rounded-lg"
          >
            <div className="flex items-center space-x-3">
              <div className="relative">
                <img
                  src={member.avatar}
                  alt={member.name}
                  className="w-10 h-10 rounded-full"
                />
                <span
                  className={`absolute bottom-0 right-0 w-3 h-3 border-2 border-white rounded-full ${
                    member.status === "online" ? "bg-green-500" : "bg-gray-300"
                  }`}
                />
              </div>
              <div>
                <p className="font-medium text-gray-800">{member.name}</p>
                <p className="text-sm text-gray-600">{member.role}</p>
              </div>
            </div>
            <div className="flex space-x-2">
              <button className="p-2 text-gray-400 hover:text-gray-600">
                <Mail className="w-5 h-5" />
              </button>
              <button className="p-2 text-gray-400 hover:text-gray-600">
                <Phone className="w-5 h-5" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
