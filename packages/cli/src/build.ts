import { build as docitBuild } from "@blizzbolts/docit-core";
import { resolveConfig } from "@blizzbolts/docit-shared/node";

export const build = async (cwd: string = process.cwd()) => {
  const config = await resolveConfig(cwd);
  await docitBuild(cwd, config);
};
