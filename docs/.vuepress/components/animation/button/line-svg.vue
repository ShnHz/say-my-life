<template>
  <div class="filter-col line-svg">
    <div class="button">
      <a class="btn btn-1">
        <svg>
          <rect fill="none" height="100%" width="100%" x="0" y="0" />
        </svg>
        边线动画
      </a>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {}
  }
}
</script>
<style lang="scss" scoped>
.line-svg {
  position: relative;
  top:-1px;
  width: 20%;
  min-width: 200px;
  height: 100px;
  .button {
    width: 100px;
    height: 30px;
    display: flex;
    justify-content: center;
    text-align: center;
    margin: 0 auto;
    .btn {
      color: #000;
      cursor: pointer;
      // display: block;
      font-size: 14px;
      font-weight: 500;
      max-width: 160px;
      position: relative;
      text-decoration: none;
      text-transform: uppercase;
      width: 100%;
      line-height: 30px;
      &:hover {
        text-decoration: none;
      }
    }
    .btn-1 {
      // background: darken(#fff, 1.5%);
      font-weight: 100;

      svg {
        height: 30px;
        left: 0;
        position: absolute;
        // top: -6px;
        width: 100px;
        overflow: visible;
      }

      rect {
        fill: none;
        stroke: #E1332D;
        stroke-width: 2;
        stroke-dasharray: 422, 0;
        rx: 20;
        transition: all .5s linear;
      }
    }
    .btn-1:hover {
      background: rgba(#E1332D, 0);

      rect {
        stroke-width: 2;
        stroke-dasharray: 15, 170;
        stroke-dashoffset: 48;
        transition: all 1.35s cubic-bezier(0.19, 1, 0.22, 1);
      }
    }
  }
}

@media screen and (max-width: 900px) {
  .line-svg {
    width: 100%;
    height: 100px;
  }
}
</style>