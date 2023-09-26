import { build as docitBuild } from "@blizzbolts/docit-core";

export const build = (root: string = "./docs") => {
  docitBuild(root);
};
