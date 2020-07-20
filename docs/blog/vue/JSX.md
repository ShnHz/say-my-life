---
pageClass: blog-catalog
---

## 学会使用Vue JSX，一车老干妈都是你的
<p class="date">2020/07/20 10:10:11 
<span id="/blog/vue/JSX.html" class="leancloud_visitors">
    <i class="shni shn-eye-fill" />
    <i class="leancloud-visitors-count"></i>
</span>


###### 原文 [掘金](https://juejin.im/post/5f01e9fff265da22ab2d532e)

### 介绍一下JSX
#### JSX 简介
JSX是一种Javascript的语法扩展，<code class="default">JSX</code> = <code class="default">Javascript</code> + <code class="default">XML</code>，即在<code class="default">Javascript</code>里面写<code class="default">XML</code>，因为<code class="default">JSX</code>的这个特性，所以他即具备了<code class="default">Javascript</code>的灵活性，同时又兼具<code class="default">html</code>的语义化和直观性。

#### 应用场景
为了让大家更方便的去理解<code class="default">JSX</code>的作用及用法，小编先为大家罗列了几个可能会用到<code class="default">JSX</code>的应用场景。

#### 在消息框内添加html
在开发过程中，经常会用到消息框，使用消息框可能的一种写法是这样的

```js
Message.alert({
  messge: '确定要删除?',
  type: 'warning'
})
```

但是有时候产品或UI希望<code class="default">message</code>可以自定义一些样式，这时候你可能就需要让<code class="default">Message.alert</code>支持<code class="default">JSX</code>了（当然也可以使用插槽/<code class="default">html</code>等方式解决）

```js
Message.alert({
  // 此处使用了JSX
  messge: <div>确定要删除<span style="color:red">学习子君Vue系列文章</span>的笔记?</div>,
  type: 'warning'
})
```

#### 函数式组件
在小编前面的文章<a style="text-decoration: none; color: #1e6bb8; word-wrap: break-word; font-weight: bold; border-bottom: 1px solid #1e6bb8;" href="https://juejin.im/post/5eef7799f265da02cd3b82fe#heading-22" target="_blank" rel="">实战技巧，Vue原来还可以这样写</a>中介绍了为什么要使用函数式组件，及函数式组件与普通组件的区别。虽然在<code class="default">Vue.2.5</code>之后，函数式组件也可以使用模板语法,但使用<code class="default">JSX</code>可能会更方便一些（个人理解）

```js
export default {
  // 通过配置functional属性指定组件为函数式组件
  functional: true,
  /**
   * 渲染函数
   * @param {*} h
   * @param {*} context 函数式组件没有this, props, slots等都在context上面挂着
   */
  render(h, context) {
    const { props } = context
    if (props.avatar) {
      return <img src={props.avatar}></img>
    }
    return <img src="default-avatar.png"></img>
  }
}
```
#### 一个表单的需求
为了方便快速开发管理系统，小编对所使用的UI库中的表单进行了二次封装，封装之后的效果如下（仅供参考）:

```vue
<template>
  <custom-form v-model="formData" :fields="fields" />
</template>
<script>
export default {
  data() {
    return {
      formData: {},
      fields: Object.freeze([
        {
          label: '字段1',
          props: 'field1',
          type: 'input'
        },
        {
          label: '字段2',
          props: 'field2',
          type: 'number'
        }
      ])
    }
  }
}
</script>
```

这样封装之后，定义表单时，只需要定义简单的JSON即可快速完成表单开发，但有时候会有一些特殊的需求，比如希望可以给输入框后面加一个按钮或者图标之类的，这时候就需要考虑使用JSX去处理了

```js
{
  label: '字段2',
  props: 'field2',
  type: 'number',
  // 会渲染到表单元素后面
  renderSuffix() {
    return <button onClick={this.$_handleSelect}>选择</button>
  }
}
```

#### 其他一些场景
比如我们一条数据需要根据状态不同，定义不同的展现方式，这时候你可能会想到用策略模式，这时候如果将每一个策略都写成一个<code class="default">JSX</code>,那么就不需要针对每一个策略定义一个单文件组件了。当然如果你说，我就喜欢用<code class="default">JSX</code>，那么所有的场景你都可以用。

