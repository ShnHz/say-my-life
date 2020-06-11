<template>
  <div class="index-wrap">
    <div
      :style="{'background-image':`url(https://cdn.chenyingshuang.cn/index/bg${bannerBg}.jpg)`}"
      class="banner-wrap"
    >
      <!-- :style="{'background-image':`url(https://cdn1.zzzmh.cn/img/3a1a0cde1d0a.jpg!fullwp)`}" -->
      <!-- :style="{'background-image':`url(https://cdn.chenyingshuang.cn/index/bg${bannerBg}.jpg)`}" -->
      <img alt src="../public/img/index-logo.gif" />

      <div>
        <h1>说说我的生活</h1>
        <p>Don't cry, do laugh</p>
      </div>
    </div>
    <main>
      <main v-loading="loading">
        <div>
          <div
            :key="item.title + item.date + index"
            class="card-wrap"
            v-for="(item,index) in showList"
          >
            <router-link :to="item.url" class="article-title">{{item.title}}</router-link>

            <p class="article-date">{{mixin_getDate(item.date,'MC dd,yyyy')}}</p>

            <p class="article-summary" v-if="item.summary">{{item.summary}}</p>

            <p>
              <base-tag
                :data="{name:'置顶',type: 'top',icon:'shni shn-pushpin-fill'}"
                style="margin-right:2px"
                v-if="item.top"
              />
              <base-tag
                :data="_item"
                :key="'archives-tag-' + item.title + _index + _item.name"
                v-for="(_item,_index) in item.tag"
              />
            </p>
          </div>
        </div>

        <p class="no-more" v-if="noMore">我也是有底线的~</p>
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
            <div @click="$router.push('/blog/Archives.html')" class="data-info-item">
              <p class="data-info-item-title">文章</p>
              <p class="data-info-item-data">{{blogInfo.blog.length}}</p>
            </div>
            <div class="data-info-item">
              <p class="data-info-item-title">标签</p>
              <p class="data-info-item-data">{{blogInfo.tag.length}}</p>
            </div>
          </div>
          <div @click="addBookMark" class="add-bookmark">
            <i class="el-icon-s-flag"></i>
            加入书签
          </div>
          <div class="social-info">
            <a href="https://github.com/ShnHz">
              <i class="shni shn-github-fill"></i>
            </a>
            <i @click="openAlipay" class="shni shn-alipay-circle-fill"></i>
            <i @click="openQQ" class="shni shn-QQ"></i>
            <i @click="openWechat" class="shni shn-wechat-fill"></i>
            <a href="mailto:664652740@qq.com">
              <i class="shni shn-mail-fill"></i>
            </a>
          </div>
        </div>

        <div class="card-wrap card-love">
          <div class="avatar-info">
            <img alt src="https://cdn.chenyingshuang.cn/life/diary/2020-05-20-1.jpg" />
            <i class="shni shn-heart-fill"></i>
            <img alt src="https://cdn.chenyingshuang.cn/life/diary/2020-05-20-2.jpg" />
          </div>
          <p>{{loveInfo.daysNum}} 天 {{loveInfo.hoursNum}} 时 {{loveInfo.minutesNum}} 分 {{loveInfo.secondsNum}} 秒</p>
        </div>

        <div class="card-wrap card-carousel">
          <el-carousel :interval="10000" arrow="always" direction="vertical" trigger="click">
            <el-carousel-item :key="item.title" v-for="item in carouselInfo">
              <div
                :style="{'background-image':`url(${item.bg})`,
              'background-position':'center center',
              'background-size':'cover'
              }"
                class="card-carousel-item"
              >
                <div>
                  <h2>{{item.title}}</h2>
                  <p>{{item.content}}</p>
                </div>
              </div>
            </el-carousel-item>
          </el-carousel>
        </div>

        <div class="card-wrap card-tag">
          <base-tag
            :data="item"
            :key="'tag-' + index + item.name"
            @click="tagClick(item.name)"
            style="margin-right:10px;margin-top:10px;cursor: pointer;"
            v-for="(item,index) in blogInfo.tag"
          />
        </div>
      </aside>
    </main>

    <footer>
      <div
        :style="{'background-image':`url(https://cdn.chenyingshuang.cn/index/bg${bannerBg}.jpg)`}"
        class="bg"
      ></div>
      <div class="footer-wrap">
        <div class="copyright">©2019 - 2020 By Shn</div>
        <div class="framework-info">
          <span>Power by</span>
          <a href="https://vuepress.vuejs.org/zh/" rel="noopener" target="_blank">
            <span>Vuepress</span>
          </a>
          &
          <a href="http://beian.miit.gov.cn/" style="font-size:14px">浙ICP备18029315号-2</a>
        </div>
      </div>
    </footer>
  </div>
