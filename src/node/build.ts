import { resolveAbsPath } from "./utils/index.js";
import { build as viteBuild } from "vite";
import { resolveConfig } from "./config.js";
import { docit } from "./plugins/index.js";
import { UserConfig } from "./types.js";
import { BUILD_DIST_PATH } from "./constants.js";

export const build = async (userConfig: UserConfig) => {
  const config = await resolveConfig(userConfig, "build");

  return viteBuild({
    base: "/",
    plugins: [await docit("build", config)],
    build: {
      ssr: true,
      rollupOptions: {
        input: resolveAbsPath(BUILD_DIST_PATH, "./client/entry-server.js"),
      },
    },
  }).then(() => {
    process.exit(0);
  });
};
