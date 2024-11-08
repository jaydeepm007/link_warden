"use strict";
(() => {
var exports = {};
exports.id = 4238;
exports.ids = [4238];
exports.modules = {

/***/ 3524:
/***/ ((module) => {

module.exports = require("@prisma/client");

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

/***/ 8992:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _id_link)
});

// EXTERNAL MODULE: ./lib/api/db.ts
var db = __webpack_require__(3009);
;// CONCATENATED MODULE: ./lib/api/controllers/public/links/linkId/getLinkById.ts

async function getLinkById(linkId) {
    if (!linkId) return {
        response: "Please choose a valid link.",
        status: 401
    };
    const link = await db/* prisma */._.link.findFirst({
        where: {
            id: linkId,
            collection: {
                isPublic: true
            }
        },
        include: {
            tags: true,
            collection: true
        }
    });
    return {
        response: link,
        status: 200
    };
}

;// CONCATENATED MODULE: ./pages/api/v1/public/links/[id].ts

async function _id_link(req, res) {
    if (!req?.query?.id) {
        return res.status(401).json({
            response: "Please choose a valid link."
        });
    }
    if (req.method === "GET") {
        const link = await getLinkById(Number(req?.query?.id));
        return res.status(link.status).json({
            response: link.response
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
var __webpack_exports__ = (__webpack_exec__(8992));
module.exports = __webpack_exports__;

})();