/// <reference types="vitest" />
import { defineConfig } from "vitest/config";
import path from "node:path";

export default defineConfig({
  test: {
    typecheck: {
      tsconfig: path.resolve("./tsconfig.json"),
    },
    alias: [{ find: "@", replacement: path.join(path.dirname(import.meta.url), "src") }],
  },
});
