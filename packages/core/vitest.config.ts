/// <reference types="vitest" />
import path from "node:path";
import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    typecheck: {
      tsconfig: path.resolve("./tsconfig.json"),
    },
    alias: [
      { find: "@workspace", replacement: path.join(path.dirname(import.meta.url), "../../") },
    ],
  },
});
