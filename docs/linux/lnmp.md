# LNMP 环境搭建
> Linux + Nginx + Mysql 5.7 + PHP 7.2
>
> 在众多的 Linux 中，使用率最高的是 Centos 7 | Ubuntu 16.04 这两者内核不同，操作命令也就不相同。
> 
>此篇文档介绍的是 Ubuntu 16.04

![ubuntu](_media/ubuntu.png)

#  修改登陆用户
> 在腾讯云新开的云主机上，一般的默认用户是 `ubuntu`，此处先更改为 `root`.
>
> 可能你又要说，`root`用户不安全等等。没关系，我们循序渐进的来。

```bash
# 加root 密码
sudo passwd root
sudo vi /etc/ssh/sshd_config
# 更改 PermitRootLogin yes
sudo service ssh restart // 重启 ssh 配置
ssh-keygen -t rsa -C "your@email.com"
# change 192.168.1.250 to your ip 
scp ~/.ssh/id_rsa.pub  root@192.168.1.250:.ssh/authorized_keys
# 输入密码即可
```

# 软件包安装

## apt-get 安装可能使用的包

```shell
sudo apt-get update
# git、zsh、node 安装
apt-get install -y git zsh 
```

## 切换终端
```shell
# 切换为 bash
chsh -s /bin/bash
# 切换为 zsh
chsh -s /bin/zsh
```


## Node.js

> [地址](https://nodejs.org/en/download/package-manager)

```Shell
curl -sL https://deb.nodesource.com/setup_9.x | sudo -E bash -
sudo apt-get install -y nodejs
# npm 镜像包加速
npm config set registry https://registry.npm.taobao.org
```

## how to install zsh

> [地址](https://github.com/robbyrussell/oh-my-zsh/wiki/Installing-ZSH#how-to-install-zsh-in-many-platforms)

```shell
# Ubuntu, Debian & derivatives
apt install zsh
```


## oh-my-zsh

> [地址](https://github.com/robbyrussell/oh-my-zsh)

```shell
sh -c "$(wget https://raw.githubusercontent.com/robbyrussell/oh-my-zsh/master/tools/install.sh -O -)"
```

## zsh-autosuggestions

> [地址](https://github.com/zsh-users/zsh-autosuggestions) 功能：这个是历史命令提示功能

```shell

git clone https://github.com/zsh-users/zsh-autosuggestions ~/.zsh/zsh-autosuggestions
# Add the following to your .zshrc or .bashrc
source ~/.zsh/zsh-autosuggestions/zsh-autosuggestions.zsh
```

## 更改python 版本

```shell
# 首先查看Python默认版本 [结果：Python 2.7]
python --version
# 搜索系统是否已经安装Python3.5 [结果太长略去]
whereis python3.5
# 删除旧版本和软件包
rm /usr/bin/python
# 建立新的软连接
ln -s /usr/bin/python3.5 /usr/bin/python
# 查看版本 [结果：Python 3.5]
python --version
```

## shell 安装包安装php

> 这里为了节省时间就先用 [一键安装包](https://raw.githubusercontent.com/Chasers9527/ubuntu-development-environment/master/laravel-16.sh)，后续再切换到 Docker上



# 问题及解决

* Ubuntu 上"unable to resolve host"问题解决办法

  > 编辑/etc/hosts文件, 添加下面的内容
  >
  > ```shell
  > 127.0.0.1 localhost  -> 127.0.0.1 localhost  ***  // 主机名
  > ```

* SSH 连接服务器失败

  > ssh-keygen -R 127.0.0.1 (change to your server ip)

* redis 的数据

    ```Shell
    mkdir /data/var/lib/redis
    mkdir /data/var/run/redis
    cp /var/run/redis/redis-server.pid /data/var/run/redis/redis-server.pid
    mkdir /data/var/log/redis
    cp /var/log/redis/redis-server.log /data/var/log/redis/redis-server.log

    pidfile /data/run/redis/redis-server.pid
    ```

