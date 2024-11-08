"use strict";
exports.id = 6524;
exports.ids = [6524];
exports.modules = {

/***/ 6524:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ updateLinkById)
/* harmony export */ });
/* harmony import */ var _lib_api_db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3009);
/* harmony import */ var _lib_api_getPermission__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4703);
/* harmony import */ var _lib_api_manageLinkFiles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2517);



async function updateLinkById(userId, linkId, data) {
    if (!data || !data.collection.id) return {
        response: "Please choose a valid link and collection.",
        status: 401
    };
    const collectionIsAccessible = await (0,_lib_api_getPermission__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)({
        userId,
        linkId
    });
    const isCollectionOwner = collectionIsAccessible?.ownerId === data.collection.ownerId && data.collection.ownerId === userId;
    const canPinPermission = collectionIsAccessible?.members.some((e)=>e.userId === userId);
    // If the user is able to create a link, they can pin it to their dashboard only.
    if (canPinPermission) {
        const updatedLink = await _lib_api_db__WEBPACK_IMPORTED_MODULE_0__/* .prisma */ ._.link.update({
            where: {
                id: linkId
            },
            data: {
                pinnedBy: data?.pinnedBy && data.pinnedBy[0] ? {
                    connect: {
                        id: userId
                    }
                } : {
                    disconnect: {
                        id: userId
                    }
                }
            },
            include: {
                collection: true,
                pinnedBy: isCollectionOwner ? {
                    where: {
                        id: userId
                    },
                    select: {
                        id: true
                    }
                } : undefined
            }
        });
    // return { response: updatedLink, status: 200 };
    }
    const targetCollectionIsAccessible = await (0,_lib_api_getPermission__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)({
        userId,
        collectionId: data.collection.id
    });
    const memberHasAccess = collectionIsAccessible?.members.some((e)=>e.userId === userId && e.canUpdate);
    const targetCollectionMatchesData = data.collection.id ? data.collection.id === targetCollectionIsAccessible?.id :  true && data.collection.name ? data.collection.name === targetCollectionIsAccessible?.name :  true && data.collection.ownerId ? data.collection.ownerId === targetCollectionIsAccessible?.ownerId : true;
    if (!targetCollectionMatchesData) return {
        response: "Target collection does not match the data.",
        status: 401
    };
    const unauthorizedSwitchCollection = !isCollectionOwner && collectionIsAccessible?.id !== data.collection.id;
    // Makes sure collection members (non-owners) cannot move a link to/from a collection.
    if (unauthorizedSwitchCollection) return {
        response: "You can't move a link to/from a collection you don't own.",
        status: 401
    };
    else if (collectionIsAccessible?.ownerId !== userId && !memberHasAccess) return {
        response: "Collection is not accessible.",
        status: 401
    };
    else {
        const updatedLink = await _lib_api_db__WEBPACK_IMPORTED_MODULE_0__/* .prisma */ ._.link.update({
            where: {
                id: linkId
            },
            data: {
                name: data.name,
                description: data.description,
                collection: {
                    connect: {
                        id: data.collection.id
                    }
                },
                tags: {
                    set: [],
                    connectOrCreate: data.tags.map((tag)=>({
                            where: {
                                name_ownerId: {
                                    name: tag.name,
                                    ownerId: data.collection.ownerId
                                }
                            },
                            create: {
                                name: tag.name,
                                owner: {
                                    connect: {
                                        id: data.collection.ownerId
                                    }
                                }
                            }
                        }))
                },
                pinnedBy: data?.pinnedBy && data.pinnedBy[0] ? {
                    connect: {
                        id: userId
                    }
                } : {
                    disconnect: {
                        id: userId
                    }
                }
            },
            include: {
                tags: true,
                collection: true,
                pinnedBy: isCollectionOwner ? {
                    where: {
                        id: userId
                    },
                    select: {
                        id: true
                    }
                } : undefined
            }
        });
        if (collectionIsAccessible?.id !== data.collection.id) {
            await (0,_lib_api_manageLinkFiles__WEBPACK_IMPORTED_MODULE_2__/* .moveFiles */ ._)(linkId, collectionIsAccessible?.id, data.collection.id);
        }
        return {
            response: updatedLink,
            status: 200
        };
    }
}


/***/ })

};
;