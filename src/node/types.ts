export interface UserFileConfig {
  title?: string;
  sidebars?: SidebarNode[];
  publicPath?: string;
  socials?: {
    Twitter?: string;
    Github?: string;
  };
}

export interface UserConfig {
  root: string;
  title?: string;
  sidebars?: SidebarNode[];
  providerPath?: string;
  publicPath?: string;
  socials?: {
    Twitter?: string;
    Github?: string;
  };
}

export interface ResolvedUserConfig {
  base: string;
  docs: string;
  title?: string;
  sidebars?: SidebarNode[];
  providerPath?: string;
  publicPath?: string;
  socials?: {
    Twitter?: string;
    Github?: string;
  };
}

export type DepsMapper = Map<string, DepsItem>;

export type DepsItem = Map<
  "default" | "nonDefault" | "namespace",
  Set<string> | string
>;
export interface SidebarNode {
  title: string;
  path?: string;
  children?: SidebarNode[];
}

export interface ResolvedComponentProps {
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

export interface ParsedTocItem {
  title?: string;
  url?: string;
  items?: ParsedTocItem[];
}
