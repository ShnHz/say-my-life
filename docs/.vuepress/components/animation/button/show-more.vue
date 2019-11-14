<template>
  <div class="filter-col show-more">
    <div class="button">
      <div class="btn">
        <i class="shni shn-right"></i>
        <i class="shni shn-line"></i>
      </div>
      <div class="text">MORE</div>
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
.show-more {
  width: 20%;
  min-width: 200px;
  height: 100px;
  * {
    webkit-transform: translateZ(0);
    -moz-transform: translateZ(0);
    -ms-transform: translateZ(0);
    -o-transform: translateZ(0);
    transform: translateZ(0);
  }
  .button {
    position: relative;
    cursor: pointer;
    width: 100px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin: 0 auto;
    .btn {
      position: absolute;
      left: 0;
      width: 30px;
      height: 30px;
      background: #282936;
      border-radius: 24px;
      line-height: 30px;
      transition: all 0.3s ease-in-out;
      i {
        color: #fff;
      transition: all 0.3s ease-in-out;
        &.shn-right {
          position: absolute;
          left: 8px;
        }
        &.shn-line {
          position: absolute;
          left: 5px;
          opacity: 0;
        }
      }
    }
    .text {
      position: relative;
      left: 10px;
      width: 65px;
      font-weight: 600;
      font-size: 14px;
      transition: all 0.3s ease-in-out;
    }

    &:hover {
      .btn {
        width: 100px;
        i {
          &.shn-right {
            left: 18px;
          }
          &.shn-line {
            left: 15px;
            opacity: 1;
          }
        }
      }
      .text {
        color: #fff;
      }
    }
  }
}

@media screen and (max-width: 900px) {
  .show-more {
    width: 100%;
    height: 100px;
  }
}
</style>