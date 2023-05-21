(window.webpackJsonp=window.webpackJsonp||[]).push([[189],{787:function(t,s,a){"use strict";a.r(s);var e=a(24),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h3",{attrs:{id:"八股文"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#八股文"}},[t._v("#")]),t._v(" 八股文")]),t._v(" "),a("h4",{attrs:{id:"_1-说一说你对闭包的理解？"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-说一说你对闭包的理解？"}},[t._v("#")]),t._v(" 1.说一说你对闭包的理解？")]),t._v(" "),a("p",[t._v("闭包就是js的一个语法特性,闭包就是一个"),t._v("“背包”"),t._v("，所有js的函数都有一个背包，这个背包里面装的就是一些"),a("b",[t._v("函数体内调用的外层作用域的变量")]),t._v("。")]),t._v(" "),a("p",[t._v("闭包的原理：作用域链，当前作用域可以访问上级作用域的变量。")]),t._v(" "),a("p",[t._v("闭包的作用：")]),t._v(" "),a("ul",[a("li",[t._v("私有化变量，能够使函数外部访问函数内部的局部变量")]),t._v(" "),a("li",[t._v("延长变量的生命周期")]),t._v(" "),a("li",[t._v("封装一个类")])]),t._v(" "),a("p",[t._v("带来的问题：造成内存泄漏，因为浏览器不会销毁这些闭包变量。")]),t._v(" "),a("p",[t._v("可以参考我的文章 "),a("a",{attrs:{href:"https://www.sanghangning.cn/views/blog/js/Closure.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("如何理解JS闭包？"),a("OutboundLink")],1)]),t._v(" "),a("h4",{attrs:{id:"_2-说一说new会发生什么？"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-说一说new会发生什么？"}},[t._v("#")]),t._v(" 2.说一说new会发生什么？")]),t._v(" "),a("p",[t._v("步骤如下：")]),t._v(" "),a("ul",[a("li",[t._v("创建一个新对象")]),t._v(" "),a("li",[t._v("将新对象的隐式原型"),a("code",[t._v("_"),a("em",[t._v("proto")]),t._v("_")]),t._v("指向构造函数的原型对象"),a("code",[t._v("prototype")])]),t._v(" "),a("li",[t._v("利用"),a("code",[t._v("apply")]),t._v("或者"),a("code",[t._v("call")]),t._v("方法将新对象以及参数传入，执行构造函数")]),t._v(" "),a("li",[t._v("返回新对象")])]),t._v(" "),a("p",[t._v("可以参考我的文章 "),a("a",{attrs:{href:"https://www.sanghangning.cn/views/blog/js/New.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("JS的new操作符"),a("OutboundLink")],1)]),t._v(" "),a("h4",{attrs:{id:"_3-如何理解原型链？"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-如何理解原型链？"}},[t._v("#")]),t._v(" 3.如何理解原型链？")]),t._v(" "),a("p",[t._v("在js中，所有对象都有一个隐式原型"),a("code",[a("strong",[t._v("proto")])]),t._v("，而且js万物都是对象。所以就会有一条由"),a("code",[a("strong",[t._v("proto")])]),t._v("组成的链条，这条链条就叫原型链。这个链条最终的值是"),a("code",[t._v("null")]),t._v("，因为"),a("code",[t._v("Object.prototype."),a("strong",[t._v("proto")])]),t._v("为"),a("code",[t._v("null")])]),t._v(" "),a("p",[t._v("一个实例的隐式原型"),a("code",[a("strong",[t._v("proto")])]),t._v("指向构造函数的显式原型"),a("code",[t._v("prototype")])]),t._v(" "),a("p",[t._v("可以参考我的文章 "),a("a",{attrs:{href:"https://www.sanghangning.cn/views/blog/js/Prototype.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("JS的原型/原型链"),a("OutboundLink")],1)]),t._v(" "),a("h4",{attrs:{id:"_4-如何理解this？"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-如何理解this？"}},[t._v("#")]),t._v(" 4.如何理解this？")]),t._v(" "),a("p",[t._v("函数在调用的时候会创建一个执行环境，"),a("code",[t._v("this")]),t._v("对象基于这个执行环境绑定，所以"),a("code",[t._v("this")]),t._v("的指向其实就是基于函数的执行环境决定的。")]),t._v(" "),a("p",[t._v("可以参考我的文章 "),a("a",{attrs:{href:"https://www.sanghangning.cn/views/blog/js/This.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("JS的this指向问题"),a("OutboundLink")],1)]),t._v(" "),a("h4",{attrs:{id:"_5-js中的继承有哪几种？"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-js中的继承有哪几种？"}},[t._v("#")]),t._v(" 5.js中的继承有哪几种？")]),t._v(" "),a("ul",[a("li",[t._v("构造函数继承")]),t._v(" "),a("li",[t._v("原型链继承")]),t._v(" "),a("li",[t._v("组合继承")]),t._v(" "),a("li",[t._v("寄生继承")]),t._v(" "),a("li",[t._v("寄生组合继承")]),t._v(" "),a("li",[t._v("Class继承"),a("code",[t._v("extend")])])]),t._v(" "),a("p",[t._v("可以参考我的文章 "),a("a",{attrs:{href:"https://www.sanghangning.cn/views/blog/js/Inherit.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("JS中常用的继承方式"),a("OutboundLink")],1)]),t._v(" "),a("h4",{attrs:{id:"_6-js有哪些数据类型？他们有什么不同？"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6-js有哪些数据类型？他们有什么不同？"}},[t._v("#")]),t._v(" 6.js有哪些数据类型？他们有什么不同？")]),t._v(" "),a("p",[t._v("基本数据类型："),a("code",[t._v("String")]),t._v("、"),a("code",[t._v("Number")]),t._v("、"),a("code",[t._v("Boolean")]),t._v("、"),a("code",[t._v("Null")]),t._v("、"),a("code",[t._v("Undefined")]),t._v("，es6新增的"),a("code",[t._v("BigInt")]),t._v("、"),a("code",[t._v("Symbol")])]),t._v(" "),a("p",[t._v("引用数据类型："),a("code",[t._v("Object")]),t._v("，"),a("code",[t._v("Array")]),t._v("、"),a("code",[t._v("Map")]),t._v("、"),a("code",[t._v("Set")]),t._v("、"),a("code",[t._v("Function")]),t._v("、"),a("code",[t._v("Date")]),t._v("、"),a("code",[t._v("RegExp")]),t._v("其实都是对象。")]),t._v(" "),a("p",[t._v("基本数据类型存储在内存栈中，占用空间小。")]),t._v(" "),a("p",[t._v("引用数据类型存储在内存堆中，占用空间大，而且存储了一个指针在内存栈中。")]),t._v(" "),a("h4",{attrs:{id:"_7-为什么0-1-0-2-0-3，如何让其相等？"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_7-为什么0-1-0-2-0-3，如何让其相等？"}},[t._v("#")]),t._v(" 7.为什么0.1+0.2!==0.3，如何让其相等？")]),t._v(" "),a("p",[t._v("因为进制转换对阶过程中会出现精度缺失问题。浮点数转成二进制时丢失了精度，因此在二进制转十进制过程中可能会出现结果不符的情况。")]),t._v(" "),a("p",[t._v("在计算前先将数字乘以一个10的幂次数。")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("(0.1*10+0.2*10)/10 //0.3\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("h4",{attrs:{id:"_8-let、const、var的区别？"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_8-let、const、var的区别？"}},[t._v("#")]),t._v(" 8.let、const、var的区别？")]),t._v(" "),a("ul",[a("li",[t._v("块级作用域："),a("code",[t._v("let")]),t._v("、"),a("code",[t._v("const")]),t._v("有块级作用域的特性,"),a("code",[t._v("var")]),t._v("没有。")]),t._v(" "),a("li",[t._v("变量提升："),a("code",[t._v("let")]),t._v("、"),a("code",[t._v("const")]),t._v("不会变量提升，"),a("code",[t._v("var")]),t._v("会，其实"),a("code",[t._v("let")]),t._v("也是会的，只是由于暂时性死区的缘故，不能在声明前使用这个变量。")]),t._v(" "),a("li",[t._v("常量："),a("code",[t._v("const")]),t._v("声明后不可改变。")]),t._v(" "),a("li",[t._v("全局属性：浏览器的全局是"),a("code",[t._v("windows")]),t._v("，nodejs的全局是"),a("code",[t._v("global")]),a("code",[t._v("var")]),t._v("声明的变量为全局变量，并且会将该变量添加到全局属性上。")]),t._v(" "),a("li",[t._v("重复声明： "),a("code",[t._v("var")]),t._v("是可以被重复声明的，会覆盖前一个声明的变量，"),a("code",[t._v("let")]),t._v("、"),a("code",[t._v("const")]),t._v("重复声明会报错。")]),t._v(" "),a("li",[t._v("初始值："),a("code",[t._v("let")]),t._v("、"),a("code",[t._v("val")]),t._v("可以声明时不赋值，"),a("code",[t._v("const")]),t._v("不赋值则会报错。")]),t._v(" "),a("li",[t._v("暂时性死区：在使用"),a("code",[t._v("let")]),t._v("、"),a("code",[t._v("const")]),t._v("时，声明前都是不可以使用这个对象的。")])]),t._v(" "),a("h4",{attrs:{id:"_9-什么是变量提升？变量提升默认值为什么是undefined？"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_9-什么是变量提升？变量提升默认值为什么是undefined？"}},[t._v("#")]),t._v(" 9.什么是变量提升？变量提升默认值为什么是undefined？")]),t._v(" "),a("p",[t._v("变量提升就是指将声明对象语句执行顺序提升到作用域最上方，"),a("code",[t._v("var")]),t._v("有变量提升的特性，"),a("code",[t._v("let")]),t._v("、"),a("code",[t._v("const")]),t._v("没有。")]),t._v(" "),a("p",[t._v("因为变量提升只提升变量的声明语句，不提升赋值语句，声明了变量没有赋值的话就是"),a("code",[t._v("undefined")]),t._v("。")]),t._v(" "),a("h4",{attrs:{id:"_10-this的指向问题？"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_10-this的指向问题？"}},[t._v("#")]),t._v(" 10.this的指向问题？")]),t._v(" "),a("ul",[a("li",[t._v("new调用（new Methods()）：绑定到"),a("code",[t._v("new")]),t._v("出来的对象上。")]),t._v(" "),a("li",[t._v("普通函数调用（methods()）：严格模式下为"),a("code",[t._v("undefined")]),t._v("，混杂模式下为全局对象。")]),t._v(" "),a("li",[t._v("对象调用（obj.methods()）：绑定到"),a("code",[t._v("obj")]),t._v("上，也就是调用的对象上。")]),t._v(" "),a("li",[t._v("call、apply、bind：由传入参数决定，因为这三个函数都是改变"),a("code",[t._v("this")]),t._v("指向的作用。")]),t._v(" "),a("li",[t._v("箭头函数：箭头函数本身没有"),a("code",[t._v("this")]),t._v("，所以继承的是上级作用域的"),a("code",[t._v("this")]),t._v("。")])]),t._v(" "),a("p",[t._v("可以参考我的文章 "),a("a",{attrs:{href:"https://www.sanghangning.cn/views/blog/js/This.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("JS的this指向问题"),a("OutboundLink")],1)]),t._v(" "),a("h4",{attrs:{id:"_11-bind、call和apply的区别？"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_11-bind、call和apply的区别？"}},[t._v("#")]),t._v(" 11.bind、call和apply的区别？")]),t._v(" "),a("p",[t._v("它们的功能完全一样，都是改变"),a("code",[t._v("this")]),t._v("的指向，唯一的区别是传入参数不同。")]),t._v(" "),a("p",[t._v("第一个参数是指定了函数体内的this指向，后面的参数有所不同。")]),t._v(" "),a("p",[a("code",[t._v("call")]),t._v("传入的是多个对象，以顺序依此传入对象。")]),t._v(" "),a("p",[a("code",[t._v("apply")]),t._v("传入的是一个对象数组。")]),t._v(" "),a("p",[a("code",[t._v("bind")]),t._v("与"),a("code",[t._v("call")]),t._v("、"),a("code",[t._v("apply")]),t._v("的使用方式不同，"),a("code",[t._v("call")]),t._v("、"),a("code",[t._v("apply")]),t._v("会直接执行函数，"),a("code",[t._v("bind")]),t._v("则会返回一个新的函数。")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://www.sanghangning.cn/views/blog/js/BindCallApply.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("JS手写bind、call、apply"),a("OutboundLink")],1)]),t._v(" "),a("h4",{attrs:{id:"_12-说一说js有什么判断变量类型的方法？"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_12-说一说js有什么判断变量类型的方法？"}},[t._v("#")]),t._v(" 12.说一说js有什么判断变量类型的方法？")]),t._v(" "),a("ul",[a("li",[t._v("instandof:无法判断数组和对象")]),t._v(" "),a("li",[t._v("typeof:基本数据类型判断，无法判断引用类型")]),t._v(" "),a("li",[t._v("Object.prototype.tostring.call():所有类型都能够判断")]),t._v(" "),a("li",[t._v("Array.isArray():判断是否为数组")])]),t._v(" "),a("h4",{attrs:{id:"_13-说一说js实现异步的方法？"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_13-说一说js实现异步的方法？"}},[t._v("#")]),t._v(" 13.说一说js实现异步的方法？")]),t._v(" "),a("ul",[a("li",[t._v("promise")]),t._v(" "),a("li",[t._v("await/async")]),t._v(" "),a("li",[t._v("生成器函数 Generator/yield")]),t._v(" "),a("li",[t._v("计时器")]),t._v(" "),a("li",[t._v("回调函数")])]),t._v(" "),a("h4",{attrs:{id:"_14-说一下eventloop（事件循环）？"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_14-说一下eventloop（事件循环）？"}},[t._v("#")]),t._v(" 14.说一下EventLoop（事件循环）？")]),t._v(" "),a("p",[t._v("由于js是单线程的，既要处理 DOM，又要计算样式，还要处理布局，同时还需要处理 JavaScript 任务以及各种输入事件，那么要让这些事件能够有条不紊的进行就需要一个统筹管理系统，其实就是"),a("code",[t._v("eventloop")]),t._v("（事件循环）。")]),t._v(" "),a("p",[t._v("js的任务分为同步任务以及异步任务，处理机制总结起来是这样的，先执行同步任务，再执行异步任务，异步任务又分为微任务以及宏任务，先执行微任务再执行宏任务。")]),t._v(" "),a("p",[t._v("常见宏任务：setTimeout，setInterval，DOM事件，script标签，ajax\n常见微任务：Promise，async/await")]),t._v(" "),a("h4",{attrs:{id:"_15-说一说-null-和-undefined-的区别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_15-说一说-null-和-undefined-的区别"}},[t._v("#")]),t._v(" 15.说一说 null 和 undefined 的区别?")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("null")]),t._v("是定义了并赋值"),a("code",[t._v("null")])]),t._v(" "),a("li",[a("code",[t._v("undefined")]),t._v("定义未赋值")])]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("undefined")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//true")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("undefined")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//false")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("undefined")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//true")]),t._v("\n\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//1")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("undefined")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//NAN")]),t._v("\n\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//1")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("undefined")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//NAN")]),t._v("\n\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//null")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("undefined")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//undefined")]),t._v("\n\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("JSON")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("stringify")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("a"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("undefined")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" b"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// '{b: null}')")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br")])]),a("h4",{attrs:{id:"_16-事件委托的原理？"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_16-事件委托的原理？"}},[t._v("#")]),t._v(" 16.事件委托的原理？")]),t._v(" "),a("p",[a("strong",[t._v("事件委托")]),t._v("也称为"),a("strong",[t._v("事件代理")]),t._v("。就是利用"),a("strong",[t._v("事件冒泡")]),t._v("，把子元素的事件都绑定到父元素上。如果子元素阻止了事件冒泡，那么委托就无法实现。")]),t._v(" "),a("p",[t._v("其实就是比如说有100个按钮，每个按钮都要绑定相同的单击事件，那么不如直接把事件绑定在包裹这100个按钮的容器上")]),t._v(" "),a("p",[t._v("优点：")]),t._v(" "),a("ul",[a("li",[t._v("替代循环绑定事件的操作，减少内存消耗，提高性能。")]),t._v(" "),a("li",[t._v("简化dom节点更新的时候，在新dom上再次绑定事件的性能消耗")])]),t._v(" "),a("p",[t._v("缺点：")]),t._v(" "),a("ul",[a("li",[t._v("对于不冒泡的事件无法委托")]),t._v(" "),a("li",[t._v("层级过多时，可能会被某一级阻止")]),t._v(" "),a("li",[t._v("理论上委托会导致浏览器频繁调用处理函数，虽然很可能不需要处理。所以建议就近委托")])]),t._v(" "),a("h5",{attrs:{id:"事件委托的顺序？"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#事件委托的顺序？"}},[t._v("#")]),t._v(" 事件委托的顺序？")]),t._v(" "),a("p",[t._v("dom元素中，既有冒泡，又有捕获的执行顺序：w3c规定，任何发生在w3c事件模型中的事件，"),a("strong",[t._v("首是进入捕获阶段，直到达到目标元素，再进入冒泡阶段")]),t._v("。")]),t._v(" "),a("h4",{attrs:{id:"_17-深拷贝？浅拷贝？"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_17-深拷贝？浅拷贝？"}},[t._v("#")]),t._v(" 17.深拷贝？浅拷贝？")]),t._v(" "),a("p",[t._v("深拷贝比如说一个对象想要拷贝，就是在内存堆中重新开辟一块空间出来进行拷贝对象的存储，而浅拷贝只是拷贝了原对象在内存堆中的一个指针，实际上存储的还是原对象。")]),t._v(" "),a("h4",{attrs:{id:"_18-object-assign-是深拷贝吗？"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_18-object-assign-是深拷贝吗？"}},[t._v("#")]),t._v(" 18.Object.assign()是深拷贝吗？")]),t._v(" "),a("p",[t._v("可以是深拷贝也可以是浅拷贝，当传递对象为基本类型时，是浅拷贝，传递对象为引用类型时，是深拷贝，当对象有二级属性时候，也是浅拷贝（对象内有对象）")]),t._v(" "),a("h4",{attrs:{id:"_19-instandof-的原理？"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_19-instandof-的原理？"}},[t._v("#")]),t._v(" 19.instandof 的原理？")]),t._v(" "),a("p",[t._v("就是对比左侧对象的原型链与右侧对象的显式原型prototype，看看是否存在右侧的这个显式原型，如果是则返回true，否则返回false")]),t._v(" "),a("h4",{attrs:{id:"_20-说一说es6的箭头函数？"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_20-说一说es6的箭头函数？"}},[t._v("#")]),t._v(" 20.说一说es6的箭头函数？")]),t._v(" "),a("p",[t._v("是创建函数的语法糖 没有this 继承上个作用域的this，没有argments，没有new，没有prototype")]),t._v(" "),a("h4",{attrs:{id:"_21-1-2-3-0x16-map-parseint-输出什么"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_21-1-2-3-0x16-map-parseint-输出什么"}},[t._v("#")]),t._v(" 21.['1','2','3','0x16'].map(parseInt)输出什么")]),t._v(" "),a("p",[a("code",{staticClass:"default"},[t._v("parseInt")]),t._v("方法当str以"),a("code",{staticClass:"default"},[t._v("0x")]),t._v("开头，则按照16进制处理，其余情况都以10进制处理")]),t._v(" "),a("h4",{attrs:{id:"_22-es6有哪些常用的功能"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_22-es6有哪些常用的功能"}},[t._v("#")]),t._v(" 22.ES6有哪些常用的功能")]),t._v(" "),a("ul",[a("li",[t._v("箭头函数")]),t._v(" "),a("li",[t._v("解构")]),t._v(" "),a("li",[t._v("set、map")]),t._v(" "),a("li",[t._v("let、const变量命名")]),t._v(" "),a("li",[t._v("promise、generator、await/async")]),t._v(" "),a("li",[t._v("模板字符串")]),t._v(" "),a("li",[t._v("新的变量类型bigint、symol")]),t._v(" "),a("li",[t._v("import\\export模块化 ESM")]),t._v(" "),a("li",[t._v("函数参数的默认值")])]),t._v(" "),a("h4",{attrs:{id:"_23-echarts部分有没有配置比较复杂的图"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_23-echarts部分有没有配置比较复杂的图"}},[t._v("#")]),t._v(" 23.echarts部分有没有配置比较复杂的图")]),t._v(" "),a("p",[t._v("世界地图，鼠标hover显示自定义的html面板展示一些柱状图数据")]),t._v(" "),a("h4",{attrs:{id:"_24-typeof-nan-的结果是什么"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_24-typeof-nan-的结果是什么"}},[t._v("#")]),t._v(" 24.typeof NaN 的结果是什么")]),t._v(" "),a("p",[t._v("number")]),t._v(" "),a("h4",{attrs:{id:"_25-isnan-和-number-isnan-函数的区别？"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_25-isnan-和-number-isnan-函数的区别？"}},[t._v("#")]),t._v(" 25.isNaN 和 Number.isNaN 函数的区别？")]),t._v(" "),a("p",[t._v("isNaN函数会首先进行number函数转换，如果转换后为number类型，则返回false，否则返回true")]),t._v(" "),a("p",[t._v("Number.isNaN函数是严格等于NaN，不做任何转换，只有NaN返回true")]),t._v(" "),a("h4",{attrs:{id:"_26-map和weakmap的区别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_26-map和weakmap的区别"}},[t._v("#")]),t._v(" 26.map和weakMap的区别")]),t._v(" "),a("ul",[a("li",[t._v("Map的键可以是任意类型，WeakMap只接受对象作为键，不接受其它类型的值作为键")]),t._v(" "),a("li",[t._v("Map的键实际上是跟内存地址绑定的，只要内存地址不一样，就视为两个键；WeakMap的键是弱引用，键所指向的对象是可以被垃圾回收，此时键是无效的。")]),t._v(" "),a("li",[t._v("Map可以被遍历，WeakMap不能被遍历")])]),t._v(" "),a("h4",{attrs:{id:"_27-for-in-和for-of-的区别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_27-for-in-和for-of-的区别"}},[t._v("#")]),t._v(" 27.for in 和for of 的区别")]),t._v(" "),a("ul",[a("li",[t._v("for in可以遍历对象，for of不能遍历对象")]),t._v(" "),a("li",[t._v("for of可以用来遍历map集合，for in不能遍历map集合")]),t._v(" "),a("li",[t._v("for in遍历数组得到的是数组的下标，for of遍历数组得到的是数组的元素")]),t._v(" "),a("li",[t._v("for in遍历键，for of遍历值")])]),t._v(" "),a("h4",{attrs:{id:"_28-为什么for-of不能遍历对象"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_28-为什么for-of不能遍历对象"}},[t._v("#")]),t._v(" 28.为什么for of不能遍历对象")]),t._v(" "),a("p",[t._v("因为对象没有实现"),a("code",{staticClass:"default"},[t._v("Symbol.iterator")]),t._v("这个方法，就是迭代器")]),t._v(" "),a("h4",{attrs:{id:"_29-es5和es6的继承-这两种方式除了写法-还有其他区别吗"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_29-es5和es6的继承-这两种方式除了写法-还有其他区别吗"}},[t._v("#")]),t._v(" 29.ES5和ES6的继承? 这两种方式除了写法, 还有其他区别吗?")]),t._v(" "),a("p",[t._v("es6的Class本质上是个语法糖,就是es5的寄生组合式继承的语法糖,所以其实没有什么区别")]),t._v(" "),a("h3",{attrs:{id:"promise"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#promise"}},[t._v("#")]),t._v(" Promise")]),t._v(" "),a("h4",{attrs:{id:"_1-说一说promise是什么？"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-说一说promise是什么？"}},[t._v("#")]),t._v(" 1.说一说promise是什么？")]),t._v(" "),a("p",[t._v("promise诞生是为了解决回调地狱的问题，优化代码结构。")]),t._v(" "),a("p",[t._v("这个单词的意思就是“承诺”，那么一个承诺肯定会有三种状态，等待实现承诺"),a("b",[t._v("pending")]),t._v("、成功"),a("b",[t._v("fulfilled")]),t._v("、失败"),a("b"),t._v("，且一个承诺是"),a("b",[t._v("不可逆")]),t._v("的")]),t._v(" "),a("h4",{attrs:{id:"_2-promise有哪些方法？"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-promise有哪些方法？"}},[t._v("#")]),t._v(" 2.promise有哪些方法？")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("Promise.all")]),t._v("可以将多个"),a("code",[t._v("Promise")]),t._v("实例包装成一个新的"),a("code",[t._v("Promise")]),t._v("实例。同时，成功和失败的返回值是不同的，成功的时候返回的是一个结果数组，而失败的时候则返回最先被"),a("code",[t._v("reject")]),t._v("失败状态的值。")]),t._v(" "),a("li",[a("code",[t._v("Promise.race")]),t._v("也是传入一个数组，但是是赛跑的意思，顾名思义，就是谁先获得结果，就返回那个结果，不管结果本身是成功状态还是失败状态。")])]),t._v(" "),a("h4",{attrs:{id:"_3-promise、generator、async有什么区别？"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-promise、generator、async有什么区别？"}},[t._v("#")]),t._v(" 3.Promise、Generator、Async有什么区别？")]),t._v(" "),a("p",[t._v("这三个函数其实都是异步解决方案，从左至右逐渐发展。把异步问题写的越来越优雅。")]),t._v(" "),a("p",[a("code",{staticClass:"default"},[t._v("Generator")]),t._v(" 函数是 ES6 提供的一种异步编程解决方案，语法行为与传统函数完全不同。")]),t._v(" "),a("p",[t._v("调用 "),a("code",{staticClass:"default"},[t._v("Generator")]),t._v(" 函数后，该函数并不执行，返回的也不是函数运行结果，而是一个指向内部状态的指针对象，也就是遍历器对象（Iterator Object）。下一步，必须调用遍历器对象的"),a("code",{staticClass:"default"},[t._v("next")]),t._v("方法，使得指针移向下一个状态。")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("fetch")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("yield")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ajax")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'aaa'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("yield")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ajax")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'bbb'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("yield")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ajax")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'ccc'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" gen "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("fetch")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" res1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" gen"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("next")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// { value: 'aaa', done: false }")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" res2 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" gen"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("next")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// { value: 'bbb', done: false }")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" res3 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" gen"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("next")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// { value: 'ccc', done: false }")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" res4 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" gen"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("next")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// { value: undefined, done: true } done为true表示执行结束")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br")])]),a("p",[t._v("三种方案都是为解决传统的回调函数而提出的，所以它们相对于回调函数的优势不言而喻。而"),a("code",{staticClass:"default"},[t._v("async/await")]),t._v("又是"),a("code",{staticClass:"default"},[t._v("Generator")]),t._v("函数的语法糖。")]),t._v(" "),a("ul",[a("li",[a("code",{staticClass:"default"},[t._v("Promise")]),t._v("的内部错误使用"),a("code",{staticClass:"default"},[t._v("try catch")]),t._v("捕获不到，只能只用"),a("code",{staticClass:"default"},[t._v("then")]),t._v("的第二个回调或"),a("code",{staticClass:"default"},[t._v("catch")]),t._v("来捕获，而"),a("code",{staticClass:"default"},[t._v("async/await")]),t._v("的错误可以用"),a("code",{staticClass:"default"},[t._v("try catch")]),t._v("捕获")]),t._v(" "),a("li",[a("code",{staticClass:"default"},[t._v("Promise")]),t._v("一旦新建就会立即执行，不会阻塞后面的代码，而"),a("code",{staticClass:"default"},[t._v("async")]),t._v("函数中"),a("code",{staticClass:"default"},[t._v("await")]),t._v("后面是"),a("code",{staticClass:"default"},[t._v("Promise")]),t._v("对象会阻塞后面的代码。")]),t._v(" "),a("li",[a("code",{staticClass:"default"},[t._v("async")]),t._v("函数会隐式地返回一个"),a("code",{staticClass:"default"},[t._v("promise")]),t._v("，该"),a("code",{staticClass:"default"},[t._v("promise")]),t._v("的"),a("code",{staticClass:"default"},[t._v("reosolve")]),t._v("值就是函数"),a("code",{staticClass:"default"},[t._v("return")]),t._v("的值。")]),t._v(" "),a("li",[a("code",{staticClass:"default"},[t._v("async")]),t._v("函数可以让代码更加简洁，不需要像"),a("code",{staticClass:"default"},[t._v("Promise")]),t._v("一样需要调用then方法来获取返回值，不需要写匿名函数处理"),a("code",{staticClass:"default"},[t._v("Promise")]),t._v("的"),a("code",{staticClass:"default"},[t._v("resolve")]),t._v("值，也不需要定义多余的data变量，还避免了嵌套代码。")])]),t._v(" "),a("h4",{attrs:{id:"_4-promise-all-传入的数组内可以有不是promise对象的吗？"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-promise-all-传入的数组内可以有不是promise对象的吗？"}},[t._v("#")]),t._v(" 4.promise.all 传入的数组内可以有不是promise对象的吗？")]),t._v(" "),a("p",[t._v("可以的，不会报错也不会进入catch，会将值直接放入返回值内")]),t._v(" "),a("h3",{attrs:{id:"http请求"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#http请求"}},[t._v("#")]),t._v(" http请求")]),t._v(" "),a("h4",{attrs:{id:"_1-ajax的原理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-ajax的原理"}},[t._v("#")]),t._v(" 1.ajax的原理")]),t._v(" "),a("p",[t._v("就是通过"),a("code",[t._v("XMLHttpRequest")]),t._v("对象向服务器发送异步请求，从服务器获取数据，利用"),a("code",[t._v("js")]),t._v("来操作"),a("code",[t._v("DOM")]),t._v("更新页面。")]),t._v(" "),a("h4",{attrs:{id:"_2-ajax发送请求的过程？"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-ajax发送请求的过程？"}},[t._v("#")]),t._v(" 2.ajax发送请求的过程？")]),t._v(" "),a("ul",[a("li",[t._v("1.创建"),a("code",[t._v("XMLHttpRequest")]),t._v("对象")]),t._v(" "),a("li",[t._v("2.调用"),a("code",[t._v("open")]),t._v("方法初始化HTTP请求参数（请求方法，url）")]),t._v(" "),a("li",[a("ul",[a("li",[t._v("如果是"),a("code",[t._v("post")]),t._v("请求，需要调用"),a("code",[t._v("setRequestHeader")]),t._v("方法设置请求头")])])]),t._v(" "),a("li",[t._v("3.创建监听异步回调方法")]),t._v(" "),a("li",[t._v("4.调用"),a("code",[t._v("send")]),t._v("方法发送请求")]),t._v(" "),a("li",[t._v("5.获取请求返回值，根据返回状态执行相应操作")])]),t._v(" "),a("h4",{attrs:{id:"_3-ajax，fetch，axios有什么区别？"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-ajax，fetch，axios有什么区别？"}},[t._v("#")]),t._v(" 3.ajax，fetch，axios有什么区别？")]),t._v(" "),a("ul",[a("li",[t._v("ajax：是对原生xhr的封装，在JQuery时代常用")]),t._v(" "),a("li",[t._v("fetch：是xhr的替代品，是ES规范里面全新的实现方式，全新的底层实现。")]),t._v(" "),a("li",[t._v("axios：本质上也是对xhr的封装，但是是利用Promise封装的版本，符合最新的ES规范")])]),t._v(" "),a("h3",{attrs:{id:"设计模式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#设计模式"}},[t._v("#")]),t._v(" 设计模式")]),t._v(" "),a("h4",{attrs:{id:"_1-设计模式是什么？"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-设计模式是什么？"}},[t._v("#")]),t._v(" 1.设计模式是什么？")]),t._v(" "),a("p",[t._v("模式是一种可服用的解决方案，用于解决软件设计中遇到的常见问题。说白了就是套路，一种写代码的攻略。遇到相应的场景能够快速找到最好的解决方案。")]),t._v(" "),a("h4",{attrs:{id:"_2-前端有哪些常用的设计模式？"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-前端有哪些常用的设计模式？"}},[t._v("#")]),t._v(" 2.前端有哪些常用的设计模式？")]),t._v(" "),a("h5",{attrs:{id:"策略模式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#策略模式"}},[t._v("#")]),t._v(" 策略模式")]),t._v(" "),a("p",[t._v("要实现某一个功能，有多种方案可以选择。我们定义策略，把它们一个个封装起来，并且使它们可以相互转换")]),t._v(" "),a("p",[t._v("使用场景：权限判断，表单验证等等")]),t._v(" "),a("h5",{attrs:{id:"发布-订阅者模式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#发布-订阅者模式"}},[t._v("#")]),t._v(" 发布-订阅者模式")]),t._v(" "),a("p",[t._v("EventEmit")]),t._v(" "),a("p",[t._v("就是发布订阅者模式的一个管理中心，订阅者把自己想订阅的事件注册到管理中心，当发布者发布该事件的时候，也就是该事件触发的时候，由管理中心统一调度订阅者的注册代码")]),t._v(" "),a("p",[t._v("使用场景：各模块独立，且存在一对多的关系")]),t._v(" "),a("h5",{attrs:{id:"装饰器模式、适配器模式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#装饰器模式、适配器模式"}},[t._v("#")]),t._v(" 装饰器模式、适配器模式")]),t._v(" "),a("p",[t._v("装饰器模式：就是指把一个原有的对象加上一些你想要加的功能，但并不改变原有的功能")]),t._v(" "),a("p",[t._v("适配器模式：就是解决不兼容的问题，比如一个苹果电脑没有usb接口，那么就要装上一个转接器来实现插u盘的功能")]),t._v(" "),a("h3",{attrs:{id:"不常见的运算"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#不常见的运算"}},[t._v("#")]),t._v(" 不常见的运算")]),t._v(" "),a("h4",{attrs:{id:"_1-null-undefined"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-null-undefined"}},[t._v("#")]),t._v(" 1.null==undefined")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("undefined")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// true")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("h4",{attrs:{id:"_2-0-0"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-0-0"}},[t._v("#")]),t._v(" 2.+0==-0")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// true")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("h4",{attrs:{id:"_3-typeof-nan"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-typeof-nan"}},[t._v("#")]),t._v(" 3.typeof NaN")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typeof")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("NaN")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// number")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("h4",{attrs:{id:"_4-typeof-null"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-typeof-null"}},[t._v("#")]),t._v(" 4.typeof null")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typeof")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// object")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])])])}),[],!1,null,null,null);s.default=n.exports}}]);