"use strict";
exports.id = 6857;
exports.ids = [6857];
exports.modules = {

/***/ 7169:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ Modal)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_ClickAwayHandler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2144);
/* harmony import */ var vaul__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5725);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([vaul__WEBPACK_IMPORTED_MODULE_3__]);
vaul__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




function Modal({ toggleModal, className, children, dismissible = true }) {
    const [drawerIsOpen, setDrawerIsOpen] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(true);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (window.innerWidth >= 640) {
            document.body.style.overflow = "hidden";
            document.body.style.position = "relative";
            return ()=>{
                document.body.style.overflow = "auto";
                document.body.style.position = "";
            };
        }
    }, []);
    if (window.innerWidth < 640) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(vaul__WEBPACK_IMPORTED_MODULE_3__.Drawer.Root, {
            open: drawerIsOpen,
            onClose: ()=>dismissible && setTimeout(()=>toggleModal(), 100),
            dismissible: dismissible,
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(vaul__WEBPACK_IMPORTED_MODULE_3__.Drawer.Portal, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(vaul__WEBPACK_IMPORTED_MODULE_3__.Drawer.Overlay, {
                        className: "fixed inset-0 bg-black/40"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ClickAwayHandler__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                        onClickOutside: ()=>dismissible && setDrawerIsOpen(false),
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(vaul__WEBPACK_IMPORTED_MODULE_3__.Drawer.Content, {
                            className: "flex flex-col rounded-t-2xl min-h-max mt-24 fixed bottom-0 left-0 right-0 z-30",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "p-4 bg-base-100 rounded-t-2xl flex-1 border-neutral-content border-t overflow-y-auto",
                                "data-testid": "mobile-modal-container",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "mx-auto w-12 h-1.5 flex-shrink-0 rounded-full bg-neutral mb-5",
                                        "data-testid": "mobile-modal-slider"
                                    }),
                                    children
                                ]
                            })
                        })
                    })
                ]
            })
        });
    } else {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "overflow-y-auto pt-2 sm:py-2 fixed top-0 bottom-0 right-0 left-0 bg-black bg-opacity-10 backdrop-blur-sm flex justify-center items-center fade-in z-40",
            "data-testid": "modal-outer",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ClickAwayHandler__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                onClickOutside: ()=>dismissible && toggleModal(),
                className: `w-full mt-auto sm:m-auto sm:w-11/12 sm:max-w-2xl ${className || ""}`,
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "slide-up mt-auto sm:m-auto relative border-neutral-content rounded-t-2xl sm:rounded-2xl border-t sm:border shadow-2xl p-5 bg-base-100 overflow-y-auto sm:overflow-y-visible",
                    "data-testid": "modal-container",
                    children: [
                        dismissible && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            onClick: toggleModal,
                            className: "absolute top-4 right-3 btn btn-sm outline-none btn-circle btn-ghost z-10",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                className: "bi-x text-neutral text-2xl",
                                "data-testid": "close-modal-button"
                            })
                        }),
                        children
                    ]
                })
            })
        });
    }
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4157:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ TextInput)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);

function TextInput({ autoFocus, value, type, placeholder, onChange, onKeyDown, className, spellCheck, "data-testid": dataTestId }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
        "data-testid": dataTestId,
        spellCheck: spellCheck,
        autoFocus: autoFocus,
        type: type ? type : "text",
        placeholder: placeholder,
        value: value,
        onChange: onChange,
        onKeyDown: onKeyDown,
        className: `w-full rounded-md p-2 border-neutral-content border-solid border outline-none focus:border-primary duration-100 ${className || ""}`
    });
}


/***/ })

};
;