declare module "*.mdx" {
  let MDXComponent: (props) => JSX.Element;
  export default MDXComponent;
}

declare module "@docit/config" {
  import type { DocitConfig } from "@blizzbolts/docit-shared";
  let config: DocitConfig;
  export default config;
}
