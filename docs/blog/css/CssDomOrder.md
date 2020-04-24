---
pageClass: blog
---

## 使用CSS改变DOM顺序

<p class="date">2020-04-14 14:36
  <span id="/blog/css/CssDomOrder.html" class="leancloud_visitors">
      <i class="shni shn-eye-fill" />
      <i class="leancloud-visitors-count"></i>
  </span>
</p>

<el-backtop :visibility-height="0"></el-backtop>

在适配移动端页面，有时会遇到元素重排序的问题，就像我的<a href="https://www.sanghangning.cn">博客</a>首页，PC端与移动端模块顺序是不一样的。

PC端：文章模块 -> 个人信息模块

<img src="https://cdn.chenyingshuang.cn/blog/css/CssDomOrder/1.jpg" />

移动端：个人信息模块 -> 文章模块

<img src="https://cdn.chenyingshuang.cn/blog/css/CssDomOrder/2.jpg" height="400"/>

### 如何实现

#### 1.CSS自定义DOM顺序

设置<code class="default">display:flex</code>，使用<code class="default">order</code>属性指定单个项目并更改其在视觉顺序中的显示位置

<blockquote>
<p>
<code class="default">order</code>旨在按顺序排列项目。 这意味着为项目分配了代表其组的整数。 然后，按照该整数（最低的值）首先按照视觉顺序放置项目。 如果多个项目具有相同的整数值，则在该组中按照源顺序对项目进行布局。
</p>
</blockquote>

例如：item 1 ，item 2 ，item 3 <code class="default">order</code>值分别为 2 3 1

就会显示为 item 3 ，item 1 ，item 2

#### 2.flex布局一列一个元素

<code class="default">flex-direction</code>属性指定了内部元素是如何在 flex 容器中布局的，定义了主轴的方向(正方向或反方向)。

将<code class="default">flex-direction</code>设置为<code class="default">column</code>即可实现需求。

接受以下取值

<blockquote>
<p>
<code class="default">row</code>flex容器的主轴被定义为与文本方向相同。 主轴起点和主轴终点与内容方向相同。
</p>
</blockquote>
<blockquote>
<p>
<code class="default">row-reverse</code>表现和row相同，但是置换了主轴起点和主轴终点。
</p>
</blockquote>
<blockquote>
<p>
<code class="default">column</code>flex容器的主轴和块轴相同。主轴起点与主轴终点和书写模式的前后点相同。
</p>
</blockquote>
<blockquote>
<p>
<code class="default">column-reverse</code>表现和column相同，但是置换了主轴起点和主轴终点。
</p>
</blockquote>

<base-valine />