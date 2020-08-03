---
pageClass: blog-catalog
---

## 15 张精美动图全面讲解 CORS
<p class="date">2020/08/03 15:10:37 
<span id="/blog/other/CORS.html" class="leancloud_visitors">
    <i class="shni shn-eye-fill" />
    <i class="leancloud-visitors-count"></i>
</span>
</p>

###### 原文 [掘金](https://juejin.im/post/6856556746706518024)

### 前言：
<p>本文翻译自 <a href="https://dev.to/lydiahallie" target="_blank" rel="nofollow noopener noreferrer">Lydia Hallie</a> 小姐姐写的 <a href="https://dev.to/lydiahallie/cs-visualized-cors-5b8h?utm_campaign=React%2BNative%2BNow&amp;utm_medium=web&amp;utm_source=React_Native_Now_69#cs-cors" target="_blank" rel="nofollow noopener noreferrer">✋🏼🔥 CS Visualized: CORS</a>，她用了大量的动图去解释 CORS 这个概念，国内还没有人翻译本文，所以我在原文的理解上翻译了本文并修改了一些错误，希望能帮到大家。</p>

<blockquote>
<p>注：原文的动图均为 <strong>keynote</strong> 制作</p>
</blockquote>

<br>

<p>前端开发中，我们经常要使用其他站点的数据。前端显示这些数据之前，必须向服务器发出请求以获取该数据。</p>

<p>假设我们正在访问 <code>https://api.mywebsite.com</code> 这个站点，点击按钮向  <code>https://api.mywebsite.com/users</code> 发送请求，获取网站上的一些用户信息：</p>

<img src="https://cdn.chenyingshuang.cn/blog/other/CORS/1.gif" />

<blockquote>
<p>⚠️：这里原作者有个笔误，把 <code>https://api.mywebsite.com</code> 误写为 <code>https://www.mywebsite.com</code> 了，图中也有这个错误，读者要注意一下不要被误导</p>
</blockquote>

<p>从结果上看表现非常完美，我们向服务器发送请求，服务器返回了我们需要的 JSON 数据，前端也正常的渲染出了结果。</p>

<p>下面我们换一个网站试试。用  <code>https://www.anotherwebsite.com</code> 这个网站向 <code>https://api.website.com/users</code> 发送请求：</p>

<img src="https://cdn.chenyingshuang.cn/blog/other/CORS/2.gif" />

<p>问题来了，我们请求同样的接口网站，但是这次浏览器给我们抛出一个 Error。</p>

<p>刚刚浏览器抛出的就是 CORS Error，下面让我们分析一下为什么会产生这种 Error，以及这个 Error 的确切含义是什么。</p>

### 1.同源策略
<p>浏览器网络请求时，有一个<strong>同源策略</strong>的机制。即默认情况下，使用 API 的 Web 应用程序只能从加载应用程序的同一个域请求 HTTP 资源。</p>

<p>比如说， <code>https://www.mywebsite.com</code> 请求  <code>https://www.mywebsite.com/page</code> 是完全没有问题的。但是当资源位于不同<strong>协议</strong>、<strong>子域</strong>或<strong>端口</strong>的站点时，这个请求就是跨域的。</p>

<img src="https://cdn.chenyingshuang.cn/blog/other/CORS/3.jpg" />

<p>目前来看，同源策略会让三种行为受限：</p>
<ul>
<li>Cookie、LocalStorage 和 IndexDB 访问受限</li>
<li>无法操作跨域 DOM（常见于 iframe）</li>
<li>Javascript 发起的 XHR 和 Fetch 请求受限</li>
</ul>

<p>那么，为什么会存在同源策略呢？</p>

<p>我们做个假设，如果不存在同源策略，你无意中点击了七大姑在微信上给你发的一篇养生文章链接。其实这个网页是个钓鱼网站，访问链接后就把你重定向到一个嵌入了 iframe 的攻击网站，这个 iframe 会自动加载银行网站，并通过 cookies 登录你的账户。</p>
<p>登陆成功后，这个钓鱼网站还可以控制 iframe 的 DOM，通过一系列骚操作把你卡里的钱转走。</p>

<img src="https://cdn.chenyingshuang.cn/blog/other/CORS/4.gif" />

