<template>
  <div class="filter-col light-reflection">
    <div class="button">
      <a class="btn effect01" target="_blank">
        <span>光的折射</span>
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
.light-reflection {
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
      letter-spacing: 0.1em;
      cursor: pointer;
      font-size: 14px;
      font-weight: 400;
      line-height: 22px;
      max-width: 160px;
      position: relative;
      text-decoration: none;
      text-transform: uppercase;
      width: 100%;
      border-radius: 24px;
      box-shadow: 0 2px 8px -1px #{rgba(#151924, 0.32)}
    }
    .btn:hover {
      text-decoration: none;
    }

    /*btn_background*/
    .effect01 {
      color: #fff;
      border: 4px solid #2f3545;
      background-color: #2f3545;
      overflow: hidden;
      position: relative;
      transition: all 0.3s ease-in-out;
    }
    .effect01:hover {
      border: 4px solid #666;
      background-color: #fff;
      box-shadow: 0 4px 20px -2px #{rgba(#151924, 0.5)}
    }

    /*btn_text*/
    .effect01 span {
      transition: all 0.2s ease-out;
      z-index: 2;
      margin-left: 2px;
    }
    .effect01:hover span {
      letter-spacing: 0.13em;
      color: #333;
    }

    /*highlight*/
    .effect01:after {
      background: #fff;
      border: 0px solid #2f3545;
      content: '';
      height: 155px;
      left: -75px;
      opacity: 0.8;
      position: absolute;
      top: -50px;
      -webkit-transform: rotate(35deg);
      transform: rotate(35deg);
      width: 50px;
      transition: all 1s cubic-bezier(0.075, 0.82, 0.165, 1); /*easeOutCirc*/
      z-index: 1;
    }
    .effect01:hover:after {
      background: #fff;
      border: 20px solid #2f3545;
      opacity: 0;
      left: 120%;
      -webkit-transform: rotate(40deg);
      transform: rotate(40deg);
    }
  }
}

@media screen and (max-width: 900px) {
  .light-reflection {
    width: 100%;
    height: 100px;
  }
}
</style>