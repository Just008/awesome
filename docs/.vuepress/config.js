const utils = require('./utils')

module.exports = {
  title: 'Awesome',
  description: '多少殷勤全白付，当年戏语误青丝。',
  base: '/awesome/',
  head: [
    [
      'link',
      {
        rel: 'icon',
        href: '/favicon.ico'
      }
    ]
  ],
  themeConfig: {
    nav: require('./nav/zh'),
    sidebar: utils.inferSiderbars(),
    lastUpdated: '上次更新',
    repo: 'Just008/awesome',
    editLinks: true,
    docsDir: 'docs',
    editLinkText: '在 GitHub 上编辑此页',
    sidebarDepth: 2
  
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@public': './public'
      }
    }
  },
  markdown: {
    config: md => {
      // use more markdown-it plugins!
      md.use(require('markdown-it-include'))
    }
  }
}
