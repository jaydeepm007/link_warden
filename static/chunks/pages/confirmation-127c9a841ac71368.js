(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[187],{9910:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/confirmation",function(){return n(4996)}])},5519:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var a=n(5893),i=n(7472),s=n(5675),l=n.n(s),r=n(1664),c=n.n(r);n(7294);var d=n(8276);function o(e){let{text:t,children:n,"data-testid":s}=e,{settings:r}=(0,i.Z)();return(0,a.jsx)("div",{className:"absolute top-0 bottom-0 left-0 right-0 flex justify-center items-center p-5","data-testid":s,children:(0,a.jsxs)("div",{className:"m-auto flex flex-col gap-2 w-full",children:[r.theme?(0,a.jsx)(l(),{src:"/linkwarden_".concat("dark"===r.theme?"dark":"light",".png"),width:640,height:136,alt:"Linkwarden",className:"h-12 w-fit mx-auto"}):void 0,t?(0,a.jsx)("p",{className:"text-lg max-w-[30rem] min-w-80 w-full mx-auto font-semibold px-2 text-center",children:t}):void 0,n,(0,a.jsx)("p",{className:"text-center text-xs text-neutral mb-5",children:(0,a.jsx)(d.cC,{values:{date:new Date().getFullYear()},i18nKey:"all_rights_reserved",components:[(0,a.jsx)(c(),{href:"https://linkwarden.app",className:"font-semibold"})]})})]})})}},4996:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSP:function(){return o},default:function(){return m}});var a=n(5893),i=n(5519),s=n(3299),l=n(1163),r=n(7294),c=n(6501),d=n(8276),o=!0;function m(){let e=(0,l.useRouter)(),{t}=(0,d.$G)(),[n,o]=(0,r.useState)(!1),m=async()=>{if(n||!e.query.email)return;o(!0);let a=c.ZP.loading(t("authenticating"));await (0,s.signIn)("email",{email:decodeURIComponent(e.query.email),callbackUrl:"/",redirect:!1}),c.ZP.dismiss(a),o(!1),c.ZP.success(t("verification_email_sent"))};return(0,a.jsx)(i.Z,{children:(0,a.jsxs)("div",{className:"p-4 max-w-[30rem] min-w-80 w-full rounded-2xl shadow-md mx-auto border border-neutral-content bg-base-200",children:[(0,a.jsx)("p",{className:"text-center text-2xl sm:text-3xl font-extralight mb-2 ",children:t("check_your_email")}),(0,a.jsx)("div",{className:"divider my-3"}),e.query.email&&"string"==typeof e.query.email&&(0,a.jsx)("p",{className:"text-center font-bold mb-3 break-all",children:decodeURIComponent(e.query.email)}),(0,a.jsx)("p",{children:t("verification_email_sent_desc")}),(0,a.jsx)("div",{className:"mx-auto w-fit mt-3",children:(0,a.jsx)("div",{className:"btn btn-ghost btn-sm",onClick:m,children:t("resend_email")})})]})})}}},function(e){e.O(0,[664,675,774,888,179],function(){return e(e.s=9910)}),_N_E=e.O()}]);