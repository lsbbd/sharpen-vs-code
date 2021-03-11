// @ts-check

/**
 * @type {import('vitepress').UserConfig}
 */
module.exports = {
  title: '🔪VS Code 磨刀记',
  description: `粗磨修复刃口，细磨锋利固刃`,
  lang: 'zh-CN',
  head: [],
  themeConfig: {
    repo: 'lsbbd/sharpen-vs-code',
    docsBranch: 'main',
    editLinks: true,
    editLinkText: '为此页提供修改建议',
    nav: [
      {
        text: '配置',
        link: '/preferences'
      },
      {
        text: '插件',
        link: '/plugins'
      },
      {
        text: '技巧',
        link: '/tips'
      },
      {
        text: 'lsbbd',
        items: [
          {
            text: 'github',
            link: 'https://github.com/lsbbd'
          },
          {
            text: '掘金',
            link: 'https://juejin.cn/user/659362706625976'
          }
        ]
      }
    ],
    
    sidebar: {
      '/': [
        {
          text: '配置',
          link: '/preferences'
        },
        {
          text: '插件',
          link: '/plugins'
        },
        {
          text: '技巧',
          link: '/tips'
        }
      ]
    }
  }
}