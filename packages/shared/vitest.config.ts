/// <reference types="vitest" />
import path from "node:path";
import { defineConfig } from "vitest/config";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  test: {
    typecheck: {
      tsconfig: path.resolve("./tsconfig.json"),
    },
    coverage: {
      include: ["src/**"],
      exclude: ["build/**", "node_modules/**"],
    },
  },
  plugins: [tsconfigPaths()],
});
