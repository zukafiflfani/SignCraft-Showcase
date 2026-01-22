import type { SVGProps } from 'react';

export function SignTwo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 200 100"
      width="200"
      height="100"
      {...props}
    >
      <defs>
        <filter id="neon-glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="3.5" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <rect width="200" height="100" fill="currentColor" className="text-gray-900" />
      <text
        x="100"
        y="60"
        fontFamily="monospace"
        fontSize="32"
        fill="currentColor"
        className="text-accent"
        textAnchor="middle"
        stroke="currentColor"
        strokeWidth="1.5"
        filter="url(#neon-glow)"
      >
        EAT
      </text>
    </svg>
  );
}
