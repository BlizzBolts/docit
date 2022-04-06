interface ResolvedComponentProps {
  filePath?: string;
  componentName?: string;
  props?: {
    isEnum?: boolean;
    enums?: { value: string | number; description: string }[];
    name?: string;
    type?: string;
    defaultValue?: string;
    isRequired?: boolean;
    description?: string;
  }[];
}

interface Route {
  path: string;
  component: any;
}

interface SidebarNode {
  title: string;
  path?: string;
  children?: SidebarNode[];
}

interface Overrides {
  className?: string;
  style?: React.CSSProperties;
}

interface ParsedTocItem {
  title?: string;
  url?: string;
  items?: ParsedTocItem[];
}

interface Markdown {
  routePath: string;
  toc: ParsedTocItem;
}

declare module "virtual:routes" {
  const routes: Route[];
  export { routes };
}

declare module "virtual:appData" {
  const title: string;
  const socials: {
    twitter?: string;
    github?: string;
  };
  const version: string;
  const markdowns: {
    routePath: string;
    toc: ParsedTocItem;
  }[];
  export default { title, socials, version, markdowns };
}

declare module "virtual:sidebars" {
  const sidebars: SidebarNode[];
  export default sidebars;
}

declare module "virtual:provider" {
  const provider: React.FC;
  export default provider;
}
