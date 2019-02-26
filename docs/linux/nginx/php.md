# 与 PHP 交互

用了那么多年的 `LNMP`，你真的知道 `nginx` 和 `php` 是怎么交互的么？

## 基础知识扫盲

关于 `cgi`. `Fastcgi`, `PHP-FPM` 的基础知识：

### cgi

`cgi` 是一种通用网关协议。

为了解决不同的语言解释器(如php、python解释器)与 `WebServer` 的通信而产生的一种协议。只要遵守这种协议就能实现语言与 `WebServer` 通讯。

`cgi` 是规定了要传什么数据和以什么格式传输给语言解析器的协议。

### Fastcgi

是一种对 `cgi` 协议升华的一种协议。

`Fastcgi`像是一个常驻 (long-live) 型的 `cgi`，它可以一直执行着，只要激活后，不会每次都要花费时间去 `fork` 一次(这是 `cgi` 最为人诟病的 `fork-and-execute` 模式)。

它还支持分布式的运算, 即 `Fastcgi` 程序可以在网站服务器以外的主机上执行并且接受来自其它网站服务器来的请求。

### PHP-FPM

全称：PHP Fastcgi Process Manager。

`PHP-FPM` 是一个实现了 Fastcgi 协议的程序,用来管理 Fastcgi 起的进程的。即能够调度 php-cgi 进程的程序，并提供了进程管理的功能。

进程包含 master 进程和 worker 进程两种进程。master进程只有一个，负责监听端口(默认9000)，接收来自 WebServer的请求，而 worker 进程则一般有多个(具体数量根据实际需要配置)，每个进程内部都嵌入了一个 PHP 解释器，是PHP代码真正执行的地方。

**补充：当你的机器处理 `php` 的速度不够快而且机器配置尚可时，可以通过加 worker 的形式加快处理速度。**


### Fastcgi 优势

Fastcgi 则会先 fork 一个 master，解析配置文件，初始化执行环境，然后再 fork 多个 worker。

当请求过来时，master 会传递给一个 worker ，然后立即可以接受下一个请求。这样就避免了重复的劳动，效率自然是高。

而且当 worker 不够用时，master 可以根据配置预先启动几个 worker 等着；当然空闲 worker 太多时，也会停掉一些，这样就提高了性能，也节约了资源。这就是Fastcgi的对进程的管理。

大多数Fastcgi实现都会维护一个进程池。注：swoole作为httpserver，实际上也是类似这样的工作方式。

**所以，php-fpm 的默认配置是：worker 是动态调整的**

## 交互过程

我们以用户访问index.php为，服务器环境为LNMP:
1. 用户请求index.php时，首先到 `Nginx`

2. `Nginx`

   - 根据配置查找路由
   - 加载 nginx 的 fast-cgi 模块( FastCGI 的 Client ),将根据 fastcgi.conf 文件中`fastcgi_*`配置参数值也一并加入转发任务中
   - 根据 nginx.conf 文件`fastcgi_pass`配置将请求转发到`127.0.0.1:9000`。

3. `PHP-FPM`

   - `PHP-FPM` 的 `master` 进程监听 `9000` 端口。
   - 收到请求后调用子进程来处理逻辑，PHP解释器解释PHP语法并返回给 `Nginx` 。

4. `Nginx`

   - 将响应返回给用户