### 学习JSX,先了解一下createElement
提到<code class="default">JSX</code>,不可避免的就要提到<code class="default">createElement</code>,当你看完本节，你会发现，奇怪的知识又增多了。

#### 从Vue编译后的代码看createElement
你是否看过写的<code class="default">Vue</code>代码经过编译之后的样子，比如下面这段代码

```vue
<template>
  <div>我是子君，我的公众号是<span class="emphasize">前端有的玩</span></div>
</template>
```

小编对这段代码进行编译之后，得到下面这段代码

```js
function () {
  var e = this,
  // e._self._c 对应源码里面的createElement
  t = e._self._c;
  // 返回了一个 createElement('div',[])
  return t("div", [
    // e._v 对应源码里面的createTextVNode
    e._v("我是子君，我的公众号是"),
    t("span", { staticClass: "emphasize" }, [e._v("前端有的玩")]),
  ]);
}
```

通过对上面的代码进行分析，不难发现，<code class="default">Vue</code>模板中的每一个元素编译之后都会对应一个<code class="default">createElement</code>,那么这个<code class="default">createElement</code>到底是什么，嗯，这个你面试的时候也许已经提到过了。

#### 那么什么是createElement
无论是<code class="default">Vue</code>还是<code class="default">React</code>，都存在<code class="default">createElement</code>,而且作用基本一致。可能你对<code class="default">createElement</code>不是很了解，函数名翻译过来就是增加一个元素，但他的返回值你一定知道。<code class="default">createElement</code>函数返回的值称之为虚拟节点，即<code class="default">VNode</code>，而由<code class="default">VNode</code>扎堆组成的树便是大名鼎鼎，面试必问的<code class="default">虚拟DOM</code>。

<code class="default">createElement</code>函数的参数，在这里小编偷个懒抄一下<code class="default">Vue</code>官方文档

```js
// @returns {VNode}
createElement(
  // {String | Object | Function}
  // 一个 HTML 标签名、组件选项对象，或者
  // resolve 了上述任何一种的一个 async 函数。必填项。
  'div',

  // {Object}
  // 一个与模板中 attribute 对应的数据对象。可选。
  {
    // (详情见下一节)
  },

  // {String | Array}
  // 子级虚拟节点 (VNodes)，由 `createElement()` 构建而成，
  // 也可以使用字符串来生成“文本虚拟节点”。可选。
  [
    '先写一些文字',
    createElement('h1', '一则头条'),
    createElement(MyComponent, {
      props: {
        someProp: 'foobar'
      }
    })
  ]
)
```

从上面可以看出<code class="default">createElement</code>一共有三个参数，三个参数分别是

<ul>
<li>第一个参数是需要渲染的组件，可以是组件的标签，比如<code class="default">div</code>；或者是一个组件对象，也就是你天天写的<code class="default">export default {}</code>；亦或者可以是一个异步函数。
</li><li>第二个参数是这个组件的属性，是一个对象，如果组件没有参数，可以传null（关于组件的属性，下文将依次介绍）
</li><li>第三个参数是这个组件的子组件，可以是一个字符串(textContent)或者一个由VNodes组成的数组
</li></ul>

#### 用createElement写一个组件吧
##### 表单示例
假设我们需要开发一个下面这样的表格（element-ui的）

<img src="https://cdn.chenyingshuang.cn/blog/vue/JSX/1.jpg">

##### 用模板代码去开发

如果我们用模板代码去开发这个表单，那么代码大概就长这样

``` vue
<el-form :inline="true" :model="formInline" class="demo-form-inline">
  <el-form-item label="审批人">
    <el-input v-model="formInline.user" placeholder="审批人"></el-input>
  </el-form-item>
  <el-form-item label="活动区域">
    <el-select v-model="formInline.region" placeholder="活动区域">
      <el-option label="区域一" value="shanghai"></el-option>
      <el-option label="区域二" value="beijing"></el-option>
    </el-select>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="onSubmit">查询</el-button>
  </el-form-item>
</el-form>
```

