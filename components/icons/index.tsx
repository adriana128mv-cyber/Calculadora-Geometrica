
import type React from 'react';

export const SquareIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M3 3h18v18H3z" />
  </svg>
);

export const RectangleIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M4 6h16v12H4z" />
  </svg>
);

export const TriangleIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12 2L1 21h22L12 2z" />
  </svg>
);

export const CircleIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
    <circle cx="12" cy="12" r="10" />
  </svg>
);

export const TrapezoidIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M2 20h20l-4-16H6L2 20z" />
  </svg>
);

export const CubeIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M21 7.28V16.72L12 22L3 16.72V7.28L12 2L21 7.28ZM12 4.53L6.26 8L12 11.47L17.74 8L12 4.53ZM4.5 8.81V15.19L11 19.45V13.06L4.5 8.81ZM19.5 8.81L13 13.06V19.45L19.5 15.19V8.81Z"/>
  </svg>
);

export const RectangularPrismIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M2 7l10 5l10-5l-10-5L2 7zm10 14.47L5.5 18.81V10.19l6.5 3.25v6.52zm1-6.52l6.5-3.25v8.62L13 21.47v-6.52z"/>
  </svg>
);

export const CylinderIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12 2C8.13 2 5 3.79 5 6v12c0 2.21 3.13 4 7 4s7-1.79 7-4V6c0-2.21-3.13-4-7-4zm0 18c-2.76 0-5-1.34-5-3v-1.45c1.43.91 3.17 1.45 5 1.45s3.57-.54 5-1.45V17c0 1.66-2.24 3-5 3zm0-13c-2.76 0-5-1.34-5-3s2.24-3 5-3s5 1.34 5 3s-2.24 3-5 3z" />
  </svg>
);

export const SphereIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8s8 3.59 8 8s-3.59 8-8 8z" />
  </svg>
);

export const ConeIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12 2L2 22h20L12 2zm0 4.55L17.72 20H6.28L12 6.55z" />
  </svg>
);
