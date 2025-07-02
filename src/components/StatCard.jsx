import React from "react";

export default function StatCard({ title, value, icon, color, change }) {
  return (
    <div className="bg-white p-4 rounded-xl shadow-md flex items-center gap-4">
      {/* Icon Section */}
      <div
        className="p-3 rounded-full text-white text-xl"
        style={{ backgroundColor: color }}
      >
        {icon}
      </div>

      {/* Text Section */}
      <div className="flex flex-col">
        <span className="text-sm text-gray-500 font-medium">{title}</span>
        <span className="text-xl font-bold text-black">{value}</span>
        <span className="text-xs text-green-600 mt-1">{change}</span>
      </div>
    </div>
  );
}


// This is a stat card component for the FleetPro dashboard.
// It displays a title, a value, and a small note about the change from the last month.
// The card is styled with Tailwind CSS and uses a color map to apply different background and text colors based on the `color` prop.
