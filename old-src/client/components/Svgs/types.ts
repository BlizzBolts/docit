import type { SVGAttributes } from "react";
import type React from "react";

export interface SvgProps extends SVGAttributes<SVGElement> {
  className?: string;
  style?: React.CSSProperties;
}
