(self.webpackChunkchaosblade=self.webpackChunkchaosblade||[]).push([[212],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return m}});var o=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=o.createContext({}),l=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=l(e.components);return o.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),h=l(n),m=i,u=h["".concat(c,".").concat(m)]||h[m]||d[m]||a;return n?o.createElement(u,r(r({ref:t},p),{},{components:n})):o.createElement(u,r({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,r=new Array(a);r[0]=h;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,r[1]=s;for(var l=2;l<a;l++)r[l]=n[l];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}h.displayName="MDXCreateElement"},8315:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return r},metadata:function(){return s},toc:function(){return c},default:function(){return p}});var o=n(2122),i=n(9756),a=(n(7294),n(3905)),r={title:"Introduce",slug:"/"},s={unversionedId:"getting-started/introduce",id:"getting-started/introduce",isDocsHomePage:!1,title:"Introduce",description:"ChaosBlade is an open source chaos engineering project of Alibaba in 2019. It includes chaos engineering experimental tool chaosblade and chaos engineering platform chaosblade-box. It aims to help enterprises solve high-availability problems in the cloud-native process through chaos engineering. The experimental tool chaosblade supports 3 large system platforms, 4 programming language applications, involving more than 200 experimental scenarios and more than 3000 experimental parameters, which can finely control the scope of the experiment. The chaos engineering platform chaosblade-box supports the hosting of experimental tools. In addition to the hosted chaosblade, it also supports the Litmuschaos experimental tools. There are more than 40 registered companies, of which the ICBC, China Mobile, Xiaomi, JD.com and other companies have landed and used it.",source:"@site/docs/getting-started/introduce.md",sourceDirName:"getting-started",slug:"/",permalink:"/docs/",editUrl:"https://github.com/chaosblade-io/chaosblade-website/edit/master/website/docs/getting-started/introduce.md",version:"current",frontMatter:{title:"Introduce",slug:"/"},sidebar:"docs",next:{title:"Quick Start",permalink:"/docs/getting-started/quick-start"}},c=[{value:"Features",id:"features",children:[]},{value:"Architecture design",id:"architecture-design",children:[]},{value:"Future",id:"future",children:[]}],l={toc:c};function p(e){var t=e.components,r=(0,i.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,o.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(3115).Z})),(0,a.kt)("p",null,"ChaosBlade is an open source chaos engineering project of Alibaba in 2019. It includes chaos engineering experimental tool chaosblade and chaos engineering platform chaosblade-box. It aims to help enterprises solve high-availability problems in the cloud-native process through chaos engineering. The experimental tool chaosblade supports 3 large system platforms, 4 programming language applications, involving more than 200 experimental scenarios and more than 3000 experimental parameters, which can finely control the scope of the experiment. The chaos engineering platform chaosblade-box supports the hosting of experimental tools. In addition to the hosted chaosblade, it also supports the Litmuschaos experimental tools. There are more than ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/chaosblade-io/chaosblade/issues/32"},"40")," registered companies, of which the ICBC, China Mobile, Xiaomi, JD.com and other companies have landed and used it."),(0,a.kt)("h2",{id:"features"},"Features"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Rich experimental scenarios: including basic resources (CPU, memory, network, disk, process, kernel, files, etc.), multilingual application services (Java, C++, NodeJS, Golang, etc.), Kubernetes platform (covering Container, Pod, Node resources) Scenes, including the above experimental scenes)."),(0,a.kt)("li",{parentName:"ul"},"Diversified execution methods: In addition to using the platform white screen operation, it can also be executed through the blade tool or kubectl or coding that comes with the tool."),(0,a.kt)("li",{parentName:"ul"},"Convenient scenario expansion capability: All experimental scenarios follow the chaos experimental model implementation, and different levels of scenarios correspond to different actuators, which are simple to implement and easy to expand."),(0,a.kt)("li",{parentName:"ul"},"Automated deployment of experimental tools: There is no need to manually deploy experimental tools, and the automatic deployment of experimental tools on the host or cluster is realized."),(0,a.kt)("li",{parentName:"ul"},"Support for hosting of open source experimental tools: The platform can host mainstream experimental tools in the industry, such as its own chaosblade and external litmuschaos."),(0,a.kt)("li",{parentName:"ul"},"Unified Chaos Experiment User Interface: Users do not need to care about the way of using different tools, and perform chaos experiments in the unified user interface."),(0,a.kt)("li",{parentName:"ul"},"Multi-dimensional experiment method: Support experiment orchestration from the host to Kubernetes resources, and then to the application dimension."),(0,a.kt)("li",{parentName:"ul"},"Integrated cloud native ecology: Helm deployment management, integrated Prometheus monitoring, support for cloud native experiment tool hosting, etc.")),(0,a.kt)("h2",{id:"architecture-design"},"Architecture design"),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(612).Z})),(0,a.kt)("p",null,"At the beginning of chaosblade design, we considered the ease of use and the convenience of scene expansion, which makes it convenient for everyone to use and expand more experimental scenes according to their own needs. Following the chaos experimental model, it provides unified operations and concise execution tools, and is divided according to domains. The scene realization is encapsulated into a single project to facilitate scene expansion in the field. Based on the domain implementation, chaosblade is packaged into a separate project. Each project is implemented according to best practices in each field. It can not only meet the usage habits of various fields, but also can establish a connection with the chaosblade cli project through the chaos experimental model, which is convenient to use, and uses chaosblade in a unified call. The yaml file based on the chaos experiment model describes the experimental scenes in various fields and is exposed to the upper chaos experiment platform. The Chaos Experiment Platform automatically perceives the changes in the experiment scene according to the changes in the experiment scene description file, without adding new scenes. Perform platform development again to make Chaos Platform more focused on other parts of Chaos Engineering."),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(7487).Z})),(0,a.kt)("p",null,"Through the console page, automated deployment of managed tools such as chaosblade, litmuschaos, etc. can be realized. The experiment scene is unified according to the chaos experiment model established by the community, and the target resources are divided according to the host, Kubernetes, and applications. The target resource is controlled by the target manager, and the page is created in the experiment. The target resource selection of white screen can be realized. The platform executes experiment scenarios of different tools by calling the chaos experiment execution, and with access to prometheus monitoring, the experiment metric can be observed, and a wealth of experiment reports will be provided in the follow-up."),(0,a.kt)("h2",{id:"future"},"Future"),(0,a.kt)("p",null,"ChaosBlade will be based on cloud native in the future, providing chaos engineering platform and chaos engineering experiment tools for multi-cluster, multi-environment, and multi-language. Experimental tools will continue to focus on the richness and stability of experimental scenes, support more Kubernetes resource scenes and standardized application service experiment scene standards, and provide multilingual experiment scene standard implementations. The chaos engineering platform focuses on simplifying the deployment and implementation of chaos engineering. In the future, it will host more chaos experiment tools and mainstream compatible platforms to implement scene recommendations, provide business and system monitoring integration, output experiment reports, and complete chaos on the basis of ease of use Engineering operation closed loop."),(0,a.kt)("p",null,"Everyone is welcome to join the community to jointly promote the development of the chaotic engineering field, effectively land in the enterprise, and build a highly available distributed system."))}p.isMDXComponent=!0},612:function(e,t,n){"use strict";t.Z=n.p+"assets/images/en-architecture-3a72facbe152dbeb74ba1a062e30b977.jpg"},7487:function(e,t,n){"use strict";t.Z=n.p+"assets/images/en-chaosblade-box-a922c11167e8aa3430835458a0dc5d85.jpg"},3115:function(e,t,n){"use strict";t.Z=n.p+"assets/images/en-overview-c584253c431012f2a4f1cc0166d66771.jpg"}}]);