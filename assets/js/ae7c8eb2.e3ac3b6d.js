(self.webpackChunkchaosblade=self.webpackChunkchaosblade||[]).push([[2361],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return s},kt:function(){return d}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),m=p(n),d=o,b=m["".concat(l,".").concat(d)]||m[d]||u[d]||a;return n?r.createElement(b,c(c({ref:t},s),{},{components:n})):r.createElement(b,c({ref:t},s))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,c=new Array(a);c[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var p=2;p<a;p++)c[p]=n[p];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1987:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return c},metadata:function(){return i},toc:function(){return l},default:function(){return s}});var r=n(2122),o=n(9756),a=(n(7294),n(3905)),c={id:"blade create jvm throwCustomException"},i={unversionedId:"experiment-types/jvm/blade create jvm throwCustomException",id:"experiment-types/jvm/blade create jvm throwCustomException",isDocsHomePage:!1,title:"\u6a21\u62df\u7c7b\u65b9\u6cd5\u629b\u81ea\u5b9a\u4e49\u5f02\u5e38",description:"\u4ecb\u7ecd",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/experiment-types/jvm/blade_create_jvm_throwCustomException.md",sourceDirName:"experiment-types/jvm",slug:"/experiment-types/jvm/blade create jvm throwCustomException",permalink:"/docs/experiment-types/jvm/blade create jvm throwCustomException",editUrl:"https://github.com/chaosblade-io/chaosblade-website/edit/master/website/docs/experiment-types/jvm/blade_create_jvm_throwCustomException.md",version:"current",frontMatter:{id:"blade create jvm throwCustomException"},sidebar:"docs",previous:{title:"\u6a21\u62df\u586b\u5145Jvm CodeCache",permalink:"/docs/experiment-types/jvm/blade create jvm CodeCacheFilling"}},l=[{value:"\u4ecb\u7ecd",id:"\u4ecb\u7ecd",children:[]},{value:"\u53c2\u6570",id:"\u53c2\u6570",children:[]},{value:"\u6848\u4f8b",id:"\u6848\u4f8b",children:[]},{value:"\u5e38\u89c1\u95ee\u9898",id:"\u5e38\u89c1\u95ee\u9898",children:[]}],p={toc:l};function s(e){var t=e.components,c=(0,o.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,r.Z)({},p,c,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u4ecb\u7ecd"},"\u4ecb\u7ecd"),(0,a.kt)("p",null,"\u6307\u5b9a\u7c7b\u65b9\u6cd5\u629b\u81ea\u5b9a\u4e49\u5f02\u5e38\uff0c\u547d\u4ee4\u53ef\u4ee5\u7b80\u5199\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"blade c jvm tce")),(0,a.kt)("h2",{id:"\u53c2\u6570"},"\u53c2\u6570"),(0,a.kt)("p",null,"\u4ee5\u4e0b\u662f\u6b64\u573a\u666f\u7279\u6709\u53c2\u6570\uff0c\u901a\u7528\u53c2\u6570\u8be6\u89c1\uff1a","[blade create jvm]","(blade create jvm.md)"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"--effect-count string     \u5f71\u54cd\u7684\u8bf7\u6c42\u6761\u6570\n--effect-percent string   \u5f71\u54cd\u7684\u8bf7\u6c42\u767e\u5206\u6bd4\n--exception string           \u5f02\u5e38\u7c7b\uff0c\u5e26\u5168\u5305\u540d\uff0c\u5fc5\u987b\u7ee7\u627f java.lang.Exception \u6216 java.lang.Exception \u672c\u8eab\n--exception-message string   \u6307\u5b9a\u5f02\u5e38\u7c7b\u4fe1\u606f\uff0c\u9ed8\u8ba4\u503c\u662f chaosblade-mock-exception\n")),(0,a.kt)("h2",{id:"\u6848\u4f8b"},"\u6848\u4f8b"),(0,a.kt)("p",null,"\u7c7b\u540d\uff1acom.example.controller.DubboController\uff0c\u4e1a\u52a1\u4ee3\u7801\u5982\u4e0b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'private String sayHello(String name) throws BeansException {\n    demoService = (DemoService)SpringContextUtil.getBean("demoService");\n    StringBuilder result = new StringBuilder();\n    result.append(demoService.sayHello(name));\n    return result.toString();\n}\n')),(0,a.kt)("p",null,"\u6307\u5b9a\u4ee5\u4e0a\u65b9\u6cd5\u629b\u51fa java.lang.Exception \u5f02\u5e38\uff0c\u5f71\u54cd\u4e24\u6761\u8bf7\u6c42\uff0c\u547d\u4ee4\u5982\u4e0b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'blade c jvm throwCustomException --exception java.lang.Exception --classname com.example.controller.DubboController --methodname sayHello --process tomcat --effect-count 2\n\n{"code":200,"success":true,"result":"3abbe6fe97d6bc75"}\n')),(0,a.kt)("p",null,"\u9a8c\u8bc1\u7ed3\u679c\uff1a\n\u6ce8\u5165\u524d\uff1a\n",(0,a.kt)("img",{src:n(1041).Z})),(0,a.kt)("p",null,"\u6ce8\u5165\u540e\uff1a\n",(0,a.kt)("img",{src:n(8090).Z})),(0,a.kt)("p",null,"\u7b2c\u4e09\u6b21\u8bf7\u6c42\u540e\u6062\u590d\u6b63\u5e38\uff1a\n",(0,a.kt)("img",{src:n(9718).Z})),(0,a.kt)("p",null,"\u505c\u6b62\u5b9e\u9a8c\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"blade d 3abbe6fe97d6bc75\n")),(0,a.kt)("h2",{id:"\u5e38\u89c1\u95ee\u9898"},"\u5e38\u89c1\u95ee\u9898"),(0,a.kt)("p",null,"Q: java.lang.Throwable not assign from java.lang.Exception\nA: \u914d\u7f6e --exception \u53c2\u6570\u503c java.lang.Throwable\uff0c\u5176\u4e0d\u662f java.lang.Exception \u7684\u5b50\u7c7b"))}s.isMDXComponent=!0},1041:function(e,t,n){"use strict";t.Z=n.p+"assets/images/15758764889007-9502e7998c667abf3c421997e5a8edc0.jpg"},8090:function(e,t,n){"use strict";t.Z=n.p+"assets/images/15758765032336-9f16bf1afb7693621351e0b5972100a4.jpg"},9718:function(e,t,n){"use strict";t.Z=n.p+"assets/images/15758765299049-aa35677a9d84687b4800bc650bcbfcbe.jpg"}}]);