##### 用createElement去实现

如果我们直接将上面的代码转换为用<code class="default">createElement</code>去实现，那么代码将会是这样的

```js
export default {
 methods: {
    $_handleChangeUser(value) {
      this.formInline.user = value
    }
  },
  render(createElement) {
    return createElement(
      'ElForm',
      {
        props: {
          inline: true,
          model: this.formInline
        },
        staticClass: 'demo-form-inline'
      },
      [
        createElement(
          'ElFormItem',
          {
            props: {
              label: '审批人'
            }
          },
          [
            createElement('ElInput', {
              props: {
                value: this.formInline.user
              },
              attrs: {
                placeholder: '审批人'
              },
              on: {
                input: this.$_handleChangeUser
              }
            })
          ]
        ),
        createElement(
          'ElFormItem',
          {
            props: {
              label: '活动区域'
            }
          },
          [
            createElement(
              'ElSelect',
              {
                props: {
                  value: this.formInline.region,
                  placeholder: '活动区域'
                }
              },
              [
                createElement('ElOption', {
                  props: {
                    label: '区域一',
                    value: 'shanghai'
                  }
                }),
                createElement('ElOption', {
                  props: {
                    label: '区域二',
                    value: 'beijing'
                  }
                })
              ]
            )
          ]
        ),
        createElement('ElFormItem', null, [
          createElement(
            'ElButton',
            {
              props: {
                type: 'primary'
              },
              on: {
                click: this.$_handleSubmit
              }
            },
            '查询'
          )
        ])
      ]
    )
  }
}
```

看到上面的代码，你可能会惊呼，代码好多啊，好痛苦，想当年发明<code class="default">JSX</code>的人刚开始天天也是写<code class="default">createElement</code>，写的直掉头发，太痛苦了，然后就使劲挠头，当额头锃光发亮的时候，终于想到了一种新的语法，就是JSX。从此之后，头发呼呼的又长回来了（本段纯属虚构）。

看到上面代码，你会发现有一个<code class="default">render</code>函数，这个函数叫做渲染函数，相当于通过<code class="default">createElement</code>或<code class="default">JSX</code>去实现功能的主入口方法。而且你熟悉的<code class="default">v-model</code>也没见了，而是用<code class="default">value</code> + <code class="default">input</code>代替了。

### 是时候使用JSX代替createElement了

看到上面用<code class="default">createElement</code>去实现组件，太麻烦了，别说工作效率提高了，就是那些嵌套可以嵌套正确就很赞了，所以我们需要用<code class="default">JSX</code>去简化整个逻辑。

```js
methods: {
  $_handleInputUser(value) {
    this.formInline.user = value
  },
  $_handleChangeRegion(value) {
    this.formInline.region = value
  },
  $_handleSubmit() {}
},
  /**
  *将 h 作为 createElement 的别名是 Vue 生态系统中的一个通用惯例，实际上也是 JSX 所要求的。从 Vue 的 Babel 插件的 3.4.0   *版本开始，我们会在以 ES2015 语法声明的含有 JSX 的任何方法和 getter 中 (不是函数或箭头函数中) 自动注入 
  *const h = this.$createElement，这样你就可以去掉 (h) 参数了。对于更早版本的插件，如果 h 在当前作用域中不可用，应用会抛错。
 */
render(h) {
return (
    <ElForm inline model={this.formInline} class="demo-form-inline">
    <ElFormItem label="审批人">
        <ElInput
        value={this.formInline.user}
        onInput={this.$_handleInputUser}
        placeholder="审批人"
        ></ElInput>
    </ElFormItem>
    <ElFormItem label="活动区域">
        <ElSelect
        value={this.formInline.region}
        onChange={this.$_handleChangeRegion}
        placeholder="活动区域"
        >
        <ElOption label="区域一" value="shanghai"></ElOption>
        <ElOption label="区域二" value="beijing"></ElOption>
        </ElSelect>
    </ElFormItem>
    <ElFormItem>
        <ElButton type="primarty" onClick={this.$_handleSubmit}>
        查询
        </ElButton>
    </ElFormItem>
    </ElForm>
)
}
```

