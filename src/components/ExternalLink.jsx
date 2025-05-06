import React from 'react';

const ExternalLink = ({ href, className = '', ariaLabel = 'Avaa linkki' }) => (
  <a
    href={href}
    className={className}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={ariaLabel}
  >
              <svg className="link-icon" viewBox="0 0 24 24" width="14" height="14">
                    <path 
                      d="M13.5 6H18V10.5M18 6L8 16M18 6V10.5H13.5" 
                      stroke="currentColor" 
                      strokeWidth="1.5" 
                      fill="none" 
                      strokeLinecap="round"
                    />
                  </svg>
  </a>
);

export default ExternalLink;
