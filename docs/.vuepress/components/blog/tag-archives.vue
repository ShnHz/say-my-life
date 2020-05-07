<template>
  <div class="tag-archives-wrap">
    <el-backtop :visibility-height="0"></el-backtop>

    <main>
      <div class="card-wrap">
        <base-tag
          :data="{name:'全部'}"
          :effect="active == '全部' ? 'dark' : 'plain'"
          @click="active = '全部'"
          size="small"
          style="margin-right:7px;margin-top:10px;cursor: pointer;"
        />
        <base-tag
          :data="item"
          :effect="active == item.name ? 'dark' : 'plain'"
          :key="'tag-' + index + item.name"
          @click="active = item.name"
          size="small"
          style="margin-right:10px;margin-top:10px;cursor: pointer;"
          v-for="(item,index) in blogInfo.tag"
        />
      </div>
      <div :key="item.title + item.date + index" class="card-wrap" v-for="(item,index) in showList">
        <router-link :to="item.url" class="article-title">{{item.title}}</router-link>

        <p class="article-date">{{mixin_getDate(item.date,'MC dd,yyyy')}}</p>

        <p class="article-summary" v-if="item.summary">{{item.summary}}</p>

        <p>
          <base-tag
            :data="_item"
            :key="'archives-tag-' + item.title + _index + _item.name"
            style="margin-right:10px;margin-top:10px;"
            v-for="(_item,_index) in item.tag"
          />
        </p>
      </div>

      <p class="no-more" v-if="noMore">我也是有底线的~</p>
    </main>
    <!-- <div class="list-wrap">
      <el-pagination
        :page-size="pageSize"
        :total="blogInfo.length"
        @current-change="pageChange"
        hide-on-single-page
        layout="prev, pager, next"
      ></el-pagination>
    </div>-->
  </div>
</template>
<script>
export default {
  data() {
    return {
      active: '全部',
      loading: true,
      noMore: false,
      scrollTop: 0,

      blogAllList: [],
      blogInfo: {
        blog: [],
        tag: []
      },
      showList: [],
      pageSize: 10,
      currentPage: 1
    }
  },
  watch: {
    active: function(newVal) {
      this.currentPage = 1
      this.showList.length = 0
      this.noMore = false
      if (this.blogAllList.length != 0) this.tagChange()
    }
  },
  created() {
    if (this.$route.query.tag) this.active = this.$route.query.tag
  },
  mounted() {
    let _this = this
    window.addEventListener(
      'scroll',
      this.mixin_throttle(function() {
        var scrollTop =
          document.documentElement.scrollTop || document.body.scrollTop
        //变量windowHeight是可视区的高度
        var windowHeight =
          document.documentElement.clientHeight || document.body.clientHeight
        //变量scrollHeight是滚动条的总高度
        var scrollHeight =
          document.documentElement.scrollHeight || document.body.scrollHeight
        //滚动条到底部的条件
        var thresold = scrollHeight - scrollTop - windowHeight

        _this.scrollTop = scrollTop

        if (thresold > -50 && thresold <= 100) {
          if (_this.blogInfo.blog.length != 0) {
            _this.pageChange()
          }
        }
      })
    )

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
          _this.blogAllList = res.data.blog
          _this.blogInfo = res.data
          _this.tagChange()
        })
        .catch(err => {
          console.log(err)
        })
    },
    pageChange() {
      if (!this.noMore) {
        let list = JSON.parse(JSON.stringify(this.blogInfo.blog))

        this.showList = [
          ...this.showList,
          ...list.slice(
            (this.currentPage - 1) * this.pageSize,
            this.currentPage * this.pageSize
          )
        ]

        if (
          list.slice(
            (this.currentPage - 1) * this.pageSize,
            this.currentPage * this.pageSize
          ).length < this.pageSize
        ) {
          this.noMore = true
        }

        this.currentPage++
      }
    },
    tagChange() {
      if (this.active == '全部') {
        this.blogInfo.blog = this.blogAllList
      } else {
        this.blogInfo.blog = this.$options.filters.mixin_filter(
          this.blogAllList.map(item => {
            for (let i = 0; i < item.tag.length; i++) {
              if (item.tag[i].name == this.active) {
                return item
              }
            }
          })
        )
      }

      this.pageChange()
    }
  }
}
</script>
<style lang="scss" scoped>
.tag-archives-wrap {
  > main {
    width: 740px;
    min-height: 1000px;
    margin: 0 auto;
    padding: 20px;
    .card-wrap {
      padding: 1rem 1.2rem;
      border-radius: 8px;
      background: #fff;
      // box-shadow: 0 4px 8px 6px rgba(7, 17, 27, 0.04);
      transition: all 0.3s;
      &:not(:first-child) {
        margin-top: 20px;
      }
      .article-title {
        font-size: 18px;
        color: rgba(0, 0, 0, 0.87);
        line-height: 1.5;
      }
      .article-date {
        font-size: 14px;
        color: rgba(0, 0, 0, 0.6);
      }
      .article-summary {
        padding: 16px 0 10px;
        color: rgba(0, 0, 0, 0.87);
        font-size: 14px;
        line-height: 1.375rem;
        font-weight: 400;
      }
    }

    .no-more {
      text-align: center;
      font-size: 14px;
      color: #555;
      margin-top: 30px;
    }
  }
}
@media (max-width: 419px) {
  .tag-archives-wrap {
    width: auto;
    main{
      width: 100%;
    }
  }
  .img-wrap {
    display: none;
  }
  .list-wrap {
    width: 100%;
  }
}
</style>