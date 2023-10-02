import { defineConfig } from "@blizzbolts/docit-core";

export default defineConfig({
  docRoot: "./docs",
  themeConfig: {
    nav: [
      { title: "Guide", url: "/" },
      { title: "Config", url: "/config/cli-commands" },
    ],
  },
});
