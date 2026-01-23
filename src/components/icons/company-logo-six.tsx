import type { SVGProps } from 'react';

export function CompanyLogoSix(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 40" width="100" height="40" {...props}>
      <path d="M5 20 L 20 5 L 35 20 L 20 35 Z" fill="currentColor" />
      <text x="45" y="28" fontFamily="Arial Black" fontSize="20" fill="currentColor">
        VERTEX
      </text>
    </svg>
  );
}
