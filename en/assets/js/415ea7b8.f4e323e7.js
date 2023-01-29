"use strict";(self.webpackChunkchaosblade=self.webpackChunkchaosblade||[]).push([[3700],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=s(n),m=a,b=u["".concat(c,".").concat(m)]||u[m]||d[m]||i;return n?r.createElement(b,l(l({ref:t},p),{},{components:n})):r.createElement(b,l({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=u;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var s=2;s<i;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},24928:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return i},metadata:function(){return o},toc:function(){return s}});var r=n(87462),a=(n(67294),n(3905));const i={title:"blade create"},l=void 0,o={unversionedId:"getting-started/chaosblade-tool-quick-start/cli-mode-user-guaid/blade-create",id:"version-1.7.1/getting-started/chaosblade-tool-quick-start/cli-mode-user-guaid/blade-create",title:"blade create",description:"\u672c\u6587\u6863\u4e3b\u8981\u4ecb\u7ecdblade create\u547d\u4ee4\u4f7f\u7528",source:"@site/versioned_docs/version-1.7.1/getting-started/chaosblade-tool-quick-start/cli-mode-user-guaid/blade-create.md",sourceDirName:"getting-started/chaosblade-tool-quick-start/cli-mode-user-guaid",slug:"/getting-started/chaosblade-tool-quick-start/cli-mode-user-guaid/blade-create",permalink:"/en/docs/getting-started/chaosblade-tool-quick-start/cli-mode-user-guaid/blade-create",draft:!1,editUrl:"https://github.com/chaosblade-io/chaosblade-website/edit/master/versioned_docs/version-1.7.1/getting-started/chaosblade-tool-quick-start/cli-mode-user-guaid/blade-create.md",tags:[],version:"1.7.1",frontMatter:{title:"blade create"},sidebar:"docs",previous:{title:"blade revoke",permalink:"/en/docs/getting-started/chaosblade-tool-quick-start/cli-mode-user-guaid/blade-revoke"},next:{title:"blade destroy",permalink:"/en/docs/getting-started/chaosblade-tool-quick-start/cli-mode-user-guaid/blade-destroy"}},c={},s=[{value:"Usage",id:"usage",level:2},{value:"Exec",id:"exec",level:2},{value:"Examples",id:"examples",level:2},{value:"\u4e3b\u673a\u573a\u666f",id:"\u4e3b\u673a\u573a\u666f",level:3},{value:"K8S\u573a\u666f",id:"k8s\u573a\u666f",level:3}],p={toc:s};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u672c\u6587\u6863\u4e3b\u8981\u4ecb\u7ecd",(0,a.kt)("inlineCode",{parentName:"p"},"blade create"),"\u547d\u4ee4\u4f7f\u7528"),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("p",null,"\u521b\u5efa\u6df7\u6c8c\u5de5\u7a0b\u6f14\u7ec3\u5b9e\u9a8c\u3002\u6bcf\u4e2a\u5b9e\u9a8c\u5bf9\u5e94\u4e00\u4e2a ",(0,a.kt)("inlineCode",{parentName:"p"},"uid"),"\uff0c\u540e\u7eed\u7684\u67e5\u8be2\u3001\u9500\u6bc1\u5b9e\u9a8c\u90fd\u8981\u7528\u5230\u6b64 ",(0,a.kt)("inlineCode",{parentName:"p"},"uid"),"\uff0c\u5982\u679c\u9057\u5fd8\u4e86 ",(0,a.kt)("inlineCode",{parentName:"p"},"uid"),"\uff0c\u53ef\u4ee5\u901a\u8fc7 ",(0,a.kt)("inlineCode",{parentName:"p"},"blade status --type create")," \u547d\u4ee4\u8fdb\u884c\u67e5\u8be2\u3002 ",(0,a.kt)("inlineCode",{parentName:"p"},"create")," \u53ef\u4ee5\u7b80\u5199\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"c"),"\uff0c\u5373 ",(0,a.kt)("inlineCode",{parentName:"p"},"blade create")," \u53ef\u4ee5\u7b80\u5199\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"blade c"),"\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"Usage:\n  blade create [command]\n\nAliases:\n  create, c\n  \nblade create [target] [action] [flags]\n")),(0,a.kt)("h2",{id:"exec"},"Exec"),(0,a.kt)("p",null,"\u8fdb\u5165\u89e3\u538b\u5305\u672c\u5730\u6240\u653e\u7f6e\u7684\u8def\u5f84\uff0c\u53ef\u901a\u8fc7",(0,a.kt)("inlineCode",{parentName:"p"},"blade create -h"),"\u67e5\u770b\u6240\u6709\u652f\u6301\u7684\u6f14\u7ec3\u573a\u666f\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"target"),"\uff0c\u5177\u4f53\u8be5",(0,a.kt)("inlineCode",{parentName:"p"},"target"),"\u4e0b\u652f\u6301\u90a3\u4e9b",(0,a.kt)("inlineCode",{parentName:"p"},"action"),"\u548c",(0,a.kt)("inlineCode",{parentName:"p"},"flags"),"\uff0c\u53ef\u901a\u8fc7\u5728\u547d\u4ee4\u540e\u9762\u52a0",(0,a.kt)("inlineCode",{parentName:"p"},"-h"),"\u6765\u8fdb\u884c\u67e5\u770b\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'[root@test chaosblade]# ./blade c -h\nCreate a chaos engineering experiment\n\nUsage:\n  blade create [command]\n\nAliases:\n  create, c\n\nExamples:\nblade create cpu load --cpu-percent 60\n\nAvailable Commands:\n  cplus       C++ chaos experiments\n  cpu         Cpu experiment\n  cri         CRI experiment\n  disk        Disk experiment\n  druid       Experiment with the Druid\n  dubbo       Experiment with the Dubbo\n  es          ElasticSearch experiment!\n  feign       feign experiment\n  file        File experiment\n  gateway     gateway experiment!\n  hbase       hbase experiment!\n  hsf         Hsf experiment\n  jedis       jedis experiment\n  jvm         Experiment with the JVM\n  k8s         Kubernetes experiment\n  kafka       kafka experiment\n  lettuce     redis client lettuce experiment\n  log         log experiment\n  mem         Mem experiment\n  mysql       mysql experiment\n  network     Network experiment\n  notify      notify send or receive message error\n  process     Process experiment\n  psql        Postgrelsql experiment\n  redisson    redisson experiment\n  rocketmq    Rocketmq experiment,can make message send or pull delay and exception\n  script      Script chaos experiment\n  sentinel    Sentinel experiment\n  servlet     java servlet experiment\n  shutdown    Support shutdown, halt or reboot experiment.\n  strace      strace experiment\n  stressng    stressng experiment\n  systemd     Systemd experiment\n  tair        Tair experiment\n  tars        tars experiment\n  tddl        Tddl experiment\n  time        Time experiment\n  zuul        Zuul experiment\n\nFlags:\n  -a, --async             whether to create asynchronously, default is false\n  -e, --endpoint string   the create result reporting address. It takes effect only when the async value is true and the value is not empty\n  -h, --help              help for create\n  -n, --nohup             used to internal async create, no need to config\n      --uid string        Set Uid for the experiment, adapt to docker and cri\n\nGlobal Flags:\n  -d, --debug   Set client to DEBUG mode\n\nUse "blade create [command] --help" for more information about a command.\n')),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)("h3",{id:"\u4e3b\u673a\u573a\u666f"},"\u4e3b\u673a\u573a\u666f"),(0,a.kt)("p",null,"\u5728",(0,a.kt)("inlineCode",{parentName:"p"},"Host"),"\u8fdb\u884ccpu\u6ee1\u8f7d\u7684\u6f14\u7ec3\uff0c\u5177\u4f53\u652f\u6301\u53c2\u6570\uff0c\u53ef\u901a\u8fc7",(0,a.kt)("inlineCode",{parentName:"p"},"./blade c cpu fullload -h"),"\u8fdb\u884c\u67e5\u770b\uff0c\u91cc\u9762\u4f1a\u6709\u5177\u4f53\u53c2\u6570\u89e3\u6790"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'# \u67e5\u770b create \u547d\u4ee4\u5e2e\u52a9\u6587\u6863\nblade create -h\n\n# \u67e5\u770b\u5982\u4f55\u521b\u5efa cpu \u6df7\u6c8c\u5b9e\u9a8c\nblade create cpu -h\n\n# \u67e5\u770b\u5982\u4f55\u521b\u5efa cpu \u6ee1\u8f7d\u5b9e\u9a8c\nblade create cpu fullload -h\n\n# \u521b\u5efa cpu \u6ee1\u8f7d\u5b9e\u9a8c\nblade create cpu fullload --cpu-count 1\n\n# \u8fd4\u56de\u7ed3\u679c\u5982\u4e0b\n{"code":200,"success":true,"result":"6fa04946baf42920"}\n\n# code \u7684\u503c\u7b49\u4e8e 200 \u8bf4\u660e\u6267\u884c\u6210\u529f\uff0c\u5176\u4e2d result \u7684\u503c\u5c31\u662f uid\u3002\u4f7f\u7528 top \u547d\u4ee4\u9a8c\u8bc1\u5b9e\u9a8c\u6548\u679c\n%Cpu0  :100.0 us,  0.0 sy,  0.0 ni,  0.0 id,  0.0 wa,  0.0 hi,  0.0 si,  0.0 st\n\n# \u9500\u6bc1\u4e0a\u8ff0\u5b9e\u9a8c\nblade destroy 6fa04946baf42920\n\n# \u8fd4\u56de\u7ed3\u679c\u5982\u4e0b\n{"code":200,"success":true,"result":"command: cpu fullload --cpu-count 2 --debug false --help false"}\n\n# \u8fd4\u56de\u503c\u4f1a\u6253\u5370\u6b64\u6b21\u5b9e\u9a8c\u7684\u547d\u4ee4\u3002\u518d\u6b21\u4f7f\u7528 top \u547d\u4ee4\u9a8c\u8bc1\u5b9e\u9a8c\u6548\u679c\n%Cpu0  :  0.3 us,  0.3 sy,  0.0 ni, 99.3 id,  0.0 wa,  0.0 hi,  0.0 si,  0.0 st\n')),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u5176\u4e2d\u4e0a\u8ff0\u7ed3\u679c\u4e2d\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"6fa04946baf42920"),"\u5c31\u662f\u8be5\u6b21\u6f14\u7ec3\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"uid"))),(0,a.kt)("h3",{id:"k8s\u573a\u666f"},"K8S\u573a\u666f"),(0,a.kt)("p",null,"\u5728",(0,a.kt)("inlineCode",{parentName:"p"},"Kubernetes"),"\u5bf9\u96c6\u7fa4\u4e2d ",(0,a.kt)("inlineCode",{parentName:"p"},"default")," namespace\u4e2d\u7684\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"nginx-swer23kj-12345")," pod \u8fdb\u884c cpu\u6ee1\u8f7d\u6f14\u7ec3"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'# \u67e5\u770b\u5982\u4f55\u521b\u5efa k8s \u6df7\u6c8c\u5b9e\u9a8c\nblade create k8s -h\n\n# \u67e5\u770b\u5982\u4f55\u521b\u5efa k8s\u4e0bpod cpu \u6ee1\u8f7d\u5b9e\u9a8c\nblade create k8s pod-cpu fullload -h\n\n# \u521b\u5efa cpu \u6ee1\u8f7d\u5b9e\u9a8c\nblade c k8s pod-cpu fullload --cpu-percent 100 --names nginx-swer23kj-12345 --namespace default --kubeconfig ~/.kube/config\n\n# \u8fd4\u56de\u7ed3\u679c\u5982\u4e0b\n{"code":200,"success":true,"result":"6fa04946baf42920"}\n\n# \u9500\u6bc1\u4e0a\u8ff0\u5b9e\u9a8c\nblade destroy 6fa04946baf42920\n')),(0,a.kt)("p",null,"\u53ef\u901a ",(0,a.kt)("inlineCode",{parentName:"p"},"kubectl top"),"\u547d\u4ee4\u9a8c\u8bc1\u5b9e\u9a8c\u6548\u679c\uff0c\u5e76\u548cpod \u4e2d resource limit \u8fdb\u884c\u6bd4\u8f83"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"kubectl top pod nginx-swer23kj-12345 -n default\n")))}d.isMDXComponent=!0}}]);