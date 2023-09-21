/// <reference types="vitest" />
import path from "node:path";
import { defineWorkspace } from "vitest/config";

export default defineWorkspace([
  "packages/*",
  {
    resolve: {
      alias: [{ find: "@workspace", replacement: path.dirname(import.meta.url) }],
    },
  },
]);
