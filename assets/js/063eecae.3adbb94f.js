"use strict";(self.webpackChunkchaosblade=self.webpackChunkchaosblade||[]).push([[4343],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},b=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),b=s(n),f=a,d=b["".concat(c,".").concat(f)]||b[f]||p[f]||o;return n?r.createElement(d,l(l({ref:t},u),{},{components:n})):r.createElement(d,l({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=b;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}b.displayName="MDXCreateElement"},36005:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return p},frontMatter:function(){return o},metadata:function(){return i},toc:function(){return s}});var r=n(87462),a=(n(67294),n(3905));const o={title:"ChaosBlade Java \u573a\u666f\u6027\u80fd\u4f18\u5316\uff0c\u90a3\u4e9b\u4f60\u4e0d\u77e5\u9053\u7684\u4e8b",authors:"binbin",tags:["chaosblade"],description:"\u672c\u6587\u4f1a\u7740\u91cd\u4ecb\u7ecd\u4ec0\u4e48chaosblade java\u573a\u666f\u6027\u80fd\u4f18\u5316\u7684\u5b9e\u73b0\u3002",hide_table_of_contents:!1},l="1.\u4ecb\u7ecd",i={permalink:"/blog/2022/09/09/chaosblade-java",editUrl:"https://github.com/chaosblade-io/chaosblade-website/edit/master/blog/2022-09-09-chaosblade-java.md",source:"@site/blog/2022-09-09-chaosblade-java.md",title:"ChaosBlade Java \u573a\u666f\u6027\u80fd\u4f18\u5316\uff0c\u90a3\u4e9b\u4f60\u4e0d\u77e5\u9053\u7684\u4e8b",description:"\u672c\u6587\u4f1a\u7740\u91cd\u4ecb\u7ecd\u4ec0\u4e48chaosblade java\u573a\u666f\u6027\u80fd\u4f18\u5316\u7684\u5b9e\u73b0\u3002",date:"2022-09-09T00:00:00.000Z",formattedDate:"2022\u5e749\u67089\u65e5",tags:[{label:"chaosblade",permalink:"/blog/tags/chaosblade"}],readingTime:27.395,hasTruncateMarker:!0,authors:[{name:"\u5f20\u658c\u658c\uff08@binbin0325\uff09",title:"Committer of ChaosBlade",url:"https://github.com/binbin0325",imageURL:"https://avatars.githubusercontent.com/u/28588342?v=4",key:"binbin"}],frontMatter:{title:"ChaosBlade Java \u573a\u666f\u6027\u80fd\u4f18\u5316\uff0c\u90a3\u4e9b\u4f60\u4e0d\u77e5\u9053\u7684\u4e8b",authors:"binbin",tags:["chaosblade"],description:"\u672c\u6587\u4f1a\u7740\u91cd\u4ecb\u7ecd\u4ec0\u4e48chaosblade java\u573a\u666f\u6027\u80fd\u4f18\u5316\u7684\u5b9e\u73b0\u3002",hide_table_of_contents:!1},prevItem:{title:"\u5927\u89c4\u6a21 Kubernetes \u96c6\u7fa4\u6545\u969c\u6ce8\u5165\u7684\u5229\u5668-ChaosBlade",permalink:"/blog/2022/11/01/chaosblade-operator"},nextItem:{title:"ChaosBlade-Box\u5168\u65b0\u6df7\u6c8c\u5de5\u7a0b\u5e73\u53f0 -- \u52a9\u529b\u4f01\u4e1a\u6df7\u6c8c\u5de5\u7a0b\u843d\u5730",permalink:"/blog/2022/06/24/ChaosBlade-Box-a-New-Version-of-the-Chaos-Engineering-Platform-Has-Released-ch"}},c={authorsImageUrls:[void 0]},s=[],u={toc:s};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://chaosblade.io/"},"ChaosBlade")," \u662f\u963f\u91cc\u5df4\u5df4\u5f00\u6e90\u7684\u4e00\u6b3e\u9075\u5faa\u6df7\u6c8c\u5de5\u7a0b\u539f\u7406\u548c\u6df7\u6c8c\u5b9e\u9a8c\u6a21\u578b\u7684\u5b9e\u9a8c\u6ce8\u5165\u5de5\u5177\uff0c\u5e2e\u52a9\u4f01\u4e1a\u63d0\u5347\u5206\u5e03\u5f0f\u7cfb\u7edf\u7684\u5bb9\u9519\u80fd\u529b\uff0c\u5e76\u4e14\u5728\u4f01\u4e1a\u4e0a\u4e91\u6216\u5f80\u4e91\u539f\u751f\u7cfb\u7edf\u8fc1\u79fb\u8fc7\u7a0b\u4e2d\u4e1a\u52a1\u8fde\u7eed\u6027\u4fdd\u969c\u3002"),(0,a.kt)("p",null,"\u76ee\u524d\u652f\u6301\u7684\u573a\u666f\u6709\uff1a\u57fa\u7840\u8d44\u6e90\u3001Java \u5e94\u7528\u3001C++ \u5e94\u7528\u3001Docker \u5bb9\u5668\u4ee5\u53ca Kubernetes \u5e73\u53f0\u3002\u8be5\u9879\u76ee\u5c06\u573a\u666f\u6309\u9886\u57df\u5b9e\u73b0\u5c01\u88c5\u6210\u5355\u72ec\u7684\u9879\u76ee\uff0c\u4e0d\u4ec5\u53ef\u4ee5\u4f7f\u9886\u57df\u5185\u573a\u666f\u6807\u51c6\u5316\u5b9e\u73b0\uff0c\u800c\u4e14\u975e\u5e38\u65b9\u4fbf\u573a\u666f\u6c34\u5e73\u548c\u5782\u76f4\u6269\u5c55\uff0c\u901a\u8fc7\u9075\u5faa\u6df7\u6c8c\u5b9e\u9a8c\u6a21\u578b\uff0c\u5b9e\u73b0 ChaosBlade cli \u7edf\u4e00\u8c03\u7528\u3002"),(0,a.kt)("p",null,"\u4e0d\u8fc7Java\u573a\u666f\u4e0b\u7684\u6545\u969c\u6ce8\u5165\u76ee\u524d\u6709\u4e00\u4e9b\u6027\u80fd\u95ee\u9898,\u4e3b\u8981\u4f53\u73b0\u5728\u6545\u969c\u6ce8\u5165\u65f6\u4f1a\u8ba9CPU\u7684\u4f7f\u7528\u7387\u5927\u5e45\u5ea6\u6296\u52a8,\u4e25\u91cd\u60c5\u51b5\u4e0b\u53ef\u80fd\u4f1a\u5bfc\u81f4CPU\u7684\u4f7f\u7528\u7387100%\u3002\u8fd9\u79cd\u60c5\u51b5\u5bf9\u4e8e\u7ebf\u4e0b\u670d\u52a1\u7684\u5f71\u54cd\u8fd8\u597d\uff0c\u4f46\u662f\u5bf9\u4e8e\u7ebf\u4e0a\u670d\u52a1\u5c31\u6bd4\u8f83\u4e25\u91cd\u4e86\uff0c\u56e0\u4e3aCPU\u7684\u4f7f\u7528\u7387\u8f83\u9ad8\u6709\u53ef\u80fd\u4f1a\u5bfc\u81f4\u670d\u52a1\u7684\u6574\u4f53\u6027\u80fd\u53d8\u5dee\uff0c\u4ece\u800c\u5f71\u54cd\u63a5\u53e3\u7684\u8017\u65f6\u3002"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u901a\u8fc7\u5bf9ChaosBlade Java \u573a\u666f\u7684\u6027\u80fd\u4f18\u5316\uff0c\u4f7fCPU\u5728\u6545\u969c\u6ce8\u5165\u65f6\u7684\u6296\u52a8\u5f97\u5230\u4e86\u6709\u6548\u7684\u63a7\u5236\uff0c\u4e0d\u4f1a\u518d\u51fa\u73b0CPU\u4f7f\u7528\u7387\u8fbe\u5230100%\u7684\u6296\u52a8\uff0c\u7ecf\u8fc7\u6d4b\u8bd5\u5728\u7ebf\u4e0a8C\uff0c4G\uff0cQPS 3K\u5de6\u53f3\u7684\u670d\u52a1\u5b9e\u4f8b\u4e0a\u6ce8\u5165Dubbo \u81ea\u5b9a\u4e49\u629b\u5f02\u5e38\u7684\u6545\u969c\uff0cCPU\u7684\u4f7f\u7528\u7387\u53ef\u4ee5\u63a7\u5236\u572840%\u5de6\u53f3\u7684\u77ac\u65f6\u6296\u52a8\u8303\u56f4\u5185,\u6027\u80fd\u6574\u4f53\u63d0\u5347\u8fd12.5\u500d\u3002")),(0,a.kt)("p",null,"\u672c\u6587\u5c06\u4f1a\u8be6\u7ec6\u7684\u4ecb\u7ecd\u5f71\u54cd\u6027\u80fd\u7684\u95ee\u9898\u70b9\u4ee5\u53ca\u662f\u5982\u4f55\u5bf9\u8fd9\u4e9b\u95ee\u9898\u8fdb\u884c\u4f18\u5316\u7684\u3002"))}p.isMDXComponent=!0}}]);