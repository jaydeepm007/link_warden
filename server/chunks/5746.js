"use strict";
exports.id = 5746;
exports.ids = [5746];
exports.modules = {

/***/ 6445:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ checkSubscriptionByEmail)
/* harmony export */ });
/* harmony import */ var stripe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6090);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([stripe__WEBPACK_IMPORTED_MODULE_0__]);
stripe__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const MONTHLY_PRICE_ID = process.env.MONTHLY_PRICE_ID;
const YEARLY_PRICE_ID = process.env.YEARLY_PRICE_ID;
const STRIPE_SECRET_KEY = process.env.STRIPE_SECRET_KEY;
async function checkSubscriptionByEmail(email) {
    let active, stripeSubscriptionId, currentPeriodStart, currentPeriodEnd;
    if (!STRIPE_SECRET_KEY) return {
        active,
        stripeSubscriptionId,
        currentPeriodStart,
        currentPeriodEnd
    };
    const stripe = new stripe__WEBPACK_IMPORTED_MODULE_0__["default"](STRIPE_SECRET_KEY, {
        apiVersion: "2022-11-15"
    });
    console.log("Request made to Stripe by:", email);
    const listByEmail = await stripe.customers.list({
        email: email.toLowerCase(),
        expand: [
            "data.subscriptions"
        ]
    });
    listByEmail.data.some((customer)=>{
        customer.subscriptions?.data.some((subscription)=>{
            subscription.current_period_end;
            active = subscription.items.data.some((e)=>e.price.id === MONTHLY_PRICE_ID && e.price.active === true || e.price.id === YEARLY_PRICE_ID && e.price.active === true) || false;
            stripeSubscriptionId = subscription.id;
            currentPeriodStart = subscription.current_period_start * 1000;
            currentPeriodEnd = subscription.current_period_end * 1000;
        });
    });
    return {
        active: active || false,
        stripeSubscriptionId,
        currentPeriodStart,
        currentPeriodEnd
    };
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

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

/***/ 5746:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ verifySubscription)
/* harmony export */ });
/* harmony import */ var _db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3009);
/* harmony import */ var _checkSubscriptionByEmail__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6445);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_checkSubscriptionByEmail__WEBPACK_IMPORTED_MODULE_1__]);
_checkSubscriptionByEmail__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


async function verifySubscription(user) {
    if (!user) {
        return null;
    }
    const subscription = user.subscriptions;
    const currentDate = new Date();
    if (!subscription?.active || currentDate > subscription.currentPeriodEnd) {
        const { active, stripeSubscriptionId, currentPeriodStart, currentPeriodEnd } = await (0,_checkSubscriptionByEmail__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(user.email);
        if (active && stripeSubscriptionId && currentPeriodStart && currentPeriodEnd) {
            await _db__WEBPACK_IMPORTED_MODULE_0__/* .prisma */ ._.subscription.upsert({
                where: {
                    userId: user.id
                },
                create: {
                    active,
                    stripeSubscriptionId,
                    currentPeriodStart: new Date(currentPeriodStart),
                    currentPeriodEnd: new Date(currentPeriodEnd),
                    userId: user.id
                },
                update: {
                    active,
                    stripeSubscriptionId,
                    currentPeriodStart: new Date(currentPeriodStart),
                    currentPeriodEnd: new Date(currentPeriodEnd)
                }
            }).catch((err)=>console.log(err));
        } else if (!active) {
            const subscription = await _db__WEBPACK_IMPORTED_MODULE_0__/* .prisma */ ._.subscription.findFirst({
                where: {
                    userId: user.id
                }
            });
            if (subscription) await _db__WEBPACK_IMPORTED_MODULE_0__/* .prisma */ ._.subscription.delete({
                where: {
                    userId: user.id
                }
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