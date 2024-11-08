(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[495],{4722:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/register",function(){return n(972)}])},4157:function(e,t,n){"use strict";n.d(t,{Z:function(){return r}});var s=n(5893);function r(e){let{autoFocus:t,value:n,type:r,placeholder:a,onChange:i,onKeyDown:l,className:o,spellCheck:d,"data-testid":c}=e;return(0,s.jsx)("input",{"data-testid":c,spellCheck:d,autoFocus:t,type:r||"text",placeholder:a,value:n,onChange:i,onKeyDown:l,className:"w-full rounded-md p-2 border-neutral-content border-solid border outline-none focus:border-primary duration-100 ".concat(o||"")})}},7199:function(e,t,n){"use strict";var s=n(5893),r=n(8229),a=n(5139);let i=(0,a.j)("select-none relative duration-200 rounded-lg text-center w-fit flex justify-center items-center gap-2 disabled:pointer-events-none disabled:opacity-50",{variants:{intent:{accent:"bg-accent text-white hover:bg-accent/80 border border-violet-400",primary:"bg-primary text-primary-content hover:bg-primary/80",secondary:"bg-neutral-content text-secondary-foreground hover:bg-neutral-content/80 border border-neutral/30",destructive:"bg-error text-white hover:bg-error/80 border border-neutral/60",outline:"border border-input bg-background hover:bg-accent hover:text-accent-content",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{small:"h-7 px-2",medium:"h-10 px-4 py-2",large:"h-12 px-7 py-2",full:"px-4 py-2 w-full",icon:"h-10 w-10"},loading:{true:"cursor-wait"}},defaultVariants:{intent:"primary",size:"medium"}});t.Z=e=>{let{className:t,intent:n,size:a,children:l,disabled:o,loading:d=!1,...c}=e;return(0,s.jsx)("button",{className:(0,r.cn)(i({intent:n,size:a,className:t})),disabled:d||o,...c,children:l})}},5519:function(e,t,n){"use strict";n.d(t,{Z:function(){return c}});var s=n(5893),r=n(7472),a=n(5675),i=n.n(a),l=n(1664),o=n.n(l);n(7294);var d=n(8276);function c(e){let{text:t,children:n,"data-testid":a}=e,{settings:l}=(0,r.Z)();return(0,s.jsx)("div",{className:"absolute top-0 bottom-0 left-0 right-0 flex justify-center items-center p-5","data-testid":a,children:(0,s.jsxs)("div",{className:"m-auto flex flex-col gap-2 w-full",children:[l.theme?(0,s.jsx)(i(),{src:"/linkwarden_".concat("dark"===l.theme?"dark":"light",".png"),width:640,height:136,alt:"Linkwarden",className:"h-12 w-fit mx-auto"}):void 0,t?(0,s.jsx)("p",{className:"text-lg max-w-[30rem] min-w-80 w-full mx-auto font-semibold px-2 text-center",children:t}):void 0,n,(0,s.jsx)("p",{className:"text-center text-xs text-neutral mb-5",children:(0,s.jsx)(d.cC,{values:{date:new Date().getFullYear()},i18nKey:"all_rights_reserved",components:[(0,s.jsx)(o(),{href:"https://linkwarden.app",className:"font-semibold"})]})})]})})}},972:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSP:function(){return h},default:function(){return x}});var s=n(5893),r=n(1664),a=n.n(r),i=n(7294),l=n(6501),o=n(3299),d=n(1163),c=n(5519),u=n(4157),m=n(7199),p=n(8276),f=n(4155),h=!0;function x(e){let{availableLogins:t}=e,{t:n}=(0,p.$G)(),[r,h]=(0,i.useState)(!1),x=(0,d.useRouter)(),[b,v]=(0,i.useState)({name:"",username:"",email:void 0,password:"",passwordConfirmation:""});async function g(e){if(e.preventDefault(),!r){if(""!==b.name&&""!==b.username&&""!==b.password&&""!==b.passwordConfirmation){if(b.password!==b.passwordConfirmation)return l.Am.error(n("passwords_mismatch"));if(b.password.length<8)return l.Am.error(n("password_too_short"));let{passwordConfirmation:e,...t}=b;h(!0);let s=l.Am.loading(n("creating_account")),r=await fetch("/api/v1/users",{body:JSON.stringify(t),headers:{"Content-Type":"application/json"},method:"POST"}),a=await r.json();l.Am.dismiss(s),h(!1),r.ok?(b.email,x.push("/login"),l.Am.success(n("account_created"))):l.Am.error(a.response)}else l.Am.error(n("fill_all_fields"))}}async function w(e){h(!0);let t=l.Am.loading(n("authenticating"));await (0,o.signIn)(e,{}),l.Am.dismiss(t),h(!1)}return(0,s.jsx)(c.Z,{text:f.env.NEXT_PUBLIC_STRIPE?n("trial_offer_desc",{count:Number(f.env.NEXT_PUBLIC_TRIAL_PERIOD_DAYS||14)}):n("register_desc"),"data-testid":"registration-form",children:(0,s.jsx)("form",{onSubmit:g,children:(0,s.jsxs)("div",{className:"p-4 flex flex-col gap-3 justify-between max-w-[30rem] min-w-80 w-full mx-auto bg-base-200 rounded-2xl shadow-md border border-neutral-content",children:[(0,s.jsx)("p",{className:"text-3xl text-center font-extralight",children:n("enter_details")}),(0,s.jsx)("div",{className:"divider my-0"}),(0,s.jsxs)("div",{children:[(0,s.jsx)("p",{className:"text-sm w-fit font-semibold mb-1",children:n("display_name")}),(0,s.jsx)(u.Z,{autoFocus:!0,placeholder:"Johnny",value:b.name,className:"bg-base-100","data-testid":"display-name-input",onChange:e=>v({...b,name:e.target.value})})]}),(0,s.jsxs)("div",{children:[(0,s.jsx)("p",{className:"text-sm w-fit font-semibold mb-1",children:n("username")}),(0,s.jsx)(u.Z,{placeholder:"john",value:b.username,className:"bg-base-100","data-testid":"username-input",onChange:e=>v({...b,username:e.target.value})})]}),void 0,(0,s.jsxs)("div",{className:"w-full",children:[(0,s.jsx)("p",{className:"text-sm w-fit font-semibold  mb-1",children:n("password")}),(0,s.jsx)(u.Z,{type:"password",placeholder:"••••••••••••••",value:b.password,className:"bg-base-100","data-testid":"password-input",onChange:e=>v({...b,password:e.target.value})})]}),(0,s.jsxs)("div",{className:"w-full",children:[(0,s.jsx)("p",{className:"text-sm w-fit font-semibold mb-1",children:n("confirm_password")}),(0,s.jsx)(u.Z,{type:"password",placeholder:"••••••••••••••",value:b.passwordConfirmation,className:"bg-base-100","data-testid":"password-confirm-input",onChange:e=>v({...b,passwordConfirmation:e.target.value})})]}),f.env.NEXT_PUBLIC_STRIPE?(0,s.jsx)("div",{className:"text-xs text-neutral mb-3",children:(0,s.jsx)("p",{children:(0,s.jsx)(p.cC,{i18nKey:"sign_up_agreement",components:[(0,s.jsx)(a(),{href:"https://linkwarden.app/tos",className:"font-semibold","data-testid":"terms-of-service-link"},0),(0,s.jsx)(a(),{href:"https://linkwarden.app/privacy-policy",className:"font-semibold","data-testid":"privacy-policy-link"},1)]})})}):void 0,(0,s.jsx)(m.Z,{type:"submit",loading:r,intent:"accent",size:"full","data-testid":"register-button",children:n("sign_up")}),t.buttonAuths.length>0?(0,s.jsx)("div",{className:"divider my-1",children:n("or_continue_with")}):void 0,function(){let e=[];return t.buttonAuths.forEach((t,n)=>{e.push((0,s.jsx)(i.Fragment,{children:(0,s.jsxs)(m.Z,{type:"button",onClick:()=>w(t.method),size:"full",intent:"secondary",loading:r,children:["google"===t.name.toLowerCase()||"apple"===t.name.toLowerCase()?(0,s.jsx)("i",{className:"bi-"+t.name.toLowerCase()}):void 0,t.name]})},n))}),e}(),(0,s.jsxs)("div",{children:[(0,s.jsxs)("div",{className:"text-neutral text-center flex items-baseline gap-1 justify-center",children:[(0,s.jsx)("p",{className:"w-fit text-neutral",children:n("already_registered")}),(0,s.jsx)(a(),{href:"/login",className:"font-bold text-base-content","data-testid":"login-link",children:n("login")})]}),f.env.NEXT_PUBLIC_STRIPE?(0,s.jsxs)("div",{className:"text-neutral text-center flex items-baseline gap-1 justify-center",children:[(0,s.jsx)("p",{children:n("need_help")}),(0,s.jsx)(a(),{href:"mailto:support@linkwarden.app",className:"font-bold text-base-content","data-testid":"support-link",children:n("get_in_touch")})]}):void 0]})]})})})}},5139:function(e,t,n){"use strict";n.d(t,{j:function(){return a}});let s=e=>"boolean"==typeof e?"".concat(e):0===e?"0":e,r=function(){for(var e,t,n=0,s="";n<arguments.length;)(e=arguments[n++])&&(t=function e(t){var n,s,r="";if("string"==typeof t||"number"==typeof t)r+=t;else if("object"==typeof t){if(Array.isArray(t))for(n=0;n<t.length;n++)t[n]&&(s=e(t[n]))&&(r&&(r+=" "),r+=s);else for(n in t)t[n]&&(r&&(r+=" "),r+=n)}return r}(e))&&(s&&(s+=" "),s+=t);return s},a=(e,t)=>n=>{var a;if((null==t?void 0:t.variants)==null)return r(e,null==n?void 0:n.class,null==n?void 0:n.className);let{variants:i,defaultVariants:l}=t,o=Object.keys(i).map(e=>{let t=null==n?void 0:n[e],r=null==l?void 0:l[e];if(null===t)return null;let a=s(t)||s(r);return i[e][a]}),d=n&&Object.entries(n).reduce((e,t)=>{let[n,s]=t;return void 0===s||(e[n]=s),e},{}),c=null==t?void 0:null===(a=t.compoundVariants)||void 0===a?void 0:a.reduce((e,t)=>{let{class:n,className:s,...r}=t;return Object.entries(r).every(e=>{let[t,n]=e;return Array.isArray(n)?n.includes({...l,...d}[t]):({...l,...d})[t]===n})?[...e,n,s]:e},[]);return r(e,o,c,null==n?void 0:n.class,null==n?void 0:n.className)}}},function(e){e.O(0,[664,675,774,888,179],function(){return e(e.s=4722)}),_N_E=e.O()}]);