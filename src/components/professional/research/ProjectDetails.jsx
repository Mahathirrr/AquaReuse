import React from "react";
import { motion } from "framer-motion";
import {
  Calendar,
  Clock,
  Users,
  FileText,
  MessageSquare,
  Link,
  Edit,
  Trash2,
} from "lucide-react";

export default function ProjectDetails({ project, onClose }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-end sm:items-center justify-center p-4"
    >
      <motion.div
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        exit={{ y: 100 }}
        className="bg-white rounded-t-xl sm:rounded-xl w-full max-w-lg max-h-[90vh] overflow-y-auto"
      >
        <div className="sticky top-0 bg-white border-b border-gray-200 p-4 flex justify-between items-center">
          <h2 className="text-xl font-semibold text-gray-800">
            Project Details
          </h2>
          <button onClick={onClose} className="text-gray-500">
            <svg
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <div className="p-4 space-y-6">
          {/* Project Header */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800">
              {project.title}
            </h3>
            <p className="text-gray-600 mt-1">{project.description}</p>
          </div>

          {/* Project Meta */}
          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center space-x-2 text-gray-600">
              <Calendar className="w-5 h-5" />
              <span>Due {project.deadline}</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-600">
              <Users className="w-5 h-5" />
              <span>{project.team} Members</span>
            </div>
          </div>

          {/* Tasks */}
          <div>
            <h4 className="font-medium text-gray-800 mb-3">Tasks</h4>
            <div className="space-y-2">
              {project.tasks.map((task, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                >
                  <span className="text-gray-700">{task.title}</span>
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-medium ${
                      task.status === "completed"
                        ? "bg-green-100 text-green-800"
                        : task.status === "in-progress"
                          ? "bg-blue-100 text-blue-800"
                          : "bg-gray-100 text-gray-800"
                    }`}
                  >
                    {task.status}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Updates */}
          <div>
            <h4 className="font-medium text-gray-800 mb-3">Recent Updates</h4>
            <div className="space-y-3">
              {project.updates.map((update, index) => (
                <div key={index} className="p-3 bg-gray-50 rounded-lg">
                  <p className="text-gray-700">{update.message}</p>
                  <p className="text-sm text-gray-500 mt-1">{update.time}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="grid grid-cols-2 gap-3">
            <button className="flex items-center justify-center space-x-2 px-4 py-2 bg-blue-500 text-white rounded-lg">
              <Edit className="w-4 h-4" />
              <span>Edit Project</span>
            </button>
            <button className="flex items-center justify-center space-x-2 px-4 py-2 bg-red-50 text-red-600 rounded-lg">
              <Trash2 className="w-4 h-4" />
              <span>Delete</span>
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