<p>这是一个非常严重的安全漏洞，我们不希望自己在互联网的内容被随便访问，更不要说这种涉及到钱的网站了。</p>
<p>同源策略可以帮助我们解决这个安全问题，这个策略确保我们只能访问同一站点的资源。</p>

<p>在这种情况下，<code>https://www.evilwebsite.com</code> 尝试跨站访问 <code>https://www.bank.com</code> 的资源，同源策略就会阻止这个操作，让钓鱼网站无法访问银行网站的数据。</p>

<p>说了这么多，同源策略和 CORS 又有什么关系？</p>

### 2.浏览器 CORS

<p>出于安全原因，浏览器限制<strong>从脚本内发起</strong>的跨域 HTTP 请求。 例如 XHR 和 Fetch 就遵循同源策略。这意味着使用 API 的 Web 应用程序只能从加载应用程序的同一个域请求 HTTP 资源。</p>

<img src="https://cdn.chenyingshuang.cn/blog/other/CORS/5.gif" />

<p>日常的业务开发中，我们会经常访问跨域资源，为了安全的请求跨域资源，浏览器使用一种称为 CORS 的机制。</p>
<p>CORS 的全名是 <strong>Cross-Origin Resource Sharing</strong>，即<strong>跨域资源共享</strong>。尽管默认情况下浏览器禁止我们访问跨域资源，但是我们可以利用 CORS <strong>放宽</strong>这种限制，在保证安全性的前提下访问跨域资源。</p>
<p>浏览器可以利用 CORS 机制，放行符合规范的跨域访问，阻止不合规范的跨域访问。浏览器内部是怎么做的呢？我们下面就来分析一下。</p>
<p>Web 程序发出跨域请求后，浏览器会<strong>自动</strong>向我们的 HTTP header 添加一个额外的请求头字段：<code>Origin</code>。<code>Origin</code> 标记了请求的站点来源：</p>

```http
GET https://api.website.com/users HTTP/1/1
Origin: https://www.mywebsite.com // <- 浏览器自己加的
```
<img src="https://cdn.chenyingshuang.cn/blog/other/CORS/6.gif" />

<p>为了使浏览器允许访问跨域资源， 服务器返回的 response 还需要加一些响应头字段，这些字段将<strong>显式表明</strong>此服务器是否允许这个跨域请求。</p>

### 3.服务端 CORS

<p>作为服务器开发人员，我们可以通过在 HTTP 响应中添加额外的响应头字段 <code>Access-Control-*</code> 来表明是否允许跨域请求。根据这些 CORS 响应头字段，浏览器可以允许一些被同源策略限制的跨源响应。</p>

<p>虽然有<a href="https://fetch.spec.whatwg.org/#http-responses" target="_blank" rel="nofollow noopener noreferrer">好几个 CORS 响应头字段</a>，但有一个字段是<strong>必加</strong>的，那就是 <code>Access-Control-Allow-Origin</code>。这个头字段的值指定了哪些站点被允许跨域访问资源。</p>

<p>1️⃣ 如果我们有服务器的开发权限，我们可以给 <code>https://www.mywebsite.com</code> 加上访问权限：将该域添加到 <code>Access-Control-Allow-Origin</code> 中。</p>

<img src="https://cdn.chenyingshuang.cn/blog/other/CORS/7.gif" />

<p>这个响应头字段现在被添加到服务器发回给客户端的 response header 中。这个字段添加后，如果我们从 <code>https://www.mywebsite.com</code> 发送跨域请求，同源策略将不再限制 <code>https://api.mywebsite.com</code> 站点返回的资源。</p>

```http
HTTP/1.1 200 OK
Access-Control-Allow-Origin: https://www.mywebsite.com
Date: Fri, 11 Oct 2019 15:47 GM
Content-Length: 29
Content-Type: application/json
Server: Apache

{user: [{...}]}
```

<img src="https://cdn.chenyingshuang.cn/blog/other/CORS/8.gif" />

<p>2️⃣ 收到服务器返回的 response 后，浏览器中的 CORS 机制会检查 <code>Access-Control-Allow-Origin</code> 的值是否等于 request 中 <code>Origin</code> 的值。</p>
<p>在这个例子中，request 的 <code>Origin</code> 是 <code>https://www.mywebsite.com</code>，这和 response 中 <code>Access-Control-Allow-Origin</code> 的值是一样的：</p>

