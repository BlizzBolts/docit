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
      title: "Syntax",
      children: [
        {
          title: "MDX",
          path: "/tutorials/MDX",
        },
        {
          title: "GFM",
          path: "/tutorials/GFM",
        },
        {
          title: "How to use components in Docit",
          path: "/tutorials/using-components-in-docit",
        },
      ],
    },
    // {
    //   title: "Test",
    //   children: [
    //     { title: "Editor.md", path: "/Test/GFM" },
    //     { title: "Demo", path: "/Test/demo" },
    //   ],
    // },
    { title: "FAQ", path: "/FAQ" },
    { title: "Feature Request List", path: "/feature-request" },
  ],
};
export default config;
