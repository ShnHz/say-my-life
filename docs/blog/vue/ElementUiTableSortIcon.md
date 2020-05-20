---
pageClass: blog
---

## Element-ui-table组件如何动态修改sort-icon
<p class="date">2020-05-14 17:24:02 
<span id="/blog/vue/ElementUiTableSortIcon.html" class="leancloud_visitors">
    <i class="shni shn-eye-fill" />
    <i class="leancloud-visitors-count"></i>
</span>
</p>

### 1.设置ref

``` html {9}
<el-table
    :data="data.list"
    :default-sort="{
        prop:param.order,
        order:'descending'
    }"
    :row-class-name="tableRowClassName"
    @sort-change="tableSortChange"
    ref="table"
>
...
</el-table>
```

### 2.在你执行的事件里修改$refs对象

``` js
this.$refs.table.columns.forEach(item => {
    if(item.property == 'xxx'){
        item.order = 'descending' //descending/ascending
    }else{
        item.order = ''
    }
})
```

<code class="default">property</code>指的是列的<code class="default">prop</code><br/>
<code class="default">order</code>指的是列的排序方式，为空时icon则都变为灰色<br/>

现在就可以随意修改icon状态啦
<img src="https://cdn.chenyingshuang.cn/blog/ElementUiTableSortIcon/1.png" />

<base-valine />
<el-backtop :visibility-height="0"></el-backtop>
