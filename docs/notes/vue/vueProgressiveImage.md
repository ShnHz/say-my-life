## vueProgressiveImage 使用方法
### 安装
```
cnpm i vue-progressive-image --save
```
###### main.js 文件内输入
``` js
import VueProgressiveImage from 'vue-progressive-image'
Vue.use(VueProgressiveImage)

```
###### 使用
``` html
<progressive-img src="https://unsplash.it/1920/1080?image=10" />

<progressive-background src="https://unsplash.it/1920/1080?image=10" />

<progressive-img
  src="https://unsplash.it/1920/1080?image=10"
  placeholder="https://unsplash.it/1920/1080?image=10"
/>

<progressive-background src="https://unsplash.it/1920/1080?image=10">
  <div slot="content" slot-scope="{ visible }">
    <p>I am some content to display over the image</p>
    <div v-show="visible">I am the preloader</div>
  </div>
</progressive-background>
```