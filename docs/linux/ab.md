# AB 工具的使用

> 本文属于学习文章。来自 [超实用压力测试工具－ab工具](https://www.jianshu.com/p/43d04d8baaf7)

## 测试的概念

> 需要理解关于一些压测的概念

### 吞吐率（Requests per second）

概念：服务器并发处理能力的量化描述，单位是reqs/s，指的是某个并发用户数下单位时间内处理的请求数。某个并发用户数下单位时间内能处理的最大请求数，称之为最大吞吐率。

计算公式：总请求数 / 处理完成这些请求数所花费的时间

`Request per second = Complete requests / Time taken for tests`

### 并发连接数（The number of concurrent connections）

概念：某个时刻服务器所接受的请求数目，简单的讲，就是一个会话。

### 并发用户数（The number of concurrent users，Concurrency Level）

概念：要注意区分这个概念和并发连接数之间的区别，一个用户可能同时会产生多个会话，也即连接数。

### 用户平均请求等待时间（Time per request）

计算公式：处理完成所有请求数所花费的时间/ （总请求数 / 并发用户数）

`Time per request = Time taken for tests /（ Complete requests / Concurrency Level）`

### 服务器平均请求等待时间（Time per request: across all concurrent requests）

计算公式：处理完成所有请求数所花费的时间 / 总请求数

`Time taken for / testsComplete requests`

可以看到，它是吞吐率的倒数。 同时，它也=用户平均请求等待时间/并发用户数，即 `Time per request / Concurrency Level`


## 工具简介

> ab全称为：apache bench 

**官网解释:**

- ab是Apache超文本传输协议(HTTP)的性能测试工具。其设计意图是描绘当前所安装的Apache的执行性能，主要是显示你安装的Apache每秒可以处理多少个请求。

**其他网站的解释**

- ab是apache自带的压力测试工具。ab非常实用，它不仅可以对apache服务器进行网站访问压力测试，也可以对或其它类型的服务器进行压力测试。比如nginx、tomcat、IIS等。

## 安装

```shell
# Centos
yum -y install httpd-tools

# Ubuntu
sudo apt-get install apache2-utils
```


## 开始测试

`ab -n 100 -c 10 http://test.com/` 
其中 -n 表示请求数，-c 表示并发数


## 测试结果分析

```bash
This is ApacheBench, Version 2.3 <$Revision: 1706008 $>
Copyright 1996 Adam Twiss, Zeus Technology Ltd, http://www.zeustech.net/
Licensed to The Apache Software Foundation, http://www.apache.org/

Benchmarking box.laragh.top (be patient).....done


Server Software:        nginx/1.13.12
Server Hostname:        box.laragh.top
Server Port:            443
SSL/TLS Protocol:       TLSv1.2,ECDHE-RSA-AES128-GCM-SHA256,2048,128

Document Path:          /
Document Length:        12457 bytes

Concurrency Level:      10
Time taken for tests:   0.326 seconds
Complete requests:      10
Failed requests:        9
   (Connect: 0, Receive: 0, Length: 9, Exceptions: 0)
Keep-Alive requests:    0
Total transferred:      134400 bytes
HTML transferred:       124834 bytes
Requests per second:    30.68 [#/sec] (mean)
Time per request:       325.950 [ms] (mean)
Time per request:       32.595 [ms] (mean, across all concurrent requests)
Transfer rate:          402.67 [Kbytes/sec] received

Connection Times (ms)
              min  mean[+/-sd] median   max
Connect:       15   16   0.5     16      17
Processing:    79  206  85.2    214     309
Waiting:       79  206  85.2    214     309
Total:         94  222  85.8    230     326

Percentage of the requests served within a certain time (ms)
  50%    230
  66%    266
  75%    319
  80%    321
  90%    326
  95%    326
  98%    326
  99%    326
 100%    326 (longest request)
```

测试结果中关注以下内容：
- Server Software：被测试Web服务器的软件名称。
- Server Hostname：请求URL中的主机名称。
- Server Port：被测试Web服务器的侦听端口。
- Document Path：请求的URL的绝对路径。
- Document Length:HTTP响应数据的正文长度。
- Concurrency Level：并发用户数，设置的“c”参数。
- Time taken for tests：所有请求处理完成所花费的总时间。
- Complete requests：总请求数，设置的“n”参数。
- Failed requests：失败的请求数。
- Total transferred: 所有请求的响应数据长度总和。
- HTML transferred：所有请求的响应数据中正文数据的总和。也就是减去Total transferred中HTTP响应数据中头信息的长度。
- Request spersecond：Web服务器的吞吐率，等于Completerequests/Time taken for tests。
- Time per request：用户平均请求等待时间，等于Time taken for tests/(Complete requests/Concurrency Level)。
- Transfer rate:这些请求在单位时间内从服务器取得的数据长度,等于Total transferred / Time taken for tests。