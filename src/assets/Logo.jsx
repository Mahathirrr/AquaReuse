import React from 'react';

function Logo({ className = "w-20 h-20" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 200 200"
      className={className}
    >
      <circle
        cx="100"
        cy="100"
        r="90"
        fill="#ffffff"
        stroke="#0EA5E9"
        strokeWidth="4"
      />
      <path
        d="M100 30
           C100 30, 140 80, 140 120
           C140 150, 120 170, 100 170
           C80 170, 60 150, 60 120
           C60 80, 100 30, 100 30Z"
        fill="#0EA5E9"
        stroke="none"
      />
      <g transform="translate(100,100) scale(0.8)">
        <path
          d="M-20,-20
             A40,40 0 0,1 20,-20
             L10,-10
             L20,-20
             L30,-10
             L20,0
             A25,25 0 0,0 -10,0 Z"
          fill="#ffffff"
        />
        <path
          d="M20,20
             A40,40 0 0,1 -20,20
             L-10,10
             L-20,20
             L-30,10
             L-20,0
             A25,25 0 0,0 10,0 Z"
          fill="#ffffff"
          transform="rotate(120)"
        />
        <path
          d="M0,-40
             A40,40 0 0,1 0,40
             L-10,30
             L0,40
             L10,30
             L0,20
             A25,25 0 0,0 0,-20 Z"
          fill="#ffffff"
          transform="rotate(240)"
        />
      </g>
    </svg>
  );
}

export default Logo;