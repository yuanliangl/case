(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b1226068"],{9088:function(t,e,a){"use strict";var l=a("a03a"),s=a.n(l);s.a},a03a:function(t,e,a){},bc13:function(t,e,a){"use strict";a.r(e);var l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home"},[a("div",{staticClass:"mian-box"},[a("div",{staticClass:"form-box"},[a("el-form",{staticClass:"demo-form-inline",attrs:{inline:!0}},[a("el-col",{staticClass:"line",attrs:{span:6,offset:4}},[a("el-form-item",{attrs:{label:"商品名称:"}},[a("el-input",{attrs:{placeholder:"输入商品名称"}})],1)],1),a("el-form-item",{attrs:{label:"商品分组"}},[a("el-select",{attrs:{placeholder:"全部",value:""}},[a("el-option",{attrs:{label:"家具日用",value:"shai"}})],1)],1),a("el-form-item",{attrs:{label:"商品类型"}},[a("el-select",{attrs:{placeholder:"全部"},model:{value:t.cates,callback:function(e){t.cates=e},expression:"cates"}},t._l(t.cate,(function(t){return a("el-option",{key:t._id,attrs:{label:t.cate_zh,value:t.cate}})})),1)],1),a("div",{staticClass:"f-bottom"},[a("el-col",{staticClass:"line sales",attrs:{span:4,offset:4}},[a("el-form-item",{attrs:{label:"销量:"}},[a("el-input"),a("span",[t._v("-")]),a("el-input")],1)],1),a("el-col",{staticClass:"line sales",attrs:{span:4}},[a("el-form-item",{attrs:{label:"价格:"}},[a("el-input"),a("span",[t._v("-")]),a("el-input")],1)],1),a("el-col",{staticClass:"line",attrs:{span:6}},[a("el-form-item",{attrs:{label:"库存扣减方式:"}},[a("el-select",{attrs:{placeholder:"全部",value:""}},[a("el-option",{attrs:{label:">1000",value:"ahai"}}),a("el-option",{attrs:{label:">100",value:"dfj"}})],1)],1)],1),a("el-form-item",[a("el-button",{attrs:{type:"primary"}},[t._v("查询")])],1)],1)],1)],1),a("div",{staticClass:"table"},[a("el-tabs",{attrs:{type:"border-card"}},[a("el-tab-pane",{attrs:{label:"全部"}},[a("div",{staticClass:"tab-box"},[a("div",{staticStyle:{"margin-top":"20px"}},[a("el-checkbox",[t._v("当页全选")]),a("el-button",[t._v("下架")]),a("el-button",[t._v("删除")]),a("el-button",[t._v("批量删除")]),a("el-button",[t._v("取消选择")])],1),a("el-table",{staticClass:"tab-1",attrs:{data:t.Data,"max-height":"400",border:""}},[a("el-table-column",{attrs:{type:"selection",width:"55"}}),a("el-table-column",{attrs:{fixed:"",prop:"name",label:"商品名",width:"250"}}),a("el-table-column",{attrs:{fixed:"",prop:"img",label:"图片",width:"120"},scopedSlots:t._u([{key:"default",fn:function(t){return[a("img",{staticClass:"img-box",attrs:{src:t.row.img,alt:t.row.name}})]}}])}),a("el-table-column",{attrs:{prop:"price",label:"价格（元）",width:"100"}}),a("el-table-column",{attrs:{prop:"cate",label:"品类",width:"120"}}),a("el-table-column",{attrs:{prop:"city",label:"是否推荐",width:"100"}}),a("el-table-column",{attrs:{fixed:"right",label:"操作",width:"200"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{type:"text",size:"small"}},[t._v("编辑")]),a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){return t.handleClick(e.row._id)}}},[t._v("删除")]),a("el-button",{attrs:{type:"text",size:"small"}},[t._v("推广")]),a("el-button",{attrs:{type:"text",size:"small"}},[t._v("复制")])]}}])})],1)],1)]),a("el-tab-pane",{attrs:{label:"销售中"}},[t._v("销售中")]),a("el-tab-pane",{attrs:{label:"销售中"}},[t._v("已售馨")]),a("el-tab-pane",{attrs:{label:"销售中"}},[t._v("定时任务补偿")]),a("div",{staticClass:"pagination"},[a("el-pagination",{attrs:{background:"","current-page":t.page,layout:"prev, pager, next, jumper",total:1e3,"page-size":10},on:{"current-change":t.change}},[t._v(" > ")])],1)],1)],1)])])},s=[],o={name:"Home",data:function(){return{page:1,Data:[],cate:[],cates:""}},mounted:function(){var t=this;this.getHotGoodList(),this.$http.getAllCates().then((function(e){e.unshift({cate_zh:"全部"}),t.cate=e.data}))},watch:{cates:function(){this.getHotGoodList()}},methods:{getHotGoodList:function(){var t=this,e={hot:!1};this.$http.getHotGoodList(e).then((function(e){console.log("res",e),t.Data=e.data}))},change:function(t){this.page=t,this.getHotGoodList()},handleClick:function(t){var e=this;console.log("id",t);var a={id:t};this.$http.delGood(a).then((function(t){console.log(t),e.getHotGoodList(),confirm("确定删除吗？")}))}}},i=o,n=(a("9088"),a("2877")),r=Object(n["a"])(i,l,s,!1,null,"875c456e",null);e["default"]=r.exports}}]);
//# sourceMappingURL=chunk-b1226068.0ec17ec8.js.map