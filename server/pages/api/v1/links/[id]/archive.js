"use strict";
(() => {
var exports = {};
exports.id = 4563;
exports.ids = [4563];
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

/***/ 2417:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ isValidUrl)
/* harmony export */ });
function isValidUrl(string) {
    try {
        new URL(string);
        return true;
    } catch (err) {
        return false;
    }
}


/***/ }),

/***/ 940:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ links)
/* harmony export */ });
/* harmony import */ var _lib_api_db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3009);
/* harmony import */ var _lib_api_verifyUser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8005);
/* harmony import */ var _lib_shared_isValidUrl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2417);
/* harmony import */ var _lib_api_manageLinkFiles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2517);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_lib_api_verifyUser__WEBPACK_IMPORTED_MODULE_1__]);
_lib_api_verifyUser__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




const RE_ARCHIVE_LIMIT = Number(process.env.RE_ARCHIVE_LIMIT) || 5;
async function links(req, res) {
    const user = await (0,_lib_api_verifyUser__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)({
        req,
        res
    });
    if (!user) return;
    const link = await _lib_api_db__WEBPACK_IMPORTED_MODULE_0__/* .prisma */ ._.link.findUnique({
        where: {
            id: Number(req.query.id)
        },
        include: {
            collection: {
                include: {
                    owner: true
                }
            }
        }
    });
    if (!link) return res.status(404).json({
        response: "Link not found."
    });
    if (link.collection.ownerId !== user.id) return res.status(401).json({
        response: "Permission denied."
    });
    if (req.method === "PUT") {
        if (false) {}
        if (link?.lastPreserved && getTimezoneDifferenceInMinutes(new Date(), link?.lastPreserved) < RE_ARCHIVE_LIMIT) return res.status(400).json({
            response: `This link is currently being saved or has already been preserved. Please retry in ${RE_ARCHIVE_LIMIT - Math.floor(getTimezoneDifferenceInMinutes(new Date(), link?.lastPreserved))} minutes or create a new one.`
        });
        if (!link.url || !(0,_lib_shared_isValidUrl__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(link.url)) return res.status(200).json({
            response: "Invalid URL."
        });
        await deleteArchivedFiles(link);
        return res.status(200).json({
            response: "Link is being archived."
        });
    }
}
const getTimezoneDifferenceInMinutes = (future, past)=>{
    const date1 = new Date(future);
    const date2 = new Date(past);
    const diffInMilliseconds = Math.abs(date1.getTime() - date2.getTime());
    const diffInMinutes = diffInMilliseconds / (1000 * 60);
    return diffInMinutes;
};
const deleteArchivedFiles = async (link)=>{
    await _lib_api_db__WEBPACK_IMPORTED_MODULE_0__/* .prisma */ ._.link.update({
        where: {
            id: link.id
        },
        data: {
            image: null,
            pdf: null,
            readable: null,
            monolith: null,
            preview: null
        }
    });
    await (0,_lib_api_manageLinkFiles__WEBPACK_IMPORTED_MODULE_2__/* .removeFiles */ .c)(link.id, link.collection.id);
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [5746,8005,2517], () => (__webpack_exec__(940)));
module.exports = __webpack_exports__;

})();