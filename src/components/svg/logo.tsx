import { SVGProps } from "@/types/global";
import React from "react";

export const Logo = (props: SVGProps) => {
  return (
    <svg
      width="193"
      height="120"
      viewBox="0 0 193 120"
      xmlns="http://www.w3.org/2000/svg"
      className="dark:fill-white fill-black"
      {...props}
    >
      <path
        d="M24.0009 95L1.58031 25.8615H21.7292L40.5942 85.7157H30.4209L50.2735 25.8615H68.2495L87.0157 85.7157H77.2375L96.6951 25.8615H115.362L92.9418 95H72.0028L56.0022 44.1338H61.632L44.94 95H24.0009Z"
        fill="currentColor"
      />
      <path
        d="M72.6172 95L103.137 25.8615H122.397L153.015 95H132.669L108.767 35.4422H116.471L92.5686 95H72.6172ZM89.3092 81.5674L94.3465 67.1471H128.126L133.163 81.5674H89.3092Z"
        fill="currentColor"
      />
      <circle cx="175.5" cy="94.5" r="17.5" fill="currentColor" />
    </svg>
  );
};
