(self.webpackChunkchaosblade=self.webpackChunkchaosblade||[]).push([[18],{4973:function(t,e,n){"use strict";n.d(e,{Z:function(){return f},I:function(){return u}});var r=n(7294),a=/{\w+}/g,i="{}";function s(t,e){var n=[],s=t.replace(a,(function(t){var a=t.substr(1,t.length-2),s=null==e?void 0:e[a];if(void 0!==s){var o=r.isValidElement(s)?s:String(s);return n.push(o),i}return t}));return 0===n.length?t:n.every((function(t){return"string"==typeof t}))?s.split(i).reduce((function(t,e,r){var a;return t.concat(e).concat(null!==(a=n[r])&&void 0!==a?a:"")}),""):s.split(i).reduce((function(t,e,a){return[].concat(t,[r.createElement(r.Fragment,{key:a},e,n[a])])}),[])}function o(t){return s(t.children,t.values)}var l=n(4644);function c(t){var e,n=t.id,r=t.message;return null!==(e=l[null!=n?n:r])&&void 0!==e?e:r}function u(t,e){var n,r=t.message;return s(null!==(n=c({message:r,id:t.id}))&&void 0!==n?n:r,e)}function f(t){var e,n=t.children,a=t.id,i=t.values,s=null!==(e=c({message:n,id:a}))&&void 0!==e?e:n;return r.createElement(o,{values:i},s)}},1892:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return g}});var r=n(3552),a=n(7294),i=n(6010),s="companyUsage_3sOj",o="logos_3g3Q",l="logoNavigation_3yj2",c="button_24Bd",u="buttonActive_WuSB",f=n(4973),h=0,g=function(t){function e(e){var n;return(n=t.call(this,e)||this).state={position:-0,activePage:0,swapInterval:0,pages:Math.ceil(e.logos?e.logos.length/6:1),margin:70},n.containerRef=a.createRef(),n}(0,r.Z)(e,t);var n=e.prototype;return n.componentDidMount=function(){var t=this.containerRef.current.getBoundingClientRect(),e=Math.floor(t.width/150);this.setState({swapInterval:setInterval(this.nextPage.bind(this),5e3),pages:Math.ceil(this.props.logos?this.props.logos.length/e:1),margin:t.width<700?0:70})},n.componentWillUnmount=function(){clearInterval(this.state.swapInterval)},n.animateTo=function(t){var e=t*-(this.containerRef.current.getBoundingClientRect().width-this.state.margin);this.setState({position:e,activePage:t})},n.handleClick=function(t){this.animateTo(t),clearInterval(this.state.swapInterval),this.setState({swapInterval:setInterval(this.nextPage.bind(this),5e3)})},n.nextPage=function(){var t=this.state.pages-1,e=Math.floor(h/t)%2;this.animateTo(e?t-h%t:h%t),++h},n.render=function(){var t=this;return this.props&&this.props.logos?(this.buttons=function(){return[].concat(Array(t.state.pages)).map((function(e,n){return a.createElement("button",{onClick:function(){return t.handleClick(n)},key:n,className:(0,i.Z)(c,n===t.state.activePage?u:"")},n+1)}))},this.list=function(){return a.createElement("ul",{style:{transform:"translate("+t.state.position+"px, 0px)"}},t.props.logos.map((function(t,e){return a.createElement("li",{key:e},a.createElement("a",{href:t.url,target:"_blank",rel:"noopener noreferrer"},a.createElement("img",{src:"/img/logos/"+t.img,alt:t.alt})))})))},a.createElement("div",{className:s,ref:this.containerRef},a.createElement("h3",null,a.createElement(f.Z,null,"Who is using ChaosBlade?")),a.createElement("div",{className:(0,i.Z)(o)},this.list(),a.createElement("div",{className:l},this.buttons())))):a.createElement("div",null)},e}(a.Component)},6010:function(t,e,n){"use strict";function r(t){var e,n,a="";if("string"==typeof t||"number"==typeof t)a+=t;else if("object"==typeof t)if(Array.isArray(t))for(e=0;e<t.length;e++)t[e]&&(n=r(t[e]))&&(a&&(a+=" "),a+=n);else for(e in t)t[e]&&(a&&(a+=" "),a+=e);return a}function a(){for(var t,e,n=0,a="";n<arguments.length;)(t=arguments[n++])&&(e=r(t))&&(a&&(a+=" "),a+=e);return a}n.d(e,{Z:function(){return a}})}}]);