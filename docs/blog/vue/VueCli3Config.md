---
pageClass: blog-catalog
---

## 一份关于vue-cli3项目常用项配置
<p class="date">2020-04-30 10:30 
  <span id="/blog/vue/VueCli3Config.html" class="leancloud_visitors">
      <i class="shni shn-eye-fill" />
      <i class="leancloud-visitors-count"></i>
  </span>
</p>

###### 原文 [segmentfault](https://segmentfault.com/a/1190000022512358)

<el-backtop :visibility-height="0"></el-backtop>

### vue.config.js 完整的架构配置

```js code-height600
const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin') // 去掉注释
const CompressionWebpackPlugin = require('compression-webpack-plugin'); // 开启压缩
const { HashedModuleIdsPlugin } = require('webpack');

function resolve(dir) {
    return path.join(__dirname, dir)
}

const isProduction = process.env.NODE_ENV === 'production';

// cdn预加载使用
const externals = {
    'vue': 'Vue',
    'vue-router': 'VueRouter',
    'vuex': 'Vuex',
    'axios': 'axios',
    "element-ui": "ELEMENT"
}

const cdn = {
    // 开发环境
    dev: {
        css: [
            'https://unpkg.com/element-ui/lib/theme-chalk/index.css'
        ],
        js: []
    },
    // 生产环境
    build: {
        css: [
            'https://unpkg.com/element-ui/lib/theme-chalk/index.css'
        ],
        js: [
            'https://cdn.jsdelivr.net/npm/vue@2.5.17/dist/vue.min.js',
            'https://cdn.jsdelivr.net/npm/vue-router@3.0.1/dist/vue-router.min.js',
            'https://cdn.jsdelivr.net/npm/vuex@3.0.1/dist/vuex.min.js',
            'https://cdn.jsdelivr.net/npm/axios@0.18.0/dist/axios.min.js',
            'https://unpkg.com/element-ui/lib/index.js'
        ]
    }
}

module.exports = {

    lintOnSave: false, // 关闭eslint
    productionSourceMap: false,
    publicPath: './', 
    outputDir: process.env.outputDir, // 生成文件的目录名称
    chainWebpack: config => {

        config.resolve.alias
            .set('@', resolve('src'))

        // 压缩图片
        config.module
            .rule('images')
            .test(/\.(png|jpe?g|gif|svg)(\?.*)?$/)
            .use('image-webpack-loader')
            .loader('image-webpack-loader')
            .options({ bypassOnDebug: true })

        // webpack 会默认给commonChunk打进chunk-vendors，所以需要对webpack的配置进行delete
        config.optimization.delete('splitChunks')

        config.plugin('html').tap(args => {
            if (process.env.NODE_ENV === 'production') {
                args[0].cdn = cdn.build
            }
            if (process.env.NODE_ENV === 'development') {
                args[0].cdn = cdn.dev
            }
            return args
        })
        
        config
            .plugin('webpack-bundle-analyzer')
            .use(require('webpack-bundle-analyzer').BundleAnalyzerPlugin)
    },

    configureWebpack: config => {
        const plugins = [];

        if (isProduction) {
            plugins.push(
                new UglifyJsPlugin({
                    uglifyOptions: {
                        output: {
                            comments: false, // 去掉注释
                        },
                        warnings: false,
                        compress: {
                            drop_console: true,
                            drop_debugger: false,
                            pure_funcs: ['console.log']//移除console
                        }
                    }
                })
            )
            // 服务器也要相应开启gzip
            plugins.push(
                new CompressionWebpackPlugin({
                    algorithm: 'gzip',
                    test: /\.(js|css)$/,// 匹配文件名
                    threshold: 10000, // 对超过10k的数据压缩
                    deleteOriginalAssets: false, // 不删除源文件
                    minRatio: 0.8 // 压缩比
                })
            )

            // 用于根据模块的相对路径生成 hash 作为模块 id, 一般用于生产环境
            plugins.push(
                new HashedModuleIdsPlugin()
            )

            // 开启分离js
            config.optimization = {
                runtimeChunk: 'single',
                splitChunks: {
                    chunks: 'all',
                    maxInitialRequests: Infinity,
                    minSize: 1000 * 60,
                    cacheGroups: {
                        vendor: {
                            test: /[\\/]node_modules[\\/]/,
                            name(module) {
                                // 排除node_modules 然后吧 @ 替换为空 ,考虑到服务器的兼容
                                const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1]
                                return `npm.${packageName.replace('@', '')}`
                            }
                        }
                    }
                }
            };

            // 取消webpack警告的性能提示
            config.performance = {
                hints: 'warning',
                //入口起点的最大体积
                maxEntrypointSize: 1000 * 500,
                //生成文件的最大体积
                maxAssetSize: 1000 * 1000,
                //只给出 js 文件的性能提示
                assetFilter: function (assetFilename) {
                    return assetFilename.endsWith('.js');
                }
            }

            // 打包时npm包转CDN
            config.externals = externals;
        }

        return { plugins }
    },

    pluginOptions: {
        // 配置全局less
        'style-resources-loader': {
            preProcessor: 'less',
            patterns: [resolve('./src/style/theme.less')]
        }
    },
    devServer: {
        open: false, // 自动启动浏览器
        host: '0.0.0.0', // localhost
        port: 6060, // 端口号
        https: false,
        hotOnly: false, // 热更新
        proxy: {
            '^/sso': {
                target: process.env.VUE_APP_SSO, // 重写路径
                ws: true,   //开启WebSocket
                secure: false,      // 如果是https接口，需要配置这个参数
                changeOrigin: true
            }
        }
    }
}
```

