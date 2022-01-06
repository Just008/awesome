(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{195:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},(function(){var t=this.$createElement;this._self._c;return this._m(0)}),[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[a("h1",{attrs:{id:"常见问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#常见问题"}},[t._v("#")]),t._v(" 常见问题")]),t._v(" "),a("p",[t._v("在 Nginx 的配置时会有很多问题需要解决。这里就列出常见的问题")]),t._v(" "),a("h2",{attrs:{id:"重定向配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#重定向配置"}},[t._v("#")]),t._v(" 重定向配置")]),t._v(" "),a("ol",[a("li",[t._v("一级域名强制跳转二级域名")])]),t._v(" "),a("p",[t._v("最常见的例子是在访问 "),a("code",[t._v("xxx.com")]),t._v(" 时，你想让它强制跳转 "),a("code",[t._v("www.xxx.com")])]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("server "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  listen "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("80")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  server_name xxx.com"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 我在这里")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$http_host")]),t._v(" ~ "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"^***.com$"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    rewrite  ^"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(".*"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("    http://www.***.com"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$1")]),t._v(" permanent"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(".\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])]),a("ol",{attrs:{start:"2"}},[a("li",[t._v("http 强制跳转 https")])]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 由于 Nginx 不推荐过多的判断，所以在配置时还是把这两类分开比较好")]),t._v("\nserver "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  listen "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("80")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  server_name xxx.xxx.com"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 我在这里")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("301")]),t._v(" https://"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$server_name")]),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$request_uri")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(".\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\nserver "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    listen "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("443")]),t._v(" ssl"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    server_name  xxx.xxx.com"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(".\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h2",{attrs:{id:"反向代理静态文件解析错误"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#反向代理静态文件解析错误"}},[t._v("#")]),t._v(" 反向代理静态文件解析错误")]),t._v(" "),a("p",[a("strong",[t._v("前端项目:")])]),t._v(" "),a("p",[a("code",[t._v("vue-cli-3")]),t._v(" 创建的项目。需要你根据不同的环境，添加不同的 "),a("code",[t._v("path")])]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 在 vue.config.js 文件中")]),t._v("\nmodule"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  publicPath"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" process"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("env"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("NODE_ENV")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'production'")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/backend/'")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[a("strong",[t._v("后端项目:")])]),t._v(" "),a("p",[t._v("静态资源上传到 CDN 上，既能减轻项目的大小。也能保证在不同地域的访问速度")])])}],!1,null,null,null);s.default=e.exports}}]);