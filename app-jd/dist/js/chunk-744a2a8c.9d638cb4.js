(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-744a2a8c","chunk-630dee1a"],{9312:function(t,e,n){},ae73:function(t,e,n){},b1d2:function(t,e,n){"use strict";n.d(e,"f",(function(){return i})),n.d(e,"a",(function(){return a})),n.d(e,"d",(function(){return o})),n.d(e,"b",(function(){return r})),n.d(e,"c",(function(){return c})),n.d(e,"e",(function(){return s}));var i="#fff",a="van-hairline",o=a+"--top",r=a+"--bottom",c=a+"--surround",s=a+"--top-bottom"},d052:function(t,e,n){"use strict";n.r(e);var i,a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("van-tabbar",{attrs:{route:"","active-color":"#E93B3D"}},[n("van-tabbar-item",{attrs:{icon:"home-o",to:"/SouY"}},[t._v("我的")]),n("van-tabbar-item",{attrs:{icon:"search",dot:"",to:"/fx"}},[t._v("发现")]),n("van-tabbar-item",{attrs:{icon:"friends-o",badge:"5",to:"/Cart"}},[t._v("购物车")]),n("van-tabbar-item",{attrs:{icon:"setting-o",to:"/Me"}},[t._v("我的")])],1)},o=[],r=(n("b0c0"),n("ade3")),c=(n("68ef"),n("9d70"),n("3743"),n("ae73"),n("c31d")),s=n("d282"),u=n("a142"),h=n("48f4"),d=n("9884"),l=n("ad06"),b=n("6f2f"),f=Object(s["a"])("tabbar-item"),v=f[0],m=f[1],p=v({mixins:[Object(d["a"])("vanTabbar")],props:Object(c["a"])(Object(c["a"])({},h["c"]),{},{dot:Boolean,icon:String,name:[Number,String],info:[Number,String],badge:[Number,String],iconPrefix:String}),data:function(){return{active:!1}},computed:{routeActive:function(){var t=this.to,e=this.$route;if(t&&e){var n=Object(u["d"])(t)?t:{path:t},i=n.path===e.path,a=Object(u["b"])(n.name)&&n.name===e.name;return i||a}}},methods:{onClick:function(t){this.parent.onChange(this.name||this.index),this.$emit("click",t),Object(h["b"])(this.$router,this)},genIcon:function(t){var e=this.$createElement,n=this.slots("icon",{active:t});return n||(this.icon?e(l["a"],{attrs:{name:this.icon,classPrefix:this.iconPrefix}}):void 0)}},render:function(){var t=arguments[0],e=this.parent.route?this.routeActive:this.active,n=this.parent[e?"activeColor":"inactiveColor"];return t("div",{class:m({active:e}),style:{color:n},on:{click:this.onClick}},[t("div",{class:m("icon")},[this.genIcon(e),t(b["a"],{attrs:{dot:this.dot,info:Object(u["b"])(this.badge)?this.badge:this.info}})]),t("div",{class:m("text")},[this.slots("default",{active:e})])])}}),g=(n("9312"),n("b1d2")),x=Object(s["a"])("tabbar"),j=x[0],O=x[1],B=j({mixins:[Object(d["b"])("vanTabbar")],props:{route:Boolean,zIndex:[Number,String],placeholder:Boolean,activeColor:String,inactiveColor:String,value:{type:[Number,String],default:0},border:{type:Boolean,default:!0},fixed:{type:Boolean,default:!0},safeAreaInsetBottom:{type:Boolean,default:null}},data:function(){return{height:null}},computed:{fit:function(){return null!==this.safeAreaInsetBottom?this.safeAreaInsetBottom:this.fixed}},watch:{value:"setActiveItem",children:"setActiveItem"},mounted:function(){this.placeholder&&this.fixed&&(this.height=this.$refs.tabbar.getBoundingClientRect().height)},methods:{setActiveItem:function(){var t=this;this.children.forEach((function(e,n){e.active=(e.name||n)===t.value}))},onChange:function(t){t!==this.value&&(this.$emit("input",t),this.$emit("change",t))},genTabbar:function(){var t,e=this.$createElement;return e("div",{ref:"tabbar",style:{zIndex:this.zIndex},class:[(t={},t[g["e"]]=this.border,t),O({unfit:!this.fit,fixed:this.fixed})]},[this.slots()])}},render:function(){var t=arguments[0];return this.placeholder&&this.fixed?t("div",{class:O("placeholder"),style:{height:this.height+"px"}},[this.genTabbar()]):this.genTabbar()}}),I={components:(i={},Object(r["a"])(i,B.name,B),Object(r["a"])(i,p.name,p),i),mounted:function(){}},C=I,S=n("2877"),$=Object(S["a"])(C,a,o,!1,null,null,null);e["default"]=$.exports}}]);
//# sourceMappingURL=chunk-744a2a8c.9d638cb4.js.map