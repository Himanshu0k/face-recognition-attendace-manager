import React from "react";
// eslint-disable-next-line no-unused-vars
const StatCard = ({ title, value, icon: Icon, color }) => (
  <div className="bg-white shadow rounded-xl p-6 flex items-center justify-between">
    <div>
      <p className="text-sm font-semibold text-gray-500">{title}</p>
      <h3 className="text-2xl font-bold text-gray-900 mt-1">{value}</h3>
    </div>
    <div className={`w-12 h-12 rounded-full flex items-center justify-center ${color}`}>
      <Icon className="w-6 h-6 text-white" />
    </div>
  </div>
);

export default StatCard;
