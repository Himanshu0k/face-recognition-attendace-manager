import React from "react";

const AccountDetailRow = ({ label, value }) => (
  <div className="flex justify-between py-3 border-b last:border-none">
    <span className="font-medium text-gray-600">{label}</span>
    <span className="text-gray-800">{value}</span>
  </div>
);

export default AccountDetailRow;
