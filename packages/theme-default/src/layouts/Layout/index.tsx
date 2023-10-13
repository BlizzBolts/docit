import clsx from "clsx";
import type { BaseProps } from "@/types";

const Layout: React.FC<BaseProps> = (props) => {
  const { children, className, style } = props;
  return (
    <div
      className={clsx("flex align-top", className)}
      style={{
        ...(style || {}),
        height: "calc(100vh - 3rem)",
      }}
    >
      {children}
    </div>
  );
};

export { Layout };
