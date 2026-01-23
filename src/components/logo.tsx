import type { SVGProps } from 'react';

export default function Logo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 200 200"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle cx="100" cy="100" r="95" fill="none" stroke="currentColor" strokeWidth="4" />
      <g fill="currentColor">
        <text
          x="100"
          y="90"
          fontFamily="Playfair Display, serif"
          fontSize="70"
          fontWeight="bold"
          textAnchor="middle"
        >
          AD
        </text>
        <text
          x="100"
          y="135"
          fontFamily="PT Sans, sans-serif"
          fontSize="30"
          textAnchor="middle"
          letterSpacing="3"
        >
          TIME
        </text>
      </g>
    </svg>
  );
}
