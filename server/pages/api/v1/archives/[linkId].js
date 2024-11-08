"use strict";
(() => {
var exports = {};
exports.id = 8128;
exports.ids = [8128];
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

/***/ 6705:
/***/ ((module) => {

module.exports = import("formidable");;

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

/***/ 3837:
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ 1488:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ api_generatePreview)
});

;// CONCATENATED MODULE: external "jimp"
const external_jimp_namespaceObject = require("jimp");
var external_jimp_default = /*#__PURE__*/__webpack_require__.n(external_jimp_namespaceObject);
// EXTERNAL MODULE: ./lib/api/db.ts
var db = __webpack_require__(3009);
// EXTERNAL MODULE: ./lib/api/storage/createFile.ts
var createFile = __webpack_require__(7407);
;// CONCATENATED MODULE: ./lib/api/generatePreview.ts



const generatePreview = async (buffer, collectionId, linkId)=>{
    if (buffer && collectionId && linkId) {
        try {
            const image = await external_jimp_default().read(buffer);
            if (!image) {
                console.log("Error generating preview: Image not found");
                return;
            }
            image.resize(1280, (external_jimp_default()).AUTO).quality(20);
            const processedBuffer = await image.getBufferAsync((external_jimp_default()).MIME_JPEG);
            if (Buffer.byteLength(processedBuffer) > 1024 * 1024 * Number(process.env.PREVIEW_MAX_BUFFER || 0.1)) {
                console.log("Error generating preview: Buffer size exceeded");
                return db/* prisma */._.link.update({
                    where: {
                        id: linkId
                    },
                    data: {
                        preview: "unavailable"
                    }
                });
            }
            await (0,createFile/* default */.Z)({
                data: processedBuffer,
                filePath: `archives/preview/${collectionId}/${linkId}.jpeg`
            });
            await db/* prisma */._.link.update({
                where: {
                    id: linkId
                },
                data: {
                    preview: `archives/preview/${collectionId}/${linkId}.jpeg`
                }
            });
        } catch (err) {
            console.error("Error processing the image:", err);
        }
    }
};
/* harmony default export */ const api_generatePreview = (generatePreview);


/***/ }),

/***/ 7407:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ createFile)
/* harmony export */ });
/* harmony import */ var _aws_sdk_client_s3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1841);
/* harmony import */ var _aws_sdk_client_s3__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_aws_sdk_client_s3__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7147);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1017);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _s3Client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3473);




async function createFile({ filePath, data, isBase64 }) {
    if (_s3Client__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z) {
        const bucketParams = {
            Bucket: process.env.SPACES_BUCKET_NAME,
            Key: filePath,
            Body: isBase64 ? Buffer.from(data, "base64") : data
        };
        try {
            await _s3Client__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z.send(new _aws_sdk_client_s3__WEBPACK_IMPORTED_MODULE_0__.PutObjectCommand(bucketParams));
            return true;
        } catch (err) {
            console.log("Error", err);
            return false;
        }
    } else {
        const storagePath = process.env.STORAGE_FOLDER || "data";
        const creationPath = path__WEBPACK_IMPORTED_MODULE_2___default().join(process.cwd(), storagePath + "/" + filePath);
        fs__WEBPACK_IMPORTED_MODULE_1___default().writeFile(creationPath, data, isBase64 ? "base64" : {}, function(err) {
            if (err) console.log(err);
        });
        return true;
    }
}


/***/ }),

