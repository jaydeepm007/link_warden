"use strict";
exports.id = 2897;
exports.ids = [2897];
exports.modules = {

/***/ 2897:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ readFile)
/* harmony export */ });
/* harmony import */ var _aws_sdk_client_s3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1841);
/* harmony import */ var _aws_sdk_client_s3__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_aws_sdk_client_s3__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7147);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1017);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _s3Client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3473);
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3837);
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_4__);





async function readFile(filePath) {
    let contentType;
    if (_s3Client__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z) {
        const bucketParams = {
            Bucket: process.env.SPACES_BUCKET_NAME,
            Key: filePath
        };
        try {
            let returnObject;
            const headObjectAsync = util__WEBPACK_IMPORTED_MODULE_4___default().promisify(_s3Client__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z.headObject.bind(_s3Client__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z));
            try {
                await headObjectAsync(bucketParams);
            } catch (err) {
                contentType = "text/plain";
                returnObject = {
                    file: "File not found.",
                    contentType,
                    status: 400
                };
            }
            if (!returnObject) {
                const response = await _s3Client__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z.send(new _aws_sdk_client_s3__WEBPACK_IMPORTED_MODULE_0__.GetObjectCommand(bucketParams));
                const data = await streamToBuffer(response.Body);
                if (filePath.endsWith(".pdf")) {
                    contentType = "application/pdf";
                } else if (filePath.endsWith(".png")) {
                    contentType = "image/png";
                } else if (filePath.endsWith("_readability.json")) {
                    contentType = "application/json";
                } else if (filePath.endsWith(".html")) {
                    contentType = "text/html";
                } else {
                    // if (filePath.endsWith(".jpg"))
                    contentType = "image/jpeg";
                }
                returnObject = {
                    file: data,
                    contentType,
                    status: 200
                };
            }
            return returnObject;
        } catch (err) {
            console.log("Error:", err);
            contentType = "text/plain";
            return {
                file: "An internal occurred, please contact the support team.",
                contentType
            };
        }
    } else {
        const storagePath = process.env.STORAGE_FOLDER || "data";
        const creationPath = path__WEBPACK_IMPORTED_MODULE_2___default().join(process.cwd(), storagePath + "/" + filePath);
        if (filePath.endsWith(".pdf")) {
            contentType = "application/pdf";
        } else if (filePath.endsWith(".png")) {
            contentType = "image/png";
        } else if (filePath.endsWith("_readability.json")) {
            contentType = "application/json";
        } else if (filePath.endsWith(".html")) {
            contentType = "text/html";
        } else {
            // if (filePath.endsWith(".jpg"))
            contentType = "image/jpeg";
        }
        if (!fs__WEBPACK_IMPORTED_MODULE_1___default().existsSync(creationPath)) return {
            file: "File not found.",
            contentType: "text/plain",
            status: 404
        };
        else {
            const file = fs__WEBPACK_IMPORTED_MODULE_1___default().readFileSync(creationPath);
            return {
                file,
                contentType,
                status: 200
            };
        }
    }
}
// Turn the file's body into buffer
const streamToBuffer = (stream)=>{
    const chunks = [];
    return new Promise((resolve, reject)=>{
        stream.on("data", (chunk)=>chunks.push(Buffer.from(chunk)));
        stream.on("error", (err)=>reject(err));
        stream.on("end", ()=>resolve(Buffer.concat(chunks)));
    });
};
const fileNotFoundTemplate = (/* unused pure expression or super */ null && (`<!DOCTYPE html>
                              <html lang="en">
                              <head>
                                <meta charset="UTF-8">
                                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                                <title>File not found</title>
                              </head>
                              <body style="margin-left: auto; margin-right: auto; max-width: 500px; padding: 1rem; font-family: sans-serif; background-color: rgb(251, 251, 251);">
                                <h1>File not found</h1>
                                <h2>It is possible that the file you're looking for either doesn't exist or hasn't been created yet.</h2>
                                <h3>Some possible reasons are:</h3>
                                <ul>
                                  <li>You are trying to access a file too early, before it has been fully archived. If that's the case, refreshing the page might resolve the issue.</li>
                                  <li>The file doesn't exist either because it encountered an error while being archived, or it simply doesn't exist.</li>
                                </ul>
                              </body>
                              </html>`));


/***/ })

};
;