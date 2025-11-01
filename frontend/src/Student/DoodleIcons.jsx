import React from "react";

/**
 * DoodleIcons.jsx
 * Exports: DoodleIcon, DoodleDashboard, DoodleTimetable, DoodleHistory
 *
 * Usage:
 * import { DoodleDashboard } from "../components/DoodleIcons";
 * <DoodleDashboard className="w-6 h-6" />
 */

/* Base wrapper to keep a consistent "hand-drawn" style */
export const DoodleIcon = ({ children, className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
    role="img"
  >
    {children}
  </svg>
);

/* Simple bar chart / dashboard doodle */
export const DoodleDashboard = ({ className = "" }) => (
  <DoodleIcon className={className}>
    <path d="M4 12v8M10 16v4M16 10v10" />
    <path d="M20 4L18 6L16 4L14 6L12 4L10 6L8 4L6 6L4 4" strokeDasharray="3 3" />
    <rect x="4" y="12" width="4" height="8" rx="1" ry="1" />
    <rect x="10" y="16" width="4" height="4" rx="1" ry="1" />
    <rect x="16" y="10" width="4" height="10" rx="1" ry="1" />
    <circle cx="12" cy="7" r="3" strokeWidth="1.5" strokeDasharray="2 2" />
  </DoodleIcon>
);

/* Calendar + clock / timetable doodle */
export const DoodleTimetable = ({ className = "" }) => (
  <DoodleIcon className={className}>
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
    <line x1="7" y1="2" x2="7" y2="6" />
    <line x1="17" y1="2" x2="17" y2="6" />
    <line x1="3" y1="10" x2="21" y2="10" strokeWidth="1" strokeDasharray="2 2" />
    <polyline points="10 13 14 13 14 17 10 17 10 13" strokeWidth="1.5" />
  </DoodleIcon>
);

/* Scroll / paper stack / history doodle */
export const DoodleHistory = ({ className = "" }) => (
  <DoodleIcon className={className}>
    <path d="M14 2h-4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h4c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z" />
    <line x1="10" y1="8" x2="14" y2="8" strokeDasharray="4 2" />
    <line x1="10" y1="12" x2="14" y2="12" />
    <line x1="10" y1="16" x2="14" y2="16" strokeDasharray="4 2" />
    <path d="M5 21v-4" />
    <path d="M19 21v-4" />
  </DoodleIcon>
);

export default DoodleIcon;
