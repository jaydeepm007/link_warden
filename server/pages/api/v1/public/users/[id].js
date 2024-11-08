"use strict";
(() => {
var exports = {};
exports.id = 196;
exports.ids = [196];
exports.modules = {

/***/ 3524:
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ 614:
/***/ ((module) => {

module.exports = require("next-auth/jwt");

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

/***/ 315:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ users)
});

// EXTERNAL MODULE: ./lib/api/db.ts
var db = __webpack_require__(3009);
;// CONCATENATED MODULE: ./lib/api/controllers/public/users/getPublicUser.ts

async function getPublicUser(targetId, isId, requestingId) {
    const user = await db/* prisma */._.user.findUnique({
        where: isId ? {
            id: Number(targetId)
        } : {
            username: targetId
        },
        include: {
            whitelistedUsers: {
                select: {
                    username: true
                }
            }
        }
    });
    if (!user) return {
        response: "User not found or profile is private.",
        status: 404
    };
    const whitelistedUsernames = user.whitelistedUsers?.map((usernames)=>usernames.username);
    const isInAPublicCollection = await db/* prisma */._.collection.findFirst({
        where: {
            ["OR"]: [
                {
                    ownerId: user.id
                },
                {
                    members: {
                        some: {
                            userId: user.id
                        }
                    }
                }
            ],
            isPublic: true
        }
    });
    if (user?.isPrivate && !isInAPublicCollection) {
        if (requestingId) {
            const requestingUser = await db/* prisma */._.user.findUnique({
                where: {
                    id: requestingId
                }
            });
            if (requestingUser?.id !== requestingId && (!requestingUser?.username || !whitelistedUsernames.includes(requestingUser.username?.toLowerCase()))) {
                return {
                    response: "User not found or profile is private.",
                    status: 404
                };
            }
        } else return {
            response: "User not found or profile is private.",
            status: 404
        };
    }
    const { password, ...lessSensitiveInfo } = user;
    const data = {
        id: lessSensitiveInfo.id,
        name: lessSensitiveInfo.name,
        username: lessSensitiveInfo.username,
        image: lessSensitiveInfo.image,
        archiveAsScreenshot: lessSensitiveInfo.archiveAsScreenshot,
        archiveAsMonolith: lessSensitiveInfo.archiveAsMonolith,
        archiveAsPDF: lessSensitiveInfo.archiveAsPDF
    };
    return {
        response: data,
        status: 200
    };
}

// EXTERNAL MODULE: ./lib/api/verifyToken.ts
var verifyToken = __webpack_require__(5192);
;// CONCATENATED MODULE: ./pages/api/v1/public/users/[id].ts


async function users(req, res) {
    const token = await (0,verifyToken/* default */.Z)({
        req
    });
    const requestingId = typeof token === "string" ? undefined : token?.id;
    const lookupId = req.query.id;
    // Check if "lookupId" is the user "id" or their "username"
    const isId = lookupId.split("").every((e)=>Number.isInteger(parseInt(e)));
    if (req.method === "GET") {
        const users = await getPublicUser(lookupId, isId, requestingId);
        return res.status(users.status).json({
            response: users.response
        });
    }
}


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(315));
module.exports = __webpack_exports__;

})();