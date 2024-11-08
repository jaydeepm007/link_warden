"use strict";
exports.id = 4123;
exports.ids = [4123];
exports.modules = {

/***/ 4123:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_i18next_serverSideTranslations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5460);
/* harmony import */ var next_i18next_serverSideTranslations__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_i18next_serverSideTranslations__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_i18next_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3479);
/* harmony import */ var next_i18next_config__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_i18next_config__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_auth_jwt__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(614);
/* harmony import */ var next_auth_jwt__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_jwt__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _api_db__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5952);




const getServerSideProps = async (ctx)=>{
    const acceptLanguageHeader = ctx.req.headers["accept-language"];
    const availableLanguages = next_i18next_config__WEBPACK_IMPORTED_MODULE_1__.i18n.locales;
    const token = await (0,next_auth_jwt__WEBPACK_IMPORTED_MODULE_2__.getToken)({
        req: ctx.req
    });
    if (token) {
        const user = await _api_db__WEBPACK_IMPORTED_MODULE_3__/* .prisma */ ._.user.findUnique({
            where: {
                id: token.id
            }
        });
        if (user) {
            return {
                props: {
                    ...await (0,next_i18next_serverSideTranslations__WEBPACK_IMPORTED_MODULE_0__.serverSideTranslations)(user.locale ?? "en", [
                        "common"
                    ])
                }
            };
        }
    }
    const acceptedLanguages = acceptLanguageHeader?.split(",").map((lang)=>lang.split(";")[0]);
    let bestMatch = acceptedLanguages?.find((lang)=>availableLanguages.includes(lang));
    if (!bestMatch) {
        acceptedLanguages?.some((acceptedLang)=>{
            const partialMatch = availableLanguages.find((lang)=>lang.startsWith(acceptedLang));
            if (partialMatch) {
                bestMatch = partialMatch;
                return true;
            }
            return false;
        });
    }
    return {
        props: {
            ...await (0,next_i18next_serverSideTranslations__WEBPACK_IMPORTED_MODULE_0__.serverSideTranslations)(bestMatch ?? "en", [
                "common"
            ])
        }
    };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getServerSideProps);


/***/ })

};
;