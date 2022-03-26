const config = {
  title: 'Docit',
  publicPath: 'https://phshy0607.github.io/docit/',
  sidebars: [
    { title: 'Get Started', path: '/index' },
    {
      title: 'Usage',
      children: [
        {
          title: 'Syntax',
          path: '/usage/Syntax',
        },
        {
          title: 'API Generation',
          path: '/usage/API',
        },
        {
          title: 'Sidebars',
          path: '/usage/sidebar',
        },
        { title: 'Static Resources', path: '/usage/static-resources' },

        {
          title: 'How to use components in Docit',
          path: '/usage/using-components-in-docit',
        },
      ],
    },
    {
      title: 'Test',
      children: [
        { title: 'Editor.md', path: '/Test/GFM' },
        { title: 'Demo', path: '/Test/demo' },
      ],
    },
    {
      title: 'Config File',
      path: '/Configs',
    },
    { title: 'FAQ', path: '/FAQ' },
    { title: 'Feature Request List', path: '/feature-request' },
  ],
};
export default config;
