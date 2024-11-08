"use strict";
exports.id = 1633;
exports.ids = [1633];
exports.modules = {

/***/ 8050:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ useWindowDimensions)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function useWindowDimensions() {
    const [dimensions, setDimensions] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
        height: window.innerHeight,
        width: window.innerWidth
    });
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        function handleResize() {
            setDimensions({
                height: window.innerHeight,
                width: window.innerWidth
            });
        }
        window.addEventListener("resize", handleResize);
        return ()=>{
            window.removeEventListener("resize", handleResize);
        };
    }, []);
    return dimensions;
}


/***/ }),

/***/ 1633:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ SettingsLayout)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "next-i18next"
var external_next_i18next_ = __webpack_require__(1377);
;// CONCATENATED MODULE: ./components/SettingsSidebar.tsx





function SettingsSidebar({ className }) {
    const { t } = (0,external_next_i18next_.useTranslation)();
    const LINKWARDEN_VERSION = "v2.7.1";
    const router = (0,router_.useRouter)();
    const [active, setActive] = (0,external_react_.useState)("");
    (0,external_react_.useEffect)(()=>{
        setActive(router.asPath);
    }, [
        router
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: `bg-base-100 h-full w-64 overflow-y-auto border-solid border border-base-100 border-r-neutral-content p-5 z-20 flex flex-col gap-5 justify-between ${className || ""}`,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "flex flex-col gap-1",
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                        href: "/settings/account",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: `${active === "/settings/account" ? "bg-primary/20" : "hover:bg-neutral/20"} duration-100 py-5 px-2 cursor-pointer flex items-center gap-2 w-full rounded-md h-8`,
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx("i", {
                                    className: "bi-person text-primary text-2xl"
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("p", {
                                    className: "truncate w-full pr-7",
                                    children: t("account")
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                        href: "/settings/preference",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: `${active === "/settings/preference" ? "bg-primary/20" : "hover:bg-neutral/20"} duration-100 py-5 px-2 cursor-pointer flex items-center gap-2 w-full rounded-md h-8`,
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx("i", {
                                    className: "bi-sliders text-primary text-2xl"
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("p", {
                                    className: "truncate w-full pr-7",
                                    children: t("preference")
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                        href: "/settings/access-tokens",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: `${active === "/settings/access-tokens" ? "bg-primary/20" : "hover:bg-neutral/20"} duration-100 py-5 px-2 cursor-pointer flex items-center gap-2 w-full rounded-md h-8`,
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx("i", {
                                    className: "bi-key text-primary text-2xl"
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("p", {
                                    className: "truncate w-full pr-7",
                                    children: t("access_tokens")
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                        href: "/settings/password",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: `${active === "/settings/password" ? "bg-primary/20" : "hover:bg-neutral/20"} duration-100 py-5 px-2 cursor-pointer flex items-center gap-2 w-full rounded-md h-8`,
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx("i", {
                                    className: "bi-lock text-primary text-2xl"
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("p", {
                                    className: "truncate w-full pr-7",
                                    children: t("password")
                                })
                            ]
                        })
                    }),
                    process.env.NEXT_PUBLIC_STRIPE && /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                        href: "/settings/billing",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: `${active === "/settings/billing" ? "bg-primary/20" : "hover:bg-neutral/20"} duration-100 py-5 px-2 cursor-pointer flex items-center gap-2 w-full rounded-md h-8`,
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx("i", {
                                    className: "bi-credit-card text-primary text-xl"
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("p", {
                                    className: "truncate w-full pr-7",
                                    children: t("billing")
                                })
                            ]
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "flex flex-col gap-1",
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                        href: `https://github.com/linkwarden/linkwarden/releases`,
                        target: "_blank",
                        className: "text-neutral text-sm ml-2 hover:opacity-50 duration-100",
                        children: t("linkwarden_version", {
                            version: LINKWARDEN_VERSION
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                        href: "https://docs.linkwarden.app",
                        target: "_blank",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: `hover:bg-neutral/20 duration-100 py-2 px-2 cursor-pointer flex items-center gap-2 w-full rounded-md h-8`,
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx("i", {
                                    className: "bi-question-circle text-primary text-xl"
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("p", {
                                    className: "truncate w-full pr-7",
                                    children: t("help")
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                        href: "https://github.com/linkwarden/linkwarden",
                        target: "_blank",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: `hover:bg-neutral/20 duration-100 py-2 px-2 cursor-pointer flex items-center gap-2 w-full rounded-md h-8`,
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx("i", {
                                    className: "bi-github text-primary text-xl"
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("p", {
                                    className: "truncate w-full pr-7",
                                    children: t("github")
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                        href: "https://twitter.com/LinkwardenHQ",
                        target: "_blank",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: `hover:bg-neutral/20 duration-100 py-2 px-2 cursor-pointer flex items-center gap-2 w-full rounded-md h-8`,
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx("i", {
                                    className: "bi-twitter-x text-primary text-xl"
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("p", {
                                    className: "truncate w-full pr-7",
                                    children: t("twitter")
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                        href: "https://fosstodon.org/@linkwarden",
                        target: "_blank",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: `hover:bg-neutral/20 duration-100 py-2 px-2 cursor-pointer flex items-center gap-2 w-full rounded-md h-8`,
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx("i", {
                                    className: "bi-mastodon text-primary text-xl"
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("p", {
                                    className: "truncate w-full pr-7",
                                    children: t("mastodon")
                                })
                            ]
                        })
                    })
                ]
            })
        ]
    });
}

// EXTERNAL MODULE: ./components/ClickAwayHandler.tsx
var ClickAwayHandler = __webpack_require__(2144);
// EXTERNAL MODULE: ./hooks/useWindowDimensions.tsx
var useWindowDimensions = __webpack_require__(8050);
;// CONCATENATED MODULE: ./layouts/SettingsLayout.tsx







function SettingsLayout({ children }) {
    const router = (0,router_.useRouter)();
    const [sidebar, setSidebar] = (0,external_react_.useState)(false);
    const { width } = (0,useWindowDimensions/* default */.Z)();
    (0,external_react_.useEffect)(()=>{
        setSidebar(false);
    }, [
        width
    ]);
    (0,external_react_.useEffect)(()=>{
        setSidebar(false);
    }, [
        router
    ]);
    const toggleSidebar = ()=>{
        setSidebar(!sidebar);
    };
    return /*#__PURE__*/ jsx_runtime.jsx(jsx_runtime.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            className: "flex max-w-screen-md mx-auto",
            children: [
                /*#__PURE__*/ jsx_runtime.jsx("div", {
                    className: "hidden lg:block fixed h-screen",
                    children: /*#__PURE__*/ jsx_runtime.jsx(SettingsSidebar, {})
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "w-full min-h-screen p-5 lg:ml-64",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "gap-2 inline-flex mr-3",
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    onClick: toggleSidebar,
                                    className: "text-neutral btn btn-square btn-sm btn-ghost lg:hidden",
                                    children: /*#__PURE__*/ jsx_runtime.jsx("i", {
                                        className: "bi-list text-2xl leading-none"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                    href: "/dashboard",
                                    className: "text-neutral btn btn-square btn-sm btn-ghost",
                                    children: /*#__PURE__*/ jsx_runtime.jsx("i", {
                                        className: "bi-chevron-left text-xl"
                                    })
                                })
                            ]
                        }),
                        children,
                        sidebar ? /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "fixed top-0 bottom-0 right-0 left-0 bg-black bg-opacity-10 backdrop-blur-sm flex items-center fade-in z-30",
                            children: /*#__PURE__*/ jsx_runtime.jsx(ClickAwayHandler/* default */.Z, {
                                className: "h-full",
                                onClickOutside: toggleSidebar,
                                children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    className: "slide-right h-full shadow-lg",
                                    children: /*#__PURE__*/ jsx_runtime.jsx(SettingsSidebar, {})
                                })
                            })
                        }) : null
                    ]
                })
            ]
        })
    });
}


/***/ })

};
;