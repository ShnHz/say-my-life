<template>
  <div class="css-color">
    <div :class="[`color-${value}`,!sub ? 'nosub' : ''] " class="demo-color-box">
      {{text}}
      <div class="value">#{{value}}</div>
      <div class="bg-color-sub" v-if="sub">
        <div
          :class="`color-${value}-light-${index}`"
          :key="index"
          class="bg-blue-sub-item"
          v-for="index in 9"
        ></div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    value: {
      type: String,
      default: '409EFF'
    },
    text: {
      type: String,
      default: 'BRAND COLOR'
    },
    sub: {
      type: Boolean,
      default: true
    }
  }
}
</script>
<style lang="scss" scoped>
@media screen and (max-width: 400px) {
  .css-color {
    width: 100% !important;
    .demo-color-box {
      width: 100% !important;
    }
  }
}
.css-color {
  display: inline-block;
  position: relative;
  margin: 0 10px 10px 2px;
  .demo-color-box {
    width: 350px;
    height: 114px;
    position: relative;
    border-radius: 4px;
    padding: 20px;
    margin: 5px 0;
    box-sizing: border-box;
    color: #fff;
    font-size: 14px;
    &.nosub {
      color: #222;
    }
    .value {
      opacity: 0.69;
    }
  }
  .bg-color-sub {
    width: 100%;
    height: 40px;
    left: 0;
    bottom: 0;
    position: absolute;
    border-radius: 0 0 4px 4px;
    display: flex;
    justify-content: center;
    align-items: center;
    .bg-blue-sub-item {
      flex: 1;
      height: 100%;
      &:first-child {
        border-radius: 0 0 0 4px;
      }
      &:last-child {
        border-radius: 0 0 4px 0;
      }
    }
  }
}

$--color-white: #fff;

.color-409EFF {
  background: #409eff;
}
@for $i from 1 through 9 {
  .color-409EFF-light-#{$i} {
    background: mix($--color-white, #409eff, $i * 10%);
  }
}

.color-030852 {
  background: #030852;
}
@for $i from 1 through 9 {
  .color-030852-light-#{$i} {
    background: mix($--color-white, #030852, $i * 10%);
  }
}

.color-2CBFBE {
  background: #2cbfbe;
}
@for $i from 1 through 9 {
  .color-2CBFBE-light-#{$i} {
    background: mix($--color-white, #2cbfbe, $i * 10%);
  }
}

.color-67C23A {
  background: #67c23a;
}
@for $i from 1 through 9 {
  .color-67C23A-light-#{$i} {
    background: mix($--color-white, #67c23a, $i * 10%);
  }
}

.color-E6A23C {
  background: #e6a23c;
}
@for $i from 1 through 9 {
  .color-E6A23C-light-#{$i} {
    background: mix($--color-white, #e6a23c, $i * 10%);
  }
}

.color-F39C12 {
  background: #f39c12;
}
@for $i from 1 through 9 {
  .color-F39C12-light-#{$i} {
    background: mix($--color-white, #f39c12, $i * 10%);
  }
}

.color-F56C6C {
  background: #f56c6c;
}
@for $i from 1 through 9 {
  .color-F56C6C-light-#{$i} {
    background: mix($--color-white, #f56c6c, $i * 10%);
  }
}

.color-909399 {
  background: #909399;
}
@for $i from 1 through 9 {
  .color-909399-light-#{$i} {
    background: mix($--color-white, #909399, $i * 10%);
  }
}

.color-34495E {
  background: #34495e;
}
@for $i from 1 through 9 {
  .color-34495E-light-#{$i} {
    background: mix($--color-white, #34495e, $i * 10%);
  }
}

.color-8E44AD {
  background: #8e44ad;
}
@for $i from 1 through 9 {
  .color-8E44AD-light-#{$i} {
    background: mix($--color-white, #8e44ad, $i * 10%);
  }
}

.color-BDC3C7 {
  background: #bdc3c7;
}
@for $i from 1 through 9 {
  .color-BDC3C7-light-#{$i} {
    background: mix($--color-white, #bdc3c7, $i * 10%);
  }
}

.color-D9D9D9 {
  background: #d9d9d9;
}

.color-F2F2F5 {
  background: #f2f2f5;
}

.color-DCDFE6 {
  border: 1px solid #dcdfe6;
}

.color-EBEDF0 {
  border: 1px solid #EBEDF0;
}
</style>