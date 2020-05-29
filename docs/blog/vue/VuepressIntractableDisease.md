---
pageClass: blog
---

## VuePress的疑难杂症
<p class="date">2020-04-03 12:04 
  <span id="/blog/vue/VuepressIntractableDisease.html" class="leancloud_visitors">
      <i class="shni shn-eye-fill" />
      <i class="leancloud-visitors-count"></i>
  </span>
</p>


<el-backtop :visibility-height="0"></el-backtop>

### 1. 如何搭建一个VuePress技术文档/博客？

推荐看这篇文章<a href="https://juejin.im/post/5b8e526051882542a82baba6" target="_blank">VuePress 手摸手教你搭建一个类Vue文档风格的技术文档/博客</a>

可以参考我的网站目录结构：

```js
- docs
---.vuepress
----- components        //组件库，自动注册
----- public            //静态资源
----- styles            //此文件夹下的palette.styl文件会自动替换默认主题
----- config.js         //配置
----- enhanceApp.js     //应用级别的配置,可以添加开源组件
----- store.js          //Vuex
---.xxx                 //页面
--- README.md
- node_modules
- package.json
- README.md
-.gitignore
```
### 2. enhanceApp.js 怎么写？

由于 VuePress 是一个标准的 Vue 应用，你可以通过创建一个 <code class="default">.vuepress/enhanceApp.js</code> 文件来做一些应用级别的配置，当该文件存在的时候，会被导入到应用内部。<code class="default">enhanceApp.js</code> 应该 <code class="default">export default</code> 一个钩子函数，并接受一个包含了一些应用级别属性的对象作为参数。你可以使用这个钩子来安装一些附加的 Vue 插件、注册全局组件，或者增加额外的路由钩子等。

这是官网的例子：

```js
// 使用异步函数也是可以的
export default ({
  Vue, // VuePress 正在使用的 Vue 构造函数
  options, // 附加到根实例的一些选项
  router, // 当前应用的路由实例
  siteData, // 站点元数据
  isServer // 当前应用配置是处于 服务端渲染 或 客户端
}) => {
  // ...做一些其他的应用级别的优化
}
```

如果要扩展 VuePress 应用：

```js
import VueHighlightJS from 'vue-highlightjs'
import 'highlight.js/styles/atom-one-dark.css'
import '../.vuepress/public/iconfont/iconfont.css'
import vueWaterfallEasy from 'vue-waterfall-easy'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import '../.vuepress/public/css/element-variables.scss'
import VueParticles from 'vue-particles'
import VueCookies from 'vue-cookies'
import axios from 'axios'


import store from './store'

export default ({
    Vue, // VuePress 正在使用的 Vue 构造函数
}) => {
    // ...做一些其他的应用级别的优化
    Vue.use(VueHighlightJS)
    Vue.use(ElementUI)
    Vue.component('vue-waterfall-easy', vueWaterfallEasy)
    Vue.use(VueParticles)
    Vue.use(VueCookies)

    Vue.prototype.$store = store
    Vue.prototype.$http = axios
}
```
### 3. 如何更改首页内容？

修改<code class="default">config.js</code>文件

```js
module.exports = {
    title: 'Say My Life',
    description: '说说我的生活',
    head: [
        ['link', {
            rel: 'icon',
            href: `/favicon.ico`
        }]
    ]
}
```

首页的图片和底部文字该怎么修改呢

修改<code >/doce/README.md</code>文件

```JS
---
home: true
heroImage: /img/index-logo.gif
features:
- title: 记录生活
  details: 做一个热爱生活的人。
- title: 记录笔记
  details: 每天都要学习，每天都要成长。
- title: 记录旅行
  details: 多出去走走看看，才有资格拥有诗和远方。
footer: Happy Life Copyright © 2019-present Sang Hang Ning
---
```
### 4. 如何打包并部署到github pages/gitee pages？

写一个脚本<code class="default">deploy.sh</code>文件,Git Bash 执行一下就可以了

```bash
###!/usr/bin/env sh

### 确保脚本抛出遇到的错误
set -e

### 生成静态文件
npm run build

### 进入生成的文件夹
cd docs/.vuepress/dist

### 如果是发布到自定义域名
### echo 'www.yourwebsite.com' > CNAME

git init
git add -A
git commit -m 'deploy'

### 如果发布到 https://USERNAME.github.io/<REPO>  REPO=github上的项目
git push -f git@github.com:xxx.git master:gh-pages
git push -f https://gitee.com/xxx/xxx.git master:gitee-pages

cd -
```

### 4. 如何引入百度统计？

修改<code class="default">config.js</code>文件

```js
module.exports = {
    head: [
        ['link', {
            rel: 'icon',
            href: `/favicon.ico`
        }],
        ['script', {}, `
            var _hmt = _hmt || [];
            (function() {
            var hm = document.createElement("script");
            hm.src = "https://hm.baidu.com/hm.js?********************";
            var s = document.getElementsByTagName("script")[0]; 
            s.parentNode.insertBefore(hm, s);
            })();
        `]
    ],
}
```

<base-valine />