看了上面的代码，大家其实会发现用<code class="default">JSX</code>与<code class="default">template</code>的语法都属于<code class="default">xml</code>的写法，而且也比较像，但实质上还是有许多区别的，下面小编将为大家一一分析

#### 没有v-model怎么办，还有其他指令可以用吗？

当你选择使用<code class="default">JSX</code>的时候，你就要做好和指令说拜拜的时候了，在<code class="default">JSX</code>中， 你唯一可以使用的指令是<code class="default">v-show</code>,除此之外，其他指令都是不可以使用的，有没有感到很慌，这就对了。不过呢，换一个角度思考,指令只是<code class="default">Vue</code>在模板代码里面提供的语法糖，现在你已经可以写<code class="default">Js</code>了，那些语法糖用<code class="default">Js</code>都可以代替了。

##### v-model
<code class="default">v-model</code>是<code class="default">Vue</code>提供的一个语法糖，它本质上是由 <code class="default">value</code>属性（默认） + <code class="default">input</code>事件(默认)组成的，如果对自定义<code class="default">v-model</code>不了解的同学建议阅读小编的文章进行了解 <a style="text-decoration: none; color: #1e6bb8; word-wrap: break-word; font-weight: bold; border-bottom: 1px solid #1e6bb8;" href="https://juejin.im/post/5eddbaee5188254344768fdc#heading-7" target="_blank" rel="">绝对干货~！学会这些Vue小技巧，可以早点下班和女神约会了</a>。 所以，在<code class="default">JSX</code>中，我们便可以回归本质，通过传递<code class="default">value</code>属性并监听<code class="default">input</code>事件来实现数据的双向绑定

```js
export default {
  data() {
    return {
      name: ''
    }
  },
  methods: {
    // 监听 onInput 事件进行赋值操作
    $_handleInput(e) {
      this.name = e.target.value
    }
  },
  render() {
    // 传递 value 属性 并监听 onInput事件
    return <input value={this.name} onInput={this.$_handleInput}></input>
  }
}
```

::: tip
经小编测试,在新版脚手架<code class="default">vue-cli4</code>中，已经默认集成了对<code class="default">v-model</code>的支持，大家可以直接使用<code class="default">&lt;input v-model={this.value}&gt;</code>，如果你的项目比较老，也可以安装插件<code class="default">babel-plugin-jsx-v-model</code>来进行支持
:::

同样的，在<code class="default">JSX</code>中，对于<code class="default">.sync</code>也需要用属性+事件来实现，如下代码所示：

```js
export default {
  methods: {
    $_handleChangeVisible(value) {
      this.visible = value
    }
  },
  render() {
    return (
      <ElDialog
        title="测试.sync"
        visible={this.visible}
        on={{ 'update:visible': this.$_handleChangeVisible }}
      ></ElDialog>
    )
  }
}
```

##### v-if 与 v-for

在模板代码里面我们通过<code class="default">v-for</code>去遍历元素，通过<code class="default">v-if</code>去判断是否渲染元素，在<code class="default">jsx</code>中，对于<code class="default">v-for</code>，你可以使用<code class="default">for</code>循环,<code class="default">array.map</code>来代替，对于<code class="default">v-if</code>，可以使用<code class="default">if</code>语句，<code class="default">三元表达式</code>等来代替

循环遍历列表

```js
const list = ['java', 'c++', 'javascript', 'c#', 'php']
return (
  <ul>
  {list.map(item => {
   return <li>{item}</li>
  })}
  </ul>
)
```

使用条件判断


```js
const isGirl = false
return isGirl ? <span>小妹，哥哥教你写Vue</span> : <span>鸟你干啥</span>
```

##### v-bind
在模板代码中，我们一般通过 <code class="default">v-bind:prop="value"</code>或<code class="default">:prop="value"</code>来给组件绑定属性，在<code class="default">JSX</code>里面写法也类似

