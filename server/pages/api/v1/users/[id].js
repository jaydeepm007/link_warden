"use strict";
(() => {
var exports = {};
exports.id = 3319;
exports.ids = [3319];
exports.modules = {

/***/ 1841:
/***/ ((module) => {

module.exports = require("@aws-sdk/client-s3");

/***/ }),

/***/ 3524:
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ 7096:
/***/ ((module) => {

module.exports = require("bcrypt");

/***/ }),

/***/ 2097:
/***/ ((module) => {

module.exports = require("handlebars");

/***/ }),

/***/ 614:
/***/ ((module) => {

module.exports = require("next-auth/jwt");

/***/ }),

/***/ 6090:
/***/ ((module) => {

module.exports = import("stripe");;

/***/ }),

/***/ 6113:
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ 7147:
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ 1017:
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ 3545:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ deleteUserById)
/* harmony export */ });
/* harmony import */ var _lib_api_db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3009);
/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7096);
/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bcrypt__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_api_storage_removeFolder__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4472);
/* harmony import */ var stripe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6090);
/* harmony import */ var _lib_api_storage_removeFile__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9319);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([stripe__WEBPACK_IMPORTED_MODULE_3__]);
stripe__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





async function deleteUserById(userId, body, isServerAdmin) {
    // First, we retrieve the user from the database
    const user = await _lib_api_db__WEBPACK_IMPORTED_MODULE_0__/* .prisma */ ._.user.findUnique({
        where: {
            id: userId
        }
    });
    if (!user) {
        return {
            response: "Invalid credentials.",
            status: 404
        };
    }
    if (!isServerAdmin) {
        if (user.password) {
            const isPasswordValid = bcrypt__WEBPACK_IMPORTED_MODULE_1___default().compareSync(body.password, user.password);
            if (!isPasswordValid && !isServerAdmin) {
                return {
                    response: "Invalid credentials.",
                    status: 401
                };
            }
        } else {
            return {
                response: "User has no password. Please reset your password from the forgot password page.",
                status: 401
            };
        }
    }
    // Delete the user and all related data within a transaction
    await _lib_api_db__WEBPACK_IMPORTED_MODULE_0__/* .prisma */ ._.$transaction(async (prisma)=>{
        // Delete Access Tokens
        await prisma.accessToken.deleteMany({
            where: {
                userId
            }
        });
        // Delete whitelisted users
        await prisma.whitelistedUser.deleteMany({
            where: {
                userId
            }
        });
        // Delete links
        await prisma.link.deleteMany({
            where: {
                collection: {
                    ownerId: userId
                }
            }
        });
        // Delete tags
        await prisma.tag.deleteMany({
            where: {
                ownerId: userId
            }
        });
        // Find collections that the user owns
        const collections = await prisma.collection.findMany({
            where: {
                ownerId: userId
            }
        });
        for (const collection of collections){
            // Delete related users and collections relations
            await prisma.usersAndCollections.deleteMany({
                where: {
                    collectionId: collection.id
                }
            });
            // Delete archive folders
            await (0,_lib_api_storage_removeFolder__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)({
                filePath: `archives/${collection.id}`
            });
            await (0,_lib_api_storage_removeFolder__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)({
                filePath: `archives/preview/${collection.id}`
            });
        }
        // Delete collections after cleaning up related data
        await prisma.collection.deleteMany({
            where: {
                ownerId: userId
            }
        });
        // Delete subscription
        if (process.env.STRIPE_SECRET_KEY) await prisma.subscription.delete({
            where: {
                userId
            }
        }).catch((err)=>console.log(err));
        await prisma.usersAndCollections.deleteMany({
            where: {
                OR: [
                    {
                        userId: userId
                    },
                    {
                        collection: {
                            ownerId: userId
                        }
                    }
                ]
            }
        });
        // Delete user's avatar
        await (0,_lib_api_storage_removeFile__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)({
            filePath: `uploads/avatar/${userId}.jpg`
        });
        // Finally, delete the user
        await prisma.user.delete({
            where: {
                id: userId
            }
        });
    }, {
        timeout: 20000
    }).catch((err)=>console.log(err));
    if (process.env.STRIPE_SECRET_KEY) {
        const stripe = new stripe__WEBPACK_IMPORTED_MODULE_3__["default"](process.env.STRIPE_SECRET_KEY, {
            apiVersion: "2022-11-15"
        });
        try {
            const listByEmail = await stripe.customers.list({
                email: user.email?.toLowerCase(),
                expand: [
                    "data.subscriptions"
                ]
            });
            if (listByEmail.data[0].subscriptions?.data[0].id) {
                const deleted = await stripe.subscriptions.cancel(listByEmail.data[0].subscriptions?.data[0].id, {
                    cancellation_details: {
                        comment: body.cancellation_details?.comment,
                        feedback: body.cancellation_details?.feedback
                    }
                });
                return {
                    response: deleted,
                    status: 200
                };
            }
        } catch (err) {
            console.log(err);
        }
    }
    return {
        response: "User account and all related data deleted successfully.",
        status: 200
    };
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 793:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ getUserById)
/* harmony export */ });
/* harmony import */ var _lib_api_db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3009);

