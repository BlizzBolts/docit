declare module "*.mdx" {
  let MDXComponent: (props) => JSX.Element;
  export default MDXComponent;
}

declare module "@docit/config" {
  import type { DocitConfig } from "@blizzbolts/docit-shared";
  let config: DocitConfig;
  export default config;
}

declare module "@vite/config" {
  import type { ResolvedConfig } from "vite";
  let config: ResolvedConfig;
  export default config;
}
