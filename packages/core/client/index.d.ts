declare module "*.mdx" {
  let MDXComponent: (props) => JSX.Element;
  export default MDXComponent;
}

declare module "@docit/config" {
  import type { DocitConfig } from "@blizzbolts/docit-shared";
  let config: DocitConfig;
  export default config;
}

declare module "@docit/sidebar" {
  let sidebar: Array<{ name: string; routePath: string }>;
  export default sidebar;
}

declare module "@docit/vite-config" {
  import type { ResolvedConfig } from "vite";
  let config: ResolvedConfig;
  export default config;
}
