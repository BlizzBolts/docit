import { defineConfig } from "vitest/config";
import { aliasConfig } from "./rollup.config.mjs";

export default defineConfig({
  test: {
    alias: aliasConfig,
    environment: "jsdom",
    coverage: {
      include: ["src/**"],
      exclude: ["styled-system/**"],
    },
  },
});
