import { defineConfig } from "vitest/config";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  test: {
    environment: "jsdom",
    exclude: ["styled-system/**", "node_modules/**"],
  },
  plugins: [tsconfigPaths()],
});
