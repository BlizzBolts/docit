import path from "node:path";
import { createDocitPlugin } from "@blizzbolts/vite-plugin-docit";
import { build as viteBuild } from "vite";

export const build = async (root: string) => {
  await viteBuild({
    root: path.resolve(process.cwd(), "./", root),
    plugins: [createDocitPlugin({ root })],
    build: {
      minify: false,
    },
  });
};
