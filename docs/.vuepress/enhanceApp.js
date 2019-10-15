/**
 * 扩展 VuePress 应用
 */
import VueHighlightJS from 'vue-highlightjs'
import 'highlight.js/styles/atom-one-dark.css'
import '../.vuepress/public/iconfont/iconfont.css'
import vueWaterfallEasy from 'vue-waterfall-easy'

export default ({
    Vue, // VuePress 正在使用的 Vue 构造函数
}) => {
    // ...做一些其他的应用级别的优化
    Vue.use(VueHighlightJS)
    Vue.component('vue-waterfall-easy', vueWaterfallEasy)

}