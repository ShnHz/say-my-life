(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{449:function(t,s,i){},538:function(t,s,i){"use strict";var a=i(449);i.n(a).a},625:function(t,s,i){"use strict";i.r(s);i(129),i(97);var a={props:{value:{type:String},number:{type:Number,default:0},imgType:{type:String,default:"jpg"}},mounted:function(){if(this.value&&this.number>10)for(var t=1;t<10;t++)this.imgsArr.push({src:"http://cdn.chenyingshuang.cn/".concat(this.value).concat(t,".").concat(this.imgType,"?imageMogr2/auto-orient")});else for(var s=1;s<this.number;s++)this.imgsArr.push({src:"http://cdn.chenyingshuang.cn/".concat(this.value).concat(s,".").concat(this.imgType,"?imageMogr2/auto-orient")})},data:function(){return{imgsArr:[],index:10}},methods:{getData:function(){if(this.number>this.index){for(var t=this.index;t<this.index+10&&!(t>this.number);t++)this.imgsArr.push({src:"http://cdn.chenyingshuang.cn/".concat(this.value).concat(t,".").concat(this.imgType,"?imageMogr2/auto-orient")});this.index=this.index+10}else this.$refs.waterfall.waterfallOver()}}},e=(i(538),i(24)),n=Object(e.a)(a,(function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"photo-wall"},[this._m(0),this._v(" "),s("div",{staticClass:"content"},[s("client-only",[s("vue-waterfall-easy",{ref:"waterfall",attrs:{gap:10,imgsArr:this.imgsArr,maxCols:3,mobileGap:0},on:{scrollReachBottom:this.getData}},[s("div",{attrs:{slot:"waterfall-over"},slot:"waterfall-over"},[s("p",{staticClass:"over-p"},[this._v("没有啦~")])])])],1)],1)])}),[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"header"},[s("div",{staticClass:"button",staticStyle:{background:"#FE7A79"}}),this._v(" "),s("div",{staticClass:"button",staticStyle:{background:"#F7CD8E"}}),this._v(" "),s("div",{staticClass:"button",staticStyle:{background:"#A8D898"}})])}],!1,null,"11abd620",null);s.default=n.exports}}]);