import { cliLogger, colors } from "@blizzbolts/docit-shared";
import { build as docitBuild } from "@blizzbolts/docit-core";
import type { CLIOptions } from "./types";

export const build = (root: string = "./docs", options?: CLIOptions) => {
  cliLogger.info(colors.cyan(`Build for static at ${root}`));
  cliLogger.info("options", options);
  docitBuild(root);
};
