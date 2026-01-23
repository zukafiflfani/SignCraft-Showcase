import type { SVGProps } from 'react';

export function CompanyLogoTwo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 40" width="100" height="40" {...props}>
      <circle cx="20" cy="20" r="15" stroke="currentColor" strokeWidth="4" fill="none" />
      <text x="45" y="28" fontFamily="Verdana" fontSize="22" fill="currentColor">
        Apex
      </text>
    </svg>
  );
}