```js
render() {
  return <input value={this.name}></input>
}
```

##### v-html 与 v-text
在说<code class="default">v-html</code>与<code class="default">v-text</code>之前，我们需要先了解一下<code class="default">Vue</code>中的属性，<code class="default">Vue</code>中的属性一共分为三种，第一种是大家写bug时候最常用的<code class="default">props</code>，即组件自定义的属性；第二种是<code class="default">attrs</code>，是指在父作用域里面传入的，但并未在子组件内定义的属性。第三种比较特殊，是<code class="default">domProps</code>,经小编不完全测试，在<code class="default">Vue</code>中,<code class="default">domProps</code>主要包含三个，分别是<code class="default">innerHTML</code>,<code class="default">textContent/innerText</code>和<code class="default">value</code>。

<ul>
    <li>
        <code class="default">v-html</code>: 在模板代码中，我们用<code class="default">v-html</code>指令来更新元素的<code class="default">innerHTML</code>内容，而在<code class="default">JSX</code>里面，如果要操纵组件的<code class="default">innerHTML</code>,就需要用到<code class="default">domProps</code>
    </li>
</ul>

```js
export default {
    data() {
        return {
        content: '<div>这是子君写的一篇新的文章</div>'
        }
    },
    render() {
        // v-html 指令在JSX的写法是 domPropsInnerHTML
        return <div domPropsInnerHTML={this.content}></div>
    }
}
```

<ul>
    <li>
    <code class="default">v-text</code>: 看了上面的<code class="default">v-html</code>，你是不是立即就想到了<code class="default">v-text</code>在<code class="default">JSX</code>的写法<code class="default">domPropsInnerText</code>,是的，你没有想错
    </li>
</ul>

```js
export default {
  data() {
    return {
      content: '这是子君写的一篇新的文章的内容'
    }
  },
  render() {
    return <div domPropsInnerText={this.content}></div>
  }
}
```

但实际上我们不需要使用<code class="default">domPropsInnerText</code>,而是将文本作为元素的子节点去使用即可

```html
<div>{this.content}</div>
```

实际上，对于<code class="default">domProps</code>，只有<code class="default">innerHTML</code>才需要使用<code class="default">domPropsInnerHTML</code>的写法，其他使用正常写法即可

#### 我还要监听事件呢
##### 监听事件与原生事件
当我们开发一个组件之后，一般会通过<code code="default">this.$emit('change')</code>的方式对外暴露事件，然后通过<code code="default">v-on:change</code>的方式去监听事件，很遗憾，在<code code="default">JSX</code>中你无法使用<code code="default">v-on</code>指令，但你将解锁一个新的姿势

```js
render() {
    return <CustomSelect onChange={this.$_handleChange}></CustomSelect>
}
```

<code code="default">JSX</code>中，通过<code code="default">on</code> + 事件名称的大驼峰写法来监听，比如事件<code code="default">icon-click</code>,在<code code="default">JSX</code>中写为<code code="default">onIconClick</code>

有时候我们希望可以监听一个组件根元素上面的原生事件，这时候会用到<code code="default">.native</code>修饰符，有点绝望啊，修饰符也是不能用了，但好在也有替代方案，如下代码

```js
render() {
    // 监听下拉框根元素的click事件
    return <CustomSelect nativeOnClick={this.$_handleClick}></CustomSelect>
}
```

监听原生事件的规则与普通事件是一样的，只需要将前面的<code code="default">on</code>替换为<code code="default">nativeOn</code>

除了上面的监听事件的方式之外，我们还可以使用对象的方式去监听事件

```js
render() {
    return (
        <ElInput
        value={this.content}
        on={{
            focus: this.$_handleFocus,
            input: this.$_handleInput
        }}
        nativeOn={{
            click: this.$_handleClick
        }}
        ></ElInput>
    )
}
```

##### 事件修饰符

和指令一样，除了个别的之外，大部分的事件修饰符都无法在<code code="default">JSX</code>中使用，这时候你肯定已经习惯了，肯定有替代方案的。

<ul>
    <li>
