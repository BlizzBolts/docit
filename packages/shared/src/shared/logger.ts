import { createConsola } from "consola";
import { colors } from "consola/utils";

export const cliLogger = createConsola({
  fancy: true,
  formatOptions: {
    colors: true,
    date: false,
  },
}).withTag("Docit-CLI");

export { colors };
