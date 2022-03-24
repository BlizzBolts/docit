const config = {
  title: "Docgen",
  sidebars: [
    { title: "Intro", path: "/index" },
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
          path: "/tutorials/using-components-in-docgen",
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
  publicPath: `https://unpkg.alibaba-inc.com/@alife/cnfe-docgen@1.1.1/docs-dist/`,
};
export default config;
