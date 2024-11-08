"use strict";
exports.id = 4472;
exports.ids = [4472];
exports.modules = {

/***/ 4472:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ removeFolder)
/* harmony export */ });
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7147);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1017);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _s3Client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3473);
/* harmony import */ var _aws_sdk_client_s3__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1841);
/* harmony import */ var _aws_sdk_client_s3__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_aws_sdk_client_s3__WEBPACK_IMPORTED_MODULE_3__);




async function emptyS3Directory(bucket, dir) {
    if (_s3Client__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z) {
        const listParams = {
            Bucket: bucket,
            Prefix: dir
        };
        const deleteParams = {
            Bucket: bucket,
            Delete: {
                Objects: []
            }
        };
        const listedObjects = await _s3Client__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z.send(new _aws_sdk_client_s3__WEBPACK_IMPORTED_MODULE_3__.ListObjectsCommand(listParams));
        if (listedObjects.Contents?.length === 0) return;
        listedObjects.Contents?.forEach(({ Key })=>{
            deleteParams.Delete?.Objects?.push({
                Key
            });
        });
        console.log(listedObjects);
        await _s3Client__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z.send(new _aws_sdk_client_s3__WEBPACK_IMPORTED_MODULE_3__.DeleteObjectsCommand(deleteParams));
        if (listedObjects.IsTruncated) await emptyS3Directory(bucket, dir);
    }
}
async function removeFolder({ filePath }) {
    if (_s3Client__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z) {
        try {
            await emptyS3Directory(process.env.SPACES_BUCKET_NAME, filePath);
        } catch (err) {
            console.log("Error", err);
        }
    } else {
        const storagePath = process.env.STORAGE_FOLDER || "data";
        const creationPath = path__WEBPACK_IMPORTED_MODULE_1___default().join(process.cwd(), storagePath + "/" + filePath);
        try {
            fs__WEBPACK_IMPORTED_MODULE_0___default().rmdirSync(creationPath, {
                recursive: true
            });
        } catch (error) {
            console.log("Collection's archive directory wasn't deleted most likely because it didn't exist...");
        }
    }
}


/***/ })

};
;