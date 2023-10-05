import { useState } from "react";
import type { HeaderProps } from "./types";
import { Button, Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/shadcnui";

const Header: React.FC<HeaderProps> = (props) => {
  const { title, navs, onNavigate } = props;
  const [version, setVersion] = useState("1.0.0");
  return (
    <div className="px-8 md:px-12 flex items-center h-12 justify-between shadow-sm w-full bg-white">
      <h3 className="scroll-m-20 text-xl font-bold tracking-tight text-primary">{title}</h3>
      <Select value={version} onValueChange={setVersion}>
        <SelectTrigger className="w-auto outline-none h-6 mr-auto ml-2">
          <SelectValue placeholder="Select Version" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="1.0.0">v1.0.0</SelectItem>
          <SelectItem value="1.1.0">v1.1.0</SelectItem>
          <SelectItem value="2.0.0">v2.0.0</SelectItem>
        </SelectContent>
      </Select>

      <div className="flex items-center">
        {navs?.map((o) => {
          return (
            <Button
              variant="link"
              key={o.url}
              onClick={() => onNavigate(o)}
              className="text-primary  font-bold"
            >
              {o.title}
            </Button>
          );
        })}
      </div>
    </div>
  );
};

export { Header };
