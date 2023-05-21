(window.webpackJsonp=window.webpackJsonp||[]).push([[16,29],{352:function(t,o,e){},448:function(t,o,e){"use strict";var n=e(352);e.n(n).a},453:function(t,o,e){},522:function(t,o,e){"use strict";e.r(o);e(97);var n={name:"code-demo",props:{title:{type:String,default:""},introduction:{type:String,default:""},height:{type:Number,default:100},arrowAnimation:{type:Boolean,default:!0}},data:function(){return{data:"",hover_animation:!1,code_height:0}},methods:{showCode:function(){0===this.code_height?this.code_height=this.height:this.code_height=0}}},s=(e(448),e(24)),i=Object(s.a)(n,(function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{staticClass:"shn-el-demo-block"},[""!=t.title?e("h3",{staticClass:"demo-block-title"},[t._v(t._s(t.title))]):t._e(),t._v(" "),""!=t.introduction?e("p",{staticClass:"demo-block-introduction"},[t._v(t._s(t.introduction))]):t._e(),t._v(" "),e("div",{staticClass:"demo-block",on:{mouseout:function(o){t.arrowAnimation&&(t.hover_animation=!1)},mouseover:function(o){t.arrowAnimation&&(t.hover_animation=!0)}}},[e("div",{staticClass:"source"},[t._t("demo")],2),t._v(" "),e("div",{staticClass:"code",style:{height:t.code_height+"px"}},[e("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs"}]},[t._v("        "),t._t("code"),t._v("\n      ")],2)]),t._v(" "),e("div",{staticClass:"demo-block-control",on:{click:function(o){return t.showCode()}}},[e("i",{staticClass:"shni",class:{hovering_i:t.hover_animation||!t.arrowAnimation,"el-icon-caret-bottom":0===t.code_height,"el-icon-caret-top":0!==t.code_height}}),t._v(" "),e("span",{class:{hovering_span:t.hover_animation||!t.arrowAnimation}},[t._v("\n        "+t._s(0===t.code_height?"显示代码":"隐藏代码")+"\n      ")])])])])}),[],!1,null,"a9979b42",null);o.default=i.exports},544:function(t,o,e){"use strict";var n=e(453);e.n(n).a},629:function(t,o,e){"use strict";e.r(o);var n={components:{CodeDemo:e(522).default},props:{value:{type:String,default:"409EFF"},text:{type:String,default:"BRAND COLOR"},sub:{type:Boolean,default:!0}},data:function(){return{curve:{code:{html:'\n          <div class="box box-curve"></div>\n          ',css:"\n          .box{\n            width: 400px;\n            height: 150px;\n          }\n\n          .box-curve{\n            position: relative;\n            box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);\n            background: #fff;\n            &::after, &::before{\n              z-index: -1;\n              content: '';\n              position: absolute;\n              top: 50%;\n              bottom: 0px;\n              left: 20px;\n              right: 20px;\n              box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);\n              border-radius: 100px/10px;\n            }\n          }\n          "}},sharpEdge:{code:{html:'\n          <div class="box box-sharp-edge"></div>\n          ',css:"\n          .box{\n            width: 400px;\n            height: 150px;\n          }\n\n          .box-sharp-edge {\n            position: relative;\n            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);\n            background: #fff;\n            &::after{\n              z-index: -1;\n              content: '';\n              position: absolute;\n              background: transparent;\n              top: 50%;\n              bottom: 12px;\n              left: 10px;\n              right: 10px;\n              box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);\n              transform: skew(12deg) rotate(4deg)\n            }\n            &::before{\n              z-index: -1;\n              content: '';\n              position: absolute;\n              background: transparent;\n              top: 50%;\n              bottom: 12px;\n              left: 10px;\n              right: 10px;\n              box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);\n              transform: skew(-12deg) rotate(-4deg)\n            }\n          }\n          "}}}},methods:{}},s=(e(544),e(24)),i=Object(s.a)(n,(function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{staticClass:"css-shadow"},[e("h3",[t._v("基础用法")]),t._v(" "),e("div",{staticClass:"box box-1"}),t._v(" "),e("h6",[t._v("基础投影 box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04)")]),t._v(" "),e("div",{staticClass:"box box-2"}),t._v(" "),e("h6",[t._v("浅色投影 box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1)")]),t._v(" "),e("div",{staticClass:"box box-3"}),t._v(" "),e("h6",[t._v("深色投影 box-shadow: 0 2px 8px rgba(0,0,0,0.2)")]),t._v(" "),e("CodeDemo",{attrs:{height:543,title:"曲线投影",id:"shadow-curve"},scopedSlots:t._u([{key:"demo",fn:function(){return[e("div",{staticClass:"box box-curve"})]},proxy:!0},{key:"code",fn:function(){return[e("code",{staticClass:"html"},[t._v(t._s(t.fCode(t.curve.code.html)))]),t._v(" "),e("code",{staticClass:"css"},[t._v(t._s(t.fCode(t.curve.code.css)))])]},proxy:!0}])}),t._v(" "),e("CodeDemo",{attrs:{height:816,title:"翘边投影",id:"sharp-edge-curve"},scopedSlots:t._u([{key:"demo",fn:function(){return[e("div",{staticClass:"box box-sharp-edge"})]},proxy:!0},{key:"code",fn:function(){return[e("code",{staticClass:"html"},[t._v(t._s(t.fCode(t.sharpEdge.code.html)))]),t._v(" "),e("code",{staticClass:"css"},[t._v(t._s(t.fCode(t.sharpEdge.code.css)))])]},proxy:!0}])}),t._v(" "),e("CodeDemo",{attrs:{height:353,id:"sharp-edge-curve",title:"3D内嵌感"},scopedSlots:t._u([{key:"demo",fn:function(){return[e("div",{staticClass:"box box-4"}),t._v(" "),e("div",{staticClass:"box box-5"})]},proxy:!0},{key:"code",fn:function(){return[e("code",{staticClass:"css"},[t._v("\n        .box{\n        border: 1px solid #8f9092;\n        box-shadow: 0 4px 3px 1px #fcfcfc, 0 6px 8px #d6d7d9, 0 -4px 4px #cecfd1,\n        0 -6px 4px #fefefe, inset 0 0 3px 0 #cecfd1;\n        background-image: linear-gradient(\n        to top,\n        #d8d9db 0%,\n        #fff 80%,\n        #fdfdfd 100%\n        );\n        }\n      ")])]},proxy:!0}])})],1)}),[],!1,null,"00a48910",null);o.default=i.exports}}]);