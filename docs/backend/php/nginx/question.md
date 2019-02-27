# 常见问题

在 Nginx 的配置时会有很多问题需要解决。这里就列出常见的问题

## 重定向配置

1. 一级域名强制跳转二级域名

最常见的例子是在访问 `xxx.com` 时，你想让它强制跳转 `www.xxx.com`

```bash
server {
  listen 80;
  server_name xxx.com;
  # 我在这里
  if ($http_host ~ "^***.com$") {
    rewrite  ^(.*)    http://www.***.com$1 permanent;
  }
  ...
}

```

2. http 强制跳转 https

```bash
server {
  listen 80;
  server_name xxx.xxx.com;
  # 我在这里
  rewrite ^(.*)$  https://$host$1 permanent;
  ...
}
```

## 反向代理静态文件解析错误

**前端项目:**

`vue-cli-3` 创建的项目。需要你根据不同的环境，添加不同的 `path`

```javascript
// 在 vue.config.js 文件中
module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/backend/'
    : '/',
  ...
}
```

**后端项目:**

静态资源上传到 CDN 上，既能减轻项目的大小。也能保证在不同地域的访问速度