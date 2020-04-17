<template>
  <div :class="{'hide':!$store.state.lock}" class="lock-box flex">
    <div @click="showPwbox">
      <i class="shni shn-lock"></i>
      <p>该内容已被锁定，输入密码后解锁</p>
      <p class="annotation">Ctrl + Enter 快捷键唤起输入面板</p>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    showPwbox() {
      this.$store.commit('setPwboxVisible', !this.$store.state.pwboxVisible)
    }
  }
}
</script>
<style lang="scss" scoped>
.lock-box {
  z-index: 9;
  width: 100%;
  height: calc(100% - 58px);
  position: absolute;
  top: 58px;
  left: 0;
  opacity: 1;
  transition: all 0.4s linear;
  &.hide {
    opacity: 0;
  }
  div {
    position: absolute;
    top: 300px;
    cursor: pointer;
    z-index: 0;
    text-align: center;
    line-height: 2;
    i {
      font-size: 40px;
    }
    .annotation {
      color: #909399;
    }
  }
  &::after {
    z-index: -1;
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background: #fff;
    opacity: 0.97;
    filter: blur(10px);
  }
}
</style>