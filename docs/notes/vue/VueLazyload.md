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
``` css
img[lazy="loading"],img[lazy="error"] {
  width: 30px !important;
  height: 30px !important;
  position: absolute;
  left: 50%;
  top: 50%;
  margin-left: -15px;
  margin-top: -15px;
}
```