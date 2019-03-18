# 笔试题

进门最先的很多都是笔试, 虽然这部分内容在面试者看完考试的内容后。如果答的题不是特别好也不会直接不见就轰人走。但是，答得不好会当面询问、到时候仍然还是抓耳挠腮的料。

此处搜罗了一些简单的笔试题，仅供参考和自我学习。

## 基础题

### 1 123123

xcesdafsdf

## Mysql 题

## 算法题

### 第一题

1.1 把 MakeById 转为 make_by_id

```php
$string = 'MakeById';
echo strtolower(preg_replace('/([a-z])([A-Z])/', "$1" . '_' . "$2", $string));
```

1.2 有一个数组 (或字符串) $arr  = array('a', 'b', 'a', 'c', 'c'. 'a'). 有单字符组成，求出现次数最多的字符出现的次数

```php

```

1.3 写一个获取邮箱前缀的方法。比如：获取 dianfubao@gaosiedu.com 的 dianfubao

```php
$email = 'dianfubao@gaosiedu.com';
$data = explode('@', $email);
echo $data[0];
```

### 第二题

2.1 有一个数组由整数组成，实现一个函数，让所有奇数在偶数前面。约束：不开辟新的数组

2.2 有两个排好序的数组， 合并成一个排好序的数组


### 第三题

3.1 输入一个已经按升序排序过的数组和一个数字。在数组中查找两个数，使得他们的和正好是输入的那个数组。要求时间复杂度是 O(n)。如果有多对数组的和等于输入的数字，输出任意一对即可。例如：输入 array(1, 2, 4, 7, 11, 15) 和数字 15。由于 4 + 11 = 15 因此输出 4 和 11

3.2 在一个字符串中找到第一个只出现一次的字符串。如输入 abaccdeff 输出 b

### 第四题

学生表 student (id, name), 班级表 class(id, name), 职位表 class(student_id, duty), 其中 duty 的值为 ('monitor', 'studies', 'sports' ), 学生班级关系表 student_class(student_id, class_id)

请写出查询没有选出班长的班级的 sql 语句 (班长的职位是 'monitor' )

## PHP 试题
