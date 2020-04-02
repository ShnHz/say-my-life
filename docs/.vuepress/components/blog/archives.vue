<template>
  <div class="archives-wrap">
    <div class="list-wrap">
      <el-timeline :reverse="true">
        <el-timeline-item :key="index" :timestamp="item.date" v-for="(item, index) in blogList">
          <a :href="item.url">{{item.title}}</a>
        </el-timeline-item>
      </el-timeline>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      reverse: true,
      blogList: []
    }
  },
  mounted() {
    this.getInfo()
  },
  methods: {
    getInfo() {
      let _this = this
      this.$http({
        method: 'GET',
        url: `/json/blog.json`
      })
        .then(res => {
          _this.blogList = res.data
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
}
</script>
<style lang="scss" scoped>
.archives-wrap {
  display: flex;
  justify-content: center;
}
</style>