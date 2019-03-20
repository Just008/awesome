# 网络相关

进门最先的很多都是笔试, 虽然这部分内容在面试者看完考试的内容后。如果答的题不是特别好也不会直接不见就轰人走。但是，答得不好会当面询问、到时候仍然还是抓耳挠腮的料。

此处搜罗了一些简单的笔试题，仅供参考和自我学习。

## 基础题

### 讲解一下 http 协议

- 支持客户/服务器模式。
- 简单快速：客户向服务器请求服务时，只需传送请求方法和路径。请求方法常用的有GET、HEAD、POST。每种方法规定了客户与服务器联系的类型不同。由于HTTP协议简单，使得HTTP服务器的程序规模小，因而通信速度很快。
- 灵活：HTTP允许传输任意类型的数据对象。正在传输的类型由Content-Type加以标记。
- 无连接：无连接的含义是限制每次连接只处理一个请求。服务器处理完客户的请求，并收到客户的应答后，即断开连接。采用这种方式可以节省传输时间。
- 无状态：HTTP协议是无状态协议。无状态是指协议对于事务处理没有记忆能力。缺少状态意味着如果后续处理需要前面的信息，则它必须重传，这样可能导致每次连接传送的数据量增大。另一方面，在服务器不需要先前信息时它的应答就较快。

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
| -------------------------- | --------------------------------------------------- | ------------------------------------------------------------ |
| Accept                   | 客户端能接收的**MIME**数据类型                               | Accept: text/plain, text/html                                |
| Accept-Charset           | 客户端采用的编码在格式                                       | Accept-Charset: iso-8859-5                                   |
| Accept-Encoding          | 客户端支持的数据压缩格式                                     | Accept-Encoding: compress, gzip                              |
| Accept-Language          | 客户端采用的语言环境                                         | Accept-Language: en,zh                                       |
| Authorization            | HTTP授权的授权证书                                           | Authorization: Basic QWxhZGRpbjpvcGVuIHNlc2FtZQ==            |
| Connection               | 请求完成后是保持链接Keep-Alive，还是关闭链接close            | Connection: close                                            |
| Content-Length           | 请求的内容长度                                               | Content-Length: 348                                          |
| Cookie                   | 客户端可以向服务器带数据                                     | Cookie: $Version=1; Skin=new;                                |
| From                     | 发出请求的用户的Email                                        | From: user@email.com |
| Host                     | 客户端想连接的目标主机和端口号                               | Host: http://www.hao123.com:8080 |
| Referer                  | 客户端是从哪个资源来访问服务器的（一般用来防盗链）           | Referer: http://www.hao123.com/archives/test.html |
| If-Modified-Since         | 资源的缓存时间                                               | If-Modified-Since: Sat, 29 Oct 2010 19:43:31 GMT             |
| Pragma                   | 实现特定的指令，它可应用到响应链上的任何接收方               | Pragma: no-cache                                             |
| Refresh                  | 服务端要求客户端多长时间刷新一次                             | Refresh: 5; url=http://www.hao123.com/archives/test.html |
| User-Agent               | 客户端的版本                                                 | User-Agent: Mozilla/5.0 (Linux; X11)                         |
| UA-Pixels                | 屏幕大小                                                     |                                                              |
| UA-Color                 | 颜色深度                                                     |                                                              |
| UA-OS                    | 操作系统类型                                                 |                                                              |
| UA-CPU                   | CPU类型                                                      |                                                              |
| Accept-Ranges            | 可以请求网页实体的一个或者多个子范围字段                     | Accept-Ranges: bytes                                         |
| Cache-Control            | 指定请求和响应遵循的缓存机制                                 | Cache-Control: no-cache                                      |
| Content-Type             | 请求的与实体对应的MIME信息                                   | Content-Type: application/x-www-form-urlencoded              |
| Range                    | 客户端只请求实体的一部分，指定范围                           | Range: bytes=500-999                                         |
| Date                     | 客户端当前请求服务器的时间                                   | Date: Tue, 15 Nov 2010 08:12:31 GMT                          |
| If-Match                 | 只有请求内容与实体相匹配才有效                               | If-Match: “737060cd8c284d8af7ad3082f209582d”                 |
| If-None-Match            | 如果内容未改变返回304代码，参数为服务器先前发送的Etag，与服务器回应的Etag比较判断是否改变 | If-None-Match: “737060cd8c284d8af7ad3082f209582d”            |
| If-Range                 | 如果实体未改变，服务器发送客户端丢失的部分，否则发送整个实体。参数也为Etag | If-Range: “737060cd8c284d8af7ad3082f209582d”                 |
| If-Unmodified-Since       | 只在实体在指定时间之后未被修改才请求成功                     | If-Unmodified-Since: Sat, 29 Oct 2010 19:43:31 GMT           |
| Max-Forwards             | 限制信息通过代理和网关传送的时间                             | Max-Forwards: 10                                             |
| Proxy-Authorization      | 连接到代理的授权证书                                         | Proxy-Authorization: Basic QWxhZGRpbjpvcGVuIHNlc2FtZQ==      |
| TE                       | 客户端愿意接受的传输编码，并通知服务器接受接受尾加头信息     | TE: trailers,deflate;q=0.5                                   |
| Upgrade                  | 向服务器指定某种传输协议以便服务器进行转换（如果支持）       | Upgrade: HTTP/2.0, SHTTP/1.3, IRC/6.9, RTA/x11               |
| Via                      | 通知中间网关或代理服务器地址，通信协议                       | Via: 1.0 fred, 1.1 nowhere.com (Apache/1.1)                  |
| Warning                  | 关于消息实体的警告信息                                       | Warn: 199 Miscellaneous warning                              |

