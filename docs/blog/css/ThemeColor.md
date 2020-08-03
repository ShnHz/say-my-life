---
pageClass: blog
---

## 用户自定义主题色方案
<p class="date">2020/08/03 15:10:37 
<span id="/blog/css/ThemeColor.html" class="leancloud_visitors">
    <i class="shni shn-eye-fill" />
    <i class="leancloud-visitors-count"></i>
</span>
</p>

::: tip
利用CSS变量来实现用户自定义主题色的需求，
这个重要的 CSS 新功能，所有主要浏览器已经都支持了。
:::

### 变量的声明

声明变量的时候，变量名前面要加两根连词线（<code class="default">--</code>）。

```css
body {
    --themeColor: #2cbfbe;
}
```
### 读取变量

<code class="default">var()</code>函数用于读取变量。

```css
a {
    color: var(--themeColor);
}
```

<code class="default">var()</code>函数还可以使用第二个参数，表示变量的默认值。如果该变量不存在，就会使用这个默认值。

```css
a {
    color: var(--themeColor,#2cbfbe);
}
```

<code class="default">var()</code>函数还可以在vue的<code class="default">template</code>模板里面使用，这可比<code class="default">scss</code>舒服多了。

```html
<a style="color: var(--themeColor);">我是a标签</a>
```

### 操作变量

<code class="default">JavaScript</code> 操作 <code class="default">CSS</code> 变量的写法如下。

```js
// 设置变量
document.body.style.setProperty('--themeColor', '#2cbfbe');
// 读取变量
document.body.style.getPropertyValue('--themeColor').trim();
// 删除变量
document.body.style.removeProperty('--themeColor');
```

### 利用VueCookies实现存储

我可不想用户设置了一次主题色刷新页面后就不见了，这就需要将主题色信息存储在cookies里

```js
this.$cookies.set('themeColor', themeColor)
```

### 混合色

有些时候，我们不仅仅要设置主题色，还需要设置一些主题色和白色或黑色混合的混合色，用于按钮的hover等常用组件内

```css
    --themeColor: #2cbfbe;
    --themeColor-light-1: #41c5c5;
    --themeColor-light-2: #56cccb;
    --themeColor-light-3: #6bd2d2;
    --themeColor-light-4: #80d9d8;
    --themeColor-light-5: #96dfdf;
    --themeColor-light-6: #abe5e5;
    --themeColor-light-7: #c0ecec;
    --themeColor-light-8: #d5f2f2;
    --themeColor-light-9: #eaf9f9;

    --themeColor-dark-1: #28acab;
    --themeColor-dark-2: #239998;
    --themeColor-dark-3: #1f8685;
    --themeColor-dark-4: #1a7372;
    --themeColor-dark-5: #16605f;
    --themeColor-dark-6: #124c4c;
    --themeColor-dark-7: #0d3939;
    --themeColor-dark-8: #092626;
    --themeColor-dark-9: #041313;
```

```js
    //设置主题色及混合色 
    setThemeColor(value) {
      document.body.style.setProperty('--themeColor', value)
      for (let i = 1; i < 10; i++) {
        document.body.style.setProperty(
          `--themeColor-light-${i}`,
          this.colourBlend('#ffffff', value, 1 - i / 10)
        )
        // 与白色混合，1-9 各层次

        document.body.style.setProperty(
          `--themeColor-dark-${i}`,
          this.colourBlend('#000000', value, 1 - i / 10)
        )
        // 与黑色混合，1-9 各层次
      }

      this.$cookies.set('themeColor', value)
    },
    //混合色计算函数
    colourBlend(c1, c2, ratio) {
      ratio = Math.max(Math.min(Number(ratio), 1), 0)
      let r1 = parseInt(c1.substring(1, 3), 16)
      let g1 = parseInt(c1.substring(3, 5), 16)
      let b1 = parseInt(c1.substring(5, 7), 16)
      let r2 = parseInt(c2.substring(1, 3), 16)
      let g2 = parseInt(c2.substring(3, 5), 16)
      let b2 = parseInt(c2.substring(5, 7), 16)
      let r = Math.round(r1 * (1 - ratio) + r2 * ratio)
      let g = Math.round(g1 * (1 - ratio) + g2 * ratio)
      let b = Math.round(b1 * (1 - ratio) + b2 * ratio)
      r = ('0' + (r || 0).toString(16)).slice(-2)
      g = ('0' + (g || 0).toString(16)).slice(-2)
      b = ('0' + (b || 0).toString(16)).slice(-2)
      return '#' + r + g + b
    }
```

这样就可以完美的设置自定义主题色啦~

<base-valine />
<el-backtop :visibility-height="0"></el-backtop>
