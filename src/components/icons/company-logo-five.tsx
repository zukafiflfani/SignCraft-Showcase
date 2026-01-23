import type { SVGProps } from 'react';

export function CompanyLogoFive(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 40" width="100" height="40" {...props}>
      <path d="M5 5 H 35 V 35 H 5 Z" stroke="currentColor" strokeWidth="3" fill="none" />
      <path d="M10 10 H 30 V 30 H 10 Z" stroke="currentColor" strokeWidth="1" fill="none" />
      <text x="45" y="28" fontFamily="Impact" fontSize="22" fill="currentColor">
        PIONEER
      </text>
    </svg>
  );
}
