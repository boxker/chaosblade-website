"use strict";(self.webpackChunkchaosblade=self.webpackChunkchaosblade||[]).push([[8259],{3905:function(e,t,l){l.d(t,{Zo:function(){return c},kt:function(){return p}});var n=l(7294);function a(e,t,l){return t in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e}function u(e,t){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),l.push.apply(l,n)}return l}function o(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{};t%2?u(Object(l),!0).forEach((function(t){a(e,t,l[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):u(Object(l)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(l,t))}))}return e}function r(e,t){if(null==e)return{};var l,n,a=function(e,t){if(null==e)return{};var l,n,a={},u=Object.keys(e);for(n=0;n<u.length;n++)l=u[n],t.indexOf(l)>=0||(a[l]=e[l]);return a}(e,t);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(n=0;n<u.length;n++)l=u[n],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(a[l]=e[l])}return a}var i=n.createContext({}),d=function(e){var t=n.useContext(i),l=t;return e&&(l="function"==typeof e?e(t):o(o({},t),e)),l},c=function(e){var t=d(e.components);return n.createElement(i.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var l=e.components,a=e.mdxType,u=e.originalType,i=e.parentName,c=r(e,["components","mdxType","originalType","parentName"]),k=d(l),p=a,m=k["".concat(i,".").concat(p)]||k[p]||s[p]||u;return l?n.createElement(m,o(o({ref:t},c),{},{components:l})):n.createElement(m,o({ref:t},c))}));function p(e,t){var l=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var u=l.length,o=new Array(u);o[0]=k;var r={};for(var i in t)hasOwnProperty.call(t,i)&&(r[i]=t[i]);r.originalType=e,r.mdxType="string"==typeof e?e:a,o[1]=r;for(var d=2;d<u;d++)o[d]=l[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,l)}k.displayName="MDXCreateElement"},2843:function(e,t,l){l.r(t),l.d(t,{assets:function(){return i},contentTitle:function(){return o},default:function(){return s},frontMatter:function(){return u},metadata:function(){return r},toc:function(){return d}});var n=l(7462),a=(l(7294),l(3905));const u={title:"blade check"},o=void 0,r={unversionedId:"getting-started/chaosblade-tool-quick-start/cli-mode-user-guaid/blade-check",id:"version-1.7.0/getting-started/chaosblade-tool-quick-start/cli-mode-user-guaid/blade-check",title:"blade check",description:"\u672c\u6587\u6863\u4e3b\u8981\u4ecb\u7ecdblade check\u547d\u4ee4\u4f7f\u7528",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-1.7.0/getting-started/chaosblade-tool-quick-start/cli-mode-user-guaid/blade-check.md",sourceDirName:"getting-started/chaosblade-tool-quick-start/cli-mode-user-guaid",slug:"/getting-started/chaosblade-tool-quick-start/cli-mode-user-guaid/blade-check",permalink:"/docs/getting-started/chaosblade-tool-quick-start/cli-mode-user-guaid/blade-check",draft:!1,editUrl:"https://github.com/chaosblade-io/chaosblade-website/edit/master/versioned_docs/version-1.7.0/getting-started/chaosblade-tool-quick-start/cli-mode-user-guaid/blade-check.md",tags:[],version:"1.7.0",frontMatter:{title:"blade check"},sidebar:"version-1.7.0/docs",previous:{title:"blade\u57fa\u7840\u547d\u4ee4",permalink:"/docs/getting-started/chaosblade-tool-quick-start/cli-mode-user-guaid/blade"},next:{title:"blade prepare",permalink:"/docs/getting-started/chaosblade-tool-quick-start/cli-mode-user-guaid/blade-prepare"}},i={},d=[{value:"Usage",id:"usage",level:2},{value:"Description",id:"description",level:2},{value:"Exec",id:"exec",level:2},{value:"Examples",id:"examples",level:2},{value:"\u62a5\u9519\u7ed3\u679c\u548c\u5bf9\u5e94\u5904\u7406\u65b9\u6cd5",id:"\u62a5\u9519\u7ed3\u679c\u548c\u5bf9\u5e94\u5904\u7406\u65b9\u6cd5",level:2}],c={toc:d};function s(e){let{components:t,...l}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u672c\u6587\u6863\u4e3b\u8981\u4ecb\u7ecd",(0,a.kt)("inlineCode",{parentName:"p"},"blade check"),"\u547d\u4ee4\u4f7f\u7528"),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("p",null,"\u8be5\u547d\u4ee4\u4e3b\u8981\u7528\u4e8e",(0,a.kt)("strong",{parentName:"p"},"Linux\u4e3b\u673a"),"\u4e0a\u6f14\u7ec3\u5b9e\u9a8c\u65f6\uff0c\u5bf9\u4e3b\u673a\u73af\u5883\u8fdb\u884c\u6821\u9a8c\uff0c\u5224\u65ad\u5176\u662f\u5426\u6ee1\u8db3chaosblade\u5b9e\u9a8c\u73af\u5883"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"Usage:\n  blade check\n  blade check [command]\n\nAliases:\n  check, k\n  \nblade check [target] [action] \n")),(0,a.kt)("h2",{id:"description"},"Description"),(0,a.kt)("p",null,"\u8be5\u547d\u4ee4\u76ee\u524d\u652f\u6301\u6821\u9a8c\uff0c Linux\u4e3b\u673a\u7cfb\u7edf\u5c42\u573a\u666f\u548cjava\u573a\u666f \u73af\u5883\u6240\u9700\u914d\u7f6e\uff0c\u5982\u76f8\u5173\u7cfb\u7edf\u547d\u4ee4\u5de5\u5177\u6216java\u4e0d\u5b58\u5728\u65f6\uff0c\u53ef\u5728\u6f14\u7ec3\u6267\u884c\u524d\u8fdb\u884c\u5b89\u88c5\u3002"),(0,a.kt)("h2",{id:"exec"},"Exec"),(0,a.kt)("p",null,"\u8fdb\u5165\u89e3\u538b\u5305\u672c\u5730\u6240\u653e\u7f6e\u7684\u8def\u5f84\uff0c\u53ef\u901a\u8fc7",(0,a.kt)("inlineCode",{parentName:"p"},"./blade check -h"),"\u67e5\u770b\u6240\u6709\u652f\u6301\u7684target\uff0c\u76ee\u524d\u652f\u6301\u4e24\u79cd"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"OS\uff1a\u9a8c\u8bc1Linux\u4e3b\u673a\u7cfb\u7edf\u5c42\u573a\u666f\u6240\u9700\u73af\u5883\u662f\u5426\u652f\u6301"),(0,a.kt)("li",{parentName:"ul"},"Java\uff1a\u9a8c\u8bc1Java\u5e94\u7528\u5c42\u573a\u666f\u6240\u9700\u73af\u5883\u662f\u5426\u652f\u6301")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'[root@test chaosblade]# ./blade check -h\nCheck the environment for chaosblade\n\nUsage:\n  blade check\n  blade check [command]\n\nAliases:\n  check, k\n\nExamples:\ncheck os\n\nAvailable Commands:\n  java        Check the environment of java for chaosblade\n  os          Check the environment of os for chaosblade\n\nFlags:\n  -h, --help   help for check\n\nGlobal Flags:\n  -d, --debug   Set client to DEBUG mode\n\nUse "blade check [command] --help" for more information about a command.\n')),(0,a.kt)("p",null,"\u53ef\u901a\u8fc7",(0,a.kt)("inlineCode",{parentName:"p"},"./blade check os -h"),"\u67e5\u770b\u4e3b\u673a\u7cfb\u7edf\u4e0b\u5177\u4f53\u6f14\u7ec3\u5b9e\u9a8c\u573a\u666f\uff0c\u662f\u5426\u7b26\u5408\u53ef\u4ee5\u6267\u884c\u7684\u6761\u4ef6\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'[root@test chaosblade]# ./blade check os -h\nCheck the environment of os for chaosblade\n\nUsage:\n  blade check os\n  blade check os [command]\n\nExamples:\ncheck os\n\nAvailable Commands:\n  cpu         Cpu experiment\n  disk        Check disk experiment\n  men         Mem experiment\n  network     Network experiment\n\nFlags:\n  -h, --help   help for os\n\nGlobal Flags:\n  -d, --debug   Set client to DEBUG mode\n\nUse "blade check os [command] --help" for more information about a command.\n')),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)("p",null,"\u6821\u9a8c\u4e3b\u673a\u662f\u5426\u5177\u5907\u6f14\u7ec3\u7cfb\u7edf\u5c42\u573a\u666f",(0,a.kt)("inlineCode",{parentName:"p"},"cpu fullload"),"\uff08cpu\u6ee1\u8f7d\uff09\u7684\u73af\u5883"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"[root@test chaosblade]# ./blade check os cpu fullload\n")),(0,a.kt)("p",null,"\u6821\u9a8c\u4e3b\u673a\u662f\u5426\u5177\u5907\u6f14\u7ec3\u6240\u6709\u7cfb\u7edf\u5c42\u573a\u666f\u7684\u73af\u5883"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"[root@test chaosblade]# ./blade check os\n")),(0,a.kt)("h2",{id:"\u62a5\u9519\u7ed3\u679c\u548c\u5bf9\u5e94\u5904\u7406\u65b9\u6cd5"},"\u62a5\u9519\u7ed3\u679c\u548c\u5bf9\u5e94\u5904\u7406\u65b9\u6cd5"),(0,a.kt)("table",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("b",null,"\u9519\u8bef\u8fd4\u56de\u4e2d\u7684error\u4fe1\u606f")),(0,a.kt)("td",null,(0,a.kt)("b",null,"\u5bf9\u5e94\u89e3\u91ca")),(0,a.kt)("td",null,(0,a.kt)("b",null,"\u76f8\u5e94\u5904\u7406\u65b9\u6cd5"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,"[failed] cpu fullload, failed! `taskset` command exists "),(0,a.kt)("td",null," taskset \u547d\u4ee4\u4e0d\u5b58\u5728 "),(0,a.kt)("td",null,(0,a.kt)("ul",null,"\u5b89\u88c5taskset\uff0ctaskset\u5de5\u5177\u5728linux\u662f util-linux \u5305\u7684\u4e00\u90e8\u5206:",(0,a.kt)("li",null," Debian\u3001Ubuntu \u6216 Linux Mint "),(0,a.kt)("dl",null,(0,a.kt)("dd",null,"sudo apt-get install util-linux")),(0,a.kt)("li",null," CentOS\u3001Fedora \u6216 RHEL "),(0,a.kt)("dl",null,(0,a.kt)("dd",null,"sudo yum install util-linux"))))),(0,a.kt)("tr",null,(0,a.kt)("td",null,"[failed] men load, failed! `mount` command exists "),(0,a.kt)("td",null," mount \u547d\u4ee4\u4e0d\u5b58\u5728 "),(0,a.kt)("td",null,(0,a.kt)("ul",null,"\u5b89\u88c5mount\uff0cmount\u5de5\u5177\u5728linux\u662f util-linux \u5305\u7684\u4e00\u90e8\u5206:",(0,a.kt)("li",null," Debian\u3001Ubuntu \u6216 Linux Mint "),(0,a.kt)("dl",null,(0,a.kt)("dd",null,"sudo apt-get install util-linux ")),(0,a.kt)("li",null," CentOS\u3001Fedora \u6216 RHEL "),(0,a.kt)("dl",null,(0,a.kt)("dd",null,"sudo yum install util-linux"))))),(0,a.kt)("tr",null,(0,a.kt)("td",null,"[failed] men load, failed! `umount` command exists "),(0,a.kt)("td",null," umount \u547d\u4ee4\u4e0d\u5b58\u5728 "),(0,a.kt)("td",null,(0,a.kt)("ul",null,"\u5b89\u88c5umount\uff0cumount\u5de5\u5177\u5728linux\u662f util-linux \u5305\u7684\u4e00\u90e8\u5206:",(0,a.kt)("li",null," Debian\u3001Ubuntu \u6216 Linux Mint "),(0,a.kt)("dl",null,(0,a.kt)("dd",null,"sudo apt-get install util-linux ")),(0,a.kt)("li",null," CentOS\u3001Fedora \u6216 RHEL "),(0,a.kt)("dl",null,(0,a.kt)("dd",null,"sudo yum install util-linux"))))),(0,a.kt)("tr",null,(0,a.kt)("td",null,"[failed] men load, failed! `tc` command exists "),(0,a.kt)("td",null," tc \u547d\u4ee4\u4e0d\u5b58\u5728 "),(0,a.kt)("td",null,(0,a.kt)("ul",null,"\u5b89\u88c5tc\uff0ctc\u5de5\u5177\u662f\u7ed1\u5b9a\u5728iproute\u800c\u6765\u7684\uff0c\u6240\u4ee5\u5b89\u88c5 iproute\u5373\u53ef",(0,a.kt)("li",null," Debian\u3001Ubuntu \u6216 Linux Mint "),(0,a.kt)("dl",null,(0,a.kt)("dd",null,"sudo apt-get install iproute ")),(0,a.kt)("li",null," CentOS\u3001Fedora \u6216 RHEL "),(0,a.kt)("dl",null,(0,a.kt)("dd",null,"sudo yum install iproute"))))),(0,a.kt)("tr",null,(0,a.kt)("td",null,"[failed] ****, failed! `iptables` command exists "),(0,a.kt)("td",null," iptables \u547d\u4ee4\u4e0d\u5b58\u5728 "),(0,a.kt)("td",null,(0,a.kt)("ul",null,"\u5b89\u88c5iptables:",(0,a.kt)("li",null," Debian\u3001Ubuntu \u6216 Linux Mint "),(0,a.kt)("dl",null,(0,a.kt)("dd",null,"sudo apt-get install iptables ")),(0,a.kt)("li",null," CentOS\u3001Fedora \u6216 RHEL "),(0,a.kt)("dl",null,(0,a.kt)("dd",null,"sudo yum install iptables "))))),(0,a.kt)("tr",null,(0,a.kt)("td",null,"[failed] ****, failed! `ss` command exists "),(0,a.kt)("td",null," ss \u547d\u4ee4\u4e0d\u5b58\u5728 "),(0,a.kt)("td",null,(0,a.kt)("ul",null,"\u5b89\u88c5ss\uff0css\u5de5\u5177\u662f\u7ed1\u5b9a\u5728iproute\u800c\u6765\u7684\uff0c\u6240\u4ee5\u5b89\u88c5iproute\u5373\u53ef",(0,a.kt)("li",null," Debian\u3001Ubuntu \u6216 Linux Mint "),(0,a.kt)("dl",null,(0,a.kt)("dd",null,"sudo apt-get install iproute ")),(0,a.kt)("li",null," CentOS\u3001Fedora \u6216 RHEL "),(0,a.kt)("dl",null,(0,a.kt)("dd",null,"  sudo yum install iproute")))))))}s.isMDXComponent=!0}}]);