<template>
  <div :style="{'height':height}" class="life flex">
    <img height="300" src="../../public/img/life-index_white.gif" />
  </div>
</template>
<script>
export default {
  data() {
    return {
      height: 0
    }
  },
  mounted() {
    this.height = window.innerHeight - 58 + 'px'
  }
}
</script>
<style lang="stylus" scoped>
.life {
  width: 100%;

  img {
    position: relative;
    top:-50px;
  }
}
</style>