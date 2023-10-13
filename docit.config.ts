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
    head: [
      [
        "link",
        {
          rel: "stylesheet",
          href: "https://static-production.npmjs.com/styles.cb65339e823461fa6d91.css",
        },
      ],
      [
        "script",
        {
          type: "module",
        },
        `console.log('user injected')`,
      ],
    ],
  },
  server: {
    port: 8000,
  },
});
