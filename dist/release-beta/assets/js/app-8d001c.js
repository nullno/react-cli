!function(f){function e(e){for(var t,a,n=e[0],u=e[1],l=e[2],r=0,o=[];r<n.length;r++)a=n[r],Object.prototype.hasOwnProperty.call(c,a)&&c[a]&&o.push(c[a][0]),c[a]=0;for(t in u)Object.prototype.hasOwnProperty.call(u,t)&&(f[t]=u[t]);for(s&&s(e);o.length;)o.shift()();return i.push.apply(i,l||[]),d()}function d(){for(var e,t=0;t<i.length;t++){for(var a=i[t],n=!0,u=1;u<a.length;u++){var l=a[u];0!==c[l]&&(n=!1)}n&&(i.splice(t--,1),e=r(r.s=a[0]))}return e}var a={},c={0:0},i=[];function r(e){if(a[e])return a[e].exports;var t=a[e]={i:e,l:!1,exports:{}};return f[e].call(t.exports,t,t.exports,r),t.l=!0,t.exports}r.m=f,r.c=a,r.d=function(e,t,a){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)r.d(a,n,function(e){return t[e]}.bind(null,n));return a},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="";var t=window.webpackJsonp=window.webpackJsonp||[],n=t.push.bind(t);t.push=e,t=t.slice();for(var u=0;u<t.length;u++)e(t[u]);var s=n;i.push([174,1]),d()}({174:function(e,t,a){"use strict";var n=l(a(0)),u=l(a(25)),a=l(a(179));function l(e){return e&&e.__esModule?e:{default:e}}u.default.render(n.default.createElement(a.default,null),app)},179:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=c(a(18));a(346);var u=c(a(0)),l=a(85),r=(c(a(216)),c(a(217))),o=c(a(221)),f=c(a(266)),d=c(a(335));function c(e){return e&&e.__esModule?e:{default:e}}t.default=function(){return u.default.createElement(l.HashRouter,null,u.default.createElement(n.default,{locale:r.default},u.default.createElement("img",{src:d.default.test_png,className:"bananer"}),u.default.createElement(f.default,null),u.default.createElement(o.default,null)))}},221:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=v(a(222)),u=v(a(223)),l=v(a(52)),r=v(a(55)),o=v(a(56)),f=v(a(57)),d=v(a(58));a(257),a(258);var c=v(a(0)),i=a(85),s=v(a(259)),p=v(a(260)),m=v(a(263));function v(e){return e&&e.__esModule?e:{default:e}}a=c.default.Component,(0,d.default)(h,a),(0,o.default)(h,[{key:"render",value:function(){return c.default.createElement(n.default,{className:s.default.nav},c.default.createElement(u.default,{span:8},c.default.createElement(i.NavLink,{to:"/",exact:!0,activeClassName:s.default.actived},c.default.createElement(p.default,{className:s.default.anticon})," ",c.default.createElement("span",null,"Home")," ")," "),c.default.createElement(u.default,{span:8},c.default.createElement(i.NavLink,{to:"/page2",activeClassName:s.default.actived},c.default.createElement(m.default,{className:s.default.anticon}),c.default.createElement("span",null,"Page2")," ")," "),c.default.createElement(u.default,{span:8},c.default.createElement(i.NavLink,{to:"/page3/456",activeClassName:s.default.actived},c.default.createElement(m.default,{className:s.default.anticon}),c.default.createElement("span",null,"Page3")," ")," "))}}]),o=h;function h(e){(0,r.default)(this,h);e=(0,f.default)(this,(h.__proto__||(0,l.default)(h)).call(this,e));return e.state={a:123},e}t.default=o},259:function(e,t,a){"use strict";a.r(t),t.default={nav:"nav-nav-4a20e",anticon:"nav-anticon-ad267",actived:"nav-actived-b4729"}},266:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,u=a(0),l=(n=u)&&n.__esModule?n:{default:n},r=a(85);var o={},f=a(267);f.keys().forEach(function(e){var t=f(e),e=e.replace(/\./g,"").replace("jsx","").replace(/\//g,"");o[e]=t.default});function d(e,t){return e&&0!=e.length?e.map(function(t,e){return l.default.createElement(r.Route,{key:e,exact:"/"==t.path,path:t.path,render:function(e){return l.default.createElement(t.component,{Route:d(t.routes).concat(t.redirect?l.default.createElement(r.Redirect,{to:t.redirect,key:t.redirect}):null),$route:e,mate:t.mate})}})}):[]}var c=[{path:"/notfound",component:o.notfound,mate:{title:"404"}},{path:"/",component:o.home,mate:{title:"主页"}},{path:"/page2",component:o.page2,redirect:"/page2/page2-1",mate:{title:"page2"},routes:[{path:"/page2/page2-1",component:o["page2-1"]},{path:"/page2/page2-2",component:o["page2-2"]}]},{path:"/page3/:id",component:o.page3,mate:{title:"page3"}}];t.default=function(){return l.default.createElement(r.Switch,null,d(c),l.default.createElement(r.Redirect,{to:"/notfound",exact:!0,key:"notfound"}))}},267:function(e,t,a){var n={"./home.jsx":268,"./notfound.jsx":330,"./page2-1.jsx":331,"./page2-2.jsx":332,"./page2.jsx":333,"./page3.jsx":334};function u(e){e=l(e);return a(e)}function l(e){if(a.o(n,e))return n[e];e=new Error("Cannot find module '"+e+"'");throw e.code="MODULE_NOT_FOUND",e}u.keys=function(){return Object.keys(n)},u.resolve=l,(e.exports=u).id=267},268:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=v(a(115)),u=v(a(339)),l=v(a(340)),r=v(a(52)),o=v(a(55)),f=v(a(56)),d=v(a(57)),c=v(a(58));a(158),a(342),a(344);var i=v(a(0)),s=v(a(294)),p=v(a(50)),m=a(295);function v(e){return e&&e.__esModule?e:{default:e}}var h=i.default.createElement(p.default,{style:{fontSize:24},spin:!0}),f=(p=i.default.Component,(0,c.default)(_,p),(0,f.default)(_,[{key:"componentDidMount",value:function(){this.GetMusicName()}},{key:"componentWillUnmount",value:function(){}},{key:"render",value:function(){var t=this,e=i.default.createElement(u.default,{dataSource:this.state.list,renderItem:function(e){return i.default.createElement(u.default.Item,{key:e.id,onClick:function(){return t.changeTitle(e.name)}},i.default.createElement(u.default.Item.Meta,{avatar:i.default.createElement(l.default,{src:e.album.artist.img1v1Url}),title:i.default.createElement("a",{href:"#"},e.name),description:"test description"}),i.default.createElement("div",null,"Content"))}},this.state.loading&&i.default.createElement("div",{className:s.default["loading-container"]},i.default.createElement(n.default,{indicator:h,tip:"加载中...",style:{color:"rgba(0,0,0,.45)"}})));return i.default.createElement("div",null,i.default.createElement("h1",null,"Page1"),i.default.createElement("h2",null,this.state.name.title),i.default.createElement("div",{className:s.default.list},e))}},{key:"changeTitle",value:function(e){var t=this.state.name;t.title=e,this.setState({name:t})}},{key:"GetMusicName",value:function(){this.setState({loading:!0},function(){var t=this;(0,m.GetMusicName)({keywords:"视频"}).then(function(e){t.state.list;t.setState({list:e,loading:!1})}).catch(function(e){})})}}]),_);function _(e){(0,o.default)(this,_);var t=(0,d.default)(this,(_.__proto__||(0,r.default)(_)).call(this));return t.a=5,t.b=6,t.state={name:{title:"等待接受数据改变..."},list:[],loading:!1,hasMore:!0},t}t.default=f},294:function(e,t,a){"use strict";a.r(t),t.default={list:"index-list-666c2","loading-container":"index-loading-container-f7c37",item2:"index-item2-c057d"}},295:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.GetMusicName=void 0;var n=l(a(296)),u=l(a(312));function l(e){return e&&e.__esModule?e:{default:e}}var a={},r="/test";a.baseURL="https://musicapi.nullno.com",r="";var o=u.default.create(a);t.GetMusicName=function(e){return new n.default(function(t,a){o.get(r+"/search",{params:e}).then(function(e){t(e.data.result.songs)}).catch(function(e){a(e)})})}},330:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=d(a(52)),u=d(a(55)),l=d(a(56)),r=d(a(57)),o=d(a(58)),f=d(a(0));function d(e){return e&&e.__esModule?e:{default:e}}a=f.default.Component,(0,o.default)(c,a),(0,l.default)(c,[{key:"render",value:function(){return f.default.createElement("div",{className:"notfound"},"404  not found")}}]),l=c;function c(){return(0,u.default)(this,c),(0,r.default)(this,(c.__proto__||(0,n.default)(c)).apply(this,arguments))}t.default=l},331:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=c(a(343)),u=c(a(52)),l=c(a(55)),r=c(a(56)),o=c(a(57)),f=c(a(58));a(347);var d=c(a(0));function c(e){return e&&e.__esModule?e:{default:e}}a=d.default.Component,(0,f.default)(i,a),(0,r.default)(i,[{key:"render",value:function(){return d.default.createElement("div",{style:{background:"green",minHeight:"200px"}},d.default.createElement("h1",null,"这个是二级页面page2-1 "),d.default.createElement("div",{className:"ant-widget"},d.default.createElement(n.default,{type:"primary",style:{marginLeft:8}},"确定")),this.props.Route)}}]),r=i;function i(){return(0,l.default)(this,i),(0,o.default)(this,(i.__proto__||(0,u.default)(i)).apply(this,arguments))}t.default=r},332:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=d(a(52)),u=d(a(55)),l=d(a(56)),r=d(a(57)),o=d(a(58)),f=d(a(0));function d(e){return e&&e.__esModule?e:{default:e}}a=f.default.Component,(0,o.default)(c,a),(0,l.default)(c,[{key:"render",value:function(){return f.default.createElement("div",{style:{background:"green",minHeight:"200px"}},f.default.createElement("h1",null,"这个是二级页面page2-2 "))}}]),l=c;function c(){return(0,u.default)(this,c),(0,r.default)(this,(c.__proto__||(0,n.default)(c)).apply(this,arguments))}t.default=l},333:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=c(a(52)),u=c(a(55)),l=c(a(56)),r=c(a(57)),o=c(a(58)),f=c(a(0)),d=a(85);function c(e){return e&&e.__esModule?e:{default:e}}a=f.default.Component,(0,o.default)(i,a),(0,l.default)(i,[{key:"render",value:function(){return f.default.createElement("div",{style:{background:"blue",minHeight:"200px"}},f.default.createElement("h1",null,"Page2"),f.default.createElement(d.Switch,null,this.props.Route),f.default.createElement(d.NavLink,{to:"/page2/page2-1",style:{color:"#fff"},activeStyle:{color:"red"}},"page2-1"),f.default.createElement(d.NavLink,{to:"/page2/page2-2",style:{color:"#fff"},activeStyle:{color:"red"}},"page2-2"))}}]),l=i;function i(e){return(0,u.default)(this,i),(0,r.default)(this,(i.__proto__||(0,n.default)(i)).call(this,e))}t.default=l},334:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=c(a(341)),u=c(a(52)),l=c(a(55)),r=c(a(56)),o=c(a(57)),f=c(a(58));a(345);var d=c(a(0));function c(e){return e&&e.__esModule?e:{default:e}}a=d.default.Component,(0,f.default)(i,a),(0,r.default)(i,[{key:"render",value:function(){this.props.$route;return d.default.createElement("div",{style:{background:"#fff",minHeight:"200px",margin:"10px"}},d.default.createElement("h1",null,"Page3"),d.default.createElement("div",null,d.default.createElement(n.default,{percent:30}),d.default.createElement(n.default,{percent:50,status:"active"}),d.default.createElement(n.default,{percent:70,status:"exception"}),d.default.createElement(n.default,{percent:100}),d.default.createElement(n.default,{percent:50,showInfo:!1})))}}]),r=i;function i(){return(0,l.default)(this,i),(0,o.default)(this,(i.__proto__||(0,u.default)(i)).apply(this,arguments))}t.default=r},335:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n={},u=a(336);u.keys().forEach(function(e){var t=u(e),a=e.replace(/(.*\/)*([^.]+).*/gi,"$2"),e=e.replace(/.+\./,"");n[a+"_"+e]=t.default}),t.default=n},336:function(e,t,a){var n={"./test.gif":337,"./test.png":338};function u(e){e=l(e);return a(e)}function l(e){if(a.o(n,e))return n[e];e=new Error("Cannot find module '"+e+"'");throw e.code="MODULE_NOT_FOUND",e}u.keys=function(){return Object.keys(n)},u.resolve=l,(e.exports=u).id=336},337:function(e,t,a){"use strict";a.r(t),t.default="http://192.168.11.251/2021/iotm/dist/release-beta/assets/img/test-028b9a.gif"},338:function(e,t,a){"use strict";a.r(t),t.default="http://192.168.11.251/2021/iotm/dist/release-beta/assets/img/test-7575de.png"}});