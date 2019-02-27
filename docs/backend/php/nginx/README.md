# 简介

> Nginx 是一个免费的，开源的，高性能的HTTP服务器和反向代理。`Nginx` 是在 `Web` 开发中必不可少的存在，无论是前端项目还是后端的项目都需要进行 `Nginx` 的配置和使用。
>
> 那么你真的了解你以为你掌握的 `Nginx` 知识么？

![](http://md.laragh.top/vuepress/nginx.png)

## 工作方式

Nginx 有一个主线程（ master process）和几个工作线程（worker process）。主线程的目的是加载和验证配置文件、维护工作线程。

工作线程处理实际的请求，Nginx 采用基于事件的模型和依赖操作系统的机制在工作线程之间高效地分发请求。工作线程的数量可配置，也可自动调整为服务器CPU的数量。

Nginx 及其模块的工作方式由配置文件确定。 默认情况下，配置文件名为 nginx.conf，放在 `/usr/local/nginx/conf` 、`/etc/nginx` 或者 `/usr/local/etc/nginx` 文件夹中。


## 参考网址

[初识 Nginx](https://lufficc.com/blog/nginx-for-beginners)

[Nginx 教程](https://www.gitbook.com/book/yinsigan/nginx)

[Nginx 在线配置网站](https://nginxconfig.io/)