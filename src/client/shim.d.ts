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
  export default { title, socials, version };
}

declare module "virtual:sidebars" {
  const sidebars: SidebarNode[];
  export default sidebars;
}

declare module "virtual:provider" {
  const provider: React.FC;
  export default provider;
}
