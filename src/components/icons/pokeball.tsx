import { IconSvgProps } from "@/shared/types";
import * as React from "react";

export const Pokeball: React.FC<IconSvgProps> = ({
  size = 32,
  width,
  height,
  ...props
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 32 32"
    fill="none"
    stroke="#000000"
    strokeLinecap="round"
    strokeLinejoin="round"
    height={size || height}
    width={size || width}
    {...props}
  >
    <desc>Pokeball Streamline Icon: https://streamlinehq.com</desc>
    <path d="M4 16a12 12 0 1 0 24 0 12 12 0 1 0 -24 0" strokeWidth="2"></path>
    <path d="M12 16a4 4 0 1 0 8 0 4 4 0 1 0 -8 0" strokeWidth="2"></path>
    <path d="M4 16h8" strokeWidth="2"></path>
    <path d="M20 16h8" strokeWidth="2"></path>
  </svg>
);
