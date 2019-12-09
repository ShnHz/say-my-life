<template>
  <div class="filter-col color-ball-group">
    <button
      :class="{'active':active == 'success'}"
      @click="active == 'success' ? active = '' : active = 'success'"
      class="button success-ball"
    ></button>
    <button
      :class="{'active':active == 'warning'}"
      @click="active == 'warning' ? active = '' : active = 'warning'"
      class="button warning-ball"
    ></button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      active: ''
    }
  },
  methods: {}
}
</script>
<style lang="scss" scoped>
.color-ball-group {
  width: 20%;
  min-width: 200px;
  height: 100px;
  .button {
    cursor: pointer;
    width: 40px;
    height: 40px;
    line-height: 40px;
    display: flex;
    // align-items: center;
    justify-content: center;
    color: rgba(#000, 0.2);
    font-weight: 600;
    outline: none;
    border: none;
    border-radius: 50%;
    box-shadow: 0 2px 1px rgba(0, 0, 0, 0.2);
    border-bottom: 5px solid rgba(0, 0, 0, 0.1);
    margin: 0 10px;
    transition: all 0.2s linear;
    &.success-ball {
      background: #4cd964;
    }

    &.warning-ball {
      background: #e6a23c;
    }

    &.active {
      transform: scale(1.2) translateY(-10px) !important;
      box-shadow: 0 10px 10px rgba(0, 0, 0, 0.2);
    }

    &:hover {
      transform: scale(1.2);
      border-bottom: 10px solid rgba(0, 0, 0, 0.15);
      box-shadow: 0 10px 10px rgba(0, 0, 0, 0.2);
    }
  }
}
</style>