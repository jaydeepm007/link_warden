"use strict";
(() => {
var exports = {};
exports.id = 5702;
exports.ids = [5702];
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

/***/ 3009:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   _: () => (/* binding */ prisma)
/* harmony export */ });
/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3524);
/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);

const globalForPrisma = global;
const prisma = globalForPrisma.prisma || new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient({
    log: [
        "query"
    ]
});
if (false) {} // For benchmarking | uncomment when needed
 // if (process.env.NODE_ENV !== "production")
 //   prisma.$on("query" as any, (e: any) => {
 //     console.log("Query: " + e.query);
 //     console.log("Params: " + e.params);
 //     console.log("\x1b[31m", `Duration: ${e.duration}ms`, "\x1b[0m");
 //   });


/***/ }),

/***/ 452:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ paymentCheckout)
/* harmony export */ });
/* harmony import */ var stripe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6090);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([stripe__WEBPACK_IMPORTED_MODULE_0__]);
stripe__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

async function paymentCheckout(stripeSecretKey, email, priceId) {
    const stripe = new stripe__WEBPACK_IMPORTED_MODULE_0__["default"](stripeSecretKey, {
        apiVersion: "2022-11-15"
    });
    const listByEmail = await stripe.customers.list({
        email: email.toLowerCase(),
        expand: [
            "data.subscriptions"
        ]
    });
    const isExistingCustomer = listByEmail?.data[0]?.id || undefined;
    const NEXT_PUBLIC_TRIAL_PERIOD_DAYS = process.env.NEXT_PUBLIC_TRIAL_PERIOD_DAYS;
    const session = await stripe.checkout.sessions.create({
        customer: isExistingCustomer ? isExistingCustomer : undefined,
        line_items: [
            {
                price: priceId,
                quantity: 1
            }
        ],
        mode: "subscription",
        customer_email: isExistingCustomer ? undefined : email.toLowerCase(),
        success_url: `${process.env.BASE_URL}?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${process.env.BASE_URL}/login`,
        automatic_tax: {
            enabled: true
        },
        subscription_data: {
            trial_period_days: NEXT_PUBLIC_TRIAL_PERIOD_DAYS ? Number(NEXT_PUBLIC_TRIAL_PERIOD_DAYS) : 14
        }
    });
    return {
        response: session.url,
        status: 200
    };
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8870:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ users)
/* harmony export */ });
/* harmony import */ var _lib_api_paymentCheckout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(452);
/* harmony import */ var _types_global__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6211);
/* harmony import */ var next_auth_jwt__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(614);
/* harmony import */ var next_auth_jwt__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_jwt__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _lib_api_db__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3009);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_lib_api_paymentCheckout__WEBPACK_IMPORTED_MODULE_0__]);
_lib_api_paymentCheckout__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




async function users(req, res) {
    const STRIPE_SECRET_KEY = process.env.STRIPE_SECRET_KEY;
    const MONTHLY_PRICE_ID = process.env.MONTHLY_PRICE_ID;
    const YEARLY_PRICE_ID = process.env.YEARLY_PRICE_ID;
    const token = await (0,next_auth_jwt__WEBPACK_IMPORTED_MODULE_2__.getToken)({
        req
    });
    if (!STRIPE_SECRET_KEY || !MONTHLY_PRICE_ID || !YEARLY_PRICE_ID) return res.status(400).json({
        response: "Payment is disabled."
    });
    console.log(token);
    if (!token?.id) return res.status(404).json({
        response: "Token invalid."
    });
    const email = (await _lib_api_db__WEBPACK_IMPORTED_MODULE_3__/* .prisma */ ._.user.findUnique({
        where: {
            id: token.id
        }
    }))?.email;
    if (!email) return res.status(404).json({
        response: "User not found."
    });
    let PRICE_ID = MONTHLY_PRICE_ID;
    if (Number(req.query.plan) === _types_global__WEBPACK_IMPORTED_MODULE_1__/* .Plan */ .fU.monthly) PRICE_ID = MONTHLY_PRICE_ID;
    else if (Number(req.query.plan) === _types_global__WEBPACK_IMPORTED_MODULE_1__/* .Plan */ .fU.yearly) PRICE_ID = YEARLY_PRICE_ID;
    if (req.method === "GET") {
        const users = await (0,_lib_api_paymentCheckout__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(STRIPE_SECRET_KEY, email, PRICE_ID);
        return res.status(users.status).json({
            response: users.response
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
var __webpack_exports__ = __webpack_require__.X(0, [6211], () => (__webpack_exec__(8870)));
module.exports = __webpack_exports__;

})();