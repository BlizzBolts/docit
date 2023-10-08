import clsx from "clsx";
import type { BaseProps } from "@/types";

const Page: React.FC<BaseProps> = (props) => {
  const { children, className, style } = props;
  return (
    <div className={clsx("docit-page h-screen w-screen overflow-hidden", className)} style={style}>
      {children}
    </div>
  );
};

export { Page };
