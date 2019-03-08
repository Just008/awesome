# 反向代理

代理服务器分为：正向代理和反向代理。 代理就是委托去做一些事情

正向代理的作用有很多，例如，能访问本无法访问的，加速，cache，隐藏访问者的行踪等，具体的不再详述了 [工作中真的不常用]

![正向代理图解](http://md.laragh.top/vuepress/nginx/nginx-redirect-1.png)

反向代理和正向代理相反，用户访问反向代理服务器，感觉就是这个服务器提供的服务。用户并不能感知代理服务器的存在。

反向代理的作用：

- 隐藏和保护原服务器
- 负载均衡，当反向代理服务器不止一个的时候，就可以做一个集群

![正向代理图解](http://md.laragh.top/vuepress/nginx/nginx-redirect-2.png)

nginx的反向代理是依赖于 [ngx_http_proxy_module](http://nginx.org/en/docs/http/ngx_http_proxy_module.html) 这个 module 来实现的。

反向代理服务器能代理的请求的协议包括 `http(s)`，`FastCGI`，`SCGI`，`uwsgi`，`memcached` 等。我们这里主要集中在 `http(s)` 协议。

## 简单示例

有一个网站，用 `https` 协议来访问。用这个协议访问的网站在 `chrome` 等浏览器中有一个小绿锁。当访问某些静态资源时，使用的 `http` 协议访问的。这时这个小绿锁就没得了。

目的：使用 https 协议反向代理到 `http` 协议的真实图片上。`https` 协议的图片是不存在，因为它有一个地址实际只想的内容是 http 协议中的图片。

```bash
# https
server {
  server_name www.example.com;
  listen       443;
  location /newchart/hollow/small/nsh000001.gif {
    proxy_pass http://image.sinajs.cn/newchart/hollow/small/nsh000001.gif;
  }

  location /newchart/hollow/small/nsz399001.gif {
    proxy_pass http://image.sinajs.cn/newchart/hollow/small/nsz399001.gif;
  }
}
```

## 动态转发

因为网站的存在，不仅仅是静态展示的，还要处理一些动态请求，例如表单等。所以还要与一些动态语言[PHP 、Python 等]结合使用

```bash
location ~ \.php$ {
  fastcgi_pass   127.0.0.1:9000;
  #fastcgi_pass /run/php/php7.1-fpm.sock;
  fastcgi_index  index.php;
  fastcgi_param  SCRIPT_FILENAME  $document_root$fastcgi_script_name;
  include        fastcgi_params;
}
```

## Webscoket


