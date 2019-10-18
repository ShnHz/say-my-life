## Rem 适配
### 安装
```
cnpm i postcss-pxtorem lib-flexible --save
```

###### vue.config.js 文件内输入
``` json
{
    pluginOptions: {
        'autoprefixer': {
            browsers: ['Android >= 4.0', 'iOS >= 7']
        },
        'postcss-pxtorem': {
            rootValue: 32 , //基准值
            propList: ['*']
        }
    },
}
```