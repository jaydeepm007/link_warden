"use strict";
exports.id = 3367;
exports.ids = [3367];
exports.modules = {

/***/ 2948:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ SearchBar)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6201);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_hot_toast__WEBPACK_IMPORTED_MODULE_3__]);
react_hot_toast__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




function SearchBar({ placeholder }) {
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    const [searchQuery, setSearchQuery] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        router.query.q ? setSearchQuery(decodeURIComponent(router.query.q)) : setSearchQuery("");
    }, [
        router.query.q
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "flex items-center relative group",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                htmlFor: "search-box",
                className: "inline-flex items-center w-fit absolute left-1 pointer-events-none rounded-md p-1 text-primary",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                    className: "bi-search"
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                id: "search-box",
                type: "text",
                placeholder: placeholder || "Search for Links",
                value: searchQuery,
                onChange: (e)=>{
                    e.target.value.includes("%") && react_hot_toast__WEBPACK_IMPORTED_MODULE_3__.toast.error("The search query should not contain '%'.");
                    setSearchQuery(e.target.value.replace("%", ""));
                },
                onKeyDown: (e)=>{
                    if (e.key === "Enter") {
                        if (router.pathname.startsWith("/public")) {
                            if (!searchQuery) {
                                return router.push("/public/collections/" + router.query.id);
                            }
                            return router.push("/public/collections/" + router.query.id + "?q=" + encodeURIComponent(searchQuery || ""));
                        } else {
                            return router.push("/search?q=" + encodeURIComponent(searchQuery));
                        }
                    }
                },
                className: "border border-neutral-content bg-base-200 focus:border-primary py-1 rounded-md pl-9 pr-2 w-full max-w-[15rem] md:focus:w-80 md:w-[15rem] md:max-w-full duration-200 outline-none"
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1566:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ ToggleDarkMode)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var _store_localSettings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7472);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1377);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_3__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_store_localSettings__WEBPACK_IMPORTED_MODULE_1__]);
_store_localSettings__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




function ToggleDarkMode({ className }) {
    const { t } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_3__.useTranslation)();
    const { settings, updateSettings } = (0,_store_localSettings__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)();
    const [theme, setTheme] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(localStorage.getItem("theme"));
    const handleToggle = (e)=>{
        setTheme(e.target.checked ? "dark" : "light");
    };
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        updateSettings({
            theme: theme
        });
    }, [
        theme
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "tooltip tooltip-bottom",
        "data-tip": t("switch_to", {
            theme: settings.theme === "light" ? "Dark" : "Light"
        }),
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
            className: `swap swap-rotate btn-square text-neutral btn btn-ghost btn-sm ${className}`,
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                    type: "checkbox",
                    onChange: handleToggle,
                    className: "theme-controller",
                    checked: localStorage.getItem("theme") === "light" ? false : true
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                    className: "bi-sun-fill text-xl swap-on"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                    className: "bi-moon-fill text-xl swap-off"
                })
            ]
        })
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;