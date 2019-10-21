## Nprogress 页面顶部加载条
### 安装
```
cnpm install --save nprogress
```
###### 进度条颜色
``` css
#nprogress .bar {
    z-index: 9999;
    background: #48AD98;
}
```

###### router.js 文件内输入
``` js
import NProgress from 'nprogress'
import 'nprogress/nprogress.css' 

NProgress.configure({     
  easing: 'ease',  // 动画方式    
  speed: 500,  // 递增进度条的速度    
  showSpinner: false, // 是否显示加载ico    
  trickleSpeed: 200, // 自动递增间隔    
  minimum: 0.3 // 初始化时的最小百分比
})

router.beforeEach((to, from, next) => { //beforeEach是router的钩子函数，在进入路由前执行
  NProgress.start();
  if (to.meta.title) { //判断是否有标题
    document.title = to.meta.title
  }
  next() //执行进入路由，如果不写就不会进入目标页
})

router.afterEach(() => {
  // 在即将进入新的页面组件前，关闭掉进度条
  NProgress.done()
})
```
###### 或 axios.js 文件内引入
``` js
// http response 拦截器
axios.interceptors.response.use(
  response => {
      if(typeof response.config.nprogress != undefined && !response.config.nprogress) { // 发送axios请求时 可以设置 nprogress=false 来设置是否需要进度条
        NProgress.done()
      }
      return response;
    }
  },
  error => {
    v.$message.error('未知错误')
    return Promise.reject(error);
  }
);
```