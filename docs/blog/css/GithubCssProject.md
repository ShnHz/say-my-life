---
pageClass: blog-catalog
---

## 5 个 GitHub 上超火的 CSS 奇技淫巧项目，找到写 CSS 的灵感！
<p class="date">2020/11/24 15:38:38 
<span id="/blog/css/GithubCssProject.html" class="leancloud_visitors">
    <i class="shni shn-eye-fill" />
    <i class="leancloud-visitors-count"></i>
</span>
</p>

###### 原文 [掘金](https://juejin.cn/post/6898482129592647693)

### 简介
一般人没事的时候刷刷朋友圈、微博、电视剧、知乎，而有些人是没事的时候刷刷 GitHub ，看看最近有哪些流行的项目。

久而久之，这差距就越来越大，因此总会有开源信息的不对称，有哪些优秀的前端开源项目值得学习的也不知道。

初步前端与高级前端之间，最大的差距可能就是信息差造成的。

超级猫从 2016 年加入 GitHub，到现在的 2020 年，快整整 5 个年头了。

从 2018 年开始，我就养成了每天逛 GitHub 的习惯，一般在早上上班前或者中午午休的时候都会逛一下。

看看每天都开源了哪些好的前端项目，还有用到的主流前端技术栈又是哪些，值得我去学习的。

因此也收藏了不少好的开源项目，在此推荐给大家，每周会有一到三篇精华文章推送。

希望你在浏览、学习了超级猫推荐的这些开源项目的过程中，你能学习到更多编程知识、提高编程技巧、找到编程的乐趣。

### You-need-to-know-css
该项目是 CSS 的各种效果实现，尤其是动画效果。

笔者把自己的收获和工作中常用的一些 CSS 小样式总结成这份文档。

目前文档一共包含 43 个 CSS 的小样式（持续更新…），所以还是很不错的学习 CSS 的项目来的。

<img src="https://cdn.chenyingshuang.cn/blog/css/GithubCssProject/1.jpg" />

比如： 打字效果

```css
<style>
  main {
    width: 100%; height: 229px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  span {
    display: inline-block;
    width: 21ch;
    font: bold 200% Consolas, Monaco, monospace;   /*等宽字体*/
    overflow: hidden;
    white-space: nowrap;
    font-weight: 500;
    border-right: 1px solid transparent;
    animation: typing 10s steps(21), caret .5s steps(1) infinite;
  }
  @keyframes typing{
    from {
        width: 0;
    }
  }
  @keyframes caret{
    50% { border-right-color: currentColor}
  }
</style>
<template>
  <main class="main">
    <span>前端GitHub</span>
  </main>
</template>
<script>
</script>
```

<blockquote>
<p><a href="https://lhammer.cn/You-need-to-know-css/#/zh-cn/" target="_blank" rel="nofollow noopener noreferrer">lhammer.cn/You-need-to…</a></p>
</blockquote>

### CSS-Inspiration

这里可以让你寻找到使用或者是学习 CSS 的灵感，以分类的形式，展示不同 CSS 属性或者不同的课题使用 CSS 来解决的各种方法。

包含了：布局(Layout)、阴影(box-shadow、drop-shadow)、伪类/伪元素、滤镜(fliter)、边框(border)、背景/渐变(linear-gradient/radial-gradient/conic-gradient)、混合模式（mix-blend-mode/background-blend-mode)、3D、动画/过渡(transition/animation)、clip-path、文本类、综合、CSS-Doodle、SVG 等内容。

<p>比如：<a class="default" href="https://github.com/chokcoco/iCSS/issues/75" target="_blank" rel="nofollow noopener noreferrer">巧用 CSS 实现酷炫的充电动画</a></p>

<img src="https://cdn.chenyingshuang.cn/blog/css/GithubCssProject/2.gif" />

<blockquote>
<p><a href="https://github.com/chokcoco/CSS-Inspiration" target="_blank" rel="nofollow noopener noreferrer">github.com/chokcoco/CS…</a></p>
</blockquote>

### css_tricks

该项目总结了一些常用的 CSS 样式，记录一些 CSS 的新属性和一点奇技淫巧。

比如 提示气泡的效果

```html
<div class="poptip btn" aria-controls="弹出气泡">poptip</div>
```

```css
$poptipBg: #30363d;
$color: #fff;
$triangle: 8px;
$distance: -12px;
.poptip {
  position: relative;
  z-index: 101;
  &::before,
  &::after {
    visibility: hidden;
    opacity: 0;
    transform: translate3d(0, 0, 0);
    transition: all 0.3s ease 0.2s;
    box-sizing: border-box;
  }
  &::before {
    content: "";
    position: absolute;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: $triangle $triangle 0 $triangle;
    border-color: $poptipBg transparent transparent transparent;
    left: calc(50% - #{$triangle});
    top: 0px;
    transform: translateX(0%) translateY($distance);
  }

  &::after {
    font-size: 14px;
    color: $color;
    content: attr(aria-controls);
    position: absolute;
    padding: 6px 12px;
    white-space: nowrap;
    z-index: -1;
    left: 50%;
    bottom: 100%;
    transform: translateX(-50%) translateY($distance);
    background: $poptipBg;
    line-height: 1;
    border-radius: 2px;
  }
  &:hover::before,
  &:hover::after {
    visibility: visible;
    opacity: 1;
  }
}

.btn {
  min-width: 100px;
  line-height: 1.5;
  padding: 5px 10px;
  color: #fff;
  background: #00adb5;
  border-radius: 4px;
  text-align: center;
  cursor: pointer;
}
```

<blockquote>
<p><a href="https://github.com/QiShaoXuan/css_tricks" target="_blank" rel="nofollow noopener noreferrer">github.com/QiShaoXuan/…</a></p>
</blockquote>

### animista
该项目里面有各种 CSS 实现的效果，还有代码演示，方便直接复制代码，还可以复制压缩后的代码，如果你在找某个 CSS 的效果的话，可以到这里找找看。

<img src="https://cdn.chenyingshuang.cn/blog/css/GithubCssProject/3.jpg" />

<img src="https://cdn.chenyingshuang.cn/blog/css/GithubCssProject/4.jpg" />

<blockquote>
<p><a href="http://animista.net/" target="_blank" rel="nofollow noopener noreferrer">animista.net/</a></p>
</blockquote>

### spinkit
汇集了实现各种加载效果的 CSS 代码片段。

<img src="https://cdn.chenyingshuang.cn/blog/css/GithubCssProject/5.gif" />

<p>SpinKit 仅使用（<code>transform</code> 和 <code>opacity</code>）CSS 动画来创建平滑且易于自定义的动画。</p>

<blockquote>
<p><a href="https://tobiasahlin.com/spinkit/" target="_blank" rel="nofollow noopener noreferrer">tobiasahlin.com/spinkit/</a></p>
</blockquote>

<base-valine />
<el-backtop :visibility-height="0"></el-backtop>
