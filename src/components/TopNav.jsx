import React from "react";
import { useNavigate } from "react-router-dom";
import { navigationIcons } from "./icons/NavigationIcons";

function TopNav() {
  const navigate = useNavigate();
  const { Settings } = navigationIcons;

  return (
    <div className="fixed top-0 left-0 right-0 bg-white border-b border-gray-200 z-10">
      <div className="max-w-md mx-auto px-4 py-3 flex justify-end">
        <button
          onClick={() => navigate("/settings")}
          className="p-2 rounded-full hover:bg-gray-100"
        >
          <Settings className="h-6 w-6 text-gray-600" />
        </button>
      </div>
    </div>
  );
}

export default TopNav;
