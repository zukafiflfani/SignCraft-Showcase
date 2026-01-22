import type { SVGProps } from 'react';

export function SignFour(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 200 100"
      width="200"
      height="100"
      {...props}
    >
      <rect width="200" height="100" rx="10" fill="currentColor" className="text-gray-800" />
      <rect x="10" y="10" width="180" height="80" rx="5" fill="currentColor" className="text-gray-900" />
      <path d="M 20 50 Q 50 30, 80 50 T 140 50" stroke="currentColor" className="text-accent" strokeWidth="4" fill="none" strokeLinecap="round" />
      <path d="M 60 70 Q 90 90, 120 70 T 180 70" stroke="currentColor" className="text-primary" strokeWidth="4" fill="none" strokeLinecap="round" />
      <circle cx="175" cy="25" r="5" fill="currentColor" className="text-red-500" />
      <circle cx="185" cy="25" r="5" fill="currentColor" className="text-green-500" />
    </svg>
  );
}