<img src="https://cdn.chenyingshuang.cn/blog/other/CORS/9.gif" />

<p>3️⃣ 浏览器校验通过，前端成功地接收到跨域资源。</p><br>

<p>那么，当我们试图从一个没有在 <code>Access-Control-Allow-Origin</code> 中列出的网站跨域访问这些资源会发生什么呢？</p>

<img src="https://cdn.chenyingshuang.cn/blog/other/CORS/10.gif" />

<p>如上图所示，从 <code>https://www.anotherwebsite.com</code> 跨域访问 <code>https://api.mywebsite.com</code> 资源，浏览器抛出一个 CORS Error，经过上面的讲解，我们可以读懂这个报错信息了：</p>

```http
The 'Access-Control-Allow-Origin' header has a value
 'https://www.mywebsite.com' that is not equal 
to the supplied origin. 
```

<p>在这种情况下，<code>Origin</code> 的值是 <code>https://www.anotherwebsite.com</code>。然而，服务器在 <code>Access-Control-Allow-Origin</code> 响应头字段中没有标记这个站点，浏览器 CORS 机制就阻止了这个响应，我们无法在我们的代码中获取响应数据。</p>

<blockquote>
<p>CORS 还允许我们添加通配符 <code>*</code> 作为允许的外域，这意味着该资源可以被<strong>任意</strong>外域访问，所以要注意这种特殊情况</p>
</blockquote>

<hr>

<p><code>Access-Control-Allow-Origin</code> 是 CORS 机制提供的众多头字段之一。服务器开发人员还可以通过其它头字段扩展服务器的 CORS 策略，以允许/禁止某些请求。</p>

<p>另一个常见的响应头字段是 <code>Access-Control-Allow-Methods</code>。其指明了跨域请求所允许使用的 HTTP 方法。</p>

<img src="https://cdn.chenyingshuang.cn/blog/other/CORS/11.gif" />

<p>在上图的案例中，只有<code>GET</code>，<code>POST</code> 或 <code>PUT</code> 方法被允许跨域访问资源。其他 HTTP 方法，例如 <code>PATCH</code> 和 <code>DELETE</code> 都会被阻止。</p>
<blockquote>
<p>如果您想知道其它的 CORS 响应头字段是什么以及它们的用途，可以<a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS#The_HTTP_response_headers" target="_blank" rel="nofollow noopener noreferrer">查看此列表</a>。</p>
</blockquote>

<p>说到<code>PUT</code>，<code>PATCH</code> 和 <code>DELETE</code> 这几个 HTTP 方法，CORS 处理这些方法时还有些不同。这些非简单请求会触发 CORS 的预检请求。</p>

### 4.预检请求

<p>CORS 有两种类型的请求：一种是<strong>简单请求（simple request）</strong>，一种是<strong>预检请求（preflight request）</strong>。一个跨域请求到底是简单的的还是预检的，取决于一些 request header。</p>
<p>当请求是 <code>GET</code> 或 <code>POST</code> 方法并且没有任何自定义 Header 字段时，一般来说就是个简单请求。除此之外的任何请求，诸如 <code>PUT</code>，<code>PATCH</code> 或 <code>DELETE</code> 方法，将会产生预检。</p>
<blockquote>
<p>如果你想知道一个请求必须满足哪些要求才能成为简单请求，可以查看 MDN <strong>简单请求</strong>相关的<a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS#Simple_requests" target="_blank" rel="nofollow noopener noreferrer">文档</a>。</p>
</blockquote>
<p>说了这么多，「<strong>预检请求</strong>」到底是什么意思？下面我们就来探讨一下。</p>
<hr>
<p>1️⃣ 在发送实际请求之前，客户端会先使用 <a href="https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Methods/OPTIONS" target="_blank" rel="nofollow noopener noreferrer"><code>OPTIONS</code></a> 方法发起一个预检请求，预检请求的 <code>Access-Control-Request-* </code> 中包含有关我们将要处理的实际请求的信息：</p>
<ul>
<li>首部字段 <a href="https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Access-Control-Request-Method" target="_blank" rel="nofollow noopener noreferrer"><code>Access-Control-Request-Method</code></a> 告知服务器，实际请求要用到的<strong>方法</strong>是什么</li>
<li>首部字段 <a href="https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Access-Control-Request-Headers" target="_blank" rel="nofollow noopener noreferrer"><code>Access-Control-Request-Headers</code></a> 告知服务器，实际请求将附带的<strong>自定义请求首部字段</strong>是什么</li>
</ul>

