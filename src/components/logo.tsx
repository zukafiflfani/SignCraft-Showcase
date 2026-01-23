import type { SVGProps } from 'react';

export default function Logo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 200 200"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle cx="100" cy="100" r="95" fill="none" stroke="currentColor" strokeWidth="3" />
      <g fill="currentColor">
        {/* The 'A' has a slight slant */}
        <text
          x="75"
          y="118"
          fontFamily="Playfair Display, serif"
          fontSize="70"
          textAnchor="middle"
          transform="skewX(-8)"
        >
          A
        </text>
        <text
          x="125"
          y="118"
          fontFamily="Playfair Display, serif"
          fontSize="70"
          textAnchor="middle"
        >
          D
        </text>
        
        <g fontFamily="PT Sans, sans-serif" fontSize="9" letterSpacing="2" textAnchor="middle">
            <text x="118" y="86">T</text>
            <text x="118" y="96">I</text>
            <text x="118" y="106">M</text>
            <text x="118" y="116">E</text>
        </g>
        
        <line x1="60" y1="130" x2="140" y2="130" stroke="currentColor" strokeWidth="1" />
        
        <text
          x="100"
          y="142"
          textAnchor="middle"
          fontFamily="PT Sans, sans-serif"
          fontSize="8"
          letterSpacing="1"
        >
          ADVERTISING COMPANY
        </text>
      </g>
    </svg>
  );
}
