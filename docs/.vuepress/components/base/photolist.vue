<template>
  <div class="photo-list">
    <el-image
      :key="item"
      :previewSrcList="getSrcList(index)"
      :src="item"
      :style="{'height':`${imgBoxHeight}px`}"
      fit="cover"
      lazy
      v-for="(item,index) in imgsArr"
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
    imgName: {
      type: String,
      default: ''
    },
    imgType: {
      type: String,
      default: 'jpg'
    },
    imgBoxHeight: {
      type: Number,
      default: 180
    },
    number: {
      type: Number,
      default: 0
    },
    list: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  data() {
    return {
      imgsArr: []
    }
  },
  mounted() {
    if (this.list.length > 0) {
      this.imgsArr = this.list
    } else {
      for (let i = 1; i <= this.number; i++) {
        this.imgsArr.push(
          `http://cdn.chenyingshuang.cn/${this.value}${this.imgName}${i}.${this.imgType}?imageMogr2/auto-orient`
        )
      }
    }
  },
  methods: {
    getSrcList(index) {
      return this.imgsArr.slice(index).concat(this.imgsArr.slice(0, index))
    }
  }
}
</script>
<style lang="scss" scoped>
.photo-list {
  > div {
    width: 20%;
    height: 150px;
    min-width: 255px;
    padding: 10px;
  }
  .loading-image-slot,
  .image-slot {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    border-radius: 3px;
    border: 1px #ebedf0 solid;
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