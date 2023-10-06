import clsx from "clsx";
import type { DocumentProps } from "./types";
import { ScrollArea } from "@/shadcnui";

const Document: React.FC<DocumentProps> = (props) => {
  const { children, className, style } = props;
  return (
    <ScrollArea className={clsx("markdown max-w-8xl px-8 flex-1", className)} style={style}>
      {children}
    </ScrollArea>
  );
};

export { Document };
