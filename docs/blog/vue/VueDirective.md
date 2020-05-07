---
pageClass: blog
---

## 这9个Vue自定义指令，让你的项目开发爽到爆

<p class="date">2020-04-03 15:30
  <span id="/blog/vue/VueDirective.html" class="leancloud_visitors">
      <i class="shni shn-eye-fill" />
      <i class="leancloud-visitors-count"></i>
  </span>
</p>

 <a href="https://mp.weixin.qq.com/s?__biz=MzAwNDcyNjI3OA==&mid=2650843405&idx=2&sn=1bcc2b9fbe20145fcb01cc49f966f378&chksm=80d38264b7a40b72270f5f959512826bd11f28c06266162522979a666de17b49ef727d49fc9d&scene=126&sessionid=1584951855&key=8c0d442c6463439998fb495731c27de320669f31b7e5d496048f84df803fc4e4349ee80e95a655619884add8679d57b1fb3c4caa3d0c935ce8e654da007a15fd2c659a62c9ee6d0164d0be74ab5b223b&ascene=1&uin=MTQwOTAyMzUwNQ%3D%3D&devicetype=Windows+10&version=62080079&lang=zh_CN&exportkey=AZMh7Fs31UcKSScM3ovWSlU%3D&pass_ticket=3PfHdZ9WGZaP%2FV6jlqggfFoTZsTghV2FjwS%2Bw3gNeYEH%2FL%2Bz%2Fy%2B%2BKJH9tilQPBXl" target="_blank">原文</a>


<el-backtop :visibility-height="0"></el-backtop>

留了一些我觉得派得上用场的自定义指令

### 1. V-Hotkey

这个指令可以给组件绑定一个或多个快捷键。你想要通过按下 Escape 键后隐藏某个组件，按住 Control 和回车键再显示它吗？小菜一碟：

安装: <code>npm install --save v-hotkey</code>

```js
<template>
  <div
    v-show="show"
    v-hotkey="{
      'esc': onClose,
      'ctrl+enter': onShow
    }"
  >
      Press `esc` to close me!
  </div>
</template>

<script>
export default {
    data() {
        return {
            show: true
        }
    },

    methods: {
        onClose() {
            this.show = false
        },

        onShow() {
            this.show = true
        },
    }
}
</script>
```

### 2. V-Click-Outside

你想要点击外部区域关掉某个组件吗？

安装: <code>npm install --save v-click-outside</code>

```js
<template>
  <div
    v-show="show"
    v-click-outside="onClickOutside"
  >
    Hide me when a click outside this element happens
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: true
    };
  },

  methods: {
    onClickOutside() {
      this.show = false;
    }
  }
};
</script>
```

### 3. V-Clipboard

这个简单指令的作者是Yev Vlasenko ，可以用在任何静态或动态元素上。当元素被点击时，指令的值会被复制到剪贴板上。用户需要复制代码片段的时候，这个非常有用。

安装: <code>npm install --save v-clipboard</code>

```js
<button v-clipboard="value">
  Copy to clipboard
</button>
```

### 4. V-Lazyload

图片懒加载

安装: <code>npm install --save vue-lazyload</code>

```js
<img v-lazy="https://www.domain.com/image.jpg">
```

### 5. V-Scroll-Lock

基于 body-scroll-lock 开发，这个指令的作用是在打开模态浮层的时候防止下层的元素滚动。

安装: <code>npm install --save v-scroll-lock</code>

```js
<template>
  <div class="modal" v-if="opened">
    <button @click="onCloseModal">X</button>
    <div class="modal-content" v-scroll-lock="opened">
      <p>A bunch of scrollable modal content</p>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      opened: false
    }
  },
  methods: {
    onOpenModal () {
      this.opened = true
    },

    onCloseModal () {
      this.opened = false
    }
  }
}
</script>
```

### 6. Vue-Infinite-Scroll

无限滚动指令，当滚动到页面底部时会触发绑定的方法。也可以用element-ui的InfiniteScroll组件。

安装: <code>npm install --save vue-infinite-scroll</code>

```js
<template>
  <!-- ... -->
  <div
    v-infinite-scroll="onLoadMore"
    infinite-scroll-disabled="busy"
    infinite-scroll-distance="10"
  ></div>
<template>
<script>
export default {
  data() {
    return {
      data [],
      busy: false,
      count: 0
    }
  },

  methods: {
    onLoadMore() {
      this.busy = true;

      setTimeout(() => {
        for (var i = 0, j = 10; i < j; i++) {
          this.data.push({ name: this.count++ });
        }
        this.busy = false;
      }, 1000);
    }
  }
}
</script>
```

### 7. Vue-Focus

有时候，用户在界面里操作，需要让某个输入框获得焦点。这个指令就是干这个的。

安装: <code>npm install --save vue-focus</code>

```js
<template>
  <button @click="focused = true">Focus the input</button>

  <input type="text" v-focus="focused">
</template>
<script>
export default {
  data: function() {
    return {
      focused: false,
    };
  },
};
</script>
```

### 8. V-Blur

假设你的页面在访客没有注册的时候，有些部分需要加上半透明遮罩。用这个指令可以轻松实现，还可以自定义透明度和过渡效果。

安装: <code>npm install --save v-blur</code>

```js
<template>
  <button
    @click="blurConfig.isBlurred = !blurConfig.isBlurred"
  >Toggle the content visibility</button>

  <p v-blur="blurConfig">Blurred content</p>
</template>
<script>
  export default {
      data () {
        return
          blurConfig: {
            isBlurred: false,
            opacity: 0.3,
            filter: 'blur(1.2px)',
            transition: 'all .3s linear'
          }
        }
      }
    }
  };
</script>
```

### 9. Vue-Dummy

开发 app 的时候，偶尔会需要使用假文本数据，或者特定尺寸的占位图片。用这个指令可以轻松实现。

安装: <code>npm install --save vue-dummy</code>

```js
<template>
  <!-- the content inside will have 150 words -->
  <p v-dummy="150"></p>

  <!-- Display a placeholder image of 400x300-->
  <img v-dummy="'400x300'" />
</template>
```

<base-valine />