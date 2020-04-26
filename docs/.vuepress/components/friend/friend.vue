<template>
  <div class="friend-wrap">
    <main>
      <div class="rule-card">
        <p style="font-size:20px;margin-bottom:30px">友链，申请规则</p>

        <p>
          如果要和本站交换友链，请按照以下格式发送到
          <a href="mailto:664652740@qq.com">664652740@qq.com</a>，或在下方留言区留言
        </p>

        <div class="format-wrap">
          <p>名字： 野宁新之助</p>
          <p>
            地址：
            <a href="https://www.sanghangning.cn">https://www.sanghangning.cn</a>
          </p>
          <p>描述： 说说我的生活</p>
          <p>头像： https://cdn.chenyingshuang.cn/index/avatar.jpg</p>
        </div>
      </div>
      <div class="friend-card-wrap-box" v-loading="loading">
        <div class="friend-card-wrap">
          <div
            :key="item.href + item.icon"
            @click="localhref(item.href)"
            class="friend-card"
            v-for="item in friendList"
          >
            <div>
              <img :src="item.icon" alt />
              <div>
                <a>{{item.name}}</a>
                <p>{{item.description}}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="valine-wrap">
        <base-valine />
      </div>
    </main>
  </div>
</template>
<script>
export default {
  data() {
    return {
      loading: true,
      friendList: []
    }
  },
  mounted() {
    this.getInfo()
  },
  methods: {
    getInfo() {
      this.loading = true
      let _this = this
      this.$http({
        method: 'GET',
        url: `/json/friend.json`
      })
        .then(res => {
          _this.friendList = res.data
          _this.loading = false
        })
        .catch(err => {
          console.log(err)
        })
    },
    localhref(url) {
      window.open(url)
    }
  }
}
</script>
<style lang="scss" scoped>
.friend-wrap {
  main {
    width: 740px;
    min-height: 1000px;
    margin: 0 auto;
    padding: 12px;
    .rule-card,
    .valine-wrap {
      position: relative;
      padding: 12px;

      border-radius: 8px;
      box-shadow: 0 20px 40px -15px rgba(0, 0, 0, 0.05);
      background-color: #fff;

      ::v-deep #valine-wrap {
        margin: 0;
      }
    }
    .rule-card {
      overflow: hidden;
      font-size: 0.875rem;
      color: rgba(0, 0, 0, 0.87);

      .format-wrap {
        margin-top: 20px;
        padding: 10px;
        line-height: 3;
        border-radius: 5px;
        border: 1px dashed #bbb;
      }
    }
    .friend-card-wrap-box {
      min-height: 100px;
      border-radius: 5px;
      overflow: hidden;
      margin: 12px 0;
    }
    .friend-card-wrap {
      display: flex;
      flex-wrap: wrap;
      flex: 1 1 auto;
      margin-right: -12px;
      margin-left: -12px;
      margin-top: -12px;
      .friend-card {
        cursor: pointer;
        flex: 0 0 50%;
        max-width: 50%;
        width: 100%;
        padding: 12px 12px 0;

        &:nth-child(2n) {
          padding-left: 6px;
        }
        &:nth-child(2n + 1) {
          padding-right: 6px;
        }
        &:hover {
          > div {
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
          }
        }
        > div {
          display: flex;
          border-radius: 8px;
          box-shadow: 0 20px 40px -15px rgba(0, 0, 0, 0.05);
          background-color: #fff;
          color: rgba(0, 0, 0, 0.87);
          padding: 12px;
          transition: 0.5s box-shadow ease;
          img {
            width: 60px;
            height: 60px;
            border-radius: 5px;
            margin-right: 20px;
          }
          div {
            line-height: 2;
            a {
              font-size: 15px;
            }
            p {
              font-size: 13px;
              color: rgba(0, 0, 0, 0.6);
            }
          }
        }
      }
    }
  }
}

@media screen and (orientation: portrait) and (max-width: 720px) {
  .friend-wrap {
    main {
      width: 100%;
      min-height: 800px;
      .friend-card {
        flex: 0 0 100% !important;
        max-width: 100% !important;
      }
    }
  }
}
</style>