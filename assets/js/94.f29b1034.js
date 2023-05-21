(window.webpackJsonp=window.webpackJsonp||[]).push([[94],{690:function(s,t,a){"use strict";a.r(t);var n=a(24),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h3",{attrs:{id:"_1-什么是-bem-命名规范"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-什么是-bem-命名规范"}},[s._v("#")]),s._v(" 1. 什么是 BEM 命名规范")]),s._v(" "),a("p",[s._v("Bem 是块（block）、元素（element）、修饰符（modifier）的简写，由 Yandex 团队提出的一种前端 CSS 命名方法论。")]),s._v(" "),a("blockquote",[a("p",[s._v("-  中划线 ：仅作为连字符使用，表示某个块或者某个子元素的多单词之间的连接记号。")])]),s._v(" "),a("blockquote",[a("p",[s._v("__  双下划线：双下划线用来连接块和块的子元素")])]),s._v(" "),a("blockquote",[a("p",[s._v("_   单下划线：单下划线用来描述一个块或者块的子元素的一种状态")])]),s._v(" "),a("p",[s._v("BEM 是一个简单又非常有用的命名约定。让你的前端代码更容易阅读和理解，更容易协作，更容易控制，更加健壮和明确，而且更加严密。")]),s._v(" "),a("h4",{attrs:{id:"_1-1-bem-命名模式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-bem-命名模式"}},[s._v("#")]),s._v(" 1.1 BEM 命名模式")]),s._v(" "),a("p",[s._v("BEM 命名约定的模式是：")]),s._v(" "),a("div",{staticClass:"language-css line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[s._v(".block")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[s._v(".block__element")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[s._v(".block--modifier")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("ul",[a("li",[s._v("每一个块(block)名应该有一个命名空间（前缀）\n        "),a("ul",[a("li",[a("code",{staticClass:"default"},[s._v("block")]),s._v(" 代表了更高级别的抽象或组件。")]),s._v(" "),a("li",[a("code",{staticClass:"default"},[s._v("block__element")]),s._v(" 代表 .block 的后代，用于形成一个完整的 .block 的整体。")]),s._v(" "),a("li",[a("code",{staticClass:"default"},[s._v("block--modifier")]),s._v(" 代表 .block 的不同状态或不同版本。\n            使用两个连字符和下划线而不是一个，是为了让你自己的块可以用单个连字符来界定。如：")])])])]),s._v(" "),a("div",{staticClass:"language-css line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[s._v(".sub-block__element")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[s._v(".sub-block--modifier")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("h4",{attrs:{id:"_1-2-bem-命名法的好处"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-bem-命名法的好处"}},[s._v("#")]),s._v(" 1.2 BEM 命名法的好处")]),s._v(" "),a("p",[s._v("BEM的关键是，可以获得更多的描述和更加清晰的结构，从其名字可以知道某个标记的含义。于是，通过查看 HTML 代码中的 class 属性，就能知道元素之间的关联。")]),s._v(" "),a("p",[s._v("常规的命名法示例：")]),s._v(" "),a("div",{staticClass:"language-css line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[s._v("<div class="),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"article"')]),s._v(">\n    <div class="),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"body"')]),s._v(">\n        <button class="),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"button-primary"')]),s._v("></button>\n        <button class="),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"button-success"')]),s._v("></button>\n    </div>\n</div>\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("ul",[a("li",[s._v("这种写法从 DOM 结构和类命名上可以了解每个元素的意义，但无法明确其真实的层级关系。在 css 定义时，也必须依靠层级选择器来限定约束作用域，以避免跨组件的样式污染。")])]),s._v(" "),a("p",[s._v("使用了 BEM 命名方法的示例：")]),s._v(" "),a("div",{staticClass:"language-css line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[s._v("<div class="),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"article"')]),s._v(">\n    <div class="),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"article__body"')]),s._v(">\n        <div class="),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"tag"')]),s._v("></div>\n        <button class="),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"article__button--primary"')]),s._v("></button>\n        <button class="),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"article__button--success"')]),s._v("></button>\n    </div>\n</div>\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("ul",[a("li",[s._v("通过 BEM 命名方式，模块层级关系简单清晰，而且 css 书写上也不必作过多的层级选择。")])]),s._v(" "),a("h3",{attrs:{id:"_2-如何使用-bem-命名法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-如何使用-bem-命名法"}},[s._v("#")]),s._v(" 2. 如何使用 BEM 命名法")]),s._v(" "),a("h4",{attrs:{id:"_2-1-什么时候应该用-bem-格式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-什么时候应该用-bem-格式"}},[s._v("#")]),s._v(" 2.1 什么时候应该用 BEM 格式")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("使用 BEM 的诀窍是，你要知道什么时候哪些东西是应该写成 BEM 格式的。")])]),s._v(" "),a("li",[a("p",[s._v("并不是每个地方都应该使用 BEM 命名方式。当需要明确关联性的模块关系时，应当使用 BEM 格式。")])]),s._v(" "),a("li",[a("p",[s._v("比如只是一条公共的单独的样式，就没有使用 BEM 格式的意义：")])])]),s._v(" "),a("div",{staticClass:"language-css line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[s._v(".hide")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("display")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" none "),a("span",{pre:!0,attrs:{class:"token important"}},[s._v("!important")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("h4",{attrs:{id:"_2-2-在-css-预处理器中使用-bem-格式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-在-css-预处理器中使用-bem-格式"}},[s._v("#")]),s._v(" 2.2 在 CSS 预处理器中使用 BEM 格式")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("BEM 的一个槽点是，命名方式长而难看，书写不雅。相比 BEM 格式带来的便利来说，我们应客观看待。")])]),s._v(" "),a("li",[a("p",[s._v("而且，一般来说会使用通过 LESS/SASS 等预处理器语言来编写 CSS，利用其语言特性书写起来要简单很多。")])])]),s._v(" "),a("blockquote",[a("p",[s._v("以 SCSS 为例：")])]),s._v(" "),a("div",{staticClass:"language-css line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[s._v(".article")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("max-width")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 1200px"),a("span",{pre:!0,attrs:{class:"token selector"}},[s._v(";\n    &__body")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("padding")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 20px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token selector"}},[s._v("&__button")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("padding")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 5px 8px"),a("span",{pre:!0,attrs:{class:"token selector"}},[s._v(";\n        &--primary")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("background")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" blue"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token selector"}},[s._v("&--success")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("background")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" green"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br")])]),a("h4",{attrs:{id:"_2-3-在流行框架的组件中使用-bem-格式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-在流行框架的组件中使用-bem-格式"}},[s._v("#")]),s._v(" 2.3 在流行框架的组件中使用 BEM 格式")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("在当前流行的 "),a("code",{staticClass:"default"},[s._v("Vue.js")]),s._v(" / "),a("code",{staticClass:"default"},[s._v("React")]),s._v(" / `Angular 等前端框架中，都有 CSS 组件级作用域的编译实现，其基本原理均为利用 CSS 属性选择器特性，为不同的组件生成不同的属性选择器。")])]),s._v(" "),a("li",[a("p",[s._v("当你选择了这种局部作用域的写法时，在较小的组件中，BEM 格式可能显得没那么重要。但对于公共的、全局性的模块样式定义，还是推荐使用 BEM 格式。")])]),s._v(" "),a("li",[a("p",[s._v("另外，对于对外发布的公共组件来说，一般为了风格的可定制性，都不会使用这种局部作用域方式来定义组件样式。此时使用 BEM 格式也会大显其彩。")])])]),s._v(" "),a("h4",{attrs:{id:"_2-4-避免-block-el1-el2-的格式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-4-避免-block-el1-el2-的格式"}},[s._v("#")]),s._v(" 2.4 避免 .block__el1__el2 的格式")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("在深层次嵌套的 DOM")])]),s._v(" "),a("li",[a("p",[s._v("结构下，应避免过长的样式名称定义。")])]),s._v(" "),a("li",[a("p",[s._v("层级最后不要超过 4 级，不然增加阅读的理解难度")])])])])}),[],!1,null,null,null);t.default=e.exports}}]);