<code code="default">.stop</code> ： 阻止事件冒泡，在<code code="default">JSX</code>中使用<code code="default">event.stopPropagation()</code>来代替
    </li>
    <li>
    <code code="default">.prevent</code>：阻止默认行为，在<code code="default">JSX</code>中使用<code code="default">event.preventDefault()</code> 来代替
    </li>
    <li>
    <code code="default">.self</code>：只当事件是从侦听器绑定的元素本身触发时才触发回调，使用下面的条件判断进行代替
    </li>
</ul>

```js
if (event.target !== event.currentTarget){
  return
}
```

<ul>
    <li>
    <code code="default">.enter</code>与<code code="default">keyCode</code>:  在特定键触发时才触发回调</li>
</ul>

```js
if(event.keyCode === 13) {
  // 执行逻辑
}
```

除了上面这些修饰符之外，尤大大为了照顾我们这群CV仔，还是做了一点优化的,对于<code code="default">.once</code>,<code code="default">.capture</code>,<code code="default">.passive</code>,<code code="default">.capture.once</code>，尤大大提供了前缀语法帮助我们简化代码

```js
render() {
    return (
        <div
        on={{
            // 相当于 :click.capture
            '!click': this.$_handleClick,
            // 相当于 :input.once
            '~input': this.$_handleInput,
            // 相当于 :mousedown.passive
            '&mousedown': this.$_handleMouseDown,
            // 相当于 :mouseup.capture.once
            '~!mouseup': this.$_handleMouseUp
        }}
        ></div>
    )
}
```

#### 对了，还有插槽

插槽就是子组件中提供给父组件使用的一个占位符，插槽分为默认插槽，具名插槽和作用域插槽，下面小编依次为你带来每种在<code code="default">JSX</code>中的用法与如何去定义插槽。

##### 默认插槽

<ul>
    <li>
        使用默认插槽
        使用<code code="default">element-ui</code>的<code code="default">Dialog</code>时，弹框内容就使用了默认插槽，在<code code="default">JSX</code>中使用默认插槽的用法与普通插槽的用法基本是一致的，如下代码所示:
    </li>
</ul>

```js
render() {
    return (
        <ElDialog title="弹框标题" visible={this.visible}>
        {/*这里就是默认插槽*/}
        <div>这里是弹框内容</div>
        </ElDialog>
    )
}
```

<ul>
    <li>
        自定义默认插槽
在<code code="default">Vue</code>的实例<code code="default">this</code>上面有一个属性<code code="default">$slots</code>,这个上面就挂载了一个这个组件内部的所有插槽，使用<code code="default">this.$slots.default</code>就可以将默认插槽加入到组件内部
    </li>
</ul>

```js
export default {
  props: {
    visible: {
      type: Boolean,
      default: false
    }
  },
  render() {
    return (
      <div class="custom-dialog" vShow={this.visible}>
        {/**通过this.$slots.default定义默认插槽*/}
        {this.$slots.default}
      </div>
    )
  }
}
```

##### 具名插槽

<ul>
    <li>
        使用具名插槽
     有时候我们一个组件需要多个插槽，这时候就需要为每一个插槽起一个名字，比如<code code="default">element-ui</code>的弹框可以定义底部按钮区的内容，就是用了名字为<code code="default">footer</code>的插槽
    </li>
</ul>

```js
render() {
    return (
        <ElDialog title="弹框标题" visible={this.visible}>
        <div>这里是弹框内容</div>
        {/** 具名插槽 */}
        <template slot="footer">
            <ElButton>确定</ElButton>
            <ElButton>取消</ElButton>
        </template>
        </ElDialog>
    )
}
```

<ul>
    <li>
        自定义具名插槽
在上节自定义默认插槽时提到了<code code="default">$slots</code>，对于默认插槽使用<code code="default">this.$slots.default</code>，而对于具名插槽，可以使用<code code="default">this.$slots.footer</code>进行自定义
    </li>
</ul>

