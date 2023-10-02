import type { HeaderProps } from "./types";
import { Button } from "@/components/button";

const Header: React.FC<HeaderProps> = (props) => {
  const { title, navs, onNavigate } = props;
  return (
    <div className="px-4 md:px-8 lg:px-12 xl:px-16 flex items-center h-12 justify-between shadow-sm">
      <h3 className="scroll-m-20 text-xl font-semibold tracking-tight font-mono">{title} </h3>
      <div className="flex items-center">
        {navs?.map((o) => {
          return (
            <Button variant="link" key={o.url} onClick={() => onNavigate(o)}>
              {o.title}
            </Button>
          );
        })}
      </div>
    </div>
  );
};

export { Header };
