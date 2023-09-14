import { cliLogger, colors } from "@blizzbolts/docit-shared";
import type { CLIOptions } from "./types";

export const build = (source?: string, options?: CLIOptions) => {
  cliLogger.info(colors.cyan(`Starting dev server at ${source}`));
  cliLogger.info("options", options);
};
