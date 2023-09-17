import { createServer } from "vite";
import { createDocitPlugin } from "@blizzbolts/vite-plugin-docit";
export const start = async () => {
  const cwd = process.cwd();
  createServer({
    root: "./docs",
    base: "/",
    server: {
      port: 3000,
    },
    plugins: [createDocitPlugin()],
  }).then(async (s) => {
    await s.listen();
    s.printUrls();
  });
};
