(self.webpackChunkchaosblade=self.webpackChunkchaosblade||[]).push([[4842],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return s},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,c=e.originalType,l=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),m=u(n),d=a,f=m["".concat(l,".").concat(d)]||m[d]||p[d]||c;return n?r.createElement(f,o(o({ref:t},s),{},{components:n})):r.createElement(f,o({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=n.length,o=new Array(c);o[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var u=2;u<c;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7569:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},metadata:function(){return i},toc:function(){return l},default:function(){return s}});var r=n(2122),a=n(9756),c=(n(7294),n(3905)),o={id:"blade create jvm delay"},i={unversionedId:"experiment-types/jvm/blade create jvm delay",id:"experiment-types/jvm/blade create jvm delay",isDocsHomePage:!1,title:"\u6a21\u62df\u7c7b\u65b9\u6cd5\u8c03\u7528\u5ef6\u8fdf",description:"\u4ecb\u7ecd",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/experiment-types/jvm/blade_create_jvm_delay.md",sourceDirName:"experiment-types/jvm",slug:"/experiment-types/jvm/blade create jvm delay",permalink:"/docs/experiment-types/jvm/blade create jvm delay",editUrl:"https://github.com/chaosblade-io/chaosblade-website/edit/master/website/docs/experiment-types/jvm/blade_create_jvm_delay.md",version:"current",frontMatter:{id:"blade create jvm delay"},sidebar:"docs",previous:{title:"\u6302\u8f7dJava Agent",permalink:"/docs/experiment-types/jvm/blade prepare jvm"},next:{title:"\u6a21\u62df\u6307\u5b9a\u7c7b\u65b9\u6cd5\u8fd4\u56de\u503c",permalink:"/docs/experiment-types/jvm/blade create jvm return"}},l=[{value:"\u4ecb\u7ecd",id:"\u4ecb\u7ecd",children:[]},{value:"\u53c2\u6570",id:"\u53c2\u6570",children:[]},{value:"\u6848\u4f8b",id:"\u6848\u4f8b",children:[]},{value:"\u5e38\u89c1\u95ee\u9898",id:"\u5e38\u89c1\u95ee\u9898",children:[]}],u={toc:l};function s(e){var t=e.components,o=(0,a.Z)(e,["components"]);return(0,c.kt)("wrapper",(0,r.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("h2",{id:"\u4ecb\u7ecd"},"\u4ecb\u7ecd"),(0,c.kt)("p",null,"\u6307\u5b9a\u7c7b\u65b9\u6cd5\u8c03\u7528\u5ef6\u8fdf"),(0,c.kt)("h2",{id:"\u53c2\u6570"},"\u53c2\u6570"),(0,c.kt)("p",null,"\u4ee5\u4e0b\u662f\u6b64\u573a\u666f\u7279\u6709\u53c2\u6570\uff0c\u901a\u7528\u53c2\u6570\u8be6\u89c1\uff1a","[blade create jvm]","(blade create jvm.md)"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre"},"--effect-count string     \u5f71\u54cd\u7684\u8bf7\u6c42\u6761\u6570\n--effect-percent string   \u5f71\u54cd\u7684\u8bf7\u6c42\u767e\u5206\u6bd4\n--time string             \u5ef6\u8fdf\u65f6\u95f4\uff0c\u5355\u4f4d\u662f\u6beb\u79d2\uff0c\u5fc5\u586b\u9879\n--offset string           \u5ef6\u8fdf\u65f6\u95f4\u4e0a\u4e0b\u504f\u79fb\u91cf\uff0c\u6bd4\u5982 --time 3000 --offset 1000\uff0c\u5219\u5ef6\u8fdf\u65f6\u95f4\u8303\u56f4\u662f 2000-4000 \u6beb\u79d2\n")),(0,c.kt)("h2",{id:"\u6848\u4f8b"},"\u6848\u4f8b"),(0,c.kt)("p",null,"\u4e1a\u52a1\u65b9\u6cd5\u901a\u8fc7 future \u83b7\u53d6\u8fd4\u56de\u503c\uff0c\u4ee3\u7801\u5982\u4e0b\uff1a"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre"},'@RequestMapping(value = "async")\n@ResponseBody\npublic String asyncHello(final String name, long timeout) {\n    if (timeout == 0) {\n        timeout = 3000;\n    }\n    try {\n        FutureTask futureTask = new FutureTask(new Callable() {\n            @Override\n            public Object call() throws Exception {\n                return sayHello(name);\n            }\n        });\n        new Thread(futureTask).start();\n        return (String)futureTask.get(timeout, TimeUnit.MILLISECONDS);\n    } catch (TimeoutException e) {\n        return "timeout, " + e.getMessage() + "\\n";\n    } catch (Exception e) {\n        return e.getMessage() + "\\n";\n    }\n}\n')),(0,c.kt)("p",null,"\u6211\u4eec\u5bf9 sayHello \u65b9\u6cd5\u8c03\u7528\u6ce8\u5165 4 \u79d2\u5ef6\u8fdf\u6545\u969c\uff0cfutureTask.get(2000, TimeUnit.MILLISECONDS)  \u4f1a\u53d1\u751f\u8d85\u65f6\u8fd4\u56de\uff1a"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre"},'blade c jvm delay --time 4000 --classname=com.example.controller.DubboController --methodname=sayHello --process tomcat\n\n{"code":200,"success":true,"result":"d6ebea0dc28b6ab3"}\n')),(0,c.kt)("p",null,"\u6ce8\u5165\u6545\u969c\u524d\uff1a\n",(0,c.kt)("img",{src:n(7731).Z})),(0,c.kt)("p",null,"\u6ce8\u5165\u6545\u969c\u540e\uff1a\n",(0,c.kt)("img",{src:n(4429).Z})),(0,c.kt)("p",null,"\u505c\u6b62\u5b9e\u9a8c\uff1a"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre"},"blade d d6ebea0dc28b6ab3\n")),(0,c.kt)("h2",{id:"\u5e38\u89c1\u95ee\u9898"},"\u5e38\u89c1\u95ee\u9898"))}s.isMDXComponent=!0},7731:function(e,t,n){"use strict";t.Z=n.p+"assets/images/15758802870730-f9991aa2de1fa12b1ee3e378ea410314.jpg"},4429:function(e,t,n){"use strict";t.Z=n.p+"assets/images/15758806204281-c9d8d5b766379502efca9a8c5dc68d63.jpg"}}]);