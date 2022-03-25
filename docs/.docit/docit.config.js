const config = {
  title: "Docit",
  publicPath: "https://phshy0607.github.io/docit/",
  sidebars: [
    { title: "Get Started", path: "/index" },
    {
      title: "Configuration",
      children: [
        {
          title: "Sidebars",
          path: "/settings/sidebar",
        },
        {
          title: "Config File",
          path: "/settings/index",
        },
        { title: "Assets", path: "/settings/static-resources" },
      ],
    },
    {
      title: "Features",
      children: [
        {
          title: "MDX",
          path: "/features/MDX",
        },
        {
          title: "GFM",
          path: "/features/GFM",
        },
        {
          title: "API Generation",
          path: "/features/API",
        },
        {
          title: "How to use components in Docit",
          path: "/features/using-components-in-docit",
        },
      ],
    },
    {
      title: "Test",
      children: [
        { title: "Editor.md", path: "/Test/GFM" },
        { title: "Demo", path: "/Test/demo" },
      ],
    },
    { title: "FAQ", path: "/FAQ" },
    { title: "Feature Request List", path: "/feature-request" },
  ],
};
export default config;
