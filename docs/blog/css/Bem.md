---
pageClass: blog
---

## CSS — BEM 命名规范

<p class="date">2020-04-03 10:58
  <span id="/blog/css/Bem.html" class="leancloud_visitors">
      <i class="shni shn-eye-fill" />
      <i class="leancloud-visitors-count"></i>
  </span>
</p>

<el-backtop :visibility-height="0"></el-backtop>

### 1. 什么是 BEM 命名规范

Bem 是块（block）、元素（element）、修饰符（modifier）的简写，由 Yandex 团队提出的一种前端 CSS 命名方法论。

<blockquote>
<p>-  中划线 ：仅作为连字符使用，表示某个块或者某个子元素的多单词之间的连接记号。</p>
</blockquote>
<blockquote>
<p>__  双下划线：双下划线用来连接块和块的子元素</p>
</blockquote>
<blockquote>
<p>_   单下划线：单下划线用来描述一个块或者块的子元素的一种状态</p>
</blockquote>

BEM 是一个简单又非常有用的命名约定。让你的前端代码更容易阅读和理解，更容易协作，更容易控制，更加健壮和明确，而且更加严密。

#### 1.1 BEM 命名模式

BEM 命名约定的模式是：

```css
.block {}

.block__element {}

.block--modifier {}
```

<ul>
    <li>每一个块(block)名应该有一个命名空间（前缀）
        <ul>
            <li><code class="default">block</code> 代表了更高级别的抽象或组件。</li>
            <li><code class="default">block__element</code> 代表 .block 的后代，用于形成一个完整的 .block 的整体。</li>
            <li><code class="default">block--modifier</code> 代表 .block 的不同状态或不同版本。
            使用两个连字符和下划线而不是一个，是为了让你自己的块可以用单个连字符来界定。如：</li>
        </ul>
    </li>
</ul>

```css
.sub-block__element {}

.sub-block--modifier {}
```

#### 1.2 BEM 命名法的好处

BEM的关键是，可以获得更多的描述和更加清晰的结构，从其名字可以知道某个标记的含义。于是，通过查看 HTML 代码中的 class 属性，就能知道元素之间的关联。

常规的命名法示例：

```css
<div class="article">
    <div class="body">
        <button class="button-primary"></button>
        <button class="button-success"></button>
    </div>
</div>
```

<ul>
    <li>这种写法从 DOM 结构和类命名上可以了解每个元素的意义，但无法明确其真实的层级关系。在 css 定义时，也必须依靠层级选择器来限定约束作用域，以避免跨组件的样式污染。</li>
</ul>

使用了 BEM 命名方法的示例：

```css
<div class="article">
    <div class="article__body">
        <div class="tag"></div>
        <button class="article__button--primary"></button>
        <button class="article__button--success"></button>
    </div>
</div>
```

<ul>
    <li>通过 BEM 命名方式，模块层级关系简单清晰，而且 css 书写上也不必作过多的层级选择。</li>
</ul>

### 2. 如何使用 BEM 命名法

#### 2.1 什么时候应该用 BEM 格式

<ul>
<li>
<p>使用 BEM 的诀窍是，你要知道什么时候哪些东西是应该写成 BEM 格式的。</p>
</li>
<li>
<p>并不是每个地方都应该使用 BEM 命名方式。当需要明确关联性的模块关系时，应当使用 BEM 格式。</p>
</li>
<li>
<p>比如只是一条公共的单独的样式，就没有使用 BEM 格式的意义：</p>
</li>
</ul>

```css
.hide {
    display: none !important;
}
```

#### 2.2 在 CSS 预处理器中使用 BEM 格式
<ul>
<li>
<p>BEM 的一个槽点是，命名方式长而难看，书写不雅。相比 BEM 格式带来的便利来说，我们应客观看待。</p>
</li>
<li>
<p>而且，一般来说会使用通过 LESS/SASS 等预处理器语言来编写 CSS，利用其语言特性书写起来要简单很多。</p>
</li>
</ul>

<blockquote>
<p>以 SCSS 为例：</p>
</blockquote>

```css
.article {
    max-width: 1200px;
    &__body {
        padding: 20px;
    }
    &__button {
        padding: 5px 8px;
        &--primary {background: blue;}
        &--success {background: green;}
    }
}
```

#### 2.3 在流行框架的组件中使用 BEM 格式

<ul>
<li>
<p>在当前流行的 <code class="default">Vue.js</code> / <code class="default">React</code> / `Angular 等前端框架中，都有 CSS 组件级作用域的编译实现，其基本原理均为利用 CSS 属性选择器特性，为不同的组件生成不同的属性选择器。</p>
</li>
<li>
<p>当你选择了这种局部作用域的写法时，在较小的组件中，BEM 格式可能显得没那么重要。但对于公共的、全局性的模块样式定义，还是推荐使用 BEM 格式。</p>
</li>
<li>
<p>另外，对于对外发布的公共组件来说，一般为了风格的可定制性，都不会使用这种局部作用域方式来定义组件样式。此时使用 BEM 格式也会大显其彩。</p>
</li>
</ul>

#### 2.4 避免 .block__el1__el2 的格式

<ul>
<li>
<p>在深层次嵌套的 DOM</p></li>
<li><p>结构下，应避免过长的样式名称定义。</p></li>
<li><p>层级最后不要超过 4 级，不然增加阅读的理解难度</p></li>
</ul>

<base-valine />