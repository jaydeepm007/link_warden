"use strict";
(() => {
var exports = {};
exports.id = 2481;
exports.ids = [2481];
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

/***/ 3232:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ deleteLink)
/* harmony export */ });
/* harmony import */ var _lib_api_db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3009);
/* harmony import */ var _lib_api_getPermission__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4703);
/* harmony import */ var _lib_api_manageLinkFiles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2517);



async function deleteLink(userId, linkId) {
    if (!linkId) return {
        response: "Please choose a valid link.",
        status: 401
    };
    const collectionIsAccessible = await (0,_lib_api_getPermission__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)({
        userId,
        linkId
    });
    const memberHasAccess = collectionIsAccessible?.members.some((e)=>e.userId === userId && e.canDelete);
    if (!collectionIsAccessible || !(collectionIsAccessible?.ownerId === userId || memberHasAccess)) return {
        response: "Collection is not accessible.",
        status: 401
    };
    const deleteLink = await _lib_api_db__WEBPACK_IMPORTED_MODULE_0__/* .prisma */ ._.link.delete({
        where: {
            id: linkId
        }
    });
    (0,_lib_api_manageLinkFiles__WEBPACK_IMPORTED_MODULE_2__/* .removeFiles */ .c)(linkId, collectionIsAccessible.id);
    return {
        response: deleteLink,
        status: 200
    };
}


/***/ }),

/***/ 4228:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ getLinkById)
/* harmony export */ });
/* harmony import */ var _lib_api_db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3009);
/* harmony import */ var _lib_api_getPermission__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4703);


async function getLinkById(userId, linkId) {
    if (!linkId) return {
        response: "Please choose a valid link.",
        status: 401
    };
    const collectionIsAccessible = await (0,_lib_api_getPermission__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)({
        userId,
        linkId
    });
    const memberHasAccess = collectionIsAccessible?.members.some((e)=>e.userId === userId);
    const isCollectionOwner = collectionIsAccessible?.ownerId === userId;
    if (collectionIsAccessible?.ownerId !== userId && !memberHasAccess) return {
        response: "Collection is not accessible.",
        status: 401
    };
    else {
        const link = await _lib_api_db__WEBPACK_IMPORTED_MODULE_0__/* .prisma */ ._.link.findUnique({
            where: {
                id: linkId
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
        return {
            response: link,
            status: 200
        };
    }
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

/***/ 624:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ links)
/* harmony export */ });
/* harmony import */ var _lib_api_controllers_links_linkId_deleteLinkById__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3232);
/* harmony import */ var _lib_api_controllers_links_linkId_updateLinkById__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6524);
/* harmony import */ var _lib_api_controllers_links_linkId_getLinkById__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4228);
/* harmony import */ var _lib_api_verifyUser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8005);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_lib_api_verifyUser__WEBPACK_IMPORTED_MODULE_3__]);
_lib_api_verifyUser__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




async function links(req, res) {
    const user = await (0,_lib_api_verifyUser__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)({
        req,
        res
    });
    if (!user) return;
    if (req.method === "GET") {
        const updated = await (0,_lib_api_controllers_links_linkId_getLinkById__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(user.id, Number(req.query.id));
        return res.status(updated.status).json({
            response: updated.response
        });
    } else if (req.method === "PUT") {
        if (false) {}
        const updated = await (0,_lib_api_controllers_links_linkId_updateLinkById__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(user.id, Number(req.query.id), req.body);
        return res.status(updated.status).json({
            response: updated.response
        });
    } else if (req.method === "DELETE") {
        if (false) {}
        const deleted = await (0,_lib_api_controllers_links_linkId_deleteLinkById__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(user.id, Number(req.query.id));
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
var __webpack_exports__ = __webpack_require__.X(0, [5746,8005,4703,2517,6524], () => (__webpack_exec__(624)));
module.exports = __webpack_exports__;

})();