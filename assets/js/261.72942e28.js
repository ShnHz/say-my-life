(window.webpackJsonp=window.webpackJsonp||[]).push([[261],{858:function(t,a,s){"use strict";s.r(a);var e=s(24),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h3",{attrs:{id:"正则语法参照表"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#正则语法参照表"}},[t._v("#")]),t._v(" 正则语法参照表")]),t._v(" "),s("h4",{attrs:{id:"表示位置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#表示位置"}},[t._v("#")]),t._v(" 表示位置")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("Code")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("Explain")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("Example")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("^")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("匹配开头")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[s("code",{staticClass:"default"},[t._v("'123'.replace(/^/, '0') //0123")])])]),t._v(" "),s("tr",[s("td",[t._v("$")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("匹配结尾")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[s("code",{staticClass:"default"},[t._v("'123'.replace(/$/, '0') //1230")])])]),t._v(" "),s("tr",[s("td",[t._v("\\b")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("单词的边界")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[s("code",{staticClass:"default"},[t._v("'1234.5'.replace(/\\b/g, '0') //012340.050")])])]),t._v(" "),s("tr",[s("td",[t._v("\\B")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("!(单词的边界)")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[s("code",{staticClass:"default"},[t._v("'1234.5'.replace(/\\B/g, '0') //1020304.5")])])]),t._v(" "),s("tr",[s("td",[t._v("(?=x)")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("正向先行断言，x前")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[s("code",{staticClass:"default"},[t._v("'123'.replace(/(?=2)/g, '0') //1023")])])]),t._v(" "),s("tr",[s("td",[t._v("(?!x)")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("负向先行断言，除了x前")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[s("code",{staticClass:"default"},[t._v("'123'.replace(/(?!2)/g, '0') //012030")])])]),t._v(" "),s("tr",[s("td",[t._v("(?<=x)")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("正向后行断言，x后")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[s("code",{staticClass:"default"},[t._v("'123'.replace(/(?<=2)/g, '0') //1203")])])]),t._v(" "),s("tr",[s("td",[t._v("(?<!x)")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("负向后行断言，除了x后")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[s("code",{staticClass:"default"},[t._v("'123'.replace(/(?<!2)/g, '0') //010230")])])])])]),t._v(" "),s("h4",{attrs:{id:"元字符"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#元字符"}},[t._v("#")]),t._v(" 元字符")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("Code")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("Explain")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("Example")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v(".")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("匹配任意单个字符除了换行符")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[s("code",{staticClass:"default"},[t._v("'a a0 a1'.match(/a./g) //[a0,a1]")])])]),t._v(" "),s("tr",[s("td",[t._v("{m,n}")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("匹配num个大括号之前的字符或字符集（n<=num<=m）")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[s("code",{staticClass:"default"},[t._v("'123 1223 12223 122223'.match(/12{2,3}3/g) //[1223,12223]")])])]),t._v(" "),s("tr",[s("td",[t._v("[xyz]")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("匹配方括号内的任意字符")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[s("code",{staticClass:"default"},[t._v("'a0b a1b a2b'.match(/a[12345]b/g) //[a1b,a2b]")])])]),t._v(" "),s("tr",[s("td",[t._v("[^]")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("匹配除了方括号里的任意字符")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[s("code",{staticClass:"default"},[t._v("'a0 a1'.match(/a[^0]/g) //[a1]")])])]),t._v(" "),s("tr",[s("td",[t._v("*")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("匹配 >=0 个重复的在*号之前的符号")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[s("code",{staticClass:"default"},[t._v("'a0 bb0 b1'.match(/b*0/g) //[0,bb0]")])])]),t._v(" "),s("tr",[s("td",[t._v("+")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("匹配 >=1 个重复的在+号之前的符号")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[s("code",{staticClass:"default"},[t._v("'a0 bb0 b1'.match(/b+0/g) //[bb0]")])])]),t._v(" "),s("tr",[s("td",[t._v("?")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("标记 0,1 个重复的在?号之前的符号")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[s("code",{staticClass:"default"},[t._v("'a0 bb0 b1'.match(/b?0/g) //[0,b0]")])])]),t._v(" "),s("tr",[s("td",[t._v("(xyz)")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("字符集，匹配与 xyz 完全相等的字符串")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[s("code",{staticClass:"default"},[t._v("'abc abbc abbbc'.match(/a(bb)c/g) //[abbc]")])])]),t._v(" "),s("tr",[s("td",[t._v("|")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("或运算，匹配符号前或后的字符")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[s("code",{staticClass:"default"},[t._v("'abc aac acc'.match(/a(a|b)c/g)) //[abc,aac]")])])]),t._v(" "),s("tr",[s("td",[t._v("\\")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("转义字符，用于匹配一些保留的字符")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[s("code",{staticClass:"default"},[t._v("[ ] ( ) { } . * + ? ^ $ \\ |")])])])])]),t._v(" "),s("h4",{attrs:{id:"简写字符集"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#简写字符集"}},[t._v("#")]),t._v(" 简写字符集")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("Code")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("Explain")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("Example")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v(".")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("除换行符外的所有字符")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}})]),t._v(" "),s("tr",[s("td",[t._v("\\w")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("匹配所有字母数字，等同于 [a-zA-Z0-9_]")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}})]),t._v(" "),s("tr",[s("td",[t._v("\\W")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("匹配所有非字母数字，即符号，等同于：[^\\w]")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}})]),t._v(" "),s("tr",[s("td",[t._v("\\d")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("匹配数字：[0-9]")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}})]),t._v(" "),s("tr",[s("td",[t._v("\\D")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("匹配非数字：[^\\d]")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}})]),t._v(" "),s("tr",[s("td",[t._v("\\s")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("匹配所有空格字符，等同于：[\\t\\n\\f\\r\\p{Z}]")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}})]),t._v(" "),s("tr",[s("td",[t._v("\\S")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("匹配所有非空格字符：[^\\s]：[^\\d]")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}})]),t._v(" "),s("tr",[s("td",[t._v("\\f")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("匹配一个换页符")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}})]),t._v(" "),s("tr",[s("td",[t._v("\\n")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("匹配一个换行符")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}})]),t._v(" "),s("tr",[s("td",[t._v("\\r")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("匹配一个回车符")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}})]),t._v(" "),s("tr",[s("td",[t._v("\\t")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("匹配一个制表符")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}})]),t._v(" "),s("tr",[s("td",[t._v("\\v")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("匹配一个垂直制表符")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}})]),t._v(" "),s("tr",[s("td",[t._v("\\p")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("匹配 CR/LF (等同 \\r\\n)，用来匹配 DOS 行终止符")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}})])])]),t._v(" "),s("h3",{attrs:{id:"下划线命名转驼峰命名"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#下划线命名转驼峰命名"}},[t._v("#")]),t._v(" 下划线命名转驼峰命名")]),t._v(" "),s("div",{staticClass:"language-JS line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'hello_world'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("replace")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token regex"}},[t._v("/_([a-zA-Z])/g")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("p1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("p2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" p2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("toUpperCase")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br")])]),s("views-tools-ChangYongZhengZeBiaoDaShiGongJu",{attrs:{fn:function(t){return t.replace(/_([a-zA-Z])/g,(function(t,a){return a.toUpperCase()}))}}}),t._v(" "),s("h3",{attrs:{id:"驼峰命名命名转下划线命名"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#驼峰命名命名转下划线命名"}},[t._v("#")]),t._v(" 驼峰命名命名转下划线命名")]),t._v(" "),s("div",{staticClass:"language-JS line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'helloWorld'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("replace")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token regex"}},[t._v("/([A-Z])/g")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("p1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'_'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" p1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("toLowerCase")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br")])]),s("views-tools-ChangYongZhengZeBiaoDaShiGongJu",{attrs:{fn:function(t){return t.replace(/([A-Z])/g,(function(t){return"_"+t.toLowerCase()}))},default:"helloWorld"}}),t._v(" "),s("h3",{attrs:{id:"是否是合法的十六进制颜色"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#是否是合法的十六进制颜色"}},[t._v("#")]),t._v(" 是否是合法的十六进制颜色")]),t._v(" "),s("div",{staticClass:"language-JS line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token regex"}},[t._v("/^#([0-9a-fA-F]{6}|[0-9a-fA-F]{3})$/")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("test")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'#000000'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("views-tools-ChangYongZhengZeBiaoDaShiGongJu",{attrs:{fn:function(t){return""+/^#([0-9a-fA-F]{6}|[0-9a-fA-F]{3})$/.test(t)},default:"#000000"}}),t._v(" "),s("h3",{attrs:{id:"提取自定义规则内容"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#提取自定义规则内容"}},[t._v("#")]),t._v(" 提取自定义规则内容")]),t._v(" "),s("p",[t._v('假设我的规则是"[]{}"，我需要提取中括号内以及大括号内的所有内容')]),t._v(" "),s("div",{staticClass:"language-JS line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'[Test]{Hello World}'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("match")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token regex"}},[t._v("/\\[(?<content>[^]*)\\]\\{(?<content2>[^]*)\\}/")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("views-tools-ChangYongZhengZeBiaoDaShiGongJu",{attrs:{fn:function(t){var a=t?t.match(/\[(?<content>[^]*)\]\{(?<content2>[^]*)\}/).groups:{};return a.content+" "+a.content2},default:"[Test]{Hello World}"}}),t._v(" "),s("h3",{attrs:{id:"千分位分割"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#千分位分割"}},[t._v("#")]),t._v(" 千分位分割")]),t._v(" "),s("div",{staticClass:"language-JS line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'123456789'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("replace")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token regex"}},[t._v("/(?!^)(?=(\\d{3})+$)/g")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("','")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("views-tools-ChangYongZhengZeBiaoDaShiGongJu",{attrs:{fn:function(t){return t.replace(/(?!^)(?=(\d{3})+$)/g,",")},default:"123456789"}}),t._v(" "),s("h3",{attrs:{id:"手机号3-4-4分割"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#手机号3-4-4分割"}},[t._v("#")]),t._v(" 手机号3-4-4分割")]),t._v(" "),s("div",{staticClass:"language-JS line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'12345678910'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("slice")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("11")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("replace")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token regex"}},[t._v("/(?<=\\d{3})\\d+/")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("p1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'-'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" p1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("replace")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token regex"}},[t._v("/(?<=[\\d-]{8})/")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("p1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'-'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" p1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br")])]),s("views-tools-ChangYongZhengZeBiaoDaShiGongJu",{attrs:{fn:function(t){return t.slice(0,11).replace(/(?<=\d{3})\d+/,(function(t){return"-"+t})).replace(/(?<=[\d-]{8})/,(function(t){return"-"+t}))},default:"12345678910"}}),t._v(" "),s("h3",{attrs:{id:"弱密码验证"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#弱密码验证"}},[t._v("#")]),t._v(" 弱密码验证")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("密码长度是6-12位")])]),t._v(" "),s("li",[s("p",[t._v("由数字、小写字符和大写字母组成")])]),t._v(" "),s("li",[s("p",[t._v("必须至少包括2种字符")])])]),t._v(" "),s("div",{staticClass:"language-JS line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token regex"}},[t._v("/(((?=.*\\d)((?=.*[a-z])|(?=.*[A-Z])))|(?=.*[a-z])(?=.*[A-Z]))^[a-zA-Z\\d]{6,12}$/")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("test")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Aa123456'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("views-tools-ChangYongZhengZeBiaoDaShiGongJu",{attrs:{fn:function(t){return/(((?=.*\d)((?=.*[a-z])|(?=.*[A-Z])))|(?=.*[a-z])(?=.*[A-Z]))^[a-zA-Z\d]{6,12}$/.test(t)+""},default:"Aa123456"}}),t._v(" "),s("h3",{attrs:{id:"_24小时制时间验证"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_24小时制时间验证"}},[t._v("#")]),t._v(" 24小时制时间验证")]),t._v(" "),s("div",{staticClass:"language-JS line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token regex"}},[t._v("/^(0?\\d|1\\d|2[0-3]):(0?|[1-5])\\d/")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("test")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'23:59'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("views-tools-ChangYongZhengZeBiaoDaShiGongJu",{attrs:{fn:function(t){return/^(0?\d|1\d|2[0-3]):(0?|[1-5])\d/.test(t)+""},default:"23:59"}}),t._v(" "),s("h3",{attrs:{id:"日期格式验证"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#日期格式验证"}},[t._v("#")]),t._v(" 日期格式验证")]),t._v(" "),s("div",{staticClass:"language-JS line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token regex"}},[t._v("/\\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12]\\d|3[01])/")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("test")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'2022-11-30'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("views-tools-ChangYongZhengZeBiaoDaShiGongJu",{attrs:{fn:function(t){return/\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])/.test(t)+""},default:"2022-11-30"}})],1)}),[],!1,null,null,null);a.default=n.exports}}]);