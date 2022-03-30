import { defineConfig } from "../../src/node/index";

const config = defineConfig({
  title: "Docit",
  publicPath: "https://phshy0607.github.io/docit/",
  socials: {
    Github: "https://github.com/phshy0607/docit",
  },
  sidebars: [
    { title: "Get Started", path: "/index" },
    {
      title: "Usage",
      children: [
        {
          title: "Syntax",
          path: "/usage/Syntax",
        },
        {
          title: "Sidebars",
          path: "/usage/sidebar",
        },
        { title: "Static Resources", path: "/usage/static-resources" },
      ],
    },
    {
      title: "Config File",
      path: "/Configs",
    },
    { title: "Troubleshooting", path: "/troubleshooting" },
  ],
});
export default config;
