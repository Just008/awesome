const web = {
  text: '前端',
  items: [
    {
      text: '基础',
      items: [
        { text: 'Vue', link: '/web/vue/' },
        { text: 'Vue Book', link: '/web/vue-book/' },
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
        { text: '设计模式', link: '/backend/php/design-pattern/' },
        { text: 'Nginx', link: '/backend/php/nginx/' }
      ]
    },
    {
      text: 'SQL',
      items: [
        { text: 'Mysql', link: '/backend/sql/mysql/' },
        { text: 'Redis', link: '/backend/sql/redis/' }
      ]
    },
    {
      text: '其他',
      items: [
        { text: 'Git', link: '/backend/other/git.html' },
        { text: 'Markdown', link: '/backend/other/markdown.html' },
        { text: '面试宝典', link: '/backend/interview/' }
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
        { text: 'Vim', link: '/linux/vim.html' },
        { text: 'Supervisor', link: '/linux/supervisor.html' },
        { text: 'Screen', link: '/linux/screen.html' },
        { text: 'Bash 命令', link: '/linux/bs.html' },
      ]
    },
    {
      text: '运维方向',
      items: [
        { text: 'LNMP 搭建', link: '/linux/lnmp.html' },
        { text: 'AB 测试工具', link: '/linux/ab.html' },
        { text: 'Deployer', link: '/linux/deployer-auto.html' },
        { text: 'Sentry 部署', link: '/linux/sentry-auto.html' },
        { text: 'Sentry 异常提醒', link: '/linux/sentry-auto-notice-error.html' },
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
  { text: 'Leetcode', link: '/leetcode/' }
]
