"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[689],{3905:function(e,n,t){t.d(n,{Zo:function(){return d},kt:function(){return g}});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=r.createContext({}),s=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},d=function(e){var n=s(e.components);return r.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=s(t),g=i,m=p["".concat(c,".").concat(g)]||p[g]||u[g]||a;return t?r.createElement(m,o(o({ref:n},d),{},{components:t})):r.createElement(m,o({ref:n},d))}));function g(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,o=new Array(a);o[0]=p;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var s=2;s<a;s++)o[s]=t[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},6138:function(e,n,t){t.r(n),t.d(n,{assets:function(){return d},contentTitle:function(){return c},default:function(){return g},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return u}});var r=t(7462),i=t(3366),a=(t(7294),t(3905)),o=["components"],l={},c="MQTT Ping Sender",s={unversionedId:"PingSender",id:"PingSender",title:"MQTT Ping Sender",description:"When an MQTT connection between a client and the broker is idle for a long time, it may get torn down due to TCP binding timeout. In order to keep the connection alive, the client needs to send PINGREQ packets through the connection. If the connection is alive, the broker responds with a PINGRESP packet. If the client does not receive the PINGRESP packet within some fixed interval, it breaks the connection and reconnects. The interval at which these packets are sent is the Keepalive Interval.",source:"@site/docs/PingSender.md",sourceDirName:".",slug:"/PingSender",permalink:"/courier-android/docs/PingSender",draft:!1,editUrl:"https://github.com/gojek/courier-android/edit/main/docs/docs/PingSender.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Adaptive KeepAlive",permalink:"/courier-android/docs/AdaptiveKeepAlive"},next:{title:"Subscription Store",permalink:"/courier-android/docs/SubscriptionStore"}},d={},u=[{value:"Ping Sender",id:"ping-sender",level:2},{value:"Current Implementations",id:"current-implementations",level:2},{value:"WorkManagerPingSender",id:"workmanagerpingsender",level:3},{value:"Usage",id:"usage",level:3},{value:"AlarmPingSender",id:"alarmpingsender",level:3},{value:"Usage",id:"usage-1",level:3},{value:"TimerPingSender",id:"timerpingsender",level:3},{value:"Usage",id:"usage-2",level:3}],p={toc:u};function g(e){var n=e.components,t=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"mqtt-ping-sender"},"MQTT Ping Sender"),(0,a.kt)("p",null,"When an MQTT connection between a client and the broker is idle for a long time, it may get torn down due to TCP binding timeout. In order to keep the connection alive, the client needs to send PINGREQ packets through the connection. If the connection is alive, the broker responds with a PINGRESP packet. If the client does not receive the PINGRESP packet within some fixed interval, it breaks the connection and reconnects. The interval at which these packets are sent is the Keepalive Interval."),(0,a.kt)("h2",{id:"ping-sender"},"Ping Sender"),(0,a.kt)("p",null,"Courier Android library uses Ping Sender for sending pings through the MQTT connection. It encapsulates the actual mechanism used for sending the ping requests."),(0,a.kt)("h2",{id:"current-implementations"},"Current Implementations"),(0,a.kt)("h3",{id:"workmanagerpingsender"},"WorkManagerPingSender"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Uses WorkManager for sending ping requests over the MQTT connection."),(0,a.kt)("li",{parentName:"ul"},"Ideal for cases where the connection needs to be maintained when the app is in background."),(0,a.kt)("li",{parentName:"ul"},"No user permission is required for using this.")),(0,a.kt)("h3",{id:"usage"},"Usage"),(0,a.kt)("p",null,"Add this dependency for using WorkManagerPingSender"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-kotlin"},'dependencies {\n    implementation "com.gojek.courier:workmanager-pingsender:x.y.z"\n}\n')),(0,a.kt)("p",null,"Create ping sender using the factory class"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-kotlin"},"pingSender = WorkPingSenderFactory.createMqttPingSender(\n                context, workManagerPingSenderConfig\n            )\n")),(0,a.kt)("h3",{id:"alarmpingsender"},"AlarmPingSender"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Uses Alarms for sending ping requests over the MQTT connection."),(0,a.kt)("li",{parentName:"ul"},"Ideal for cases where the connection needs to be maintained when the app is in background."),(0,a.kt)("li",{parentName:"ul"},"On Android 12 & above, user permission is required for scheduling exact alarms.")),(0,a.kt)("h3",{id:"usage-1"},"Usage"),(0,a.kt)("p",null,"Add this dependency for using AlarmPingSender"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-kotlin"},'dependencies {\n    implementation "com.gojek.courier:alarm-pingsender:x.y.z"\n}\n')),(0,a.kt)("p",null,"Create ping sender using the factory class"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-kotlin"},"pingSender = AlarmPingSenderFactory.createMqttPingSender(\n                context, alarmPingSenderConfig\n            )\n")),(0,a.kt)("h3",{id:"timerpingsender"},"TimerPingSender"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Uses Timer for sending ping requests over the MQTT connection."),(0,a.kt)("li",{parentName:"ul"},"Ideal for cases where the connection needs to be maintained only when the app is in foreground.")),(0,a.kt)("h3",{id:"usage-2"},"Usage"),(0,a.kt)("p",null,"Add this dependency for using TimerPingSender"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-kotlin"},'dependencies {\n    implementation "com.gojek.courier:timer-pingsender:x.y.z"\n}\n')),(0,a.kt)("p",null,"Create ping sender using the factory class"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-kotlin"},"pingSender = TimerPingSenderFactory.create()\n")))}g.isMDXComponent=!0}}]);