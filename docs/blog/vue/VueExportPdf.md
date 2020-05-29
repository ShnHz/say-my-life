---
pageClass: blog
---

## Vue把页面导出为pdf文件
<p class="date">2020-04-21 18:00 
  <span id="/blog/vue/VueExportPdf.html" class="leancloud_visitors">
      <i class="shni shn-eye-fill" />
      <i class="leancloud-visitors-count"></i>
  </span>
</p>


<el-backtop :visibility-height="0"></el-backtop>

### 1.我们要添加2个模块

第一个.将页面html转换成图片

```bash
npm install --save html2canvas
```

第二个.将图片生成pdf

```bash
npm install jspdf --save
```

### 2.定义全局函数..创建一个htmlToPdf.js文件
```js
// 导出页面为PDF格式
import html2Canvas from 'html2canvas'
import JsPDF from 'jspdf'
export default{
  install (Vue, options) {
    Vue.prototype.ExportSavePdf = function (htmlTitle, elementId) {
      var element = document.getElementById(elementId)    //需要被导出的domId
      html2canvas(element, {
          logging: false,
          useCORS: true
      }).then(function (canvas) {
          let contentWidth = canvas.width
          let contentHeight = canvas.height
          let pageHeight = contentWidth / 592.28 * 841.89
          let leftHeight = contentHeight
          let position = 0
          let imgWidth = 595.28
          let imgHeight = 592.28 / contentWidth * contentHeight
          let pageData = canvas.toDataURL('image/jpeg', 1.0)
          let PDF = new JSPDF('', 'pt', 'a4')
          if (leftHeight < pageHeight) {
              PDF.addImage(pageData, 'JPEG', 0, 0, imgWidth, imgHeight)
          } else {
              while (leftHeight > 0) {
                  PDF.addImage(pageData, 'JPEG', 0, position, imgWidth, imgHeight)
                  leftHeight -= pageHeight
                  position -= 841.89
                  if (leftHeight > 0) {
                      PDF.addPage()
                  }
              }
          }
          PDF.save(htmlTitle)
      })
  }
  ```

### 3.在main.js中使用我们定义的函数文件。
```js
import htmlToPdf from '@/components/utils/htmlToPdf'
Vue.use(htmlToPdf)
```

### 4.使用
```html
<div @click="ExportSavePdf('title','domId')">例子</div>
```

<base-valine />