(function(t){function e(e){for(var i,l,r=e[0],s=e[1],c=e[2],p=0,d=[];p<r.length;p++)l=r[p],Object.prototype.hasOwnProperty.call(a,l)&&a[l]&&d.push(a[l][0]),a[l]=0;for(i in s)Object.prototype.hasOwnProperty.call(s,i)&&(t[i]=s[i]);u&&u(e);while(d.length)d.shift()();return o.push.apply(o,c||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],i=!0,r=1;r<n.length;r++){var s=n[r];0!==a[s]&&(i=!1)}i&&(o.splice(e--,1),t=l(l.s=n[0]))}return t}var i={},a={app:0},o=[];function l(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.m=t,l.c=i,l.d=function(t,e,n){l.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)l.d(n,i,function(e){return t[e]}.bind(null,i));return n},l.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(e,"a",e),e},l.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},l.p="";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],s=r.push.bind(r);r.push=e,r=r.slice();for(var c=0;c<r.length;c++)e(r[c]);var u=s;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";n("85ec")},"0d66":function(t,e,n){"use strict";n("7fa9")},"1f5a":function(t,e,n){"use strict";n("79a2")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var i=n("2b0e"),a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"app"}},[i("Header"),i("img",{attrs:{src:n("cf05")}}),i("SectionList"),i("SectionGrid"),i("Footer")],1)},o=[],l=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nav",{staticClass:"header_nav",attrs:{id:"vue-globalnav"}},[n("div",{staticClass:"vue-nav-content"},[n("ul",{staticClass:"vue-nav-list"},t._l(t.navs,(function(e){return n("li",{key:e.id,staticClass:"vue-nav-item"},[null===e.logo?n("a",[n("span",{staticClass:"nav-text"},[t._v(" "+t._s(e.title)+" ")])]):n("a",{staticClass:"nav-logo",class:e.logo},[n("span",{staticClass:"nav-logo-text"},[t._v(" "+t._s(e.title)+" ")])])])})),0)])])},r=[],s=[{id:0,title:"Apple",logo:"apple-logo"},{id:1,title:"Mac",logo:null},{id:2,title:"iPad",logo:null},{id:3,title:"iPhone",logo:null},{id:4,title:"Watch",logo:null},{id:5,title:"Music",logo:null},{id:6,title:"고객지원",logo:null},{id:7,title:"Search",logo:"search-logo"},{id:8,title:"Shoppingag",logo:"shopping-logo"}],c={name:"header-layout",data:function(){return{navs:s}},created:function(){console.log("navs :",this.navs)}},u=c,p=(n("0d66"),n("2877")),d=Object(p["a"])(u,l,r,!1,null,null,null),f=d.exports,v=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{attrs:{id:"vue-section"}},t._l(t.contentList,(function(t){return n("SectionDetail",{key:t.id,attrs:{content:t}})})),1)},g=[],m=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"vue-content"}},[n("div",{staticClass:"vue-wrapper"},[n("a",{staticClass:"link"}),n("div",{staticClass:"vue-wapper"},[n("div",{staticClass:"vue-image-wapper"},[n("h2",{staticClass:"headline"},[t._v(t._s(t.content.title))]),n("h3",{staticClass:"subhead"},[t._v(t._s(t.content.itemMainDesc))]),""!=t.content.itemSubDesc?n("p",{staticClass:"avail-msg"},[t._v(t._s(t.content.itemSubDesc))]):t._e(),""!=t.content.releaseDate?n("p",{staticClass:"avail-msg"},[t._v(t._s(t.content.releaseDate))]):t._e()])]),n("div",{staticClass:"vue-wapper"})])])},h=[],_={name:"vue-content",props:{content:Object},data:function(){return{}},created:function(){console.log("child content",this.content)}},b=_,y=(n("1f5a"),Object(p["a"])(b,m,h,!1,null,null,null)),D=y.exports,S={name:"vue-section",components:{SectionDetail:D},props:{},data:function(){return{contentList:[{id:0,title:"iMac",itemMainDesc:"이제 새롭게 만나는 시간.",itemSubDesc:"",releaseDate:"출시일은 추후 공개 됩니다.",image:"iMac.png"},{id:1,title:"iPhone 12",itemMainDesc:"보라. 올 시즌 컬러.",itemSubDesc:"￦950,000부터(보상 판매* 미적용 가격)",releaseDate:"퍼플 색상 4월 30일 출시",image:"iPhone12.png"},{id:2,title:"iPhone 12 Pro",itemMainDesc:"도약의 시간.",itemSubDesc:"￦1,350,000부터(보상 판매* 미적용 가격)",releaseDate:"",image:"iMac.png"}]}},created:function(){console.log("contentList",this.contentList)}},O=S,j=Object(p["a"])(O,v,g,!1,null,null,null),x=j.exports,C=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{attrs:{id:"vue-section-grid"}},t._l(t.contentList,(function(t){return n("SectionGridDetail",{key:t.id,attrs:{content:t}})})),1)},w=[],M=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"vue-section-grid-detail"}})},P=[],L={name:"vue-section-grid-detail",props:{},data:function(){return{}}},$=L,k=Object(p["a"])($,M,P,!1,null,null,null),E=k.exports,G={name:"vue-section-grid",props:{},components:{SectionGridDetail:E},data:function(){return{contentList:[{id:0,title:"iPad Pro",itemMainDesc:"막강한 성능의 Apple M1칩 탑재",releaseDate:"출시일은 추후 공개됩니다."}]}}},A=G,T=Object(p["a"])(A,C,w,!1,null,null,null),F=T.exports,H=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div")},J=[],W={},V=W,Y=Object(p["a"])(V,H,J,!1,null,null,null),q=Y.exports,z={name:"app",data:function(){return{msg:"Welcome to Your Vue.js App"}},components:{Header:f,SectionList:x,SectionGrid:F,Footer:q}},B=z,I=(n("034f"),Object(p["a"])(B,a,o,!1,null,null,null)),K=I.exports;i["a"].config.productionTip=!1,new i["a"]({render:function(t){return t(K)}}).$mount("#app")},"79a2":function(t,e,n){},"7fa9":function(t,e,n){},"85ec":function(t,e,n){},cf05:function(t,e,n){t.exports=n.p+"img/logo.82b9c7a5.png"}});
//# sourceMappingURL=app.0e5ecea1.js.map