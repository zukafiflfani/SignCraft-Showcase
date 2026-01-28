import type { SVGProps } from 'react';

export function SignOne(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 200 100"
      width="200"
      height="100"
      {...props}
    >
      <rect x="5" y="5" width="190" height="90" rx="8" fill="currentColor" className="text-primary" />
      <rect x="15" y="15" width="170" height="70" rx="4" fill="none" stroke="currentColor" className="text-primary-foreground" strokeWidth="2" />
      <text
        x="100"
        y="58"
        fontFamily="Playfair Display, serif"
        fontSize="24"
        fill="currentColor"
        className="text-primary-foreground"
        textAnchor="middle"
      >
        Ad Time
      </text>
    </svg>
  );
}
