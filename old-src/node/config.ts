import path from "path";
import { isFileExists } from "./utils/index.js";
import type { UserConfig, ResolvedUserConfig } from "./types.js";
import { BUILD_DIST_PATH } from "./constants.js";

export const resolveConfig = async (
  config: UserConfig,
  command: "build" | "start"
): Promise<ResolvedUserConfig> => {
  return {
    base: path.resolve(BUILD_DIST_PATH, "./client"),
    docs: path.resolve(process.cwd(), config.root),
    title: config.title || "Docit",
    sidebars: config.sidebars || [],
    providerPath: isFileExists(config.providerPath)
      ? config.providerPath
      : path.resolve(
          BUILD_DIST_PATH,
          "./client/components/DefaultProvider/index.js"
        ),
    publicPath: command === "build" ? config.publicPath : "/",
    socials: config.socials,
    vite: config.vite,
  };
};
