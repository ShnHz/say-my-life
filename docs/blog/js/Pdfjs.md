---
pageClass: blog
---

## pdf.js使用和JS实现嵌套Iframe页面F11全屏效果

<p class="date">2020-04-02 10:58
  <span id="/blog/js/Pdfjs.html" class="leancloud_visitors">
      <i class="shni shn-eye-fill" />
      <i class="leancloud-visitors-count"></i>
  </span>
</p>

<el-backtop :visibility-height="0"></el-backtop>

### 1. Pdf.js使用
<code class="default">generic/web/viewer.html</code>主要是渲染pdf阅读器的样式，而<code class="default">generic/web/viewer.js</code>则是指定打开的pdf文件（当然还有其他功能，不过这些都不是我们关心的），我们看位于<code class="default">generic/web/viewer.js</code>的一段代码：

```js
var DEFAULT_URL ='20802.pdf';
```

我们可以看到，他默认打开<code class="default">generic/web/20802.pdf.pdf</code>文件，再来看下面这段代码：

```js
var file = 'file' inparams ? params.file : DEFAULT_URL;
```

这就告诉我们，可以通过传递<code class="default">file</code>形参来动态指定打开的pdf文件！如：

```js
http://localhost:8080/generic/web/viewer.html?file=qbs.pdf
```

下面我就介绍下，具体嵌入项目中是如何运用的！

可以把generic中的内容作为第三方插件进行使用，

然后页面可以使用<code class="default">iframe</code>标签来加载pdf

```js
<iframesrc="<c:urlvalue="/resources/plugin/pdfJs/generic/web/viewer.html"/>?file=<c:url value="/publicity/displayPDF.do" />"width="100%" height="100%"></iframe>
```

实质就是我们直接访问<code class="default">generic/web/viewer.html</code>，然后为其指定一个<code class="default">file</code>形参，用于指定打开的<code class="default">pdf</code>文件！我上面使用的流的方式进行指定的。

### 2. JS实现嵌套Iframe页面F11全屏效果

前面用<code class="default">iframe</code>实现了嵌套<code class="default">pdf.js</code>但是你能够发现全屏按钮没有了

那是因为<code class="default">ifram</code>中不能实现全屏功能

但在HTML5中,W3C制定了关于全屏的API，就可以实现全屏幕的效果

项目中需要将后台浏览器的窗口全屏，也就是我们点击一个按钮要实现按F11全屏的效果。 在HTML5中,W3C制定了关于全屏的API，就可以实现全屏幕的效果，也可以让页面中的图片，视频等全屏目前只有googlechrome 15 +, safri5.1+,firfox10+,IE11支持

实现：也是在<code class="default">webViewerInitialized</code>函数中绑定id为<code class="default">presentationMode</code>的button点击事件

```js
document.getElementById('presentationMode').addEventListener('click', function() {
    vardocElm = document.documentElement //W3C

    if (docElm.requestFullscreen) {
        docElm.requestFullscreen()
    } //FireFox
    else if (docElm.mozRequestFullScreen) {
        docElm.mozRequestFullScreen()
    } //Chrome等
    else if (docElm.webkitRequestFullScreen) {
        docElm.webkitRequestFullScreen()
    } //IE11
    else if (docElm.msRequestFullscreen) {
        docElm.msRequestFullscreen()
    }
})
```

其中

```js
if(!PDFViewerApplication.supportsFullscreen) {
   document.getElementById('presentationMode').classList.add('hidden');
   document.getElementById('secondaryPresentationMode').
   classList.add('hidden');
}
```

判断是否显示全屏按钮，我是把他隐藏的js去掉，也可以进一步的完善

另外：在 用IE11的时候全屏有可能不能显示全部pdf文件这样只需在viewer.html中<code class="default"><htmldir="ltr" mozdisallowselectionprint moznomarginboxesstyle="width: 100%"></code>宽度设为100%

将<code class="default">iframe</code>标签内加上一个 <code class="default">allowFullScreen=true</code> 也是可行的

<base-valine />