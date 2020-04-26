<template>
  <div class="blog-create-wrap">
    <div class="form-wrap">
      <el-input clearable placeholder="请输入标题" v-model="form.title"></el-input>
      <el-date-picker
        format="yyyy 年 MM 月 dd 日"
        placeholder="选择日期"
        style="width:100%;margin-top:10px"
        type="date"
        v-model="form.date"
        value-format="yyyy-MM-dd"
      ></el-date-picker>
      <el-input clearable placeholder="请输入id" style="margin-top:10px" v-model="form.id"></el-input>
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

      <div v-html="mdContent"></div>

      <base-valine />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        id: '/blog/applets/AACalculator.html',
        title: '安利一个我自己写的小程序：AA计算器',
        date: this.mixin_getToday('yyyy-MM-dd hh:mm:ss'),
        content: ''
      }
    }
  },
  computed: {
    mdContent: function() {
      return this.formatMarkdown(this.form.content)
    }
  },
  mounted(){
    
  }
}
</script>

<style lang="scss" scoped>
.blog-create-wrap {
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
</style>