2. 响应头

| 应答头                               | 说明                                        |
| -------------------------- | ---------------------------------------------------|
| Allow            | 服务器支持哪些请求方法（如GET、POST等）。                    |
| Content-Encoding | 文档的编码（Encode）方法。只有在解码之后才可以得到Content-Type头指定的内容类型。利用gzip压缩文档能够显著地减少HTML文档的下载时间。Java的GZIPOutputStream可以很方便地进行gzip压缩，但只有Unix上的Netscape和Windows上的IE 4、IE 5才支持它。因此，Servlet应该通过查看Accept-Encoding头（即request.getHeader("Accept-Encoding")）检查浏览器是否支持gzip，为支持gzip的浏览器返回经gzip压缩的HTML页面，为其他浏览器返回普通页面。 |
| Content-Length   | 表示内容长度。只有当浏览器使用持久HTTP连接时才需要这个数据。如果你想要利用持久连接的优势，可以把输出文档写入 ByteArrayOutputStream，完成后查看其大小，然后把该值放入Content-Length头，最后通过byteArrayStream.writeTo(response.getOutputStream()发送内容。 |
| Content-Type     | 表示后面的文档属于什么MIME类型。Servlet默认为text/plain，但通常需要显式地指定为text/html。由于经常要设置Content-Type，因此HttpServletResponse提供了一个专用的方法setContentType。 |
| Date             | 当前的GMT时间。你可以用setDateHeader来设置这个头以避免转换时间格式的麻烦。 |
| Expires          | 应该在什么时候认为文档已经过期，从而不再缓存它？             |
| Last-Modified    | 文档的最后改动时间。客户可以通过If-Modified-Since请求头提供一个日期，该请求将被视为一个条件GET，只有改动时间迟于指定时间的文档才会返回，否则返回一个304（Not Modified）状态。Last-Modified也可用setDateHeader方法来设置。 |
| Location         | 表示客户应当到哪里去提取文档。Location通常不是直接设置的，而是通过HttpServletResponse的sendRedirect方法，该方法同时设置状态代码为302。 |
| Refresh          | 表示浏览器应该在多少时间之后刷新文档，以秒计。除了刷新当前文档之外，你还可以通过setHeader("Refresh", "5; URL=http://host/path")让浏览器读取指定的页面。  注意这种功能通常是通过设置HTML页面HEAD区的＜META HTTP-EQUIV="Refresh" CONTENT="5;URL=http://host/path"＞实现，这是因为，自动刷新或重定向对于那些不能使用CGI或Servlet的HTML编写者十分重要。但是，对于Servlet来说，直接设置Refresh头更加方便。   注意Refresh的意义是"N秒之后刷新本页面或访问指定页面"，而不是"每隔N秒刷新本页面或访问指定页面"。因此，连续刷新要求每次都发送一个Refresh头，而发送204状态代码则可以阻止浏览器继续刷新，不管是使用Refresh头还是＜META HTTP-EQUIV="Refresh" ...＞。   注意Refresh头不属于HTTP 1.1正式规范的一部分，而是一个扩展，但Netscape和IE都支持它。 |
| Server           | 服务器名字。Servlet一般不设置这个值，而是由Web服务器自己设置。 |
| Set-Cookie       | 设置和页面关联的Cookie。Servlet不应使用response.setHeader("Set-Cookie", ...)，而是应使用HttpServletResponse提供的专用方法addCookie。参见下文有关Cookie设置的讨论。 |
| WWW-Authenticate | 客户应该在Authorization头中提供什么类型的授权信息？在包含401（Unauthorized）状态行的应答中这个头是必需的。例如，response.setHeader("WWW-Authenticate", "BASIC realm=＼"executives＼"")。  注意Servlet一般不进行这方面的处理，而是让Web服务器的专门机制来控制受密码保护页面的访问（例如.htaccess）。 |

### 三次握手和四次挥手

参看地址：
[通俗大白话来理解TCP协议的三次握手和四次分手](https://github.com/jawil/blog/issues/14)

[滴滴工程师图文并茂带你深入理解 TCP 握手分手全过程](https://mp.weixin.qq.com/s/n0--UphB4SCFOU3k0cTyRw)

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

### TCP 为什么需要三次握手

这个问题的本质是, 信道不可靠, 但是通信双发需要就某个问题达成一致. 而要解决这个问题, 无论你在消息中包含什么信息, 三次通信是理论上的最小值. 所以三次握手不是 TCP 本身的要求, 而是为了满足 "在不可靠信道上可靠地传输信息" 这一需求所导致的. 请注意这里的本质需求, 信道不可靠, 数据传输要可靠. 三次达到了, 那后面你想接着握手也好, 发数据也好, 跟进行可靠信息传输的需求就没关系了. 因此, 如果信道是可靠的, 即无论什么时候发出消息, 对方一定能收到, 或者你不关心是否要保证对方收到你的消息, 那就能像 UDP 那样直接发送消息就可以了.

### TCP 和 UDP 的区别？TCP 数据传输过程中怎么做到可靠的？

参考地址： [TCP 和 UDP 的区别](https://zhuanlan.zhihu.com/p/24860273)

1、基于连接与无连接；

2、对系统资源的要求（TCP较多，UDP少）；

3、UDP程序结构较简单；

4、流模式与数据报模式 ；

5、TCP保证数据正确性，UDP可能丢包；

6、TCP保证数据顺序，UDP不保证。

可靠的原因就在 4.5.6 这三点