### html模板配置cdn

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width,initial-scale=1.0">
    <link rel="icon" href="<%= BASE_URL %>favicon.ico">
    <title><%= htmlWebpackPlugin.options.title %></title>
    <% for (var i in
        htmlWebpackPlugin.options.cdn && htmlWebpackPlugin.options.cdn.css) { %>
    <link href="<%= htmlWebpackPlugin.options.cdn.css[i] %>" rel="preload" as="style" />
    <link href="<%= htmlWebpackPlugin.options.cdn.css[i] %>" rel="stylesheet" />
    <% } %>
</head>

<body>
    <noscript>
        <strong>We're sorry but <%= htmlWebpackPlugin.options.title %> doesn't work properly without JavaScript enabled.
            Please enable it to continue.</strong>
    </noscript>
    <div id="app"></div>
    <!-- built files will be auto injected -->
    <% for (var i in
        htmlWebpackPlugin.options.cdn && htmlWebpackPlugin.options.cdn.js) { %>
    <script src="<%= htmlWebpackPlugin.options.cdn.js[i] %>"></script>
    <% } %>
</body>
</html>
```

### 开启Gzip压缩，包含文件js、css
```js
new CompressionWebpackPlugin({
      algorithm: 'gzip',
      test: /\.(js|css)$/, // 匹配文件名
      threshold: 10000, // 对超过10k的数据压缩
      deleteOriginalAssets: false, // 不删除源文件
      minRatio: 0.8 // 压缩比
})
```

### 去掉注释、去掉console.log

安装cnpm i uglifyjs-webpack-plugin -D

```js
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
new UglifyJsPlugin({
    uglifyOptions: {
        output: {
            comments: false, // 去掉注释
        },
        warnings: false,
        compress: {
            drop_console: true,
            drop_debugger: false,
            pure_funcs: ['console.log'] //移除console
        }
    }
})
```

### 压缩图片

```js
chainWebpack: config => {
    // 压缩图片
    config.module
        .rule('images')
        .test(/\.(png|jpe?g|gif|svg)(\?.*)?$/)
        .use('image-webpack-loader')
        .loader('image-webpack-loader')
        .options({ bypassOnDebug: true })

}
```

### 本地代理

```js
devServer: {
    open: false, // 自动启动浏览器
    host: '0.0.0.0', // localhost
    port: 6060, // 端口号
    https: false,
    hotOnly: false, // 热更新
    proxy: {
        '^/sso': {
            target: process.env.VUE_APP_SSO, // 重写路径
            ws: true, //开启WebSocket
            secure: false, // 如果是https接口，需要配置这个参数
            changeOrigin: true
        }
    }
}
```

### 设置vscode 识别别名

在vscode中插件安装栏搜索 Path Intellisense 插件，打开settings.json文件添加 以下代码 "@": "${workspaceRoot}/src"，安以下添加

```js
{
    "workbench.iconTheme": "material-icon-theme",
    "editor.fontSize": 16,
    "editor.detectIndentation": false,
    "guides.enabled": false,
    "workbench.colorTheme": "Monokai",
    "path-intellisense.mappings": {
        "@": "${workspaceRoot}/src"
    }
}
```

在项目package.json所在同级目录下创建文件jsconfig.json

```js
{
    "compilerOptions": {
        "target": "ES6",
        "module": "commonjs",
        "allowSyntheticDefaultImports": true,
        "baseUrl": "./",
        "paths": {
          "@/*": ["src/*"]
        }
    },
    "exclude": [
        "node_modules"
    ]
}
```

如果还没懂，请客官移步<a href="https://www.vipbic.com/thread.html?id=88" target="_blank">在vscode中使用别名@按住ctrl也能跳转对应路径</a>

### 配置环境变量开发模式、测试模式、生产模式

在根目录新建

##### .env.development

```js
# 开发环境
NODE_ENV='development'

