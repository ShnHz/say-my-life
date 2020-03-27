## Router 路由
### 后端鉴权
###### 实现思路
###### 参考网址 [掘金 - Vue中后台鉴权的另一种思路 - 动态路由的实现与优化](https://juejin.im/post/5caeb3756fb9a068967791b3#heading-5)
1.路由跳转 先判断是否登录 未登录只能访问白名单页面，访问其他页面全部重定向到登录页面
2.登录行为触发，获取动态路由，递归解析动态路由信息，并且addRouter，同时存储到Vuex，并且记录获取路由的状态
3.跳转页面不会获取动态路由，刷新页面重新获取动态路由
<img src="https://cdn.chenyingshuang.cn/notes/vue/router/router.jpg"/>

### 路由懒加载
###### 路由懒加载可以帮我们在进入首屏时不用加载过度的资源，从而减少首屏加载速度。
```js
import Index from '@/page/index/index';
export default new Router({  
    routes: [    
        { 
            path: '/', 
            name: 'Index',     
            component: Index 
        }
    ]
})

//非懒加载写法
```

```js
export default new Router({
  routes: [    
        { 
            path: '/', 
            name: 'Index', 
            component: resolve => require(['@/view/index/index'], resolve) 
        }
   ]
})

//懒加载写法
```