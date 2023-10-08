import { defineConfig } from "vitest/config";

const timeout = 60_000;

export default defineConfig({
  test: {
    setupFiles: ["vitest.setup.ts"],
    globalSetup: ["vitest.global.setup.ts"],
    testTimeout: timeout,
    hookTimeout: timeout,
    teardownTimeout: timeout,
    globals: true,
  },
});
