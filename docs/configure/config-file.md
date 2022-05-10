# Config File

> Docit will watch your config file in dev mode, if config file changes, dev server will restart.

Docit also support more configs via config file.

A valid config file need to be placed under `.docit` folder, and named as `docit.config.js`.

```
|-[your-project-root]
  |-docs
    |-.docit
      |-docit.config.js
    |- your-doc.md
```

## Example

```js
const config = {
  /**
   * Your document title, will show at the left top corner and also `document.title`
   *
   * @Default 'Docit'
   */
  title: "Docit",

  /**
   * Public path for your assets, also check out https://vitejs.dev/config/#base
   *
   * @Default '/'
   */
  publicPath: "https://blizzbolts.github.io/docit/",

  /**
   * A path to your provider, need to be an absolute path.
   *
   * @Default path.resolve(CLIENT_PATH, './components/DefaultProvider/index.js'),
   */
  providerPath: "https://blizzbolts.github.io/docit/",

  /**
   * Custom Sidebar Configs
   *
   * @Default undefined
   */
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
    { title: "FAQ", path: "/FAQ" },
    { title: "Feature Request List", path: "/feature-request" },
  ],

  /**
   * Custom Social Info
   * 
   * @Default undefined
   */
  socials: {
    Twitter: 'xxx',
    Github: 'xxx'
  }
};
export default config;
```
