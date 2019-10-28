## Title 动态title
### 安装
```
cnpm i vue-wechat-title --save
```
``` js
import VueWechatTitle from 'vue-wechat-title'//动态修改title
Vue.use(VueWechatTitle)
```
###### 在你需要改变的页面 第一个div 上加上v-wechat-title="this.title",  title  是下面再 data 里面定义的数据
``` html
<div v-wechat-title="name" >
```