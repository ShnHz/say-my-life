<template>
  <div :id="`valine-wrap-${uuid}`" class="valine-module"></div>
</template>

<script>
export default {
  name: 'Valine',
  data() {
    return {
      uuid: new Date().getTime() + Math.round(Math.random() * 10000)
    }
  },
  mounted: function() {
    // require window
    const Valine = require('valine')
    if (typeof window !== 'undefined') {
      this.window = window
      window.AV = require('leancloud-storage')
    }

    new Valine({
      el: `#valine-wrap-${this.uuid}`,
      appId: '2MgoJb7PsBdDJavPcPPU3oO2-gzGzoHsz', // your appId
      appKey: 'mF1z8VJ3jMiohj3Q2S4b7yB6', // your appKey
      notify: false,
      verify: false,
      avatar: 'robohash',
      placeholder: '',
      visitor: true,
      recordIP: true,
      meta: ['nick', 'mail'],
      path: window.location.pathname
    })
  }
}
</script>
<style lang="scss">
.valine-module {
  margin: 50px 0;
  .vcopy.txt-right {
    display: none;
  }
}
</style>