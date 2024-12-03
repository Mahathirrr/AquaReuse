import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Users,
  ChevronRight,
  Calendar,
  Clock,
  AlertTriangle,
  FileText,
  MessageSquare,
  Link,
} from "lucide-react";

export default function ResearchProjects() {
  const [expandedProject, setExpandedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "Water Quality Optimization",
      status: "In Progress",
      completion: 75,
      team: 4,
      priority: "High",
      description:
        "Analyzing and optimizing water quality parameters for vegetable washing processes",
      deadline: "2024-03-15",
      tasks: [
        { title: "Parameter Analysis", status: "completed" },
        { title: "Data Collection", status: "in-progress" },
        { title: "Quality Assessment", status: "pending" },
      ],
      updates: [
        {
          message: "New data collected from 5 restaurants",
          time: "2 hours ago",
        },
        { message: "Quality parameters updated", time: "1 day ago" },
      ],
    },
    {
      id: 2,
      title: "Treatment Methods Analysis",
      status: "Planning",
      completion: 20,
      team: 3,
      priority: "Medium",
      description:
        "Evaluating effectiveness of different water treatment methods",
      deadline: "2024-04-01",
      tasks: [
        { title: "Research Review", status: "in-progress" },
        { title: "Method Testing", status: "pending" },
        { title: "Results Analysis", status: "pending" },
      ],
      updates: [
        { message: "Initial research phase completed", time: "3 days ago" },
      ],
    },
    {
      id: 3,
      title: "Sustainability Metrics",
      status: "Completed",
      completion: 100,
      team: 5,
      priority: "High",
      description: "Developing sustainability metrics for water reuse programs",
      deadline: "2024-02-28",
      tasks: [
        { title: "Metrics Definition", status: "completed" },
        { title: "Implementation", status: "completed" },
        { title: "Validation", status: "completed" },
      ],
      updates: [
        { message: "Final report submitted", time: "1 week ago" },
        { message: "Metrics approved by committee", time: "2 weeks ago" },
      ],
    },
  ];

  const handleProjectClick = (projectId) => {
    setExpandedProject(expandedProject === projectId ? null : projectId);
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "completed":
        return "text-green-600";
      case "in-progress":
        return "text-blue-600";
      case "pending":
        return "text-gray-400";
      default:
        return "text-gray-600";
    }
  };

  const getPriorityColor = (priority) => {
    switch (priority.toLowerCase()) {
      case "high":
        return "bg-red-100 text-red-800";
      case "medium":
        return "bg-yellow-100 text-yellow-800";
      case "low":
        return "bg-green-100 text-green-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.3 }}
      className="bg-white rounded-xl p-4 shadow-sm"
    >
      <h2 className="font-semibold text-gray-800 mb-4">Active Projects</h2>
      <div className="space-y-4">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-gray-50 rounded-lg overflow-hidden"
          >
            <button
              onClick={() => handleProjectClick(project.id)}
              className="w-full p-4"
            >
              <div className="flex justify-between items-start">
                <div>
                  <div className="flex items-center space-x-2">
                    <h3 className="font-medium text-gray-800">
                      {project.title}
                    </h3>
                    <span
                      className={`px-2 py-0.5 rounded-full text-xs font-medium ${getPriorityColor(project.priority)}`}
                    >
                      {project.priority}
                    </span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-600 mt-1">
                    <Users className="w-4 h-4" />
                    <span>{project.team} members</span>
                    <span className="w-1 h-1 bg-gray-300 rounded-full" />
                    <Calendar className="w-4 h-4" />
                    <span>{project.deadline}</span>
                  </div>
                </div>
                <ChevronRight
                  className={`w-5 h-5 text-gray-400 transform transition-transform ${
                    expandedProject === project.id ? "rotate-90" : ""
                  }`}
                />
              </div>
              <div className="mt-2">
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-600">Progress</span>
                  <span className="text-blue-600">{project.completion}%</span>
                </div>
                <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-blue-500 rounded-full"
                    style={{ width: `${project.completion}%` }}
                  />
                </div>
              </div>
            </button>

            <AnimatePresence>
              {expandedProject === project.id && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="border-t border-gray-200"
                >
                  <div className="p-4 space-y-4">
                    <div>
                      <h4 className="font-medium text-gray-800 mb-2">
                        Description
                      </h4>
                      <p className="text-gray-600 text-sm">
                        {project.description}
                      </p>
                    </div>

                    <div>
                      <h4 className="font-medium text-gray-800 mb-2">Tasks</h4>
                      <div className="space-y-2">
                        {project.tasks.map((task, index) => (
                          <div
                            key={index}
                            className="flex items-center justify-between text-sm"
                          >
                            <span className="text-gray-600">{task.title}</span>
                            <span className={getStatusColor(task.status)}>
                              {task.status.charAt(0).toUpperCase() +
                                task.status.slice(1)}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="font-medium text-gray-800 mb-2">
                        Recent Updates
                      </h4>
                      <div className="space-y-2">
                        {project.updates.map((update, index) => (
                          <div key={index} className="text-sm">
                            <p className="text-gray-600">{update.message}</p>
                            <p className="text-gray-400 text-xs">
                              {update.time}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex space-x-2 pt-2">
                      <button className="flex items-center space-x-1 px-3 py-2 bg-blue-50 text-blue-600 rounded-lg text-sm">
                        <MessageSquare className="w-4 h-4" />
                        <span>Comment</span>
                      </button>
                      <button className="flex items-center space-x-1 px-3 py-2 bg-blue-50 text-blue-600 rounded-lg text-sm">
                        <FileText className="w-4 h-4" />
                        <span>View Report</span>
                      </button>
                      <button className="flex items-center space-x-1 px-3 py-2 bg-blue-50 text-blue-600 rounded-lg text-sm">
                        <Link className="w-4 h-4" />
                        <span>Share</span>
                      </button>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
