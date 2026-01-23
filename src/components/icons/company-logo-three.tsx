import type { SVGProps } from 'react';

export function CompanyLogoThree(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 40" width="100" height="40" {...props}>
      <rect x="5" y="5" width="30" height="30" fill="currentColor" />
      <rect x="12" y="12" width="16" height="16" fill="var(--background)" />
      <text x="45" y="28" fontFamily="Georgia" fontStyle="italic" fontSize="20" fill="currentColor">
        Quantum
      </text>
    </svg>
  );
}
