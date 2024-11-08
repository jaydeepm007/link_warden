"use strict";
(() => {
var exports = {};
exports.id = 5146;
exports.ids = [5146];
exports.modules = {

/***/ 3524:
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ 614:
/***/ ((module) => {

module.exports = require("next-auth/jwt");

/***/ }),

/***/ 6090:
/***/ ((module) => {

module.exports = import("stripe");;

/***/ }),

/***/ 3452:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ deleteToken)
/* harmony export */ });
/* harmony import */ var _lib_api_db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3009);

async function deleteToken(userId, tokenId) {
    if (!tokenId) return {
        response: "Please choose a valid token.",
        status: 401
    };
    const tokenExists = await _lib_api_db__WEBPACK_IMPORTED_MODULE_0__/* .prisma */ ._.accessToken.findFirst({
        where: {
            id: tokenId,
            userId
        }
    });
    const revokedToken = await _lib_api_db__WEBPACK_IMPORTED_MODULE_0__/* .prisma */ ._.accessToken.update({
        where: {
            id: tokenExists?.id
        },
        data: {
            revoked: true
        }
    });
    return {
        response: revokedToken,
        status: 200
    };
}


/***/ }),

/***/ 6797:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ token)
/* harmony export */ });
/* harmony import */ var _lib_api_verifyUser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8005);
/* harmony import */ var _lib_api_controllers_tokens_tokenId_deleteTokenById__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3452);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_lib_api_verifyUser__WEBPACK_IMPORTED_MODULE_0__]);
_lib_api_verifyUser__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


async function token(req, res) {
    const user = await (0,_lib_api_verifyUser__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)({
        req,
        res
    });
    if (!user) return;
    if (req.method === "DELETE") {
        if (false) {}
        const deleted = await (0,_lib_api_controllers_tokens_tokenId_deleteTokenById__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(user.id, Number(req.query.id));
        return res.status(deleted.status).json({
            response: deleted.response
        });
    }
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [5746,8005], () => (__webpack_exec__(6797)));
module.exports = __webpack_exports__;

})();