```http
OPTIONS https://api.mywebsite.com/user/1 HTTP/1.1
Origin: https://www.mywebsite.com
Access-Control-Request-Method: PUT
Access-Control-Request-Headers: Content-Type
```

<img src="https://cdn.chenyingshuang.cn/blog/other/CORS/12.gif" />

<p>2️⃣ 服务器接收到预检请求后，会返回一个没有 body 的 HTTP 响应，这个响应标记了服务器允许的 HTTP 方法和 HTTP Header 字段：</p>

```http
HTTP/1.1 204 No Content
Access-Control-Allow-Origin: https://www.mywebsite.com
Access-Control-Request-Method: GET POST PUT
Access-Control-Request-Headers: Content-Type
```

<p>3️⃣ 浏览器收到预检响应，并检查是否应允许发送实际请求。</p>

<img src="https://cdn.chenyingshuang.cn/blog/other/CORS/13.gif" />

<blockquote>
<p>⚠️：上图预检响应漏了 <code>Access-Control-Allow-Headers: Content-Type </code></p>
</blockquote>

<p>4️⃣ 如果预检响应检测通过，浏览器会将实际请求发送到服务器，然后服务器返回我们需要的资源。</p>

<img src="https://cdn.chenyingshuang.cn/blog/other/CORS/14.gif" />

<p>如果预检响应没有检验通过，CORS 会阻止跨域访问，实际的请求永远不会被发送。预检请求是一种很好的方式，可以防止我们访问或修改那些没有启用 CORS 策略的服务器上的资源。</p>

<blockquote>
<p>💡 为了减少网络往返次数，我们可以通过在 CORS 请求中添加  <code>Access-Control-Max-Age</code> 头字段来缓存预检响应。浏览器可以使用缓存来代替发送新的预检请求。</p>
</blockquote>

### 5.认证
<p>XHR 或 Fetch 与 CORS 的一个有趣的特性是，我们可以基于 <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies" target="_blank" rel="nofollow noopener noreferrer">Cookies</a> 和 HTTP 认证信息发送身份凭证。一般而言，对于跨域 XHR 或 Fetch 请求，浏览器<strong>不会</strong>发送身份凭证信息。</p>
<p>尽管 CORS 默认情况下不发送身份凭证，但我们可以通过添加 <code>Access-Control-Allow-Credentials</code> CORS 响应头来更改它。</p>
<p>如果要在跨域请求中包含 cookie 和其他授权信息，我们需要做以下操作：</p>

<ul>
<li>XHR 请求中将 <code>withCredentials</code> 字段设置为 <code>true</code></li>
<li>Fetch 请求中将 <code>credentials</code> 设为 <code>include</code></li>
<li>服务器把 <code>Access-Control-Allow-Credentials: true</code> 添加到响应头中</li>
</ul>

```js
// 浏览器 fetch 请求
fetch('https://api.mywebsite,com.users', {
  credentials: "include"
})

// 浏览器 XHR 请求
let xhr = new XMLHttpRequest();
xhr.withCredentials = true;

// 服务器添加认证字段
HTTP/1.1 200 OK
Access-Control-Allow-Credentials: true
```

<img src="https://cdn.chenyingshuang.cn/blog/other/CORS/15.gif" />

<p>把上面的工作做好后，我们就可以在跨域请求中包含身份凭证信息了。</p>

### 6.总结

<p>CORS Error 一定程度上会让前端开发很头疼，但是遵循它的相关规定后，它可以让我们在浏览器中进行安全的跨域请求。</p>

<p>同源策略和 CORS 的知识点有很多，本文只讲了一些关键知识点，如果你想全面学习 CORS 的相关知识，我推荐你查阅<a href="https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Access_control_CORS" target="_blank" rel="nofollow noopener noreferrer">MDN 文档</a>和 <a href="https://www.w3.org/wiki/CORS_Enabled" target="_blank" rel="nofollow noopener noreferrer">W3C 规范</a>，这些一手知识是最准确的。</p>


<base-valine />
<el-backtop :visibility-height="0"></el-backtop>
