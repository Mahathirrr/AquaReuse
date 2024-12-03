import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { LayoutDashboard, FileText, BarChart2, Settings } from "lucide-react";

export default function ProfessionalBottomNav({ userRole }) {
  const location = useLocation();
  const navigate = useNavigate();

  const getNavItems = () => {
    const baseItems = [
      {
        path: `/${userRole}-dashboard`,
        icon: LayoutDashboard,
        label: "Dashboard",
      },
      {
        path: "/water-quality-report",
        icon: FileText,
        label: "Reports",
      },
      {
        path: "/research-dashboard",
        icon: BarChart2,
        label: "Research",
      },
      {
        path: "/settings",
        icon: Settings,
        label: "Settings",
      },
    ];
    return baseItems;
  };

  const navItems = getNavItems();

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
