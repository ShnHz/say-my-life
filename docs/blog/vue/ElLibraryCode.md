---
pageClass: blog-catalog
---

## 组件库源码中这些写法你掌握了吗？
<p class="date">2020/07/14 10:02:59 
<span id="/blog/vue/ElLibraryCode.html" class="leancloud_visitors">
    <i class="shni shn-eye-fill" />
    <i class="leancloud-visitors-count"></i>
</span>
</p>

###### 原文 [掘金](https://juejin.im/post/5f05a7af5188252e6c60e563)

<img src="https://cdn.chenyingshuang.cn/blog/vue/ElLibraryCode/1.jpg" style="border-radius: 6px; display: block; object-fit: contain; box-shadow: 2px 4px 7px #ccc;"/>

::: tip 前沿：
这几年，前端的组件库的演变迅速，社区脱颖而出不少优秀的开源组件库，包括element-ui、Ant design、IView等等，这些开源组件库源码中其实有很多值得我们学习的地方，无论是设计思路，代码风格等等，可以通过参考源码中一些写法，引用到我们平时的项目中去。
:::

### 1.Directives指令

::: tip
在vue中我们可以通过自定义指令，来对DOM元素进行底层操作，我们顺便复习下如何自定义一个指令，主要包含5个钩子函数，这里只列出几个比较常用的钩子函数，最后再介绍组件库常见的一些自定义指令。
:::

```js
Vue.directive("directiveName", {
  bind: function(el, binding, vnode){
   # 当指令第一次绑定元素el时触发，常用来做初始化
  },
  update: function(el, binding, vnode) {
   # 绑定Vue编译生成的虚拟节点VNode 更新时调用
  },
  unbind: function(el, binding, vnode) {
   # 解绑操作，用来将指令和元素解绑时调用，类似vue生命周期中的beforeDestroy钩子函数
  }
})
```

#### 1.1 v-clickoutside

v-clickoutside是Element-ui实现的一个自定义指令，目的是用来处理点击元素外面才会触发的事件，常用来处理下拉菜单等展开内容的关闭，在Element-ui的Select选择器、Dropdown下拉菜单、Popover 弹出框等组件中都用到了该指令。

