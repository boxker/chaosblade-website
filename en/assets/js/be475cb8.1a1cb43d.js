"use strict";(self.webpackChunkchaosblade=self.webpackChunkchaosblade||[]).push([[463],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),u=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=u(e.components);return a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},i=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),i=u(n),m=r,k=i["".concat(p,".").concat(m)]||i[m]||d[m]||l;return n?a.createElement(k,o(o({ref:t},s),{},{components:n})):a.createElement(k,o({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=i;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var u=2;u<l;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}i.displayName="MDXCreateElement"},14080:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return o},default:function(){return d},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return u}});var a=n(87462),r=(n(67294),n(3905));const l={id:"blade create k8s node-cpu"},o="\u6a21\u62df\u8282\u70b9CPU\u8d1f\u8f7d\u5b9e\u9a8c\u573a\u666f",c={unversionedId:"experiment-types/k8s/blade create k8s node-cpu",id:"experiment-types/k8s/blade create k8s node-cpu",title:"\u6a21\u62df\u8282\u70b9CPU\u8d1f\u8f7d\u5b9e\u9a8c\u573a\u666f",description:"\u4ecb\u7ecd",source:"@site/docs/experiment-types/k8s/blade_create_k8s_node-cpu.md",sourceDirName:"experiment-types/k8s",slug:"/experiment-types/k8s/blade create k8s node-cpu",permalink:"/en/docs/next/experiment-types/k8s/blade create k8s node-cpu",draft:!1,editUrl:"https://github.com/chaosblade-io/chaosblade-website/edit/master/docs/experiment-types/k8s/blade_create_k8s_node-cpu.md",tags:[],version:"current",frontMatter:{id:"blade create k8s node-cpu"},sidebar:"docs",previous:{title:"\u6a21\u62df\u8282\u70b9\u7f51\u7edc\u76f8\u5173\u573a\u666f",permalink:"/en/docs/next/experiment-types/k8s/blade create k8s node-network"},next:{title:"\u6a21\u62df\u8282\u70b9\u8fdb\u7a0b\u76f8\u5173\u573a\u666f",permalink:"/en/docs/next/experiment-types/k8s/blade create k8s node-process"}},p={},u=[{value:"\u4ecb\u7ecd",id:"\u4ecb\u7ecd",level:2},{value:"\u547d\u4ee4",id:"\u547d\u4ee4",level:2},{value:"\u53c2\u6570",id:"\u53c2\u6570",level:2},{value:"\u6848\u4f8b",id:"\u6848\u4f8b",level:2},{value:"\u4fee\u6539\u5b9e\u9a8c",id:"\u4fee\u6539\u5b9e\u9a8c",level:2},{value:"\u9500\u6bc1\u5b9e\u9a8c",id:"\u9500\u6bc1\u5b9e\u9a8c",level:2}],s={toc:u};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"\u6a21\u62df\u8282\u70b9cpu\u8d1f\u8f7d\u5b9e\u9a8c\u573a\u666f"},"\u6a21\u62df\u8282\u70b9CPU\u8d1f\u8f7d\u5b9e\u9a8c\u573a\u666f"),(0,r.kt)("h2",{id:"\u4ecb\u7ecd"},"\u4ecb\u7ecd"),(0,r.kt)("p",null,"kubernetes \u8282\u70b9 CPU \u8d1f\u8f7d\u5b9e\u9a8c\u573a\u666f\uff0c\u540c\u57fa\u7840\u8d44\u6e90\u7684 CPU \u573a\u666f"),(0,r.kt)("h2",{id:"\u547d\u4ee4"},"\u547d\u4ee4"),(0,r.kt)("p",null,"\u652f\u6301 CPU \u573a\u666f\u547d\u4ee4\u5982\u4e0b\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"blade create k8s node-cpu load"),"\uff0c\u8282\u70b9 CPU \u8d1f\u8f7d\u573a\u666f\uff0c\u540c ","[blade create cpu load]","(blade create cpu load.md)")),(0,r.kt)("h2",{id:"\u53c2\u6570"},"\u53c2\u6570"),(0,r.kt)("p",null,"\u9664\u4e86\u4e0a\u8ff0\u57fa\u7840\u573a\u666f\u5404\u81ea\u6240\u9700\u7684\u53c2\u6570\u5916\uff0c\u5728 kubernetes \u73af\u5883\u4e0b\uff0c\u8fd8\u652f\u6301\u7684\u53c2\u6570\u5982\u4e0b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"--evict-count string     \u9650\u5236\u5b9e\u9a8c\u751f\u6548\u7684\u6570\u91cf\n--evict-percent string   \u9650\u5236\u5b9e\u9a8c\u751f\u6548\u6570\u91cf\u7684\u767e\u5206\u6bd4\uff0c\u4e0d\u5305\u542b %\n--labels string          \u8282\u70b9\u8d44\u6e90\u6807\u7b7e\n--names string           \u8282\u70b9\u8d44\u6e90\u540d\uff0c\u591a\u4e2a\u8d44\u6e90\u540d\u4e4b\u95f4\u4f7f\u7528\u9017\u53f7\u5206\u9694\n--kubeconfig string      kubeconfig \u6587\u4ef6\u5168\u8def\u5f84\uff08\u4ec5\u9650\u4f7f\u7528 blade \u547d\u4ee4\u8c03\u7528\u65f6\u4f7f\u7528\uff09\n--waiting-time string    \u5b9e\u9a8c\u7ed3\u679c\u7b49\u5f85\u65f6\u95f4\uff0c\u9ed8\u8ba4\u4e3a 20s\uff0c\u53c2\u6570\u503c\u8981\u5305\u542b\u5355\u4f4d\uff0c\u4f8b\u5982 10s\uff0c1m\n")),(0,r.kt)("h2",{id:"\u6848\u4f8b"},"\u6848\u4f8b"),(0,r.kt)("p",null,"\u9762\u4ee5\u6307\u5b9a\u4e00\u53f0\u8282\u70b9\uff0c\u505a CPU \u8d1f\u8f7d 80% \u5b9e\u9a8c\u4e3e\u4f8b\u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"yaml \u914d\u7f6e\u65b9\u5f0f")," "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: chaosblade.io/v1alpha1\nkind: ChaosBlade\nmetadata:\n  name: cpu-load\nspec:\n  experiments:\n  - scope: node\n    target: cpu\n    action: fullload\n    desc: "increase node cpu load by names"\n    matchers:\n    - name: names\n      value:\n      - "cn-hangzhou.192.168.0.205"\n    - name: cpu-percent\n      value:\n      - "80"\n')),(0,r.kt)("p",null,"\u4f8b\u5982\u914d\u7f6e\u597d\u6587\u4ef6\u540e\uff0c\u4fdd\u5b58\u4e3a chaosblade_cpu_load.yaml\uff0c\u4f7f\u7528\u4ee5\u4e0b\u547d\u4ee4\u6267\u884c\u5b9e\u9a8c\u573a\u666f\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"kubectl apply -f chaosblade_cpu_load.yaml\n")),(0,r.kt)("p",null," \u53ef\u901a\u8fc7\u4ee5\u4e0b\u547d\u4ee4\u67e5\u770b\u6bcf\u4e2a\u5b9e\u9a8c\u7684\u6267\u884c\u72b6\u6001\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"kubectl get blade cpu-load -o json\n")),(0,r.kt)("p",null,"\u66f4\u591a\u7684\u5b9e\u9a8c\u573a\u666f\u914d\u7f6e\u4e8b\u4f8b\u53ef\u67e5\u770b: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/chaosblade-io/chaosblade-operator/tree/v0.0.1/examples"},"https://github.com/chaosblade-io/chaosblade-operator/tree/v0.0.1/examples")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"blade \u547d\u4ee4\u6267\u884c\u65b9\u5f0f"),"\n\u4e0b\u8f7d chaosblade \u5de5\u5177\u5305\uff0c\u4e0b\u8f7d\u5730\u5740\uff1a",(0,r.kt)("a",{parentName:"p",href:"https://github.com/chaosblade-io/chaosblade/releases/tag/v0.4.0-alpha"},"https://github.com/chaosblade-io/chaosblade/releases/tag/v0.4.0-alpha")," \uff0c\u89e3\u538b\u5373\u53ef\u4f7f\u7528\u3002\u8fd8\u662f\u4e0a\u8ff0\u4f8b\u5b50\uff0c\u4f7f\u7528 blade \u547d\u4ee4\u6267\u884c\u5982\u4e0b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"blade create k8s node-cpu fullload --names cn-hangzhou.192.168.0.205 --cpu-percent 80 --kubeconfig ~/.kube/config \n")),(0,r.kt)("p",null,"\u4f7f\u7528 blade \u547d\u4ee4\u6267\u884c\uff0c\u5982\u679c\u6267\u884c\u5931\u8d25\uff0c\u4f1a\u8fd4\u56de\u8be6\u7ec6\u7684\u9519\u8bef\u4fe1\u606f\uff1b\u5982\u679c\u6267\u884c\u6210\u529f\uff0c\u4f1a\u8fd4\u56de\u5b9e\u9a8c\u7684 UID\uff0c\u4f7f\u7528\u67e5\u8be2\u547d\u4ee4\u53ef\u4ee5\u67e5\u8be2\u8be6\u7ec6\u7684\u5b9e\u9a8c\u7ed3\u679c\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"blade query k8s create <UID>\n")),(0,r.kt)("h2",{id:"\u4fee\u6539\u5b9e\u9a8c"},"\u4fee\u6539\u5b9e\u9a8c"),(0,r.kt)("p",null,"yaml \u914d\u7f6e\u6587\u4ef6\u7684\u65b9\u5f0f\u652f\u6301\u573a\u666f\u52a8\u6001\u4fee\u6539\uff0c\u6bd4\u5982\u5c06\u4e0a\u8ff0\u7684 cpu \u8d1f\u8f7d\u8c03\u6574\u4e3a 60%\uff0c\u5219\u53ea\u9700\u5c06\u4e0a\u8ff0 value \u7684\u503c\u4ece 80 \u6539\u4e3a 60 \u5373\u53ef\uff0c\u4f8b\u5982\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: chaosblade.io/v1alpha1\nkind: ChaosBlade\nmetadata:\n  name: cpu-load\nspec:\n  experiments:\n  - scope: node\n    target: cpu\n    action: fullload\n    desc: "increase node cpu load by names"\n    matchers:\n    - name: names\n      value:\n      - "cn-hangzhou.192.168.0.205"\n    - name: cpu-percent\n      value:\n      - "60"\n')),(0,r.kt)("p",null,"\u7136\u540e\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"kubeclt apply -f chaosblade_cpu_load.yaml")," \u547d\u4ee4\u6267\u884c\u66f4\u65b0\u5373\u53ef\u3002"),(0,r.kt)("h2",{id:"\u9500\u6bc1\u5b9e\u9a8c"},"\u9500\u6bc1\u5b9e\u9a8c"),(0,r.kt)("p",null,"\u53ef\u4ee5\u901a\u8fc7\u4ee5\u4e0b\u4e09\u79cd\u65b9\u5f0f\u505c\u6b62\u5b9e\u9a8c\uff1a\n",(0,r.kt)("strong",{parentName:"p"},"\u6839\u636e\u5b9e\u9a8c\u8d44\u6e90\u540d\u505c\u6b62"),"\n\u6bd4\u5982\u4e0a\u8ff0 cpu-load \u573a\u666f\uff0c\u53ef\u4ee5\u6267\u884c\u4ee5\u4e0b\u547d\u4ee4\u505c\u6b62\u5b9e\u9a8c"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"kubectl delete chaosblade cpu-load\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u901a\u8fc7 yaml \u914d\u7f6e\u6587\u4ef6\u505c\u6b62"),"\n\u6307\u5b9a\u4e0a\u8ff0\u521b\u5efa\u597d\u7684 yaml \u6587\u4ef6\u8fdb\u884c\u5220\u9664\uff0c\u547d\u4ee4\u5982\u4e0b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"kubectl delete -f chaosblade_cpu_load.yaml\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u901a\u8fc7 blade \u547d\u4ee4\u505c\u6b62"),"\n\u6b64\u65b9\u5f0f\u4ec5\u9650\u4f7f\u7528 blade \u521b\u5efa\u7684\u5b9e\u9a8c\uff0c\u4f7f\u7528\u4ee5\u4e0b\u547d\u4ee4\u505c\u6b62\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"blade destroy <UID>\n")),(0,r.kt)("p",null,"UID \u662f\u6267\u884c blade create \u547d\u4ee4\u8fd4\u56de\u7684\u7ed3\u679c\uff0c\u5982\u679c\u5fd8\u8bb0\uff0c\u53ef\u4f7f\u7528 blade status --type create \u547d\u4ee4\u67e5\u8be2"))}d.isMDXComponent=!0}}]);