<template>
  <div class="index-wrap">
    <div
      :style="{'background-image':`url(https://cdn.chenyingshuang.cn/index/bg${bannerBg}.jpg)`}"
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
        <div :key="item.title + item.date" class="card-wrap" v-for="item in showList">
          <a :href="item.url" class="article-title">{{item.title}}</a>

          <p class="article-date">{{mixin_getDate(item.date,'MC dd,yyyy')}}</p>

          <p class="article-summary" v-if="item.summary">{{item.summary}}</p>

          <p>
            <el-tag
              :key="'archives-tag-' + item.title + _index + _item.name"
              :type="_item.type ? _item.type : ''"
              disable-transitions
              effect="dark"
              size="mini"
              v-for="(_item,_index) in item.tag"
            >{{_item.name}}</el-tag>
          </p>
        </div>
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
            <img alt src="https://cdn.chenyingshuang.cn/index/shn_avatar.jpg" />
            <i class="shni shn-heart-fill"></i>
            <img alt src="https://cdn.chenyingshuang.cn/index/cys_avatar.jpg" />
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
        </div>
      </div>
    </footer>
  </div>
</template>
<script>
export default {
  data() {
    return {
      scrollTop: 0,

      blogList: [],
      showList: [],
      pageSize: 8,
      bannerBg: 1,

      loveInfo: {
        deadline: '2019/06/21',
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
      }
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
    this.bannerBg = Math.floor(Math.random() * 3 + 1)
    this.loveTime()
    this.getInfo()
  },
  destroyed() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    /**
     * 监听滚动条
     */
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