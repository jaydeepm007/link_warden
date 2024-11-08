"use strict";
(() => {
var exports = {};
exports.id = 1071;
exports.ids = [1071];
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

/***/ 3999:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ deleteTagById)
/* harmony export */ });
/* harmony import */ var _lib_api_db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3009);

async function deleteTagById(userId, tagId) {
    if (!tagId) return {
        response: "Please choose a valid name for the tag.",
        status: 401
    };
    const targetTag = await _lib_api_db__WEBPACK_IMPORTED_MODULE_0__/* .prisma */ ._.tag.findUnique({
        where: {
            id: tagId
        }
    });
    if (targetTag?.ownerId !== userId) return {
        response: "Permission denied.",
        status: 401
    };
    const updatedTag = await _lib_api_db__WEBPACK_IMPORTED_MODULE_0__/* .prisma */ ._.tag.delete({
        where: {
            id: tagId
        }
    });
    return {
        response: updatedTag,
        status: 200
    };
}


/***/ }),

/***/ 7486:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ updeteTagById)
/* harmony export */ });
/* harmony import */ var _lib_api_db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3009);

async function updeteTagById(userId, tagId, data) {
    if (!tagId || !data.name) return {
        response: "Please choose a valid name for the tag.",
        status: 401
    };
    const tagNameIsTaken = await _lib_api_db__WEBPACK_IMPORTED_MODULE_0__/* .prisma */ ._.tag.findFirst({
        where: {
            ownerId: userId,
            name: data.name
        }
    });
    if (tagNameIsTaken) return {
        response: "Tag names should be unique.",
        status: 400
    };
    const targetTag = await _lib_api_db__WEBPACK_IMPORTED_MODULE_0__/* .prisma */ ._.tag.findUnique({
        where: {
            id: tagId
        }
    });
    if (targetTag?.ownerId !== userId) return {
        response: "Permission denied.",
        status: 401
    };
    const updatedTag = await _lib_api_db__WEBPACK_IMPORTED_MODULE_0__/* .prisma */ ._.tag.update({
        where: {
            id: tagId
        },
        data: {
            name: data.name
        }
    });
    return {
        response: updatedTag,
        status: 200
    };
}


/***/ }),

/***/ 9962:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ tags)
/* harmony export */ });
/* harmony import */ var _lib_api_controllers_tags_tagId_updeteTagById__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7486);
/* harmony import */ var _lib_api_verifyUser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8005);
/* harmony import */ var _lib_api_controllers_tags_tagId_deleteTagById__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3999);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_lib_api_verifyUser__WEBPACK_IMPORTED_MODULE_1__]);
_lib_api_verifyUser__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



async function tags(req, res) {
    const user = await (0,_lib_api_verifyUser__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)({
        req,
        res
    });
    if (!user) return;
    const tagId = Number(req.query.id);
    if (req.method === "PUT") {
        if (false) {}
        const tags = await (0,_lib_api_controllers_tags_tagId_updeteTagById__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(user.id, tagId, req.body);
        return res.status(tags.status).json({
            response: tags.response
        });
    } else if (req.method === "DELETE") {
        if (false) {}
        const tags = await (0,_lib_api_controllers_tags_tagId_deleteTagById__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(user.id, tagId);
        return res.status(tags.status).json({
            response: tags.response
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
var __webpack_exports__ = __webpack_require__.X(0, [5746,8005], () => (__webpack_exec__(9962)));
module.exports = __webpack_exports__;

})();