import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  ArrowPathIcon,
  BeakerIcon,
  ChartBarIcon,
  BookOpenIcon,
  Cog6ToothIcon,
} from "./icons";

function BottomNav() {
  const location = useLocation();
  const navigate = useNavigate();

  const navItems = [
    { path: "/", icon: ArrowPathIcon, label: "Home" },
    { path: "/analysis", icon: BeakerIcon, label: "Analysis" },
    { path: "/history", icon: ChartBarIcon, label: "History" },
    { path: "/guide", icon: BookOpenIcon, label: "Guide" },
    { path: "/settings", icon: Cog6ToothIcon, label: "Settings" },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200">
      <div className="max-w-md mx-auto px-6 py-2">
        <div className="flex justify-between">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;
            return (
              <button
                key={item.path}
                onClick={() => navigate(item.path)}
                className="flex flex-col items-center py-2 px-3"
              >
                <Icon
                  className={`h-6 w-6 ${
                    isActive ? "text-blue-600" : "text-gray-500"
                  }`}
                />
                <span
                  className={`text-xs mt-1 ${
                    isActive ? "text-blue-600 font-medium" : "text-gray-500"
                  }`}
                >
                  {item.label}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default BottomNav;