async function getUserById(userId) {
    const user = await _lib_api_db__WEBPACK_IMPORTED_MODULE_0__/* .prisma */ ._.user.findUnique({
        where: {
            id: userId
        },
        include: {
            whitelistedUsers: {
                select: {
                    username: true
                }
            },
            subscriptions: true
        }
    });
    if (!user) return {
        response: "User not found or profile is private.",
        status: 404
    };
    const whitelistedUsernames = user.whitelistedUsers?.map((usernames)=>usernames.username);
    const { password, subscriptions, ...lessSensitiveInfo } = user;
    const data = {
        ...lessSensitiveInfo,
        whitelistedUsers: whitelistedUsernames,
        subscription: {
            active: subscriptions?.active
        }
    };
    return {
        response: data,
        status: 200
    };
}


/***/ }),

/***/ 7778:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ updateUserById)
});

// EXTERNAL MODULE: ./lib/api/db.ts
var db = __webpack_require__(3009);
// EXTERNAL MODULE: external "bcrypt"
var external_bcrypt_ = __webpack_require__(7096);
var external_bcrypt_default = /*#__PURE__*/__webpack_require__.n(external_bcrypt_);
// EXTERNAL MODULE: ./lib/api/storage/removeFile.ts
var removeFile = __webpack_require__(9319);
// EXTERNAL MODULE: ./lib/api/storage/createFile.ts
var createFile = __webpack_require__(7407);
// EXTERNAL MODULE: ./lib/api/storage/createFolder.ts
var createFolder = __webpack_require__(1814);
// EXTERNAL MODULE: external "crypto"
var external_crypto_ = __webpack_require__(6113);
// EXTERNAL MODULE: ./lib/api/transporter.ts + 1 modules
var transporter = __webpack_require__(4839);
// EXTERNAL MODULE: external "handlebars"
var external_handlebars_ = __webpack_require__(2097);
var external_handlebars_default = /*#__PURE__*/__webpack_require__.n(external_handlebars_);
// EXTERNAL MODULE: external "fs"
var external_fs_ = __webpack_require__(7147);
// EXTERNAL MODULE: external "path"
var external_path_ = __webpack_require__(1017);
var external_path_default = /*#__PURE__*/__webpack_require__.n(external_path_);
;// CONCATENATED MODULE: ./lib/api/sendChangeEmailVerificationRequest.ts






async function sendChangeEmailVerificationRequest(oldEmail, newEmail, user) {
    const token = (0,external_crypto_.randomBytes)(32).toString("hex");
    await db/* prisma */._.$transaction(async ()=>{
        await db/* prisma */._.verificationToken.create({
            data: {
                identifier: oldEmail?.toLowerCase(),
                token,
                expires: new Date(Date.now() + 24 * 3600 * 1000)
            }
        });
        await db/* prisma */._.user.update({
            where: {
                email: oldEmail?.toLowerCase()
            },
            data: {
                unverifiedNewEmail: newEmail?.toLowerCase()
            }
        });
    });
    const emailsDir = external_path_default().resolve(process.cwd(), "templates");
    const templateFile = (0,external_fs_.readFileSync)(external_path_default().join(emailsDir, "verifyEmailChange.html"), "utf8");
    const emailTemplate = external_handlebars_default().compile(templateFile);
    transporter/* default */.Z.sendMail({
        from: {
            name: "Linkwarden",
            address: process.env.EMAIL_FROM
        },
        to: newEmail,
        subject: "Verify your new Linkwarden email address",
        html: emailTemplate({
            user,
            baseUrl: process.env.BASE_URL,
            oldEmail,
            newEmail,
            verifyUrl: `${process.env.BASE_URL}/auth/verify-email?token=${token}`
        })
    });
}

