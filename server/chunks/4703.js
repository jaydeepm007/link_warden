"use strict";
exports.id = 4703;
exports.ids = [4703];
exports.modules = {

/***/ 4703:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ getPermission)
/* harmony export */ });
/* harmony import */ var _lib_api_db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3009);

async function getPermission({ userId, collectionId, linkId }) {
    if (linkId) {
        const check = await _lib_api_db__WEBPACK_IMPORTED_MODULE_0__/* .prisma */ ._.collection.findFirst({
            where: {
                links: {
                    some: {
                        id: linkId
                    }
                }
            },
            include: {
                members: true
            }
        });
        return check;
    } else if (collectionId) {
        const check = await _lib_api_db__WEBPACK_IMPORTED_MODULE_0__/* .prisma */ ._.collection.findFirst({
            where: {
                id: collectionId,
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
            },
            include: {
                members: true
            }
        });
        return check;
    }
}


/***/ })

};
;