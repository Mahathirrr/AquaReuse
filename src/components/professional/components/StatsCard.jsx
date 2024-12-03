import React from "react";

export default function StatsCard({ label, value, icon: Icon, color }) {
  return (
    <div className={`bg-${color}-50 p-4 rounded-xl`}>
      <Icon className={`w-8 h-8 text-${color}-500 mb-2`} />
      <p className={`text-${color}-900 font-medium`}>{label}</p>
      <p className={`text-2xl font-bold text-${color}-700`}>{value}</p>
    </div>
  );
}
