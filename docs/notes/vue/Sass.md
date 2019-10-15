## Sass 在vue中使用
### 安装
```
cnpm i sass-loader node-sass --save
```
### 设置全局变量
###### vue.config.js 文件内输入
``` json
{
    css:{ 
        loaderOptions: {
            // 给 sass-loader 传递选项
            sass: {
                prependData:`@import "public/static/css/varuables";` //新版 sass-loader
                data: `@import "public/static/css/varuables";` //旧版
            }
        }
    }
}
```