<template>
  <div class="filter-col light-line">
    <div class="button">
      <a class="btn btn-5">发散边线</a>
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
.light-line {
  width: 20%;
  min-width: 200px;
  height: 100px;
  .button {
    width: 100px;
    height: 30px;
    line-height: 30px;
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
      border-radius: 24px;
      &:hover {
        text-decoration: none;
      }
    }
    .btn-5 {
      border: 1px solid #555;
      transition: all 1250ms cubic-bezier(0.19, 1, 0.22, 1);
      outline-color: rgba(85, 85, 85, 0.5);
      outline: 0.2px solid;
      outline-offset: -1px;
      &:hover {
        outline: 0.2px solid;
        outline-color: rgba(85, 85, 85, 0);
        outline-offset: 10px;
        box-shadow: inset 0 0 20px rgba(200, 200, 200, 0.5),
          0 0 20px rgba(200, 200, 200, 0.2);
      }
    }
    // .btn-5 {
    //   border: 0 solid;
    //   box-shadow: inset 0 0 20px rgba(0, 0, 0, 0);
    //   outline: 1px solid;
    //   outline-color: rgba(0, 0, 0, 0.5);
    //   outline-offset: 0px;
    //   text-shadow: none;
    //   transition: all 1250ms cubic-bezier(0.19, 1, 0.22, 1);
    // }

    // .btn-5:hover {
    //   border: 1px solid;
    //   box-shadow: inset 0 0 20px rgba(0, 0, 0, 0.5),
    //     0 0 20px rgba(0, 0, 0, 0.2);
    //   outline-color: rgba(0, 0, 0, 0);
    //   outline-offset: 10px;
    //   text-shadow: 1px 1px 2px #427388;
    // }
  }
}

@media screen and (max-width: 900px) {
  .light-line {
    width: 100%;
    height: 100px;
  }
}
</style>