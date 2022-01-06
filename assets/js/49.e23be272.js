(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{217:function(t,s,e){"use strict";e.r(s);var a=e(0),n=Object(a.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),t._m(5),t._m(6),t._v(" "),t._m(7),t._v(" "),t._m(8),t._m(9),t._v(" "),t._m(10),t._m(11),t._v(" "),e("blockquote",[e("p",[e("a",{attrs:{href:"https://nodejs.org/en/download/package-manager",target:"_blank",rel:"noopener noreferrer"}},[t._v("地址"),e("OutboundLink")],1)])]),t._v(" "),t._m(12),t._m(13),t._v(" "),e("blockquote",[e("p",[e("a",{attrs:{href:"https://github.com/robbyrussell/oh-my-zsh/wiki/Installing-ZSH#how-to-install-zsh-in-many-platforms",target:"_blank",rel:"noopener noreferrer"}},[t._v("地址"),e("OutboundLink")],1)])]),t._v(" "),t._m(14),t._m(15),t._v(" "),e("blockquote",[e("p",[e("a",{attrs:{href:"https://github.com/robbyrussell/oh-my-zsh",target:"_blank",rel:"noopener noreferrer"}},[t._v("地址"),e("OutboundLink")],1)])]),t._v(" "),t._m(16),t._m(17),t._v(" "),e("blockquote",[e("p",[e("a",{attrs:{href:"https://github.com/zsh-users/zsh-autosuggestions",target:"_blank",rel:"noopener noreferrer"}},[t._v("地址"),e("OutboundLink")],1),t._v(" 功能：这个是历史命令提示功能")])]),t._v(" "),t._m(18),t._m(19),t._v(" "),t._m(20),t._m(21),t._v(" "),e("blockquote",[e("p",[t._v("这里为了节省时间就先用 "),e("a",{attrs:{href:"https://raw.githubusercontent.com/Chasers9527/ubuntu-development-environment/master/laravel-16.sh",target:"_blank",rel:"noopener noreferrer"}},[t._v("一键安装包"),e("OutboundLink")],1),t._v("，后续再切换到 Docker上")])]),t._v(" "),t._m(22),t._v(" "),t._m(23)])}),[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"lnmp-环境搭建"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#lnmp-环境搭建"}},[this._v("#")]),this._v(" LNMP 环境搭建")])},function(){var t=this.$createElement,s=this._self._c||t;return s("blockquote",[s("p",[this._v("Linux + Nginx + Mysql 5.7 + PHP 7.2")]),this._v(" "),s("p",[this._v("在众多的 Linux 中，使用率最高的是 Centos 7 | Ubuntu 16.04 这两者内核不同，操作命令也就不相同。")]),this._v(" "),s("p",[this._v("此篇文档介绍的是 Ubuntu 16.04")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("img",{attrs:{src:"_media/ubuntu.png",alt:"ubuntu"}})])},function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"修改登陆用户"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#修改登陆用户"}},[this._v("#")]),this._v(" 修改登陆用户")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("blockquote",[e("p",[t._v("在腾讯云新开的云主机上，一般的默认用户是 "),e("code",[t._v("ubuntu")]),t._v("，此处先更改为 "),e("code",[t._v("root")]),t._v(".")]),t._v(" "),e("p",[t._v("可能你又要说，"),e("code",[t._v("root")]),t._v("用户不安全等等。没关系，我们循序渐进的来。")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 加root 密码")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("passwd")]),t._v(" root\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("vi")]),t._v(" /etc/ssh/sshd_config\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 更改 PermitRootLogin yes")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("service")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("ssh")]),t._v(" restart // 重启 "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("ssh")]),t._v(" 配置\nssh-keygen -t rsa -C "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"your@email.com"')]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# change 192.168.1.250 to your ip ")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("scp")]),t._v(" ~/.ssh/id_rsa.pub  root@192.168.1.250:.ssh/authorized_keys\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 输入密码即可")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"软件包安装"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#软件包安装"}},[this._v("#")]),this._v(" 软件包安装")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"apt-get-安装可能使用的包"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#apt-get-安装可能使用的包"}},[this._v("#")]),this._v(" apt-get 安装可能使用的包")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt-get")]),t._v(" update\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# git、zsh、node 安装")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt-get")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" -y "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("zsh")]),t._v(" \n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"切换终端"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#切换终端"}},[this._v("#")]),this._v(" 切换终端")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[this._v("# 切换为 bash")]),this._v("\nchsh -s /bin/bash\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[this._v("# 切换为 zsh")]),this._v("\nchsh -s /bin/zsh\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"node-js"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#node-js"}},[this._v("#")]),this._v(" Node.js")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-Shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" -sL https://deb.nodesource.com/setup_9.x "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" -E "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("bash")]),t._v(" -\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt-get")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" -y nodejs\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# npm 镜像包加速")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" config "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("set")]),t._v(" registry https://registry.npm.taobao.org\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"how-to-install-zsh"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#how-to-install-zsh"}},[this._v("#")]),this._v(" how to install zsh")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Ubuntu, Debian & derivatives")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("zsh")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"oh-my-zsh"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#oh-my-zsh"}},[this._v("#")]),this._v(" oh-my-zsh")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("sh")]),t._v(" -c "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"'),e("span",{pre:!0,attrs:{class:"token variable"}},[e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$(")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("wget")]),t._v(" https://raw.githubusercontent.com/robbyrussell/oh-my-zsh/master/tools/install.sh -O -"),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v(")")])]),t._v('"')]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"zsh-autosuggestions"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#zsh-autosuggestions"}},[this._v("#")]),this._v(" zsh-autosuggestions")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[this._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[this._v("git")]),this._v(" clone https://github.com/zsh-users/zsh-autosuggestions ~/.zsh/zsh-autosuggestions\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[this._v("# Add the following to your .zshrc or .bashrc")]),this._v("\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[this._v("source")]),this._v(" ~/.zsh/zsh-autosuggestions/zsh-autosuggestions.zsh\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"更改python-版本"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#更改python-版本"}},[this._v("#")]),this._v(" 更改python 版本")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 首先查看Python默认版本 [结果：Python 2.7]")]),t._v("\npython --version\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 搜索系统是否已经安装Python3.5 [结果太长略去]")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("whereis")]),t._v(" python3.5\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 删除旧版本和软件包")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("rm")]),t._v(" /usr/bin/python\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 建立新的软连接")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("ln")]),t._v(" -s /usr/bin/python3.5 /usr/bin/python\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 查看版本 [结果：Python 3.5]")]),t._v("\npython --version\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"shell-安装包安装php"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#shell-安装包安装php"}},[this._v("#")]),this._v(" shell 安装包安装php")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"问题及解决"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#问题及解决"}},[this._v("#")]),this._v(" 问题及解决")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ul",[e("li",[e("p",[t._v('Ubuntu 上"unable to resolve host"问题解决办法')]),t._v(" "),e("blockquote",[e("p",[t._v("编辑/etc/hosts文件, 添加下面的内容")]),t._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token number"}},[t._v("127.0")]),t._v(".0.1 localhost  -"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("127.0")]),t._v(".0.1 localhost  ***  // 主机名\n")])])])])]),t._v(" "),e("li",[e("p",[t._v("SSH 连接服务器失败")]),t._v(" "),e("blockquote",[e("p",[t._v("ssh-keygen -R 127.0.0.1 (change to your server ip)")])])]),t._v(" "),e("li",[e("p",[t._v("redis 的数据")]),t._v(" "),e("div",{staticClass:"language-Shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("mkdir")]),t._v(" /data/var/lib/redis\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("mkdir")]),t._v(" /data/var/run/redis\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("cp")]),t._v(" /var/run/redis/redis-server.pid /data/var/run/redis/redis-server.pid\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("mkdir")]),t._v(" /data/var/log/redis\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("cp")]),t._v(" /var/log/redis/redis-server.log /data/var/log/redis/redis-server.log\n\npidfile /data/run/redis/redis-server.pid\n")])])])])])}],!1,null,null,null);s.default=n.exports}}]);