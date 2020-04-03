<template>
  <div class="archives-wrap">
    <div class="img-wrap">
      <img src="/img/undraw_social_user.svg" />
    </div>
    <div class="list-wrap">
      <el-timeline :reverse="false">
        <el-timeline-item>共计{{blogList.length}}篇文章</el-timeline-item>
        <el-timeline-item :key="index" :timestamp="item.date" v-for="(item, index) in showList">
          <a :href="item.url">{{item.title}}</a>
          <el-tag
            :key="'archives-tag-' + item.title + _index + _item.name"
            :type="_item.type ? _item.type : ''"
            disable-transitions
            effect="dark"
            size="mini"
            v-for="(_item,_index) in item.tag"
          >{{_item.name}}</el-tag>
        </el-timeline-item>
      </el-timeline>
      <el-pagination
        :page-size="pageSize"
        :total="blogList.length"
        @current-change="pageChange"
        hide-on-single-page
        layout="prev, pager, next"
      ></el-pagination>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      reverse: true,
      blogList: [],
      showList: [],
      pageSize: 8
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
          _this.pageChange(1)
        })
        .catch(err => {
          console.log(err)
        })
    },
    pageChange(currentPage) {
      let list = JSON.parse(JSON.stringify(this.blogList))

      this.showList = list.slice(
        (currentPage - 1) * this.pageSize,
        currentPage * this.pageSize
      )
    }
  }
}
</script>
<style lang="scss" scoped>
.archives-wrap {
  margin: 0 auto;
  padding-top: 50px;
  width: 850px;
  display: flex;
  ::v-deep {
    .el-tag--mini {
      margin-right: 5px;
      line-height: 16px;
    }
  }
  .list-wrap {
    width: 530px;
  }
  .img-wrap {
    position: relative;
    width: 220px;
    height: 600px;
    overflow: hidden;
    margin-right: 100px;
    img {
      position: absolute;
      left: -500px;
      height: 600px;
      max-width: 1000px;
    }
  }
}
@media (max-width: 419px) {
  .archives-wrap {
    width: auto;
  }
  .img-wrap {
    display: none;
  }
  .list-wrap {
    width: 100%;
  }
}
</style>