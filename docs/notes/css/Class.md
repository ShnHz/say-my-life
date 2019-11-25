## Class 常用Class
### 清除浮动
``` css
.clear-float:after {
    clear: both;
    content: '.';
    display: block;
    width: 0;
    height: 0;
    visibility: hidden;
}
```
### 字数超出省略号
``` css
.ellipsis {
    display: inline-block;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    vertical-align: bottom;
}
```
### 隐藏滚动条
``` css
*::-webkit-scrollbar {
    display: none;
}
```
### 页面初始css
``` css
body,
div,
dl,
dt,
dd,
ul,
ol,
li,
h1,
h2,
h3,
h4,
h5,
h6,
pre,
code,
form,
fieldset,
legend,
input,
textarea,
p,
blockquote,
th,
td {
    margin: 0;
    padding: 0;
}

fieldset,
img {
    border: 0;
}

li {
    list-style: none;
}

input[type=radio] {
    cursor: pointer
}

input[type=checkbox] {
    cursor: pointer
}

* {
    box-sizing: border-box;
    outline:none;
}

a,
a:active,
a:hover,
a:visited,
a:link {
    color: #333;
    text-decoration: none;
    cursor: pointer;
    transition: all 0.2s linear;
}

body,
html {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'PingFang SC',
        'Hiragino Sans GB', 'Microsoft YaHei', 'Helvetica Neue', Helvetica,
        Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji',
        'Segoe UI Symbol';
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    color: #282828;
}
```

### vue-lazyload loading 及 error
``` css
img[lazy="loading"],img[lazy="error"] {
  width: 30px !important;
  height: 30px !important;
  position: absolute;
  left: 50%;
  top: 50%;
  margin-left: -15px;
  margin-top: -15px;
}
```

### 注解字体
``` css
.annotation {
    font-size: 13px;
    color: #888;
}
```

### 可点击
``` css
.cursor-pointer {
    cursor: pointer;
}
```
### 同行 flex 居中
``` css
.filter-col {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    position: relative;
}
```

### 整行 flex 居中
``` css
.flex {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
}
```

### 根据文字长度自适应
``` css
.fit-content {
    width:fit-content;
    width:-webkit-fit-content;
    width:-moz-fit-content;
}
```

### 无限旋转360度
``` css
div{
    -webkit-animation: rotate360 20s infinite linear;
    -webkit-transform-origin: center center;
    -ms-transform-origin: center center;
    transform-origin: center center;
}

@-webkit-keyframes rotate360 {
    0% {
        transform: rotate(0deg);
        -ms-transform: rotate(0deg);
        -webkit-transform: rotate(0deg);
    }
    100% {
        transform: rotate(-360deg);
        -ms-transform: rotate(-360deg);
        -webkit-transform: rotate(-360deg);
    }
}
```