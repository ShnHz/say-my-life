---
pageClass: blog
---

## 国内静态页面托管

<p class="date">2020-04-24 16:00
  <span id="/blog/other/StaticWebHost.html" class="leancloud_visitors">
      <i class="shni shn-eye-fill" />
      <i class="leancloud-visitors-count"></i>
  </span>
</p>

### 原因
本来我是托管在<code class="default">Gitee Pages Pro</code>上面的，跟<code class="default">Github Pages</code>一样。

但是由于<code class="default">Vuepress</code>打包生成的js文件实在是太多了，会触发<code class="default">Gitee Pages Pro</code>服务器的同步请求限制，导致我的页面部分js文件请求会503。

### 替换方案

#### 全站加速

继续使用<code class="default">Github Pages</code>的服务，使用自定义域名（域名要备案）。

然后在阿里云平台开通全站加速服务，添加域名,配置如下：

源站域名为 ****.github.io <br>
加速域名为 你的已备案自定义域名

<img src="https://cdn.chenyingshuang.cn/blog/other/StaticWebHost/1.png" />

#### DNS配置

然后去配置DNS，配置完成后过段时间即可看到效果

<img src="https://cdn.chenyingshuang.cn/blog/other/StaticWebHost/2.png" />

#### 测试

可以去<a href="https://tool.chinaz.com/speedtest" target="_blank">网站测速工具 - 站长工具</a>这边测试网页打开速度~

<base-valine />