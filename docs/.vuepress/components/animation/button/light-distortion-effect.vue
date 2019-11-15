<template>
  <div class="filter-col light-distortion-effect">
    <div class="button">
      <a class="btn effect04" target="_blank">
        <span>失真效果</span>
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
.light-distortion-effect {
  position: relative;
  width: 20%;
  min-width: 200px;
  height: 100px;
  top: -1px;
  .button {
    width: 100px;
    height: 30px;
    display: flex;
    justify-content: center;
    text-align: center;
    margin: 0 auto;
    .btn {
      letter-spacing: 0.1em;
      cursor: pointer;
      font-size: 14px;
      font-weight: 400;
      line-height: 30px;
      max-width: 160px;
      position: relative;
      text-decoration: none;
      text-transform: uppercase;
      width: 100%;
      border-radius: 24px;
      box-shadow: 0 2px 8px 2px #{rgba(#275efe, 0.32)}
    }
    .btn:hover {
      text-decoration: none;
    }

    /*btn_background*/
    /*btn_background*/
    .effect04 {
      position: relative;
      display: inline-flex;
      color: #000;
      // border: solid 1px #000;
      transition-duration: 0.4s;
      overflow: hidden;
    }

    .effect04::before,
    .effect04 span {
      margin: 0 auto;
      transition-timing-function: cubic-bezier(0.86, 0, 0.07, 1);
      transition-duration: 0.4s;
    }

    /* 文字1を上に */
    .effect04:hover {
      background-color: #275efe;
    }

    /* HOVERしたら文字1を上に */
    .effect04:hover span {
      -webkit-transform: translateY(-600%) scale(-0.1, 20);
      transform: translateY(-600%) scale(-0.1, 20);
    }

    /*文字2*/
    .effect04::before {
      content: 'click';
      color: #fff;
      position: absolute;
      left: 0;
      right: 0;
      height: 30px;
      margin: auto;
      font-weight: 500;
      -webkit-transform: translateY(600%) scale(-0.1, 20);
      transform: translateY(600%) scale(-0.1, 20);
    }

    /* HOVERしたら文字2を上に */
    .effect04:hover::before {
      letter-spacing: 0.05em;
      -webkit-transform: translateY(0) scale(1, 1);
      transform: translateY(0) scale(1, 1);
    }
  }
}

@media screen and (max-width: 900px) {
  .light-distortion-effect {
    width: 100%;
    height: 100px;
  }
}
</style>