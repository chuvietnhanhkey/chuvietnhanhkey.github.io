(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{"+oT+":function(e,t,a){var n=a("eVuF");function r(e,t,a,r,o,l,i){try{var u=e[l](i),c=u.value}catch(s){return void a(s)}u.done?t(c):n.resolve(c).then(r,o)}e.exports=function(e){return function(){var t=this,a=arguments;return new n(function(n,o){var l=e.apply(t,a);function i(e){r(l,n,o,i,u,"next",e)}function u(e){r(l,n,o,i,u,"throw",e)}i(void 0)})}}},"0KLy":function(e,t,a){"use strict";var n=a("KI45"),r=n(a("p0XB")),o=n(a("0iUn")),l=n(a("sLSF")),i=n(a("MI3g")),u=n(a("a7VT")),c=n(a("Tit0")),s=n(a("XXOK")),d=n(a("UXZV")),f=n(a("eVuF")),h=n(a("pLtp")),p=function(e){return e&&e.__esModule?e:{default:e}};(0,n(a("hfKm")).default)(t,"__esModule",{value:!0});var m=p(a("q1tI")),v=a("Q0KE"),g=[],y=[],E=!1;function b(e){var t=e(),a={loading:!0,loaded:null,error:null};return a.promise=t.then(function(e){return a.loading=!1,a.loaded=e,e}).catch(function(e){throw a.loading=!1,a.error=e,e}),a}function w(e){var t={loading:!1,loaded:{},error:null},a=[];try{(0,h.default)(e).forEach(function(n){var r=b(e[n]);r.loading?t.loading=!0:(t.loaded[n]=r.loaded,t.error=r.error),a.push(r.promise),r.promise.then(function(e){t.loaded[n]=e}).catch(function(e){t.error=e})})}catch(n){t.error=n}return t.promise=f.default.all(a).then(function(e){return t.loading=!1,e}).catch(function(e){throw t.loading=!1,e}),t}function k(e,t){return m.default.createElement((a=e)&&a.__esModule?a.default:a,t);var a}function N(e,t){var a,n=(0,d.default)({loader:null,loading:null,delay:200,timeout:null,render:k,webpack:null,modules:null},t),f=null;function h(){return f||(f=e(n.loader)),f.promise}if(!E&&"function"===typeof n.webpack){var p=n.webpack();y.push(function(e){var t=!0,a=!1,n=void 0;try{for(var r,o=(0,s.default)(p);!(t=(r=o.next()).done);t=!0){var l=r.value;if(-1!==e.indexOf(l))return h()}}catch(i){a=!0,n=i}finally{try{t||null==o.return||o.return()}finally{if(a)throw n}}})}return(a=function(t){function a(t){var r;return(0,o.default)(this,a),(r=(0,i.default)(this,(0,u.default)(a).call(this,t))).retry=function(){r.setState({error:null,loading:!0,timedOut:!1}),f=e(n.loader),r._loadModule()},h(),r.state={error:f.error,pastDelay:!1,timedOut:!1,loading:f.loading,loaded:f.loaded},r}return(0,c.default)(a,t),(0,l.default)(a,[{key:"componentWillMount",value:function(){this._mounted=!0,this._loadModule()}},{key:"_loadModule",value:function(){var e=this;if(this.context&&(0,r.default)(n.modules)&&n.modules.forEach(function(t){e.context(t)}),f.loading){"number"===typeof n.delay&&(0===n.delay?this.setState({pastDelay:!0}):this._delay=setTimeout(function(){e.setState({pastDelay:!0})},n.delay)),"number"===typeof n.timeout&&(this._timeout=setTimeout(function(){e.setState({timedOut:!0})},n.timeout));var t=function(){e._mounted&&(e.setState({error:f.error,loaded:f.loaded,loading:f.loading}),e._clearTimeouts())};f.promise.then(function(){t()}).catch(function(e){t()})}}},{key:"componentWillUnmount",value:function(){this._mounted=!1,this._clearTimeouts()}},{key:"_clearTimeouts",value:function(){clearTimeout(this._delay),clearTimeout(this._timeout)}},{key:"render",value:function(){return this.state.loading||this.state.error?m.default.createElement(n.loading,{isLoading:this.state.loading,pastDelay:this.state.pastDelay,timedOut:this.state.timedOut,error:this.state.error,retry:this.retry}):this.state.loaded?n.render(this.state.loaded,this.props):null}}],[{key:"preload",value:function(){return h()}}]),a}(m.default.Component)).contextType=v.LoadableContext,a}function T(e){return N(b,e)}function x(e,t){for(var a=[];e.length;){var n=e.pop();a.push(n(t))}return f.default.all(a).then(function(){if(e.length)return x(e,t)})}T.Map=function(e){if("function"!==typeof e.render)throw new Error("LoadableMap requires a `render(loaded, props)` function");return N(w,e)},T.preloadAll=function(){return new f.default(function(e,t){x(g).then(e,t)})},T.preloadReady=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return new f.default(function(t){var a=function(){return E=!0,t()};x(y,e).then(a,a)})},window.__NEXT_PRELOADREADY=T.preloadReady,t.default=T},"1TCz":function(e,t,a){"use strict";a.r(t);var n=a("0iUn"),r=a("sLSF"),o=a("MI3g"),l=a("a7VT"),i=a("Tit0"),u=a("q1tI"),c=a.n(u),s=a("8Bbg"),d=a.n(s),f=a("m/Pd"),h=a.n(f),p=a("nOHt"),m=(a("UgXd"),a("YFqc")),v=a.n(m);function g(e){var t=e.href,a=e.children,n=Object(p.useRouter)().pathname===t?"nav-item active":"nav-item";return c.a.createElement("li",{className:n},c.a.createElement(v.a,{href:t},a))}var y=function(e){var t=e.token;return c.a.createElement("header",null,c.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light bg-warning"},c.a.createElement("a",{href:"/",className:"navbar-brand"},"ChuVietNhanhKey"),c.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupp`ortedContent","aria-expanded":"false","aria-label":"Toggle navigation"},c.a.createElement("span",{className:"navbar-toggler-icon"})),c.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},c.a.createElement("ul",{className:"navbar-nav mr-auto"},c.a.createElement(g,{href:"/"},c.a.createElement("a",{className:"nav-link"},"Trang ch\u1ee7")),c.a.createElement("li",{className:"nav-item dropdown mr-2"},c.a.createElement("a",{className:"nav-link dropdown-toggle","data-toggle":"dropdown",href:"#",role:"button","aria-haspopup":"true","aria-expanded":"false"},"H\u01b0\u1edbng d\u1eabn"),c.a.createElement("div",{className:"dropdown-menu"},c.a.createElement(v.a,{href:"/huong-dan"},c.a.createElement("a",{className:"dropdown-item font-weight-bolder"},"B\u1eaft \u0111\u1ea7u nhanh")),c.a.createElement(v.a,{href:"/huong-dan"},c.a.createElement("a",{className:"dropdown-item"},"G\xf5 ch\u1eef Vi\u1ec7t \u1edf m\xe1y t\xednh (computer, laptop)")),c.a.createElement("div",{className:"dropdown-divider"}),c.a.createElement("span",{className:"dropdown-item font-weight-bold"},"C\xe0i \u0111\u1eb7t b\xe0n ph\xedm tr\xean phone/tablet"),c.a.createElement(v.a,{href:"/huong-dan#keyboard-android"},c.a.createElement("a",{className:"dropdown-item"},"H\u01b0\u1edbng d\u1eabn cho thi\u1ebft b\u1ecb Android (Samsung, HTC, Nokia,...)")),c.a.createElement(v.a,{href:"/huong-dan#keyboard-ios"},c.a.createElement("a",{className:"dropdown-item"},"H\u01b0\u1edbng d\u1eabn cho thi\u1ebft b\u1ecb iPhone/iPad")))),c.a.createElement(g,{href:"/meo-bo-tui"},c.a.createElement("a",{className:"nav-link"},"M\u1eb9o b\u1ecf t\xfai")),c.a.createElement(g,{href:"/tac-gia"},c.a.createElement("a",{className:"nav-link"},"T\xe1c gi\u1ea3"))),c.a.createElement("div",{className:"form-inline my-2 my-lg-0"},t&&c.a.createElement("button",{className:"btn btn-outline-warning my-2 my-sm-0",onClick:logout},"Logout")))))},E=function(e){function t(){return Object(n.default)(this,t),Object(o.default)(this,Object(l.default)(t).apply(this,arguments))}return Object(i.default)(t,e),Object(r.default)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"bg-dark pb-3 d-print-none"},c.a.createElement("br",null),c.a.createElement("div",{className:"container text-light"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col"},c.a.createElement("nav",{className:"nav flex-column"},c.a.createElement(v.a,{href:"#"},c.a.createElement("a",{className:"nav-link text-white font-weight-bold active",href:"#"},"CHUVIETNHANHKEY")),c.a.createElement(v.a,{href:"/"},c.a.createElement("a",{className:"nav-link text-white",href:"/"},"Trang ch\xednh")),c.a.createElement(v.a,{href:"/meo-bo-tui"},c.a.createElement("a",{className:"nav-link text-white",href:"/meo-bo-tui"},"M\u1eb9o b\u1ecf t\xfai")),c.a.createElement(v.a,{href:"/tac-gia"},c.a.createElement("a",{className:"nav-link text-white",href:"/tac-gia"},"T\xe1c gi\u1ea3")))),c.a.createElement("div",{className:"col"},c.a.createElement("nav",{className:"nav flex-column"},c.a.createElement("a",{className:"nav-link text-white font-weight-bold active",href:"#"},"H\u01af\u1edaNG D\u1eaaN"),c.a.createElement(v.a,{href:"/huong-dan"},c.a.createElement("a",{className:"nav-link text-white",href:"/huong-dan"},"G\xf5 ch\u1eef Vi\u1ec7t \u1edf m\xe1y t\xednh (computer, laptop)")),c.a.createElement("a",{className:"nav-link text-white",href:"/huong-dan#keyboard-android"},"H\u01b0\u1edbng d\u1eabn cho thi\u1ebft b\u1ecb Android (Samsung, HTC, Nokia,...)"),c.a.createElement("a",{className:"nav-link text-white",href:"/huong-dan#keyboard-ios"},"H\u01b0\u1edbng d\u1eabn cho thi\u1ebft b\u1ecb iPhone/iPad"))),c.a.createElement("div",{className:"col"},c.a.createElement("nav",{className:"nav flex-column"},c.a.createElement("a",{className:"nav-link text-white font-weight-bold active",href:"#"},"TH\xd4NG TIN TH\xcaM"),c.a.createElement(v.a,{href:"/nhat-ky-phat-trien"},c.a.createElement("a",{className:"nav-link text-white",href:"/nhat-ky-phat-trien"},"Nh\u1eadt k\xfd ph\xe1t tri\u1ec3n")),c.a.createElement("a",{className:"nav-link text-white",href:"https://nghiaht.github.io"},"Hu\u1ef3nh Tr\u1ecdng Ngh\u0129a"),c.a.createElement("a",{className:"nav-link text-white",href:"http://chuvietnhanh.sf.net"},"Ch\u1eef Vi\u1ec7t Nhanh")))),c.a.createElement("br",null),c.a.createElement("p",{className:"text-center"},"\xa9 B\u1ed9 g\xf5 Ti\u1ebfng Vi\u1ec7t ChuVietNhanhKey, 2017 - 2019, \u0111\u01b0\u1ee3c ph\xe1t tri\u1ec3n b\u1edfi Hu\u1ef3nh Tr\u1ecdng Ngh\u0129a",c.a.createElement("br",null),c.a.createElement("strong",null,c.a.createElement("a",{href:"http://chuvietnhanhkey.sf.net"},"chuvietnhanhkey.sf.net")),","," ",c.a.createElement("a",{href:"https://chuvietnhanhkey.sourceforge.io"},"chuvietnhanhkey.sourceforge.io"),","," ",c.a.createElement("a",{href:"https://chuvietnhanhkey.github.io/"},"chuvietnhanhkey.github.io")),c.a.createElement("div",{className:"text-center"},c.a.createElement("div",{className:"fb-like","data-href":"https://chuvietnhanhkey.sourceforge.io/","data-width":"","data-layout":"standard","data-action":"like","data-size":"small","data-show-faces":"true","data-share":"true"}))))}}]),t}(c.a.Component),b=function(e){function t(){return Object(n.default)(this,t),Object(o.default)(this,Object(l.default)(t).apply(this,arguments))}return Object(i.default)(t,e),Object(r.default)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"",style:{backgroundColor:"rgba(0,0,0,.065)"}},c.a.createElement(h.a,null,c.a.createElement("title",null," ChuVietNhanhKey: B\u1ed9 g\xf5 nhanh Ti\u1ebfng Vi\u1ec7t | Hu\u1ef3nh Tr\u1ecdng Ngh\u0129a"),c.a.createElement("link",{rel:"stylesheet",href:"https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css",integrity:"sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T",crossOrigin:"anonymous"}),c.a.createElement(c.a.Fragment,null,c.a.createElement("script",{async:!0,src:"https://www.googletagmanager.com/gtag/js?id=".concat("UA-27677844-7")}),c.a.createElement("script",{dangerouslySetInnerHTML:{__html:"\n            window.dataLayer = window.dataLayer || [];\n            function gtag(){dataLayer.push(arguments);}\n            gtag('js', new Date());\n            gtag('config', '".concat("UA-27677844-7","');\n          ")}}))),c.a.createElement(y,null),this.props.children,c.a.createElement(E,null),c.a.createElement("script",{src:"https://code.jquery.com/jquery-3.3.1.slim.min.js",integrity:"sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo",crossOrigin:"anonymous"}),c.a.createElement("script",{src:"https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js",integrity:"sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1",crossOrigin:"anonymous"}),c.a.createElement("script",{src:"https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js",integrity:"sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM",crossOrigin:"anonymous"}),c.a.createElement("div",{id:"fb-root"}),c.a.createElement("script",{async:!0,defer:!0,crossOrigin:"anonymous",src:"https://connect.facebook.net/vi_VN/sdk.js#xfbml=1&version=v4.0&appId=546969146044748&autoLogAppEvents=1"}))}}]),t}(c.a.Component),w=function(e){function t(){return Object(n.default)(this,t),Object(o.default)(this,Object(l.default)(t).apply(this,arguments))}return Object(i.default)(t,e),Object(r.default)(t,[{key:"render",value:function(){var e=this.props,t=e.Component,a=e.pageProps;return c.a.createElement(s.Container,null,c.a.createElement(b,null,c.a.createElement(t,a)))}}]),t}(d.a);t.default=w},"8Bbg":function(e,t,a){e.exports=a("B5Ud")},B5Ud:function(e,t,a){"use strict";var n=a("KI45"),r=n(a("0iUn")),o=n(a("sLSF")),l=n(a("MI3g")),i=n(a("a7VT")),u=n(a("Tit0")),c=n(a("ln6h")),s=a("KI45");t.__esModule=!0,t.Container=b,t.createUrl=k,t.default=void 0;var d=s(a("htGi")),f=s(a("+oT+")),h=s(a("q1tI")),p=s(a("lgD3")),m=a("Bu4q");t.AppInitialProps=m.AppInitialProps;var v=a("nOHt");function g(e){return y.apply(this,arguments)}function y(){return(y=(0,f.default)(c.default.mark(function e(t){var a,n,r;return c.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.Component,n=t.ctx,e.next=3,(0,m.loadGetInitialProps)(a,n);case 3:return r=e.sent,e.abrupt("return",{pageProps:r});case 5:case"end":return e.stop()}},e)}))).apply(this,arguments)}var E=function(e){function t(){return(0,r.default)(this,t),(0,l.default)(this,(0,i.default)(t).apply(this,arguments))}return(0,u.default)(t,e),(0,o.default)(t,[{key:"getChildContext",value:function(){return{router:(0,v.makePublicRouterInstance)(this.props.router)}}},{key:"componentDidCatch",value:function(e,t){throw e}},{key:"render",value:function(){var e=this.props,t=e.router,a=e.Component,n=e.pageProps,r=k(t);return h.default.createElement(b,null,h.default.createElement(a,(0,d.default)({},n,{url:r})))}}]),t}(h.default.Component);function b(e){return e.children}t.default=E,E.childContextTypes={router:p.default.object},E.origGetInitialProps=g,E.getInitialProps=g;var w=(0,m.execOnce)(function(){0});function k(e){var t=e.pathname,a=e.asPath,n=e.query;return{get query(){return w(),n},get pathname(){return w(),t},get asPath(){return w(),a},back:function(){w(),e.back()},push:function(t,a){return w(),e.push(t,a)},pushTo:function(t,a){w();var n=a?t:"",r=a||t;return e.push(n,r)},replace:function(t,a){return w(),e.replace(t,a)},replaceTo:function(t,a){w();var n=a?t:"",r=a||t;return e.replace(n,r)}}}},GcxT:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){var e=a("1TCz");return{page:e.default||e}}])},Q0KE:function(e,t,a){"use strict";var n=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)Object.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t.default=e,t};(0,a("KI45")(a("hfKm")).default)(t,"__esModule",{value:!0});var r=n(a("q1tI"));t.LoadableContext=r.createContext(null)},UgXd:function(e,t,a){"use strict";var n=a("KI45"),r=n(a("pLtp")),o=n(a("UXZV")),l=n(a("eVuF")),i=function(e){return e&&e.__esModule?e:{default:e}};(0,n(a("hfKm")).default)(t,"__esModule",{value:!0});var u=i(a("q1tI")),c=i(a("0KLy")),s=!1;function d(e,t){if(delete t.webpack,delete t.modules,!s)return e(t);var a=t.loading;return function(){return u.default.createElement(a,{error:null,isLoading:!0,pastDelay:!1,timedOut:!1})}}t.noSSR=d,t.default=function(e,t){var a=c.default,n={loading:function(e){return e.error,e.isLoading,e.pastDelay,null}};if(e instanceof l.default?n.loader=function(){return e}:"function"===typeof e?n.loader=e:"object"===typeof e&&(n=(0,o.default)({},n,e)),n=(0,o.default)({},n,t),"object"===typeof e&&!(e instanceof l.default)&&(e.render&&(n.render=function(t,a){return e.render(a,t)}),e.modules)){a=c.default.Map;var i={},u=e.modules();(0,r.default)(u).forEach(function(e){var t=u[e];"function"!==typeof t.then?i[e]=t:i[e]=function(){return t.then(function(e){return e.default||e})}}),n.loader=i}if(n.loadableGenerated&&delete(n=(0,o.default)({},n,n.loadableGenerated)).loadableGenerated,"boolean"===typeof n.ssr){if(!n.ssr)return delete n.ssr,d(a,n);delete n.ssr}return a(n)}},YFqc:function(e,t,a){e.exports=a("cTJO")},cTJO:function(e,t,a){"use strict";var n=a("KI45"),r=n(a("0iUn")),o=n(a("sLSF")),l=n(a("MI3g")),i=n(a("a7VT")),u=n(a("Tit0")),c=a("5Uuq"),s=a("KI45");t.__esModule=!0,t.default=void 0;var d,f=s(a("LX0d")),h=a("CxY0"),p=c(a("q1tI")),m=(s(a("lgD3")),s(a("nOHt"))),v=a("KA3u"),g=a("Bu4q");function y(e){return e&&"object"===typeof e?(0,g.formatWithValidation)(e):e}var E=new f.default,b=window.IntersectionObserver;function w(){return d||(b?d=new b(function(e){e.forEach(function(e){if(E.has(e.target)){var t=E.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(d.unobserve(e.target),E.delete(e.target),t())}})},{rootMargin:"200px"}):void 0)}var k=function(e){function t(){var e;return(0,r.default)(this,t),(e=(0,l.default)(this,(0,i.default)(t).apply(this,arguments))).cleanUpListeners=function(){},e.formatUrls=function(e){var t=null,a=null,n=null;return function(r,o){if(n&&r===t&&o===a)return n;var l=e(r,o);return t=r,a=o,n=l,l}}(function(e,t){return{href:y(e),as:t?y(t):t}}),e.linkClicked=function(t){var a=t.currentTarget,n=a.nodeName,r=a.target;if("A"!==n||!(r&&"_self"!==r||t.metaKey||t.ctrlKey||t.shiftKey||t.nativeEvent&&2===t.nativeEvent.which)){var o=e.formatUrls(e.props.href,e.props.as),l=o.href,i=o.as;if(function(e){var t=(0,h.parse)(e,!1,!0),a=(0,h.parse)((0,g.getLocationOrigin)(),!1,!0);return!t.host||t.protocol===a.protocol&&t.host===a.host}(l)){var u=window.location.pathname;l=(0,h.resolve)(u,l),i=i?(0,h.resolve)(u,i):l,t.preventDefault();var c=e.props.scroll;null==c&&(c=i.indexOf("#")<0),m.default[e.props.replace?"replace":"push"](l,i,{shallow:e.props.shallow}).then(function(e){e&&c&&(window.scrollTo(0,0),document.body.focus())})}}},e}return(0,u.default)(t,e),(0,o.default)(t,[{key:"componentWillUnmount",value:function(){this.cleanUpListeners()}},{key:"handleRef",value:function(e){var t=this;this.props.prefetch&&b&&e&&e.tagName&&(this.cleanUpListeners(),this.cleanUpListeners=function(e,t){var a=w();return a?(a.observe(e),E.set(e,t),function(){a.unobserve(e),E.delete(e)}):function(){}}(e,function(){t.prefetch()}))}},{key:"prefetch",value:function(){if(this.props.prefetch){var e=window.location.pathname,t=this.formatUrls(this.props.href,this.props.as).href,a=(0,h.resolve)(e,t);m.default.prefetch(a)}}},{key:"render",value:function(){var e=this,t=this.props.children,a=this.formatUrls(this.props.href,this.props.as),n=a.href,r=a.as;"string"===typeof t&&(t=p.default.createElement("a",null,t));var o=p.Children.only(t),l={ref:function(t){return e.handleRef(t)},onMouseEnter:function(t){o.props&&"function"===typeof o.props.onMouseEnter&&o.props.onMouseEnter(t),e.prefetch()},onClick:function(t){o.props&&"function"===typeof o.props.onClick&&o.props.onClick(t),t.defaultPrevented||e.linkClicked(t)}};return!this.props.passHref&&("a"!==o.type||"href"in o.props)||(l.href=r||n),l.href&&"undefined"!==typeof __NEXT_DATA__&&__NEXT_DATA__.nextExport&&(l.href=(0,v.rewriteUrlForNextExport)(l.href)),p.default.cloneElement(o,l)}}]),t}(p.Component);k.propTypes=void 0,k.defaultProps={prefetch:!0};var N=k;t.default=N}},[["GcxT",1,0]]]);