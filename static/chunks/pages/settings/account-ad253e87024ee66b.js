(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[858],{6093:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/settings/account",function(){return n(5837)}])},9223:function(e,t,n){"use strict";n.d(t,{Z:function(){return a}});var r=n(5893);function a(e){let{label:t,state:n,className:a,onClick:s}=e;return(0,r.jsxs)("label",{className:"label cursor-pointer flex gap-2 justify-start ".concat(a||""),children:[(0,r.jsx)("input",{type:"checkbox",checked:n,onChange:s,className:"checkbox checkbox-primary"}),(0,r.jsx)("span",{className:"label-text",children:t})]})}},2144:function(e,t,n){"use strict";n.d(t,{Z:function(){return l}});var r=n(5893),a=n(7294);function s(e){let t=0;for(;e;){let n=window.getComputedStyle(e).getPropertyValue("z-index"),r=Number(n);if("auto"!==n&&!isNaN(r)){t=r;break}e=e.parentElement}return t}function l(e){let{children:t,onClickOutside:n,className:l,style:i,onMount:o}=e,c=(0,a.useRef)(null);return(0,a.useEffect)(()=>{function e(e){let t=e.target;if(c.current&&!c.current.contains(t)){let r=s(c.current),a=s(t);a<=r&&n(e)}}return document.addEventListener("mousedown",e),()=>{document.removeEventListener("mousedown",e)}},[c,n]),(0,a.useEffect)(()=>{if(c.current&&o){let e=c.current.getBoundingClientRect();o(e)}},[]),(0,r.jsx)("div",{ref:c,className:l,style:i,children:t})}},7169:function(e,t,n){"use strict";n.d(t,{Z:function(){return i}});var r=n(5893),a=n(7294),s=n(2144),l=n(2314);function i(e){let{toggleModal:t,className:n,children:i,dismissible:o=!0}=e,[c,d]=a.useState(!0);return((0,a.useEffect)(()=>{if(window.innerWidth>=640)return document.body.style.overflow="hidden",document.body.style.position="relative",()=>{document.body.style.overflow="auto",document.body.style.position=""}},[]),window.innerWidth<640)?(0,r.jsx)(l.d.Root,{open:c,onClose:()=>o&&setTimeout(()=>t(),100),dismissible:o,children:(0,r.jsxs)(l.d.Portal,{children:[(0,r.jsx)(l.d.Overlay,{className:"fixed inset-0 bg-black/40"}),(0,r.jsx)(s.Z,{onClickOutside:()=>o&&d(!1),children:(0,r.jsx)(l.d.Content,{className:"flex flex-col rounded-t-2xl min-h-max mt-24 fixed bottom-0 left-0 right-0 z-30",children:(0,r.jsxs)("div",{className:"p-4 bg-base-100 rounded-t-2xl flex-1 border-neutral-content border-t overflow-y-auto","data-testid":"mobile-modal-container",children:[(0,r.jsx)("div",{className:"mx-auto w-12 h-1.5 flex-shrink-0 rounded-full bg-neutral mb-5","data-testid":"mobile-modal-slider"}),i]})})})]})}):(0,r.jsx)("div",{className:"overflow-y-auto pt-2 sm:py-2 fixed top-0 bottom-0 right-0 left-0 bg-black bg-opacity-10 backdrop-blur-sm flex justify-center items-center fade-in z-40","data-testid":"modal-outer",children:(0,r.jsx)(s.Z,{onClickOutside:()=>o&&t(),className:"w-full mt-auto sm:m-auto sm:w-11/12 sm:max-w-2xl ".concat(n||""),children:(0,r.jsxs)("div",{className:"slide-up mt-auto sm:m-auto relative border-neutral-content rounded-t-2xl sm:rounded-2xl border-t sm:border shadow-2xl p-5 bg-base-100 overflow-y-auto sm:overflow-y-visible","data-testid":"modal-container",children:[o&&(0,r.jsx)("div",{onClick:t,className:"absolute top-4 right-3 btn btn-sm outline-none btn-circle btn-ghost z-10",children:(0,r.jsx)("i",{className:"bi-x text-neutral text-2xl","data-testid":"close-modal-button"})}),i]})})})}},5130:function(e,t,n){"use strict";n.d(t,{Z:function(){return i}});var r=n(5893),a=n(7294),s=n(5675),l=n.n(s);function i(e){let{src:t,className:n,priority:s,name:i,large:o}=e,[c,d]=(0,a.useState)("");return(0,a.useEffect)(()=>{!t||(null==t?void 0:t.includes("base64"))||t.startsWith("http")?t?d(t):d(""):d("/api/v1/".concat(t.replace("uploads/","").replace(".jpg","")))},[t]),c?(0,r.jsx)("div",{className:"avatar skeleton rounded-full drop-shadow-md ".concat(n||""," ").concat(o?"w-28 h-28":"w-8 h-8"),children:(0,r.jsx)("div",{className:"rounded-full w-full h-full ring-2 ring-neutral-content",children:(0,r.jsx)(l(),{alt:"",src:c,height:112,width:112,priority:s,draggable:!1,onError:()=>d(""),className:"aspect-square rounded-full"})})}):(0,r.jsx)("div",{className:"avatar drop-shadow-md placeholder ".concat(n||""," ").concat(o?"w-28 h-28":"w-8 h-8"),children:(0,r.jsx)("div",{className:"bg-base-100 text-neutral rounded-full w-full h-full ring-2 ring-neutral-content select-none",children:i?(0,r.jsx)("span",{className:"text-2xl capitalize",children:i.slice(0,1)}):(0,r.jsx)("i",{className:"bi-person ".concat(o?"text-5xl":"text-xl")})})})}},160:function(e,t,n){"use strict";n.d(t,{Z:function(){return a}});var r=n(5893);function a(e){let{onClick:t,label:n,loading:a,className:s,type:l}=e;return(0,r.jsx)("button",{type:l||void 0,className:"btn btn-accent dark:border-violet-400 text-white tracking-wider w-fit flex items-center gap-2 ".concat(s||""),onClick:()=>{!a&&t&&t()},children:(0,r.jsx)("p",{children:n})})}},4157:function(e,t,n){"use strict";n.d(t,{Z:function(){return a}});var r=n(5893);function a(e){let{autoFocus:t,value:n,type:a,placeholder:s,onChange:l,onKeyDown:i,className:o,spellCheck:c,"data-testid":d}=e;return(0,r.jsx)("input",{"data-testid":d,spellCheck:c,autoFocus:t,type:a||"text",placeholder:s,value:n,onChange:l,onKeyDown:i,className:"w-full rounded-md p-2 border-neutral-content border-solid border outline-none focus:border-primary duration-100 ".concat(o||"")})}},7199:function(e,t,n){"use strict";var r=n(5893),a=n(8229),s=n(5139);let l=(0,s.j)("select-none relative duration-200 rounded-lg text-center w-fit flex justify-center items-center gap-2 disabled:pointer-events-none disabled:opacity-50",{variants:{intent:{accent:"bg-accent text-white hover:bg-accent/80 border border-violet-400",primary:"bg-primary text-primary-content hover:bg-primary/80",secondary:"bg-neutral-content text-secondary-foreground hover:bg-neutral-content/80 border border-neutral/30",destructive:"bg-error text-white hover:bg-error/80 border border-neutral/60",outline:"border border-input bg-background hover:bg-accent hover:text-accent-content",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{small:"h-7 px-2",medium:"h-10 px-4 py-2",large:"h-12 px-7 py-2",full:"px-4 py-2 w-full",icon:"h-10 w-10"},loading:{true:"cursor-wait"}},defaultVariants:{intent:"primary",size:"medium"}});t.Z=e=>{let{className:t,intent:n,size:s,children:i,disabled:o,loading:c=!1,...d}=e;return(0,r.jsx)("button",{className:(0,a.cn)(l({intent:n,size:s,className:t})),disabled:c||o,...d,children:i})}},8050:function(e,t,n){"use strict";n.d(t,{Z:function(){return a}});var r=n(7294);function a(){let[e,t]=(0,r.useState)({height:window.innerHeight,width:window.innerWidth});return(0,r.useEffect)(()=>{function e(){t({height:window.innerHeight,width:window.innerWidth})}return window.addEventListener("resize",e),()=>{window.removeEventListener("resize",e)}},[]),e}},1633:function(e,t,n){"use strict";n.d(t,{Z:function(){return h}});var r=n(5893),a=n(1664),s=n.n(a),l=n(1163),i=n(7294),o=n(8276),c=n(4155);function d(e){let{className:t}=e,{t:n}=(0,o.$G)(),a=(0,l.useRouter)(),[d,u]=(0,i.useState)("");return(0,i.useEffect)(()=>{u(a.asPath)},[a]),(0,r.jsxs)("div",{className:"bg-base-100 h-full w-64 overflow-y-auto border-solid border border-base-100 border-r-neutral-content p-5 z-20 flex flex-col gap-5 justify-between ".concat(t||""),children:[(0,r.jsxs)("div",{className:"flex flex-col gap-1",children:[(0,r.jsx)(s(),{href:"/settings/account",children:(0,r.jsxs)("div",{className:"".concat("/settings/account"===d?"bg-primary/20":"hover:bg-neutral/20"," duration-100 py-5 px-2 cursor-pointer flex items-center gap-2 w-full rounded-md h-8"),children:[(0,r.jsx)("i",{className:"bi-person text-primary text-2xl"}),(0,r.jsx)("p",{className:"truncate w-full pr-7",children:n("account")})]})}),(0,r.jsx)(s(),{href:"/settings/preference",children:(0,r.jsxs)("div",{className:"".concat("/settings/preference"===d?"bg-primary/20":"hover:bg-neutral/20"," duration-100 py-5 px-2 cursor-pointer flex items-center gap-2 w-full rounded-md h-8"),children:[(0,r.jsx)("i",{className:"bi-sliders text-primary text-2xl"}),(0,r.jsx)("p",{className:"truncate w-full pr-7",children:n("preference")})]})}),(0,r.jsx)(s(),{href:"/settings/access-tokens",children:(0,r.jsxs)("div",{className:"".concat("/settings/access-tokens"===d?"bg-primary/20":"hover:bg-neutral/20"," duration-100 py-5 px-2 cursor-pointer flex items-center gap-2 w-full rounded-md h-8"),children:[(0,r.jsx)("i",{className:"bi-key text-primary text-2xl"}),(0,r.jsx)("p",{className:"truncate w-full pr-7",children:n("access_tokens")})]})}),(0,r.jsx)(s(),{href:"/settings/password",children:(0,r.jsxs)("div",{className:"".concat("/settings/password"===d?"bg-primary/20":"hover:bg-neutral/20"," duration-100 py-5 px-2 cursor-pointer flex items-center gap-2 w-full rounded-md h-8"),children:[(0,r.jsx)("i",{className:"bi-lock text-primary text-2xl"}),(0,r.jsx)("p",{className:"truncate w-full pr-7",children:n("password")})]})}),c.env.NEXT_PUBLIC_STRIPE&&(0,r.jsx)(s(),{href:"/settings/billing",children:(0,r.jsxs)("div",{className:"".concat("/settings/billing"===d?"bg-primary/20":"hover:bg-neutral/20"," duration-100 py-5 px-2 cursor-pointer flex items-center gap-2 w-full rounded-md h-8"),children:[(0,r.jsx)("i",{className:"bi-credit-card text-primary text-xl"}),(0,r.jsx)("p",{className:"truncate w-full pr-7",children:n("billing")})]})})]}),(0,r.jsxs)("div",{className:"flex flex-col gap-1",children:[(0,r.jsx)(s(),{href:"https://github.com/linkwarden/linkwarden/releases",target:"_blank",className:"text-neutral text-sm ml-2 hover:opacity-50 duration-100",children:n("linkwarden_version",{version:"v2.7.1"})}),(0,r.jsx)(s(),{href:"https://docs.linkwarden.app",target:"_blank",children:(0,r.jsxs)("div",{className:"hover:bg-neutral/20 duration-100 py-2 px-2 cursor-pointer flex items-center gap-2 w-full rounded-md h-8",children:[(0,r.jsx)("i",{className:"bi-question-circle text-primary text-xl"}),(0,r.jsx)("p",{className:"truncate w-full pr-7",children:n("help")})]})}),(0,r.jsx)(s(),{href:"https://github.com/linkwarden/linkwarden",target:"_blank",children:(0,r.jsxs)("div",{className:"hover:bg-neutral/20 duration-100 py-2 px-2 cursor-pointer flex items-center gap-2 w-full rounded-md h-8",children:[(0,r.jsx)("i",{className:"bi-github text-primary text-xl"}),(0,r.jsx)("p",{className:"truncate w-full pr-7",children:n("github")})]})}),(0,r.jsx)(s(),{href:"https://twitter.com/LinkwardenHQ",target:"_blank",children:(0,r.jsxs)("div",{className:"hover:bg-neutral/20 duration-100 py-2 px-2 cursor-pointer flex items-center gap-2 w-full rounded-md h-8",children:[(0,r.jsx)("i",{className:"bi-twitter-x text-primary text-xl"}),(0,r.jsx)("p",{className:"truncate w-full pr-7",children:n("twitter")})]})}),(0,r.jsx)(s(),{href:"https://fosstodon.org/@linkwarden",target:"_blank",children:(0,r.jsxs)("div",{className:"hover:bg-neutral/20 duration-100 py-2 px-2 cursor-pointer flex items-center gap-2 w-full rounded-md h-8",children:[(0,r.jsx)("i",{className:"bi-mastodon text-primary text-xl"}),(0,r.jsx)("p",{className:"truncate w-full pr-7",children:n("mastodon")})]})})]})]})}var u=n(2144),m=n(8050);function h(e){let{children:t}=e,n=(0,l.useRouter)(),[a,o]=(0,i.useState)(!1),{width:c}=(0,m.Z)();(0,i.useEffect)(()=>{o(!1)},[c]),(0,i.useEffect)(()=>{o(!1)},[n]);let h=()=>{o(!a)};return(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)("div",{className:"flex max-w-screen-md mx-auto",children:[(0,r.jsx)("div",{className:"hidden lg:block fixed h-screen",children:(0,r.jsx)(d,{})}),(0,r.jsxs)("div",{className:"w-full min-h-screen p-5 lg:ml-64",children:[(0,r.jsxs)("div",{className:"gap-2 inline-flex mr-3",children:[(0,r.jsx)("div",{onClick:h,className:"text-neutral btn btn-square btn-sm btn-ghost lg:hidden",children:(0,r.jsx)("i",{className:"bi-list text-2xl leading-none"})}),(0,r.jsx)(s(),{href:"/dashboard",className:"text-neutral btn btn-square btn-sm btn-ghost",children:(0,r.jsx)("i",{className:"bi-chevron-left text-xl"})})]}),t,a?(0,r.jsx)("div",{className:"fixed top-0 bottom-0 right-0 left-0 bg-black bg-opacity-10 backdrop-blur-sm flex items-center fade-in z-30",children:(0,r.jsx)(u.Z,{className:"h-full",onClickOutside:h,children:(0,r.jsx)("div",{className:"slide-right h-full shadow-lg",children:(0,r.jsx)(d,{})})})}):null]})]})})}},3479:function(e){"use strict";e.exports={i18n:{defaultLocale:"en",locales:["en","it","fr","zh"]},reloadOnPrerender:!1}},5837:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSP:function(){return E},default:function(){return C}});var r=n(5893),a=n(7294),s=n(6501),l=n(1633),i=n(4157),o=n(6770),c=n.n(o);let d=e=>new Promise(t=>{c().imageFileResizer(e,150,150,"JPEG",100,0,e=>{t(e)},"blob")});var u=n(5130),m=n(160),h=n(7102),x=n(1664),p=n.n(x),f=n(9223),g=n(8229),b=n(7169),v=n(8276),w=n(4155);function j(e){let{onClose:t,onSubmit:n,oldEmail:s,newEmail:l}=e,{t:o}=(0,v.$G)(),[c,d]=(0,a.useState)("");return(0,r.jsxs)(b.Z,{toggleModal:t,children:[(0,r.jsx)("p",{className:"text-xl font-thin",children:o("confirm_password")}),(0,r.jsx)("div",{className:"divider mb-3 mt-1"}),(0,r.jsxs)("div",{className:"flex flex-col gap-5",children:[(0,r.jsxs)("p",{children:[o("password_change_warning"),"true"===w.env.NEXT_PUBLIC_STRIPE&&o("stripe_update_note")]}),(0,r.jsx)("p",{children:o("sso_will_be_removed_warning",{service:""})}),(0,r.jsxs)("div",{children:[(0,r.jsx)("p",{children:o("old_email")}),(0,r.jsx)("p",{className:"text-neutral",children:s})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)("p",{children:o("new_email")}),(0,r.jsx)("p",{className:"text-neutral",children:l})]}),(0,r.jsxs)("div",{className:"w-full",children:[(0,r.jsx)("p",{className:"mb-2",children:o("password")}),(0,r.jsx)(i.Z,{value:c,onChange:e=>d(e.target.value),placeholder:"••••••••••••••",className:"bg-base-200",type:"password",autoFocus:!0})]}),(0,r.jsx)("div",{className:"flex justify-end items-center",children:(0,r.jsx)("button",{className:"btn btn-accent dark:border-violet-400 text-white",onClick:()=>n(c),children:o("confirm")})})]})]})}var N=n(7199),y=n(3479),_=n(2676),k=n(4155),E=!0;function C(){let[e,t]=(0,a.useState)(!1),[n,o]=(0,a.useState)(!1),{data:c}=(0,_.a)(),x=(0,_.I)(),[b,w]=(0,a.useState)(C(c)?{id:null,name:"",username:"",email:"",emailVerified:null,password:void 0,image:"",isPrivate:!0,createdAt:null,whitelistedUsers:[]}:c),{t:E}=(0,v.$G)();function C(e){return 0===Object.keys(e).length}(0,a.useEffect)(()=>{C(c)||w({...c})},[c]);let S=async e=>{var t;let n=e.target.files[0],r=null===(t=n.name.split(".").pop())||void 0===t?void 0:t.toLowerCase();if(["png","jpeg","jpg"].includes(r)){let e=await d(n);if(e.size<1048576){let t=new FileReader;t.onload=()=>{w({...b,image:t.result})},t.readAsDataURL(e)}else s.Am.error(E("image_upload_size_error"))}else s.Am.error(E("image_upload_format_error"))},P=async e=>{o(!0);let n=s.Am.loading(E("applying_settings"));await x.mutateAsync({...b,password:e||void 0},{onSuccess:e=>{e.response.email!==b.email&&(s.Am.success(E("email_change_request")),t(!1))},onSettled:(e,r)=>{s.Am.dismiss(n),r?s.Am.error(r.message):(e.response.email!==b.email&&(s.Am.success(E("email_change_request")),t(!1)),s.Am.success(E("settings_applied")))}}),o(!1)},z=async(e,t)=>{o(!0);let n=e.target.files[0];if(n){var r=new FileReader;r.readAsText(n,"UTF-8"),r.onload=async function(e){var n;let r=s.Am.loading(E("importing_bookmarks")),a=null===(n=e.target)||void 0===n?void 0:n.result,l=await fetch("/api/v1/migration",{method:"POST",body:JSON.stringify({format:t,data:a})}),i=await l.json();s.Am.dismiss(r),l.ok?(s.Am.success(E("import_success")),setTimeout(()=>{location.reload()},2e3)):s.Am.error(i.response)},r.onerror=function(e){console.log("Error:",e)}}o(!1)},[A,I]=(0,a.useState)("");(0,a.useEffect)(()=>{var e;I(null==c?void 0:null===(e=c.whitelistedUsers)||void 0===e?void 0:e.join(", "))},[c]),(0,a.useEffect)(()=>{w({...b,whitelistedUsers:Z(A)})},[A]);let Z=e=>null==e?void 0:e.replace(/\s+/g,"").split(",");return(0,r.jsxs)(l.Z,{children:[(0,r.jsx)("p",{className:"capitalize text-3xl font-thin inline",children:E("accountSettings")}),(0,r.jsx)("div",{className:"divider my-3"}),(0,r.jsxs)("div",{className:"flex flex-col gap-5",children:[(0,r.jsxs)("div",{className:"grid sm:grid-cols-2 gap-3 auto-rows-auto",children:[(0,r.jsxs)("div",{className:"flex flex-col gap-3",children:[(0,r.jsxs)("div",{children:[(0,r.jsx)("p",{className:"mb-2",children:E("display_name")}),(0,r.jsx)(i.Z,{value:b.name||"",className:"bg-base-200",onChange:e=>w({...b,name:e.target.value})})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)("p",{className:"mb-2",children:E("username")}),(0,r.jsx)(i.Z,{value:b.username||"",className:"bg-base-200",onChange:e=>w({...b,username:e.target.value})})]}),void 0,(0,r.jsxs)("div",{children:[(0,r.jsx)("p",{className:"mb-2",children:E("language")}),(0,r.jsxs)("select",{value:b.locale||"",onChange:e=>{w({...b,locale:e.target.value})},className:"select border border-neutral-content focus:outline-none focus:border-primary duration-100 w-full bg-base-200 rounded-[0.375rem] min-h-0 h-[2.625rem] leading-4 p-2",children:[y.i18n.locales.map(e=>(0,r.jsx)("option",{value:e,className:"capitalize",children:new Intl.DisplayNames(e,{type:"language"}).of(e)||""},e)),(0,r.jsx)("option",{disabled:!0,children:E("more_coming_soon")})]})]})]}),(0,r.jsxs)("div",{className:"sm:row-span-2 sm:justify-self-center my-3",children:[(0,r.jsx)("p",{className:"mb-2 sm:text-center",children:E("profile_photo")}),(0,r.jsxs)("div",{className:"w-28 h-28 flex gap-3 sm:flex-col items-center",children:[(0,r.jsx)(u.Z,{priority:!0,src:b.image?b.image:void 0,large:!0}),(0,r.jsxs)("div",{className:"dropdown dropdown-bottom",children:[(0,r.jsxs)(N.Z,{tabIndex:0,role:"button",size:"small",intent:"secondary",onMouseDown:g.Mm,className:"text-sm",children:[(0,r.jsx)("i",{className:"bi-pencil-square text-md duration-100"}),E("edit")]}),(0,r.jsxs)("ul",{className:"shadow menu dropdown-content z-[1] bg-base-200 border border-neutral-content rounded-box mt-1",children:[(0,r.jsx)("li",{children:(0,r.jsxs)("label",{tabIndex:0,role:"button",className:"whitespace-nowrap",children:[E("upload_new_photo"),(0,r.jsx)("input",{type:"file",name:"photo",id:"upload-photo",accept:".png, .jpeg, .jpg",className:"hidden",onChange:S})]})}),b.image&&(0,r.jsx)("li",{children:(0,r.jsx)("div",{tabIndex:0,role:"button",onClick:()=>w({...b,image:""}),className:"whitespace-nowrap",children:E("remove_photo")})})]})]})]})]})]}),(0,r.jsxs)("div",{className:"sm:-mt-3",children:[(0,r.jsx)(f.Z,{label:E("make_profile_private"),state:b.isPrivate,onClick:()=>w({...b,isPrivate:!b.isPrivate})}),(0,r.jsx)("p",{className:"text-neutral text-sm",children:E("profile_privacy_info")}),b.isPrivate&&(0,r.jsxs)("div",{className:"pl-5",children:[(0,r.jsx)("p",{className:"mt-2",children:E("whitelisted_users")}),(0,r.jsx)("p",{className:"text-neutral text-sm mb-3",children:E("whitelisted_users_info")}),(0,r.jsx)("textarea",{className:"w-full resize-none border rounded-md duration-100 bg-base-200 p-2 outline-none border-neutral-content focus:border-primary",placeholder:E("whitelisted_users_placeholder"),value:A,onChange:e=>I(e.target.value)})]})]}),(0,r.jsx)(m.Z,{onClick:()=>{c.email!==b.email?t(!0):P()},loading:n,label:E("save_changes"),className:"mt-2 w-full sm:w-fit"}),(0,r.jsxs)("div",{children:[(0,r.jsx)("div",{className:"flex items-center gap-2 w-full rounded-md h-8",children:(0,r.jsx)("p",{className:"truncate w-full pr-7 text-3xl font-thin",children:E("import_export")})}),(0,r.jsx)("div",{className:"divider my-3"}),(0,r.jsxs)("div",{className:"flex gap-3 flex-col",children:[(0,r.jsxs)("div",{children:[(0,r.jsx)("p",{className:"mb-2",children:E("import_data")}),(0,r.jsxs)("div",{className:"dropdown dropdown-bottom",children:[(0,r.jsxs)(N.Z,{tabIndex:0,role:"button",intent:"secondary",onMouseDown:g.Mm,className:"text-sm",id:"import-dropdown",children:[(0,r.jsx)("i",{className:"bi-cloud-upload text-xl duration-100"}),E("import_links")]}),(0,r.jsxs)("ul",{className:"shadow menu dropdown-content z-[1] bg-base-200 border border-neutral-content rounded-box mt-1",children:[(0,r.jsx)("li",{children:(0,r.jsxs)("label",{tabIndex:0,role:"button",htmlFor:"import-linkwarden-file",title:E("from_linkwarden"),className:"whitespace-nowrap",children:[E("from_linkwarden"),(0,r.jsx)("input",{type:"file",name:"photo",id:"import-linkwarden-file",accept:".json",className:"hidden",onChange:e=>z(e,h.en.linkwarden)})]})}),(0,r.jsx)("li",{children:(0,r.jsxs)("label",{tabIndex:0,role:"button",htmlFor:"import-html-file",title:E("from_html"),className:"whitespace-nowrap",children:[E("from_html"),(0,r.jsx)("input",{type:"file",name:"photo",id:"import-html-file",accept:".html",className:"hidden",onChange:e=>z(e,h.en.htmlFile)})]})}),(0,r.jsx)("li",{children:(0,r.jsxs)("label",{tabIndex:0,role:"button",htmlFor:"import-wallabag-file",title:E("from_wallabag"),className:"whitespace-nowrap",children:[E("from_wallabag"),(0,r.jsx)("input",{type:"file",name:"photo",id:"import-wallabag-file",accept:".json",className:"hidden",onChange:e=>z(e,h.en.wallabag)})]})})]})]})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)("p",{className:"mb-2",children:E("download_data")}),(0,r.jsx)(p(),{className:"w-fit",href:"/api/v1/migration",children:(0,r.jsxs)("div",{className:"select-none relative duration-200 rounded-lg text-sm text-center w-fit flex justify-center items-center gap-2 disabled:pointer-events-none disabled:opacity-50 bg-neutral-content text-secondary-foreground hover:bg-neutral-content/80 border border-neutral/30 h-10 px-4 py-2",children:[(0,r.jsx)("i",{className:"bi-cloud-download text-xl duration-100"}),(0,r.jsx)("p",{children:E("export_data")})]})})]})]})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)("div",{className:"flex items-center gap-2 w-full rounded-md h-8",children:(0,r.jsx)("p",{className:"text-red-500 dark:text-red-500 truncate w-full pr-7 text-3xl font-thin",children:E("delete_account")})}),(0,r.jsx)("div",{className:"divider my-3"}),(0,r.jsxs)("p",{children:[E("delete_account_warning"),k.env.NEXT_PUBLIC_STRIPE?" "+E("cancel_subscription_notice"):void 0]})]}),(0,r.jsx)(p(),{href:"/settings/delete",className:"underline",children:E("account_deletion_page")})]}),e?(0,r.jsx)(j,{onClose:()=>t(!1),onSubmit:P,oldEmail:c.email||"",newEmail:b.email||""}):void 0]})}},6770:function(e){(()=>{"use strict";var t={d:(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},n={};t.r(n),t.d(n,{default:()=>a});var r=function(){var e;function t(){!function(e,t){if(!(e instanceof t))throw TypeError("Cannot call a class as a function")}(this,t)}return e=[{key:"changeHeightWidth",value:function(e,t,n,r,a,s){return n>r&&(e=Math.round(e*r/n),n=r),e>t&&(n=Math.round(n*t/e),e=t),a&&n<a&&(e=Math.round(e*a/n),n=a),s&&e<s&&(n=Math.round(n*s/e),e=s),{height:e,width:n}}},{key:"resizeAndRotateImage",value:function(e,t,n,r,a){var s=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"jpeg",l=arguments.length>6&&void 0!==arguments[6]?arguments[6]:100,i=arguments.length>7&&void 0!==arguments[7]?arguments[7]:0,o=document.createElement("canvas"),c=e.width,d=e.height,u=this.changeHeightWidth(d,n,c,t,r,a);i&&(90===i||270===i)?(o.width=u.height,o.height=u.width):(o.width=u.width,o.height=u.height),c=u.width,d=u.height;var m=o.getContext("2d");return m.fillStyle="rgba(0, 0, 0, 0)",m.fillRect(0,0,c,d),m.imageSmoothingEnabled&&m.imageSmoothingQuality&&(m.imageSmoothingQuality="high"),i&&(m.rotate(i*Math.PI/180),90===i?m.translate(0,-o.width):180===i?m.translate(-o.width,-o.height):270===i?m.translate(-o.height,0):0!==i&&360!==i||m.translate(0,0)),m.drawImage(e,0,0,c,d),o.toDataURL("image/".concat(s),l/100)}},{key:"b64toByteArrays",value:function(e,t){t=t||"image/jpeg";for(var n=atob(e.toString().replace(/^data:image\/(png|jpeg|jpg|webp);base64,/,"")),r=[],a=0;a<n.length;a+=512){for(var s=n.slice(a,a+512),l=Array(s.length),i=0;i<s.length;i++)l[i]=s.charCodeAt(i);var o=new Uint8Array(l);r.push(o)}return r}},{key:"b64toBlob",value:function(e,t){var n=this.b64toByteArrays(e,t);return new Blob(n,{type:t,lastModified:new Date})}},{key:"b64toFile",value:function(e,t,n){var r=this.b64toByteArrays(e,n);return new File(r,t,{type:n,lastModified:new Date})}},{key:"createResizedImage",value:function(e,n,r,a,s,l,i){var o=arguments.length>7&&void 0!==arguments[7]?arguments[7]:"base64",c=arguments.length>8&&void 0!==arguments[8]?arguments[8]:null,d=arguments.length>9&&void 0!==arguments[9]?arguments[9]:null,u=new FileReader;if(!e)throw Error("File Not Found!");if(e.type&&!e.type.includes("image"))throw Error("File Is NOT Image!");u.readAsDataURL(e),u.onload=function(){var m=new Image;m.src=u.result,m.onload=function(){var u=t.resizeAndRotateImage(m,n,r,c,d,a,s,l),h="image/".concat(a);switch(o){case"blob":i(t.b64toBlob(u,h));break;case"base64":default:i(u);break;case"file":var x=e.name.toString().replace(/(png|jpeg|jpg|webp)$/i,"").concat(a.toString());i(t.b64toFile(u,x,h))}}},u.onerror=function(e){throw Error(e)}}}],function(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}(t,e),t}();let a={imageFileResizer:function(e,t,n,a,s,l,i,o,c,d){return r.createResizedImage(e,t,n,a,s,l,i,o,c,d)}};e.exports=n})()}},function(e){e.O(0,[664,675,584,774,888,179],function(){return e(e.s=6093)}),_N_E=e.O()}]);