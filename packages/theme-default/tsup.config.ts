import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts"],
  dts: true,
  splitting: false,
  shims: true,
  outDir: "dist",
  format: ["esm"],
  injectStyle: true,
});
