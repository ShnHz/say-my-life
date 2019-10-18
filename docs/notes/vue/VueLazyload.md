## VueLazyload 使用方法
### 安装
```
cnpm i vue-lazyload --save
```
###### main.js 文件内输入
``` js
import VueLazyload from 'vue-lazyload'
Vue.use(VueLazyload, {
  preLoad: 1.3,
  attempt: 2,
  loading: require('../public/static/img/loading.png'),
  error: require('../public/static/img/error.png')
})
```