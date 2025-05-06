import React from 'react';

const ExternalLinkIcon = ({ size = 24, className = '' }) => (
  <svg
    className={`link-icon ${className}`}
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M13.5 6H18V10.5M18 6L8 16M18 6V10.5H13.5" />
  </svg>
);

export default ExternalLinkIcon;
