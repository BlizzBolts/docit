import type { BaseProps } from "@/types";

const Layout: React.FC<BaseProps> = (props) => {
  const { children, className, style } = props;
  return (
    <div className={className} style={style}>
      {children}
    </div>
  );
};

export { Layout };
