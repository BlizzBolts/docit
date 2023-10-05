import clsx from "clsx";
import type { SideBarProps } from "./types";
import { ScrollArea } from "@/shadcnui";

const SideBar: React.FC<SideBarProps> = (props) => {
  const { children, className, style } = props;
  return (
    <ScrollArea className={clsx("w-80 h-full bg-primary-foreground", className)} style={style}>
      {children}
    </ScrollArea>
  );
};

export { SideBar };
