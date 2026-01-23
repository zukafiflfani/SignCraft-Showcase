import type { SVGProps } from 'react';

export function CompanyLogoOne(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 40" width="100" height="40" {...props}>
      <path d="M10 30 L 20 10 L 30 30 L 25 20 L 15 20 Z" fill="currentColor" />
      <text x="40" y="28" fontFamily="Arial" fontSize="24" fontWeight="bold" fill="currentColor">
        INNOVATE
      </text>
    </svg>
  );
}
