const web = {
  text: '前端',
  items: [
    {
      text: '基础',
      items: [
        { text: 'ES6', link: '/web/es6/' },
        { text: 'Vue', link: '/web/vue/' },
      ]
    },
    {
      text: '扩展',
      items: [
        { text: 'Typescript', link: '/web/typescript/' },
      ]
    }
  ]
}

const backend = {
  text: '后端',
  items: [
    {
      text: 'PHP',
      items: [
        { text: 'Laravel', link: '/backend/php/laravel/' },
        { text: 'Swoole', link: '/backend/php/swoole/' },
        { text: '设计模式', link: '/backend/php/design-pattern/' }
      ]
    },
    {
      text: 'SQL',
      items: [
        { text: 'Mysql', link: '/zh/miscellaneous/migration-guide.html' },
        { text: 'Redis', link: '/zh/faq/' }
      ]
    },
    {
      text: '其他',
      items: [
        { text: 'Git', link: '/zh/miscellaneous/migration-guide.html' },
        { text: 'Vim', link: '/zh/miscellaneous/migration-guide.html' },
        { text: 'Markdown', link: '/zh/faq/' }
      ]
    }
  ]
}

const linux = {
  text: 'Linux',
  items: [
    {
      text: '基础知识',
      items: [
        { text: 'Docker', link: '/linux/docker/' },
        { text: 'Nginx', link: '/linux/nginx/' },
      ]
    },
    {
      text: '运维方向',
      items: [
        { text: 'AB 测试工具', link: '/linux/ab.html' },
        { text: 'Supervisor', link: '/linux/supervisor.html' },
        { text: '部署', link: '/zh/miscellaneous/migration-guide.html' },
        { text: '分布式', link: '/zh/faq/' }
      ]
    }
  ]
}

module.exports = [
  { text: '首页', link: '/' },
  { text: '指南', link: '/guide/' },
  web,
  backend,
  linux,
  { text: '其他', link: '/other/' }
]