// EXTERNAL MODULE: ./next-i18next.config.js
var next_i18next_config = __webpack_require__(9118);
;// CONCATENATED MODULE: ./lib/api/controllers/users/userId/updateUserById.ts







const emailEnabled = process.env.EMAIL_FROM && process.env.EMAIL_SERVER ? true : false;
async function updateUserById(userId, data) {
    if (emailEnabled && !data.email) return {
        response: "Email invalid.",
        status: 400
    };
    else if (!data.username) return {
        response: "Username invalid.",
        status: 400
    };
    // Check email (if enabled)
    const checkEmail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (emailEnabled && !checkEmail.test(data.email?.toLowerCase() || "")) return {
        response: "Please enter a valid email.",
        status: 400
    };
    const checkUsername = RegExp("^[a-z0-9_-]{3,31}$");
    if (!checkUsername.test(data.username.toLowerCase())) return {
        response: "Username has to be between 3-30 characters, no spaces and special characters are allowed.",
        status: 400
    };
    const userIsTaken = await db/* prisma */._.user.findFirst({
        where: {
            id: {
                not: userId
            },
            OR: emailEnabled ? [
                {
                    username: data.username.toLowerCase()
                },
                {
                    email: data.email?.toLowerCase()
                }
            ] : [
                {
                    username: data.username.toLowerCase()
                }
            ]
        }
    });
    if (userIsTaken) {
        if (data.email?.toLowerCase().trim() === userIsTaken.email?.trim()) return {
            response: "Email is taken.",
            status: 400
        };
        else if (data.username?.toLowerCase().trim() === userIsTaken.username?.trim()) return {
            response: "Username is taken.",
            status: 400
        };
        return {
            response: "Username/Email is taken.",
            status: 400
        };
    }
    // Avatar Settings
    if (data.image?.startsWith("data:image/jpeg;base64") && data.image.length < 1572864) {
        try {
            const base64Data = data.image.replace(/^data:image\/jpeg;base64,/, "");
            (0,createFolder/* default */.Z)({
                filePath: `uploads/avatar`
            });
            await (0,createFile/* default */.Z)({
                filePath: `uploads/avatar/${userId}.jpg`,
                data: base64Data,
                isBase64: true
            });
        } catch (err) {
            console.log("Error saving image:", err);
        }
    } else if (data.image?.length && data.image?.length >= 1572864) {
        console.log("A file larger than 1.5MB was uploaded.");
        return {
            response: "A file larger than 1.5MB was uploaded.",
            status: 400
        };
    } else if (data.image == "") {
        (0,removeFile/* default */.Z)({
            filePath: `uploads/avatar/${userId}.jpg`
        });
    }
    // Email Settings
    const user = await db/* prisma */._.user.findUnique({
        where: {
            id: userId
        },
        select: {
            email: true,
            password: true
        }
    });
    if (user && user.email && data.email && data.email !== user.email) {
        if (!data.password) {
            return {
                response: "Invalid password.",
                status: 400
            };
        }
        // Verify password
        if (!user.password) {
            return {
                response: "User has no password. Please reset your password from the forgot password page.",
                status: 400
            };
        }
        const passwordMatch = external_bcrypt_default().compareSync(data.password, user.password);
        if (!passwordMatch) {
            return {
                response: "Password is incorrect.",
                status: 400
            };
        }
        sendChangeEmailVerificationRequest(user.email, data.email, data.name.trim());
    }
    // Password Settings
    if (data.newPassword || data.oldPassword) {
        if (!data.oldPassword || !data.newPassword) return {
            response: "Please fill out all the fields.",
            status: 400
        };
        else if (!user?.password) return {
            response: "User has no password. Please reset your password from the forgot password page.",
            status: 400
        };
        else if (!external_bcrypt_default().compareSync(data.oldPassword, user.password)) return {
            response: "Old password is incorrect.",
            status: 400
        };
        else if (data.newPassword?.length < 8) return {
            response: "Password must be at least 8 characters.",
            status: 400
        };
        else if (data.newPassword === data.oldPassword) return {
            response: "New password must be different from the old password.",
            status: 400
        };
    }
    // Other settings / Apply changes
    const saltRounds = 10;
    const newHashedPassword = external_bcrypt_default().hashSync(data.newPassword || "", saltRounds);
    const updatedUser = await db/* prisma */._.user.update({
        where: {
            id: userId
        },
        data: {
            name: data.name.trim(),
            username: data.username?.toLowerCase().trim(),
            isPrivate: data.isPrivate,
            image: data.image && data.image.startsWith("http") ? data.image : data.image ? `uploads/avatar/${userId}.jpg` : "",
            collectionOrder: data.collectionOrder.filter((value, index, self)=>self.indexOf(value) === index),
            locale: next_i18next_config.i18n.locales.includes(data.locale) ? data.locale : "en",
            archiveAsScreenshot: data.archiveAsScreenshot,
            archiveAsMonolith: data.archiveAsMonolith,
            archiveAsPDF: data.archiveAsPDF,
            archiveAsWaybackMachine: data.archiveAsWaybackMachine,
            linksRouteTo: data.linksRouteTo,
            preventDuplicateLinks: data.preventDuplicateLinks,
            password: data.newPassword && data.newPassword !== "" ? newHashedPassword : undefined
        },
        include: {
            whitelistedUsers: true,
            subscriptions: true
        }
    });
    const { whitelistedUsers, password, subscriptions, ...userInfo } = updatedUser;
    // If user.whitelistedUsers is not provided, we will assume the whitelistedUsers should be removed
    const newWhitelistedUsernames = data.whitelistedUsers || [];
    // Get the current whitelisted usernames
    const currentWhitelistedUsernames = whitelistedUsers.map((data)=>data.username);
    // Find the usernames to be deleted (present in current but not in new)
    const usernamesToDelete = currentWhitelistedUsernames.filter((username)=>!newWhitelistedUsernames.includes(username));
    // Find the usernames to be created (present in new but not in current)
    const usernamesToCreate = newWhitelistedUsernames.filter((username)=>!currentWhitelistedUsernames.includes(username) && username.trim() !== "");
    // Delete whitelistedUsers that are not present in the new list
    await db/* prisma */._.whitelistedUser.deleteMany({
        where: {
            userId: userId,
            username: {
                in: usernamesToDelete
            }
        }
    });
    // Create new whitelistedUsers that are not in the current list, no create many ;(
    for (const username of usernamesToCreate){
        await db/* prisma */._.whitelistedUser.create({
            data: {
                username,
                userId: userId
            }
        });
    }
    const response = {
        ...userInfo,
        whitelistedUsers: newWhitelistedUsernames,
        image: userInfo.image ? `${userInfo.image}?${Date.now()}` : "",
        subscription: {
            active: subscriptions?.active
        }
    };
    return {
        response,
        status: 200
    };
}


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


