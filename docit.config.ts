import { defineConfig } from "@blizzbolts/docit-core";

export default defineConfig({
  docRoot: "./docs",
  themeConfig: {
    nav: [
      { title: "Guide", url: "/" },
      { title: "Config", url: "/config/cli-commands" },
      { title: "GFM", url: "/config/GFM" },
    ],
  },
  site: {
    title: "Docit",
    description: "A Breif Description",
  },
  server: {
    port: 8000,
  },
});
