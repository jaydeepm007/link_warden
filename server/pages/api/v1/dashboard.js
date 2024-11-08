"use strict";
(() => {
var exports = {};
exports.id = 4220;
exports.ids = [4220];
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

/***/ 4815:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ getDashboardData)
/* harmony export */ });
/* harmony import */ var _lib_api_db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3009);
/* harmony import */ var _types_global__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6211);


async function getDashboardData(userId, query) {
    let order = {
        id: "desc"
    };
    if (query.sort === _types_global__WEBPACK_IMPORTED_MODULE_1__/* .Sort */ .PE.DateNewestFirst) order = {
        id: "desc"
    };
    else if (query.sort === _types_global__WEBPACK_IMPORTED_MODULE_1__/* .Sort */ .PE.DateOldestFirst) order = {
        id: "asc"
    };
    else if (query.sort === _types_global__WEBPACK_IMPORTED_MODULE_1__/* .Sort */ .PE.NameAZ) order = {
        name: "asc"
    };
    else if (query.sort === _types_global__WEBPACK_IMPORTED_MODULE_1__/* .Sort */ .PE.NameZA) order = {
        name: "desc"
    };
    else if (query.sort === _types_global__WEBPACK_IMPORTED_MODULE_1__/* .Sort */ .PE.DescriptionAZ) order = {
        description: "asc"
    };
    else if (query.sort === _types_global__WEBPACK_IMPORTED_MODULE_1__/* .Sort */ .PE.DescriptionZA) order = {
        description: "desc"
    };
    const pinnedLinks = await _lib_api_db__WEBPACK_IMPORTED_MODULE_0__/* .prisma */ ._.link.findMany({
        take: 10,
        where: {
            AND: [
                {
                    collection: {
                        OR: [
                            {
                                ownerId: userId
                            },
                            {
                                members: {
                                    some: {
                                        userId
                                    }
                                }
                            }
                        ]
                    }
                },
                {
                    pinnedBy: {
                        some: {
                            id: userId
                        }
                    }
                }
            ]
        },
        include: {
            tags: true,
            collection: true,
            pinnedBy: {
                where: {
                    id: userId
                },
                select: {
                    id: true
                }
            }
        },
        orderBy: order
    });
    const recentlyAddedLinks = await _lib_api_db__WEBPACK_IMPORTED_MODULE_0__/* .prisma */ ._.link.findMany({
        take: 10,
        where: {
            collection: {
                OR: [
                    {
                        ownerId: userId
                    },
                    {
                        members: {
                            some: {
                                userId
                            }
                        }
                    }
                ]
            }
        },
        include: {
            tags: true,
            collection: true,
            pinnedBy: {
                where: {
                    id: userId
                },
                select: {
                    id: true
                }
            }
        },
        orderBy: order
    });
    const combinedLinks = [
        ...recentlyAddedLinks,
        ...pinnedLinks
    ];
    const uniqueLinks = Array.from(combinedLinks.reduce((map, item)=>map.set(item.id, item), new Map()).values());
    const links = uniqueLinks.sort((a, b)=>new Date(b.id) - new Date(a.id));
    return {
        response: links,
        status: 200
    };
}


/***/ }),

/***/ 9178:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ dashboard)
/* harmony export */ });
/* harmony import */ var _lib_api_controllers_dashboard_getDashboardData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4815);
/* harmony import */ var _lib_api_verifyUser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8005);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_lib_api_verifyUser__WEBPACK_IMPORTED_MODULE_1__]);
_lib_api_verifyUser__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


async function dashboard(req, res) {
    const user = await (0,_lib_api_verifyUser__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)({
        req,
        res
    });
    if (!user) return;
    if (req.method === "GET") {
        const convertedData = {
            sort: Number(req.query.sort),
            cursor: req.query.cursor ? Number(req.query.cursor) : undefined
        };
        const links = await (0,_lib_api_controllers_dashboard_getDashboardData__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(user.id, convertedData);
        return res.status(links.status).json({
            response: links.response
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
var __webpack_exports__ = __webpack_require__.X(0, [5746,8005,6211], () => (__webpack_exec__(9178)));
module.exports = __webpack_exports__;

})();