<template>
  <div class="anime">
    <el-image :src="'http://cdn.chenyingshuang.cn/' + src" fit="cover" lazy>
      <div class="image-slot" slot="error">
        <i class="el-icon-picture-outline"></i>
      </div>
      <div class="loading-image-slot" slot="placeholder">
        <i class="el-icon-loading"></i>
      </div>
    </el-image>
    <p>{{name}}</p>
  </div>
</template>
<script>
export default {
  props: {
    name: {
      type: String,
      default: ''
    },
    src: {
      type: String,
      default: ''
    }
  }
}
</script>
<style lang="scss">
.anime {
  display: inline-block;
  margin: 0 30px 50px 0;
  .el-image {
    height: 300px;
    width: 220px;
    border-radius: 10px;
    border: 1px solid #eee;
  }
  .loading-image-slot,
  .image-slot {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  img {
    width: 100%;
    height: 320px;
  }
  p {
    font-size: 16px;
  }
}
@media screen and (max-width: 900px) {
  .anime {
    margin: 0 0 50px 0;
    width: 100%;
    .el-image {
      height: 500px;
      width: 100%;
    }
    img {
      width: 100%;
      height: auto;
    }
  }
}
</style>