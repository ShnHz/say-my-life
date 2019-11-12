<template>
  <div class="photo-wall">
    <div class="header">
      <div class="button" style="background:#FE7A79"></div>
      <div class="button" style="background:#F7CD8E"></div>
      <div class="button" style="background:#A8D898"></div>
    </div>
    <div class="content">
      <client-only>
        <vue-waterfall-easy
          :gap="10"
          :imgsArr="imgsArr"
          :maxCols="3"
          :mobileGap="0"
          @scrollReachBottom="getData"
          ref="waterfall"
        >
          <div slot="waterfall-over">
            <p class="over-p">没有啦~</p>
          </div>
        </vue-waterfall-easy>
      </client-only>
    </div>
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
    },
    imgType: {
      type: String,
      default: 'jpg'
    }
  },
  mounted() {
    if (this.value && this.number > 10) {
      for (let i = 1; i < 10; i++) {
        this.imgsArr.push({
          src: `http://cdn.chenyingshuang.cn/${this.value}${i}.${this.imgType}?imageMogr2/auto-orient`,
          href: `http://cdn.chenyingshuang.cn/${this.value}${i}.${this.imgType}?imageMogr2/auto-orient`
        })
      }
    } else {
      for (let i = 1; i < this.number; i++) {
        this.imgsArr.push({
          src: `http://cdn.chenyingshuang.cn/${this.value}${i}.${this.imgType}?imageMogr2/auto-orient`,
          href: `http://cdn.chenyingshuang.cn/${this.value}${i}.${this.imgType}?imageMogr2/auto-orient`
        })
      }
    }
  },
  data() {
    return {
      imgsArr: [],
      index: 10
    }
  },
  methods: {
    getData() {
      if (this.number > this.index) {
        for (let i = this.index; i < this.index + 10; i++) {
          if (i > this.number) {
            break
          } else {
            this.imgsArr.push({
              src: `http://cdn.chenyingshuang.cn/${this.value}${i}.${this.imgType}?imageMogr2/auto-orient`,
              href: `http://cdn.chenyingshuang.cn/${this.value}${i}.${this.imgType}?imageMogr2/auto-orient`
            })
          }
        }
        this.index = this.index + 10
      } else {
        this.$refs.waterfall.waterfallOver()
      }
    }
  }
}
</script>
<style lang="scss" scoped>
@media screen and (max-width: 900px) {
  .photo-wall {
    width: 100% !important;
  }
}

.photo-wall {
  position: relative;
  width: 840px;
  height: 300px;
  margin: 20px 0;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.5);
  border-radius: 10px;
  overflow: hidden;

  .header {
    height: 50px;
    display: flex;
    align-items: center;
    padding-left: 20px;

    .button {
      width: 20px;
      height: 20px;
      border-radius: 50%;
      margin: 0 5px;
    }
  }

  .content {
    background: #000;
    height: calc(100% - 50px);
    width: 100%;
  }
}
.over-p {
  font-size: 14px;
  padding: 20px;
}
</style>