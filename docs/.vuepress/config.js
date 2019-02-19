const utils = require('./utils')

module.exports = {
  title: 'Awesome',
  description: '个人学习总结',
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
    sidebarDepth: 3
  
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@public': './public'
      }
    }
  },
  ga: 'UA-109340118-1',
  markdown: {
    config: md => {
      // use more markdown-it plugins!
      md.use(require('markdown-it-include'))
    }
  }
}
