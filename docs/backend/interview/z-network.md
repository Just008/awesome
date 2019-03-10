# 网络相关

进门最先的很多都是笔试, 虽然这部分内容在面试者看完考试的内容后。如果答的题不是特别好也不会直接不见就轰人走。但是，答得不好会当面询问、到时候仍然还是抓耳挠腮的料。

此处搜罗了一些简单的笔试题，仅供参考和自我学习。

## 基础题

### https 和 http 区别

[详细解析 HTTP 与 HTTPS 的区别](https://juejin.im/entry/58d7635e5c497d0057fae036)

HTTPS 协议是由 SSL + HTTP 协议构建的可进行加密传输，身份认证的网络协议，要比 HTTP 更安全

- HTTPS 需要申请 CA 证书
- HTTP 是超文本传输协议，HTTPS 则是具有安全性的 SSL 加密传输协议
- HTTP 和 HTTPS 使用的事完全不同的连接方式，用的端口号也不一样，前者是 80端口，后者是 443 
- HTTP 的连接很简单，是无状态的；HTTPS 协议是由 SSL + HTTP 协议构建的可进行加密传输、身份认证的网络协议，比 HTTP 协议简单

### 在浏览器中输入地址都做了那些事情

> 参考：[细说浏览器输入URL后发生了什么](https://segmentfault.com/a/1190000012092552)

1. DNS域名解析

2. 建立TCP连接

3. 发送HTTP请求

4. 服务器处理请求

5. 返回响应结果

6. 关闭TCP连接

7. 浏览器解析

8. 浏览器布局渲染

### HTTP 请求详解

参考: [HTTP 请求详解](https://www.jianshu.com/p/d4466f5e4f6b)

HTTP请求报文由3部分组成：请求行+请求头+请求体

1. 请求头

| 字段                               | 说明                                          | 示例                                                         |
| ------------------- | --------------------------------------------------- | ------------------------------------------------------------ |
| Accept              | 客户端能接收的**MIME**数据类型                               | Accept: text/plain, text/html                                |
| Accept-Charset      | 客户端采用的编码在格式                                       | Accept-Charset: iso-8859-5                                   |
| Accept-Encoding     | 客户端支持的数据压缩格式                                     | Accept-Encoding: compress, gzip                              |
| Accept-Language     | 客户端采用的语言环境                                         | Accept-Language: en,zh                                       |
| Authorization       | HTTP授权的授权证书                                           | Authorization: Basic QWxhZGRpbjpvcGVuIHNlc2FtZQ==            |
| Connection          | 请求完成后是保持链接Keep-Alive，还是关闭链接close            | Connection: close                                            |
| Content-Length      | 请求的内容长度                                               | Content-Length: 348                                          |
| Cookie              | 客户端可以向服务器带数据                                     | Cookie: $Version=1; Skin=new;                                |
| From                | 发出请求的用户的Email                                        | From: user@email.com |
| Host                | 客户端想连接的目标主机和端口号                               | Host: http://www.hao123.com:8080 |
| Referer             | 客户端是从哪个资源来访问服务器的（一般用来防盗链）           | Referer: http://www.hao123.com/archives/test.html |
| If-Modified-Since   | 资源的缓存时间                                               | If-Modified-Since: Sat, 29 Oct 2010 19:43:31 GMT             |
| Pragma              | 实现特定的指令，它可应用到响应链上的任何接收方               | Pragma: no-cache                                             |
| Refresh             | 服务端要求客户端多长时间刷新一次                             | Refresh: 5; url=http://www.hao123.com/archives/test.html |
| User-Agent          | 客户端的版本                                                 | User-Agent: Mozilla/5.0 (Linux; X11)                         |
| UA-Pixels           | 屏幕大小                                                     |                                                              |
| UA-Color            | 颜色深度                                                     |                                                              |
| UA-OS               | 操作系统类型                                                 |                                                              |
| UA-CPU              | CPU类型                                                      |                                                              |
| Accept-Ranges       | 可以请求网页实体的一个或者多个子范围字段                     | Accept-Ranges: bytes                                         |
| Cache-Control       | 指定请求和响应遵循的缓存机制                                 | Cache-Control: no-cache                                      |
| Content-Type        | 请求的与实体对应的MIME信息                                   | Content-Type: application/x-www-form-urlencoded              |
| Range               | 客户端只请求实体的一部分，指定范围                           | Range: bytes=500-999                                         |
| Date                | 客户端当前请求服务器的时间                                   | Date: Tue, 15 Nov 2010 08:12:31 GMT                          |
| If-Match            | 只有请求内容与实体相匹配才有效                               | If-Match: “737060cd8c284d8af7ad3082f209582d”                 |
| If-None-Match       | 如果内容未改变返回304代码，参数为服务器先前发送的Etag，与服务器回应的Etag比较判断是否改变 | If-None-Match: “737060cd8c284d8af7ad3082f209582d”            |
| If-Range            | 如果实体未改变，服务器发送客户端丢失的部分，否则发送整个实体。参数也为Etag | If-Range: “737060cd8c284d8af7ad3082f209582d”                 |
| If-Unmodified-Since | 只在实体在指定时间之后未被修改才请求成功                     | If-Unmodified-Since: Sat, 29 Oct 2010 19:43:31 GMT           |
| Max-Forwards        | 限制信息通过代理和网关传送的时间                             | Max-Forwards: 10                                             |
| Proxy-Authorization | 连接到代理的授权证书                                         | Proxy-Authorization: Basic QWxhZGRpbjpvcGVuIHNlc2FtZQ==      |
| TE                  | 客户端愿意接受的传输编码，并通知服务器接受接受尾加头信息     | TE: trailers,deflate;q=0.5                                   |
| Upgrade             | 向服务器指定某种传输协议以便服务器进行转换（如果支持）       | Upgrade: HTTP/2.0, SHTTP/1.3, IRC/6.9, RTA/x11               |
| Via                 | 通知中间网关或代理服务器地址，通信协议                       | Via: 1.0 fred, 1.1 nowhere.com (Apache/1.1)                  |
| Warning             | 关于消息实体的警告信息                                       | Warn: 199 Miscellaneous warning                              |


### 三次握手和四次挥手

参看地址：[通俗大白话来理解TCP协议的三次握手和四次分手](https://github.com/jawil/blog/issues/14)

1. 三次握手

  - 客户端发送一个SYN段，并指明客户端的初始序列号，即ISN(c).

  - 服务端发送自己的SYN段作为应答，同样指明自己的ISN(s)。为了确认客户端的SYN，将ISN(c)+1作为ACK数值。这样，每发送一个SYN，序列号就会加1. 如果有丢失的情况，则会重传。

  - 为了确认服务器端的SYN，客户端将ISN(s)+1作为返回的ACK数值。

2. 四次分手

  - 第一次分手：主机1（可以使客户端，也可以是服务器端），设置Sequence Number和Acknowledgment Number，向主机2发送一个FIN报文段；此时，主机1进入FIN_WAIT_1状态；这表示主机1没有数据要发送给主机2了
  
  - 第二次分手：主机2收到了主机1发送的FIN报文段，向主机1回一个ACK报文段，Acknowledgment Number为Sequence Number加1；主机1进入FIN_WAIT_2状态；主机2告诉主机1，我“同意”你的关闭请求

  - 第三次分手：主机2向主机1发送FIN报文段，请求关闭连接，同时主机2进入LAST_ACK状态

  - 第四次分手：主机1收到主机2发送的FIN报文段，向主机2发送ACK报文段，然后主机1进入TIME_WAIT状态；主机2收到主机1的ACK报文段以后，就关闭连接；此时，主机1等待2MSL后依然没有收到回复，则证明Server端已正常关闭，那好，主机1也可以关闭连接了。

![tcp-request](http://md.laragh.top/vuepress/network/tcp-request.png)

### Swoole 应用于什么场景

> Swoole 是 PHP 的一个扩展，Swoole 可以广泛应用于互联网、移动通信、企业软件、云计算、网络游戏、物联网（IOT）、车联网、智能家居等领域


### TCP 和 UDP 的区别？TCP 数据传输过程中怎么做到可靠的？

参考地址： [TCP 和 UDP 的区别](https://zhuanlan.zhihu.com/p/24860273)

1、基于连接与无连接；

2、对系统资源的要求（TCP较多，UDP少）；

3、UDP程序结构较简单；

4、流模式与数据报模式 ；

5、TCP保证数据正确性，UDP可能丢包；

6、TCP保证数据顺序，UDP不保证。

可靠的原因就在 4.5.6 这三点