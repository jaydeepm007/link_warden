"use strict";
exports.id = 2972;
exports.ids = [2972];
exports.modules = {

/***/ 2144:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ ClickAwayHandler)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


function getZIndex(element) {
    let zIndex = 0;
    while(element){
        const zIndexStyle = window.getComputedStyle(element).getPropertyValue("z-index");
        const numericZIndex = Number(zIndexStyle);
        if (zIndexStyle !== "auto" && !isNaN(numericZIndex)) {
            zIndex = numericZIndex;
            break;
        }
        element = element.parentElement;
    }
    return zIndex;
}
function useOutsideAlerter(ref, onClickOutside) {
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        function handleClickOutside(event) {
            const clickedElement = event.target;
            if (ref.current && !ref.current.contains(clickedElement)) {
                const refZIndex = getZIndex(ref.current);
                const clickedZIndex = getZIndex(clickedElement);
                if (clickedZIndex <= refZIndex) {
                    onClickOutside(event);
                }
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return ()=>{
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [
        ref,
        onClickOutside
    ]);
}
function ClickAwayHandler({ children, onClickOutside, className, style, onMount }) {
    const wrapperRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    useOutsideAlerter(wrapperRef, onClickOutside);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (wrapperRef.current && onMount) {
            const rect = wrapperRef.current.getBoundingClientRect();
            onMount(rect); // Pass the bounding rectangle to the parent
        }
    }, []);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        ref: wrapperRef,
        className: className,
        style: style,
        children: children
    });
}


/***/ })

};
;