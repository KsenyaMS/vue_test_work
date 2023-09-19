(function(){"use strict";var e={9886:function(e,t,n){var a=n(9242),s=n(3396);function i(e,t,n,a,i,o){const r=(0,s.up)("FirstPage");return(0,s.wg)(),(0,s.j4)(r)}const o=e=>((0,s.dD)("data-v-3691f63c"),e=e(),(0,s.Cn)(),e),r={class:"layout"},l=o((()=>(0,s._)("div",{class:"header-div"},[(0,s._)("div",{class:"name"}," Жилфонд "),(0,s._)("div",{class:"user"}," Пользователь ")],-1))),c={class:"content"};function u(e,t,n,a,i,o){const u=(0,s.up)("EmployeesList");return(0,s.wg)(),(0,s.iD)("div",r,[l,(0,s._)("div",c,[(0,s.Wm)(u)])])}var d=n(7139);const p={class:"employees"},v={class:"list"},f={key:0,style:{"font-family":"Montserrat-Regular","font-size":"14px",color:"#76787D"}},m={key:1,style:{"font-family":"Montserrat-Regular","font-size":"14px",color:"#76787D"}},g={key:2},h=["onClick"],y={class:"image-style"},_=["src"],k={class:"inform-style"},b={class:"bold-style"},w={class:"employee-card"},x={key:0,style:{"font-size":"17px",color:"#76787D"}},D={key:1};function j(e,t,n,a,i,o){const r=(0,s.up)("EmployeeCard");return(0,s.wg)(),(0,s.iD)("div",p,[(0,s._)("div",v,[(0,s.Uk)(" Поиск сотрудников "),(0,s._)("input",{onChange:t[0]||(t[0]=e=>a.handleStatusChange(e)),class:"input-style",placeholder:"Введите id или имя"},null,32),(0,s.Uk)(" Результаты "),"beginning"===a.status?((0,s.wg)(),(0,s.iD)("p",f,"начните поиск")):(0,s.kq)("",!0),"list"===a.status&&0===a.data.length?((0,s.wg)(),(0,s.iD)("p",m,"ничего не найдено")):(0,s.kq)("",!0),"list"===a.status&&0!==a.data.length?((0,s.wg)(),(0,s.iD)("div",g,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(a.data,(e=>((0,s.wg)(),(0,s.iD)("div",{onClick:t=>a.handleIdChange(e),key:e,class:(0,d.C_)(a.clickedStatus?"li-style-clicked":"li-style")},[(0,s._)("div",y,[(0,s._)("img",{src:a.avatarIcon,style:{width:"100%",height:"100%","margin-top":"0px"}},null,8,_)]),(0,s._)("div",k,[(0,s._)("p",b,(0,d.zw)(e.username),1),(0,s.Uk)(" "+(0,d.zw)(e.email),1)])],10,h)))),128))])):(0,s.kq)("",!0)]),(0,s._)("div",w,[a.clickedStatus?(0,s.kq)("",!0):((0,s.wg)(),(0,s.iD)("p",x,"Выберите сотрудника, чтобы посмотреть его профиль")),a.clickedStatus?((0,s.wg)(),(0,s.iD)("div",D,[(0,s.Wm)(r)])):(0,s.kq)("",!0)])])}var C=n(4870);const I=e=>((0,s.dD)("data-v-6188fd7c"),e=e(),(0,s.Cn)(),e),z={class:"employee-data"},O={class:"avatar-style"},q=["src"],E={class:"inform-style"},H={class:"bold-style",style:{"font-size":"16px"}},S={class:"text-style"},U=I((()=>(0,s._)("p",{class:"bold-style",style:{"margin-right":"10px","font-size":"14px"}},"email:",-1))),P={class:"text-style"},F=I((()=>(0,s._)("p",{class:"bold-style",style:{"margin-right":"10px","font-size":"14px"}},"phone:",-1))),L=I((()=>(0,s._)("p",{class:"bold-style",style:{"margin-top":"20px","margin-bottom":"20px","font-size":"16px"}},"О себе:",-1))),Z=I((()=>(0,s._)("p",{class:"description-style",style:{"font-size":"14px"}},"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ",-1)));function M(e,t,n,a,i,o){return(0,s.wg)(),(0,s.iD)("div",z,[(0,s._)("div",O,[(0,s._)("img",{src:a.avatarIcon,style:{width:"90%",height:"60%","margin-top":"0px"}},null,8,q)]),(0,s._)("div",E,[(0,s._)("p",H,(0,d.zw)(a.data.name),1),(0,s._)("div",S,[U,(0,s.Uk)((0,d.zw)(a.data.email),1)]),(0,s._)("div",P,[F,(0,s.Uk)((0,d.zw)(a.data.phone),1)]),L,Z])])}var $=n.p+"img/avatarIcon.adbdc22d.svg",J={name:"EmployeeCard",setup(){const{userId:e}=(0,s.f3)("userData"),t=(0,C.iH)(0!==e.value?fetch(`https://jsonplaceholder.typicode.com/users/${e.value}`).then((e=>e.json())).then((e=>{t.value=e})):[]);return{avatarIcon:$,userId:e,data:t}}},R=n(89);const T=(0,R.Z)(J,[["render",M],["__scopeId","data-v-6188fd7c"]]);var W=T,A={name:"EmployeeList",components:{EmployeeCard:W},setup(){let e=(0,C.iH)(0),t=(0,C.iH)(!1),n=(0,C.iH)("beginning");const a=(0,C.iH)(fetch("https://jsonplaceholder.typicode.com/users").then((e=>e.json())).then((e=>{a.value=e})));function i(e){fetch(`https://jsonplaceholder.typicode.com/users?name=${e.target.value}`).then((e=>e.json())).then((e=>{a.value=e})),fetch(`https://jsonplaceholder.typicode.com/users?username=${e.target.value}`).then((e=>e.json())).then((e=>a.value=[...a.value,...e])),"beginning"===n.value?n.value="list":"list"===n.value&&(n.value="beginning")}function o(n){t.value=!t.value,e.value=n.id}return(0,s.JJ)("userData",{userId:e}),{data:a,status:n,userId:e,clickedStatus:t,avatarIcon:$,handleStatusChange:i,handleIdChange:o}}};const K=(0,R.Z)(A,[["render",j],["__scopeId","data-v-2d685598"]]);var Y=K,B={name:"FirstPage",components:{EmployeesList:Y}};const G=(0,R.Z)(B,[["render",u],["__scopeId","data-v-3691f63c"]]);var N=G,Q={name:"App",components:{FirstPage:N}};const V=(0,R.Z)(Q,[["render",i]]);var X=V;(0,a.ri)(X).mount("#app")}},t={};function n(a){var s=t[a];if(void 0!==s)return s.exports;var i=t[a]={exports:{}};return e[a].call(i.exports,i,i.exports,n),i.exports}n.m=e,function(){var e=[];n.O=function(t,a,s,i){if(!a){var o=1/0;for(u=0;u<e.length;u++){a=e[u][0],s=e[u][1],i=e[u][2];for(var r=!0,l=0;l<a.length;l++)(!1&i||o>=i)&&Object.keys(n.O).every((function(e){return n.O[e](a[l])}))?a.splice(l--,1):(r=!1,i<o&&(o=i));if(r){e.splice(u--,1);var c=s();void 0!==c&&(t=c)}}return t}i=i||0;for(var u=e.length;u>0&&e[u-1][2]>i;u--)e[u]=e[u-1];e[u]=[a,s,i]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var a in t)n.o(t,a)&&!n.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){n.p="/vue_test_work/"}(),function(){var e={143:0};n.O.j=function(t){return 0===e[t]};var t=function(t,a){var s,i,o=a[0],r=a[1],l=a[2],c=0;if(o.some((function(t){return 0!==e[t]}))){for(s in r)n.o(r,s)&&(n.m[s]=r[s]);if(l)var u=l(n)}for(t&&t(a);c<o.length;c++)i=o[c],n.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return n.O(u)},a=self["webpackChunktest_vue_app"]=self["webpackChunktest_vue_app"]||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))}();var a=n.O(void 0,[998],(function(){return n(9886)}));a=n.O(a)})();
//# sourceMappingURL=app.99bb40b1.js.map