element的实现，element的 clickoutside 的具体实现，如下👇，更多源码详情看链接[element/src/utils/clickoutside.js](https://github.com/ElemeFE/element/blob/f6df39e8c1ff390da0f0df8ea30b07baf5d457f0/src/utils/clickoutside.js)

<img src="https://cdn.chenyingshuang.cn/blog/vue/ElLibraryCode/2.jpg" style="border-radius: 6px; display: block; object-fit: contain; box-shadow: 2px 4px 7px #ccc;"/>

下面我们大概解读下这段代码的三个钩子函数内的逻辑

<ul>
    <li><code class="default">bind</code>：将绑定clickoutside指令的dom的el通过push到nodeList存起来，目的在于管理每次有 clickoutside 指令绑定到页面上，都会将绑定元素存储到 nodeList 中去。通过自增的临时变量 id来标识该 clickoutside 指令。</li>
    <li><code class="default">update</code>：其实本质上就是用来更新初始化我们定义绑定在el的ctx中的值，方便组件更新时做变更。</li>
    <li><code class="default">unbind</code>：当需要将指令和元素el解绑时，通过遍历原先的“元素管理器“ - nodeList 的长度和结合上文提到的id找到 nodeList 中存储的当前解绑元素 el，将它从nodeList中删除。</li>
</ul>

下图是一个bind的结果

<img src="https://cdn.chenyingshuang.cn/blog/vue/ElLibraryCode/3.jpg" style="border-radius: 6px; display: block; object-fit: contain; box-shadow: 2px 4px 7px #ccc;"/>

::: details  👦那clickoutside是怎么判断是否为点击外部？
:::

答案：是bind中使用的createDocumentHandler()

<code class="default">createDocumentHandler()</code>就是用来区分当前点击的区域是否为指令绑定的dom，本质上是contains方法，好比某A元素包含B元素，则返回true，否则 false 。用来判断元素所处的位置，简单来说点击绑定v-clickoutside绑定的元素则不触发clickoutside 指令的逻辑，点击不包含区域则触发指令绑定的binding.value，我们看下源码。

<img src="https://cdn.chenyingshuang.cn/blog/vue/ElLibraryCode/4.jpg" style="border-radius: 6px; display: block; object-fit: contain; box-shadow: 2px 4px 7px #ccc;"/>

::: details  👦这个组件的指令，我想自己项目中使用咋搞哦？
:::

答案：跟平常引用的指令一样的方式，可以参考源码中引用[链接](https://github.com/ElemeFE/element/search?q=clickoutside&unscoped_q=clickoutside)

<img src="https://cdn.chenyingshuang.cn/blog/vue/ElLibraryCode/5.jpg" style="border-radius: 6px; display: block; object-fit: contain; box-shadow: 2px 4px 7px #ccc;"/>

#### 1.2 v-repeat-click

::: tip
v-repeat-clickr顾名思义就是"重复点击、用于函数防抖"，结合dom.js中的on和once方法。element将v-repeat-clickr应用于el-input-number组件，当你点击+或者-时，会用到。
:::

<img src="https://cdn.chenyingshuang.cn/blog/vue/ElLibraryCode/6.jpg" style="border-radius: 6px; display: block; object-fit: contain; box-shadow: 2px 4px 7px #ccc;"/>

<img src="https://cdn.chenyingshuang.cn/blog/vue/ElLibraryCode/7.jpg" style="border-radius: 6px; display: block; object-fit: contain; box-shadow: 2px 4px 7px #ccc;margin-top:20px"/>

当我们长按+或者-时，本质上只会触发一次触发mousedown的回调，但我们会发现输入框中的数字会不断递增？让我们先看看源码[链接](https://github.com/ElemeFE/element/blob/f6df39e8c1ff390da0f0df8ea30b07baf5d457f0/src/directives/repeat-click.js)

<img src="https://cdn.chenyingshuang.cn/blog/vue/ElLibraryCode/8.jpg" style="border-radius: 6px; display: block; object-fit: contain; box-shadow: 2px 4px 7px #ccc;"/>

::: details  👦那数字会变，那不是一直触发？
:::

答案：repeat-click在mousedown的回调函数中加入了定时器，当鼠标松开，触发一次mouseup回调方法，然后根据时间间隔来执行

<ul>
    <li>如果时间间隔大于100毫秒，mousedown的回调方法里的setInterval回调函数就会执行handler函数（本质上是数字的decrease或increase）</li>
    <li>如果时间间隔小于100毫秒，定时器就会取消，通过once方法注册并执行一次mouseup回调</li>
</ul>

拓展：我们看看domjs中on及once的定义

<ul>
    <li><code class="default">once</code>: 注册事件监听器并只允许执行一次，然后取消监听方法</li>
</ul>

<img src="https://cdn.chenyingshuang.cn/blog/vue/ElLibraryCode/9.jpg" style="border-radius: 6px; display: block; object-fit: contain; box-shadow: 2px 4px 7px #ccc;margin-top:20px"/>

### 2.Mixin混入

::: tip
Mixin相信大家不陌生，mixin提供了一种非常灵活的方式，可以用来分发Vue组件中的可复用功能，借助Mixin多个组件可以共享数据和方法。同时引入mixin的组件，mixin中的方法和属性也就并入到该组件中，可以直接使用。钩子函数也将会在两个都被调用（Mixin中的钩子会先执行）
:::

<img src="https://cdn.chenyingshuang.cn/blog/vue/ElLibraryCode/10.jpg" style="border-radius: 6px; display: block; object-fit: contain; box-shadow: 2px 4px 7px #ccc;"/>

<img src="https://cdn.chenyingshuang.cn/blog/vue/ElLibraryCode/11.jpg" style="border-radius: 6px; display: block; object-fit: contain; box-shadow: 2px 4px 7px #ccc;margin-top:20px"/>

#### 2.1 dispath 和 broadcast

Vue新版本中去掉了broadcast和dispatch的方法，分别是用来作：事件广播 和 事件派发的要。而后来 element ui 和 iview 中对 broadcast 和 dispatch 方法进行了重写，并通过 mixin 的方式植入到每个组件中。

<img src="https://cdn.chenyingshuang.cn/blog/vue/ElLibraryCode/12.jpg" style="border-radius: 6px; display: block; object-fit: contain; box-shadow: 2px 4px 7px #ccc;"/>

<code class="default">broadcast</code> 方法的作用是向后代子孙组件传值，它会遍历所有的后代组件，当遍历到后代组件中 componentName 与当前的组件名一样，则触发 $emit 事件，以此来传递数据

<code class="default">dispatch</code> 的作用是向祖先组件传值，它会一直寻找父组件，直到找到组件名和当前传入的组件名一致的祖先组件，就会触发其身上的 <code class="default">$emit</code> 事件，并传递数据


下面我们看一个例子element的Select组件

<img src="https://cdn.chenyingshuang.cn/blog/vue/ElLibraryCode/13.jpg" style="border-radius: 6px; display: block; object-fit: contain; box-shadow: 2px 4px 7px #ccc;"/>

el-select（ElSelect）其实包含了ElOption、ElOptionGroup等组件，那他们子父或者子祖之间是如何通信的呢，通过的就是dispath和broadcast，我们可以看看源码中的定义，下面是ElOption组件通知el-select的写法

<img src="https://cdn.chenyingshuang.cn/blog/vue/ElLibraryCode/14.jpg" style="border-radius: 6px; display: block; object-fit: contain; box-shadow: 2px 4px 7px #ccc;"/>

ElOption组件调用dispatch方法

```js
（this.dispatch('ElSelect', 'handleOptionClick', [this.value])）
```

通过while循环，找到上层名为ElSelect的组件，并在该组件中捕获该事件

#### 2.2 link

Link的方法主要是跳转链接的区分,组件中如面包屑(breadcrumb)、按钮（button）、单元格(Cell)等组件需要处理跳转链接to=""内部路由还是外部链接，还有就是点击事件的处理

```html
<Button to="//iviewui.com" target="_blank">New window</Button>
```

<img src="https://cdn.chenyingshuang.cn/blog/vue/ElLibraryCode/15.jpg" style="border-radius: 6px; display: block; object-fit: contain; box-shadow: 2px 4px 7px #ccc;"/>

::: details  👦他是怎么区分内部外部链接哦？
:::

答案是 ： 外部链接：检测是否包含'//'，内部路由：对相对路径则通过router.resolve处理

<ul>
    <li>Click - <code class="default">handleClick</code> (处理点击事件)</li>
</ul>

<img src="https://cdn.chenyingshuang.cn/blog/vue/ElLibraryCode/16.jpg" style="border-radius: 6px; display: block; object-fit: contain; box-shadow: 2px 4px 7px #ccc;"/>

我们可以看到button链接模式下的点击事件click的实现，就是借助混入mixinsLink中的 <code class="default">handleCheckClick</code>

<img src="https://cdn.chenyingshuang.cn/blog/vue/ElLibraryCode/17.jpg" style="border-radius: 6px; display: block; object-fit: contain; box-shadow: 2px 4px 7px #ccc;"/>

### 3.Validate表单校验

::: tip
表单校验是组件库表单组件离不开的工具，作为表单数据提交前的格式检验拦截，是个不可缺的角色，我们看到element 和 Iview组件库在表单校验都使用到一个依赖<code class="default">async-validator</code>
:::

<ul>
    <li>element</li>
</ul>

<img src="https://cdn.chenyingshuang.cn/blog/vue/ElLibraryCode/18.jpg" style="border-radius: 6px; display: block; object-fit: contain; box-shadow: 2px 4px 7px #ccc;"/>

<ul>
    <li>iview</li>
</ul>

<img src="https://cdn.chenyingshuang.cn/blog/vue/ElLibraryCode/19.jpg" style="border-radius: 6px; display: block; object-fit: contain; box-shadow: 2px 4px 7px #ccc;"/>

<base-valine />
<el-backtop :visibility-height="0"></el-backtop>
