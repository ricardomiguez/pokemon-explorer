import { SVGProps } from "react";
import { TYPE_COLORS } from "../utils/constants";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export type TypeColors = keyof typeof TYPE_COLORS;
