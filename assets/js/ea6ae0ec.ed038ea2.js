"use strict";(self.webpackChunkchaosblade=self.webpackChunkchaosblade||[]).push([[6906],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return m}});var o=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},c=Object.keys(e);for(o=0;o<c.length;o++)t=c[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(o=0;o<c.length;o++)t=c[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=o.createContext({}),i=function(e){var n=o.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},p=function(e){var n=i(e.components);return o.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},u=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,c=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=i(t),m=r,h=u["".concat(l,".").concat(m)]||u[m]||d[m]||c;return t?o.createElement(h,a(a({ref:n},p),{},{components:t})):o.createElement(h,a({ref:n},p))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var c=t.length,a=new Array(c);a[0]=u;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var i=2;i<c;i++)a[i]=t[i];return o.createElement.apply(null,a)}return o.createElement.apply(null,t)}u.displayName="MDXCreateElement"},55751:function(e,n,t){t.r(n),t.d(n,{assets:function(){return l},contentTitle:function(){return a},default:function(){return d},frontMatter:function(){return c},metadata:function(){return s},toc:function(){return i}});var o=t(87462),r=(t(67294),t(3905));const c={},a="\u57fa\u7840\u8d44\u6e90\u573a\u666f\u6269\u5c55\u5f00\u53d1\u6587\u6863",s={unversionedId:"community/os-dev-guide",id:"community/os-dev-guide",title:"\u57fa\u7840\u8d44\u6e90\u573a\u666f\u6269\u5c55\u5f00\u53d1\u6587\u6863",description:"chaosblade-exec-os \u662f\u57fa\u7840\u8d44\u6e90\u573a\u666f\u9879\u76ee\uff0c\u4f8b\u5982\xa0CPU\u3001\u5185\u5b58\u3001\u8fdb\u7a0b\u3001\u7f51\u7edc\u3001\u78c1\u76d8\u7b49\u7cfb\u7edf\u8d44\u6e90\u57fa\u7840\u573a\u666f\u3002\u672c\u6587\u4ece\u9879\u76ee\u5de5\u7a0b\u3001\u6267\u884c\u6d41\u7a0b\u3001\u573a\u666f\u6269\u5c55\u3001\u6253\u5305\u6d4b\u8bd5\u56db\u4e2a\u65b9\u9762\u8be6\u7ec6\u4ecb\u7ecd\u57fa\u7840\u8d44\u6e90\u573a\u666f\u6269\u5c55\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/community/os-dev-guide.md",sourceDirName:"community",slug:"/community/os-dev-guide",permalink:"/docs/next/community/os-dev-guide",draft:!1,editUrl:"https://github.com/chaosblade-io/chaosblade-website/edit/master/docs/community/os-dev-guide.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"\u5f00\u53d1\u89c4\u8303",permalink:"/docs/next/community/dev-standard"},next:{title:"Issue\u63d0\u4ea4\u548c\u5904\u7406\u89c4\u8303",permalink:"/docs/next/community/issue-standard"}},l={},i=[{value:"\u573a\u666f\u5b9e\u73b0\u8bbe\u8ba1",id:"\u573a\u666f\u5b9e\u73b0\u8bbe\u8ba1",level:2},{value:"\u573a\u666f\u4ee3\u7801\u5b9e\u73b0",id:"\u573a\u666f\u4ee3\u7801\u5b9e\u73b0",level:2},{value:"\u6848\u4f8b\u53c2\u8003",id:"\u6848\u4f8b\u53c2\u8003",level:3},{value:"\u521b\u5efa\xa0shutdown\xa0\u6545\u969c\u547d\u4ee4",id:"\u521b\u5efashutdown\u6545\u969c\u547d\u4ee4",level:3},{value:"\u5b9e\u73b0\u91cd\u542f\u573a\u666f",id:"\u5b9e\u73b0\u91cd\u542f\u573a\u666f",level:3}],p={toc:i};function d(e){let{components:n,...c}=e;return(0,r.kt)("wrapper",(0,o.Z)({},p,c,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"\u57fa\u7840\u8d44\u6e90\u573a\u666f\u6269\u5c55\u5f00\u53d1\u6587\u6863"},"\u57fa\u7840\u8d44\u6e90\u573a\u666f\u6269\u5c55\u5f00\u53d1\u6587\u6863"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/chaosblade-io/chaosblade-exec-os"},"chaosblade-exec-os")," \u662f\u57fa\u7840\u8d44\u6e90\u573a\u666f\u9879\u76ee\uff0c\u4f8b\u5982\xa0CPU\u3001\u5185\u5b58\u3001\u8fdb\u7a0b\u3001\u7f51\u7edc\u3001\u78c1\u76d8\u7b49\u7cfb\u7edf\u8d44\u6e90\u57fa\u7840\u573a\u666f\u3002\u672c\u6587\u4ece\u9879\u76ee\u5de5\u7a0b\u3001\u6267\u884c\u6d41\u7a0b\u3001\u573a\u666f\u6269\u5c55\u3001\u6253\u5305\u6d4b\u8bd5\u56db\u4e2a\u65b9\u9762\u8be6\u7ec6\u4ecb\u7ecd\u57fa\u7840\u8d44\u6e90\u573a\u666f\u6269\u5c55\u3002"),(0,r.kt)("h1",{id:"\u9879\u76ee\u5de5\u7a0b"},"\u9879\u76ee\u5de5\u7a0b"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image",src:t(44352).Z,width:"352",height:"658"})),(0,r.kt)("p",null,"\u8be5\u9879\u76ee\u6838\u5fc3\u4ee3\u7801\u5305\u542b\u56db\u90e8\u5206\uff1a"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"build\xa0\u662f\u8de8\u5e73\u53f0\u6253\u5305\u76ee\u5f55")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"exec\xa0\u662f\u5404\u573a\u666f\u5b9e\u73b0\u4ee3\u7801")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"extra\xa0\u662f\u4f9d\u8d56\u7684\u7b2c\u4e09\u65b9\u5de5\u5177")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"main.go\xa0\u662f\u573a\u666f\u6267\u884c\u5165\u53e3"))),(0,r.kt)("h1",{id:"\u6267\u884c\u6d41\u7a0b"},"\u6267\u884c\u6d41\u7a0b"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image",src:t(36755).Z,width:"709",height:"392"})),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u901a\u8fc7\xa0blade\u6267\u884c\u57fa\u7840\u8d44\u6e90\u573a\u666f\u4f1a\u8c03\u7528\xa0bin/chaos","_","os\u6267\u884c")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"bin/chaos","_","os\u4f1a\u89e3\u6790\u547d\u4ee4\u53c2\u6570\uff0c\u8bc6\u522b\u662f\u521b\u5efa\u5b9e\u9a8c\u8fd8\u662f\u9500\u6bc1\u5b9e\u9a8c")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u5c06\u5b9e\u9a8c\u53c2\u6570\u8f6c\u6362\u4e3a\u5b9e\u9a8c\u5bf9\u8c61")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u8c03\u7528\u5bf9\u5e94\u7684\u5b9e\u9a8c\u6267\u884c\u5668\u6267\u884c"))),(0,r.kt)("h1",{id:"\u573a\u666f\u6269\u5c55"},"\u573a\u666f\u6269\u5c55"),(0,r.kt)("p",null,"\u672c\u6587\u4ee5\u65b0\u589e\xa0Linux\xa0\u7cfb\u7edf\u5173\u673a\u3001\u65ad\u7535\u3001\u91cd\u542f\u8fd9\u4e09\u4e2a\u573a\u666f\u4e3e\u4f8b\uff0c\u8be6\u7ec6\u4ecb\u7ecd\u5982\u4f55\u5728\xa0chaosblade-exec-os\xa0\u9879\u76ee\u4e2d\u6269\u5c55\u7cfb\u7edf\u573a\u666f\u3002"),(0,r.kt)("h2",{id:"\u573a\u666f\u5b9e\u73b0\u8bbe\u8ba1"},"\u573a\u666f\u5b9e\u73b0\u8bbe\u8ba1"),(0,r.kt)("p",null,"\u7ecf\u8c03\u7814\uff0c\u5728\xa0Linux\xa0\u4e2d\u53ef\u901a\u8fc7\xa0shutdown\xa0\u6307\u4ee4\u5bf9\u4e3b\u673a\u8fdb\u884c\u5173\u673a\uff08halt\uff09\u3001\u65ad\u7535\uff08power-off\uff09\u548c\u91cd\u542f\uff08reboot\uff09\u64cd\u4f5c\uff0c\u901a\u8fc7\xa0shutdown\xa0\u6307\u4ee4\u5e2e\u52a9\u6587\u6863\u53ef\u4ee5\u67e5\u770b\u6307\u4ee4\u8be6\u60c5\uff0c\u76f8\u5173\u6307\u4ee4\u5982\u4e0b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"# \u7cfb\u7edf1\u5206\u949f\u540e\u5173\u673a, \u4e0d\u6dfb\u52a0\u65f6\u95f4\u9ed8\u8ba4\u662f 1 \u5206\u949f\u540e\u6267\u884c\nshutdown -H\n\n# \u7cfb\u7edf\u7acb\u5373\u65ad\u7535\nshutdown -P now\n\n# \u7cfb\u7edf2\u5206\u949f\u540e\u5f3a\u5236\u91cd\u542f\nshutdown -r -f +2\n\n# \u53d6\u6d88 shutdown \u6307\u4ee4\nshutdown -c\n")),(0,r.kt)("p",null,"\u4e0e\xa0ChaosBlade\xa0\u6df7\u6c8c\u5de5\u7a0b\u5b9e\u9a8c\u6a21\u578b\u8fdb\u884c\u6620\u5c04\uff0c\u53ef\u4ee5\u5c06\xa0shutdown\u4f5c\u4e3a\xa0target\uff0chalt\u3001poweroff\u3001reboot\u5206\u522b\u4f5c\u4e3a\xa0action\uff0c\u652f\u6301\u5f3a\u5236\u64cd\u4f5c\xa0force\u3001\u8bbe\u5b9a\u65f6\u95f4time\u53c2\u6570\u8bbe\u7f6e\u3002\u6ce8\u610f\uff0c\u4e3a\u66f4\u9002\u5408\u7528\u6237\u4f7f\u7528\uff0c\u9700\u8981\u5bf9time\u53c2\u6570\u505a\u4fee\u6539\uff0c\u5982\u4e0d\u586b\u5199\u6b64\u53c2\u6570\uff0c\u5219\u8868\u793a\u7acb\u5373\u6267\u884c\uff0c\u5219\u9ed8\u8ba4\u503c\u6539\u4e3anow\u3002\u5219\u4f7f\u7528\xa0chaosblade\xa0\u6267\u884c\u5982\u4e0b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"# \u7cfb\u7edf1\u5206\u949f\u540e\u5173\u673a, \u4e0d\u6dfb\u52a0\u65f6\u95f4\u9ed8\u8ba4\u662f\u7acb\u5373\u6267\u884c\nblade create shutdown halt --time 1\n\n# \u7cfb\u7edf\u7acb\u5373\u65ad\u7535\nblade create shutdown poweroff --force\n\n# \u7cfb\u7edf2\u5206\u949f\u540e\u5f3a\u5236\u91cd\u542f\nblade create shutdown reboot --time 2\n\n# \u53d6\u6d88 shutdown \u5b9e\u9a8c\nblade destroy UID\n")),(0,r.kt)("h2",{id:"\u573a\u666f\u4ee3\u7801\u5b9e\u73b0"},"\u573a\u666f\u4ee3\u7801\u5b9e\u73b0"),(0,r.kt)("h3",{id:"\u6848\u4f8b\u53c2\u8003"},"\u6848\u4f8b\u53c2\u8003"),(0,r.kt)("p",null,"\u6b64\u6b21\u6269\u5c55\u7684\u6545\u969c\u573a\u666f\u7c7b\u4f3c\u4e8e\u8fdb\u7a0b\u6545\u969c\u573a\u666f\uff0c\u5982\u6740\u8fdb\u7a0b\u3001\u8fdb\u7a0b\u505c\u6b62\uff0c\u53ef\u4ee5\u53c2\u8003\u8fdb\u7a0b\u573a\u666f\u5b9e\u73b0\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image",src:t(39898).Z,width:"902",height:"533"})),(0,r.kt)("p",null,"\u901a\u8fc7\u5df2\u6709\u8fdb\u7a0b\u573a\u666f\u4ee3\u7801\u53ef\u4ee5\u770b\u51fa\uff0c\u5728\xa0exec\u76ee\u5f55\u4e0b\uff0c\u521b\u5efa\xa0process\u76ee\u5f55\u6765\u5b9a\u4e49\xa0target\u662f\xa0process\u7684\u6545\u969c\u573a\u666f\u6a21\u578b\u5b9a\u4e49\xa0ProcessCommandModelSpec\uff0c\u5728\u6b64\u6a21\u578b\u4e2d\u5206\u522b\u5b9a\u4e49\u6740\u8fdb\u7a0bkill\u573a\u666f\u548c\u505c\u6b62\u8fdb\u7a0bstop\u573a\u666f\u5b9e\u9a8caction\u6a21\u578b\xa0NewXXXProcessActionCommandSpec\uff0c\u6bcf\u4e2a\u573a\u666f\u5728\u5206\u522b\u5728process","_","kill\u548c\xa0process","_","stop\u4e2d\u5b9a\u4e49\u3002"),(0,r.kt)("p",null,"\u4ee5KillProcessActionCommandSpec\u4e3a\u4f8b\uff0c\u4e3b\u8981\u6839\u636e\xa0BaseExpActionCommandSpec\u9700\u8981\u5b9a\u4e49\u4ee5\u4e0b\u5185\u5bb9\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"// \u6545\u969c\u573a\u666f\u5339\u914d\u6761\u4ef6\n    ActionMatchers    []ExpFlagSpec\n// \u6545\u969c\u76f8\u5173\u53c2\u6570\n    ActionFlags       []ExpFlagSpec\n// \u6545\u969c\u573a\u666f\u6267\u884c\u5668\n    ActionExecutor    Executor\n// \u6545\u969c\u573a\u666f\u957f\u63cf\u8ff0\n    ActionLongDesc    string\n// \u6545\u969c\u573a\u666f\u4f7f\u7528\u6848\u4f8b\n    ActionExample     string\n// \u6545\u969c\u573a\u666f\u6267\u884c\u6240\u4f7f\u7528\u7684\u6267\u884c\u7a0b\u5e8f\n    ActionPrograms    []string\n// \u6545\u969c\u573a\u666f\u76ee\u5f55\n    ActionCategories  []string\n// \u6545\u969c\u573a\u666f\u662f\u5426daemon\u6301\u4e45\u8fd0\u884c\n    ActionProcessHang bool\n")),(0,r.kt)("p",null,"\u4e0b\u6587\u5c06\u4ece\u521b\u5efa\xa0Shutdown\xa0\u6545\u969c\u5b9e\u9a8c\u547d\u4ee4\uff0c\u5230\u5b9e\u73b0\u91cd\u542f\u5b9e\u9a8c\u573a\u666f\uff0c\u518d\u5230\u5b9e\u73b0\u5173\u673a\u5b9e\u9a8c\u573a\u666f\uff0c\u62bd\u79bb\u76f8\u540c\u5b9e\u73b0\uff0c\u518d\u5230\u6269\u5c55\u65ad\u7535\u5b9e\u9a8c\u573a\u666f\u8fdb\u884c\u8be6\u7ec6\u4ecb\u7ecd\u3002"),(0,r.kt)("h3",{id:"\u521b\u5efashutdown\u6545\u969c\u547d\u4ee4"},"\u521b\u5efa\xa0shutdown\xa0\u6545\u969c\u547d\u4ee4"),(0,r.kt)("p",null,"\u5728\xa0exec\u76ee\u5f55\u521b\u5efa\xa0shutdown\u76ee\u5f55\u6765\u5b58\u653e\u573a\u666f\u76f8\u5173\u4ee3\u7801\uff0c\u5e76\u521b\u5efashutdown.go\u6587\u4ef6\u5b9a\u4e49\u5b9e\u9a8c\u573a\u666f\u6a21\u578b\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'package shutdown\n\nimport (\n    "github.com/chaosblade-io/chaosblade-spec-go/spec"\n)\n\ntype ShutdownCommandModelSpec struct {\n    spec.BaseExpModelCommandSpec\n}\n\nfunc NewShutdownCommandModelSpec() spec.ExpModelCommandSpec {\n    return &ShutdownCommandModelSpec{\n        spec.BaseExpModelCommandSpec{\n            ExpActions: []spec.ExpActionCommandSpec{\n                // \u91cd\u542f\u3001\u5173\u673a\u3001\u65ad\u7535\u5b9e\u73b0\n            },\n            ExpFlags: []spec.ExpFlagSpec{\n                // \u901a\u7528\u53c2\u6570\n            },\n        },\n    }\n}\n\nfunc (s ShutdownCommandModelSpec) Name() string {\n    return "shutdown"\n}\n\nfunc (s ShutdownCommandModelSpec) ShortDesc() string {\n    return "Support shutdown, halt or reboot experiment."\n}\n\nfunc (s ShutdownCommandModelSpec) LongDesc() string {\n    return "Support shutdown, halt or reboot experiment. Can control shutdown or restart behavior with different flags. Warning! the experiment cannot be recovered by this tool."\n}\n')),(0,r.kt)("p",null,"\u4e0b\u9762\u9700\u8981\u518dExpActions\u521b\u5efa\u91cd\u542f\u3001\u5173\u673a\u3001\u65ad\u7535\u76f8\u5173\u573a\u666f\u5b9e\u73b0\uff0c\u63a5\u4e0b\u6765\u4ee5\u5b9e\u73b0\u91cd\u542f\u573a\u666f\u4e3e\u4f8b"),(0,r.kt)("h3",{id:"\u5b9e\u73b0\u91cd\u542f\u573a\u666f"},"\u5b9e\u73b0\u91cd\u542f\u573a\u666f"),(0,r.kt)("p",null,"\u521b\u5efa\xa0shutdown","_","reboot.go\u6587\u4ef6\uff0c\u9075\u5faa\xa0spec.ExpActionCommandSpec\u5b9a\u4e49\xa0RebootActionCommandSpec\u5b9e\u73b0\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'type RebootActionCommandSpec struct {\n    spec.BaseExpActionCommandSpec\n}\n\nfunc NewRebootActionCommandSpec() spec.ExpActionCommandSpec {\n    return &RebootActionCommandSpec{\n        spec.BaseExpActionCommandSpec{\n            ActionMatchers: []spec.ExpFlagSpec{},\n            ActionFlags:    []spec.ExpFlagSpec{},\n            ActionExecutor: &RebootExecutor{},\n            ActionExample: `\n# Force to reboot machine\nblade c shutdown reboot --force\n\n# Reboot machine after 1 minute\nblade c shutdown reboot --time 1`,\n            ActionPrograms:    []string{},\n            ActionCategories:  []string{},\n            ActionProcessHang: true,\n        },\n    }\n}\n\nfunc (r *RebootActionCommandSpec) Name() string {\n    return "reboot"\n}\n\nfunc (r *RebootActionCommandSpec) Aliases() []string {\n    return []string{"s"}\n}\n\nfunc (r *RebootActionCommandSpec) ShortDesc() string {\n    return "Reboot machine"\n}\n\nfunc (r *RebootActionCommandSpec) LongDesc() string {\n    return "Reboot machine. Warning! the experiment cannot be recovered by this tool."\n}\n\ntype RebootExecutor struct {\n    channel spec.Channel\n}\n\nfunc (r *RebootExecutor) Name() string {\n    return "reboot"\n}\n\nfunc (r *RebootExecutor) Exec(uid string, ctx context.Context, model *spec.ExpModel) *spec.Response {\n    // TODO \u91cd\u542f\u5177\u4f53\u5b9e\u73b0\n    return nil\n}\n\nfunc (r *RebootExecutor) SetChannel(channel spec.Channel) {\n    r.channel = channel\n}\n')),(0,r.kt)("p",null,"\u6839\u636e\u5728\u4e0a\u8ff0\u573a\u666f\u8bbe\u8ba1\u90e8\u5206\uff0c\u4f7f\u7528\u7cfb\u7edf\xa0shutdown\u547d\u4ee4\u6765\u5b9e\u73b0\u673a\u5668\u91cd\u542f\u64cd\u4f5c\uff0c\u5e76\u4e14\u652f\u6301\u65f6\u95f4\u548c\u5f3a\u5236\u6267\u884c\u53c2\u6570\u3002\u5219\u5728\xa0Exec\u51fd\u6570\u4e2d\u7f16\u7801\u5b9e\u73b0\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'func (r *RebootExecutor) Exec(uid string, ctx context.Context, model *spec.ExpModel) *spec.Response {\n    // Use it to identify operation\n  if _, ok := spec.IsDestroy(ctx); ok {\n        return cancel(ctx, uid, model, r.channel)\n    }\n    return execute(ctx, model, "-r", r.channel)\n}\n\n// Execute shutdown command \nfunc execute(ctx context.Context, model *spec.ExpModel, command string, channel spec.Channel) *spec.Response {\n    response := checkShutdownCommand(channel)\n    if !response.Success {\n        return response\n    }\n    force := model.ActionFlags[Force.Name] == "true"\n    time := model.ActionFlags[Time.Name]\n    if time == "" {\n        time = "now"\n    }\n    command = fmt.Sprintf("%s %s", ShutdownCommand, command)\n    if force {\n        command = fmt.Sprintf("%s -f", command)\n    }\n    command = fmt.Sprintf("sleep %d && %s %s", SleepTime, command, time)\n    shutdownErrLog := util.GetNohupOutput(util.Bin, stderrLog)\n    //  nohup bash -c "sleep 3 && shutdown -k" < /dev/null >/dev/null 2> shutdown.err &\n    command = fmt.Sprintf("bash -c \'%s\' < /dev/null > /dev/null 2> %s", command, shutdownErrLog)\n    return channel.Run(ctx, "nohup", command)\n}\n\n// Cancel shutdown\nfunc cancel(ctx context.Context, uid string, model *spec.ExpModel, channel spec.Channel) *spec.Response {\n    time := model.ActionFlags[Time.Name]\n    if time == "" || time == "now" || time == "+0" {\n        return spec.ReturnSuccess(uid)\n    }\n    // Calling the cancel command directly will not process the execution result.\n    // Because the return may fail due to downtime, it returns success directly.\n    response := channel.Run(ctx, ShutdownCommand, "-c")\n    if !response.Success {\n        logrus.Warningf("uid: %s, shutdown cancel failed, %v", uid, response.Error())\n    }\n    // Not bug.\n    return spec.ReturnSuccess(uid)\n}\n')),(0,r.kt)("p",null,"\u91cd\u542f\u573a\u666f\u5b9e\u73b0\u5b8c\u6210\u540e\uff0c\u53ef\u5728shutdown\u547d\u4ee4\u4e2d\u8ffd\u52a0\u6b64\u573a\u666f\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"func NewShutdownCommandModelSpec() spec.ExpModelCommandSpec {\n    return &ShutdownCommandModelSpec{\n        spec.BaseExpModelCommandSpec{\n            ExpActions: []spec.ExpActionCommandSpec{\n                NewRebootActionCommandSpec(),\n            },\n            ExpFlags: []spec.ExpFlagSpec{\n                &Time, &Force,\n            },\n        },\n    }\n}\n")),(0,r.kt)("p",null,"\u540c\u6837\u53ef\u4ee5\u6309\u6b64\u65b9\u5f0f\u8ffd\u52a0\u5173\u673a\u5b9e\u73b0\xa0shutdown","_","halt.go\u548c\u65ad\u7535shutdown","_","poweroff.go\u5b9e\u73b0\u3002\u7531\u4e8e\xa0shutdown\u547d\u4ee4\u901a\u8fc7\u53c2\u6570\u63a7\u5236\u5173\u673a\u3001\u65ad\u7535\u3001\u91cd\u542f\u64cd\u4f5c\uff0c\u6240\u4ee5\u53ef\u4ee5\u5c06\u901a\u7528\u7684\u4ee3\u7801\u53ef\u4ee5\u63d0\u53d6\u5230shutdown.go\u6587\u4ef6\u4e2d\uff0c\u5176\u4ed6\u573a\u666f\u6587\u4ef6\u8c03\u7528\u6b64\u6587\u4ef6\u4e2d\u51fd\u6570\u8c03\u7528\u5373\u53ef\u3002\u6700\u7ec8\u4ee3\u7801\u5982\u4e0b\uff1a"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image",src:t(35905).Z,width:"593",height:"116"})),(0,r.kt)("p",null,"shutdown","_","halt.go\u5b9e\u73b0\u4ee3\u7801\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'func (h *HaltExecutor) Exec(uid string, ctx context.Context, model *spec.ExpModel) *spec.Response {\n    if _, ok := spec.IsDestroy(ctx); ok {\n        return cancel(ctx, uid, model, h.channel)\n    }\n    return execute(ctx, model, "-H", h.channel)\n}\n')),(0,r.kt)("p",null,"shutdown","_","poweroff.go\u5b9e\u73b0\u4ee3\u7801\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'func (p *PowerOffExecutor) Exec(uid string, ctx context.Context, model *spec.ExpModel) *spec.Response {\n    if _, ok := spec.IsDestroy(ctx); ok {\n        return cancel(ctx, uid, model, p.channel)\n    }\n    return execute(ctx, model, "-P", p.channel)\n}\n')),(0,r.kt)("p",null,"shutdown","_","reboot.go\u5b9e\u73b0\u4ee3\u7801\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'func (r *RebootExecutor) Exec(uid string, ctx context.Context, model *spec.ExpModel) *spec.Response {\n    if _, ok := spec.IsDestroy(ctx); ok {\n        return cancel(ctx, uid, model, r.channel)\n    }\n    return execute(ctx, model, "-r", r.channel)\n}\n')),(0,r.kt)("p",null,"\u5230\u6b64\u5173\u4e8e\xa0shutdown\xa0\u8bf4\u6d89\u53ca\u5230\u7684\u5173\u673a\u3001\u65ad\u7535\u3001\u91cd\u542f\u5b9e\u9a8c\u573a\u666f\u5df2\u7ecf\u5b9e\u73b0\u5b8c\u6bd5\uff0c\u6ce8\u518c\u5230model","_","linux.go\u5b9e\u9a8c\u5217\u8868\u5373\u53ef\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"func GetAllExpModels() []spec.ExpModelCommandSpec {\n    return []spec.ExpModelCommandSpec{\n        cpu.NewCpuCommandModelSpec(),\n        mem.NewMemCommandModelSpec(),\n        process.NewProcessCommandModelSpec(),\n        network.NewNetworkCommandSpec(),\n        disk.NewDiskCommandSpec(),\n        script.NewScriptCommandModelSpec(),\n        file.NewFileCommandSpec(),\n        kernel.NewKernelInjectCommandSpec(),\n        systemd.NewSystemdCommandModelSpec(),\n        stressng.NewStressModelSpec(),\n        time.NewTimeCommandSpec(),\n    // shutdown\n        shutdown.NewShutdownCommandModelSpec(),\n    }\n}\n")),(0,r.kt)("h1",{id:"\u6253\u5305\u6d4b\u8bd5"},"\u6253\u5305\u6d4b\u8bd5"),(0,r.kt)("p",null,"\u5728\u9879\u76ee\u6839\u76ee\u5f55\u4e0b\u4f7f\u7528\xa0make\xa0build\u8fdb\u884c\u7f16\u8bd1\uff0c\u7f16\u8bd1\u540e\u4f1a\u5728\xa0target/chaosblade-VERSION/bin\u751f\u6210\xa0chaos","_","os\u548c\u5728\xa0target/chaosblade-VERSION/yaml\u4e0b\u751f\u6210\xa0chaosblade-os-spec-XXX.yaml\u6587\u4ef6\uff0c\u5728\u6b64\u6587\u4ef6\u4e2d\u4f1a\u6709\xa0shutdown\u573a\u666f\u58f0\u660e\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"- target: shutdown\n  shortDesc: Support shutdown, halt or reboot experiment.\n  longDesc: Support shutdown, halt or reboot experiment. Can control shutdown or restart\n    behavior with different flags. Warning! the experiment cannot be recovered by\n    this tool.\n  actions:\n  - action: halt\n    aliases: [h]\n    shortDesc: Halt machine\n    longDesc: Halt machine. Warning! the experiment cannot be recovered by this tool.\n    flags:\n    - name: time\n      desc: waiting time, unit is minute, for example +1 means after 1 minute to run\n      noArgs: false\n      required: false\n      requiredWhenDestroyed: false\n    - name: force\n      desc: Force operation\n      noArgs: true\n      required: false\n      requiredWhenDestroyed: false\n")),(0,r.kt)("h1",{id:"\u6d4b\u8bd5"},"\u6d4b\u8bd5"),(0,r.kt)("p",null,"\u76f4\u63a5\u5c06\u4e0a\u8ff0\u7f16\u8bd1\u540e\u7684\u6587\u4ef6\u66ff\u6362\u539f\u6709\xa0chaosblade\u5de5\u5177\u5305\u4e2d\u5bf9\u5e94\u6587\u4ef6\u540e\u8fdb\u884c\u6d4b\u8bd5\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'./blade c shutdown -h\nSupport shutdown, halt or reboot experiment. Can control shutdown or restart behavior with different flags. Warning! the experiment cannot be recovered by this tool.\n\nUsage:\n  blade create shutdown [flags]\n  blade create shutdown [command]\n\nAvailable Commands:\n  halt        Halt machine\n  poweroff    Shutdown machine\n  reboot      Reboot machine\n\nFlags:\n  -h, --help   help for shutdown\n\nGlobal Flags:\n  -a, --async             whether to create asynchronously, default is false\n  -d, --debug             Set client to DEBUG mode\n  -e, --endpoint string   the create result reporting address. It takes effect only when the async value is true and the value is not empty\n  -n, --nohup             used to internal async create, no need to config\n      --uid string        Set Uid for the experiment, adapt to docker and cri\n\nUse "blade create shutdown [command] --help" for more information about a command.\n')))}d.isMDXComponent=!0},44352:function(e,n,t){n.Z=t.p+"assets/images/90ef69c6-6c2f-4989-ba8b-1be56686372b-e757c2d86d236168e915935c497e08f3.png"},39898:function(e,n,t){n.Z=t.p+"assets/images/9f6ac3fe-5c55-42b0-874b-1d44b05e36e8-a39519b34774fc16a77817e83a927a9b.png"},36755:function(e,n,t){n.Z=t.p+"assets/images/aed33af9-3670-4428-9a41-e67676247303-9556788f8af05262a1365d0297a47438.png"},35905:function(e,n,t){n.Z=t.p+"assets/images/b183f750-a3d9-4063-b1c3-c1b1520a3184-b04a4b962ea179eda50e1b9b4524e6c8.png"}}]);