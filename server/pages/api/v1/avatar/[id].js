"use strict";
(() => {
var exports = {};
exports.id = 7767;
exports.ids = [7767];
exports.modules = {

/***/ 1841:
/***/ ((module) => {

module.exports = require("@aws-sdk/client-s3");

/***/ }),

/***/ 3524:
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ 614:
/***/ ((module) => {

module.exports = require("next-auth/jwt");

/***/ }),

/***/ 7147:
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ 1017:
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ 3837:
/***/ ((module) => {

module.exports = require("util");

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

/***/ 3473:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _aws_sdk_client_s3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1841);
/* harmony import */ var _aws_sdk_client_s3__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_aws_sdk_client_s3__WEBPACK_IMPORTED_MODULE_0__);

const s3Client = process.env.SPACES_ENDPOINT && process.env.SPACES_REGION && process.env.SPACES_KEY && process.env.SPACES_SECRET ? new _aws_sdk_client_s3__WEBPACK_IMPORTED_MODULE_0__.S3({
    forcePathStyle: !!process.env.SPACES_FORCE_PATH_STYLE,
    endpoint: process.env.SPACES_ENDPOINT,
    region: process.env.SPACES_REGION,
    credentials: {
        accessKeyId: process.env.SPACES_KEY,
        secretAccessKey: process.env.SPACES_SECRET
    }
}) : undefined;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (s3Client);


/***/ }),

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

/***/ 5355:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Index)
/* harmony export */ });
/* harmony import */ var _lib_api_db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3009);
/* harmony import */ var _lib_api_storage_readFile__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2897);
/* harmony import */ var _lib_api_verifyToken__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5192);



async function Index(req, res) {
    const queryId = Number(req.query.id);
    if (!queryId) return res.setHeader("Content-Type", "text/plain").status(401).send("Invalid parameters.");
    const token = await (0,_lib_api_verifyToken__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)({
        req
    });
    const userId = typeof token === "string" ? undefined : token?.id;
    if (req.method === "GET") {
        const targetUser = await _lib_api_db__WEBPACK_IMPORTED_MODULE_0__/* .prisma */ ._.user.findUnique({
            where: {
                id: queryId
            },
            include: {
                whitelistedUsers: true
            }
        });
        if (!targetUser) {
            return res.setHeader("Content-Type", "text/plain").status(400).send("File inaccessible.");
        }
        const isInAPublicCollection = await _lib_api_db__WEBPACK_IMPORTED_MODULE_0__/* .prisma */ ._.collection.findFirst({
            where: {
                ["OR"]: [
                    {
                        ownerId: targetUser.id
                    },
                    {
                        members: {
                            some: {
                                userId: targetUser.id
                            }
                        }
                    }
                ],
                isPublic: true
            }
        });
        if (targetUser?.isPrivate && !isInAPublicCollection) {
            if (!userId) {
                return res.setHeader("Content-Type", "text/plain").status(400).send("File inaccessible.");
            }
            const user = await _lib_api_db__WEBPACK_IMPORTED_MODULE_0__/* .prisma */ ._.user.findUnique({
                where: {
                    id: userId
                },
                include: {
                    subscriptions: true
                }
            });
            const whitelistedUsernames = targetUser?.whitelistedUsers.map((whitelistedUsername)=>whitelistedUsername.username);
            if (!user?.username) {
                return res.setHeader("Content-Type", "text/plain").status(400).send("File inaccessible.");
            }
            if (user.username && !whitelistedUsernames?.includes(user.username) && targetUser.id !== user.id) {
                return res.setHeader("Content-Type", "text/plain").status(400).send("File inaccessible.");
            }
        }
        const { file, contentType, status } = await (0,_lib_api_storage_readFile__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(`uploads/avatar/${queryId}.jpg`);
        return res.setHeader("Content-Type", contentType).status(status).send(file);
    }
}


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [2897], () => (__webpack_exec__(5355)));
module.exports = __webpack_exports__;

})();