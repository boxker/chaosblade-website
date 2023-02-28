"use strict";(self.webpackChunkchaosblade=self.webpackChunkchaosblade||[]).push([[3298],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return f}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=s(r),f=a,m=d["".concat(l,".").concat(f)]||d[f]||p[f]||o;return r?n.createElement(m,i(i({ref:t},u),{},{components:r})):n.createElement(m,i({ref:t},u))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},44610:function(e,t,r){r.r(t),r.d(t,{assets:function(){return l},contentTitle:function(){return i},default:function(){return p},frontMatter:function(){return o},metadata:function(){return c},toc:function(){return s}});var n=r(87462),a=(r(67294),r(3905));const o={title:"Quick Start"},i=void 0,c={unversionedId:"getting-started/quick-start",id:"version-1.7.1/getting-started/quick-start",title:"Quick Start",description:"Download the chaosblade demo image and experience the use of the blade toolkit.",source:"@site/versioned_docs/version-1.7.1/getting-started/quick-start.md",sourceDirName:"getting-started",slug:"/getting-started/quick-start",permalink:"/en/docs/getting-started/quick-start",draft:!1,editUrl:"https://github.com/chaosblade-io/chaosblade-website/edit/master/versioned_docs/version-1.7.1/getting-started/quick-start.md",tags:[],version:"1.7.1",frontMatter:{title:"Quick Start"},sidebar:"docs",previous:{title:"Platform Box Quick Start",permalink:"/en/docs/getting-started/platform-box-quick-start"},next:{title:"ChaosBlade\u5de5\u5177\u4f7f\u7528\u5feb\u901f\u5165\u95e8",permalink:"/en/docs/getting-started/chaosblade-tool-quick-start/"}},l={},s=[],u={toc:s};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Download the chaosblade demo image and experience the use of the blade toolkit."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://tvax2.sinaimg.cn/large/ad5fbf65gy1gq593nrinog212i0mqu0y.gif",alt:null})),(0,a.kt)("p",null,"Download image command\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"docker pull chaosbladeio/chaosblade-demo\n")),(0,a.kt)("p",null,"Run the demo container\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"docker run -it --privileged chaosbladeio/chaosblade-demo\n")),(0,a.kt)("p",null,"After entering the container, you can read the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/chaosblade-io/chaosblade"},"README.md")," file to implement the chaos experiment, Enjoy it."))}p.isMDXComponent=!0}}]);