</template>
<script>
export default {
  data() {
    return {
      loading: true,
      noMore: false,
      scrollTop: 0,

      blogInfo: {
        blog: [],
        tag: []
      },
      showList: [],
      pageSize: 10,
      currentPage: 1,
      bannerBg: 1,

      loveInfo: {
        deadline: '2019/06/29',
        daysNum: '∞',
        hoursNum: '∞',
        minutesNum: '∞',
        secondsNum: '∞'
      },
      carouselInfo: [
        {
          title: '日记',
          content: '做一个热爱生活的人，把生活记录下来。',
          bg: 'https://cdn.chenyingshuang.cn/index/carousel1.jpg'
        },
        {
          title: '旅行',
          content:
            '我认为旅行是从大自然学习的最佳方式。走遍世界，这是我最大的梦想。',
          bg: 'https://cdn.chenyingshuang.cn/index/carousel2.jpg'
        },
        {
          title: '好好打代码',
          content: '每天都要学习！',
          bg: 'https://cdn.chenyingshuang.cn/index/carousel3.jpg'
        }
      ]
    }
  },
  watch: {
    scrollTop: {
      handler(newVal, oldVal) {
        if (newVal < 200) {
          document
            .querySelectorAll('header.navbar')[0]
            .setAttribute('class', 'navbar index-header-transparent')
        } else {
          document
            .querySelectorAll('header.navbar')[0]
            .setAttribute('class', 'navbar index')
        }
      }
    }
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
    document
      .querySelectorAll('header.navbar')[0]
      .setAttribute('class', 'navbar index-header-transparent')

    this.bannerBg = Math.floor(Math.random() * 4 + 1)
    this.loveTime()
    this.getInfo()
  },
  destroyed() {
    document
      .querySelectorAll('header.navbar')[0]
      .setAttribute('class', 'navbar index')
  },
  methods: {
    getInfo() {
      this.loading = true
      let _this = this
      this.$http({
        method: 'GET',
        url: `/json/blog.json`
      })
        .then(res => {
          _this.blogInfo = res.data

          let topBlog = []

          topBlog = _this.$options.filters.mixin_filter(
            this.blogInfo.blog.map((item, index) => {
              if (item.top) {
                _this.blogInfo.blog.splice(index, 1)
                return item
              }
            })
          )

          _this.blogInfo.blog = [...topBlog, ..._this.blogInfo.blog]

          _this.pageChange()
          _this.loading = false
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

    /**
     * 跳转标签页
     */
    tagClick(name) {
      this.$router.push({
        path: 'blog/Tag.html',
        query: {
          tag: name
        }
      })
    },
    /**
     * 添加书签
     */
    addBookMark() {
      this.$notify({
        message: '按 CTRL + D 将本页加入书签',
        position: 'bottom-left',
        showClose: false,
        duration: 2000,
        customClass: 'main-them-notify'
      })
    },
    /**
     * 打开QQ
     */
    openQQ() {
      this.$notify({
        message: 'QQ号：664652740',
        position: 'bottom-left',
        showClose: true,
        duration: 0,
        customClass: 'main-them-notify'
      })
    },
    /**
     * 打开微信
     */
    openWechat() {
      this.$notify({
        message: '微信号：Shn664652740',
        position: 'bottom-left',
        showClose: true,
        duration: 0,
        customClass: 'main-them-notify'
      })
    },
    /**
     * 打开支付宝
     */
    openAlipay() {
      this.$notify({
        title: '打赏一下吧~',
        position: 'bottom-left',
        dangerouslyUseHTMLString: true,
        message:
          '<img src="https://cdn.chenyingshuang.cn/index/alipay_ercode.jpg" style="width:200px"/>',
        duration: 0,
        customClass: 'ercode-notify'
      })
    },
    /**
     * 计算恋爱时间
     */
    loveTime() {
      let _this = this
      let countDownDate = Date.parse(new Date(this.loveInfo.deadline))
      let x = setInterval(function() {
        let now = Date.parse(new Date())
        var diff = now - countDownDate
        _this.loveInfo.daysNum = Math.floor(diff / (1000 * 60 * 60 * 24))
        _this.loveInfo.hoursNum = Math.floor(
          (diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        )
        _this.loveInfo.minutesNum = Math.floor(
          (diff % (1000 * 60 * 60)) / (1000 * 60)
        )
        _this.loveInfo.secondsNum = Math.floor((diff % (1000 * 60)) / 1000)
      }, 1000)

      this.$once('hook:beforeDestroy', () => {
        clearInterval(x)
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
      ::v-deep {
        .el-tag--mini {
          margin-right: 5px;
          line-height: 16px;
        }
      }
      .card-wrap {
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
    aside {
      width: 25%;
      margin-left: 15px;
    }
    .card-wrap {
      padding: 1rem 1.2rem;
      border-radius: 8px;
      background: #fff;
      // box-shadow: 0 4px 8px 6px rgba(7, 17, 27, 0.04);
      transition: all 0.3s;
      &:not(:first-child) {
        margin-top: 20px;
      }
      &.card-info {
        color: #333;
        .avatar-info {
          text-align: center;
          font-weight: 600;
          img {
            transform: none;
            &:hover {
              transform: rotate(666turn);
              transition-delay: 1s;
              transition-property: all;
              transition-duration: 59s;
              transition-timing-function: cubic-bezier(0.34, 0, 0.84, 1);
            }
          }
        }
        .data-info {
          display: flex;
          padding: 0.7rem 0;
          text-align: center;
          .data-info-item {
            cursor: pointer;
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
          transition: all 0.3s ease;
          i {
            position: relative;
            top: 1px;
          }
          &:hover {
            background: #3eaf7c;
          }
        }
        .social-info {
          padding: 1rem 1.5rem;
          i {
            cursor: pointer;
            transition: all 0.3s ease;
            font-size: 26px;
            margin-right: 10px;
            color: #333;
            &:hover {
              color: #3eaf7c;
            }
          }
        }
      }
      &.card-love {
        text-align: center;
        .avatar-info {
          display: flex;
          justify-content: center;
          align-items: center;
          img {
            width: 50px;
            height: 50px;
            border-radius: 50%;
            border: #fff 2px solid;
            box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.1);
            margin: 0 20px;
          }
          i {
            color: #f56c6c;
            animation: xintiao 1.33s ease-in-out infinite;
          }
          @keyframes xintiao {
            0% {
              -webkit-transform: scale(1);
              transform: scale(1);
            }

            50% {
              -webkit-transform: scale(0.8);
              transform: scale(0.8);
            }

            to {
              -webkit-transform: scale(1);
              transform: scale(1);
            }
          }
        }
        p {
          margin-top: 10px;
        }
      }
      &.card-carousel {
        padding: 0 0;
        overflow: hidden;
        .card-carousel-item {
          position: relative;
          width: 100%;
          height: 100%;
          > div {
            position: absolute;
            bottom: 0;
            padding: 2rem 1.4rem;
            h2 {
              color: #fff;
              font-size: 26px;
              padding-bottom: 0.5rem;
            }
            p {
              color: #fff;
              font-size: 14px;
            }
          }
        }
      }
    }
  }

  footer {
    position: relative;
    margin-top: 1rem;
    background: rgb(0, 0, 0);
    .bg {
      display: block;
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      background-attachment: local;
      background-position: bottom;
      background-size: cover;
      opacity: 0.3;
    }
    .footer-wrap {
      position: relative;
      padding: 4rem 1rem;
      color: #eee;
      text-align: center;
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
    > main {
      display: inline-flex;
      flex-direction: column;
      width: 100%;
      padding-top: 0;
      > main {
        order: 1;
      }
      > aside {
        order: -1;
      }
      > main,
      > aside {
        display: block;
        width: 100%;
        margin-left: 0;
        margin-top: 20px;
      }
    }
  }
}
</style>