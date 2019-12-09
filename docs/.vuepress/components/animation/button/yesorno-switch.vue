<template>
  <div class="filter-col yesorno-switch">
    <button :class="{'error-yesorno':!status}" class="button">
      <span :class="{'active':status}" @click="handelChange(true)">Yes</span>
      <div class="icon-box">
        <div :class class="left"></div>
        <div class="bottom"></div>
      </div>
      <span :class="{'active':!status}" @click="handelChange(false)">No</span>
    </button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      status: true
    }
  },
  methods: {
    handelChange(value) {
      this.status = value
    }
  }
}
</script>
<style lang="scss" scoped>
.yesorno-switch {
  width: 20%;
  min-width: 200px;
  height: 100px;
  .button {
    width: 100px;
    height: 30px;
    line-height: 30px;
    display: flex;
    // align-items: center;
    justify-content: center;
    color: rgba(#000, 0.2);
    font-weight: 600;
    background: #4cd964;
    outline: none;
    border: none;
    border-radius: 24px;
    box-shadow: 0 2px 8px 2px #{rgba(#4cd964, 0.32)};
    transition: all 0.2s linear;
    &.error-yesorno {
      background: #f56c6c;
      box-shadow: 0 2px 8px 2px #{rgba(#f56c6c, 0.32)};
      &:hover {
        box-shadow: 0 2px 8px 2px #{rgba(#f56c6c, 0.5)};
      }
      .icon-box {
        .left {
          width: 3px;
          height: 13px;
          top: 8px;
          left: 12px;
        }
        .bottom {
          width: 13px;
          height: 3px;
          top: 13px;
          left: 7px;
        }
      }
    }

    span {
      cursor: pointer;
      transition: all 0.2s linear;
      &.active {
        color: #fff;
      }
    }

    .icon-box {
      position: relative;
      width: 30px;
      .left {
        width: 3px;
        height: 8px;
        position: absolute;
        top: 12px;
        left: 8px;
        background: #fff;
        border-radius: 2px;
        transform: rotate(-45deg);
        transition: all 0.2s linear;
      }
      .bottom {
        width: 16px;
        height: 3px;
        position: absolute;
        top: 12px;
        left: 9px;
        background: #fff;
        border-radius: 2px;
        transform: rotate(-45deg);
        transition: all 0.2s linear;
      }
    }

    &:hover {
      box-shadow: 0 2px 8px 2px #{rgba(#4cd964, 0.5)};
    }
  }
}
</style>