<template>
  <div class="train-ticket">
    <p>
      <span class="id">Z95Q021361</span>
      <span class="check-in">检票：4A</span>
    </p>
    <div class="station flex">
      <div class="train-id">
        G
        <span style="font-size:18px">1560</span>
      </div>
      <div class="start-station">
        <p>
          <span class="station-cn">郑州东</span>
          <span class="zhan">站</span>
        </p>
        <p>
          <span class="station-pinyin">ShangHaiHongQiao</span>
        </p>
      </div>
      <div class="end-station">
        <p>
          <span class="station-cn">安阳东</span>
          <span class="zhan">站</span>
        </p>
        <p>
          <span class="station-pinyin">ChuZhou</span>
        </p>
      </div>
    </div>
  </div>
</template>
<script>
export default {}
</script>
<style lang="scss" scoped>
.train-ticket {
  width: 350px;
  height: 220px;
  position: relative;
  margin: 20px 0;
  padding: 5px 20px;

  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  background: #CAE8ED;
  .id {
    color: #f56c6c;
    font-weight: 600;
  }
  .check-in {
    position: relative;
    top: 3px;
    float: right;
    font-size: 13px;
    font-weight: 600;
  }
  .station {
    .train-id {
        position: absolute;
    }
    > div {
      flex: 1;
      p {
        line-height: 1;
      }
    }
    .station-cn {
      font-size: 18px;
      letter-spacing: 3px;
    }
    .station-pinyin {
      font-size: 12px;
    }
    .zhan {
      font-size: 14px;
      font-weight: 600;
    }
    .start-station {
      margin-right: 40px;
      text-align: right;
    }
    .end-station {
      margin-left: 40px;
      text-align: left;
    }
  }
}
</style>