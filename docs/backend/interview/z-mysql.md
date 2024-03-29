# Mysql 方向

进门最先的很多都是笔试, 虽然这部分内容在面试者看完考试的内容后。如果答的题不是特别好也不会直接不见就轰人走。但是，答得不好会当面询问、到时候仍然还是抓耳挠腮的料。

此处搜罗了一些简单的笔试题，仅供参考和自我学习。

想学习 Mysql 可以关注 `数据库开发` 和 掘金小册的 [MySQL 是怎样运行的：从根儿上理解 MySQL](https://juejin.im/book/5bffcbc9f265da614b11b731)

所有数据库开发的文章都在这：[所有文章](http://w.itcodemonkey.com/article/21.html?v=1)

## 数据库基础

### mysql 三范式

[参考地址](https://blog.csdn.net/csdn_gia/article/details/72417472)

- 第一范式：要求有主键，并且要求每一个字段原子性不可再分「原子性 字段不可再分,否则就不是关系数据库」
- 第二范式：要求所有非主键字段完全依赖主键，不能产生部分依赖「唯一性 一个表只说明一个事物」
- 第三范式：所有非主键字段和主键字段之间不能产生传递依赖「每列都与主键有直接关系，不存在传递依赖」

## 索引

面试每个阶段的 PHP 都是少不了数据库的，数据库在数据较小时不用考虑特别多的东西。但是随着市场的低迷，面试也越来越讲究透彻的知识和清晰的思路。不会再像之前那样的简单了

对于索引的知识基本上问的特别多，那就在这里一次解决所有的内容吧

可以先看这个系列包括了下面四篇文章：

1. [数据库索引是什么？新华字典来帮你](https://juejin.im/post/5c67be206fb9a049b13ebdbe#) —— 理解
2. [数据库索引融会贯通](https://juejin.im/post/5c67becf6fb9a049a42f9420) —— 深入
3. [20分钟数据库索引设计实战](https://juejin.im/post/5c67bf296fb9a049a81fdbde) —— 实战
4. [数据库索引为什么用B+树实现？](https://juejin.im/post/5c67bf756fb9a049e4133cd9) —— 扩展

### 主键索引和唯一索引的区别

- 主键是一种约束，而唯一索引是一种索引，是表的冗余数据结构，两者有本质的差别
- 主键主键创建成功后,一定会创建一个唯一索引。但是唯一索引并不一定就是主键
- 唯一索引列允许空值，而主键列不允许为空值
- 一个表只能有一个主键，但是可以有多个唯一索引
- 主键可以被其他表引用为外键，唯一索引列不可以

### 聚簇索引和非聚簇索引的区别

聚簇索引的叶子节点就是数据节点，而非聚簇索引的叶子节点仍然是索引节点，只不过有指向对应数据块的指针。

### MySQL 的索引原理

### 判断 sql 是否使用索引

使用 `explain` 关键字，查看搜索时 type 为 ALL 就是没有使用索引，为 range 就是使用了索引

```bash
mysql> explain select * from users where name like 'back%';
+----+-------------+-------+------------+------+---------------+------+---------+------+------+----------+-------------+
| id | select_type | table | partitions | type | possible_keys | key  | key_len | ref  | rows | filtered | Extra       |
+----+-------------+-------+------------+------+---------------+------+---------+------+------+----------+-------------+
|  1 | SIMPLE      | users | NULL       | ALL  | NULL          | NULL | NULL    | NULL |    1 |   100.00 | Using where |
+----+-------------+-------+------------+------+---------------+------+---------+------+------+----------+-------------+
1 row in set, 1 warning (0.00 sec)
```

1. **id** 列：是 select 语句的序号，MySQL将 `select` 查询分为简单查询和复杂查询。
2. **select_type** 列：表示对应行是是简单还是复杂的查询。
3. **table** 列：表示 `explain` 的一行正在访问哪个表。
4. **type** 列：最重要的列之一。表示关联类型或访问类型，即 MySQL 决定如何查找表中的行。从最优到最差分别为：`system > const > eq_ref > ref > fulltext > ref_or_null > index_merge > unique_subquery > index_subquery > range > index > ALL`
5. **possible_keys** 列：显示查询可能使用哪些索引来查找。
6. **key** 列：这一列显示 mysql 实际采用哪个索引来优化对该表的访问。
7. **key_len** 列：显示了mysql在索引里使用的字节数，通过这个值可以算出具体使用了索引中的哪些列。
8. **ref** 列：这一列显示了在key列记录的索引中，表查找值所用到的列或常量，常见的有：const（常量），func，NULL，字段名。
9. **rows** 列：这一列是 mysql 估计要读取并检测的行数，注意这个不是结果集里的行数。
10. **Extra** 列：显示额外信息。比如有 `Using index`、`Using where`、`Using temporary`等。

### 索引隐式转换

当你在数据库查询时，如果该字段为 varchar 类型，你执行了搜索

```bash
-- 全表扫描
select * from article where id = 100
-- 相当于在搜索语句上使用了函数，无法使用索引只能相当于全表扫描了
select * from article where CAST(ID as signed int) = 100

-- 走索引
select * from article where id = '100'
```

加入 id 为整型呢？答案是会用到索引

```bash
select * from article where id = '100'
```

### 数据库事务特性和隔离级别

参考： [数据库事务的四大特性和隔离级别](https://www.jianshu.com/p/4963c5e038eb)

数据库事务的特性：

- 原子性
- 一致性
- 隔离性
- 永久性

隔离级别：

- 读未提交：可能会造成脏读 [事务B 读取了事务 A 并未提交的数据]
- 读已提交：可避免脏读的发生。
- 可重复读：可避免脏读、不可重复读的发生。 会产生幻读
- 串行化：可避免脏读、不可重复读、幻读的发生。



### 数据库表设计

面试中可能问到：项目数据库表是你设计的吗？一般要注意什么？如何考虑扩展性？



## 数据库锁

锁分类：表级锁、行级锁、页级锁着三种类型

### 锁类型

1. 表级锁
  粒度大，对整张表进行加锁，实现简单，资源消耗少

  特点
    优点：开销小，加锁快，不会出现死锁
    缺点：发生锁冲突的几率高，并发度低
2. 行级锁
  粒度最细的一种锁，只对该行进行加锁

  特点
    优点：锁定粒度最小，发生锁冲突的几率低，并发度高
    缺点：开销大，加锁慢，会出现死锁
3. 页级锁
  粒度介于表级锁和行级锁中间，一次锁定相邻的一组数据
  特点：开销和加锁时间一般，会出现死锁，并发量一般

### 乐观锁和悲观锁

1. 悲观锁：对数据被意外修改持悲观状态。
2. 乐观锁：乐观的认为拿到数据的人都不会更新数据，所以不会上锁。但在提交更新时会判断有没有人进行数据更新

### 死锁

参考：[数据库中死锁那些事儿](https://blog.csdn.net/eseaqyq/article/details/7795023 )

所谓死锁： 是指两个或两个以上的进程在执行过程中，因争夺资源而造成的一种互相等待的现象，若无外力作用，它们都将无法推进下去。

此时称系统处于死锁状态或系统产生了死锁，这些永远在互相等待的进程称为死锁进程。 

由于资源占用是互斥的，当某个进程提出申请资源后，使得有关进程在无外力协助下，永远分配不到必需的资源而无法继续运行，这就产生了一种特殊现象死锁。

**处理死锁方式**

- 预防死锁

  这是一种较简单和直观的事先预防的方法。
  
  方法是通过设置某些限制条件，去破坏产生死锁的四个必要条件中的一个或者几个，来预防发生死锁。
  
  预防死锁是一种较易实现的方法，已被广泛使用。但是由于所施加的限制条件往往太严格，可能会导致系统资源利用率和系统吞吐量降低。

- 避免死锁

  该方法同样是属于事先预防的策略，但它并不须事先采取各种限制措施去破坏产生死锁的的四个必要条件，而是在资源的动态分配过程中，用某种方法去防止系统进入不安全状态，从而避免发生死锁。

- 检测死锁

  这种方法并不须事先采取任何限制性措施，也不必检查系统是否已经进入不安全区，此方法允许系统在运行过程中发生死锁。
  
  但可通过系统所设置的检测机构，及时地检测出死锁的发生，并精确地确定与死锁有关的进程和资源，然后采取适当措施，从系统中将已发生的死锁清除掉

- 解除死锁

  这是与检测死锁相配套的一种措施。
  
  当检测到系统中已发生死锁时，须将进程从死锁状态中解脱出来。
  
  常用的实施方法是`撤销或挂起一些进程`，以便回收一些资源，再将这些资源分配给已处于阻塞状态的进程，使之转为就绪状态，以继续运行。死锁的检测和解除措施，有可能使系统获得较好的资源利用率和吞吐量，但在实现上难度也最大。
