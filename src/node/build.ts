import { build as viteBuild } from "vite";
import { resolveConfig } from "./config.js";
import { docit } from "./plugins/index.js";
import { UserConfig } from "./types.js";
import path from "path";
import { resolveAbsPath } from "./utils/paths.js";
import { BUILD_DIST_PATH } from "./constants.js";

export const build = async (userConfig: UserConfig) => {
  const config = await resolveConfig(userConfig, "build");

  const buildServer = async () => {
    viteBuild({
      plugins: [await docit("build", config)],
      build: {
        outDir: path.resolve(process.cwd(), "./docs-dist/server"),
        emptyOutDir: true,
        ssr: true,
        rollupOptions: {
          input: resolveAbsPath("./client/entry-server.js", BUILD_DIST_PATH),
        },
      },
    });
  };

  const buildClient = async () => {
    viteBuild({
      plugins: [await docit("build", config)],
      build: {
        outDir: path.resolve(process.cwd(), "./docs-dist/client"),
        emptyOutDir: true,
      },
    });
  };

  await buildServer();
  await buildClient();
};
