const utils = require("./utils")

module.exports = {
  title: "Awesome",
  description: "个人学习总结",
  base: "/awesome/",
  head: [
    [
      "link",
      {
        rel: "icon",
        href: "/favicon.ico"
      }
    ]
  ],
  themeConfig: {
    nav: [
      {
        text: "首页",
        link: "/"
      },
      {
        text: "指南",
        link: "/guide/"
      },

      {
        text: "后端",
        items: [
          {
            text: 'PHP',
            items: [
              {
                text: 'Laravel',
                link: '/backend/php/laravel.html'
              },
              {
                text: 'Swoole',
                link: '/backend/php/swoole.html',
              },
              {
                text: '设计模式',
                link: '/backend/php/design-pattern.html',
              }
            ]
          },
          {
            text: 'SQL',
            items: [
              {
                text: 'Mysql',
                link: '/zh/miscellaneous/migration-guide.html'
              },
              {
                text: 'Redis',
                link: '/zh/faq/',
              }
            ]
          },
          {
            text: 'Linux',
            items: [
              {
                text: 'Docker',
                link: '/zh/faq/',
              },
              {
                text: 'Nginx',
                link: '/zh/miscellaneous/migration-guide.html'
              },
              {
                text: 'Supervisor',
                link: '/zh/faq/',
              }
            ]
          },
          {
            text: '运维方向',
            items: [
              {
                text: '部署',
                link: '/zh/miscellaneous/migration-guide.html'
              },
              {
                text: '分布式',
                link: '/zh/faq/',
              }
            ]
          },
          {
            text: '其他',
            items: [
              {
                text: 'Git',
                link: '/zh/miscellaneous/migration-guide.html'
              },
              {
                text: 'Vim',
                link: '/zh/miscellaneous/migration-guide.html'
              },
              {
                text: 'Markdown',
                link: '/zh/faq/',
              }
            ]
          }
        ]
      },
      {
        text: "前端",
        items: [
          {
            text: '基础',
            items: [
              {
                text: 'ES6',
                link: '/zh/miscellaneous/design-concepts.html'
              },
              {
                text: 'Vue',
                link: '/zh/faq/',
              },
              {
                text: '编辑器',
                link: '/zh/faq/',
              }
            ]
          },
          {
            text: '扩展',
            items: [
              {
                text: 'Typescript',
                link: '/zh/miscellaneous/migration-guide.html'
              },
              {
                text: '编辑器',
                link: '/zh/faq/',
              }
            ]
          }
        ]
      },
      {
        text: "其他",
        link: "/other/"
      }
    ],
    sidebar: utils.inferSiderbars(),
    lastUpdated: "上次更新",
    repo: "Just008/awesome",
    editLinks: true,
    docsDir: "docs",
    editLinkText: "在 GitHub 上编辑此页",
    sidebarDepth: 2
  },
  configureWebpack: {
    resolve: {
      alias: {
        "@public": "./public"
      }
    }
  },
  ga: "UA-109340118-1",
  markdown: {
    config: md => {
      // use more markdown-it plugins!
      md.use(require("markdown-it-include"))
    }
  }
}