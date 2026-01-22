import type { SVGProps } from 'react';

export function SignThree(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 200 100"
      width="200"
      height="100"
      {...props}
    >
      <rect x="98" y="0" width="4" height="15" fill="currentColor" className="text-gray-400" />
      <circle cx="100" cy="55" r="40" fill="currentColor" className="text-background" stroke="currentColor" strokeWidth="4" />
      <text
        x="100"
        y="60"
        fontFamily="PT Sans, sans-serif"
        fontWeight="bold"
        fontSize="18"
        fill="currentColor"
        textAnchor="middle"
        className="text-primary"
      >
        OPEN
      </text>
    </svg>
  );
}
