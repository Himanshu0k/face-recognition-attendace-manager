import React from "react";
// import AccountDetailRow from "../components/AccountDetailRow";
import AccountDetailRow from "./AccountDetailRow";

const AccountDetails = () => {
  const user = {
    name: "Himanshu Kumar",
    email: "himanshu@email.com",
    phone: "+91 9876543210",
    department: "Computer Science",
  };

  return (
    <div className="p-8">
      <h2 className="text-4xl font-extrabold text-gray-900 mb-4">My Account Details</h2>
      <div className="bg-white rounded-xl shadow p-6">
        <AccountDetailRow label="Name" value={user.name} />
        <AccountDetailRow label="Email" value={user.email} />
        <AccountDetailRow label="Phone" value={user.phone} />
        <AccountDetailRow label="Department" value={user.department} />
      </div>
    </div>
  );
};

export default AccountDetails;
