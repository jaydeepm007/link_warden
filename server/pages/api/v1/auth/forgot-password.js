"use strict";
(() => {
var exports = {};
exports.id = 9545;
exports.ids = [9545];
exports.modules = {

/***/ 3524:
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ 2097:
/***/ ((module) => {

module.exports = require("handlebars");

/***/ }),

/***/ 6113:
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ 7147:
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ 1017:
/***/ ((module) => {

module.exports = require("path");

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

/***/ 4839:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ transporter)
});

;// CONCATENATED MODULE: external "nodemailer"
const external_nodemailer_namespaceObject = require("nodemailer");
;// CONCATENATED MODULE: ./lib/api/transporter.ts

/* harmony default export */ const transporter = ((0,external_nodemailer_namespaceObject.createTransport)({
    url: process.env.EMAIL_SERVER,
    auth: {
        user: process.env.EMAIL_FROM
    }
}));


/***/ }),

/***/ 693:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ forgotPassword)
});

// EXTERNAL MODULE: ./lib/api/db.ts
var db = __webpack_require__(3009);
// EXTERNAL MODULE: external "crypto"
var external_crypto_ = __webpack_require__(6113);
// EXTERNAL MODULE: ./lib/api/transporter.ts + 1 modules
var transporter = __webpack_require__(4839);
// EXTERNAL MODULE: external "handlebars"
var external_handlebars_ = __webpack_require__(2097);
var external_handlebars_default = /*#__PURE__*/__webpack_require__.n(external_handlebars_);
// EXTERNAL MODULE: external "fs"
var external_fs_ = __webpack_require__(7147);
// EXTERNAL MODULE: external "path"
var external_path_ = __webpack_require__(1017);
var external_path_default = /*#__PURE__*/__webpack_require__.n(external_path_);
;// CONCATENATED MODULE: ./lib/api/sendPasswordResetRequest.ts






async function sendPasswordResetRequest(email, user) {
    const token = (0,external_crypto_.randomBytes)(32).toString("hex");
    await db/* prisma */._.passwordResetToken.create({
        data: {
            identifier: email?.toLowerCase(),
            token,
            expires: new Date(Date.now() + 24 * 3600 * 1000)
        }
    });
    const emailsDir = external_path_default().resolve(process.cwd(), "templates");
    const templateFile = (0,external_fs_.readFileSync)(external_path_default().join(emailsDir, "passwordReset.html"), "utf8");
    const emailTemplate = external_handlebars_default().compile(templateFile);
    transporter/* default */.Z.sendMail({
        from: {
            name: "Linkwarden",
            address: process.env.EMAIL_FROM
        },
        to: email,
        subject: "Linkwarden: Reset password instructions",
        html: emailTemplate({
            user,
            baseUrl: process.env.BASE_URL,
            url: `${process.env.BASE_URL}/auth/reset-password?token=${token}`
        })
    });
}

;// CONCATENATED MODULE: ./pages/api/v1/auth/forgot-password.ts


async function forgotPassword(req, res) {
    if (req.method === "POST") {
        if (false) {}
        const email = req.body.email;
        if (!email) {
            return res.status(400).json({
                response: "Invalid email."
            });
        }
        const recentPasswordRequestsCount = await db/* prisma */._.passwordResetToken.count({
            where: {
                identifier: email,
                createdAt: {
                    gt: new Date(new Date().getTime() - 1000 * 60 * 5)
                }
            }
        });
        // Rate limit password reset requests
        if (recentPasswordRequestsCount >= 3) {
            return res.status(400).json({
                response: "Too many requests. Please try again later."
            });
        }
        const user = await db/* prisma */._.user.findFirst({
            where: {
                email
            }
        });
        if (!user || !user.email) {
            return res.status(400).json({
                response: "Invalid email."
            });
        }
        sendPasswordResetRequest(user.email, user.name);
        return res.status(200).json({
            response: "Password reset email sent."
        });
    }
}


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(693));
module.exports = __webpack_exports__;

})();