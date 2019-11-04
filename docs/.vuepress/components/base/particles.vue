<template>
  <div :style="{'height':height}" class="particles" id="particles"></div>
</template>
<script>
import particles from 'particles.js'

export default {
  data() {
    return {
      height: 0
    }
  },
  mounted() {
    particlesJS.load('particles', ' /json/particles.json')
    this.height = window.innerHeight - 58 + 'px'
    this.width = window.innerWidth - 58 + 'px'
  }
}
</script>
<style lang="scss" scoped>
#particles {
  z-index: 0;
  width: 100%;
  position: absolute;
  top: 0;
  background-color: rgba(255, 255, 255, 0.8);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50% 50%;
}
</style>