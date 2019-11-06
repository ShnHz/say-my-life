<template>
  <div :style="{'height':height}" class="particles">
    <vue-particles
      :clickEffect="true"
      :hoverEffect="true"
      :lineLinked="true"
      :lineOpacity="0.4"
      :linesDistance="150"
      :linesWidth="1"
      :moveSpeed="1"
      :particleOpacity="0.7"
      :particleSize="4"
      :particlesNumber="80"
      clickMode="push"
      color="#ccc"
      hoverMode="grab"
      linesColor="#aaa"
      shapeType="circle"
      style="height:100%"
    ></vue-particles>
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
<style lang="scss" scoped>
.particles {
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