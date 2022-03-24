const config = {
  title: "Docgen",
  sidebars: [
    { title: "介绍", path: "/index" },
    {
      title: "页面配置",
      children: [
        {
          title: "侧边栏",
          path: "/settings/sidebar",
        },
        {
          title: "自定义配置",
          path: "/settings/index",
        },
        { title: "静态资源", path: "/settings/static-resources" },
      ],
    },
    {
      title: "文档语法",
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
          title: "如何书写使用 Components",
          path: "/tutorials/using-components-in-docgen",
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
    { title: "待添加需求列表", path: "/feature-request" },
  ],
  publicPath: `https://unpkg.alibaba-inc.com/@alife/cnfe-docgen@1.1.1/docs-dist/`,
};
export default config;
