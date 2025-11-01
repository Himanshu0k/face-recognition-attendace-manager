import React from "react";

const SecurityDoodle = () => (
  <svg
    viewBox="0 0 150 150"
    className="w-24 h-24 sm:w-32 sm:h-32 mx-auto"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g className="transition-transform duration-500 ease-out group-hover:translate-y-[-5px]">
      <path
        d="M 50 70 A 25 25 0 0 1 100 70 L 100 40 A 25 25 0 0 1 50 40 Z"
        fill="none"
        stroke="#9CA3AF"
        strokeWidth="8"
      />
      <rect x="40" y="70" width="70" height="50" fill="#4F46E5" rx="10" />
      <circle cx="75" cy="95" r="5" fill="#1F2937" />
      <rect x="73" y="98" width="4" height="15" fill="#1F2937" />
      <g className="transition-transform duration-700 ease-out group-hover:rotate-[20deg] origin-[105px_105px] group-hover:translate-x-[-10px] group-hover:translate-y-[-10px]">
        <rect x="95" y="100" width="30" height="4" fill="#FBBF24" rx="2" />
        <rect x="125" y="98" width="10" height="8" fill="#FBBF24" rx="1" />
      </g>
    </g>
  </svg>
);

export default SecurityDoodle;
