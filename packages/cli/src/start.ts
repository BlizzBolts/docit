import type { CLIOptions } from "@/types";
import { cliLogger, colors } from "@blizzbolts/docit-shared";
import { start as docitStart } from "@blizzbolts/docit-core";

export const start = (source?: string, options?: CLIOptions) => {
  cliLogger.info(colors.cyan(`Starting dev server at ${source}`));
  cliLogger.info("options", options);
  docitStart();
};
