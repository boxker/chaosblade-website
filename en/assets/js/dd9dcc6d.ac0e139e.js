"use strict";(self.webpackChunkchaosblade=self.webpackChunkchaosblade||[]).push([[6394],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return h}});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(n),h=r,m=d["".concat(l,".").concat(h)]||d[h]||p[h]||a;return n?o.createElement(m,i(i({ref:t},u),{},{components:n})):o.createElement(m,i({ref:t},u))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<a;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},88755:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return i},default:function(){return p},frontMatter:function(){return a},metadata:function(){return s},toc:function(){return c}});var o=n(87462),r=(n(67294),n(3905));const a={title:"ChaosBlade Overview",slug:"/"},i=void 0,s={unversionedId:"about-chaosblade/overall-introduce",id:"about-chaosblade/overall-introduce",title:"ChaosBlade Overview",description:"This document describes the concepts, use cases, core strengths, and the architecture of ChaosBlade.",source:"@site/docs/about-chaosblade/overall-introduce.md",sourceDirName:"about-chaosblade",slug:"/",permalink:"/en/docs/next/",draft:!1,editUrl:"https://github.com/chaosblade-io/chaosblade-website/edit/master/docs/about-chaosblade/overall-introduce.md",tags:[],version:"current",frontMatter:{title:"ChaosBlade Overview",slug:"/"},sidebar:"docs",next:{title:"ChaosBlade-Box Platform Introduction",permalink:"/en/docs/next/about-chaosblade/box-introduce"}},l={},c=[{value:"ChaosBlade Overview",id:"chaosblade-overview",level:2},{value:"Core strengths",id:"core-strengths",level:2},{value:"Architecture overview",id:"architecture-overview",level:2},{value:"Future",id:"future",level:2}],u={toc:c};function p(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,o.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This document describes the concepts, use cases, core strengths, and the architecture of ChaosBlade."),(0,r.kt)("h2",{id:"chaosblade-overview"},"ChaosBlade Overview"),(0,r.kt)("p",null,"ChaosBlade is an open source chaos engineering project of Alibaba in 2019. It includes chaos engineering experimental tool chaosblade and chaos engineering platform chaosblade-box. It aims to help enterprises solve high-availability problems in the cloud-native process through chaos engineering. The experimental tool chaosblade supports 3 large system platforms, 4 programming language applications, involving more than 200 experimental scenarios and more than 3000 experimental parameters, which can finely control the scope of the experiment. The chaos engineering platform chaosblade-box supports the hosting of experimental tools. In addition to the hosted chaosblade, it also supports the Litmuschaos experimental tools. There are more than ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/chaosblade-io/chaosblade/issues/32"},"40")," registered companies, of which the ICBC, China Mobile, Xiaomi, JD.com and other companies have landed and used it."),(0,r.kt)("h2",{id:"core-strengths"},"Core strengths"),(0,r.kt)("p",null,"ChaosBlade has the following core strengths:\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Rich experimental scenarios: including basic resources (CPU, memory, network, disk, process, kernel, files, etc.), multilingual application services (Java, C++, NodeJS, Golang, etc.), Kubernetes platform (covering Container, Pod, Node resources) Scenes, including the above experimental scenes)."),(0,r.kt)("li",{parentName:"ul"},"Diversified execution methods: In addition to using the platform white screen operation, it can also be executed through the blade tool or kubectl or coding that comes with the tool."),(0,r.kt)("li",{parentName:"ul"},"Convenient scenario expansion capability: All experimental scenarios follow the chaos experimental model implementation, and different levels of scenarios correspond to different actuators, which are simple to implement and easy to expand."),(0,r.kt)("li",{parentName:"ul"},"Automated deployment of experimental tools: There is no need to manually deploy experimental tools, and the automatic deployment of experimental tools on the host or cluster is realized."),(0,r.kt)("li",{parentName:"ul"},"Support for hosting of open source experimental tools: The platform can host mainstream experimental tools in the industry, such as its own chaosblade and external litmuschaos."),(0,r.kt)("li",{parentName:"ul"},"Unified Chaos Experiment User Interface: Users do not need to care about the way of using different tools, and perform chaos experiments in the unified user interface."),(0,r.kt)("li",{parentName:"ul"},"Multi-dimensional experiment method: Support experiment orchestration from the host to Kubernetes resources, and then to the application dimension."),(0,r.kt)("li",{parentName:"ul"},"Integrated cloud native ecology: Helm deployment management, integrated Prometheus monitoring, support for cloud native experiment tool hosting, etc.")),(0,r.kt)("h2",{id:"architecture-overview"},"Architecture overview"),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(68460).Z,width:"2434",height:"1964"})),(0,r.kt)("p",null,"ChaosBlade supports deployment and training in a variety of environments, including linux, docker, kubernetes clusters and various cloud vendor environments. ChaosBlade mainly includes the following components:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"ChaosBlade-Box Console\uff1aThe ChaosBlade visualization component mainly provides a set of user-friendly Web interface, through which users can arrange and manage chaos engineering experiments."),(0,r.kt)("li",{parentName:"ul"},"ChaosBlade-Box Server\uff1aThe core logic component is mainly responsible for the management and arrangement of chaos engineering experiments, probe and application management. Including components, Chaos Engine: exercise engine, including process orchestration, security control, exercise report and other functions; Chaos Runner: exercise executor, compatible with a variety of execution tools; Chaos Experinece: exercise experience library, etc."),(0,r.kt)("li",{parentName:"ul"},"Agent\uff1aThe core logic component is deployed on the host of the user terminal or in the Kubernetes cluster. It is mainly responsible for establishing a connection with ChaosBlade-Box Server, reporting the heartbeat and serving as a command delivery channel."),(0,r.kt)("li",{parentName:"ul"},"ChaosBlade\uff1aThe main execution tool can perform fault injection on different environments such as the host and Kubernetes, and can perform fault interference on system network devices, file systems, kernels, and applications running on the system.")),(0,r.kt)("h2",{id:"future"},"Future"),(0,r.kt)("p",null,"ChaosBlade will be based on cloud native in the future, providing chaos engineering platform and chaos engineering experiment tools for multi-cluster, multi-environment, and multi-language. Experimental tools will continue to focus on the richness and stability of experimental scenes, support more Kubernetes resource scenes and standardized application service experiment scene standards, and provide multilingual experiment scene standard implementations. The chaos engineering platform focuses on simplifying the deployment and implementation of chaos engineering. In the future, it will host more chaos experiment tools and mainstream compatible platforms to implement scene recommendations, provide business and system monitoring integration, output experiment reports, and complete chaos on the basis of ease of use Engineering operation closed loop."),(0,r.kt)("p",null,"Everyone is welcome to join the community to jointly promote the development of the chaotic engineering field, effectively land in the enterprise, and build a highly available distributed system."))}p.isMDXComponent=!0},68460:function(e,t,n){t.Z=n.p+"assets/images/overall-architecture-7e874671c3f84bc5392272edad1453dc.png"}}]);