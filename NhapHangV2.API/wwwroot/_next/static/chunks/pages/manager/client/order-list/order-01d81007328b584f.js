(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5765],{92039:function(e,r,t){"use strict";t.r(r);var n=t(30266),o=t(92809),i=t(809),u=t.n(i),a=t(11163),c=t(67294),s=t(88767),l=t(88671),d=t(58793),p=t(57411),f=t(66727),v=t(85893);function O(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function h(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?O(Object(t),!0).forEach((function(r){(0,o.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):O(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}r.default=function(){var e=(0,a.useRouter)().query,r=(0,c.useState)(p.G2),t=r[0],o=r[1],i=(0,c.useState)(null),O=i[0],b=i[1],g=(0,c.useState)(""),P=g[0],S=g[1],m=(0,c.useState)(null),y=m[0],j=m[1],w=(0,c.useState)(null),x=w[0],D=w[1],E=(0,c.useState)(null),_=E[0],C=E[1],I=(0,c.useState)(null),T=I[0],N=I[1],k=(0,c.useState)(null),V=k[0],z=k[1],q=(0,c.useState)(!1),A=q[0],F=q[1],G=(0,f.CG)((0,f.V)({controller:p.i5.MainOrder,permissionsRequired:[p.V7.ViewAll]})),R=(0,s.useQuery)(["clientOrderData",{Current:t.current,PageSize:t.pageSize,uid:+(null===e||void 0===e?void 0:e.id),searchId:O,code:P,fromDate:y,toDate:x,fromPrice:_,toPrice:T,statusIds:V,orderHasnotCode:A}],(function(){return l.CY.getList({PageIndex:t.current,PageSize:t.pageSize,OrderBy:"Id desc",UID:+(null===e||void 0===e?void 0:e.id),TypeSearch:O,OrderType:null,FromDate:y,ToDate:x,FromPrice:T,ToPrice:T,IsNotMainOrderCode:A}).then((function(e){return e.Data}))}),{onSuccess:function(e){return o(h(h({},t),{},{total:null===e||void 0===e?void 0:e.TotalItem}))},onError:d.Amu.error,enabled:G}),U=R.data,X=R.isLoading,Z=R.isError,B=((0,f.CG)((0,f.V)({controller:p.i5.User,permissionsRequired:[p.V7.View]})),function(){var r=(0,n.Z)(u().mark((function r(){var t;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,l.CY.exportExcel({UID:+(null===e||void 0===e?void 0:e.id)});case 3:t=r.sent,a.default.push("".concat(t.Data)),r.next=10;break;case 7:r.prev=7,r.t0=r.catch(0),d.Amu.error(r.t0);case 10:case"end":return r.stop()}}),r,null,[[0,7]])})));return function(){return r.apply(this,arguments)}}());return Z?(0,v.jsx)(d.TXS,{}):(0,v.jsxs)("div",{className:"",children:[(0,v.jsx)("div",{className:"px-4",children:(0,v.jsx)(d.Zsr,{handleFilter:function(e,r,t,n,o,i,u,a){b(e),S(r),j(t),D(n),C(o),N(i),z(u),F(a)},handleExporTExcel:B})}),(0,v.jsx)(d.sB$,{data:null===U||void 0===U?void 0:U.Items,pagination:t,handlePagination:function(e){return o(e)},loading:X})]})}},81724:function(e,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/manager/client/order-list/order",function(){return t(92039)}])}},function(e){e.O(0,[9774,2888,179],(function(){return r=81724,e(e.s=r);var r}));var r=e.O();_N_E=r}]);