import { UserConfigExport } from "vite";

interface SharedConfig {
  title?: string;
  favicon?: string;
  sidebars?: SidebarNode[];
  publicPath?: string;
  socials?: {
    Twitter?: string;
    Github?: string;
  };
  vite?: Partial<UserConfigExport>;
  providerPath?: string;
}

/**
 * Types for config file - docit.config.js
 */
export interface UserFileConfig extends SharedConfig {}

/**
 * types for node api
 */
export interface UserConfig extends SharedConfig {
  root: string;
}

export interface ResolvedUserConfig extends SharedConfig {
  base: string;
  docs: string;
  vite?: Partial<UserConfigExport>;
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
