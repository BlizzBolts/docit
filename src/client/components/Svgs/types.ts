import React, { SVGAttributes } from "react";

export interface SvgProps extends SVGAttributes<SVGElement> {
  className?: string;
  style?: React.CSSProperties;
}
