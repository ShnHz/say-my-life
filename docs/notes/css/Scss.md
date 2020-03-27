## Scss css预编译器
### 常用参数
``` scss
/*
 * @Author: sanghangning 
 * @Date: 2019-12-11 10:48:23 
 * @Last Modified by: sanghangning
 * @Last Modified time: 2020-03-27 11:11:37
 */
 $--color-white:#fff;
 $--color-black:#000;
 
 $--color-line:#ebedf0 !default;
 $--color-boder:#DCDFE6 !default;
 
 $--color-primary:#2cbfbe !default;
 $--color-primary-light-2:mix($--color-white, $--color-primary, 20%) !default;
 /* 66b1ff */
 $--color-primary-light-5:mix($--color-white, $--color-primary, 50%) !default;
 /* a0cfff */
 $--color-primary-light-8:mix($--color-white, $--color-primary, 80%) !default;
 $--color-primary-light-black-0-5:mix($--color-black, $--color-primary, 5%) !default;
 $--color-primary-light-black-1-5:mix($--color-black, $--color-primary, 15%) !default;
 
 $--color-success: #67c23a !default;
 $--color-success-light-2:mix($--color-white, $--color-success, 20%) !default;
 /* 85ce61 */
 $--color-success-light-5:mix($--color-white, $--color-success, 50%) !default;
 /* b3e19d */
 
 $--color-warning: #e6a23c !default;
 $--color-warning-light-2:mix($--color-white, $--color-warning, 20%) !default;
 /* ebb563 */
 $--color-warning-light-5:mix($--color-white, $--color-warning, 50%) !default;
 /* f3d19e */
 
 $--color-danger: #f56c6c !default;
 $--color-danger-light-2:mix($--color-white, $--color-danger, 20%) !default;
 /* f78989 */
 $--color-danger-light-5:mix($--color-white, $--color-danger, 50%) !default;
 /* fab6b6 */
 
 $--color-info: #909399 !default;
 $--color-info-light-2:mix($--color-white, $--color-info, 20%) !default;
 /*  */
 $--color-info-light-5:mix($--color-white, $--color-info, 50%) !default;
 /*  */
 
 $--transition-all-1-ease:all 0.1s ease;
 $--transition-all-2-ease:all 0.2s ease;
 $--transition-all-3-ease:all 0.3s ease;
 
 $--md-fade-transition: transform 300ms cubic-bezier(0.23, 1, 0.32, 1),
 opacity 300ms cubic-bezier(0.23, 1, 0.32, 1) !default;
```

### 深度选择器
优雅的只在当前页面中覆盖ui库中组件的样式
``` scss
.van-tabs ::v-deep .van-ellipsis { color: blue};
//编译前

.van-tabs[data-...] .van-ellipsis{
    color:blue;
}
//编译后
```