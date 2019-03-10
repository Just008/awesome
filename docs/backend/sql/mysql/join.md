# Join 学习总结

> 一直对 Join 都迷迷糊糊的，这次进行一下简单的扫盲
>
> 参考链接： [数据库开发：MySQL - JOIN 详解](https://mp.weixin.qq.com/s/gJwGDadlzWXzDo09RmcNbQ)

例如如下例子：

创建两个表： user_info, user_account

```bash
create table user_info (`userid` int not null, `name` varchar(20) not null);

insert user_info values(1001, 'A'), (1002, 'B'), (1003, 'C'), (1004, 'D') , (1005, 'E'), (1006, 'F'), (1007, 'G'), (1008, 'H');

create table user_account (`userid` int not null, `money` int(20) not null);

insert user_account values(1001, 20), (1002, 8), (1003, 11), (1009, 13); 

```

现在要获取 userid 为 1003 的 `name` 和 `money`

```bash
SELECT i.userid as id, i.name, a.money
    FROM user_info as i
    LEFT JOIN user_account as a
    ON i.userid = a.userid
    WHERE i.userid = 1003;

```

## Join 的操作分解

1. 执行 `FROM` 操作生成笛卡尔积，也就是两张表行数的乘积。生成虚拟表 vt1
2. 执行 `ON` 操作筛选 vt1 后生成 vt2
3. 执行 `JOIN` 生成 vt3

    当执行 `LEFT JOIN` | `RIGHT JOIN` 时，会将相关表的行数循环，如果 vt2 中缺少的相关行，会自动补上
    当执行 `INNER JOIN` 时 vt2 = vt3 ，直接忽略
4. 执行 `WHERE` 条件，筛选后生成 vt4
5. 执行 `SELECT` 查找想要的列

**具体的分为如上几个步骤，当关联表比较多时，只需要进行分析就可以得到你想要的内容了.**