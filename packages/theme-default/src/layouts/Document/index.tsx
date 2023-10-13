import clsx from "clsx";
import type { DocumentProps } from "./types";
import { ScrollArea } from "@/shadcnui";

const Document: React.FC<DocumentProps> = (props) => {
  const { children, className, style = {} } = props;
  return (
    <ScrollArea
      className={clsx(
        "docit-document markdown max-w-8xl px-8 flex-1 leading-normal break-words text-gray-900 font-light",
        className,
      )}
      style={{ ...style, letterSpacing: "0.03em" }}
    >
      {children}
    </ScrollArea>
  );
};

export { Document };
