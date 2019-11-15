<template>
  <div class="filter-col circle-size">
    <a class="button">
      <span>Dribbble</span>
    </a>
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
$height: 30px;
$width: 100px;
$button-color: #48ad98;
@mixin center {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
}
.circle-size {
  width: 20%;
  min-width: 200px;
  height: 100px;
  .button {
    position: relative;
    text-decoration: none;
    cursor: pointer;
    border: 1px solid $button-color;
    border-radius: 24px;
    height: $height;
    width: $width;
    padding: 0;
    outline: none;
    overflow: hidden;
    color: $button-color;
    transition: color 0.3s 0.1s ease-out;
    text-align: center;
    line-height: $height - 3;
    font-size: 14px;
    box-shadow: 0 2px 8px -1px #{rgba($button-color, 0.32)};
    transition: all 0.5s ease-out;
    span {
      position: relative;
      z-index: 1;
    }
    &::before {
      @include center;
      content: '';
      border-radius: 50%;
      display: block;
      width: $width * 0;
      height: $width * 0;
      line-height: $width * 2;
      left: 0;
      text-align: center;
      transition: all 0.5s ease-out;
      z-index: 0;
      background: $button-color;
    }

    &:hover {
      color: #fff;
      text-decoration: none;
      box-shadow: 0 4px 20px -2px #{rgba($button-color, 0.5)};
      &::before {
        width: $width * 2;
        height: $width * 2;
      }
    }
  }
}

@media screen and (max-width: 900px) {
  .circle-size {
    width: 100%;
    height: 100px;
  }
}
</style>