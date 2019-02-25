# EasyWeChat

> EasyWeChat 是一个开源的 微信 非官方 SDK。
>
> EasyWeChat 的安装非常简单，因为它是一个标准的 Composer 包，这意味着任何满足下列安装条件的 PHP 项目支持 Composer 都可以使用它。
>

![easywechat](http://md.laragh.top/vuepress/easywechat.png)

## 安装

Github 地址： [overtrue/wechat](https://github.com/overtrue/wechat) [不建议使用框架的包]

`composer require overtrue/wechat:~4.0 -vvv`

## Laravel 框架

Laravel Framework 5.5.28

## 配置

看文档，ENV 配置

```ENV
# 基本信息
WECHAT_APPID=wxeba163c4xxxxx
WECHAT_SECRET=216d04f683afe852d84eded9xxxxx
WECHAT_TOKEN=60166ea337d0d3d8f9b6be41xxxxx
WECHAT_AES_KEY=a4hrTSdjWy8SPvxaVPqiFw2o9ZYTegLlbQzxxxxx
# 支付
WECHAT_PAYMENT_MERCHANT_ID=1300xxxxx
WECHAT_PAYMENT_KEY=123skijik3412934lkllxxxxx
WECHAT_PAYMENT_CERT_PATH=/path/apiclient_cert.pem
WECHAT_PAYMENT_KEY_PATH=/path/apiclient_key.pem
```

## git 自动部署

> [用 Git 钩子进行简单自动部署](https://aotu.io/notes/2017/04/10/githooks/)

## 微信路由

``` \routes\web.php
//微信token验证
Route::any('/wechat', 'Wechat\WechatController@serve');
//根据openId获取用户信息
Route::get('/wx/users/{openId}', 'Wechat\WxUsersController@user');
```

## 微信token验证

project\app\Http\Controllers\Wechat\WechatController.php

```php
\app\Http\Controllers\Wechat\WechatController.php
$ php artisan make:controller Wechat/WechatController #新建控制器

project\app\Http\Controllers\Wechat\WechatController.php

/**
 * 处理微信的请求消息
 *
 * @return string
 */
public function serve()
{
    $wechat = app('wechat');
    $userApi = $wechat->user;
    $wechat->server->setMessageHandler(function ($message) use ($userApi) {
        switch ($message->MsgType) {
            case 'event':
                if ($message->Event == 'subscribe') {
                    return "欢迎关注！";
                    break;
                }
                if ($message->Event == 'unsubscribe') {
                    \Log::info('取消订阅');

                    return "取消订阅！";
                    break;
                }

                return '收到事件消息';
                break;
            case 'text':
                if ($message->Content == 'test') {
                    return 'test';
                    break;
                }

                return '你好 '.$userApi->get($message->FromUserName)->nickname;
                break;
            case 'image':
                return '收到图片消息';
                break;
            case 'voice':
                return '收到语音消息';
                break;
            case 'video':
                return '收到视频消息';
                break;
            case 'location':
                return '收到坐标消息';
                break;
            case 'link':
                return '收到链接消息';
                break;
            // ... 其它消息
            default:
                return '收到其它消息';
                break;
        }
    });

    return $wechat->server->serve();
}
```

> [EasyWechat 消息处理基本使用](https://easywechat.org/zh-cn/docs/server.html#基本使用)
\Log::info('取消订阅');  调试时可以用 tail 动态查看日志，例如

```bash
$ echo '' > /path/project/storage/logs/laravel.log && tail -n 20 -f /path/project/storage/logs/laravel.log
[2017-06-05 17:20:07] local.INFO: 取消订阅
```

## 用户信息

project\app\Http\Controllers\Wechat\WxUsersController.php

```php
$ php artisan make:controller Wechat/WxUsersController #微信用户管理控制器

project\app\Http\Controllers\Wechat\WxUsersController.php

<?php
namespace App\Http\Controllers\Wechat;

use EasyWeChat\Foundation\Application;
use App\Http\Controllers\Controller;

class WxUsersController extends Controller
{
    protected $wechat;

    public function __construct(Application $wechat)
    {
        $this->wechat = $wechat;
    }
    
    //根据 openid 获取用户信息
    public function user($openid)
    {
        $user = $this->wechat->user->get($openid);
        return $user;
    }
}

```

## 微信支付二维码扫描

虽然文档上面有这篇[【教程】基于 Laravel5.1 LTS 版的微信开发](https://laravel-china.org/topics/3146/tutorial-based-on-the-laravel51-version-of-wechat-lts-development)，然而作者还是有很多没说出来的坑!!!(可能是我比较菜的原因)

* 首先装个二维码组件 [Simple QrCode](https://www.simplesoftware.io/docs/simple-qrcode/zh#docs-configuration)
* 新建控制器 `$ php artisan make:controller WxpayController`
project\app\Http\Controllers\WxpayController.php

```php
<?php

namespace App\Http\Controllers;

use EasyWeChat\Foundation\Application;
use EasyWeChat\Payment\Order;
use Illuminate\Http\Request;
use SimpleSoftwareIO\QrCode\Facades\QrCode;

class WxpayController extends Controller
{
    protected $wechat;

    public function __construct(Application $wechat)
    {
        //依赖注入
        $this->wechat = $wechat;
    }

    //生成订单
    public function order(Request $request)
    {
        $attributes = [
            'trade_type' => 'NATIVE', // JSAPI，NATIVE，APP...
            'body' => 'iPad mini 16G 白色',
            'detail' => 'iPad mini 16G 白色',
            'out_trade_no' => '1217752501201407033233368018',
            'total_fee' => $request->get('money') * 100, // 单位：分
            'notify_url' => 'http://xxx/notify', // 支付结果通知网址，如果不设置则会使用配置里的默认地址
            //'openid' => '当前用户的 openid', // trade_type=JSAPI，此参数必传，用户在商户appid下的唯一标识，
            // ...
        ];

        $payment = $this->wechat->payment;
        $order = new Order($attributes);
        $result = $payment->prepare($order);
        \Log::info($result); //生成订单时可以打印看看有什么错没
        if ($result->return_code == 'SUCCESS' && $result->result_code == 'SUCCESS') {
            $ajax_data = [
                'html' => json_encode(QrCode::size(250)->generate($result['code_url'])),
                'price' => $attributes['total_fee'] / 100,
            ];

            return $ajax_data;
        } else {
            die("出错了。");  // 出错就说出来，不然还能怎样？
        }
    }
}

```
> 关于`trade_type`看官方文档熟悉下参数的用途 [统一下单](https://pay.weixin.qq.com/wiki/doc/api/jsapi.php?chapter=9_1) 看下请求参数，里面指出了用户标识`openid`不是必传，所以我们得选 `NATIVE` 而不是`JSAPI`,我还很纠结这`openid`怎么获取，没想到这个其实是`JSAPI`时才需要传的参数，所以还是得多看下官方文档。

> 关于`total_fee`参数，这个是以分为单位，所以需要乘100，不然传0.01时会报错，取出来是自然要除以100了。

> 关于返回的`$ajax_data`数据，上面那篇教程里面有个`$data->order_guid,$data->price` 这2个数据其实是他在别的地方定义的，也就是返回唯一订单号跟价钱，传不传无所谓，只要有二维码就行了，不用纠结他是哪来的。

接下来看回调，因为是扫码支付，需要在服务器上做个标志，通过js轮询这个标志，所以我们要建个支付的订单表，不然前台扫码支付后页面不会做任何操作。

建表
> `$ php artisan make:migration create_pay_users_table`
> `$ php artisan make:migration create_pay_orders_table`

```php
project\database\migrations\2017_06_13_180443_create_pay_users_table.php

public function up()
{
    Schema::create('pay_users', function (Blueprint $table) {
        $table->increments('id');
        $table->string('user_id')->comment('用户id');
        $table->string('nickname')->nullable()->comment('用户昵称');
        $table->string('avatar')->nullable()->comment('用户头像');
        $table->string('pay_type')->comment('支付方式');
        $table->timestamps();
    });
}
public function down()
{
    Schema::dropIfExists('pay_users');
}

project\database\migrations\2017_06_13_181502_create_pay_orders_table.php

public function up()
{
    Schema::create('pay_orders', function (Blueprint $table) {
        $table->increments('id');
        $table->string('user_id')->comment('阿里账号或微信open_id');
        $table->integer('p_id')->comment('产品id');
        $table->string('order_guid')->comment('订单号');
        $table->string('pay_money')->comment('支付金额');
        $table->integer('order_status')->comment('支付状态');
        $table->string('pay_type')->comment('支付类型');
        $table->integer('paid_at')->nullable()->comment('支付时间');
        $table->timestamps();
    });
}
public function down()
{
    Schema::dropIfExists('pay_orders');
}

$ php artisan migrate
```

以下是完整的`WxPayController`的代码,操作用户信息的代码可用可不用，我是项目需要

```php
<?php

namespace App\Http\Controllers;

use EasyWeChat\Foundation\Application;
use EasyWeChat\Payment\Order;
use Illuminate\Http\Request;
use SimpleSoftwareIO\QrCode\Facades\QrCode;
use Log;
use App\Models\PayUser;
use App\Models\PayOrder;

class WxpayController extends Controller
{
    protected $wechat;

    protected $payment;

    public function __construct(Application $wechat)
    {
        //依赖注入
        $this->wechat = $wechat;
        $this->payment = $this->wechat->payment;
    }

    //生成订单
    public function order(Request $request)
    {
        $out_trade_no = 'xxx'.date("YmdHis");
        $attributes = [
            'trade_type' => 'NATIVE', // JSAPI，NATIVE，APP...
            'body' => 'iPad mini 16G 白色',
            'detail' => 'iPad mini 16G 白色',
            'out_trade_no' => $out_trade_no,
            'total_fee' => $request->get('money') * 100, // 单位：分
            'notify_url' => 'http://m.lidetang.org/wechat/pc/notify', // 支付结果通知网址，如果不设置则会使用配置里的默认地址
            //'openid' => '当前用户的 openid', // trade_type=JSAPI，此参数必传，用户在商户appid下的唯一标识，
            // ...
        ];

        $order = new Order($attributes);
        $result = $this->payment->prepare($order);
        Log::info($result);
        //如果微信订单生成成功
        if ($result->return_code == 'SUCCESS' && $result->result_code == 'SUCCESS') {
            //创建未支付订单信息
            $order_info = [
                'user_id' => 'no_id',
                'p_id' => '5',
                'order_guid' => $out_trade_no,
                'pay_money' => $attributes['total_fee'] / 100,
                'order_status' => 0,
                'pay_type' => 'wechat',
            ];
            Log::info('未支付订单详情：');
            Log::debug($order_info);
            //创建未支付订单
            PayOrder::create($order_info);
            //ajax返回数据
            $ajax_data = [
                'html' => json_encode(QrCode::size(250)->generate($result['code_url'])),
                'order_guid' => $order_info['order_guid'],
                'price' => $order_info['pay_money'],

            ];

            return $ajax_data;
        } else {
            die("出错了。");  // 出错就说出来，不然还能怎样？
        }
    }

    //支付回调函数
    public function notifyUrl()
    {
        Log::info('进入回调');
        $response = $this->payment->handleNotify(function ($notify, $successful) {
            //查数据库看这个订单是否存在
            $order = PayOrder::where('order_guid', $notify->out_trade_no)->first();
            Log::info('订单号');
            Log::debug($notify->out_trade_no);
            Log::debug($order);
            // 如果订单不存在
            if (! $order) {
                Log::info('订单没有存在');
                Log::info('回调中未支付订单信息');
                Log::debug($order);

                return false; // 告诉微信，我已经处理完了，订单没找到，别再通知我了
            } else {
                // 如果订单存在
                // 检查订单是否已经更新过支付状态
                if ($order->paid_at !== null) { // 假设订单字段“支付时间”不为空代表已经支付
                    Log::info('回调中未支付订单信息');
                    Log::debug($order);
                    Log::info('订单存在支付时间:');
                    Log::info($order->paid_at);

                    return true; // 已经支付成功了就不再更新了
                }
            }
            $userService = $this->wechat->user;
            // 用户是否支付成功
            if ($successful) {
                Log::info('进入支付');
                /*
                 * 记录用户信息
                 */
                $user_info = $userService->get($notify->openid);
                //查找支付用户信息
                Log::info('查找支付用户信息');
                $user = PayUser::where('user_id', $notify->openid)->first();
                //如果没有这个用户
                if (! $user) {
                    Log::info('没有这个用户的信息');
                    //如果有订阅
                    if ($user_info->subscribe) {
                        Log::info('用户有订阅:'.$user_info->subscribe);
                        $data = [
                            'user_id' => $notify->openid,
                            'nickname' => $user_info->nickname,
                            'avatar' => $user_info->headimgurl,
                            'pay_type' => 'wechat',
                        ];
                        //创建用户信息
                        Log::info('订阅用户的信息');
                        Log::debug($data);
                        PayUser::create($data);
                    } else { //否则设置默认信息
                        Log::info('用户没有订阅：'.$user_info->subscribe);
                        $data = [
                            'user_id' => $notify->openid,
                            'nickname' => '爱心人士',
                            'avatar' => '/images/avatar/pay.jpg',
                            'pay_type' => 'wechat',
                        ];
                        Log::debug($data);
                        //创建默认用户信息
                        PayUser::create($data);
                    }
                } else { //如果有这个用户
                    //查看订阅情况
                    Log::info('已存在该用户信息');
                    if ($user_info->subscribe) {
                        //更新用户信息
                        Log::info('用户有订阅'.$user_info->subscribe);
                        $user->nickname = $user_info->nickname;
                        $user->avatar = $user_info->headimgurl;
                        $user->save();
                        Log::info('更新用户信息');
                        Log::debug($user);
                    }
                }
                //更新未支付订单信息，标志order_status为1，已支付
                Log::info('用户信息处理完毕');
                $order->user_id = $notify->openid;
                $order->paid_at = time();
                $order->order_status = 1;
            } else {
                $order->order_status = 0;
            }
            $order->save(); // 保存订单
            Log::info('更新订单支付状态');
            Log::debug($order);

            return true; // 返回处理完成

        });
        Log::info('回调结束');

        return $response;
    }

    public function getOrderStatus(Request $request)
    {
        $pay_status = PayOrder::where('order_guid', $request->get('order_guid'))->value('order_status');

        return ['pay_status' => $pay_status];
    }
}

```

附加路由

```php
//支付详情页
Route::get('/pay_details/{id}', 'HomeController@pay_details');
//wechat QrCode Scan pay
Route::post('/wechat/pay', 'WxpayController@order');
Route::any('/wechat/pc/notify', 'WxpayController@notifyUrl');
Route::post('/wechat/orderStatus','WxpayController@getOrderStatus');


//支付详情
public function pay_details(Request $request)
{
    return view('pay.pay_details');
}
```

[pay.pay_details.blade.php 代码](https://gist.github.com/wploey/9e4ebeadd4c31e7e6f645156aec28ba9)

效果图
![](http://oqlezeown.bkt.clouddn.com/qr-scan-pay-preview.png)

## 支付宝即时到账

[latrell/Alipay](https://github.com/latrell/Alipay) 安装好了按照文档写上对应代码就可以用了

## 微信网页授权

按照 EasyWeChat 文档配置 OAuth2.0

## 微信JSAPI支付

同微信支付二维码扫描差不多，需要根据`OAuth2.0`获取`opendi`生成订单

## 参考

> [EasyWeChat 支付](https://easywechat.org/zh-cn/docs/payment.html)
> [【教程】基于 Laravel5.1 LTS 版的微信开发](https://laravel-china.org/topics/3146/tutorial-based-on-the-laravel51-version-of-wechat-lts-development)
> [Laravel使用EasyWechat，3分钟完成微信APP支付](http://blog.csdn.net/amazingdyd/article/details/59483697)
相关资料
> [微信扫码支付模式一和模式二的区别](http://www.cnblogs.com/raincedar/p/5653584.html)