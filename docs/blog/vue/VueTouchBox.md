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

# vue-touch-box

[![Vue 2.x](https://img.shields.io/badge/Vue-2.x-brightgreen.svg)](https://vuejs.org/v2/guide/)
[![npm](https://img.shields.io/npm/v/vue-touch-box.svg)](https://www.npmjs.com/package/vue-touch-box)
[![npm-downloads](https://img.shields.io/npm/dm/vue-touch-box.svg)](https://www.npmjs.com/package/vue-touch-box)
[![Github](https://img.shields.io/github/stars/ShnHz/vue-touch-box.svg?style=social&label=Star&maxAge=2592000)](https://github.com/ShnHz/vue-touch-box)

PC touch to elements was never this easy!

This is for `vue 2.x`

## Demo

<div style="width: 100%;height: 500px;overflow: scroll;margin-top:20px" v-touch-box>
    <h4 style="margin-bottom:20px">touch this</h4>
    <ul>
    <li :key="index" v-for="index in 100">
        <span v-for="index in 100" :key="index">{{index}}</span>
    </li>
    </ul>
</div>

## Installing

This package is available on npm.

<p class="warning">
    If you used this package before, please ensure you are using the right one, since it has been renamed from `vue-touch-box` to `vue-touch-box`
</p>

Using npm:
```bash
npm install --save vue-touch-box
```

Using yarn:
```bash
yarn add vue-touch-box
```

## Usage

vue-touch-box can be used as a vue directive.

### As a vue directive
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

#### v1.0.0 none

<base-valine />
<el-backtop :visibility-height="0"></el-backtop>
