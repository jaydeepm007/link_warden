"use strict";
(() => {
var exports = {};
exports.id = 1948;
exports.ids = [1948];
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

/***/ 7515:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ collections)
});

// EXTERNAL MODULE: ./lib/api/db.ts
var db = __webpack_require__(3009);
// EXTERNAL MODULE: ./types/global.ts
var global = __webpack_require__(6211);
;// CONCATENATED MODULE: ./lib/api/controllers/public/links/getPublicLinksUnderCollection.ts


async function getLink(query) {
    const POSTGRES_IS_ENABLED = process.env.DATABASE_URL?.startsWith("postgresql");
    let order;
    if (query.sort === global/* Sort */.PE.DateNewestFirst) order = {
        id: "desc"
    };
    else if (query.sort === global/* Sort */.PE.DateOldestFirst) order = {
        id: "asc"
    };
    else if (query.sort === global/* Sort */.PE.NameAZ) order = {
        name: "asc"
    };
    else if (query.sort === global/* Sort */.PE.NameZA) order = {
        name: "desc"
    };
    else if (query.sort === global/* Sort */.PE.DescriptionAZ) order = {
        description: "asc"
    };
    else if (query.sort === global/* Sort */.PE.DescriptionZA) order = {
        description: "desc"
    };
    const searchConditions = [];
    if (query.searchQueryString) {
        if (query.searchByName) {
            searchConditions.push({
                name: {
                    contains: query.searchQueryString,
                    mode: POSTGRES_IS_ENABLED ? "insensitive" : undefined
                }
            });
        }
        if (query.searchByUrl) {
            searchConditions.push({
                url: {
                    contains: query.searchQueryString,
                    mode: POSTGRES_IS_ENABLED ? "insensitive" : undefined
                }
            });
        }
        if (query.searchByDescription) {
            searchConditions.push({
                description: {
                    contains: query.searchQueryString,
                    mode: POSTGRES_IS_ENABLED ? "insensitive" : undefined
                }
            });
        }
        if (query.searchByTextContent) {
            searchConditions.push({
                textContent: {
                    contains: query.searchQueryString,
                    mode: POSTGRES_IS_ENABLED ? "insensitive" : undefined
                }
            });
        }
        if (query.searchByTags) {
            searchConditions.push({
                tags: {
                    some: {
                        name: {
                            contains: query.searchQueryString,
                            mode: POSTGRES_IS_ENABLED ? "insensitive" : undefined
                        }
                    }
                }
            });
        }
    }
    const links = await db/* prisma */._.link.findMany({
        take: Number(process.env.PAGINATION_TAKE_COUNT) || 50,
        skip: query.cursor ? 1 : undefined,
        cursor: query.cursor ? {
            id: query.cursor
        } : undefined,
        where: {
            collection: {
                id: query.collectionId,
                isPublic: true
            },
            [query.searchQueryString ? "OR" : "AND"]: [
                ...searchConditions
            ]
        },
        include: {
            tags: true
        },
        orderBy: order || {
            id: "desc"
        }
    });
    return {
        response: links,
        status: 200
    };
}

;// CONCATENATED MODULE: ./pages/api/v1/public/collections/links/index.ts

async function collections(req, res) {
    if (req.method === "GET") {
        // Convert the type of the request query to "LinkRequestQuery"
        const convertedData = {
            sort: Number(req.query.sort),
            cursor: req.query.cursor ? Number(req.query.cursor) : undefined,
            collectionId: req.query.collectionId ? Number(req.query.collectionId) : undefined,
            pinnedOnly: req.query.pinnedOnly ? req.query.pinnedOnly === "true" : undefined,
            searchQueryString: req.query.searchQueryString ? req.query.searchQueryString : undefined,
            searchByName: req.query.searchByName === "true" ? true : undefined,
            searchByUrl: req.query.searchByUrl === "true" ? true : undefined,
            searchByDescription: req.query.searchByDescription === "true" ? true : undefined,
            searchByTextContent: req.query.searchByTextContent === "true" ? true : undefined,
            searchByTags: req.query.searchByTags === "true" ? true : undefined
        };
        if (!convertedData.collectionId) {
            return res.status(400).json({
                response: "Please choose a valid collection."
            });
        }
        const links = await getLink(convertedData);
        return res.status(links.status).json({
            response: links.response
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
var __webpack_exports__ = __webpack_require__.X(0, [6211], () => (__webpack_exec__(7515)));
module.exports = __webpack_exports__;

})();