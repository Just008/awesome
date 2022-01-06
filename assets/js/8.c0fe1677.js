(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{175:function(t,e,s){"use strict";s.r(e);var r=s(0),a=Object(r.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"content"},[t._m(0),t._v(" "),s("p",[t._v("进门最先的很多都是笔试, 虽然这部分内容在面试者看完考试的内容后。如果答的题不是特别好也不会直接不见就轰人走。但是，答得不好会当面询问、到时候仍然还是抓耳挠腮的料。")]),t._v(" "),s("p",[t._v("此处搜罗了一些简单的笔试题，仅供参考和自我学习。")]),t._v(" "),s("p",[t._v("想学习 Mysql 可以关注 "),s("code",[t._v("数据库开发")]),t._v(" 和 掘金小册的 "),s("a",{attrs:{href:"https://juejin.im/book/5bffcbc9f265da614b11b731",target:"_blank",rel:"noopener noreferrer"}},[t._v("MySQL 是怎样运行的：从根儿上理解 MySQL"),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("所有数据库开发的文章都在这："),s("a",{attrs:{href:"http://w.itcodemonkey.com/article/21.html?v=1",target:"_blank",rel:"noopener noreferrer"}},[t._v("所有文章"),s("OutboundLink")],1)]),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),s("p",[s("a",{attrs:{href:"https://blog.csdn.net/csdn_gia/article/details/72417472",target:"_blank",rel:"noopener noreferrer"}},[t._v("参考地址"),s("OutboundLink")],1)]),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),s("p",[t._v("面试每个阶段的 PHP 都是少不了数据库的，数据库在数据较小时不用考虑特别多的东西。但是随着市场的低迷，面试也越来越讲究透彻的知识和清晰的思路。不会再像之前那样的简单了")]),t._v(" "),s("p",[t._v("对于索引的知识基本上问的特别多，那就在这里一次解决所有的内容吧")]),t._v(" "),s("p",[t._v("可以先看这个系列包括了下面四篇文章：")]),t._v(" "),s("ol",[s("li",[s("a",{attrs:{href:"https://juejin.im/post/5c67be206fb9a049b13ebdbe#",target:"_blank",rel:"noopener noreferrer"}},[t._v("数据库索引是什么？新华字典来帮你"),s("OutboundLink")],1),t._v(" —— 理解")]),t._v(" "),s("li",[s("a",{attrs:{href:"https://juejin.im/post/5c67becf6fb9a049a42f9420",target:"_blank",rel:"noopener noreferrer"}},[t._v("数据库索引融会贯通"),s("OutboundLink")],1),t._v(" —— 深入")]),t._v(" "),s("li",[s("a",{attrs:{href:"https://juejin.im/post/5c67bf296fb9a049a81fdbde",target:"_blank",rel:"noopener noreferrer"}},[t._v("20分钟数据库索引设计实战"),s("OutboundLink")],1),t._v(" —— 实战")]),t._v(" "),s("li",[s("a",{attrs:{href:"https://juejin.im/post/5c67bf756fb9a049e4133cd9",target:"_blank",rel:"noopener noreferrer"}},[t._v("数据库索引为什么用B+树实现？"),s("OutboundLink")],1),t._v(" —— 扩展")])]),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),s("p",[t._v("聚簇索引的叶子节点就是数据节点，而非聚簇索引的叶子节点仍然是索引节点，只不过有指向对应数据块的指针。")]),t._v(" "),t._m(8),t._v(" "),t._m(9),t._v(" "),t._m(10),t._v(" "),t._m(11),t._m(12),t._v(" "),t._m(13),t._v(" "),s("p",[t._v("当你在数据库查询时，如果该字段为 varchar 类型，你执行了搜索")]),t._v(" "),t._m(14),s("p",[t._v("加入 id 为整型呢？答案是会用到索引")]),t._v(" "),t._m(15),t._m(16),t._v(" "),s("p",[t._v("参考： "),s("a",{attrs:{href:"https://www.jianshu.com/p/4963c5e038eb",target:"_blank",rel:"noopener noreferrer"}},[t._v("数据库事务的四大特性和隔离级别"),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("数据库事务的特性：")]),t._v(" "),t._m(17),t._v(" "),s("p",[t._v("隔离级别：")]),t._v(" "),t._m(18),t._v(" "),t._m(19),t._v(" "),s("p",[t._v("面试中可能问到：项目数据库表是你设计的吗？一般要注意什么？如何考虑扩展性？")]),t._v(" "),t._m(20),t._v(" "),s("p",[t._v("锁分类：表级锁、行级锁、页级锁着三种类型")]),t._v(" "),t._m(21),t._v(" "),t._m(22),t._v(" "),s("p",[t._v("特点\n优点：开销小，加锁快，不会出现死锁\n缺点：发生锁冲突的几率高，并发度低\n2. 行级锁\n粒度最细的一种锁，只对该行进行加锁")]),t._v(" "),s("p",[t._v("特点\n优点：锁定粒度最小，发生锁冲突的几率低，并发度高\n缺点：开销大，加锁慢，会出现死锁\n3. 页级锁\n粒度介于表级锁和行级锁中间，一次锁定相邻的一组数据\n特点：开销和加锁时间一般，会出现死锁，并发量一般")]),t._v(" "),t._m(23),t._v(" "),t._m(24),t._v(" "),t._m(25),t._v(" "),s("p",[t._v("参考："),s("a",{attrs:{href:"https://blog.csdn.net/eseaqyq/article/details/7795023",target:"_blank",rel:"noopener noreferrer"}},[t._v("数据库中死锁那些事儿"),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("所谓死锁： 是指两个或两个以上的进程在执行过程中，因争夺资源而造成的一种互相等待的现象，若无外力作用，它们都将无法推进下去。")]),t._v(" "),s("p",[t._v("此时称系统处于死锁状态或系统产生了死锁，这些永远在互相等待的进程称为死锁进程。")]),t._v(" "),s("p",[t._v("由于资源占用是互斥的，当某个进程提出申请资源后，使得有关进程在无外力协助下，永远分配不到必需的资源而无法继续运行，这就产生了一种特殊现象死锁。")]),t._v(" "),t._m(26),t._v(" "),t._m(27)])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"mysql-方向"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#mysql-方向"}},[this._v("#")]),this._v(" Mysql 方向")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"数据库基础"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#数据库基础"}},[this._v("#")]),this._v(" 数据库基础")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"mysql-三范式"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#mysql-三范式"}},[this._v("#")]),this._v(" mysql 三范式")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("第一范式：要求有主键，并且要求每一个字段原子性不可再分「原子性 字段不可再分,否则就不是关系数据库」")]),this._v(" "),e("li",[this._v("第二范式：要求所有非主键字段完全依赖主键，不能产生部分依赖「唯一性 一个表只说明一个事物」")]),this._v(" "),e("li",[this._v("第三范式：所有非主键字段和主键字段之间不能产生传递依赖「每列都与主键有直接关系，不存在传递依赖」")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"索引"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#索引"}},[this._v("#")]),this._v(" 索引")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"主键索引和唯一索引的区别"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#主键索引和唯一索引的区别"}},[this._v("#")]),this._v(" 主键索引和唯一索引的区别")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ul",[s("li",[t._v("主键是一种约束，而唯一索引是一种索引，是表的冗余数据结构，两者有本质的差别")]),t._v(" "),s("li",[t._v("主键主键创建成功后,一定会创建一个唯一索引。但是唯一索引并不一定就是主键")]),t._v(" "),s("li",[t._v("唯一索引列允许空值，而主键列不允许为空值")]),t._v(" "),s("li",[t._v("一个表只能有一个主键，但是可以有多个唯一索引")]),t._v(" "),s("li",[t._v("主键可以被其他表引用为外键，唯一索引列不可以")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"聚簇索引和非聚簇索引的区别"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#聚簇索引和非聚簇索引的区别"}},[this._v("#")]),this._v(" 聚簇索引和非聚簇索引的区别")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"mysql-的索引原理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#mysql-的索引原理"}},[this._v("#")]),this._v(" MySQL 的索引原理")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"判断-sql-是否使用索引"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#判断-sql-是否使用索引"}},[this._v("#")]),this._v(" 判断 sql 是否使用索引")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("使用 "),e("code",[this._v("explain")]),this._v(" 关键字，查看搜索时 type 为 ALL 就是没有使用索引，为 range 就是使用了索引")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("mysql"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" explain "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("select")]),t._v(" * from "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("users")]),t._v(" where name like "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'back%'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n+----+-------------+-------+------------+------+---------------+------+---------+------+------+----------+-------------+\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("id")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" select_type "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" table "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" partitions "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("type")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" possible_keys "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" key  "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" key_len "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" ref  "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" rows "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" filtered "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" Extra       "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("\n+----+-------------+-------+------------+------+---------------+------+---------+------+------+----------+-------------+\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" SIMPLE      "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("users")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" NULL       "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" ALL  "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" NULL          "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" NULL "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" NULL    "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" NULL "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("    "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("   "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("100.00")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" Using where "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("\n+----+-------------+-------+------------+------+---------------+------+---------+------+------+----------+-------------+\n"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" row "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" set, "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" warning "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.00")]),t._v(" sec"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ol",[s("li",[s("strong",[t._v("id")]),t._v(" 列：是 select 语句的序号，MySQL将 "),s("code",[t._v("select")]),t._v(" 查询分为简单查询和复杂查询。")]),t._v(" "),s("li",[s("strong",[t._v("select_type")]),t._v(" 列：表示对应行是是简单还是复杂的查询。")]),t._v(" "),s("li",[s("strong",[t._v("table")]),t._v(" 列：表示 "),s("code",[t._v("explain")]),t._v(" 的一行正在访问哪个表。")]),t._v(" "),s("li",[s("strong",[t._v("type")]),t._v(" 列：最重要的列之一。表示关联类型或访问类型，即 MySQL 决定如何查找表中的行。从最优到最差分别为："),s("code",[t._v("system > const > eq_ref > ref > fulltext > ref_or_null > index_merge > unique_subquery > index_subquery > range > index > ALL")])]),t._v(" "),s("li",[s("strong",[t._v("possible_keys")]),t._v(" 列：显示查询可能使用哪些索引来查找。")]),t._v(" "),s("li",[s("strong",[t._v("key")]),t._v(" 列：这一列显示 mysql 实际采用哪个索引来优化对该表的访问。")]),t._v(" "),s("li",[s("strong",[t._v("key_len")]),t._v(" 列：显示了mysql在索引里使用的字节数，通过这个值可以算出具体使用了索引中的哪些列。")]),t._v(" "),s("li",[s("strong",[t._v("ref")]),t._v(" 列：这一列显示了在key列记录的索引中，表查找值所用到的列或常量，常见的有：const（常量），func，NULL，字段名。")]),t._v(" "),s("li",[s("strong",[t._v("rows")]),t._v(" 列：这一列是 mysql 估计要读取并检测的行数，注意这个不是结果集里的行数。")]),t._v(" "),s("li",[s("strong",[t._v("Extra")]),t._v(" 列：显示额外信息。比如有 "),s("code",[t._v("Using index")]),t._v("、"),s("code",[t._v("Using where")]),t._v("、"),s("code",[t._v("Using temporary")]),t._v("等。")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"索引隐式转换"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#索引隐式转换"}},[this._v("#")]),this._v(" 索引隐式转换")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("-- 全表扫描\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("select")]),t._v(" * from article where "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("id")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),t._v("\n-- 相当于在搜索语句上使用了函数，无法使用索引只能相当于全表扫描了\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("select")]),t._v(" * from article where CAST"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ID as signed int"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),t._v("\n\n-- 走索引\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("select")]),t._v(" * from article where "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("id")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'100'")]),t._v("\n")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("select")]),t._v(" * from article where "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("id")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'100'")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"数据库事务特性和隔离级别"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#数据库事务特性和隔离级别"}},[this._v("#")]),this._v(" 数据库事务特性和隔离级别")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("原子性")]),this._v(" "),e("li",[this._v("一致性")]),this._v(" "),e("li",[this._v("隔离性")]),this._v(" "),e("li",[this._v("永久性")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("读未提交：可能会造成脏读 [事务B 读取了事务 A 并未提交的数据]")]),this._v(" "),e("li",[this._v("读已提交：可避免脏读的发生。")]),this._v(" "),e("li",[this._v("可重复读：可避免脏读、不可重复读的发生。 会产生幻读")]),this._v(" "),e("li",[this._v("串行化：可避免脏读、不可重复读、幻读的发生。")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"数据库表设计"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#数据库表设计"}},[this._v("#")]),this._v(" 数据库表设计")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"数据库锁"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#数据库锁"}},[this._v("#")]),this._v(" 数据库锁")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"锁类型"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#锁类型"}},[this._v("#")]),this._v(" 锁类型")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ol",[e("li",[this._v("表级锁\n粒度大，对整张表进行加锁，实现简单，资源消耗少")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"乐观锁和悲观锁"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#乐观锁和悲观锁"}},[this._v("#")]),this._v(" 乐观锁和悲观锁")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ol",[e("li",[this._v("悲观锁：对数据被意外修改持悲观状态。")]),this._v(" "),e("li",[this._v("乐观锁：乐观的认为拿到数据的人都不会更新数据，所以不会上锁。但在提交更新时会判断有没有人进行数据更新")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"死锁"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#死锁"}},[this._v("#")]),this._v(" 死锁")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("处理死锁方式")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ul",[s("li",[s("p",[t._v("预防死锁")]),t._v(" "),s("p",[t._v("这是一种较简单和直观的事先预防的方法。")]),t._v(" "),s("p",[t._v("方法是通过设置某些限制条件，去破坏产生死锁的四个必要条件中的一个或者几个，来预防发生死锁。")]),t._v(" "),s("p",[t._v("预防死锁是一种较易实现的方法，已被广泛使用。但是由于所施加的限制条件往往太严格，可能会导致系统资源利用率和系统吞吐量降低。")])]),t._v(" "),s("li",[s("p",[t._v("避免死锁")]),t._v(" "),s("p",[t._v("该方法同样是属于事先预防的策略，但它并不须事先采取各种限制措施去破坏产生死锁的的四个必要条件，而是在资源的动态分配过程中，用某种方法去防止系统进入不安全状态，从而避免发生死锁。")])]),t._v(" "),s("li",[s("p",[t._v("检测死锁")]),t._v(" "),s("p",[t._v("这种方法并不须事先采取任何限制性措施，也不必检查系统是否已经进入不安全区，此方法允许系统在运行过程中发生死锁。")]),t._v(" "),s("p",[t._v("但可通过系统所设置的检测机构，及时地检测出死锁的发生，并精确地确定与死锁有关的进程和资源，然后采取适当措施，从系统中将已发生的死锁清除掉")])]),t._v(" "),s("li",[s("p",[t._v("解除死锁")]),t._v(" "),s("p",[t._v("这是与检测死锁相配套的一种措施。")]),t._v(" "),s("p",[t._v("当检测到系统中已发生死锁时，须将进程从死锁状态中解脱出来。")]),t._v(" "),s("p",[t._v("常用的实施方法是"),s("code",[t._v("撤销或挂起一些进程")]),t._v("，以便回收一些资源，再将这些资源分配给已处于阻塞状态的进程，使之转为就绪状态，以继续运行。死锁的检测和解除措施，有可能使系统获得较好的资源利用率和吞吐量，但在实现上难度也最大。")])])])}],!1,null,null,null);e.default=a.exports}}]);