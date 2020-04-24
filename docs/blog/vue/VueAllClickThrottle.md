---
pageClass: blog
---

## Vue@click全部增加节流策略！
<p class="date">2020-04-20 11:40 
  <span id="/blog/vue/VueAllClickThrottle.html" class="leancloud_visitors">
      <i class="shni shn-eye-fill" />
      <i class="leancloud-visitors-count"></i>
  </span>
</p>


<el-backtop :visibility-height="0"></el-backtop>

用户反馈BUG时，肯定会遇到这种情况，提交表单的时候多点很多下导致表单重复提交。

这时候就得用上节流/防抖策略了。

那如果每个按钮的单击事件都要加，一个个加是不是很麻烦。这时候我们可以在全局给vue的clike事件添加节流/防抖事件。

##### 节流

``` js
const on = Vue.prototype.$on
Vue.prototype.$on = function(event, func) {
  let previous = -1
  let newFunc = func
  if (event === 'click') {
    newFunc = function() {
      const now = new Date().getTime()
      if (previous + 500 <= now) {
        func.apply(this, arguments)
        previous = now
      }
    }
  }
  on.call(this, event, newFunc)
}
```

##### 防抖

``` js
const on = Vue.prototype.$on
Vue.prototype.$on = function (event, func) {
  let timer
  let newFunc = func
  if (event === 'click') {
    newFunc = function () {
      clearTimeout(timer)
      timer = setTimeout(function () {
        func.apply(this, arguments)
      }, 500)
    }
  }
  on.call(this, event, newFunc)
}
```

<base-valine />