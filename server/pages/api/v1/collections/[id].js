"use strict";
(() => {
var exports = {};
exports.id = 4482;
exports.ids = [4482];
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

/***/ 5665:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ deleteCollection)
/* harmony export */ });
/* harmony import */ var _lib_api_db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3009);
/* harmony import */ var _lib_api_getPermission__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4703);
/* harmony import */ var _lib_api_storage_removeFolder__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4472);



async function deleteCollection(userId, collectionId) {
    if (!collectionId) return {
        response: "Please choose a valid collection.",
        status: 401
    };
    const collectionIsAccessible = await (0,_lib_api_getPermission__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)({
        userId,
        collectionId
    });
    const memberHasAccess = collectionIsAccessible?.members.some((e)=>e.userId === userId);
    if (collectionIsAccessible?.ownerId !== userId && memberHasAccess) {
        // Remove relation/Leave collection
        const deletedUsersAndCollectionsRelation = await _lib_api_db__WEBPACK_IMPORTED_MODULE_0__/* .prisma */ ._.usersAndCollections.delete({
            where: {
                userId_collectionId: {
                    userId: userId,
                    collectionId: collectionId
                }
            }
        });
        await removeFromOrders(userId, collectionId);
        return {
            response: deletedUsersAndCollectionsRelation,
            status: 200
        };
    } else if (collectionIsAccessible?.ownerId !== userId) {
        return {
            response: "Collection is not accessible.",
            status: 401
        };
    }
    const deletedCollection = await _lib_api_db__WEBPACK_IMPORTED_MODULE_0__/* .prisma */ ._.$transaction(async ()=>{
        await deleteSubCollections(collectionId);
        await _lib_api_db__WEBPACK_IMPORTED_MODULE_0__/* .prisma */ ._.usersAndCollections.deleteMany({
            where: {
                collection: {
                    id: collectionId
                }
            }
        });
        await _lib_api_db__WEBPACK_IMPORTED_MODULE_0__/* .prisma */ ._.link.deleteMany({
            where: {
                collection: {
                    id: collectionId
                }
            }
        });
        (0,_lib_api_storage_removeFolder__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)({
            filePath: `archives/${collectionId}`
        });
        (0,_lib_api_storage_removeFolder__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)({
            filePath: `archives/preview/${collectionId}`
        });
        await removeFromOrders(userId, collectionId);
        return await _lib_api_db__WEBPACK_IMPORTED_MODULE_0__/* .prisma */ ._.collection.delete({
            where: {
                id: collectionId
            }
        });
    });
    return {
        response: deletedCollection,
        status: 200
    };
}
async function deleteSubCollections(collectionId) {
    const subCollections = await _lib_api_db__WEBPACK_IMPORTED_MODULE_0__/* .prisma */ ._.collection.findMany({
        where: {
            parentId: collectionId
        }
    });
    for (const subCollection of subCollections){
        await deleteSubCollections(subCollection.id);
        await _lib_api_db__WEBPACK_IMPORTED_MODULE_0__/* .prisma */ ._.usersAndCollections.deleteMany({
            where: {
                collection: {
                    id: subCollection.id
                }
            }
        });
        await _lib_api_db__WEBPACK_IMPORTED_MODULE_0__/* .prisma */ ._.link.deleteMany({
            where: {
                collection: {
                    id: subCollection.id
                }
            }
        });
        await _lib_api_db__WEBPACK_IMPORTED_MODULE_0__/* .prisma */ ._.collection.delete({
            where: {
                id: subCollection.id
            }
        });
        (0,_lib_api_storage_removeFolder__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)({
            filePath: `archives/${subCollection.id}`
        });
        (0,_lib_api_storage_removeFolder__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)({
            filePath: `archives/preview/${subCollection.id}`
        });
    }
}
async function removeFromOrders(userId, collectionId) {
    const userCollectionOrder = await _lib_api_db__WEBPACK_IMPORTED_MODULE_0__/* .prisma */ ._.user.findUnique({
        where: {
            id: userId
        },
        select: {
            collectionOrder: true
        }
    });
    if (userCollectionOrder) await _lib_api_db__WEBPACK_IMPORTED_MODULE_0__/* .prisma */ ._.user.update({
        where: {
            id: userId
        },
        data: {
            collectionOrder: {
                set: userCollectionOrder.collectionOrder.filter((e)=>e !== collectionId)
            }
        }
    });
}


/***/ }),

