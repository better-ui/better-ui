import demoBlock from "vitepress-theme-demoblock";
import { defineConfig } from "vitepress";
const siteConfig = {
  "/": [
    {
      text: "快速开始",
      collapsible: true,
      items: [
        { text: "Button 按钮", link: "/components/button/" },
        { text: "Icon 图标", link: "/components/icon/" },
      ],
    },
    {
      text: "Config",
      collapsible: true,
      items: [
        // This shows `/config/index.md` page.
        { text: "Index", link: "/components/1/" }, // /config/index.md
        { text: "Three", link: "/components/2/" }, // /config/three.md
        { text: "Four", link: "/components/3/" }, // /config/four.md
      ],
    },
  ],
};
export default defineConfig({
  lang: "zh-CN",
  title: "🔨  Better-Ui",
  description: "better-ui是一个基于Vite的UI组件库",
  lastUpdated: true,
  appearance: true,
  themeConfig: {
    siteTitle: "🔨  better-ui是一个基于Vite的UI组件库",
    logo: "/logo.png",
    sidebar: siteConfig,
    editLink: {
      pattern:
        "https://github.com/better-ui/better-ui/edit/master/packages/better-ui/docs/:path",
      text: "Edit this page on GitHub",
    },
    socialLinks: [
      { icon: "github", link: "https://github.com/better-ui/better-ui" },
    ],

    footer: {
      message: "Released under the MIT License.",
      copyright: "Copyright © 2022-present H7ml",
    },
  },
  markdown: {
    config: (md) => {
      const { demoBlockPlugin } = demoBlock;
      md.use(demoBlockPlugin);
    },
  },
});
