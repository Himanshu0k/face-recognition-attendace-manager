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
        <AccountDetailRow label="Roll Number" value="Information Technology" />
        <AccountDetailRow label="Email" value={user.email} />
        <AccountDetailRow label="Phone" value={user.phone} />
        <AccountDetailRow label="Department" value="Information Technology" />
        <AccountDetailRow label="Course" value="M.C.A ( Master of Computer Application )" />
        <AccountDetailRow label="Year / Semester" value="2nd/III" />
        <AccountDetailRow label="Date of Birth" value="Information Technology" />
        <AccountDetailRow label="Gender" value="Information Technology" />
        <AccountDetailRow label="Address" value="Information Technology" />
        <AccountDetailRow label="Guardian Name" value="Information Technology" />
      </div>
    </div>
  );
};

export default AccountDetails;
