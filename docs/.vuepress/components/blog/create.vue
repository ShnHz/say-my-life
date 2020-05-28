<template>
  <div class="blog-create-wrap">
    <div class="blog-create-content">
      <div class="form-wrap">
        <el-input clearable placeholder="请输入标题" v-model="form.title"></el-input>
        <el-input clearable placeholder="请输入id" style="margin-top:10px" v-model="form.id"></el-input>
        <el-select
          allow-create
          default-first-option
          filterable
          multiple
          placeholder="请选择文章标签"
          style="margin-top:10px;width:100%"
          v-model="form.tag"
        >
          <el-option
            :key="item.value"
            :label="item.name"
            :value="item.type"
            v-for="item in tagList"
          ></el-option>
        </el-select>
        <el-select placeholder="是否启用目录" style="margin-top:10px;width:100%" v-model="form.dir">
          <el-option :value="false" label="不启用目录"></el-option>
          <el-option :value="true" label="启用目录"></el-option>
        </el-select>
        <el-select placeholder="是否置顶" style="margin-top:10px;width:100%" v-model="form.top">
          <el-option :value="false" label="不置顶"></el-option>
          <el-option :value="true" label="置顶"></el-option>
        </el-select>
        <el-input
          :autosize="{minRows: 50}"
          :rows="2"
          placeholder="请输入内容"
          style="margin-top:10px"
          type="textarea"
          v-model="form.content"
        ></el-input>
      </div>
      <div class="view-wrap">
        <h2>{{form.title}}</h2>
        <p class="date">
          {{form.date}}
          <span :id="form.id" class="leancloud_visitors">
            <i class="shni shn-eye-fill"></i>
            <i class="leancloud-visitors-count"></i>
          </span>
        </p>

        <!-- <markdown-it-vue :content="form.content" class="md-it-vue-wrap" /> -->

        <base-valine />
      </div>
    </div>

    <el-button @click="confirm" class="confirm-btn" size="mini" type="primary">
      <i class="el-icon-check"></i>
    </el-button>
  </div>
</template>

<script>
// import MarkdownItVue from 'markdown-it-vue'
// import 'markdown-it-vue/dist/markdown-it-vue.css'

export default {
  // components: {
  //   MarkdownItVue
  // },
  data() {
    return {
      form: {
        id: '/blog/applets/AACalculator.html',
        title: '安利一个我自己写的小程序：AA计算器',
        tag: ['vue'],
        date: this.mixin_getToday('yyyy/MM/dd hh:mm:ss'),
        content: '',
        dir: false,
        top:false
      },

      blogInfo: {},
      tagList: []
    }
  },
  computed: {
    mdContent: function() {
      // return this.formatMarkdown(this.form.content)
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
      }).then(res => {
        _this.blogInfo = res.data
        _this.tagList = res.data.tag
      })
    },
    confirm() {
      let tag = this.tagList.filter(item => {
        for (let i = 0; i < this.form.tag.length; i++) {
          if (this.form.tag[i] == item.type) {
            return true
          }
        }

        return false
      })
      let blog = {
        title: this.form.title,
        tag: tag,
        url: this.form.id,
        date: this.form.date,
        dir: this.form.dir,
        top:this.form.top
      }

      this.$confirm(`打开console，确认blog对象是否正确`, '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.blogInfo.blog.unshift(blog)

        let _this = this
        this.$http({
          method: 'POST',
          url: `http://localhost:3000/addblog`,
          data: {
            json: this.blogInfo,
            addblog: blog
          }
        }).then(res => {})
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.blog-create-wrap {
  .blog-create-content {
    display: flex;
    justify-content: space-between;
    > div {
      width: 49.6%;
    }
    .view-wrap {
      padding: 2rem 2.5rem;
      background: #fff;
    }
  }
  .confirm-btn {
    position: fixed;
    right: 10px;
    bottom: 100px;
  }
}
</style>