---
pageClass: blog-catalog
---

## Vuex模块化
<p class="date">2020/06/11 15:36:16 
<span id="/blog/vue/VuexModules.html" class="leancloud_visitors">
    <i class="shni shn-eye-fill" />
    <i class="leancloud-visitors-count"></i>
</span>
</p>

###### 原文 [掘金](https://juejin.im/post/5d688800f265da03a0498d75)


### 1.为什么使用模块

由于使用单一状态树，应用的所有状态会集中到一个比较大的对象。当应用变得非常复杂时，store 对象就有可能变得相当臃肿。

为了解决以上问题，Vuex 允许我们将 store 分割成模块（module）。每个模块拥有自己的 state、mutation、action、getter。

::: tip 命名空间
默认情况下，模块内部的 action、mutation 和 getter 是注册在全局命名空间的——这样使得多个模块能够对同一 mutation 或 action 作出响应
:::

如果希望你的模块具有更高的封装度和复用性，你可以通过添加 namespaced: true 的方式使其成为带命名空间的模块。当模块被注册后，它的所有 getter、action 及 mutation 都会自动根据模块注册的路径调整命名。

### 2.下载vuex

```bash
npm i vuex 
yarn add vuex // yarn 
```

### 3.修改store.js

<ul>
    <li>在src文件夹中添加store文件夹</li>
    <li>store.js放入store文件夹中，重命名store.js为index.js</li>
    <li>在store文件夹中添加modules文件夹，来存储我们的模块js</li>
</ul>

### 4.使用vuex-persistedstate状态持久化

我们可以使用状态持久化来实现缓存状态，方便我们进行存储我们的数据。使用方法如下：

#### 下载 vuex-persistedstate

```bash
npm i vuex-persistedstate
yarn add vuex-persistedstate // yarn 
```

#### 使用 vuex-persistedstate

```js
// store/index.js
import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
Vue.use(Vuex)

import common from './modules/common'

export default new Vuex.Store({
  modules: {
    common, // 公用
  },
  plugins: [
    createPersistedState({
      storage: window.sessionStorage // 修改存储的状态
    })
  ] // 状态持久化
})
```
### 5.创建模块

<ul>
    <li>在module文件夹下创建 comomon.js</li>
    <li>在store/index.js中引入common.js,并在modules注册</li>
    <li>这里做了一个简单的实例，其他的都是一样的实现方式</li>
</ul>

```js
// state
const state = {}
// mutations
const mutations = {}
// getters
const getters = {}
// actions
const actions = {}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
```

### 6.取值

#### state

```js
export default {
 computed: {
   // 方式1
   ...mapState('common', ['token']),//  映射为 `this.$store.state.common.token`
   // 方式2
    token () {
       return this.$store.state.common.token
    }
 }
}
```

#### getter

```js
export default {
 computed: {
   // 方式1
   ...mapGetters('common', ['getToken']), //  映射为 `this.$store.getters.common.getToken`
   // 方式2
    getToken () {
       return this.$store.getters.common.getToken
    }
 }
}
```

#### mutation

```js
export default {
 methods:{
     // 方式1
     ...mapMutations('common',[
        'setTokenData'  // 将 `this.setTokenData()` 映射为 `this.$store.commit('common/setTokenData')`
     ]),
     // 方式2 可以用设置别名的方式
      ...mapMutations({
        setToken: 'common/setTokenData' 
        // 将 `this.setToken('123')` 映射为`this.$store.commit('common/setTokenData','123')`
     }),
     // 方式3 直接调用  this.$store.commit('common/setTokenData','123')
 }
}
```
#### action

```js
export default {
 methods:{
     // 方式1
     ...mapActions('common',[
        'getTokenData'  // 将 `this.getTokenData()` 映射为 `this.$store.dispatch('common/getTokenData')`
     ]),
     // 方式2 可以用设置别名的方式
      ...mapActions({
       getData:'common/getTokenData'
        // 将 `this.getData('123')` 映射为`this.$store.dispatch('common/getTokenData','123')`
     }),
     // 方式3 直接调用 this.$store.dispatch('common/getTokenData','123')
 }
}
```

<base-valine />
<el-backtop :visibility-height="0"></el-backtop>
