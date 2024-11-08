"use strict";
exports.id = 1814;
exports.ids = [1814];
exports.modules = {

/***/ 1814:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ createFolder)
/* harmony export */ });
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7147);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1017);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _s3Client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3473);



function createFolder({ filePath }) {
    if (_s3Client__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z) {
    // Do nothing, S3 creates directories recursively
    } else {
        const storagePath = process.env.STORAGE_FOLDER || "data";
        const creationPath = path__WEBPACK_IMPORTED_MODULE_1___default().join(process.cwd(), storagePath + "/" + filePath);
        fs__WEBPACK_IMPORTED_MODULE_0___default().mkdirSync(creationPath, {
            recursive: true
        });
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


/***/ })

};
;