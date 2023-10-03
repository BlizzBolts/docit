import type { DocumentProps } from "./types";
import { ScrollArea } from "@/shadcnui";

const Document: React.FC<DocumentProps> = (props) => {
  const { children, className, style } = props;
  return (
    <ScrollArea className={className} style={style}>
      {children}
    </ScrollArea>
  );
};

export { Document };
