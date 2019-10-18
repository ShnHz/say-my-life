## Vue 全局组件
### 新建components.js文件
```js
import componentsA from './components/componentsA.vue'
import componentsB from './components/componentsB.vue'

const components = {
  install: function (Vue) {
    Vue.component('componentsA', componentsA)
    Vue.component('componentsB', componentsB)
  }
}

export default components
```

###### mian.js 文件内印日
``` js
import components from './components'
Vue.use(components);
```