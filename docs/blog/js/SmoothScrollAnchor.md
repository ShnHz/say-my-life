---
pageClass: blog
---

## 使用JS实现平滑滚动至锚点
<p class="date">2020/05/22 14:34:28 
<span id="/blog/js/SmoothScrollAnchor.html" class="leancloud_visitors">
    <i class="shni shn-eye-fill" />
    <i class="leancloud-visitors-count"></i>
</span>
</p>

#### HTML代码
```html
<a @click="scrollTo('anchor1')">anchor1</a>
<a @click="scrollTo('anchor2')">anchor2</a>
<a @click="scrollTo('anchor3')">anchor3</a>

<div id="anchor1">
  <!-- ... -->
</div>
<div id="anchor2">
  <!-- ... -->
</div>
<div id="anchor3">
  <!-- ... -->
</div>
```

#### JS代码
```js
methods: {
  scroll (id) {
      window.history.pushState({}, 0, window.location.href.split('#')[0] + '#' + id) //更新url

      window.scrollTo({
        // -100是为了避免它直接滑动到屏幕顶部，怪丑的
        top: document.getElementById(id).offsetTop - 100, 
        behavior: "smooth" // 平滑滚动
      })
    }
}
```

<base-valine />
<el-backtop :visibility-height="0"></el-backtop>
