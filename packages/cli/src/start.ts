import { start as docitStart } from "@blizzbolts/docit-core";
import { resolveConfig } from "@blizzbolts/docit-shared/node";

export const start = async (cwd: string = process.cwd()) => {
  const config = await resolveConfig(cwd);
  await docitStart(cwd, config);
};
