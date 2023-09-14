import { createConsola } from "consola";
import { colors } from "consola/utils";

export const logger = createConsola({
  fancy: true,
  formatOptions: {
    colors: true,
    date: false,
  },
}).withTag("Docit");

export const cliLogger = logger.withTag("cli");
export const coreLogger = logger.withTag("core");

export { colors };
