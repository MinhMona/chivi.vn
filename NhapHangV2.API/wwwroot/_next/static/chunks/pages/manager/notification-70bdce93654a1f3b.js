(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4449],{40628:function(n,e,t){"use strict";var i=t(30266),a=t(809),r=t.n(a),h=t(30381),o=t.n(h),s=t(67294),c=t(65027),u=t(85893);e.Z=function(n){var e=n.handleFilter,t=n.isFetching,a=(0,s.useRef)(null),h=(0,s.useRef)(null);function l(){return d.apply(this,arguments)}function d(){return(d=(0,i.Z)(r().mark((function n(){var t,i,s=arguments;return r().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(t=s.length>0&&void 0!==s[0]&&s[0],e){n.next=3;break}return n.abrupt("return");case 3:if(t){n.next=6;break}return e(a.current,h.current),n.abrupt("return");case 6:i=o()().format("YYYY-MM-DD"),e(i,i);case 8:case"end":return n.stop()}}),n)})))).apply(this,arguments)}return(0,u.jsxs)("div",{className:"xl:flex w-fit items-end",children:[(0,u.jsx)("div",{className:"mr-4 mb-4 xl:mb-0 w-[400px]",children:(0,u.jsx)(c.jwb,{disabled:t,format:"DD/MM/YYYY",placeholder:"T\u1eeb ng\xe0y / \u0111\u1ebfn ng\xe0y",handleDate:function(n){a.current=n[0],h.current=n[1]}})}),(0,u.jsx)("div",{children:(0,u.jsx)(c.hU,{icon:"fas fa-search",title:"T\xecm?",onClick:l,showLoading:!0,toolip:"",disabled:t})}),(0,u.jsx)("div",{className:"ml-4",children:(0,u.jsx)(c.hU,{icon:"far fa-info-square",title:"L\u1ecdc h\xf4m nay",onClick:function(){l(!0)},showLoading:!0,toolip:"",disabled:t})})]})}},38724:function(n,e,t){"use strict";var i=t(41664),a=(t(67294),t(18321)),r=t(36417),h=t(24326),o=t(85893);e.Z=function(n){var e=n.data,t=n.pagination,s=n.handlePagination,c=n.loading,u=(n.isFetching,[{dataIndex:"Id",title:"STT",width:50,render:function(n,e,t){return t++}},{dataIndex:"Created",title:"Ng\xe0y",width:130,render:function(n){return h.Jy.getVNDate(n)},responsive:["sm"]},{dataIndex:"NotificationContent",title:"N\u1ed9i dung",responsive:["lg"],width:200},{dataIndex:"TotalPriceReceive",title:"Tr\u1ea1ng th\xe1i",responsive:["xl"],width:120,render:function(n,e){return(0,o.jsx)("span",{style:{color:e.IsRead?"black":"red"},children:e.IsRead?"\u0110\xe3 xem":"Ch\u01b0a xem"})}},{dataIndex:"GoToDetail",title:"Xem chi ti\u1ebft",align:"center",width:90,render:function(n,e){return(0,o.jsx)(i.default,{href:null===e||void 0===e?void 0:e.Url,children:(0,o.jsx)("a",{style:{opacity:e.Url?"1":"0.3",pointerEvents:e.Url?"all":"none",cursor:e.Url?"pointer":"none"},children:(0,o.jsx)(a.K,{icon:"far fa-info-square",title:"Xem chi ti\u1ebft"})})})}}]),l={expandedRowRender:function(n){return(0,o.jsxs)("ul",{className:"px-2 text-xs",children:[(0,o.jsxs)("li",{className:"sm:hidden justify-between flex py-2",children:[(0,o.jsx)("span",{className:"font-medium mr-4",children:"Ng\xe0y:"}),(0,o.jsx)("div",{children:h.Jy.getShortVNDate(null===n||void 0===n?void 0:n.Created)})]}),(0,o.jsxs)("li",{className:"md:hidden justify-between flex py-2",children:[(0,o.jsx)("span",{className:"font-medium mr-4",children:"N\u1ed9i dung:"}),(0,o.jsx)("div",{children:null===n||void 0===n?void 0:n.NotificationContent})]}),(0,o.jsxs)("li",{className:"xl:hidden justify-between flex py-2",children:[(0,o.jsx)("span",{className:"font-medium mr-4",children:"Tr\u1ea1ng th\xe1i:"}),(0,o.jsx)("div",{children:null===n||void 0===n?void 0:n.TotalPriceReceive})]})]})}};return(0,o.jsx)(r.w,{loading:c,columns:u,data:e,bordered:!0,pagination:0===(null===e||void 0===e?void 0:e.length)?null:t,onChange:s,expandable:l,scroll:{y:700}})}},93077:function(n,e,t){"use strict";t.d(e,{B:function(){return i},W:function(){return a}});var i={dasboard:"Trang \u0111i\u1ec1u khi\u1ec3n",settings:{system:"C\u1ea5u h\xecnh h\u1ec7 th\u1ed1ng",feeTQVN:"C\u1ea5u h\xecnh v\u1eadn chuy\u1ec3n TQVN",feeBuy:"C\u1ea5u h\xecnh ph\xed d\u1ecbch v\u1ee5 mua h\xe0ng",feePayFor:"C\u1ea5u h\xecnh ph\xed thanh to\xe1n h\u1ed9",feeUser:"C\u1ea5u h\xecnh ph\xed ng\u01b0\u1eddi d\xf9ng",listBank:"Danh s\xe1ch ng\xe2n h\xe0ng",notification:"C\u1ea5u h\xecnh th\xf4ng b\xe1o",goodsChecking:"C\u1ea5u h\xecnh ph\xed ki\u1ec3m \u0111\u1ebfm",wareHouse:"C\u1ea5u h\xecnh kho TQ - VN"},staff:{employeeManager:"Qu\u1ea3n l\xfd nh\xe2n vi\xean",decentralization:"Qu\u1ea3n l\xfd ph\xe2n quy\u1ec1n",infoAccount:"Th\xf4ng tin t\xe0i kho\u1ea3n",commissionManager:"Qu\u1ea3n l\xfd hoa h\u1ed3ng"},listCustomer:"Danh s\xe1ch kh\xe1ch h\xe0ng",createNewClient:"Th\xeam m\u1edbi kh\xe1ch h\xe0ng",oder:{orderMain:"Danh s\xe1ch \u0111\u01a1n h\xe0ng",oderBuyFor:"\u0110\u01a1n h\xe0ng mua h\u1ed9",oderBuyForOther:"\u0110\u01a1n h\xe0ng mua h\u1ed9 kh\xe1c",payFor:"\u0110\u01a1n h\xe0ng thanh to\xe1n h\u1ed9",detail:" Chi ti\u1ebft \u0111\u01a1n h\xe0ng",payOder:"Thanh to\xe1n \u0111\u01a1n h\xe0ng",createdOder:"T\u1ea1o \u0111\u01a1n h\xe0ng kh\xe1c",detailProduct:"Chi ti\u1ebft s\u1ea3n ph\u1ea9m"},handleComplaint:"X\u1eed l\xfd khi\u1ebfu n\u1ea1i",deposit:{listDeposit:"Danh s\xe1ch v\u1eadn chuy\u1ec3n h\u1ed9",statisticalFeeDeposit:"Th\u1ed1ng k\xea c\u01b0\u1edbc v\u1eadn chuy\u1ec3n h\u1ed9",exportDepositRequest:"Xu\u1ea5t kho k\xfd g\u1eedi \u0111\xe3 y\xeau c\u1ea7u",exportDeposit:"Xu\u1ea5t kho ki\u1ec7n ch\u01b0a y\xeau c\u1ea7u",detailRequest:"Chi ti\u1ebft y\xeau c\u1ea7u"},checkWarehouseTQ:"Ki\u1ec3m h\xe0ng kho TQ",checkWarehouseVN:"Ki\u1ec3m h\xe0ng kho VN",importWarehouseTQ:"Nh\u1eadp kho TQ",assignPro:"G\xe1n ki\u1ec7n cho kh\xe1ch",export:"Xu\u1ea5t kho",parcelManagement:{packageManagement:"Qu\u1ea3n l\xfd bao h\xe0ng",billCodeManager:"Qu\u1ea3n l\xfd m\xe3 v\u1eadn \u0111\u01a1n",lostCase:"Danh s\xe1ch ki\u1ec7n th\u1ea5t l\u1ea1c",floatingCase:"Danh s\xe1ch ki\u1ec7n tr\xf4i n\u1ed5i",detailPackageManagement:"Qu\u1ea3n l\xfd bao h\xe0ng chi ti\u1ebft"},moneyManagement:{personalRecharge:"qu\u1ea3n l\xfd n\u1ea1p ti\u1ec1n c\xe1 nh\xe2n",historyRechargeVN:"L\u1ecbch s\u1eed n\u1ea1p ti\u1ec1n",historyWithdrawVN:"L\u1ecbch s\u1eed r\xfat ti\u1ec1n",historyRechargeTQ:"L\u1ecbch s\u1eed n\u1ea1p t\u1ec7",historyWithdrawTQ:"L\u1ecbch s\u1eed r\xfat t\u1ec7",historyTransaction:"L\u1ecbch s\u1eed giao d\u1ecbch",payExport:"Thanh to\xe1n xu\u1ea5t kho",detailPayExport:"Chi ti\u1ebft thanh to\xe1n xu\u1ea5t kho"},statistical:{printPurchaseVoucher:"In phi\u1ebfu mua h\u1ed9",turnover:"Th\u1ed1ng k\xea doanh thu",depositMoney:"Th\u1ed1ng k\xea ti\u1ec1n n\u1ea1p",surplus:"Th\u1ed1ng k\xea s\u1ed1 d\u01b0",transaction:"Th\u1ed1ng k\xea giao d\u1ecbch",other:"Th\u1ed1ng k\xea \u0111\u01a1n h\xe0ng",realMoney:"Th\u1ed1ng k\xea ti\u1ec1n mua h\xe0ng",depositRevenue:"Th\u1ed1ng k\xea k\xfd g\u1eedi",salesRevenue:"Th\u1ed1ng k\xea sale",orderRevenue:"Th\u1ed1ng k\xea \u0111\u1eb7t h\xe0ng",profitBuyFor:"Th\u1ed1ng k\xea l\u1ee3i nhu\u1eadn mua h\u1ed9",profitPayFor:"Th\u1ed1ng k\xea l\u1ee3i nhu\u1eadn mua h\u1ed9"},post:{Categories:"Chuy\xean m\u1ee5c b\xe0i vi\u1ebft",listPost:"B\xe0i vi\u1ebft",addCategories:" Th\xeam chuy\xean m\u1ee5c",editCategories:"Ch\u1ec9nh s\u1eeda chuy\xean m\u1ee5c",addPost:"Th\xeam b\xe0i vi\u1ebft",editPost:"Ch\u1ec9nh s\u1eeda b\xe0i vi\u1ebft"},homepageContent:"C\u1ea5u h\xecnh trang ch\u1ee7",detailMenu:"Chi ti\u1ebft Menu",addMenuChild:"Th\xeam menu con",addMenu:"Th\xeam menu",signIn:"\u0110\u0103ng nh\u1eadp",register:"\u0110\u0103ng k\xfd",forgotPassword:"Kh\xf4i ph\u1ee5c m\u1eadt kh\u1ea9u",homePage:"NHAPHANGTRUNGQUOC.MONAMEDIA.NET",notification:"Th\xf4ng b\xe1o"},a={dashboard:"Dashboard",shopping:{shopingBag:"Gi\u1ecf h\xe0ng",payment:"Thanh to\xe1n"},buyGroceries:{listOder:"Danh s\xe1ch \u0111\u01a1n h\xe0ng",createOderPageTMDT:"T\u1ea1o \u0111\u01a1n h\xe0ng trang TM\u0110T Kh\xe1c","listOderTM\u0110T":"Danh s\xe1ch \u0111\u01a1n h\xe0ng"},consignmentShipping:{createOderDeposit:"T\u1ea1o \u0111\u01a1n h\xe0ng k\xfd g\u1eedi",listOderDeposit:"Danh s\xe1ch \u0111\u01a1n h\xe0ng k\xfd g\u1eedi",statisticalDeposit:"Th\u1ed1ng k\xea c\u01b0\u1edbc k\xfd g\u1eedi"},payFor:{listRequest:"Danh s\xe1ch y\xeau c\u1ea7u thanh to\xe1n h\u1ed9",createRequest:"T\u1ea1o y\xeau c\u1ea7u thanh to\xe1n h\u1ed9",detaiPay:"Chi ti\u1ebft thanh to\xe1n h\u1ed9"},financialManagement:{listTransactionVND:" Danh s\xe1ch giao d\u1ecbch VN\u0110",listTransactionTQ:" Danh s\xe1ch giao d\u1ecbch VN\u0110","rechargeVN\u0110":"N\u1ea1p ti\u1ec1n VN\u0110",rechargeTQ:"N\u1ea1p ti\u1ec1n TQ",withdrawMoneyVND:"R\xfat ti\u1ec1n VN\u0110",withdrawMoneyTQ:"R\xfat ti\u1ec1n TQ"},complain:"Khi\u1ebfu n\u1ea1i",floating:"Ki\u1ec7n tr\xf4i n\u1ed5i",createComplain:"T\u1ea1o khi\u1ebfu n\u1ea1i m\u1edbi",tracking:"Theo d\xf5i v\u1eadn chuy\u1ec3n",infoUser:"Th\xf4ng tin ng\u01b0\u1eddi d\xf9ng"}},2198:function(n,e,t){"use strict";t.r(e);var i=t(92809),a=t(67294),r=t(88767),h=t(88671),o=t(65027),s=t(40628),c=t(38724),u=t(57411),l=t(93077),d=t(66727),g=t(85893);function p(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,i)}return t}function f(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?p(Object(t),!0).forEach((function(e){(0,i.Z)(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}var m=function(n){var e=n.connection,t=(0,a.useState)(u.G2),i=t[0],l=t[1],p=(0,a.useState)(null),m=p[0],y=p[1],v=(0,a.useState)(null),T=v[0],k=v[1],x=(0,d.CG)((function(n){return n.user.current})),b=(0,r.useQuery)(["menuData",{Current:i.current,PageSize:20,FromDate:m,ToDate:T}],(function(){return h.t6.getList({PageIndex:i.current,PageSize:20,FromDate:m,ToDate:T,OrderBy:"Id desc",UID:null===x||void 0===x?void 0:x.UserId,OfEmployee:!0,IsRead:0}).then((function(n){return null===n||void 0===n?void 0:n.Data}))}),{retry:!1,keepPreviousData:!0,onSuccess:function(n){var e;l(f(f({},i),{},{total:null===n||void 0===n?void 0:n.TotalItem})),(null===n||void 0===n||null===(e=n.Items)||void 0===e?void 0:e.length)<=0&&o.Amu.info("Kh\xf4ng c\xf3 th\xf4ng b\xe1o trong kho\u1ea3ng th\u1eddi gian n\xe0y!")},onError:function(){(0,o.CFj)({title:"L\u1ed7i!",message:"\u0110\u01b0\u1eddng truy\u1ec1n k\u1ebft n\u1ed1i server b\u1ecb l\u1ed7i! Vui l\xf2ng th\u1eed l\u1ea1i!",type:"error"})}}),N=b.isFetching,C=b.data;(0,a.useEffect)((function(){e&&e.on("send-notification",(function(n){return null===C||void 0===C?void 0:C.Items.unshift(n)}))}),[e]);return(0,g.jsx)(g.Fragment,{children:(0,g.jsxs)("div",{className:"tableBox",children:[(0,g.jsx)("div",{children:(0,g.jsx)(s.Z,{handleFilter:function(n,e){y(n),k(e)},isFetching:N})}),(0,g.jsx)("div",{className:"mt-4",children:(0,g.jsx)(c.Z,{data:null===C||void 0===C?void 0:C.Items,pagination:i,loading:N,handlePagination:function(n){return l(n)}})})]})})};m.displayName=l.B.notification,m.breadcrumb=u.m.notification,m.Layout=o.Ar2,e.default=m},65228:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/manager/notification",function(){return t(2198)}])}},function(n){n.O(0,[9774,2888,179],(function(){return e=65228,n(n.s=e);var e}));var e=n.O();_N_E=e}]);