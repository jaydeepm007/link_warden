"use strict";
(() => {
var exports = {};
exports.id = 2019;
exports.ids = [2019];
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

/***/ 342:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ getTags)
/* harmony export */ });
/* harmony import */ var _lib_api_db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3009);

async function getTags(userId) {
    // Remove empty tags
    await _lib_api_db__WEBPACK_IMPORTED_MODULE_0__/* .prisma */ ._.tag.deleteMany({
        where: {
            ownerId: userId,
            links: {
                none: {}
            }
        }
    });
    const tags = await _lib_api_db__WEBPACK_IMPORTED_MODULE_0__/* .prisma */ ._.tag.findMany({
        where: {
            OR: [
                {
                    ownerId: userId
                },
                {
                    links: {
                        some: {
                            collection: {
                                members: {
                                    some: {
                                        userId
                                    }
                                }
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
            }
        }
    });
    return {
        response: tags,
        status: 200
    };
}


/***/ }),

/***/ 9322:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ tags)
/* harmony export */ });
/* harmony import */ var _lib_api_controllers_tags_getTags__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(342);
/* harmony import */ var _lib_api_verifyUser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8005);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_lib_api_verifyUser__WEBPACK_IMPORTED_MODULE_1__]);
_lib_api_verifyUser__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


async function tags(req, res) {
    const user = await (0,_lib_api_verifyUser__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)({
        req,
        res
    });
    if (!user) return;
    if (req.method === "GET") {
        const tags = await (0,_lib_api_controllers_tags_getTags__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(user.id);
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
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [5746,8005], () => (__webpack_exec__(9322)));
module.exports = __webpack_exports__;

})();