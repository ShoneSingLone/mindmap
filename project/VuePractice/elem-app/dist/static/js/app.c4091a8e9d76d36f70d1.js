webpackJsonp([1],{"7fXZ":function(t,e){},NHnr:function(t,e,s){"use strict";function a(t){s("lBlK")}function n(t){s("cy6N")}function r(t){s("ygvR")}function i(t){s("fWNb")}function l(t){s("VU7V")}Object.defineProperty(e,"__esModule",{value:!0});var o=s("7+uW"),c=s("mtWM"),u=s.n(c),d=s("Rf8U"),p=s.n(d),v=(s("7fXZ"),{0:"decrease",1:"discount",2:"special",3:"invoice",4:"guarantee"}),_={name:"v-header",created:function(){console.log(this.seller)},props:{seller:{type:Object}},computed:{sellerDescription:function(){return this.seller&&this.seller.supports?this.seller.supports[0].description:""},supportIconClass:function(){return this.seller&&this.seller.supports?v[this.seller.supports[0].type]:""}},data:function(){return{}}},m=function(){var t=this,e=t.$createElement,s=t._self._c||e;return t.seller?s("div",{staticClass:"header"},[s("div",{staticClass:"content-wrapper"},[s("div",{staticClass:"avatar"},[s("img",{attrs:{width:"64",heifht:"64",src:t.seller.avatar,alt:""}})]),t._v(" "),s("div",{staticClass:"content"},[s("div",{staticClass:"title"},[s("span",{staticClass:"brand"}),t._v(" "),s("span",{staticClass:"name"},[t._v(t._s(t.seller.name)+" ")])]),t._v(" "),s("div",{staticClass:"description"},[t._v("\n        "+t._s(t.seller.description)+"/"+t._s(t.seller.deliveryTime)+"分钟送达\n      ")]),t._v(" "),t.sellerDescription?s("div",{staticClass:"support"},[s("span",{staticClass:"icon",class:t.supportIconClass}),t._v(" "),s("span",{staticClass:"text"},[t._v(t._s(t.sellerDescription))])]):t._e()]),t._v(" "),t.sellerDescription?s("div",{staticClass:"support-count"},[s("span",{staticClass:"count"},[t._v(t._s(t.seller.supports.length)+"个")]),t._v(" "),s("i",{staticClass:"icon-keyboard_arrow_right"})]):t._e()]),t._v(" "),s("div",{staticClass:"bulletin-wrapper"},[s("span",{staticClass:"bulletin-title"}),t._v(" "),s("span",{staticClass:"bulletin-text"},[t._v(t._s(t.seller.bulletin))]),t._v(" "),s("i",{staticClass:"icon-keyboard_arrow_right"})]),t._v(" "),s("div",{staticClass:"background"},[s("img",{attrs:{src:t.seller.avatar,width:"100%",height:"100%"}})])]):t._e()},f=[],h={render:m,staticRenderFns:f},C=h,g=s("VU/8"),b=a,w=g(_,C,!1,b,"data-v-4e52dfb3",null),y=w.exports,k={name:"v-tab",data:function(){return{userId:"shone"}}},I=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ul",{staticClass:"tab"},[s("li",{staticClass:"tab-item"},[s("router-link",{attrs:{to:"{ name: 'goods', params: { userId: 123 }}"}},[t._v("商品")])],1),t._v(" "),s("li",{staticClass:"tab-item"},[s("router-link",{attrs:{to:"{ name: 'ratings', params: { userId: 123 }}"}},[t._v("评论")])],1),t._v(" "),s("li",{staticClass:"tab-item"},[s("router-link",{attrs:{to:"{ name: 'seller', params: { userId: 123 }}"}},[t._v("商家")])],1)])},x=[],U={render:I,staticRenderFns:x},V=U,R=s("VU/8"),N=n,E=R(k,V,!1,N,"data-v-fb16944e",null),F=E.exports,j={name:"v-header",data:function(){return{msg:"This is header"}}},H=function(){var t=this,e=t.$createElement;return(t._self._c||e)("H1",[t._v(t._s(t.msg))])},T=[],$={render:H,staticRenderFns:T},z=$,D=s("VU/8"),K=r,M=D(j,z,!1,K,"data-v-89cd0a0c",null),W=M.exports,X={data:function(){return{seller:{}}},beforeCreate:function(){console.log("App beforeCreate");var t=this,e={headers:{"X-LC-Id":"p82PkF9h8rjUrNEwyioydpp4-gzGzoHsz","X-LC-Key":"y24Ms9w7tq0zswLMdehwK2km","Content-Type":"application/json"}},s={seller:"5a1986508d6d81006271d0fb",ratings:"5a1986508d6d81006271d0fb",goods:"5a1986508d6d81006271d0fa"};t.axios.get("https://p82pkf9h.api.lncld.net/1.1/classes/json/"+s.seller,e).then(function(e){200===e.status&&(t.seller=e.data.data_contents[0])}).catch(function(t){console.log(t)})},created:function(){console.log("App created")},components:{"v-header":y,"v-tab":F,"v-content":W}},L=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("main",{attrs:{id:"app"}},[s("div",{staticClass:"header"},[s("v-header",{attrs:{seller:t.seller}})],1),t._v(" "),s("ul",{staticClass:"tab border-1px"},[s("li",{staticClass:"tab-item"},[s("router-link",{attrs:{to:{name:"goods",params:{userId:123}}}},[t._v("商品")])],1),t._v(" "),s("li",{staticClass:"tab-item"},[s("router-link",{attrs:{to:{name:"ratings",params:{userId:123}}}},[t._v("评论")])],1),t._v(" "),s("li",{staticClass:"tab-item"},[s("router-link",{attrs:{to:{name:"seller",params:{userId:123}}}},[t._v("商家")])],1)]),t._v(" "),s("router-view"),t._v(" "),s("div",{staticClass:"content"},[s("v-content")],1)],1)},q=[],A={render:L,staticRenderFns:q},B=A,O=s("VU/8"),P=i,Z=O(X,B,!1,P,null,null),G=Z.exports,J=s("/ocq"),Q={name:"v-goods",data:function(){return{msg:"This is goods"}}},S=function(){var t=this,e=t.$createElement;return(t._self._c||e)("H1",[t._v(t._s(t.msg))])},Y=[],tt={render:S,staticRenderFns:Y},et=tt,st=s("VU/8"),at=l,nt=st(Q,et,!1,at,"data-v-3b82b690",null),rt=nt.exports;o.a.use(J.a);var it=new J.a({routes:[{path:"s",name:"login.sucess",component:rt}]}),lt=new J.a({routes:[{path:"/goods",name:"goods",component:rt},{path:"/ratings",name:"ratings",component:rt,children:it.routes},{path:"/seller",name:"seller",component:rt,children:it.routes}]});o.a.config.productionTip=!1,o.a.use(p.a,u.a),new o.a({el:"#app",router:lt,template:"<app/>",components:{app:G}})},VU7V:function(t,e){},cy6N:function(t,e){},fWNb:function(t,e){},lBlK:function(t,e){},ygvR:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.c4091a8e9d76d36f70d1.js.map