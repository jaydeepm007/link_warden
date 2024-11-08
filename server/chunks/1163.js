exports.id = 1163;
exports.ids = [1163];
exports.modules = {

/***/ 2676:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   I: () => (/* binding */ useUpdateUser),
/* harmony export */   a: () => (/* binding */ useUser)
/* harmony export */ });
/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9752);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1649);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_1__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_tanstack_react_query__WEBPACK_IMPORTED_MODULE_0__]);
_tanstack_react_query__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


const useUser = ()=>{
    const { data, status } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_1__.useSession)();
    const userId = data?.user.id;
    return (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_0__.useQuery)({
        queryKey: [
            "user"
        ],
        queryFn: async ()=>{
            const response = await fetch(`/api/v1/users/${userId}`);
            if (!response.ok) throw new Error("Failed to fetch user data.");
            const data = await response.json();
            return data.response;
        },
        enabled: !!userId && status === "authenticated",
        placeholderData: {}
    });
};
const useUpdateUser = ()=>{
    const queryClient = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_0__.useQueryClient)();
    return (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_0__.useMutation)({
        mutationFn: async (user)=>{
            const response = await fetch(`/api/v1/users/${user.id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(user)
            });
            const data = await response.json();
            if (!response.ok) throw new Error(data.response);
            return data;
        },
        onSuccess: (data)=>{
            queryClient.setQueryData([
                "user"
            ], data.response);
        },
        onMutate: async (user)=>{
            await queryClient.cancelQueries({
                queryKey: [
                    "user"
                ]
            });
            queryClient.setQueryData([
                "user"
            ], (oldData)=>{
                return {
                    ...oldData,
                    ...user
                };
            });
        }
    });
};


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6279:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ useInitialData)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1649);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _store_localSettings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7472);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_store_localSettings__WEBPACK_IMPORTED_MODULE_2__]);
_store_localSettings__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



function useInitialData() {
    const { status, data } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_1__.useSession)();
    const { setSettings } = (0,_store_localSettings__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)();
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        setSettings();
    }, [
        status,
        data
    ]);
    return status;
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8476:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ AuthRedirect)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1649);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _hooks_useInitialData__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6279);
/* harmony import */ var _hooks_store_user__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2676);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_hooks_useInitialData__WEBPACK_IMPORTED_MODULE_4__, _hooks_store_user__WEBPACK_IMPORTED_MODULE_5__]);
([_hooks_useInitialData__WEBPACK_IMPORTED_MODULE_4__, _hooks_store_user__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






const stripeEnabled = process.env.NEXT_PUBLIC_STRIPE === "true";
function AuthRedirect({ children }) {
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    const { status } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_3__.useSession)();
    const [shouldRenderChildren, setShouldRenderChildren] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { data: user = {} } = (0,_hooks_store_user__WEBPACK_IMPORTED_MODULE_5__/* .useUser */ .a)();
    (0,_hooks_useInitialData__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)();
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const isLoggedIn = status === "authenticated";
        const isUnauthenticated = status === "unauthenticated";
        const isPublicPage = router.pathname.startsWith("/public");
        const hasInactiveSubscription = user.id && !user.subscription?.active && stripeEnabled;
        // There are better ways of doing this... but this one works for now
        const routes = [
            {
                path: "/login",
                isProtected: false
            },
            {
                path: "/register",
                isProtected: false
            },
            {
                path: "/confirmation",
                isProtected: false
            },
            {
                path: "/forgot",
                isProtected: false
            },
            {
                path: "/auth/reset-password",
                isProtected: false
            },
            {
                path: "/",
                isProtected: false
            },
            {
                path: "/subscribe",
                isProtected: true
            },
            {
                path: "/dashboard",
                isProtected: true
            },
            {
                path: "/settings",
                isProtected: true
            },
            {
                path: "/collections",
                isProtected: true
            },
            {
                path: "/links",
                isProtected: true
            },
            {
                path: "/tags",
                isProtected: true
            },
            {
                path: "/preserved",
                isProtected: true
            },
            {
                path: "/admin",
                isProtected: true
            },
            {
                path: "/search",
                isProtected: true
            }
        ];
        if (isPublicPage) {
            setShouldRenderChildren(true);
        } else {
            if (isLoggedIn && hasInactiveSubscription) {
                redirectTo("/subscribe");
            } else if (isLoggedIn && !routes.some((e)=>router.pathname.startsWith(e.path) && e.isProtected)) {
                redirectTo("/dashboard");
            } else if (isUnauthenticated && routes.some((e)=>router.pathname.startsWith(e.path) && e.isProtected)) {
                redirectTo("/login");
            } else {
                setShouldRenderChildren(true);
            }
        }
    }, [
        status,
        user,
        router.pathname
    ]);
    function redirectTo(destination) {
        router.push(destination).then(()=>setShouldRenderChildren(true));
    }
    if (status !== "loading" && shouldRenderChildren) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: children
        });
    } else {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {});
    }
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4446:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Ee: () => (/* binding */ isPWA),
/* harmony export */   Mm: () => (/* binding */ dropdownTriggerer),
/* harmony export */   cn: () => (/* binding */ cn),
/* harmony export */   qx: () => (/* binding */ isIphone)
/* harmony export */ });
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6593);
/* harmony import */ var tailwind_merge__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8097);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([clsx__WEBPACK_IMPORTED_MODULE_0__, tailwind_merge__WEBPACK_IMPORTED_MODULE_1__]);
([clsx__WEBPACK_IMPORTED_MODULE_0__, tailwind_merge__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
function isPWA() {
    return window.matchMedia("(display-mode: standalone)").matches || window.navigator.standalone || document.referrer.includes("android-app://");
}
function isIphone() {
    return /iPhone/.test(navigator.userAgent) && !window.MSStream;
}
function dropdownTriggerer(e) {
    let targetEl = e.currentTarget;
    if (targetEl && targetEl.matches(":focus")) {
        setTimeout(function() {
            targetEl.blur();
        }, 0);
    }
}


const cn = (...classes)=>(0,tailwind_merge__WEBPACK_IMPORTED_MODULE_1__.twMerge)((0,clsx__WEBPACK_IMPORTED_MODULE_0__["default"])(...classes));

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4178:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6764);
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var bootstrap_icons_font_bootstrap_icons_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3195);
/* harmony import */ var bootstrap_icons_font_bootstrap_icons_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(bootstrap_icons_font_bootstrap_icons_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1649);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _layouts_AuthRedirect__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8476);
/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6201);
/* harmony import */ var _lib_client_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(4446);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1377);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _tanstack_react_query_devtools__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(9063);
/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(9752);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_layouts_AuthRedirect__WEBPACK_IMPORTED_MODULE_6__, react_hot_toast__WEBPACK_IMPORTED_MODULE_7__, _lib_client_utils__WEBPACK_IMPORTED_MODULE_8__, _tanstack_react_query_devtools__WEBPACK_IMPORTED_MODULE_10__, _tanstack_react_query__WEBPACK_IMPORTED_MODULE_11__]);
([_layouts_AuthRedirect__WEBPACK_IMPORTED_MODULE_6__, react_hot_toast__WEBPACK_IMPORTED_MODULE_7__, _lib_client_utils__WEBPACK_IMPORTED_MODULE_8__, _tanstack_react_query_devtools__WEBPACK_IMPORTED_MODULE_10__, _tanstack_react_query__WEBPACK_IMPORTED_MODULE_11__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);










// import useInitialData from "@/hooks/useInitialData";



const queryClient = new _tanstack_react_query__WEBPACK_IMPORTED_MODULE_11__.QueryClient({
    defaultOptions: {
        queries: {
            staleTime: 1000 * 30
        }
    }
});
function App({ Component, pageProps }) {
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if ((0,_lib_client_utils__WEBPACK_IMPORTED_MODULE_8__/* .isPWA */ .Ee)()) {
            const meta = document.createElement("meta");
            meta.name = "viewport";
            meta.content = "width=device-width, initial-scale=1, maximum-scale=1";
            document.getElementsByTagName("head")[0].appendChild(meta);
        }
    }, []);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_tanstack_react_query__WEBPACK_IMPORTED_MODULE_11__.QueryClientProvider, {
        client: queryClient,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(next_auth_react__WEBPACK_IMPORTED_MODULE_4__.SessionProvider, {
                session: pageProps.session,
                refetchOnWindowFocus: false,
                basePath: "/api/v1/auth",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_5___default()), {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                                children: "Linkwarden"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                                name: "viewport",
                                content: "width=device-width, initial-scale=1"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                                name: "theme-color",
                                content: "#000000"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                                rel: "apple-touch-icon",
                                sizes: "180x180",
                                href: "/apple-touch-icon.png"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                                rel: "icon",
                                type: "image/png",
                                sizes: "32x32",
                                href: "/favicon-32x32.png"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                                rel: "icon",
                                type: "image/png",
                                sizes: "16x16",
                                href: "/favicon-16x16.png"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                                rel: "manifest",
                                href: "/site.webmanifest"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_layouts_AuthRedirect__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_hot_toast__WEBPACK_IMPORTED_MODULE_7__.Toaster, {
                                position: "top-center",
                                reverseOrder: false,
                                toastOptions: {
                                    className: "border border-sky-100 dark:border-neutral-700 dark:bg-neutral-800 dark:text-white"
                                },
                                children: (t)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_hot_toast__WEBPACK_IMPORTED_MODULE_7__.ToastBar, {
                                        toast: t,
                                        children: ({ icon, message })=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "flex flex-row",
                                                "data-testid": "toast-message-container",
                                                "data-type": t.type,
                                                children: [
                                                    icon,
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        "data-testid": "toast-message",
                                                        children: message
                                                    }),
                                                    t.type !== "loading" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                        className: "btn btn-xs outline-none btn-circle btn-ghost",
                                                        "data-testid": "close-toast-button",
                                                        onClick: ()=>react_hot_toast__WEBPACK_IMPORTED_MODULE_7__["default"].dismiss(t.id),
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                            className: "bi bi-x"
                                                        })
                                                    })
                                                ]
                                            })
                                    })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
                                ...pageProps
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_tanstack_react_query_devtools__WEBPACK_IMPORTED_MODULE_10__.ReactQueryDevtools, {
                initialIsOpen: false
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_i18next__WEBPACK_IMPORTED_MODULE_9__.appWithTranslation)(App));

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3162:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Document)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6859);
/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_document__WEBPACK_IMPORTED_MODULE_1__);


function Document() {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(next_document__WEBPACK_IMPORTED_MODULE_1__.Html, {
        lang: "en",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_document__WEBPACK_IMPORTED_MODULE_1__.Head, {}),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("body", {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_document__WEBPACK_IMPORTED_MODULE_1__.Main, {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_document__WEBPACK_IMPORTED_MODULE_1__.NextScript, {})
                ]
            })
        ]
    });
}


/***/ }),

/***/ 7472:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _types_global__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7102);
/* harmony import */ var zustand__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6912);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([zustand__WEBPACK_IMPORTED_MODULE_1__]);
zustand__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


const useLocalSettingsStore = (0,zustand__WEBPACK_IMPORTED_MODULE_1__.create)((set)=>({
        settings: {
            theme: "",
            viewMode: "",
            sortBy: _types_global__WEBPACK_IMPORTED_MODULE_0__/* .Sort */ .PE.DateNewestFirst
        },
        updateSettings: async (newSettings)=>{
            if (newSettings.theme !== undefined && newSettings.theme !== localStorage.getItem("theme")) {
                localStorage.setItem("theme", newSettings.theme);
                const localTheme = localStorage.getItem("theme") || "";
                document.querySelector("html")?.setAttribute("data-theme", localTheme);
            }
            if (newSettings.viewMode !== undefined && newSettings.viewMode !== localStorage.getItem("viewMode")) {
                localStorage.setItem("viewMode", newSettings.viewMode);
            // const localTheme = localStorage.getItem("viewMode") || "";
            }
            if (newSettings.sortBy !== undefined && newSettings.sortBy !== Number(localStorage.getItem("sortBy"))) {
                localStorage.setItem("sortBy", newSettings.sortBy.toString());
            }
            set((state)=>({
                    settings: {
                        ...state.settings,
                        ...newSettings
                    }
                }));
        },
        setSettings: async ()=>{
            if (!localStorage.getItem("theme")) {
                localStorage.setItem("theme", "dark");
            }
            const localTheme = localStorage.getItem("theme") || "";
            set((state)=>({
                    settings: {
                        ...state.settings,
                        theme: localTheme
                    }
                }));
            document.querySelector("html")?.setAttribute("data-theme", localTheme);
        }
    }));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useLocalSettingsStore);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7102:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Gt: () => (/* binding */ ArchivedFormat),
/* harmony export */   PE: () => (/* binding */ Sort),
/* harmony export */   VS: () => (/* binding */ TokenExpiry),
/* harmony export */   en: () => (/* binding */ MigrationFormat),
/* harmony export */   fU: () => (/* binding */ Plan),
/* harmony export */   wO: () => (/* binding */ ViewMode)
/* harmony export */ });
/* unused harmony export LinkType */
var ViewMode;
(function(ViewMode) {
    ViewMode["Card"] = "card";
    ViewMode["List"] = "list";
    ViewMode["Masonry"] = "masonry";
})(ViewMode || (ViewMode = {}));
var Sort;
(function(Sort) {
    Sort[Sort["DateNewestFirst"] = 0] = "DateNewestFirst";
    Sort[Sort["DateOldestFirst"] = 1] = "DateOldestFirst";
    Sort[Sort["NameAZ"] = 2] = "NameAZ";
    Sort[Sort["NameZA"] = 3] = "NameZA";
    Sort[Sort["DescriptionAZ"] = 4] = "DescriptionAZ";
    Sort[Sort["DescriptionZA"] = 5] = "DescriptionZA";
})(Sort || (Sort = {}));
var MigrationFormat;
(function(MigrationFormat) {
    MigrationFormat[MigrationFormat["linkwarden"] = 0] = "linkwarden";
    MigrationFormat[MigrationFormat["htmlFile"] = 1] = "htmlFile";
    MigrationFormat[MigrationFormat["wallabag"] = 2] = "wallabag";
})(MigrationFormat || (MigrationFormat = {}));
var Plan;
(function(Plan) {
    Plan[Plan["monthly"] = 0] = "monthly";
    Plan[Plan["yearly"] = 1] = "yearly";
})(Plan || (Plan = {}));
var ArchivedFormat;
(function(ArchivedFormat) {
    ArchivedFormat[ArchivedFormat["png"] = 0] = "png";
    ArchivedFormat[ArchivedFormat["jpeg"] = 1] = "jpeg";
    ArchivedFormat[ArchivedFormat["pdf"] = 2] = "pdf";
    ArchivedFormat[ArchivedFormat["readability"] = 3] = "readability";
    ArchivedFormat[ArchivedFormat["monolith"] = 4] = "monolith";
})(ArchivedFormat || (ArchivedFormat = {}));
var LinkType;
(function(LinkType) {
    LinkType[LinkType["url"] = 0] = "url";
    LinkType[LinkType["pdf"] = 1] = "pdf";
    LinkType[LinkType["image"] = 2] = "image";
    LinkType[LinkType["monolith"] = 3] = "monolith";
})(LinkType || (LinkType = {}));
var TokenExpiry;
(function(TokenExpiry) {
    TokenExpiry[TokenExpiry["sevenDays"] = 0] = "sevenDays";
    TokenExpiry[TokenExpiry["oneMonth"] = 1] = "oneMonth";
    TokenExpiry[TokenExpiry["twoMonths"] = 2] = "twoMonths";
    TokenExpiry[TokenExpiry["threeMonths"] = 3] = "threeMonths";
    TokenExpiry[TokenExpiry["never"] = 4] = "never";
})(TokenExpiry || (TokenExpiry = {}));


/***/ }),

/***/ 6764:
/***/ (() => {



/***/ })

};
;