```js
render() {
    return (
        <div class="custom-dialog" vShow={this.visible}>
        {this.$slots.default}
        {/**自定义具名插槽*/}
        <div class="custom-dialog__foolter">{this.$slots.footer}</div>
        </div>
    )
}
```

##### 作用域插槽

<ul>
    <li>
        使用作用域插槽
     有时让插槽内容能够访问子组件中才有的数据是很有用的，这时候就需要用到作用域插槽,在<code code="default">JSX</code>中，因为没有<code code="default">v-slot</code>指令，所以作用域插槽的使用方式就与模板代码里面的方式有所不同了。比如在<code code="default">element-ui</code>中，我们使用<code code="default">el-table</code>的时候可以自定义表格单元格的内容，这时候就需要用到作用域插槽
    </li>
</ul>

```js
data() {
    return {
        data: [
            {
                name: '子君'
            }
        ]
    }
},
render() {
    return (
        {/**scopedSlots即作用域插槽，default为默认插槽，如果是具名插槽，将default该为对应插槽名称即可*/}
        <ElTable data={this.data}>
        <ElTableColumn
            label="姓名"
            scopedSlots={{
            default: ({ row }) => {
                return <div style="color:red;">{row.name}</div>
            }
            }}
        ></ElTableColumn>
        </ElTable>
    )
}

```
<ul>
    <li>
        自定义作用域插槽
使用作用域插槽不同，定义作用域插槽也与模板代码里面有所不同。加入我们自定义了一个列表项组件，用户希望可以自定义列表项标题，这时候就需要将列表的数据通过作用域插槽传出来。
    </li>
</ul>

```js
render() {
    const { data } = this
    // 获取标题作用域插槽
    const titleSlot = this.$scopedSlots.title
    return (
        <div class="item">
        {/** 如果有标题插槽，则使用标题插槽，否则使用默认标题 */}
        {titleSlot ? titleSlot(data) : <span>{data.title}</span>}
        </div>
    )
}
```

### 只能在render函数里面使用JSX吗
当然不是，你可以定义<code code="default">method</code>，然后在<code code="default">method</code>里面返回<code code="default">JSX</code>,然后在<code code="default">render</code>函数里面调用这个方法，不仅如此，<code code="default">JSX</code>还可以直接赋值给变量，比如下面这段代码

```js
methods: {
    $_renderFooter() {
        return (
        <div>
            <ElButton>确定</ElButton>
            <ElButton>取消</ElButton>
        </div>
        )
    }
},
render() {
    const buttons = this.$_renderFooter()
    return (
        <ElDialog visible={this.visible}>
        <div>这里是一大坨内容</div>
        <template slot="footer">{buttons}</template>
        </ElDialog>
    )
}
```

### 指令

#### 基础用法
虽然大部分内置的指令无法直接在<code class="default">JSX</code>里面使用，但是自定义的指令可以在<code class="default">JSX</code>里面使用，就拿<code class="default">element-ui</code>的<code class="default">v-loading</code>指令来说，可以这样用

```js
render() {
    /**
     * 一个组件上面可以使用多个指令，所以是一个数组
     * name 对应指令的名称， 需要去掉 v- 前缀
     * value 对应 `v-loading="value"`中的value
     */
    const directives = [{ name: 'loading', value: this.loading }]
    return (
        <div
        {...{
            directives
        }}
        ></div>
    )
}
```

#### 修饰符
有些指令还可以使用修饰符,比如上例中的<code class="default">v-loading</code>,你可以通过修饰符指定是否全屏遮罩，是否锁定屏幕的滚动，这时候就需要这样写 <code class="default">v-loading.fullscreen.lock = "loading"</code>

```js
render() {
    /**
     * modifiers指定修饰符，如果使用某一个修饰符，则指定这个修饰符的值为 true
     * 不使用可以设置为false或者直接删掉
     */
    const directives = [
        {
        name: 'loading',
        value: this.loading,
        modifiers: { fullscreen: true, lock: false }
        }
    ]
    return (
        <div
        {...{
            directives
        }}
        ></div>
    )
}
```

<base-valine />
<el-backtop :visibility-height="0"></el-backtop>
