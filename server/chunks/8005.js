"use strict";
exports.id = 8005;
exports.ids = [8005];
exports.modules = {

/***/ 5192:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ verifyToken)
/* harmony export */ });
/* harmony import */ var next_auth_jwt__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(614);
/* harmony import */ var next_auth_jwt__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth_jwt__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _db__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3009);


async function verifyToken({ req }) {
    const token = await (0,next_auth_jwt__WEBPACK_IMPORTED_MODULE_0__.getToken)({
        req
    });
    const userId = token?.id;
    if (!userId) {
        return "You must be logged in.";
    }
    if (token.exp < Date.now() / 1000) {
        return "Your session has expired, please log in again.";
    }
    // check if token is revoked
    const revoked = await _db__WEBPACK_IMPORTED_MODULE_1__/* .prisma */ ._.accessToken.findFirst({
        where: {
            token: token.jti,
            revoked: true
        }
    });
    if (revoked) {
        return "Your session has expired, please log in again.";
    }
    return token;
}


/***/ }),

/***/ 8005:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ verifyUser)
/* harmony export */ });
/* harmony import */ var _db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3009);
/* harmony import */ var _verifySubscription__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5746);
/* harmony import */ var _verifyToken__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5192);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_verifySubscription__WEBPACK_IMPORTED_MODULE_1__]);
_verifySubscription__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



const STRIPE_SECRET_KEY = process.env.STRIPE_SECRET_KEY;
async function verifyUser({ req, res }) {
    const token = await (0,_verifyToken__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)({
        req
    });
    if (typeof token === "string") {
        res.status(401).json({
            response: token
        });
        return null;
    }
    const userId = token?.id;
    const user = await _db__WEBPACK_IMPORTED_MODULE_0__/* .prisma */ ._.user.findUnique({
        where: {
            id: userId
        },
        include: {
            subscriptions: true
        }
    });
    if (!user) {
        res.status(404).json({
            response: "User not found."
        });
        return null;
    }
    if (!user.username) {
        res.status(401).json({
            response: "Username not found."
        });
        return null;
    }
    if (STRIPE_SECRET_KEY) {
        const subscribedUser = await (0,_verifySubscription__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(user);
        if (!subscribedUser) {
            res.status(401).json({
                response: "You are not a subscriber, feel free to reach out to us at support@linkwarden.app if you think this is an issue."
            });
            return null;
        }
    }
    return user;
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;