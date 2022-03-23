export interface UserFileConfig {
  title?: string;
  sidebars?: SidebarNode[];
  publicPath?: string;
}

export interface UserConfig {
  /**
   * docs path
   * @description the path that your md/mdx file locates
   */
  root: string;

  title?: string;

  sidebars?: SidebarNode[];

  providerPath?: string;
  publicPath?: string;
}

export interface ResolvedUserConfig {
  /**
   * client project location
   * @description full path
   */
  base: string;
  /**
   * docs location
   * @description full path
   */
  docs: string;

  title?: string;

  sidebars?: SidebarNode[];

  providerPath?: string;

  publicPath?: string;
}

export type DepsMapper = Map<string, DepsItem>;

export type DepsItem = Map<
  'default' | 'nonDefault' | 'namespace',
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
