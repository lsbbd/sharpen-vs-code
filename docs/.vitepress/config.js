// @ts-check

/**
 * @type {import('vitepress').UserConfig}
 */
module.exports = {
  title: 'VS Code 磨刀日记',
  description: '',
  lang: 'zh-CN',
  head: [],
  themeConfig: {
    repo: 'lsbbd/sharpen-vs-code',
    docsBranch: 'main',

    sidebar: {
      '/': [
        {
          text: '配置项',
          link: '/preferences'
        }
      ]
    }
  }
}