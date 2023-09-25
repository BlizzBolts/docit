import type { ConsolaInstance } from "consola";
import { createConsola } from "consola";
import { colors } from "consola/utils";
export type Logger = ConsolaInstance;

export const logger = createConsola({
  fancy: true,
  formatOptions: {
    colors: true,
    date: false,
  },
}).withTag("Docit");

export const cliLogger = logger.withTag("cli");
export const coreLogger = logger.withTag("core");
export const validateLogger = logger.withTag("validate");
export const preflightLogger = coreLogger.withTag("preflight");

export { colors };
