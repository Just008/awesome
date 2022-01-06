# 其他相关

除了一些语言相关的一些内容还有的就是跟计算机或者架构相关的内容。

## 计算机基础

### 进程有哪种状态

[参考文章](https://blog.csdn.net/u012824097/article/details/52058395)

一般来说进程有三个状态：就绪状态、运行状态、阻塞状态

### linux 查看目录具体函数

### 查看端口占用

`lsof -i:80` 和 `netstat -anp | grep 80`

### 查出访问最多的 10 个 IP

参考链接：[Linux 分析日志获取最多访问的前 10 个 IP](https://blog.csdn.net/tanga842428/article/details/52856413)

```bash
cat access.log | awk  '{print $1}' | sort | uniq -c | sort -n -r | head -10
```

## 系统设计相关

### 秒杀系统

[秒杀系统解决方案](https://hacpai.com/article/1513577841972)

秒杀系统的本质是：在一个很短的时间内面对巨大的网络请求，将有限的库存商品分发出去，并完成交易的工作。

1.秒杀系统要控制两个问题：

- 高并发

秒杀系统的人数一般都是 10w 起的，所以对于如此之高的在线人数对于网站的架构从前到后都是一种挑战

- 超卖

避免下单的人超过商品的指定数量，这是每个活动都要面临的难题

2.秒杀系统讲究的是：稳、准、快。可以从下面的几个方面来进行优化：

- 架构
  - 机构设计原则：
    1. 尽量将系统拦截在系统上游
    2. 读多写少的使用缓存
  - 扩容：就是加机器
  - 隔离
    1. 防止对现网站进行冲击可以单独部署。
    2. 系统隔离更多的是运行时的隔离，域名也要单独申请

    这样就保证了即使秒杀系统崩溃了不会对现有的业务进行冲击
  - 

- 前端
  - Nginx 负载均衡，分发到多个服务器上
  - JS、CSS 等打包，减少网络请求
  - CDN 加速

- 缓存

### 电商系统

### 监控告警系统

如果仅仅是代码告警的话其实是有思路的：

1. Sentry 自动化异常提醒

对于个人来说，免费版的每日 5000 条错误提示已经足够用了。而且还能将错误消息发送到指定的邮箱中。

2. 微信测试公众号

[微信公众平台接口测试帐号](https://mp.weixin.qq.com/debug/cgi-bin/sandbox?t=sandbox/login)。这个每个人都可以申请，通过 composer 扩展，通过微信公众公众号的接口，可以使用模板消息提醒。每日限额 10w 条，足够用了

弊端：不能很好的选择指定时间的错误

3. 大型的平台搭建

[大数据平台监控告警系统的实现](https://zhuanlan.zhihu.com/p/27382099)

监控系统的一般套路：采集－存储－展示－告警

## 搜索相关

> 提起搜索就不得不提 `ELK` 这个名词。在现有的开发中，有一些内容需要快速的从库里取出来并展示给客户。

- ElasticSearch 用于数据的存储和检索
- Logstash 负责数据的搜集，过滤和格式化
- Kibana 负责展示和统计的可视化工作。

应用场景：

- 商品搜索
- 全文检索
- 日志展示
- 等等

[ELK不权威指南](https://zhuanlan.zhihu.com/p/22400290)
[Monolog 优化及打造 ELK 友好的日志格式
](https://learnku.com/articles/3567/monolog-optimization-and-elk-friendly-log-format)

## 日志相关

> 在 PHP 中一般都是使用 MonoLog 来记录 PHP 代码运行的日志。是一个很强大的库。

## 你还有什么要问的

这个题一出，意味着你的面试要结束了。挽回结果是不可能了，尽量给自己加点分吧。

例如：

- 公司的项目规划和技术方向是什么
- 有没有岗位培训？ [面试高级技术工程师尽量别问]
- 技术岗位配比，完全的了解一下该公司
- 有没有什么福利


## 服务器相关

### 假如线上服务 CPU 很高该怎么做？有哪些措施可以找到问题？

- 查消耗cpu最高的进程PID

- 根据PID查出消耗cpu最高的线程号

- 根据线程号查出对应的线程，进行处理。