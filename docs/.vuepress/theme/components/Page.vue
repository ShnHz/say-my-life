<template>
  <main class="page">
    <slot name="top" />

    <Content class="theme-default-content" />

    <BlogDirectory v-if="blogDirectoryVisible" />

    <PageEdit />

    <PageNav v-bind="{ sidebarItems }" />

    <slot name="bottom" />
  </main>
</template>

<script>
import PageEdit from '@theme/components/PageEdit.vue'
import PageNav from '@theme/components/PageNav.vue'
import BlogDirectory from './BlogDirectory.vue'

export default {
  components: { PageEdit, PageNav, BlogDirectory },
  props: ['sidebarItems'],
  data() {
    return {
      blogDirectoryVisible: false
    }
  },
  mounted() {
    let pageClass = document.getElementsByClassName('theme-container')[0]
      .className
    if (pageClass.indexOf('blog-catalog') > -1) this.blogDirectoryVisible = true
  }
}
</script>

<style lang="stylus">
@require '../styles/wrapper.styl';

.page {
  padding-bottom: 2rem;
  display: block;
}
</style>