/***/ 6000:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   config: () => (/* binding */ config),
/* harmony export */   "default": () => (/* binding */ Index)
/* harmony export */ });
/* harmony import */ var _lib_api_storage_readFile__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2897);
/* harmony import */ var _lib_api_db__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3009);
/* harmony import */ var _types_global__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6211);
/* harmony import */ var _lib_api_verifyUser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8005);
/* harmony import */ var _lib_api_getPermission__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4703);
/* harmony import */ var formidable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6705);
/* harmony import */ var _lib_api_storage_createFile__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7407);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7147);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _lib_api_verifyToken__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5192);
/* harmony import */ var _lib_api_generatePreview__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1488);
/* harmony import */ var _lib_api_storage_createFolder__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(1814);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_lib_api_verifyUser__WEBPACK_IMPORTED_MODULE_3__, formidable__WEBPACK_IMPORTED_MODULE_5__]);
([_lib_api_verifyUser__WEBPACK_IMPORTED_MODULE_3__, formidable__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);











const config = {
    api: {
        bodyParser: false
    }
};
async function Index(req, res) {
    const linkId = Number(req.query.linkId);
    const format = Number(req.query.format);
    const isPreview = Boolean(req.query.preview);
    let suffix;
    if (format === _types_global__WEBPACK_IMPORTED_MODULE_2__/* .ArchivedFormat */ .Gt.png) suffix = ".png";
    else if (format === _types_global__WEBPACK_IMPORTED_MODULE_2__/* .ArchivedFormat */ .Gt.jpeg) suffix = ".jpeg";
    else if (format === _types_global__WEBPACK_IMPORTED_MODULE_2__/* .ArchivedFormat */ .Gt.pdf) suffix = ".pdf";
    else if (format === _types_global__WEBPACK_IMPORTED_MODULE_2__/* .ArchivedFormat */ .Gt.readability) suffix = "_readability.json";
    else if (format === _types_global__WEBPACK_IMPORTED_MODULE_2__/* .ArchivedFormat */ .Gt.monolith) suffix = ".html";
    //@ts-ignore
    if (!linkId || !suffix) return res.status(401).json({
        response: "Invalid parameters."
    });
    if (req.method === "GET") {
        const token = await (0,_lib_api_verifyToken__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)({
            req
        });
        const userId = typeof token === "string" ? undefined : token?.id;
        const collectionIsAccessible = await _lib_api_db__WEBPACK_IMPORTED_MODULE_1__/* .prisma */ ._.collection.findFirst({
            where: {
                links: {
                    some: {
                        id: linkId
                    }
                },
                OR: [
                    {
                        ownerId: userId || -1
                    },
                    {
                        members: {
                            some: {
                                userId: userId || -1
                            }
                        }
                    },
                    {
                        isPublic: true
                    }
                ]
            }
        });
        if (!collectionIsAccessible) return res.status(401).json({
            response: "You don't have access to this collection."
        });
        if (isPreview) {
            const { file, contentType, status } = await (0,_lib_api_storage_readFile__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(`archives/preview/${collectionIsAccessible.id}/${linkId}.jpeg`);
            res.setHeader("Content-Type", contentType).status(status);
            return res.send(file);
        } else {
            const { file, contentType, status } = await (0,_lib_api_storage_readFile__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(`archives/${collectionIsAccessible.id}/${linkId + suffix}`);
            res.setHeader("Content-Type", contentType).status(status);
            return res.send(file);
        }
    } else if (req.method === "POST") {
        if (false) {}
        const user = await (0,_lib_api_verifyUser__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)({
            req,
            res
        });
        if (!user) return;
        const collectionPermissions = await (0,_lib_api_getPermission__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)({
            userId: user.id,
            linkId
        });
        if (!collectionPermissions) return res.status(400).json({
            response: "Collection is not accessible."
        });
        const memberHasAccess = collectionPermissions.members.some((e)=>e.userId === user.id && e.canCreate);
        if (!(collectionPermissions.ownerId === user.id || memberHasAccess)) return res.status(400).json({
            response: "Collection is not accessible."
        });
        // await uploadHandler(linkId, )
        const MAX_LINKS_PER_USER = Number(process.env.MAX_LINKS_PER_USER || 30000);
        const numberOfLinksTheUserHas = await _lib_api_db__WEBPACK_IMPORTED_MODULE_1__/* .prisma */ ._.link.count({
            where: {
                collection: {
                    ownerId: user.id
                }
            }
        });
        if (numberOfLinksTheUserHas > MAX_LINKS_PER_USER) return res.status(400).json({
            response: "Each collection owner can only have a maximum of ${MAX_LINKS_PER_USER} Links."
        });
        const NEXT_PUBLIC_MAX_FILE_BUFFER = Number( false || 10);
        const form = (0,formidable__WEBPACK_IMPORTED_MODULE_5__["default"])({
            maxFields: 1,
            maxFiles: 1,
            maxFileSize: NEXT_PUBLIC_MAX_FILE_BUFFER * 1024 * 1024
        });
        form.parse(req, async (err, fields, files)=>{
            const allowedMIMETypes = [
                "application/pdf",
                "image/png",
                "image/jpg",
                "image/jpeg"
            ];
            if (err || !files.file || !files.file[0] || !allowedMIMETypes.includes(files.file[0].mimetype || "")) {
                // Handle parsing error
                return res.status(400).json({
                    response: `Sorry, we couldn't process your file. Please ensure it's a PDF, PNG, or JPG format and doesn't exceed ${NEXT_PUBLIC_MAX_FILE_BUFFER}MB.`
                });
            } else {
                const fileBuffer = fs__WEBPACK_IMPORTED_MODULE_7___default().readFileSync(files.file[0].filepath);
                if (Buffer.byteLength(fileBuffer) > 1024 * 1024 * Number(NEXT_PUBLIC_MAX_FILE_BUFFER)) return res.status(400).json({
                    response: `Sorry, we couldn't process your file. Please ensure it's a PDF, PNG, or JPG format and doesn't exceed ${NEXT_PUBLIC_MAX_FILE_BUFFER}MB.`
                });
                const linkStillExists = await _lib_api_db__WEBPACK_IMPORTED_MODULE_1__/* .prisma */ ._.link.findUnique({
                    where: {
                        id: linkId
                    }
                });
                if (linkStillExists && files.file[0].mimetype?.includes("image")) {
                    const collectionId = collectionPermissions.id;
                    (0,_lib_api_storage_createFolder__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z)({
                        filePath: `archives/preview/${collectionId}`
                    });
                    (0,_lib_api_generatePreview__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z)(fileBuffer, collectionId, linkId);
                }
                if (linkStillExists) {
                    await (0,_lib_api_storage_createFile__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)({
                        filePath: `archives/${collectionPermissions.id}/${linkId + suffix}`,
                        data: fileBuffer
                    });
                    await _lib_api_db__WEBPACK_IMPORTED_MODULE_1__/* .prisma */ ._.link.update({
                        where: {
                            id: linkId
                        },
                        data: {
                            preview: files.file[0].mimetype?.includes("pdf") ? "unavailable" : undefined,
                            image: files.file[0].mimetype?.includes("image") ? `archives/${collectionPermissions.id}/${linkId + suffix}` : null,
                            pdf: files.file[0].mimetype?.includes("pdf") ? `archives/${collectionPermissions.id}/${linkId + suffix}` : null,
                            lastPreserved: new Date().toISOString()
                        }
                    });
                }
                fs__WEBPACK_IMPORTED_MODULE_7___default().unlinkSync(files.file[0].filepath);
            }
            return res.status(200).json({
                response: files
            });
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
var __webpack_exports__ = __webpack_require__.X(0, [5746,8005,6211,1814,4703,2897], () => (__webpack_exec__(6000)));
module.exports = __webpack_exports__;

})();