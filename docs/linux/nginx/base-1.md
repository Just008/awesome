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