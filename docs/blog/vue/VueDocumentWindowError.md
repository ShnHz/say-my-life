---
pageClass: blog
---

## Vue打包抛出document/window报错
<p class="date">2020-04-16 11:30 
  <span id="/blog/vue/VueDocumentWindowError.html" class="leancloud_visitors">
      <i class="shni shn-eye-fill" />
      <i class="leancloud-visitors-count"></i>
  </span>
</p>


<el-backtop :visibility-height="0"></el-backtop>

打包代码时遇到了这个报错


<blockquote>
<p>
window is not defined,document is not defined
</p>
</blockquote>

在本地测试时没有任何问题，打包却产生了这个错误。

原因是：在<code class="default">created</code>生命周期内，不能写关于<code class="default">window</code>和<code class="default">document</code>的操作，原理我还没找到。

建议写在<code class="default">mounted</code>生命周期内

<base-valine />