"use strict";
exports.id = 8465;
exports.ids = [8465];
exports.modules = {

/***/ 8465:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ ProfilePhoto)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);



function ProfilePhoto({ src, className, priority, name, large }) {
    const [image, setImage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (src && !src?.includes("base64") && !src.startsWith("http")) setImage(`/api/v1/${src.replace("uploads/", "").replace(".jpg", "")}`);
        else if (!src) setImage("");
        else {
            setImage(src);
        }
    }, [
        src
    ]);
    return !image ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: `avatar drop-shadow-md placeholder ${className || ""} ${large ? "w-28 h-28" : "w-8 h-8"}`,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "bg-base-100 text-neutral rounded-full w-full h-full ring-2 ring-neutral-content select-none",
            children: name ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                className: "text-2xl capitalize",
                children: name.slice(0, 1)
            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                className: `bi-person ${large ? "text-5xl" : "text-xl"}`
            })
        })
    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: `avatar skeleton rounded-full drop-shadow-md ${className || ""} ${large ? "w-28 h-28" : "w-8 h-8"}`,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "rounded-full w-full h-full ring-2 ring-neutral-content",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                alt: "",
                src: image,
                height: 112,
                width: 112,
                priority: priority,
                draggable: false,
                onError: ()=>setImage(""),
                className: "aspect-square rounded-full"
            })
        })
    });
}


/***/ })

};
;