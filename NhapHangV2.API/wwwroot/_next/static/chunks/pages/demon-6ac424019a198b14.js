(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7128],{47172:function(t,e,n){"use strict";n.r(e);var i=n(30266),r=n(809),a=n.n(r),d=n(31955),s=n(33299),o=n(11163),c=n(72132),u=n(88671),l=n(66727),v=n(24326),p=n(85893),m="border !rounded-none !outline-0 mx-2 p-2",f="border !border-[#929292] py-2 px-3 hover:bg-[#e5d3bb] transition-all",h=function(){var t=(0,s.useSession)(),e=t.data,n=(t.status,(0,l.TL)());function r(){return(r=(0,i.Z)(a().mark((function t(i){var r;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,u.YR.loginDemon(i);case 3:return r=t.sent,d.Z.set("mToken",r.Data.addCartToken),t.next=7,(0,s.signIn)("credentials-signin",{redirect:!1,token:r.Data.token}).then((function(){var t,i=JSON.parse(v.Jy.getJWTDecode(null===(t=e.user)||void 0===t?void 0:t.token)["http://schemas.microsoft.com/ws/2008/06/identity/claims/userdata"]);n((0,l.I7)(null===i||void 0===i?void 0:i.UserId)),n((0,l.av)(i)),n((0,l.OD)(i.UserGroupId))})).then((function(){return o.default.push("/user")}));case 7:t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),c.Am.error(t.t0);case 12:case"end":return t.stop()}}),t,null,[[0,9]])})))).apply(this,arguments)}function h(){return(h=(0,i.Z)(a().mark((function t(){var e,n;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n=null===(e=document.getElementById("KEY"))||void 0===e?void 0:e.value,u.YR.getKey({Key:n}).then((function(t){var e=t.Data,n=document.getElementById("dataList");for(var i in n.innerHTML='\n\t\t\t\t\t<div style="display: flex; font-weight: bold;text-transform: uppercase;">\n\t\t\t\t\t\t<div style="width: 50px">Id</div>\n\t\t\t\t\t\t<div style="width: 130px">UserName</div>\n\t\t\t\t\t\t<div style="width: 130px">UserGroupName</div>\n\t\t\t\t\t</div>',e){var r=document.createElement("div"),a='\n\t\t\t\t\t<div style="display: flex">\n\t\t\t\t\t\t<div style="width: 50px">'.concat(e[i].Id,'</div>\n\t\t\t\t\t\t<div style="width: 130px">').concat(e[i].UserName,'</div>\n\t\t\t\t\t\t<div style="width: 130px">').concat(e[i].UserGroupName,"</div>\n\t\t\t\t\t</div>");r.innerHTML=a,n.insertAdjacentElement("beforeend",r)}})).catch((function(t){c.Am.error("Key is required!")}));case 2:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return(0,p.jsxs)("div",{children:[(0,p.jsxs)("div",{style:{padding:"10px"},children:[(0,p.jsx)("input",{className:m,type:"text",name:"",id:"KEY","data-login":!0,placeholder:"key"}),(0,p.jsx)("button",{className:f,onClick:function(){return h.apply(this,arguments)},children:"Get"}),(0,p.jsx)("input",{className:m,type:"text",name:"",id:"PASS","data-login":!0,placeholder:"ID"}),(0,p.jsx)("button",{className:f,onClick:function(){var t,e,n=document.querySelectorAll("[data-login]");if(n){var i=null===(t=n[0])||void 0===t?void 0:t.value,a=null===(e=n[1])||void 0===e?void 0:e.value;i&&a&&function(t){r.apply(this,arguments)}({Key:i,ID:a})}},children:"Login"})]}),(0,p.jsx)("div",{id:"dataList",style:{margin:"20px"}})]})};h.displayName="\u0110\u01b0\u1eddng t\u1eaft",h.breadcrumb="",e.default=h},74713:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/demon",function(){return n(47172)}])}},function(t){t.O(0,[9774,2888,179],(function(){return e=74713,t(t.s=e);var e}));var e=t.O();_N_E=e}]);