/***/ }),

/***/ 4839:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ transporter)
});

;// CONCATENATED MODULE: external "nodemailer"
const external_nodemailer_namespaceObject = require("nodemailer");
;// CONCATENATED MODULE: ./lib/api/transporter.ts

/* harmony default export */ const transporter = ((0,external_nodemailer_namespaceObject.createTransport)({
    url: process.env.EMAIL_SERVER,
    auth: {
        user: process.env.EMAIL_FROM
    }
}));


/***/ }),

/***/ 5192:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ verifyToken)
/* harmony export */ });
/* harmony import */ var next_auth_jwt__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(614);
/* harmony import */ var next_auth_jwt__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth_jwt__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _db__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3009);


async function verifyToken({ req }) {
    const token = await (0,next_auth_jwt__WEBPACK_IMPORTED_MODULE_0__.getToken)({
        req
    });
    const userId = token?.id;
    if (!userId) {
        return "You must be logged in.";
    }
    if (token.exp < Date.now() / 1000) {
        return "Your session has expired, please log in again.";
    }
    // check if token is revoked
    const revoked = await _db__WEBPACK_IMPORTED_MODULE_1__/* .prisma */ ._.accessToken.findFirst({
        where: {
            token: token.jti,
            revoked: true
        }
    });
    if (revoked) {
        return "Your session has expired, please log in again.";
    }
    return token;
}


