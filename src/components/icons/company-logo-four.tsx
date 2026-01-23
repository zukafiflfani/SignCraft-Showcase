import type { SVGProps } from 'react';

export function CompanyLogoFour(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 40" width="100" height="40" {...props}>
      <polygon points="10,35 25,5 40,35" stroke="currentColor" strokeWidth="4" fill="none" />
      <text x="50" y="28" fontFamily="monospace" fontSize="24" fill="currentColor">
        Stellar
      </text>
    </svg>
  );
}
