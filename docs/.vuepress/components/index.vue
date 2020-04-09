<template>
  <div class="index-wrap">
    <div
      :style="{'background-image':`url(https://cdn.chenyingshuang.cn/index/bg${Math.floor(Math.random()*1+1)}.jpg)`}"
      class="banner-wrap"
    >
      <img alt src="../public/img/index-logo.gif" />

      <div>
        <h1>说说我的生活</h1>
        <p>Don't cry, do laugh</p>
      </div>
    </div>
    <main>
      <main>
        <div class="card-wrap"></div>
      </main>
      <aside>
        <div class="card-wrap card-info">
          <div class="avatar-info">
            <el-avatar :size="80">
              <img src="https://cdn.chenyingshuang.cn/index/avatar.jpg" />
            </el-avatar>
            <p>野宁新之助</p>
          </div>
          <div class="data-info">
            <div class="data-info-item">
              <p class="data-info-item-title">文章</p>
              <p class="data-info-item-data">{{blogList.length}}</p>
            </div>
            <div class="data-info-item">
              <p class="data-info-item-title">标签</p>
              <p class="data-info-item-data">3</p>
            </div>
          </div>
          <div @click="addBookMark" class="add-bookmark">
            <i class="el-icon-s-flag"></i>
            加入书签
          </div>
          <div class="social-info">
            <i class="shni shn-github-fill"></i>
            <i class="shni shn-alipay-circle-fill"></i>
            <i class="shni shn-QQ"></i>
            <i class="shni shn-wechat-fill"></i>
          </div>
        </div>
      </aside>
      <!-- <div class="features-wrap"> -->
      <!-- <p class="text-item">我认为旅行是从大自然学习的最佳方式。走遍世界，这是我最大的梦想。</p> -->
      <!-- </div> -->
    </main>
  </div>
</template>
<script>
export default {
  data() {
    return {
      scrollTop: 0,

      blogList: [],
      showList: [],
      pageSize: 8
    }
  },
  watch: {
    scrollTop: {
      handler(newVal, oldVal) {
        if (newVal < 200) {
          document
            .querySelectorAll('div.theme-container')[0]
            .setAttribute(
              'class',
              'theme-container no-sidebar index-header-transparent'
            )
        } else {
          document
            .querySelectorAll('div.theme-container')[0]
            .setAttribute('class', 'theme-container no-sidebar index')
        }
      },
      immediate: true
    }
  },
  created() {
    window.addEventListener('scroll', this.handleScroll)
  },
  mounted() {
    this.getInfo()
  },
  destroyed() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll() {
      this.scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop
    },
    getInfo() {
      let _this = this
      this.$http({
        method: 'GET',
        url: `/say-my-life/json/blog.json`
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
    },
    addBookMark() {
      this.$notify({
        message: '按 CTRL + D 将本页加入书签',
        position: 'bottom-left',
        showClose: false,
        duration: 2000
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.index-wrap {
  .banner-wrap {
    width: 100%;
    height: 600px;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
    > div {
      color: #fff;
      text-align: center;
      letter-spacing: 5px;
      text-indent: 5px;
      h1 {
        font-size: 2rem;
      }
      p {
        margin-top: 30px;
        font-size: 1.2rem;
      }
    }

    img {
      width: 7rem;
      margin-right: 40px;
      border-radius: 50%;
    }
  }

  > main {
    width: 1200px;
    margin: 0 auto;
    padding: 30px 24px;
    display: flex;
    main {
      width: calc(75% - 15px);
    }
    aside {
      width: 25%;
      margin-left: 15px;
    }
    .card-wrap {
      padding: 1rem 1.2rem;
      border-radius: 8px;
      background: #fff;
      box-shadow: 0 4px 8px 6px rgba(7, 17, 27, 0.04);
      transition: all 0.3s;
      &.card-info {
        color: #333;
        .avatar-info {
          text-align: center;
          font-weight: 600;
        }
        .data-info {
          display: flex;
          padding: 0.7rem 0;
          text-align: center;
          .data-info-item {
            flex: 1;
            .data-info-item-data {
              font-size: 1rem;
              font-weight: 600;
            }
          }
        }
        .add-bookmark {
          cursor: pointer;
          background-color: #333;
          color: #fff;
          line-height: 2rem;
          text-align: center;
          font-size: 14px;
          i {
            position: relative;
            top: 1px;
          }
        }
        .social-info {
          padding: 1rem 2rem;
          i {
            font-size: 26px;
            margin-right: 10px;
          }
        }
      }
    }
  }
}

@media screen and (orientation: portrait) and (max-width: 720px) {
  .index-wrap {
    .banner-wrap {
      img {
        display: none;
      }
    }
  }
}
</style>