/***/ }),

/***/ 9118:
/***/ ((module) => {

/** @type {import('next-i18next').UserConfig} */ 
module.exports = {
    i18n: {
        defaultLocale: "en",
        locales: [
            "en",
            "it",
            "fr",
            "zh"
        ]
    },
    reloadOnPrerender: "production" === "development"
};


/***/ }),

/***/ 465:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ users)
/* harmony export */ });
/* harmony import */ var _lib_api_controllers_users_userId_getUserById__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(793);
/* harmony import */ var _lib_api_controllers_users_userId_updateUserById__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7778);
/* harmony import */ var _lib_api_controllers_users_userId_deleteUserById__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3545);
/* harmony import */ var _lib_api_db__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3009);
/* harmony import */ var _lib_api_verifySubscription__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5746);
/* harmony import */ var _lib_api_verifyToken__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5192);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_lib_api_controllers_users_userId_deleteUserById__WEBPACK_IMPORTED_MODULE_2__, _lib_api_verifySubscription__WEBPACK_IMPORTED_MODULE_4__]);
([_lib_api_controllers_users_userId_deleteUserById__WEBPACK_IMPORTED_MODULE_2__, _lib_api_verifySubscription__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






const STRIPE_SECRET_KEY = process.env.STRIPE_SECRET_KEY;
async function users(req, res) {
    const token = await (0,_lib_api_verifyToken__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)({
        req
    });
    if (typeof token === "string") {
        res.status(401).json({
            response: token
        });
        return null;
    }
    const user = await _lib_api_db__WEBPACK_IMPORTED_MODULE_3__/* .prisma */ ._.user.findUnique({
        where: {
            id: token?.id
        }
    });
    const isServerAdmin = user?.id === Number( false || 1);
    const userId = isServerAdmin ? Number(req.query.id) : token.id;
    if (userId !== Number(req.query.id) && !isServerAdmin) return res.status(401).json({
        response: "Permission denied."
    });
    if (req.method === "GET") {
        const users = await (0,_lib_api_controllers_users_userId_getUserById__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(userId);
        return res.status(users.status).json({
            response: users.response
        });
    }
    if (STRIPE_SECRET_KEY) {
        const user = await _lib_api_db__WEBPACK_IMPORTED_MODULE_3__/* .prisma */ ._.user.findUnique({
            where: {
                id: token.id
            },
            include: {
                subscriptions: true
            }
        });
        if (user) {
            const subscribedUser = await (0,_lib_api_verifySubscription__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(user);
            if (!subscribedUser) {
                return res.status(401).json({
                    response: "You are not a subscriber, feel free to reach out to us at support@linkwarden.app if you think this is an issue."
                });
            }
        } else {
            return res.status(404).json({
                response: "User not found."
            });
        }
    }
    if (req.method === "PUT") {
        if (false) {}
        const updated = await (0,_lib_api_controllers_users_userId_updateUserById__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(userId, req.body);
        return res.status(updated.status).json({
            response: updated.response
        });
    } else if (req.method === "DELETE") {
        if (false) {}
        const updated = await (0,_lib_api_controllers_users_userId_deleteUserById__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(userId, req.body, isServerAdmin);
        return res.status(updated.status).json({
            response: updated.response
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
var __webpack_exports__ = __webpack_require__.X(0, [5746,1814,4472], () => (__webpack_exec__(465)));
module.exports = __webpack_exports__;

})();