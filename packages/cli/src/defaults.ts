import path from "node:path";

export const DEFAULT_CONFIG_FILE_NAME = "docit.config.ts";

export const DEFAULT_DOCIT_CONFIG_FILE_LOCATION = path.resolve(
  process.cwd(),
  DEFAULT_CONFIG_FILE_NAME,
);
