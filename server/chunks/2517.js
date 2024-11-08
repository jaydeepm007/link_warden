"use strict";
exports.id = 2517;
exports.ids = [2517];
exports.modules = {

/***/ 2517:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  _: () => (/* binding */ moveFiles),
  c: () => (/* binding */ removeFiles)
});

// EXTERNAL MODULE: external "fs"
var external_fs_ = __webpack_require__(7147);
var external_fs_default = /*#__PURE__*/__webpack_require__.n(external_fs_);
// EXTERNAL MODULE: external "path"
var external_path_ = __webpack_require__(1017);
var external_path_default = /*#__PURE__*/__webpack_require__.n(external_path_);
// EXTERNAL MODULE: ./lib/api/storage/s3Client.ts
var s3Client = __webpack_require__(3473);
// EXTERNAL MODULE: ./lib/api/storage/removeFile.ts
var removeFile = __webpack_require__(9319);
;// CONCATENATED MODULE: ./lib/api/storage/moveFile.ts




async function moveFile(from, to) {
    if (s3Client/* default */.Z) {
        const Bucket = process.env.SPACES_BUCKET_NAME;
        const copyParams = {
            Bucket: Bucket,
            CopySource: `/${Bucket}/${from}`,
            Key: to
        };
        try {
            s3Client/* default */.Z.copyObject(copyParams, async (err)=>{
                if (err) {
                    console.error("Error copying the object:", err);
                } else {
                    await (0,removeFile/* default */.Z)({
                        filePath: from
                    });
                }
            });
        } catch (err) {
            console.log("Error:", err);
        }
    } else {
        const storagePath = process.env.STORAGE_FOLDER || "data";
        const directory = (file)=>external_path_default().join(process.cwd(), storagePath + "/" + file);
        external_fs_default().rename(directory(from), directory(to), (err)=>{
            if (err) console.log("Error copying file:", err);
        });
    }
}

;// CONCATENATED MODULE: ./lib/api/manageLinkFiles.ts


const removeFiles = async (linkId, collectionId)=>{
    // PDF
    await (0,removeFile/* default */.Z)({
        filePath: `archives/${collectionId}/${linkId}.pdf`
    });
    // Images
    await (0,removeFile/* default */.Z)({
        filePath: `archives/${collectionId}/${linkId}.png`
    });
    await (0,removeFile/* default */.Z)({
        filePath: `archives/${collectionId}/${linkId}.jpeg`
    });
    await (0,removeFile/* default */.Z)({
        filePath: `archives/${collectionId}/${linkId}.jpg`
    });
    // HTML
    await (0,removeFile/* default */.Z)({
        filePath: `archives/${collectionId}/${linkId}.html`
    });
    // Preview
    await (0,removeFile/* default */.Z)({
        filePath: `archives/preview/${collectionId}/${linkId}.jpeg`
    });
    // Readability
    await (0,removeFile/* default */.Z)({
        filePath: `archives/${collectionId}/${linkId}_readability.json`
    });
};
const moveFiles = async (linkId, from, to)=>{
    await moveFile(`archives/${from}/${linkId}.pdf`, `archives/${to}/${linkId}.pdf`);
    await moveFile(`archives/${from}/${linkId}.png`, `archives/${to}/${linkId}.png`);
    await moveFile(`archives/${from}/${linkId}.jpeg`, `archives/${to}/${linkId}.jpeg`);
    await moveFile(`archives/${from}/${linkId}.jpg`, `archives/${to}/${linkId}.jpg`);
    await moveFile(`archives/${from}/${linkId}.html`, `archives/${to}/${linkId}.html`);
    await moveFile(`archives/preview/${from}/${linkId}.jpeg`, `archives/preview/${to}/${linkId}.jpeg`);
    await moveFile(`archives/${from}/${linkId}_readability.json`, `archives/${to}/${linkId}_readability.json`);
};



/***/ }),

/***/ 9319:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ removeFile)
/* harmony export */ });
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7147);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1017);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _s3Client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3473);
/* harmony import */ var _aws_sdk_client_s3__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1841);
/* harmony import */ var _aws_sdk_client_s3__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_aws_sdk_client_s3__WEBPACK_IMPORTED_MODULE_3__);




async function removeFile({ filePath }) {
    if (_s3Client__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z) {
        const bucketParams = {
            Bucket: process.env.SPACES_BUCKET_NAME,
            Key: filePath
        };
        try {
            await _s3Client__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z.send(new _aws_sdk_client_s3__WEBPACK_IMPORTED_MODULE_3__.DeleteObjectCommand(bucketParams));
        } catch (err) {
            console.log("Error", err);
        }
    } else {
        const storagePath = process.env.STORAGE_FOLDER || "data";
        const creationPath = path__WEBPACK_IMPORTED_MODULE_1___default().join(process.cwd(), storagePath + "/" + filePath);
        fs__WEBPACK_IMPORTED_MODULE_0___default().unlink(creationPath, (err)=>{
            if (err) console.log(err);
        });
    }
}


/***/ })

};
;