"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[283],{9609:function(e,n,l){l.d(n,{Z:function(){return S}});var t=l(5893),a=l(7294),i=l(2980),s=l(1810),r=l(2122),o=l(4157),c=l(9401),d=l(1664),u=l.n(d),m=l(7169),h=l(8276),v=l(6496),x=l(6501);function p(e){let n,{onClose:l,activeLink:i}=e,{t:d}=(0,h.$G)(),[p,b]=(0,a.useState)(i);try{n=new URL(p.url||"").host.toLowerCase()}catch(e){console.log(e)}let[f,j]=(0,a.useState)(!1),g=(0,v.Yc)();(0,a.useEffect)(()=>{b(i)},[]);let w=async()=>{if(!f){j(!0);let e=x.ZP.loading(d("updating"));await g.mutateAsync(p,{onSettled:(n,t)=>{x.ZP.dismiss(e),t?x.ZP.error(t.message):(l(),x.ZP.success(d("updated")))}}),j(!1)}};return(0,t.jsxs)(m.Z,{toggleModal:l,children:[(0,t.jsx)("p",{className:"text-xl font-thin",children:d("edit_link")}),(0,t.jsx)("div",{className:"divider mb-3 mt-1"}),p.url?(0,t.jsxs)(u(),{href:p.url,className:"truncate text-neutral flex gap-2 mb-5 w-fit max-w-full",title:p.url,target:"_blank",children:[(0,t.jsx)("i",{className:"bi-link-45deg text-xl"}),(0,t.jsx)("p",{children:n})]}):void 0,(0,t.jsxs)("div",{className:"w-full",children:[(0,t.jsx)("p",{className:"mb-2",children:d("name")}),(0,t.jsx)(o.Z,{value:p.name,onChange:e=>b({...p,name:e.target.value}),placeholder:d("placeholder_example_link"),className:"bg-base-200"})]}),(0,t.jsx)("div",{className:"mt-5",children:(0,t.jsxs)("div",{className:"grid sm:grid-cols-2 gap-3",children:[(0,t.jsxs)("div",{children:[(0,t.jsx)("p",{className:"mb-2",children:d("collection")}),p.collection.name?(0,t.jsx)(s.Z,{onChange:e=>{(null==e?void 0:e.__isNew__)&&(e.value=null),b({...p,collection:{id:null==e?void 0:e.value,name:null==e?void 0:e.label,ownerId:null==e?void 0:e.ownerId}})},defaultValue:p.collection.id?{value:p.collection.id,label:p.collection.name}:{value:null,label:"Unorganized"},creatable:!1}):null]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("p",{className:"mb-2",children:d("tags")}),(0,t.jsx)(r.Z,{onChange:e=>{let n=e.map(e=>({name:e.label}));b({...p,tags:n})},defaultValue:p.tags.map(e=>({label:e.name,value:e.id}))})]}),(0,t.jsxs)("div",{className:"sm:col-span-2",children:[(0,t.jsx)("p",{className:"mb-2",children:d("description")}),(0,t.jsx)("textarea",{value:(0,c.Z)(p.description),onChange:e=>b({...p,description:e.target.value}),placeholder:d("link_description_placeholder"),className:"resize-none w-full rounded-md p-2 border-neutral-content bg-base-200 focus:border-sky-300 dark:focus:border-sky-600 border-solid border outline-none duration-100"})]})]})}),(0,t.jsx)("div",{className:"flex justify-end items-center mt-5",children:(0,t.jsx)("button",{className:"btn btn-accent dark:border-violet-400 text-white",onClick:w,children:d("save_changes")})})]})}var b=l(1163),f=l(7199);function j(e){let{onClose:n,activeLink:l}=e,{t:i}=(0,h.$G)(),[s,r]=(0,a.useState)(l),o=(0,v.S5)(),c=(0,b.useRouter)();(0,a.useEffect)(()=>{r(l)},[]);let d=async()=>{let e=x.ZP.loading(i("deleting"));await o.mutateAsync(s.id,{onSettled:(l,t)=>{x.ZP.dismiss(e),t?x.ZP.error(t.message):(c.pathname.startsWith("/links/[id]")&&c.push("/dashboard"),x.ZP.success(i("deleted")),n())}})};return(0,t.jsxs)(m.Z,{toggleModal:n,children:[(0,t.jsx)("p",{className:"text-xl font-thin text-red-500",children:i("delete_link")}),(0,t.jsx)("div",{className:"divider mb-3 mt-1"}),(0,t.jsxs)("div",{className:"flex flex-col gap-3",children:[(0,t.jsx)("p",{children:i("link_deletion_confirmation_message")}),(0,t.jsxs)("div",{role:"alert",className:"alert alert-warning",children:[(0,t.jsx)("i",{className:"bi-exclamation-triangle text-xl"}),(0,t.jsxs)("span",{children:[(0,t.jsxs)("b",{children:[i("warning"),":"]})," ",i("irreversible_warning")]})]}),(0,t.jsx)("p",{children:i("shift_key_tip")}),(0,t.jsxs)(f.Z,{className:"ml-auto",intent:"destructive",onClick:d,children:[(0,t.jsx)("i",{className:"bi-trash text-xl"}),i("delete")]})]})]})}var g=l(7102),w=l(3299),N=l(326);function k(e){let{name:n,icon:l,format:a,link:i,downloadable:s}=e;(0,v.mk)();let r=(0,b.useRouter)(),o=!!r.pathname.startsWith("/public")||void 0,c=()=>{let e="/api/v1/archives/".concat(null==i?void 0:i.id,"?format=").concat(a);fetch(e).then(n=>{if(n.ok){let n=document.createElement("a");n.href=e,n.download=a===g.Gt.monolith?"Webpage":a===g.Gt.pdf?"PDF":"Screenshot",n.click()}else console.error("Failed to download file")}).catch(e=>{console.error("Error:",e)})};return(0,t.jsxs)("div",{className:"flex justify-between items-center pr-1 border border-neutral-content rounded-md",children:[(0,t.jsxs)("div",{className:"flex gap-2 items-center",children:[(0,t.jsx)("div",{className:"bg-primary text-primary-content p-2 rounded-l-md",children:(0,t.jsx)("i",{className:"".concat(l," text-2xl")})}),(0,t.jsx)("p",{children:n})]}),(0,t.jsxs)("div",{className:"flex gap-1",children:[s?(0,t.jsx)("div",{onClick:()=>c(),className:"btn btn-sm btn-square",children:(0,t.jsx)("i",{className:"bi-cloud-arrow-down text-xl text-neutral"})}):void 0,(0,t.jsx)(u(),{href:"".concat(o?"/public":"","/preserved/").concat(null==i?void 0:i.id,"?format=").concat(a),target:"_blank",className:"btn btn-sm btn-square",children:(0,t.jsx)("i",{className:"bi-box-arrow-up-right text-xl text-neutral"})})]})]})}var _=l(1256),y=l(7010),Z=l(2676);function P(e){var n,l,i;let{onClose:s,link:r}=e,{t:o}=(0,h.$G)(),c=(0,w.useSession)(),d=(0,v.mk)(),{data:p={}}=(0,Z.a)(),f=(0,b.useRouter)();f.pathname.startsWith("/public");let[j,P]=(0,a.useState)({id:null,name:"",username:"",image:"",archiveAsScreenshot:void 0,archiveAsMonolith:void 0,archiveAsPDF:void 0});(0,a.useEffect)(()=>{let e=async()=>{if(r.collection.ownerId!==p.id){let e=await (0,_.Z)(r.collection.ownerId);P(e)}else r.collection.ownerId===p.id&&P({id:p.id,name:p.name,username:p.username,image:p.image,archiveAsScreenshot:p.archiveAsScreenshot,archiveAsMonolith:p.archiveAsScreenshot,archiveAsPDF:p.archiveAsPDF})};e()},[r.collection.ownerId]);let C=()=>r&&(!0!==j.archiveAsScreenshot||r.pdf&&"pending"!==r.pdf)&&(!0!==j.archiveAsMonolith||r.monolith&&"pending"!==r.monolith)&&(!0!==j.archiveAsPDF||r.pdf&&"pending"!==r.pdf)&&r.readable&&"pending"!==r.readable,S=()=>(0,N.RM)(r)||(0,N.hd)(r)||(0,N.Ji)(r)||(0,N.ZV)(r);(0,a.useEffect)(()=>{let e;return(async()=>{await d.mutateAsync(r.id)})(),C()?e&&clearInterval(e):e=setInterval(async()=>{await d.mutateAsync(r.id)},5e3),()=>{e&&clearInterval(e)}},[null==r?void 0:r.monolith]);let A=async()=>{let e=x.ZP.loading(o("sending_request")),n=await fetch("/api/v1/links/".concat(null==r?void 0:r.id,"/archive"),{method:"PUT"}),l=await n.json();x.ZP.dismiss(e),n.ok?(await d.mutateAsync(null==r?void 0:r.id),x.ZP.success(o("link_being_archived"))):x.ZP.error(l.response)};return(0,t.jsxs)(m.Z,{toggleModal:s,children:[(0,t.jsx)("p",{className:"text-xl font-thin",children:o("preserved_formats")}),(0,t.jsx)("div",{className:"divider mb-2 mt-1"}),(0,N.RM)(r)||(0,N.hd)(r)||(0,N.Ji)(r)||(0,N.ZV)(r)?(0,t.jsx)("p",{className:"mb-3",children:o("available_formats")}):"",(0,t.jsxs)("div",{className:"flex flex-col gap-3",children:[(0,N.ZV)(r)?(0,t.jsx)(k,{name:o("webpage"),icon:"bi-filetype-html",format:g.Gt.monolith,link:r,downloadable:!0}):void 0,(0,N.RM)(r)?(0,t.jsx)(k,{name:o("screenshot"),icon:"bi-file-earmark-image",format:(null==r?void 0:null===(n=r.image)||void 0===n?void 0:n.endsWith("png"))?g.Gt.png:g.Gt.jpeg,link:r,downloadable:!0}):void 0,(0,N.hd)(r)?(0,t.jsx)(k,{name:o("pdf"),icon:"bi-file-earmark-pdf",format:g.Gt.pdf,link:r,downloadable:!0}):void 0,(0,N.Ji)(r)?(0,t.jsx)(k,{name:o("readable"),icon:"bi-file-earmark-text",format:g.Gt.readability,link:r}):void 0,C()||S()?!C()&&S()?(0,t.jsxs)("div",{className:"w-full h-full flex flex-col justify-center p-5",children:[(0,t.jsx)(y.Z,{color:"oklch(var(--p))",className:"mx-auto mb-3",size:20}),(0,t.jsx)("p",{className:"text-center",children:o("there_are_more_formats")}),(0,t.jsx)("p",{className:"text-center text-sm",children:o("check_back_later")})]}):void 0:(0,t.jsxs)("div",{className:"w-full h-full flex flex-col justify-center p-10",children:[(0,t.jsx)(y.Z,{color:"oklch(var(--p))",className:"mx-auto mb-3",size:30}),(0,t.jsx)("p",{className:"text-center text-2xl",children:o("preservation_in_queue")}),(0,t.jsx)("p",{className:"text-center text-lg",children:o("check_back_later")})]}),(0,t.jsxs)("div",{className:"flex flex-col sm:flex-row gap-3 items-center justify-center ".concat(C()?"sm:mt ":""),children:[(0,t.jsxs)(u(),{href:"https://web.archive.org/web/".concat(null==r?void 0:null===(l=r.url)||void 0===l?void 0:l.replace(/(^\w+:|^)\/\//,"")),target:"_blank",className:"text-neutral duration-100 hover:opacity-60 flex gap-2 w-1/2 justify-center items-center text-sm",children:[(0,t.jsx)("p",{className:"whitespace-nowrap",children:o("view_latest_snapshot")}),(0,t.jsx)("i",{className:"bi-box-arrow-up-right"})]}),(null==r?void 0:r.collection.ownerId)===(null===(i=c.data)||void 0===i?void 0:i.user.id)&&(0,t.jsx)("div",{className:"btn btn-outline",onClick:A,children:(0,t.jsxs)("div",{children:[(0,t.jsx)("p",{children:o("refresh_preserved_formats")}),(0,t.jsx)("p",{className:"text-xs",children:o("this_deletes_current_preservations")})]})})]})]})]})}var C=l(8229);function S(e){let{link:n,toggleShowInfo:l,position:s,linkInfo:r,alignToTop:o,flipDropdown:c}=e,{t:d}=(0,h.$G)(),u=(0,i.Z)(n.collection.id),[m,b]=(0,a.useState)(!1),[f,g]=(0,a.useState)(!1),[w,N]=(0,a.useState)(!1),{data:k={}}=(0,Z.a)(),_=(0,v.Yc)(),y=((0,v.S5)(),async()=>{let e=null!=n&&!!n.pinnedBy&&!!n.pinnedBy[0],l=x.ZP.loading(d("updating"));await _.mutateAsync({...n,pinnedBy:e?void 0:[{id:k.id}]},{onSettled:(n,t)=>{x.ZP.dismiss(l),t?x.ZP.error(t.message):x.ZP.success(e?d("link_unpinned"):d("link_pinned"))}})});return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)("div",{className:"dropdown dropdown-left absolute ".concat(s||"top-3 right-3"," ").concat(o?"":"dropdown-end"," z-20"),children:[(0,t.jsx)("div",{tabIndex:0,role:"button",onMouseDown:C.Mm,className:"btn btn-ghost btn-sm btn-square text-neutral",children:(0,t.jsx)("i",{title:"More",className:"bi-three-dots text-xl"})}),(0,t.jsxs)("ul",{className:"dropdown-content z-[20] menu shadow bg-base-200 border border-neutral-content rounded-box mr-1 ".concat(o?"":"translate-y-10"),children:[(0,t.jsx)("li",{children:(0,t.jsx)("div",{role:"button",tabIndex:0,onClick:()=>{var e,n;null===(e=null===(n=document)||void 0===n?void 0:n.activeElement)||void 0===e||e.blur(),y()},className:"whitespace-nowrap",children:(null==n?void 0:n.pinnedBy)&&n.pinnedBy[0]?d("unpin"):d("pin_to_dashboard")})}),void 0!==r&&l?(0,t.jsx)("li",{children:(0,t.jsx)("div",{role:"button",tabIndex:0,onClick:()=>{var e,n;null===(e=null===(n=document)||void 0===n?void 0:n.activeElement)||void 0===e||e.blur(),l()},className:"whitespace-nowrap",children:r?d("hide_link_details"):d("show_link_details")})}):void 0,!0===u||(null==u?void 0:u.canUpdate)?(0,t.jsx)("li",{children:(0,t.jsx)("div",{role:"button",tabIndex:0,onClick:()=>{var e,n;null===(e=null===(n=document)||void 0===n?void 0:n.activeElement)||void 0===e||e.blur(),b(!0)},className:"whitespace-nowrap",children:d("edit_link")})}):void 0,"url"===n.type&&(0,t.jsx)("li",{children:(0,t.jsx)("div",{role:"button",tabIndex:0,onClick:()=>{var e,n;null===(e=null===(n=document)||void 0===n?void 0:n.activeElement)||void 0===e||e.blur(),N(!0)},className:"whitespace-nowrap",children:d("preserved_formats")})}),!0===u||(null==u?void 0:u.canDelete)?(0,t.jsx)("li",{children:(0,t.jsx)("div",{role:"button",tabIndex:0,onClick:async e=>{var n,l;null===(n=null===(l=document)||void 0===l?void 0:l.activeElement)||void 0===n||n.blur(),e.shiftKey||g(!0)},className:"whitespace-nowrap",children:d("delete")})}):void 0]})]}),m?(0,t.jsx)(p,{onClose:()=>b(!1),activeLink:n}):void 0,f?(0,t.jsx)(j,{onClose:()=>g(!1),activeLink:n}):void 0,w?(0,t.jsx)(P,{onClose:()=>N(!1),link:n}):void 0]})}},326:function(e,n,l){function t(e){return e&&e.image&&"pending"!==e.image&&"unavailable"!==e.image}function a(e){return e&&e.pdf&&"pending"!==e.pdf&&"unavailable"!==e.pdf}function i(e){return e&&e.readable&&"pending"!==e.readable&&"unavailable"!==e.readable}function s(e){return e&&e.monolith&&"pending"!==e.monolith&&"unavailable"!==e.monolith}function r(e){return e&&e.preview&&"pending"!==e.preview&&"unavailable"!==e.preview}l.d(n,{Ji:function(){return i},RM:function(){return t},ZV:function(){return s},hd:function(){return a},je:function(){return r}})},2602:function(e,n,l){l.d(n,{Z:function(){return t}});function t(e){try{return new URL(e),!0}catch(e){return!1}}}}]);