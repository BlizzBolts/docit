import { build as viteBuild } from "vite";
import { resolveConfig } from "./config.js";
import { docit } from "./plugins/index.js";
import { UserConfig } from "./types.js";

export const build = async (userConfig: UserConfig) => {
  const config = await resolveConfig(userConfig, "build");

  return viteBuild({
    base: "/",
    plugins: [await docit("build", config)],
  }).then(() => {
    process.exit(0);
  });
};
