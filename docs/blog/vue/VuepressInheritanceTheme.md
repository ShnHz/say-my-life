---
pageClass: blog
---

## VuePress主题继承
<p class="date">2020-04-15 16:00 
  <span id="/blog/vue/VuepressInheritanceTheme.html" class="leancloud_visitors">
      <i class="shni shn-eye-fill" />
      <i class="leancloud-visitors-count"></i>
  </span>
</p>


<el-backtop :visibility-height="0"></el-backtop>


<a href="https://vuepress.vuejs.org/zh/theme/inheritance.html" target="_blank">官方文档</a>

想要在VuePress的默认主题上动动土，却不想把默认主题都copy到自己的项目内，这就可以使用到主题继承了


### 1. 如何获得默认主题的源码？

命令行里输入

```bash
vuepress eject
```

执行成功后就会在项目目录生成一个 <code class="default">.vuepress/theme</code>目录，这就是默认主题的源码了

### 2. 如何继承主题

在自己的<code class="default">docs/.vuepress</code>目录下新建<code class="default">theme/index.js</code>文件，文件内配置

```js
module.exports = {
    extend: '@vuepress/theme-default'
}
```

### 3. 如何修改继承主题

当你在子主题中同样的位置创建一个相同的组件时

会自动地映射到子主题中的组件，当你移除这个组件时，
又会自动恢复为父主题中的组件。

所以想要实现修改继承主题，可以直接在相同位置创建一个相同的组件，基于父主题组件的代码来修改。

例如，我想在<code class="default">Layout.vue</code>内新增一个<code class="default">LodingPage</code>组件：

在<code class="default">docs/.vuepress/theme/layouts</code>目录下复制父组件的<code class="default">Layout.vue</code>文件，修改该文件。

```js
<template>
  <div
    :class="pageClasses"
    @touchend="onTouchEnd"
    @touchstart="onTouchStart"
    class="theme-container"
  >
    <LoadingPage :show="loading" />

    <Navbar @toggle-sidebar="toggleSidebar" v-if="shouldShowNavbar" />

    <div @click="toggleSidebar(false)" class="sidebar-mask"></div>

    <Sidebar :items="sidebarItems" @toggle-sidebar="toggleSidebar">
      <slot #top name="sidebar-top" />
      <slot #bottom name="sidebar-bottom" />
    </Sidebar>

    <Home v-if="$page.frontmatter.home" />

    <Page :sidebar-items="sidebarItems" v-else>
      <slot #top name="page-top" />
      <slot #bottom name="page-bottom" />
    </Page>
  </div>
</template>

<script>
import Home from '@theme/components/Home.vue'
import Navbar from '@theme/components/Navbar.vue'
import Page from '@theme/components/Page.vue'
import Sidebar from '@theme/components/Sidebar.vue'
import { resolveSidebarItems } from '../util'           //此处注意，非vue文件是不能用@theme来引用组件的，所以需要复制到自己的主题下
import LoadingPage from '../components/LoadingPage.vue' //LoadingPage组件

export default {
  components: { Home, Page, Sidebar, Navbar, LoadingPage },

  data() {
    return {
      isSidebarOpen: false,
      loading: true
    }
  },

  computed: {
    ...
  },

  mounted() {
    ...

    let _this = this

    setTimeout(() => {
      _this.loading = false
    }, 2000)
  },
  methods:{
    ...
  }
}
</script>

```

<base-valine />