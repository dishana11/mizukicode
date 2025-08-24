import React from 'react';

const Spinner: React.FC<{className?: string}> = ({ className }) => (
  <svg className={`spinner animate-spin text-[var(--accent-primary)] ${className??''}`} viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle className="opacity-25" cx="25" cy="25" r="20" stroke="currentColor" strokeWidth="5"></circle>
    <path className="opacity-75 accent-dot-pulse" fill="currentColor" d="M25 5a20 20 0 0 1 0 40V5z"></path>
  </svg>
);

export default Spinner;