/***/ 302:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ getCollectionById)
/* harmony export */ });
/* harmony import */ var _lib_api_db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3009);

async function getCollectionById(userId, collectionId) {
    const collections = await _lib_api_db__WEBPACK_IMPORTED_MODULE_0__/* .prisma */ ._.collection.findFirst({
        where: {
            id: collectionId,
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

/***/ 6298:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ updateCollection)
/* harmony export */ });
/* harmony import */ var _lib_api_db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3009);
/* harmony import */ var _lib_api_getPermission__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4703);


async function updateCollection(userId, collectionId, data) {
    if (!collectionId) return {
        response: "Please choose a valid collection.",
        status: 401
    };
    const collectionIsAccessible = await (0,_lib_api_getPermission__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)({
        userId,
        collectionId
    });
    if (!(collectionIsAccessible?.ownerId === userId)) return {
        response: "Collection is not accessible.",
        status: 401
    };
    console.log(data);
    if (data.parentId) {
        if (data.parentId !== "root") {
            const findParentCollection = await _lib_api_db__WEBPACK_IMPORTED_MODULE_0__/* .prisma */ ._.collection.findUnique({
                where: {
                    id: data.parentId
                },
                select: {
                    ownerId: true,
                    parentId: true
                }
            });
            if (findParentCollection?.ownerId !== userId || typeof data.parentId !== "number" || findParentCollection?.parentId === data.parentId) return {
                response: "You are not authorized to create a sub-collection here.",
                status: 403
            };
        }
    }
    const updatedCollection = await _lib_api_db__WEBPACK_IMPORTED_MODULE_0__/* .prisma */ ._.$transaction(async ()=>{
        await _lib_api_db__WEBPACK_IMPORTED_MODULE_0__/* .prisma */ ._.usersAndCollections.deleteMany({
            where: {
                collection: {
                    id: collectionId
                }
            }
        });
        return await _lib_api_db__WEBPACK_IMPORTED_MODULE_0__/* .prisma */ ._.collection.update({
            where: {
                id: collectionId
            },
            data: {
                name: data.name.trim(),
                description: data.description,
                color: data.color,
                isPublic: data.isPublic,
                parent: data.parentId && data.parentId !== "root" ? {
                    connect: {
                        id: data.parentId
                    }
                } : data.parentId === "root" ? {
                    disconnect: true
                } : undefined,
                members: {
                    create: data.members.map((e)=>({
                            user: {
                                connect: {
                                    id: e.user.id || e.userId
                                }
                            },
                            canCreate: e.canCreate,
                            canUpdate: e.canUpdate,
                            canDelete: e.canDelete
                        }))
                }
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
                                image: true,
                                username: true,
                                name: true,
                                id: true
                            }
                        }
                    }
                }
            }
        });
    });
    return {
        response: updatedCollection,
        status: 200
    };
}


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

/***/ 5390:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ collections)
/* harmony export */ });
/* harmony import */ var _lib_api_controllers_collections_collectionId_getCollectionById__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(302);
/* harmony import */ var _lib_api_controllers_collections_collectionId_updateCollectionById__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6298);
/* harmony import */ var _lib_api_controllers_collections_collectionId_deleteCollectionById__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5665);
/* harmony import */ var _lib_api_verifyUser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8005);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_lib_api_verifyUser__WEBPACK_IMPORTED_MODULE_3__]);
_lib_api_verifyUser__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




async function collections(req, res) {
    const user = await (0,_lib_api_verifyUser__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)({
        req,
        res
    });
    if (!user) return;
    const collectionId = Number(req.query.id);
    if (req.method === "GET") {
        const collections = await (0,_lib_api_controllers_collections_collectionId_getCollectionById__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(user.id, collectionId);
        return res.status(collections.status).json({
            response: collections.response
        });
    } else if (req.method === "PUT") {
        if (false) {}
        const updated = await (0,_lib_api_controllers_collections_collectionId_updateCollectionById__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(user.id, collectionId, req.body);
        return res.status(updated.status).json({
            response: updated.response
        });
    } else if (req.method === "DELETE") {
        if (false) {}
        const deleted = await (0,_lib_api_controllers_collections_collectionId_deleteCollectionById__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(user.id, collectionId);
        return res.status(deleted.status).json({
            response: deleted.response
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
var __webpack_exports__ = __webpack_require__.X(0, [5746,8005,4703,4472], () => (__webpack_exec__(5390)));
module.exports = __webpack_exports__;

})();