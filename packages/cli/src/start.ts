import { cliLogger, colors } from "@blizzbolts/docit-shared";
import { start as docitStart } from "@blizzbolts/docit-core";
import type { CLIOptions } from "@/types";

export const start = (root: string = "./docs", options?: CLIOptions) => {
  cliLogger.info(colors.cyan(`Starting dev server at ${root}`));
  cliLogger.info("options", options);
  docitStart(root);
};
