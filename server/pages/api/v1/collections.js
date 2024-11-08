"use strict";
(() => {
var exports = {};
exports.id = 5570;
exports.ids = [5570];
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

/***/ 6090:
/***/ ((module) => {

module.exports = import("stripe");;

/***/ }),

/***/ 7147:
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ 1017:
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ 6674:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ getCollection)
/* harmony export */ });
/* harmony import */ var _lib_api_db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3009);

async function getCollection(userId) {
    const collections = await _lib_api_db__WEBPACK_IMPORTED_MODULE_0__/* .prisma */ ._.collection.findMany({
        where: {
            OR: [
                {
                    ownerId: userId
                },
                {
                    members: {
                        some: {
                            user: {
                                id: userId
                            }
                        }
                    }
                }
            ]
        },
        include: {
            _count: {
                select: {
                    links: true
                }
            },
            parent: {
                select: {
                    id: true,
                    name: true
                }
            },
            members: {
                include: {
                    user: {
                        select: {
                            username: true,
                            name: true,
                            image: true
                        }
                    }
                }
            }
        }
    });
    return {
        response: collections,
        status: 200
    };
}


/***/ }),

/***/ 9695:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ postCollection)
/* harmony export */ });
/* harmony import */ var _lib_api_db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3009);
/* harmony import */ var _lib_api_storage_createFolder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1814);


async function postCollection(collection, userId) {
    if (!collection || collection.name.trim() === "") return {
        response: "Please enter a valid collection.",
        status: 400
    };
    if (collection.parentId) {
        const findParentCollection = await _lib_api_db__WEBPACK_IMPORTED_MODULE_0__/* .prisma */ ._.collection.findUnique({
            where: {
                id: collection.parentId
            },
            select: {
                ownerId: true
            }
        });
        if (findParentCollection?.ownerId !== userId || typeof collection.parentId !== "number") return {
            response: "You are not authorized to create a sub-collection here.",
            status: 403
        };
    }
    const newCollection = await _lib_api_db__WEBPACK_IMPORTED_MODULE_0__/* .prisma */ ._.collection.create({
        data: {
            owner: {
                connect: {
                    id: userId
                }
            },
            name: collection.name.trim(),
            description: collection.description,
            color: collection.color,
            parent: collection.parentId ? {
                connect: {
                    id: collection.parentId
                }
            } : undefined
        },
        include: {
            _count: {
                select: {
                    links: true
                }
            },
            members: {
                include: {
                    user: {
                        select: {
                            username: true,
                            name: true
                        }
                    }
                }
            }
        }
    });
    await _lib_api_db__WEBPACK_IMPORTED_MODULE_0__/* .prisma */ ._.user.update({
        where: {
            id: userId
        },
        data: {
            collectionOrder: {
                push: newCollection.id
            }
        }
    });
    (0,_lib_api_storage_createFolder__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)({
        filePath: `archives/${newCollection.id}`
    });
    return {
        response: newCollection,
        status: 200
    };
}


/***/ }),

/***/ 3386:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ collections)
/* harmony export */ });
/* harmony import */ var _lib_api_controllers_collections_getCollections__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6674);
/* harmony import */ var _lib_api_controllers_collections_postCollection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9695);
/* harmony import */ var _lib_api_verifyUser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8005);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_lib_api_verifyUser__WEBPACK_IMPORTED_MODULE_2__]);
_lib_api_verifyUser__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



async function collections(req, res) {
    const user = await (0,_lib_api_verifyUser__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)({
        req,
        res
    });
    if (!user) return;
    if (req.method === "GET") {
        const collections = await (0,_lib_api_controllers_collections_getCollections__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(user.id);
        return res.status(collections.status).json({
            response: collections.response
        });
    } else if (req.method === "POST") {
        if (false) {}
        const newCollection = await (0,_lib_api_controllers_collections_postCollection__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(req.body, user.id);
        return res.status(newCollection.status).json({
            response: newCollection.response
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
var __webpack_exports__ = __webpack_require__.X(0, [5746,8005,1814], () => (__webpack_exec__(3386)));
module.exports = __webpack_exports__;

})();