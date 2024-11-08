"use strict";
(() => {
var exports = {};
exports.id = 1729;
exports.ids = [1729];
exports.modules = {

/***/ 3524:
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ 7096:
/***/ ((module) => {

module.exports = require("bcrypt");

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

/***/ 3310:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ resetPassword)
/* harmony export */ });
/* harmony import */ var _lib_api_db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3009);
/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7096);
/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bcrypt__WEBPACK_IMPORTED_MODULE_1__);


async function resetPassword(req, res) {
    if (req.method === "POST") {
        if (false) {}
        const token = req.body.token;
        const password = req.body.password;
        if (!password || password.length < 8) {
            return res.status(400).json({
                response: "Password must be at least 8 characters."
            });
        }
        if (!token || typeof token !== "string") {
            return res.status(400).json({
                response: "Invalid token."
            });
        }
        // Hashed password
        const saltRounds = 10;
        const hashedPassword = await bcrypt__WEBPACK_IMPORTED_MODULE_1___default().hash(password, saltRounds);
        // Check token in db
        const verifyToken = await _lib_api_db__WEBPACK_IMPORTED_MODULE_0__/* .prisma */ ._.passwordResetToken.findFirst({
            where: {
                token,
                expires: {
                    gt: new Date()
                }
            }
        });
        if (!verifyToken) {
            return res.status(400).json({
                response: "Invalid token."
            });
        }
        const email = verifyToken.identifier;
        // Update password
        await _lib_api_db__WEBPACK_IMPORTED_MODULE_0__/* .prisma */ ._.user.update({
            where: {
                email
            },
            data: {
                password: hashedPassword
            }
        });
        await _lib_api_db__WEBPACK_IMPORTED_MODULE_0__/* .prisma */ ._.passwordResetToken.update({
            where: {
                token
            },
            data: {
                expires: new Date()
            }
        });
        // Delete tokens older than 5 minutes
        await _lib_api_db__WEBPACK_IMPORTED_MODULE_0__/* .prisma */ ._.passwordResetToken.deleteMany({
            where: {
                identifier: email,
                createdAt: {
                    lt: new Date(new Date().getTime() - 1000 * 60 * 5)
                }
            }
        });
        return res.status(200).json({
            response: "Password has been reset successfully."
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
var __webpack_exports__ = (__webpack_exec__(3310));
module.exports = __webpack_exports__;

})();