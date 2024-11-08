"use strict";
(() => {
var exports = {};
exports.id = 7406;
exports.ids = [7406];
exports.modules = {

/***/ 3524:
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ 7096:
/***/ ((module) => {

module.exports = require("bcrypt");

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

/***/ 6357:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ createSession)
/* harmony export */ });
/* harmony import */ var _lib_api_db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3009);
/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6113);
/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(crypto__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_auth_jwt__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(614);
/* harmony import */ var next_auth_jwt__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_jwt__WEBPACK_IMPORTED_MODULE_2__);



async function createSession(userId, sessionName) {
    const now = Date.now();
    const expiryDate = new Date();
    const oneDayInSeconds = 86400;
    expiryDate.setDate(expiryDate.getDate() + 73000); // 200 years (not really never)
    const expiryDateSecond = 73050 * oneDayInSeconds;
    const token = await (0,next_auth_jwt__WEBPACK_IMPORTED_MODULE_2__.encode)({
        token: {
            id: userId,
            iat: now / 1000,
            exp: expiryDate / 1000,
            jti: crypto__WEBPACK_IMPORTED_MODULE_1___default().randomUUID()
        },
        maxAge: expiryDateSecond || 604800,
        secret: process.env.NEXTAUTH_SECRET
    });
    const tokenBody = await (0,next_auth_jwt__WEBPACK_IMPORTED_MODULE_2__.decode)({
        token,
        secret: process.env.NEXTAUTH_SECRET
    });
    const createToken = await _lib_api_db__WEBPACK_IMPORTED_MODULE_0__/* .prisma */ ._.accessToken.create({
        data: {
            name: sessionName || "Unknown Device",
            userId,
            token: tokenBody?.jti,
            isSession: true,
            expires: expiryDate
        }
    });
    return {
        response: {
            token
        },
        status: 200
    };
}


/***/ }),

/***/ 8:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ verifyByCredentials)
/* harmony export */ });
/* harmony import */ var _db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3009);
/* harmony import */ var _verifySubscription__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5746);
/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7096);
/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bcrypt__WEBPACK_IMPORTED_MODULE_2__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_verifySubscription__WEBPACK_IMPORTED_MODULE_1__]);
_verifySubscription__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



const STRIPE_SECRET_KEY = process.env.STRIPE_SECRET_KEY;
const emailEnabled = process.env.EMAIL_FROM && process.env.EMAIL_SERVER ? true : false;
async function verifyByCredentials({ username, password }) {
    const user = await _db__WEBPACK_IMPORTED_MODULE_0__/* .prisma */ ._.user.findFirst({
        where: emailEnabled ? {
            OR: [
                {
                    username: username.toLowerCase()
                },
                {
                    email: username?.toLowerCase()
                }
            ]
        } : {
            username: username.toLowerCase()
        },
        include: {
            subscriptions: true
        }
    });
    if (!user) {
        return null;
    }
    let passwordMatches = false;
    if (user?.password) {
        passwordMatches = bcrypt__WEBPACK_IMPORTED_MODULE_2___default().compareSync(password, user.password);
        if (!passwordMatches) {
            return null;
        } else {
            if (STRIPE_SECRET_KEY) {
                const subscribedUser = await (0,_verifySubscription__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(user);
                if (!subscribedUser) {
                    return null;
                }
            }
            return user;
        }
    } else {
        return null;
    }
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8361:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ session)
/* harmony export */ });
/* harmony import */ var _lib_api_verifyByCredentials__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8);
/* harmony import */ var _lib_api_controllers_session_createSession__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6357);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_lib_api_verifyByCredentials__WEBPACK_IMPORTED_MODULE_0__]);
_lib_api_verifyByCredentials__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


async function session(req, res) {
    const { username, password, sessionName } = req.body;
    const user = await (0,_lib_api_verifyByCredentials__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)({
        username,
        password
    });
    if (!user) return res.status(400).json({
        response: "Invalid credentials. You might need to reset your password if you're sure you already signed up with the current username/email."
    });
    if (req.method === "POST") {
        const token = await (0,_lib_api_controllers_session_createSession__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(user.id, sessionName);
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
var __webpack_exports__ = __webpack_require__.X(0, [5746], () => (__webpack_exec__(8361)));
module.exports = __webpack_exports__;

})();