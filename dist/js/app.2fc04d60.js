(function(t){function e(e){for(var n,o,c=e[0],l=e[1],r=e[2],p=0,d=[];p<c.length;p++)o=c[p],Object.prototype.hasOwnProperty.call(s,o)&&s[o]&&d.push(s[o][0]),s[o]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);u&&u(e);while(d.length)d.shift()();return a.push.apply(a,r||[]),i()}function i(){for(var t,e=0;e<a.length;e++){for(var i=a[e],n=!0,c=1;c<i.length;c++){var l=i[c];0!==s[l]&&(n=!1)}n&&(a.splice(e--,1),t=o(o.s=i[0]))}return t}var n={},s={app:0},a=[];function o(e){if(n[e])return n[e].exports;var i=n[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,o),i.l=!0,i.exports}o.m=t,o.c=n,o.d=function(t,e,i){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(o.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(i,n,function(e){return t[e]}.bind(null,n));return i},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=e,c=c.slice();for(var r=0;r<c.length;r++)e(c[r]);var u=l;a.push([0,"chunk-vendors"]),i()})({0:function(t,e,i){t.exports=i("56d7")},"0a93":function(t,e,i){t.exports=i.p+"img/think-cloud.dc41a9ff.png"},"0e3b":function(t,e,i){},2630:function(t,e,i){"use strict";i("2d70")},2896:function(t,e,i){"use strict";i("3c70")},"2a84":function(t,e,i){"use strict";i("91da")},"2d70":function(t,e,i){},"340a":function(t,e,i){"use strict";i("3f55")},"3c70":function(t,e,i){},"3f55":function(t,e,i){},4366:function(t,e,i){"use strict";i("7047")},"456e":function(t,e,i){"use strict";i("a8ce")},"478c":function(t,e,i){},"47ff":function(t,e,i){"use strict";i("ce2c")},"4c97":function(t,e,i){"use strict";i("c698")},"54de":function(t,e,i){},"56d7":function(t,e,i){"use strict";i.r(e);i("e260"),i("e6cf"),i("cca6"),i("a79d");var n=i("2b0e"),s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"app"}},[t.showAlert?i("Alert"):t._e(),i("NavigationBar",{style:{position:t.navBarPosition},on:{"change-tab":t.changeTab,"show-login-popup":t.showLoginPopup,"show-register-popup":t.showRegisterPopup}}),i("router-view"),t.showRegister?i("RegisterPopup",{on:{"close-register":t.closeRegisterPopup}}):t._e(),t.showLogin?i("LoginPopup",{on:{"close-login":t.closeLoginPopup}}):t._e(),i("Footer")],1)},a=[],o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"alert-container"},[i("div",{staticClass:"alert-title"},[t._v(" "+t._s(t.alertTitle)+" ")])])},c=[],l={data:function(){return{alertTitle:"请先登陆"}}},r=l,u=(i("a6fa"),i("2877")),p=Object(u["a"])(r,o,c,!1,null,"206e6ddf",null),d=p.exports,m=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"navigation-bar-container"},[n("div",{staticClass:"navigation-bar-logo-container",on:{click:t.goHomePage}},[n("img",{staticClass:"navigation-bar-logo",attrs:{src:i("b5fa")}}),n("img",{staticClass:"navigation-bar-logo",attrs:{src:i("e0dd")}})]),n("div",{staticClass:"navigation-bar-tab-container"},t._l(t.tabs,(function(e,i){return n("div",{key:e.key,staticClass:"navigation-bar-tab",class:{active:e.selected},on:{click:function(e){return t.changeTab(i)}}},[t._v(" "+t._s(e.name)+" ")])})),0),t.loginState?n("div",{staticClass:"login-container"},[n("span",{staticClass:"go-profile",on:{click:function(e){return t.$emit("go-profile")}}},[t._v(" 账户详情 ")])]):n("div",{staticClass:"login-container"},[n("span",{staticClass:"go-login",on:{click:function(e){return t.$emit("show-login-popup")}}},[t._v(" 登陆 ")]),n("span",{staticClass:"go-register",on:{click:function(e){return t.$emit("show-register-popup")}}},[t._v(" 注册 ")])])])},v=[],h={data:function(){return{loginState:this.$store.state.loginState,tabs:[{key:"thinkCloud",name:"云思 Think Cloud",selected:!1},{key:"trendi",name:"追浪 Trendi",selected:!1},{key:"magaSolutions",name:"兆瞳 Solutions",selected:!1},{key:"help",name:"帮助 Help",selected:!1}]}},watch:{"$store.state.loginState":function(t){t&&(this.loginState=this.$store.state.loginState)}},methods:{changeTab:function(t){for(var e in this.tabs)this.tabs[e].selected=!1;this.tabs[t].selected=!0,this.$emit("change-tab",t+1)},goHomePage:function(){this.$router.push("home")}}},f=h,g=(i("2630"),Object(u["a"])(f,m,v,!1,null,"535db632",null)),b=g.exports,C=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"pop-up"},[n("img",{staticClass:"close-icon",attrs:{src:i("91df")},on:{click:function(e){return t.$emit("close-register")}}}),n("div",{staticClass:"pop-up-title"},[t._v("注册云思管理系统")]),n("div",{staticClass:"input-container"},[n("div",{staticClass:"input-title"},[t._v("手机号：")]),n("el-input",{staticClass:"phone-num-input",attrs:{placeholder:"请输入手机号"},model:{value:t.phoneNum,callback:function(e){t.phoneNum=e},expression:"phoneNum"}})],1),n("div",{staticClass:"input-container"},[n("div",{staticClass:"input-title"},[t._v("设置密码：")]),n("el-input",{staticClass:"phone-num-input",attrs:{"show-password":""},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})],1),n("div",{staticClass:"input-container"},[n("div",{staticClass:"input-title"},[t._v("确认密码：")]),n("el-input",{staticClass:"phone-num-input",attrs:{"show-password":""},model:{value:t.verifyPassword,callback:function(e){t.verifyPassword=e},expression:"verifyPassword"}})],1),n("div",{staticClass:"input-container"},[n("div",{staticClass:"input-title"},[t._v("图形验证码：")]),n("el-input",{staticClass:"verification-code-input",model:{value:t.picCode,callback:function(e){t.picCode=e},expression:"picCode"}}),n("img",{staticClass:"pic-code",attrs:{src:t.picCodeUrl},on:{click:t.updatePicCode}})],1),n("div",{staticClass:"input-container"},[n("div",{staticClass:"input-title"},[t._v("验证码：")]),n("el-input",{staticClass:"verification-code-input",model:{value:t.verificationCode,callback:function(e){t.verificationCode=e},expression:"verificationCode"}}),n("el-button",{staticClass:"verification-code-button",attrs:{type:"primary",disabled:60!=t.count},on:{click:t.sendVerificationCode}},[t._v(t._s(t.verificationContent))])],1),n("div",{staticClass:"input-container"},[n("el-button",{staticClass:"login-button",attrs:{type:"primary"},on:{click:t.goRegister}},[t._v("注册")])],1)])},y=[],w=i("1d96"),k={data:function(){return{key:"",phoneNum:"",verificationCode:"",picCode:"",picCodeUrl:"",password:"",verifyPassword:"",verificationContent:"发送验证码",count:60}},mounted:function(){this.updatePicCode()},methods:{updatePicCode:function(){var t=Math.random();this.picCode="",this.key=t,this.picCodeUrl=w.graphValidateCodeUrl(t)},sendVerificationCode:function(){var t=this;w.smsValidateCode(this.phoneNum,this.key,this.picCode).then((function(e){if(502==e.code)t.updatePicCode();else{t.count=0,t.verificationContent=60-t.count+"s后重发";var i=setInterval((function(){t.count++,t.verificationContent=60-t.count+"s后重发",60==t.count&&(t.verificationContent="发送验证码",clearInterval(i))}),1e3)}}))},goRegister:function(){var t=this;if(this.password==this.verifyPassword){var e={code:this.verificationCode,mobile:this.phoneNum,pwd:this.password,autoLogin:!0};w.register_mobile(e).then((function(e){0===e.code?(t.$emit("close-register"),t.$store.commit("SET_LOGIN_STATE",!0)):t.$store.commit("SET_LOGIN_STATE",!1)}))}}}},A=k,I=(i("871a"),Object(u["a"])(A,C,y,!1,null,"abb7a3e0",null)),S=I.exports,_=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"pop-up"},[n("img",{staticClass:"close-icon",attrs:{src:i("91df")},on:{click:function(e){return t.$emit("close-login")}}}),n("div",{staticClass:"pop-up-title"},[t._v("登陆云思管理系统")]),n("div",{staticClass:"input-container"},[n("div",{staticClass:"input-title"},[t._v("手机号：")]),n("el-input",{staticClass:"phone-num-input",attrs:{placeholder:"请输入手机号"},model:{value:t.phoneNum,callback:function(e){t.phoneNum=e},expression:"phoneNum"}})],1),n("div",{staticClass:"input-container"},[n("div",{staticClass:"input-title"},[t._v("输入密码：")]),n("el-input",{staticClass:"phone-num-input",attrs:{"show-password":""},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})],1),n("div",{staticClass:"input-container"},[n("el-button",{staticClass:"login-button",attrs:{type:"primary"},on:{click:t.goLogin}},[t._v("登陆")])],1)])},T=[],x=i("1d96"),Z={data:function(){return{phoneNum:"",password:""}},methods:{goLogin:function(){var t=this;x.login_mobile(this.phoneNum,this.password," "," ").then((function(e){0===e.code?(t.$emit("close-login"),t.$store.commit("SET_LOGIN_STATE",!0)):t.$store.commit("SET_LOGIN_STATE",!1)}))}}},M=Z,j=(i("456e"),Object(u["a"])(M,_,T,!1,null,"88a317bc",null)),L=j.exports,G=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},N=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"footer-container"},[i("div",{staticClass:"info-container"},[i("div",{staticClass:"main-info"},[t._v(" Copyright © 2020 北京兆瞳科技有限公司 All rights reserved. 京ICP备2020043308 ")]),i("div",{staticClass:"other-info"},[t._v(" 联系方式: megasights@163.com, 或者致电 +86-157-2668-5283 ")])])])}],O=(i("cce5"),{}),E=Object(u["a"])(O,G,N,!1,null,"aa39e722",null),D=E.exports,P={name:"App",components:{Alert:d,NavigationBar:b,RegisterPopup:S,LoginPopup:L,Footer:D},data:function(){return{navBarPosition:"absolute",showLogin:!1,showRegister:!1,loginState:!1,showAlert:!1}},mounted:function(){window.addEventListener("scroll",this.handleScroll)},destroyed:function(){window.removeEventListener("scroll",this.handleScroll)},methods:{showMessage:function(t){this.$message({message:t,offset:0})},handleScroll:function(){var t=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop;this.navBarPosition=0!=t?"fixed":"absolute"},changeTab:function(t){if(4==t)this.$router.push("instruction"),this.closeLoginPopup();else if(this.$store.state.loginState)switch(t){case 1:this.$router.push("thinkcloud");break;case 2:this.$router.push("trendi");break;case 3:this.$router.push("solutions");break}else this.showMessage("请先登陆"),this.showLoginPopup()},showLoginPopup:function(){this.showLogin=!0,this.showRegister=!1},closeLoginPopup:function(){this.showLogin=!1},showRegisterPopup:function(){this.showRegister=!0,this.showLogin=!1},closeRegisterPopup:function(){this.showRegister=!1}}},Y=P,R=(i("e04a"),Object(u["a"])(Y,s,a,!1,null,"289dacc2",null)),B=R.exports,z=(i("7d05"),i("bc3a")),W=i.n(z),Q=i("5c96"),J=i.n(Q),U=(i("0fae"),i("2f62")),F=(i("b0c0"),i("8c4f")),V=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"homepage"}},[i("div",{staticClass:"swiper-cover"},[i("div",{staticClass:"swiper-button-container"},[i("div",{staticClass:"swiper-button",staticStyle:{float:"right"},on:{click:function(e){return t.bindChange("back")}}},[i("div",{staticClass:"swiper-button-arrow",staticStyle:{transform:"rotate(-45deg)"}})])]),i("div",{staticClass:"swiper-title-container"},[i("div",{staticClass:"text-container"},[i("div",{staticClass:"upper-text"},[t._v(" "+t._s(t.games[t.currentPic].name)+" ")]),i("div",{staticClass:"swiper-title"},[t._v(" "+t._s(t.games[t.currentPic].description)+" ")])])]),i("div",{staticClass:"swiper-button-container"},[i("div",{staticClass:"swiper-button",staticStyle:{float:"left"},on:{click:function(e){return t.bindChange("forward")}}},[i("div",{staticClass:"swiper-button-arrow",staticStyle:{transform:"rotate(135deg)",left:"12px"}})])])]),i("Swiper",{ref:"swiper",staticClass:"swiper",attrs:{type:"manual",itemWidth:"100",unit:"%",swipeList:t.games,time:5e3},on:{"swiper-changed":t.swiperChanged}})],1)},$=[],H=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"swiper-container"},[i("div",{staticClass:"swiper-item-container",class:{"no-transition":0==t.currentPic||t.currentPic==t.pseudoSwipeList.length-1},style:{width:100*(t.pseudoSwipeList.length+1)+"%",transform:"translateX("+-100/t.pseudoSwipeList.length*t.currentPic+"%)"}},t._l(t.pseudoSwipeList,(function(t){return i("div",{key:t.key,staticClass:"swiper-item"},[i("div",{staticClass:"swiper-item-background",style:{backgroundImage:"url("+t.src+")"}})])})),0),t.showSwiperDots?i("SwiperDots",{staticClass:"swiper-dot-box-container",attrs:{length:t.swipeList.length,currentIndex:t.currentPic},on:{"click-dot":t.swipe}}):t._e()],1)},X=[],q=(i("a9e3"),i("d3b7"),function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"swiper-dot-box"},t._l(t.length,(function(e){return i("div",{key:e,staticClass:"swiper-dot-container"},[i("div",{staticClass:"swiper-dot",class:{"active-dot":t.currentIndex===e},on:{click:function(i){return t.$emit("click-dot",e)}}})])})),0)])}),K=[],tt={name:"swiper-dots",props:{length:{type:Number},currentIndex:{type:Number}}},et=tt,it=(i("645b"),Object(u["a"])(et,q,K,!1,null,"c7b0a432",null)),nt=it.exports,st={name:"Swiper",components:{SwiperDots:nt},props:{type:{type:String,default:"auto"},swipeType:{type:String,default:"interval"},time:{type:Number,default:2e3},showSwiperDots:{type:Boolean,default:!0},swipeList:{type:Array},itemWidth:{type:String,default:"100"},unit:{type:String,default:"vw"}},data:function(){return{currentPic:1,pseudoSwipeList:[],interval:0}},watch:{currentPic:function(t){this.$emit("swiper-changed",t)}},created:function(){this.initializeSwiper(),"auto"===this.type&&"interval"===this.swipeType&&this.autoSwipe()},methods:{initializeSwiper:function(){this.pseudoSwipeList=JSON.parse(JSON.stringify(this.swipeList)),this.interval=this.time;var t={key:"pseudoFront",name:this.pseudoSwipeList[this.pseudoSwipeList.length-1].name,src:this.pseudoSwipeList[this.pseudoSwipeList.length-1].src};this.pseudoSwipeList.unshift(t),t={key:"pseudoBack",name:this.pseudoSwipeList[1].name,src:this.pseudoSwipeList[1].src},this.pseudoSwipeList.push(t)},autoSwipe:function(){var t=this,e=setInterval(i,this.interval);function i(){t.currentPic<t.swipeList.length?(t.interval=t.time,t.currentPic++):(t.interval=0,t.currentPic=0),clearInterval(e),e=setInterval(i,t.interval)}},manualSwipe:function(t){var e=this,i=this.swipeList.length;"forward"===t?this.currentPic<i?this.currentPic++:(this.currentPic=0,this.delay(1).then((function(){e.currentPic=1}))):this.currentPic>1?this.currentPic--:(this.currentPic=i+1,this.delay(1).then((function(){e.currentPic=i})))},delay:function(t){return new Promise((function(e){var i=setTimeout((function(){clearTimeout(i),e("success")}),t)}))},swipe:function(t){this.currentPic=t}}},at=st,ot=(i("47ff"),Object(u["a"])(at,H,X,!1,null,"588cd602",null)),ct=ot.exports,lt={name:"homepage",components:{Swiper:ct},data:function(){return{currentPic:0,games:[{key:"thinkCloud",name:"Think Cloud 云思",description:"一站式广告设计，广告投放服务，帮助创意快速落地",index:0,src:i("0a93")},{key:"trendi",name:"Trendi 追浪",description:"集成CMS系统，实时监控点击转化率，大数据精准定位用户痛点",index:1,src:i("6cb2")},{key:"megaSolutions",name:"Mega Solutions",description:"跨平台Paas解决方案，一次性投放至所有移动端产品",index:2,src:i("7431")}]}},methods:{bindChange:function(t){this.$refs.swiper.manualSwipe(t)},swiperChanged:function(t){0!=t&&t-1!=this.games.length&&(this.currentPic=t-1)}}},rt=lt,ut=(i("effa"),Object(u["a"])(rt,V,$,!1,null,"4e5dc87d",null)),pt=ut.exports,dt=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"instructionpage"}},[i("div",{staticClass:"side-column"},[i("div",{staticClass:"side-column-title"},[t._v(" 欢迎使用兆瞳云思管理系统 ")]),i("Collapse",{attrs:{"collapse-data":t.guide,"current-item":t.currentItem.name},on:{"click-collapse-item":t.clickCollapseItem}})],1),i("div",{staticClass:"main-panel"},["article"==t.currentItem.type?i("Article",{attrs:{article:t.currentItem}}):t._e()],1)])},mt=[],vt=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"collapse-block"},[i("div",{staticClass:"collapse-title"},[t._v(" "+t._s(t.collapseData.title)+" ")]),t._l(t.collapseData.items,(function(e){return i("div",{key:e.key,staticClass:"collapse-item",class:[e.key==t.currentItem?"collapse-item-active":""],on:{click:function(i){return t.$emit("click-collapse-item",e)}}},[t._v(" "+t._s(e.name)+" ")])}))],2)},ht=[],ft={props:{collapseData:Object,currentItem:String},data:function(){return{currentIndex:-1}}},gt=ft,bt=(i("5fd9"),Object(u["a"])(gt,vt,ht,!1,null,"6844c7e7",null)),Ct=bt.exports,yt=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"article-body"},[i("div",{staticClass:"article-title"},[t._v(" "+t._s(t.article.title)+" ")]),t._l(t.article.paragraphs,(function(e){return i("div",{key:e.key,staticClass:"article-paragraph"},[i("div",{staticClass:"paragraph-title"},[t._v(" "+t._s(e.title)+" ")]),t._l(e.body,(function(e){return i("div",{key:e.key,staticClass:"paragraph-body"},[t._v(" "+t._s(e)+" ")])}))],2)}))],2)},wt=[],kt={props:{article:Object}},At=kt,It=(i("2a84"),Object(u["a"])(At,yt,wt,!1,null,"eb4bfd62",null)),St=It.exports,_t={name:"overview",type:"article",title:"概览",paragraphs:[{title:"1. 云思管理平台",body:["云思管理平台是 Go Connect 对第三方商家提供的内容管理及广告投放平台。通过云思管理系统您可以将您设计好的文章，广告投放至 Go Connect 小程序及客户端中。"]},{title:"2. 注册使用",body:["为响应《中华人民共和国网络安全法》第二十四条规定“在与用户签订协议或者确认提供服务时，应当要求用户提供真实身份信息”，我们采用实名制注册。通过手机号或者微信号您可以申请注册个人账号，向管理员提交申请后即可管理企业账号。同一企业服务账号可以对应多个个人账户，管理员可以根据公司运营情况添加/删除协同管理员。"]},{title:"3. 账号管理",body:["在使用过程中，您随时可以修改头像，用户名，删除或更新您之前所发布的内容。如您需要更换管理员，可以在“账户管理——管理员设置”中更新管理人员，同一企业一个月有一次管理员变更机会。如果您需要删除账号，可以在“账号管理——删除账号”中进行操作，一旦提交账号将会进入7天冻结期，7天后需手动确认注销"]},{title:"4. 使用规则",body:["在您成功上传广告/文章投放文案之后，我们将会对您提交的内容进行只能过滤+人工审核。请您确保您发布的内容符合中华人民共和国法律法规，我们将会对违反社区规定的内容进行警告，连续警告多次将直接进行封禁处理，被封禁账号的所有管理人员不得再成为其它账户管理员"]}]},Tt=_t,xt={name:"howtolaunch",type:"article",title:"如何发布",paragraphs:[{title:"发布流程",body:["Go Connect 致力于将海外华人/留学生生活的琐碎事物尽可能简化。因此，我们在设计云思管理系统时也一以贯之的实行这一准则。您只需要两步即可进行发布。"]},{title:"1. 编辑内容",body:["在左侧内容栏点击“编辑”进入云思管理平台文本编辑页面。选择需要发布的内容种类（广告或文章推广）并选择相应的投放位置，即可开始编辑您要发布的内容。编辑完成后，点击提交进行审核。"]},{title:"2. 选择日期",body:["审核通过后，您可以选择何时投放您的广告，我们将会根据您选择的时间投放，时间选择完成后不可修改。"]},{title:"附录：广告投放功能",body:["对于广告投放我们在程序内设置了多项广告窗口，您可以根据您的需求选择响应广告位。","Splash Page：用户进入程序会浏览三秒欢迎页，您可以将广告投放至用户欢迎页，在投放期间该页面将会被所有用户浏览。","Scroll Banner：同样也会被所有用户浏览，Scroll Banner设置有两个广告槽共10个广告位，一个位于商城页面，该广告槽曝光率相对更高，另一个位于攻略页面。Scroll Banner 会向用户滚动播放。","Recommend Column：位于商城页面，共设置有三个广告槽，每个广告槽可以投放三个广告。该广告位所有用户可见，大小相对 Scroll Banner 略小。"]},{title:"附录：文章推广功能",body:["我们在文章投放中设置了推广功能，与客户端发布文章不同，您可以将您的文章进行置顶，共设有4个推广位，每篇文章最多可推广7天，推广期间您的文章将会被用户最先浏览。"]}]},Zt=xt,Mt={name:"howdowecharge",type:"article",title:"计费规则",paragraphs:[{title:"关于计费",body:["Go Connect 内置了不同的广告投放/文章推荐规则。费用计算公式为：投放位置收费 x 时间 x 衰减函数，投放时间越长日收费越低。"]},{title:"投放位置收费",body:["投放位置收费会根据不同广告位置的日浏览量和点击量计算，我们将会一个季度更新一次该数据。"]},{title:"时间",body:["文章推广功能只支持同一篇文章推送7天，广告推广不限推送时间。广告投放时间越长，收费越高，同时日收费越低。"]}]},jt=Mt,Lt=i("c44d"),Gt=i.n(Lt),Nt=i("81d7"),Ot=i.n(Nt),Et={components:{Collapse:Ct,Article:St},data:function(){return{guide:{title:"使用指南",items:[{key:"overview",index:0,name:"概览"},{key:"howtolaunch",index:1,name:"如何发布"},{key:"howdowecharge",index:2,name:"计费规则"},{key:"termsofuse",index:3,name:"使用条款"},{key:"privacypolicy",index:4,name:"隐私政策"}]},articleList:{overview:Tt,howtolaunch:Zt,howdowecharge:jt,termsofuse:Gt.a,privacypolicy:Ot.a},currentItem:Tt}},methods:{clickCollapseItem:function(t){this.currentItem=this.articleList[t.key]}}},Dt=Et,Pt=(i("4c97"),Object(u["a"])(Dt,dt,mt,!1,null,"3a2d148e",null)),Yt=Pt.exports,Rt=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"thinkcloudpage"}},[i("div",{staticClass:"side-column"},[i("div",{staticClass:"side-column-title"},[t._v(" 欢迎使用兆瞳云思管理系统 ")]),i("Collapse",{attrs:{"collapse-data":t.composeList,"current-item":t.composeList.items[t.currentItem].key},on:{"click-collapse-item":t.clickCollapseItem}})],1),i("div",{staticClass:"main-panel"},[0==t.currentItem?i("ComposeAd",{on:{"page-change":t.pageChange}}):t._e(),1==t.currentItem?i("ChooseDate",{on:{"page-change":t.pageChange}}):t._e(),2==t.currentItem?i("PayBill",{on:{"page-change":t.pageChange}}):t._e()],1)])},Bt=[],zt=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"compose-container"},[i("div",{staticClass:"compose-title"},[t._v(" 上传 ")]),i("div",{staticClass:"compose-item"},[i("div",{staticClass:"item-title"},[t._v(" 请选择需要发布的类别: ")]),i("el-select",{staticStyle:{"margin-left":"40px",width:"250px"},attrs:{placeholder:"请选择"},model:{value:t.promoteType,callback:function(e){t.promoteType=e},expression:"promoteType"}},t._l(t.promoteTypes,(function(t){return i("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})),1)],1),"advertisement"==t.promoteType?i("div",{staticClass:"compose-item"},[i("div",{staticClass:"item-title"},[t._v(" 请选择广告投放位置: ")]),i("el-select",{staticStyle:{"margin-left":"40px",width:"250px"},attrs:{placeholder:"请选择"},model:{value:t.advertisementType,callback:function(e){t.advertisementType=e},expression:"advertisementType"}},t._l(t.advertisementTypes,(function(t){return i("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})),1)],1):t._e(),"advertisement"==t.promoteType?i("div",{staticClass:"compose-item"},[i("div",{staticClass:"item-title"},[t._v(" 上传广告: ")]),"splashPage"==t.advertisementType?i("span",[i("div",{staticClass:"item-description"},[t._v(" 入口欢迎页 Splash Banner 位于软件入口，所有访问程序的用户都必须浏览该页面3秒，该广告接口浏览量最高 ")]),i("div",{staticClass:"item-description"},[t._v(" 图片格式：912 x 1920 px, .png格式 ")]),i("div",{staticClass:"item-description"},[t._v(" 该图片根据用户手机不同可能会有一定程度的缩放，请确保重要宣传信息至少距离边框50像素点 ")]),t._m(0)]):t._e(),"blogScrollBanner"==t.advertisementType||"goodScrollBanner"==t.advertisementType?i("span",["goodScrollBanner"==t.advertisementType?i("div",{staticClass:"item-description"},[t._v(" 商城页 Scroll banner 位于小程序商城页面上方轮播图，所有访问程序的用户都会看到该广告，该广告接口浏览量高 ")]):i("div",{staticClass:"item-description"},[t._v(" 文章页 Scroll banner 位于小程序文章页面上方轮播图，所有访问文章页的用户都会看到该广告 ")]),i("div",{staticClass:"item-description"},[t._v(" 图片格式：355 x 100 px, .png格式 ")]),i("div",{staticClass:"item-description"},[t._v(" 图片不会缩放，请放心使用 ")]),t._m(1)]):t._e(),"recommendColumn"==t.advertisementType?i("span",[i("div",{staticClass:"item-description"},[t._v(" 商城页 Recommend Column 位于小程序商城页面中部好物推荐轮播图，所有访问程序的用户都会看到该广告 ")]),i("div",{staticClass:"item-description"},[t._v(" 图片格式：100 x 100 px, .png格式 ")]),i("div",{staticClass:"item-description"},[t._v(" 图片不会缩放，请放心使用 ")]),t._m(2)]):t._e()]):t._e(),"promotearticle"==t.promoteType?i("div",{staticClass:"compose-item"},[i("div",{staticClass:"item-title"},[t._v(" 上传图片: ")]),"splashPage"==t.advertisementType?i("span",[i("div",{staticClass:"item-description"},[t._v(" 您上传的第一张图片将作为您文章的封面，其余图片将会在用户打开文章时展示 ")]),i("div",{staticClass:"item-description"},[t._v(" 1020 x 750 px, .png格式 ")]),i("div",{staticClass:"item-description"},[t._v(" 该图片根据用户手机不同可能会有极小幅度缩放 ")]),t._m(3)]):t._e()]):t._e(),"promotearticle"==t.promoteType?i("div",{staticClass:"compose-item"},[i("div",{staticClass:"item-title"},[t._v(" 输入文章内容: ")]),i("el-input",{staticClass:"article-textarea",attrs:{type:"textarea",autosize:{minRows:5},placeholder:"请输入内容"},model:{value:t.articleContent,callback:function(e){t.articleContent=e},expression:"articleContent"}})],1):t._e(),i("div",{staticClass:"compose-item",staticStyle:{"margin-top":"60px"}},[i("div",{staticClass:"item-button",staticStyle:{left:"100%",transform:"translate(-70%)"},on:{click:t.next}},[t._v(" 下一步 ")])])])},Wt=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"upload-splash-page"},[i("div",{staticClass:"add-button"})])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"upload-scroll-banner"},[i("div",{staticClass:"add-button"})])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"upload-recommend-column"},[i("div",{staticClass:"add-button"})])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"upload-article-picture"},[i("div",{staticClass:"add-button"})])}],Qt={data:function(){return{promoteTypes:[{value:"advertisement",label:"投放广告"},{value:"promotearticle",label:"文章推广"}],advertisementTypes:[{value:"splashPage",label:"入口欢迎页 Splash Page"},{value:"goodScrollBanner",label:"商城页 Scroll Banner"},{value:"blogScrollBanner",label:"文章页 Scroll Banner"},{value:"recommendColumn",label:"商城页好物推荐 Recommend Column"}],promoteType:"promotearticle",advertisementType:"splashPage",articleContent:""}},methods:{next:function(){this.$emit("page-change","next")}}},Jt=Qt,Ut=(i("d39a"),Object(u["a"])(Jt,zt,Wt,!1,null,"0ca986d5",null)),Ft=Ut.exports,Vt=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"choose-date-container"},[i("div",{staticClass:"choose-date-title"},[t._v(" 选择发布日期 ")]),t._m(0),i("el-date-picker",{attrs:{type:"daterange","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期"},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}}),i("div",{staticClass:"choose-date-item",staticStyle:{"margin-top":"60px"}},[i("div",{staticClass:"item-button",staticStyle:{left:"0%"},on:{click:t.previous}},[t._v(" 上一步 ")]),i("div",{staticClass:"item-button",staticStyle:{left:"100%",transform:"translate(-170%)"},on:{click:t.next}},[t._v(" 下一步 ")])])],1)},$t=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"choose-date-item"},[i("div",{staticClass:"choose-date-description"},[t._v(" 开始日期及结束日期计算方法：从开始日期当日0:00开始投放，至结束日期24:00结束。 如您选择开始日期为2020年1月1日，结束日期为2020年1月3日，则该广告将会展示3天共72小时 ")])])}],Ht={data:function(){return{value:""}},methods:{previous:function(){this.$emit("page-change","previous")},next:function(){this.$emit("page-change","next")}}},Xt=Ht,qt=(i("5892"),Object(u["a"])(Xt,Vt,$t,!1,null,"fe437f8c",null)),Kt=qt.exports,te=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"pay-bill-container"},[i("div",{staticClass:"pay-bill-title"},[t._v(" 付款并发布 ")]),i("div",{staticClass:"pay-bill-item",staticStyle:{"margin-top":"60px"}},[i("div",{staticClass:"pay-bill-logo-container"},[t._v(" 支付宝扫码付款 ")]),i("div",{staticClass:"pay-bill-url-container"},[i("div",{ref:"qrcode",staticClass:"pay-bill-url",attrs:{id:"qrcode"}})])]),i("div",{staticClass:"pay-bill-item",staticStyle:{"margin-top":"60px"}},[i("div",{staticClass:"item-button",staticStyle:{left:"0%"},on:{click:t.previous}},[t._v(" 上一步 ")]),i("div",{staticClass:"item-button",staticStyle:{left:"100%",transform:"translate(-170%)"},on:{click:t.upload}},[t._v(" 提交 ")])])])},ee=[],ie=i("d044"),ne=i.n(ie),se=i("1d96"),ae={data:function(){return{payUrl:""}},mounted:function(){var t=this,e={money:20};se.alipay(e).then((function(e){t.qrcode(e.data)}))},methods:{qrcode:function(t){var e=new ne.a("qrcode",{width:200,height:200,text:t});console.log(e)},previous:function(){this.$emit("page-change","previous")},upload:function(){console.log("upload")}}},oe=ae,ce=(i("340a"),Object(u["a"])(oe,te,ee,!1,null,"503f1509",null)),le=ce.exports,re={components:{Collapse:Ct,ComposeAd:Ft,ChooseDate:Kt,PayBill:le},data:function(){return{composeList:{title:"开始使用",items:[{key:"upload",index:0,name:"上传"},{key:"choosedate",index:1,name:"选择发布日期"},{key:"paybill",index:2,name:"发布"}]},currentItem:0}},methods:{clickCollapseItem:function(t){this.currentItem=t.index},pageChange:function(t){"next"==t?this.currentItem+=1:"previous"==t&&(this.currentItem-=1)}}},ue=re,pe=(i("c398"),Object(u["a"])(ue,Rt,Bt,!1,null,"301b132c",null)),de=pe.exports,me=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"trendipage"}},[i("div",{staticClass:"side-column"},[i("div",{staticClass:"side-column-title"},[t._v(" 欢迎使用兆瞳云思管理系统 ")]),i("Collapse",{attrs:{"collapse-data":t.composeList,"current-item":t.composeList.items[t.currentItem].key},on:{"click-collapse-item":t.clickCollapseItem}})],1),i("div",{staticClass:"main-panel"},[i("div",{staticClass:"data-analysis-container"},[i("div",{staticClass:"data-analysis-picture",style:{backgroundImage:"url("+t.src+")"}})]),t._m(0)])])},ve=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"trendi-container"},[i("div",{staticClass:"item-title"},[t._v(" 程序员小哥正在努力开发中... ")])])}],he={components:{Collapse:Ct},data:function(){return{composeList:{title:"开始使用",items:[{key:"trend",index:0,name:"趋势分析"},{key:"track",index:1,name:"用户追踪"}]},currentItem:0,src:i("be03")}},methods:{clickCollapseItem:function(t){this.currentItem=t.index}}},fe=he,ge=(i("4366"),Object(u["a"])(fe,me,ve,!1,null,"66936d9b",null)),be=ge.exports,Ce=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"solutionspage"}},[i("div",{staticClass:"side-column"},[i("div",{staticClass:"side-column-title"},[t._v(" 欢迎使用兆瞳云思管理系统 ")]),i("Collapse",{attrs:{"collapse-data":t.composeList,"current-item":t.composeList.items[t.currentItem].key},on:{"click-collapse-item":t.clickCollapseItem}})],1),t._m(0)])},ye=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"main-panel"},[i("div",{staticClass:"solutions-container"})])}],we={components:{Collapse:Ct},data:function(){return{composeList:{title:"开始使用",items:[{key:"howtouse",index:0,name:"如何使用"},{key:"contactus",index:1,name:"需求定制"}]},currentItem:0,src:i("be03")}},methods:{clickCollapseItem:function(t){this.currentItem=t.index}}},ke=we,Ae=(i("2896"),Object(u["a"])(ke,Ce,ye,!1,null,"636fa57e",null)),Ie=Ae.exports;n["default"].use(F["a"]);var Se=[{path:"/home",name:"home",component:pt},{path:"/",redirect:"/home"},{path:"/instruction",name:"instruction",component:Yt},{path:"/thinkcloud",name:"thinkcloud",component:de},{path:"/trendi",name:"trendi",component:be},{path:"/solutions",name:"solutions",component:Ie}],_e=new F["a"]({routes:Se});_e.beforeEach((function(t,e,i){var n=_e.app.$options.store.state.loginState;"home"==t.name||"instruction"==t.name||n?i():i({name:"home"})}));var Te=_e;n["default"].use(U["a"]);var xe=new U["a"].Store({state:{loginState:window.sessionStorage.getItem("loginState")},mutations:{SET_LOGIN_STATE:function(t,e){t.loginState=e,window.sessionStorage.setItem("loginState",e)}}}),Ze=xe;n["default"].use(J.a),n["default"].use(U["a"]),n["default"].prototype.$axios=W.a,n["default"].config.productionTip=!1,new n["default"]({el:"#app",router:Te,store:Ze,render:function(t){return t(B)}}).$mount("#app")},5892:function(t,e,i){"use strict";i("0e3b")},"5fd9":function(t,e,i){"use strict";i("a0a8")},"619e":function(t,e,i){},"645b":function(t,e,i){"use strict";i("619e")},"6cb2":function(t,e,i){t.exports=i.p+"img/trendi.6903e7be.png"},7047:function(t,e,i){},7431:function(t,e,i){t.exports=i.p+"img/mega-solutions.6b2ef8d3.png"},"79d3":function(t,e,i){},"7d05":function(t,e,i){},"81d7":function(t,e){},"871a":function(t,e,i){"use strict";i("bc2e")},8878:function(t,e,i){},"91da":function(t,e,i){},"91df":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAYAAABV7bNHAAABQ2lDQ1BERUxMIFAyNDE3SAAAKM9jYGASSSwoyGFhYGDIzSspCnJ3UoiIjFJgf8LAwcAHhGwMaonJxQWOAQE+QCUMMBoJMDIwfLsGIhkYLuuCzJp2bW1ix73iTxNXLzgQ0cNqz4AfcKWkFicD6T9AnJZcUFQCNDIFyFYuLykAsTuAbJEioKOA7DkgdjqEvQHEToKwj4DVhAQ5A9k3gGyB5IxEoBmML4BsnSQk8XQkNtReEOBxcfXxUQgwMjE092CgNihJrSgB0c75BZVFmekZJQqOwFBKVfDMS9bTUTAyMDJgYACFOUT15xvgsGQU40CIpTxlYDDOBQpqIMSyBBgYdn9jYBDcihBTfwj01lwGhgMBBYlFiYgY+sZSnGZsBGFzb2dgYJ32///ncAYGdk0Ghr/X////vf3//7/LGBiYbwH1fgMALbthTAaR2egAAAAJcEhZcwAACxMAAAsTAQCanBgAAAomaVRYdFhNTDpjb20uYWRvYmUueG1wAAAAAAA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA2LjAtYzAwMiA3OS4xNjQ0NjAsIDIwMjAvMDUvMTItMTY6MDQ6MTcgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgMjEuMiAoTWFjaW50b3NoKSIgeG1wOkNyZWF0ZURhdGU9IjIwMjAtMTEtMzBUMDg6NTg6MDEtMDU6MDAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMjAtMTEtMzBUMDg6NTg6MTQtMDU6MDAiIHhtcDpNb2RpZnlEYXRlPSIyMDIwLTExLTMwVDA4OjU4OjE0LTA1OjAwIiBkYzpmb3JtYXQ9ImltYWdlL3BuZyIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpmZGMyZDQyOC02NmY2LTRmMmMtODM5YS0wY2EzNTg4ZmZjMTQiIHhtcE1NOkRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDo0Y2NjMzcwYy02OTM5LTM3NGMtOTRjMC1jNGQ2NDU0NDYyY2MiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDoxMDJiMTlmOC04NWNlLTQ2MWEtOTJiOC02ZjUyMDE4YjQzNjMiIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiIHBob3Rvc2hvcDpJQ0NQcm9maWxlPSJERUxMIFAyNDE3SCI+IDx4bXBNTTpIaXN0b3J5PiA8cmRmOlNlcT4gPHJkZjpsaSBzdEV2dDphY3Rpb249ImNyZWF0ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6MTAyYjE5ZjgtODVjZS00NjFhLTkyYjgtNmY1MjAxOGI0MzYzIiBzdEV2dDp3aGVuPSIyMDIwLTExLTMwVDA4OjU4OjAxLTA1OjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgMjEuMiAoTWFjaW50b3NoKSIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6N2U1ZjEzNzctMDFmYy00MzU3LTlhNTQtODAzZDAzN2VhYWRlIiBzdEV2dDp3aGVuPSIyMDIwLTExLTMwVDA4OjU4OjE0LTA1OjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgMjEuMiAoTWFjaW50b3NoKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0iY29udmVydGVkIiBzdEV2dDpwYXJhbWV0ZXJzPSJmcm9tIGFwcGxpY2F0aW9uL3ZuZC5hZG9iZS5waG90b3Nob3AgdG8gaW1hZ2UvcG5nIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJkZXJpdmVkIiBzdEV2dDpwYXJhbWV0ZXJzPSJjb252ZXJ0ZWQgZnJvbSBhcHBsaWNhdGlvbi92bmQuYWRvYmUucGhvdG9zaG9wIHRvIGltYWdlL3BuZyIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6ZmRjMmQ0MjgtNjZmNi00ZjJjLTgzOWEtMGNhMzU4OGZmYzE0IiBzdEV2dDp3aGVuPSIyMDIwLTExLTMwVDA4OjU4OjE0LTA1OjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgMjEuMiAoTWFjaW50b3NoKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8L3JkZjpTZXE+IDwveG1wTU06SGlzdG9yeT4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6N2U1ZjEzNzctMDFmYy00MzU3LTlhNTQtODAzZDAzN2VhYWRlIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjEwMmIxOWY4LTg1Y2UtNDYxYS05MmI4LTZmNTIwMThiNDM2MyIgc3RSZWY6b3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOjEwMmIxOWY4LTg1Y2UtNDYxYS05MmI4LTZmNTIwMThiNDM2MyIvPiA8cGhvdG9zaG9wOkRvY3VtZW50QW5jZXN0b3JzPiA8cmRmOkJhZz4gPHJkZjpsaT5hZG9iZTpkb2NpZDpwaG90b3Nob3A6MDc2Mzk4M2QtYTI4YS0yZjRjLTk2MzctOWIzMDk4NmYwOTNjPC9yZGY6bGk+IDxyZGY6bGk+YWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOjlkZTkxNmVlLWRhZjEtNjM0MS1iMDFhLTBmOGVmYWQzYjA4ZjwvcmRmOmxpPiA8cmRmOmxpPmFkb2JlOmRvY2lkOnBob3Rvc2hvcDplNmZiN2M0Ny0zYWQzLWY4NDYtYTY2NC04ZDRhMzM3Y2FiMTA8L3JkZjpsaT4gPHJkZjpsaT54bXAuZGlkOjhlMmNjMTkzLWQ3M2MtNWU0Yy1iZmUwLWI5YTlkZGM1YTZhNzwvcmRmOmxpPiA8L3JkZjpCYWc+IDwvcGhvdG9zaG9wOkRvY3VtZW50QW5jZXN0b3JzPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PgtQUN8AAAHfSURBVHja7drNTgIxFIbhIRn5uQCuE3XFGEmEaELijXhnJMJGQcDVeJqcbnCYnqKYFt/FtzHOnPLQdkqnRV3XBTkeEAACCCCAAAIIIIAIQAABBBBAAAEEUHTm8/lrQ14kQ0lx5gy11rc2pARUN2QjmUi6Z8Tpao1NUxtSB3J5k0zPCDTVGnWuQD43kt4vwvT0nq11UwL6/EMkE45rU0pAleQj0OCtzheDH+AM9B7bQC3XlioloFLyKFkGGr6TjE+cuLt67S5QY6ltKVMC8h/A0pP2kuvInjTQa/aWnuO/gNSAXPqSkeFbdkPkzjgn9fR/t4beOdI2FKkCuVzpUAh9oJUfCi04fuiuDOBjrV2kDuR7knkybQGKmfz7h9enDOSRbg2P490RpMowVGut0W9qQ+pAMUjv2gtKzUT/djJOLkAuHcmDZG1AetaEcNZ6z05b7VyA/BLg3oBkyVrvFVxL5QTke1JlWMuE1lBVqOfkChTzZDrliXcxQG4SfpIsInAWek35H4D8YnIWATQ7XAQC9I+BGGJM0jzmWSjyU4Mfq2x3ZL3dwYYZW65s2vPahxeHvHrO59Uzhxc4/sIBKo7gcYgz1UOcHAMGiAAEEEAAAQQQQAARgAACCCCAALqUfAEJLjVeMtni1gAAAABJRU5ErkJggg=="},a0a8:function(t,e,i){},a6fa:function(t,e,i){"use strict";i("b1d3")},a8ce:function(t,e,i){},b1d3:function(t,e,i){},b5fa:function(t,e,i){t.exports=i.p+"img/logo-chinese.500f60f0.png"},bc2e:function(t,e,i){},be03:function(t,e,i){t.exports=i.p+"img/data-analysis.e46821e6.png"},c398:function(t,e,i){"use strict";i("f756")},c44d:function(t,e){},c698:function(t,e,i){},cce5:function(t,e,i){"use strict";i("54de")},ce2c:function(t,e,i){},d39a:function(t,e,i){"use strict";i("478c")},e04a:function(t,e,i){"use strict";i("79d3")},e0dd:function(t,e,i){t.exports=i.p+"img/logo.bac90a57.png"},effa:function(t,e,i){"use strict";i("8878")},f756:function(t,e,i){}});
//# sourceMappingURL=app.2fc04d60.js.map