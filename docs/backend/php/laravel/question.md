# 常见问题总结

## 安装指定版本

```PHP
// composer 安装 5.5版本
composer create-project laravel/laravel easy-wechat --prefer-dist "5.5.*"
```

## UUID 问题

```PHP
// id 类型为 uuid 时，查询结果为数字的解决方案
protected $casts = ['id' => 'string'];
```

## 加速db:seed

```PHP
 // 先生成数据，然后执行填充，不是一条一条的添加
$wxApps = factory(WxApp::class)->times(1000)->make();
WxApp::insert($wxApps->toArray());
```

## 设置用户登陆

```php
// 通过id来设置登陆用户, 如果没有区分多个 guest 
auth('guest')->loginUsingId($userId);
```
