---
pageClass: blog
---

## 安利一个我自己写的一个小插件：vue-touch-box
<p class="date">2020/05/28 15:41:20 
<span id="/blog/vue/VueTouchBox.html" class="leancloud_visitors">
    <i class="shni shn-eye-fill" />
    <i class="leancloud-visitors-count"></i>
</span>
</p>

[![Vue 2.x](https://img.shields.io/badge/Vue-2.x-brightgreen.svg)](https://vuejs.org/v2/guide/)
[![npm](https://img.shields.io/npm/v/vue-touch-box.svg)](https://www.npmjs.com/package/vue-touch-box)
[![npm-downloads](https://img.shields.io/npm/dm/vue-touch-box.svg)](https://www.npmjs.com/package/vue-touch-box)
[![Github](https://img.shields.io/github/stars/ShnHz/vue-touch-box.svg?style=social&label=Star&maxAge=2592000)](https://github.com/ShnHz/vue-touch-box)

[English Doc](https://github.com/ShnHz/vue-touch-box)

PC touch to elements was never this easy!

This is for `vue 2.x`

## DEMO
<div style="width: 100%;height: 500px;overflow: scroll;margin-top:20px" v-touch-box>
    <ul>
    <li :key="index" v-for="index in 100">
        <span v-for="index in 100" :key="index">touch{{index}}!</span>
    </li>
    </ul>
</div>

## 安装

该插件可以通过npm安装。

npm:
```bash
npm install --save vue-touch-box
```

yarn:
```bash
yarn add vue-touch-box
```

## 使用方法

vue-touch-box 可用作 vue 指令.

JS
```js
import VueTouchBox from 'vue-touch-box';

Vue.use(VueTouchBox)
```

HTML
```html
<div v-touch-box>
    touch this
</div>
```

## Options

|  参数  | 说明 | 默认值 |
|  :----  | :----  | :----: |
| speed  | 拖动速度 | 1 |
| mobile  | 是否开启移动端 | false |
| inertia  | 是否开启滚动惯性 | true |

<base-valine />
<el-backtop :visibility-height="0"></el-backtop>
