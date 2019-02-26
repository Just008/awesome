# 初识 Nginx

Nginx 以其高性能，稳定性，丰富的功能，简单的配置和低资源消耗而闻名。

## 安装

```bash
# Ubuntu
$ sudo apt-get install -y nginx

# 编译安装，编译三部曲
$ ./configure
$ make
$ sudo make install

# configure 也可以自己配置的，当然一般情况下是不会自己添加这么多配置的
./configure \
--user=nginx                          \
--group=nginx                         \
--prefix=/etc/nginx                   \
--sbin-path=/usr/sbin/nginx           \
--conf-path=/etc/nginx/nginx.conf     \
--pid-path=/var/run/nginx.pid         \
--lock-path=/var/run/nginx.lock       \
--error-log-path=/var/log/nginx/error.log \
--http-log-path=/var/log/nginx/access.log \
--with-http_gzip_static_module        \
--with-http_stub_status_module        \
--with-http_ssl_module                \
--with-pcre                           \
--with-file-aio                       \
--with-http_realip_module             \
--without-http_scgi_module            \
--without-http_uwsgi_module           \
--without-http_fastcgi_module
```

具体的编译安装的方法可以参考官方的这篇文章 [configure](http://nginx.org/en/docs/configure.html)。

## 基本命令

三种命令语法：

```bash
$ sudo /etc/init.d/nginx restart # or start, stop
```

或者：

```bash
$ sudo service nginx restart # or start, stop
```

有时候我们改了配置文件只是要让配置生效，这个时候不必重启，只要重新加载配置文件即可。

```bash
# quit 优雅的关闭
# stop 快速关闭
# reopen 重新打开日志
# reload 重载配置
$ sudo nginx -s reload # or quit, reopen, stop
```

`sudo nginx -s quit` : Nginx 会等待进程处理完当前请求后再去关闭

`sudo nginx -s reload` : 首先检查配置语法，如果语法无误。主线程会开辟新的线程并向旧的线程发出关闭信号。如果语法错误，则主线程回滚并继续使用旧的配置。

## 配置文件的简介

- Nginx 配置的核心是定义要处理的 `URL` 以及如何响应这些 `URL` 请求，即定义一系列的**虚拟服务 (Virtual Servers)** 控制对来自特定域名或者 IP 的请求。

- 每一个虚拟服务定义一系列的 `location` 控制处理特定的 `URI` 集合。每一个 `location` 定义了对映射到自己的请求的处理场景，可以返回一个文件或者代理此请求

- Nginx 是由不同的模块组成，和这些模块由配置文件中指定的指令控制。指令分为**简单指令和块指令**

- 一个简单指令包含**指令名称和指令参数，**以空格分隔，以分号(`;`)结尾。块指令和简单指令相似，都是由 `{` 和 `}` 包围。如果块指令大括号中包含其他的指令，则称该指令为上下文 (如： `events`, `http`, `server`, `location`)。

- 配置文件中的放在上下文之外的指令默认放在主配置文件中 (类似集成主配置文件)。`events` 和 `http` 放置在主配置文件中，`server` 放置在 `http` 块指令中，`location` 防止在 `server` 块指令中。

- 配置文件的注释是 `#` 开始。

**整个配置文件结构是这样的：**

```bash
# 这里是一些配置
events {
  # 这里是一些配置
  ...
}

http {
  # 这里是一些配置
  ...
  # 这部分可能存在于/etc/nginx/conf.d/目录下
  upstream {

  }
  server {
    listen 8080;
    root /data/up1;

    location / {
    }
  }
  # 引入不同的配置文件的方式来解决多个站点配置分开的功能
  include /etc/nginx/conf.d/*.conf;
	include /etc/nginx/sites-enabled/*;
}

mail {
  # 这里是一些配置
  ...
}
```

## 站点配置

比如你现在有一个域名，要部署一个网站，那就得创建一个 `server` 块， 那就在 `/etc/nginx/conf.d/` 下面创建一个 `*.conf` 文件。

假设你有个域名是 `foo.bar.com`, 那么配置文件可能如下

```bash
server {
    listen      80;
    server_name example.org www.example.org;
    root        /data/www;

    location / {
      index   index.html index.php;
    }

    location ~* \.(gif|jpg|png)$ {
      # 文件缓存时间
      expires 30d;
    }

    location ~ \.php$ {
        fastcgi_pass  localhost:9000;
        fastcgi_param SCRIPT_FILENAME
                      $document_root$fastcgi_script_name;
        include       fastcgi_params;
    }
}
```
当用户访问 `http://example.org` 时会执行：

- 读取 `/data/www/index.html`，如果读取不到就会转发到 `fastcgi_pass` 里面的逻辑。
- 当用户访问 `http://example.org/about.html` 就会读取 `/data/www/about.html`
