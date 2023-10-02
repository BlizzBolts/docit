import type { HeaderProps } from "./types";
import { Button } from "@/components/button";
const Header: React.FC<HeaderProps> = (props) => {
  const { title } = props;
  return (
    <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4">
      <div className="shrink-0">
        <img className="h-12 w-12" src="/img/logo.svg" alt="ChitChat Logo" />
      </div>
      <Button>123123</Button>
      <div>
        <div className="text-xl font-medium text-black">ChitChat</div>
        <p className="text-slate-500">You have a new message!</p>
      </div>
    </div>
  );
};

export { Header };
