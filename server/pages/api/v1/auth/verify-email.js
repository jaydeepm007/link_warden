"use strict";
(() => {
var exports = {};
exports.id = 8510;
exports.ids = [8510];
exports.modules = {

/***/ 3524:
/***/ ((module) => {

module.exports = require("@prisma/client");

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

/***/ 4749:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ updateCustomerEmail)
/* harmony export */ });
/* harmony import */ var stripe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6090);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([stripe__WEBPACK_IMPORTED_MODULE_0__]);
stripe__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

async function updateCustomerEmail(stripeSecretKey, email, newEmail) {
    const stripe = new stripe__WEBPACK_IMPORTED_MODULE_0__["default"](stripeSecretKey, {
        apiVersion: "2022-11-15"
    });
    const listByEmail = await stripe.customers.list({
        email: email.toLowerCase(),
        expand: [
            "data.subscriptions"
        ]
    });
    const customer = listByEmail.data.find((customer, i)=>{
        const hasValidSubscription = customer.subscriptions?.data.some((subscription)=>{
            const NEXT_PUBLIC_TRIAL_PERIOD_DAYS = process.env.NEXT_PUBLIC_TRIAL_PERIOD_DAYS;
            const secondsInTwoWeeks = NEXT_PUBLIC_TRIAL_PERIOD_DAYS ? Number(NEXT_PUBLIC_TRIAL_PERIOD_DAYS) * 86400 : 1209600;
            const isNotCanceledOrHasTime = !(subscription.canceled_at && new Date() > new Date((subscription.canceled_at + secondsInTwoWeeks) * 1000));
            return subscription?.items?.data[0].plan && isNotCanceledOrHasTime;
        });
        return customer.email?.toLowerCase() === email.toLowerCase() && hasValidSubscription;
    });
    if (customer) await stripe.customers.update(customer?.id, {
        email: newEmail.toLowerCase()
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7856:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ verifyEmail)
/* harmony export */ });
/* harmony import */ var _lib_api_db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3009);
/* harmony import */ var _lib_api_updateCustomerEmail__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4749);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_lib_api_updateCustomerEmail__WEBPACK_IMPORTED_MODULE_1__]);
_lib_api_updateCustomerEmail__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


async function verifyEmail(req, res) {
    if (req.method === "POST") {
        if (false) {}
        const token = req.query.token;
        if (!token || typeof token !== "string") {
            return res.status(400).json({
                response: "Invalid token."
            });
        }
        // Check token in db
        const verifyToken = await _lib_api_db__WEBPACK_IMPORTED_MODULE_0__/* .prisma */ ._.verificationToken.findFirst({
            where: {
                token,
                expires: {
                    gt: new Date()
                }
            }
        });
        const oldEmail = verifyToken?.identifier;
        if (!oldEmail) {
            return res.status(400).json({
                response: "Invalid token."
            });
        }
        // Ensure email isn't in use
        const findNewEmail = await _lib_api_db__WEBPACK_IMPORTED_MODULE_0__/* .prisma */ ._.user.findFirst({
            where: {
                email: oldEmail
            },
            select: {
                unverifiedNewEmail: true
            }
        });
        const newEmail = findNewEmail?.unverifiedNewEmail;
        if (!newEmail) {
            return res.status(400).json({
                response: "No unverified emails found."
            });
        }
        const emailInUse = await _lib_api_db__WEBPACK_IMPORTED_MODULE_0__/* .prisma */ ._.user.findFirst({
            where: {
                email: newEmail
            },
            select: {
                email: true
            }
        });
        console.log(emailInUse);
        if (emailInUse) {
            return res.status(400).json({
                response: "Email is already in use."
            });
        }
        // Remove SSO provider
        await _lib_api_db__WEBPACK_IMPORTED_MODULE_0__/* .prisma */ ._.account.deleteMany({
            where: {
                user: {
                    email: oldEmail
                }
            }
        });
        // Update email in db
        await _lib_api_db__WEBPACK_IMPORTED_MODULE_0__/* .prisma */ ._.user.update({
            where: {
                email: oldEmail
            },
            data: {
                email: newEmail.toLowerCase().trim(),
                unverifiedNewEmail: null
            }
        });
        // Apply to Stripe
        const STRIPE_SECRET_KEY = process.env.STRIPE_SECRET_KEY;
        if (STRIPE_SECRET_KEY) await (0,_lib_api_updateCustomerEmail__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(STRIPE_SECRET_KEY, oldEmail, newEmail);
        // Clean up existing tokens
        await _lib_api_db__WEBPACK_IMPORTED_MODULE_0__/* .prisma */ ._.verificationToken.delete({
            where: {
                token
            }
        });
        await _lib_api_db__WEBPACK_IMPORTED_MODULE_0__/* .prisma */ ._.verificationToken.deleteMany({
            where: {
                identifier: oldEmail
            }
        });
        return res.status(200).json({
            response: token
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
var __webpack_exports__ = (__webpack_exec__(7856));
module.exports = __webpack_exports__;

})();