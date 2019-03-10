# 缓存方向

> 现在越来越多的面试需求是高并发高可用。可是实际工作中有多少的公司会真正的使用相关知识呢
> 
> 但是在面试中还是需要好好的学习和整理，让自己更好的了解相关的知识也是一个不错的动力。

## Redis 基础

### Redis有哪些数据类型及应用场景

- String (字符串)

  格式: set key value

  string类型是二进制安全的。意思是redis的string可以包含任何数据。比如jpg图片或者序列化的对象 。

  string类型是Redis最基本的数据类型，一个键最大能存储512MB。

- Hash（哈希）

  格式: hmset name  key1 value1 key2 value2

  Redis hash 是一个键值(key=>value)对集合。

  Redis hash是一个string类型的field和value的映射表，hash特别适合用于存储对象。

- List（列表）

  Redis 列表是简单的字符串列表，按照插入顺序排序。你可以添加一个元素到列表的头部（左边）或者尾部（右边）

  格式: lpush  name  value

  在 key 对应 list 的头部添加字符串元素

  格式: rpush  name  value

  在 key 对应 list 的尾部添加字符串元素

  格式: lrem name  index

  key 对应 list 中删除 count 个和 value 相同的元素

  格式: llen name  

  返回 key 对应 list 的长度

- Set（集合）

  格式: sadd  name  value

  Redis的Set是string类型的无序集合。

  集合是通过哈希表实现的，所以添加，删除，查找的复杂度都是O(1)。

- zset(sorted set：有序集合)

  格式: zadd  name score value

  Redis zset 和 set 一样也是string类型元素的集合,且不允许重复的成员。

  不同的是每个元素都会关联一个double类型的分数。redis正是通过分数来为集合中的成员进行从小到大的排序。

  zset的成员是唯一的,但分数(score)却可以重复。

### Redis 是什么线程

单线程单进程非阻塞多路复用的机制

- 纯内存操作，查找和操作的时间复杂度都是 O(1)
- 数据结构简单，对数据的操作也简单
- 单线程操作，避免了频繁的上下文切换和竞争条件
- 多路 IO 复用模型，非阻塞 IO。多路是指多个网络连接，复用是指复用同一个线程

这里单线程是指处理网络请求的时候是一个单线程，一个正式的 Redis Server 并不是单线程的。

例如：持久化时会以子进程或者子线程的方式执行

参考：[Redis 是单线程的，但Redis 为什么这么快](https://segmentfault.com/a/1190000017375843)

### Redis恢复数据有哪些方式

Redis 提供了两种持久化方式:RDB（默认） 和AOF 

- RDB

  rdb是Redis DataBase缩写

  功能核心函数rdbSave(生成RDB文件)和rdbLoad（从文件加载内存）两个函数

- AOF

  Aof是Append-only file缩写

## PHP 试题
