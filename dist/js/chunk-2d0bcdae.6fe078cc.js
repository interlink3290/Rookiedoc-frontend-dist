(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0bcdae"],{"2a09":function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("el-container",{staticStyle:{height:"100%",width:"100%",border:"1px"}},[i("el-main",[i("el-row",t._l(t.Files,(function(e){return i("el-col",{key:e.id,attrs:{span:4},nativeOn:{click:function(i){return t.detail(e)}}},[i("el-card",{directives:[{name:"contextmenu",rawName:"v-contextmenu:contextmenu",arg:"contextmenu"}],staticStyle:{"margin-left":"20px"},attrs:{shadow:"hover"}},[i("div",{staticClass:"card-body"},[i("div",{staticClass:"card-picture"},[i("span",{staticStyle:{"font-size":"40px"}},[i("i",{staticClass:"el-icon-document"})])]),i("div",{staticClass:"card-word"},[i("div",{staticStyle:{"font-size":"15px"}},[t._v(t._s(e.title))])])])]),i("v-contextmenu",{ref:"contextmenu",refInFor:!0,staticStyle:{width:"180px"},attrs:{theme:"bright"}},[i("v-contextmenu-item",{on:{click:t.handleRightMenuClick}},[i("el-icon",{staticClass:"el-icon-folder-opened"}),i("span",{staticStyle:{"margin-left":"3px"},on:{click:function(i){return t.detail(e)}}},[t._v("打开")])],1),i("v-contextmenu-item",{on:{click:t.handleRightMenuClick}},[i("el-icon",{staticClass:"el-icon-setting"}),i("span",{staticStyle:{"margin-left":"3px"},on:{click:t.showModal}},[t._v("权限设置")])],1),i("v-contextmenu-item",{on:{click:t.handleRightMenuClick}},[i("el-icon",{staticClass:"el-icon-delete"}),i("span",{staticStyle:{"margin-left":"3px"}},[t._v("删除")])],1),i("v-contextmenu-item",{on:{click:t.handleRightMenuClick}},[i("el-icon",{staticClass:"el-icon-chat-line-round"}),i("span",{staticStyle:{"margin-left":"3px"}},[t._v("分享")])],1)],1)],1)})),1),[i("div",[i("a-modal",{staticStyle:{"z-index":"10010"},attrs:{title:"选择权限","ok-text":"确认","cancel-text":"取消"},on:{ok:t.hideModal},model:{value:t.visible,callback:function(e){t.visible=e},expression:"visible"}},[t._v(" 设置权限 "),i("a-select",{staticStyle:{"padding-left":"30px"},attrs:{"default-value":"仅自己可见"},on:{change:t.handleChange}},[i("a-select-option",{attrs:{value:"仅自己可见"}},[t._v("仅自己可见")]),i("a-select-option",{attrs:{value:"他人可查看"}},[t._v("他人可查看")]),i("a-select-option",{attrs:{value:"他人可编辑"}},[t._v("他人可编辑")])],1)],1)],1)],i("el-pagination",{attrs:{background:"",layout:"prev, pager, next",total:t.pageCount}})],2)],1)},a=[],o=i("4ec3"),s={name:"Recent",components:{},data:function(){return{isLogin:!1,visible:!1,userinfo:{id:"",username:"",email:""},page:{page:1,page_size:10},pageCount:1,Files:[],activeIndex:"1"}},created:function(){var t=JSON.parse(localStorage.getItem("user"));console.log(t.id>0),t.id>0?(this.isLogin=!0,this.getUserInfo(),this.getFileList()):this.isLogin=!1},watch:{},methods:{toIndex:function(){this.$router.push({path:"/"})},toEditor:function(){this.$router.push({path:"/editor"})},toPmsg:function(){var t=JSON.parse(localStorage.getItem("user")),e=t.id;console.log(e),this.$router.push({path:"/pmsg",query:{id:e}})},toRecent:function(){this.$router.push({path:"/recent"})},toFavour:function(){this.$router.push({path:"/favour"})},toMydoc:function(){this.$router.push({path:"/mydoc"})},toTrash:function(){this.$router.push({path:"/trash"})},showModal:function(){this.visible=!0},hideModal:function(){this.visible=!1},getUserInfo:function(){},getRecentDoc:function(){},handleRightMenuClick:function(){},getFileList:function(){var t=this;Object(o["m"])({id:1}).then((function(e){t.Files=e.data.user_contents,console.log(t.Files)}))},detail:function(t){var e=t.id;console.log(e),this.$router.push({path:"/editor",query:{id:e}})}}},c=s,l=i("2877"),r=Object(l["a"])(c,n,a,!1,null,"22ba041d",null);e["default"]=r.exports}}]);
//# sourceMappingURL=chunk-2d0bcdae.6fe078cc.js.map