VUE_APP_SSO='http://http://localhost:9080'
```

##### .env.test

```js
NODE_ENV = 'production' # 如果我们在.env.test文件中把NODE_ENV设置为test的话，那么打包出来的目录结构是有差异的
VUE_APP_MODE = 'test'
VUE_APP_SSO='http://http://localhost:9080'
outputDir = test
```

##### .env.production

```js
NODE_ENV = 'production'

VUE_APP_SSO='http://http://localhost:9080'
```

##### package.json

```js
"scripts": {
    "build": "vue-cli-service build", //生产打包
    "lint": "vue-cli-service lint",
    "dev": "vue-cli-service serve", // 开发模式
    "test": "vue-cli-service build --mode test", // 测试打包
    "publish": "vue-cli-service build && vue-cli-service build --mode test" // 测试和生产一起打包
}
```

### 请求路由动态添加

router/index.js文件

```js code-height600
import Vue from 'vue';
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import defaultRouter from './defaultRouter'
import dynamicRouter from './dynamicRouter';

import store from '@/store';

const router = new VueRouter({
    routes: defaultRouter,
    mode: 'hash',
    scrollBehavior(to, from, savedPosition) {
        // keep-alive 返回缓存页面后记录浏览位置
        if (savedPosition && to.meta.keepAlive) {
            return savedPosition;
        }
        // 异步滚动操作
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve({ x: 0, y: 0 })
            }, 200)
        })
    }
})

// 消除路由重复警告
const selfaddRoutes = function (params) {
    router.matcher = new VueRouter().matcher;
    router.addRoutes(params);
}

// 全局路由拦截
router.beforeEach((to, from, next) => {
    const { hasRoute } = store.state; // 防止路由重复添加
    if (hasRoute) {
        next()
    } else {
        dynamicRouter(to, from, next, selfaddRoutes)
    }
})

export default router;
```

dynamicRouter.js

```js
import http from '@/http/request';
import defaultRouter from './defaultRouter'
import store from '@/store'

// 重新构建路由对象
const menusMap = function (menu) {
    return menu.map(v => {
        const { path, name, component } = v
        const item = {
            path,
            name,
            component: () => import(`@/${component}`)
        }
        return item;
    })
}


// 获取路由
const addPostRouter = function (to, from, next, selfaddRoutes) {
    http.windPost('/mock/menu') // 发起请求获取路由
        .then(menu => {
            defaultRouter[0].children.push(...menusMap(menu));
            selfaddRoutes(defaultRouter);
            store.commit('hasRoute', true);
            next({ ...to, replace: true })
        })
}

export default addPostRouter;
```

defaultRouter.js 默认路由

```js
const main = r => require.ensure([], () => r(require('@/layout/main.vue')), 'main')
const index = r => require.ensure([], () => r(require('@/view/index/index.vue')), 'index')
const about = r => require.ensure([], () => r(require('@/view/about/about.vue')), 'about')
const detail = r => require.ensure([], () => r(require('@/view/detail/detail.vue')), 'detail')
const error = r => require.ensure([], () => r(require('@/view/404/404.vue')), 'error');
const defaultRouter = [
    {
        path: "/", 
        component: main, // 布局页
        redirect: {
            name: "index"
        },
        children:[
            {
                path: '/index',
                component: index,
                name: 'index',
                meta: {
                    title: 'index'
                }
            },
            {
                path: '/about',
                component: about,
                name: 'about',
                meta: {
                    title: 'about'
                }
            },
            {
                path: '/detail',
                component: detail,
                name: 'detail',
                meta: {
                    title: 'detail'
                }
            }
        ]
    },
    {
        path: '/404',
        component: error,
        name: '404',
        meta: {
            title: '404'
        }
    }
]
export default defaultRouter;
```

### 只打包改变的文件

安装cnpm i webpack -D

```js
const { HashedModuleIdsPlugin } = require('webpack');
configureWebpack: config => {    
    const plugins = [];
    plugins.push(
        new HashedModuleIdsPlugin()
    )
}
```

### 开启分析打包日志

安装cnpm i webpack-bundle-analyzer -D

```js
chainWebpack: config => {
    config
        .plugin('webpack-bundle-analyzer')
        .use(require('webpack-bundle-analyzer').BundleAnalyzerPlugin)
}
```

<base-valine />