<template>
  <div class="photo-list">
    <el-image
      :key="item"
      :previewSrcList="imgsArr"
      :src="item"
      fit="cover"
      lazy
      v-for="item in imgsArr"
    >
      <div class="image-slot" slot="error">
        <i class="el-icon-picture-outline"></i>
      </div>
      <div class="loading-image-slot" slot="placeholder">
        <i class="el-icon-loading"></i>
      </div>
    </el-image>
  </div>
</template>
<script>
export default {
  props: {
    value: {
      type: String
    },
    number: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      imgsArr: []
    }
  },
  mounted() {
    for (let i = 1; i < this.number; i++) {
      this.imgsArr.push(
        `https://cdn.chenyingshuang.cn/${this.value}${i}.jpg?imageMogr2/auto-orient`
      )
    }
  }
}
</script>
<style lang="scss" scoped>
.photo-list {
  > div {
    width: 340px;
    height: 200px;
    padding: 10px;
  }
  .loading-image-slot {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
@media screen and (max-width: 900px) {
  .photo-list {
    > div {
      width: 100%;
      height: auto;
    }
  }
}
</style>