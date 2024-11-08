"use strict";
(() => {
var exports = {};
exports.id = 6112;
exports.ids = [6112];
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

/***/ 6113:
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ 5471:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ getToken)
/* harmony export */ });
/* harmony import */ var _lib_api_db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3009);

async function getToken(userId) {
    const getTokens = await _lib_api_db__WEBPACK_IMPORTED_MODULE_0__/* .prisma */ ._.accessToken.findMany({
        where: {
            userId,
            revoked: false
        },
        select: {
            id: true,
            name: true,
            isSession: true,
            expires: true,
            createdAt: true
        }
    });
    return {
        response: getTokens,
        status: 200
    };
}


/***/ }),

/***/ 5154:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ postToken)
/* harmony export */ });
/* harmony import */ var _lib_api_db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3009);
/* harmony import */ var _types_global__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6211);
/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6113);
/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(crypto__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_auth_jwt__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(614);
/* harmony import */ var next_auth_jwt__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_auth_jwt__WEBPACK_IMPORTED_MODULE_3__);




async function postToken(body, userId) {
    console.log(body);
    const checkHasEmptyFields = !body.name || body.expires === undefined;
    if (checkHasEmptyFields) return {
        response: "Please fill out all the fields.",
        status: 400
    };
    const checkIfTokenExists = await _lib_api_db__WEBPACK_IMPORTED_MODULE_0__/* .prisma */ ._.accessToken.findFirst({
        where: {
            name: body.name,
            revoked: false,
            userId
        }
    });
    if (checkIfTokenExists) {
        return {
            response: "Token with that name already exists.",
            status: 400
        };
    }
    const now = Date.now();
    let expiryDate = new Date();
    const oneDayInSeconds = 86400;
    let expiryDateSecond = 7 * oneDayInSeconds;
    if (body.expires === _types_global__WEBPACK_IMPORTED_MODULE_1__/* .TokenExpiry */ .VS.oneMonth) {
        expiryDate.setDate(expiryDate.getDate() + 30);
        expiryDateSecond = 30 * oneDayInSeconds;
    } else if (body.expires === _types_global__WEBPACK_IMPORTED_MODULE_1__/* .TokenExpiry */ .VS.twoMonths) {
        expiryDate.setDate(expiryDate.getDate() + 60);
        expiryDateSecond = 60 * oneDayInSeconds;
    } else if (body.expires === _types_global__WEBPACK_IMPORTED_MODULE_1__/* .TokenExpiry */ .VS.threeMonths) {
        expiryDate.setDate(expiryDate.getDate() + 90);
        expiryDateSecond = 90 * oneDayInSeconds;
    } else if (body.expires === _types_global__WEBPACK_IMPORTED_MODULE_1__/* .TokenExpiry */ .VS.never) {
        expiryDate.setDate(expiryDate.getDate() + 73000); // 200 years (not really never)
        expiryDateSecond = 73050 * oneDayInSeconds;
    } else {
        expiryDate.setDate(expiryDate.getDate() + 7);
        expiryDateSecond = 7 * oneDayInSeconds;
    }
    const token = await (0,next_auth_jwt__WEBPACK_IMPORTED_MODULE_3__.encode)({
        token: {
            id: userId,
            iat: now / 1000,
            exp: expiryDate / 1000,
            jti: crypto__WEBPACK_IMPORTED_MODULE_2___default().randomUUID()
        },
        maxAge: expiryDateSecond || 604800,
        secret: process.env.NEXTAUTH_SECRET
    });
    const tokenBody = await (0,next_auth_jwt__WEBPACK_IMPORTED_MODULE_3__.decode)({
        token,
        secret: process.env.NEXTAUTH_SECRET
    });
    const createToken = await _lib_api_db__WEBPACK_IMPORTED_MODULE_0__/* .prisma */ ._.accessToken.create({
        data: {
            name: body.name,
            userId,
            token: tokenBody?.jti,
            expires: expiryDate
        }
    });
    return {
        response: {
            secretKey: token,
            token: createToken
        },
        status: 200
    };
}


/***/ }),

/***/ 6088:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ tokens)
/* harmony export */ });
/* harmony import */ var _lib_api_verifyUser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8005);
/* harmony import */ var _lib_api_controllers_tokens_postToken__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5154);
/* harmony import */ var _lib_api_controllers_tokens_getTokens__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5471);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_lib_api_verifyUser__WEBPACK_IMPORTED_MODULE_0__]);
_lib_api_verifyUser__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



async function tokens(req, res) {
    const user = await (0,_lib_api_verifyUser__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)({
        req,
        res
    });
    if (!user) return;
    if (req.method === "POST") {
        if (false) {}
        const token = await (0,_lib_api_controllers_tokens_postToken__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(JSON.parse(req.body), user.id);
        return res.status(token.status).json({
            response: token.response
        });
    } else if (req.method === "GET") {
        const token = await (0,_lib_api_controllers_tokens_getTokens__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(user.id);
        return res.status(token.status).json({
            response: token.response
        });
    }
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [5746,8005,6211], () => (__webpack_exec__(6088)));
module.exports = __webpack_exports__;

})();