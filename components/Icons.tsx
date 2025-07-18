import React from 'react';

type IconProps = {
  className?: string;
};

export const HubIcon: React.FC<IconProps> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 21v-1.5M15.75 3v1.5m0 16.5v-1.5" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5a7.5 7.5 0 0 0-7.5 7.5 7.5 7.5 0 0 0 7.5 7.5 7.5 7.5 0 0 0 7.5-7.5 7.5 7.5 0 0 0-7.5-7.5Z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8.25v7.5" />
  </svg>
);

export const HidDeviceIcon: React.FC<IconProps> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15m-3 0-3-3m0 0 3-3m-3 3H15" />
  </svg>
);

export const UsbIcon: React.FC<IconProps> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h3m-3 0h-3v3h3V6Zm3 0h3v3h-3V6Zm-4.5 9.75 2.25 2.25 2.25-2.25" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 18V9.75m0 0A4.5 4.5 0 0 0 7.5 5.25h-1.5A4.5 4.5 0 0 0 1.5 9.75v1.5A4.5 4.5 0 0 0 6 15.75h1.5" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9.75a4.5 4.5 0 0 1 4.5-4.5h1.5a4.5 4.5 0 0 1 4.5 4.5v1.5a4.5 4.5 0 0 1-4.5 4.5h-1.5" />
  </svg>
);

export const InfoIcon: React.FC<IconProps> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
    </svg>
  );
