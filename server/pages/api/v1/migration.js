"use strict";
(() => {
var exports = {};
exports.id = 2144;
exports.ids = [2144];
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

/***/ 4773:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ exportData)
/* harmony export */ });
/* harmony import */ var _lib_api_db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3009);

async function exportData(userId) {
    const user = await _lib_api_db__WEBPACK_IMPORTED_MODULE_0__/* .prisma */ ._.user.findUnique({
        where: {
            id: userId
        },
        include: {
            collections: {
                include: {
                    links: {
                        include: {
                            tags: true
                        }
                    }
                }
            },
            pinnedLinks: true,
            whitelistedUsers: true
        }
    });
    if (!user) return {
        response: "User not found.",
        status: 404
    };
    const { password, id, ...userData } = user;
    function redactIds(obj) {
        if (Array.isArray(obj)) {
            obj.forEach((o)=>redactIds(o));
        } else if (obj !== null && typeof obj === "object") {
            delete obj.id;
            for(let key in obj){
                redactIds(obj[key]);
            }
        }
    }
    redactIds(userData);
    return {
        response: userData,
        status: 200
    };
}


/***/ }),

/***/ 2409:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ importFromHTMLFile)
});

// EXTERNAL MODULE: ./lib/api/db.ts
var db = __webpack_require__(3009);
// EXTERNAL MODULE: ./lib/api/storage/createFolder.ts
var createFolder = __webpack_require__(1814);
;// CONCATENATED MODULE: external "jsdom"
const external_jsdom_namespaceObject = require("jsdom");
;// CONCATENATED MODULE: external "himalaya"
const external_himalaya_namespaceObject = require("himalaya");
;// CONCATENATED MODULE: ./lib/api/controllers/migration/importFromHTMLFile.ts




const MAX_LINKS_PER_USER = Number(process.env.MAX_LINKS_PER_USER) || 30000;
async function importFromHTMLFile(userId, rawData) {
    const dom = new external_jsdom_namespaceObject.JSDOM(rawData);
    const document = dom.window.document;
    // remove bad tags
    document.querySelectorAll("meta").forEach((e)=>e.outerHTML = e.innerHTML);
    document.querySelectorAll("META").forEach((e)=>e.outerHTML = e.innerHTML);
    document.querySelectorAll("P").forEach((e)=>e.outerHTML = e.innerHTML);
    const bookmarks = document.querySelectorAll("A");
    const totalImports = bookmarks.length;
    const numberOfLinksTheUserHas = await db/* prisma */._.link.count({
        where: {
            collection: {
                ownerId: userId
            }
        }
    });
    if (totalImports + numberOfLinksTheUserHas > MAX_LINKS_PER_USER) return {
        response: `Each collection owner can only have a maximum of ${MAX_LINKS_PER_USER} Links.`,
        status: 400
    };
    const jsonData = (0,external_himalaya_namespaceObject.parse)(document.documentElement.outerHTML);
    const processedArray = processNodes(jsonData);
    for (const item of processedArray){
        console.log(item);
        await processBookmarks(userId, item);
    }
    return {
        response: "Success.",
        status: 200
    };
}
async function processBookmarks(userId, data, parentCollectionId) {
    if (data.type === "element") {
        for (const item of data.children){
            if (item.type === "element" && item.tagName === "dt") {
                // process collection or sub-collection
                let collectionId;
                const collectionName = item.children.find((e)=>e.type === "element" && e.tagName === "h3");
                if (collectionName) {
                    const collectionNameContent = collectionName.children[0]?.content;
                    if (collectionNameContent) {
                        collectionId = await createCollection(userId, collectionNameContent, parentCollectionId);
                    } else {
                        // Handle the case when the collection name is empty
                        collectionId = await createCollection(userId, "Untitled Collection", parentCollectionId);
                    }
                }
                await processBookmarks(userId, item, collectionId || parentCollectionId);
            } else if (item.type === "element" && item.tagName === "a") {
                // process link
                const linkUrl = item?.attributes.find((e)=>e.key.toLowerCase() === "href")?.value;
                const linkName = (item?.children.find((e)=>e.type === "text"))?.content;
                const linkTags = item?.attributes.find((e)=>e.key === "tags")?.value.split(",");
                // set date if available
                const linkDateValue = item?.attributes.find((e)=>e.key.toLowerCase() === "add_date")?.value;
                const linkDate = linkDateValue ? new Date(Number(linkDateValue) * 1000) : undefined;
                let linkDesc = ((item?.children?.find((e)=>e.type === "element" && e.tagName === "dd"))?.children[0])?.content || "";
                if (linkUrl && parentCollectionId) {
                    await createLink(userId, linkUrl, parentCollectionId, linkName, linkDesc, linkTags, linkDate);
                } else if (linkUrl) {
                    // create a collection named "Imported Bookmarks" and add the link to it
                    const collectionId = await createCollection(userId, "Imports");
                    await createLink(userId, linkUrl, collectionId, linkName, linkDesc, linkTags, linkDate);
                }
                await processBookmarks(userId, item, parentCollectionId);
            } else {
                // process anything else
                await processBookmarks(userId, item, parentCollectionId);
            }
        }
    }
}
const createCollection = async (userId, collectionName, parentId)=>{
    const findCollection = await db/* prisma */._.collection.findFirst({
        where: {
            parentId,
            name: collectionName,
            ownerId: userId
        }
    });
    if (findCollection) {
        return findCollection.id;
    }
    const collectionId = await db/* prisma */._.collection.create({
        data: {
            name: collectionName,
            parent: parentId ? {
                connect: {
                    id: parentId
                }
            } : undefined,
            owner: {
                connect: {
                    id: userId
                }
            }
        }
    });
    (0,createFolder/* default */.Z)({
        filePath: `archives/${collectionId.id}`
    });
    return collectionId.id;
};
const createLink = async (userId, url, collectionId, name, description, tags, importDate)=>{
    await db/* prisma */._.link.create({
        data: {
            name: name || "",
            url,
            description,
            collectionId,
            tags: tags && tags[0] ? {
                connectOrCreate: tags.map((tag)=>{
                    return {
                        where: {
                            name_ownerId: {
                                name: tag.trim(),
                                ownerId: userId
                            }
                        },
                        create: {
                            name: tag.trim(),
                            owner: {
                                connect: {
                                    id: userId
                                }
                            }
                        }
                    } || undefined;
                })
            } : undefined,
            importDate: importDate || undefined
        }
    });
};
function processNodes(nodes) {
    const findAndProcessDL = (node)=>{
        if (node.type === "element" && node.tagName === "dl") {
            processDLChildren(node);
        } else if (node.type === "element" && node.children && node.children.length) {
            node.children.forEach((child)=>findAndProcessDL(child));
        }
    };
    const processDLChildren = (dlNode)=>{
        dlNode.children.forEach((child, i)=>{
            if (child.type === "element" && child.tagName === "dt") {
                const nextSibling = dlNode.children[i + 1];
                if (nextSibling && nextSibling.type === "element" && nextSibling.tagName === "dd") {
                    const aElement = child.children.find((el)=>el.type === "element" && el.tagName === "a");
                    if (aElement && aElement.type === "element") {
                        // Add the 'dd' element as a child of the 'a' element
                        aElement.children.push(nextSibling);
                        // Remove the 'dd' from the parent 'dl' to avoid duplicate processing
                        dlNode.children.splice(i + 1, 1);
                    // Adjust the loop counter due to the removal
                    }
                }
            }
        });
    };
    nodes.forEach(findAndProcessDL);
    return nodes;
}


/***/ }),

/***/ 2551:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ importFromLinkwarden)
/* harmony export */ });
/* harmony import */ var _lib_api_db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3009);
/* harmony import */ var _lib_api_storage_createFolder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1814);


const MAX_LINKS_PER_USER = Number(process.env.MAX_LINKS_PER_USER) || 30000;
async function importFromLinkwarden(userId, rawData) {
    const data = JSON.parse(rawData);
    let totalImports = 0;
    data.collections.forEach((collection)=>{
        totalImports += collection.links.length;
    });
    const numberOfLinksTheUserHas = await _lib_api_db__WEBPACK_IMPORTED_MODULE_0__/* .prisma */ ._.link.count({
        where: {
            collection: {
                ownerId: userId
            }
        }
    });
    if (totalImports + numberOfLinksTheUserHas > MAX_LINKS_PER_USER) return {
        response: `Each collection owner can only have a maximum of ${MAX_LINKS_PER_USER} Links.`,
        status: 400
    };
    await _lib_api_db__WEBPACK_IMPORTED_MODULE_0__/* .prisma */ ._.$transaction(async ()=>{
        // Import collections
        for (const e of data.collections){
            e.name = e.name.trim();
            const newCollection = await _lib_api_db__WEBPACK_IMPORTED_MODULE_0__/* .prisma */ ._.collection.create({
                data: {
                    owner: {
                        connect: {
                            id: userId
                        }
                    },
                    name: e.name,
                    description: e.description,
                    color: e.color
                }
            });
            (0,_lib_api_storage_createFolder__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)({
                filePath: `archives/${newCollection.id}`
            });
            // Import Links
            for (const link of e.links){
                await _lib_api_db__WEBPACK_IMPORTED_MODULE_0__/* .prisma */ ._.link.create({
                    data: {
                        url: link.url,
                        name: link.name,
                        description: link.description,
                        collection: {
                            connect: {
                                id: newCollection.id
                            }
                        },
                        // Import Tags
                        tags: {
                            connectOrCreate: link.tags.map((tag)=>({
                                    where: {
                                        name_ownerId: {
                                            name: tag.name.trim(),
                                            ownerId: userId
                                        }
                                    },
                                    create: {
                                        name: tag.name.trim(),
                                        owner: {
                                            connect: {
                                                id: userId
                                            }
                                        }
                                    }
                                }))
                        }
                    }
                });
            }
        }
    }, {
        timeout: 30000
    }).catch((err)=>console.log(err));
    return {
        response: "Success.",
        status: 200
    };
}


/***/ }),

/***/ 1474:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ importFromWallabag)
/* harmony export */ });
/* harmony import */ var _lib_api_db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3009);
/* harmony import */ var _lib_api_storage_createFolder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1814);


const MAX_LINKS_PER_USER = Number(process.env.MAX_LINKS_PER_USER) || 30000;
async function importFromWallabag(userId, rawData) {
    const data = JSON.parse(rawData);
    const backup = data.filter((e)=>e.url);
    let totalImports = backup.length;
    const numberOfLinksTheUserHas = await _lib_api_db__WEBPACK_IMPORTED_MODULE_0__/* .prisma */ ._.link.count({
        where: {
            collection: {
                ownerId: userId
            }
        }
    });
    if (totalImports + numberOfLinksTheUserHas > MAX_LINKS_PER_USER) return {
        response: `Each collection owner can only have a maximum of ${MAX_LINKS_PER_USER} Links.`,
        status: 400
    };
    await _lib_api_db__WEBPACK_IMPORTED_MODULE_0__/* .prisma */ ._.$transaction(async ()=>{
        const newCollection = await _lib_api_db__WEBPACK_IMPORTED_MODULE_0__/* .prisma */ ._.collection.create({
            data: {
                owner: {
                    connect: {
                        id: userId
                    }
                },
                name: "Imports"
            }
        });
        (0,_lib_api_storage_createFolder__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)({
            filePath: `archives/${newCollection.id}`
        });
        for (const link of backup){
            await _lib_api_db__WEBPACK_IMPORTED_MODULE_0__/* .prisma */ ._.link.create({
                data: {
                    pinnedBy: link.is_starred ? {
                        connect: {
                            id: userId
                        }
                    } : undefined,
                    url: link.url,
                    name: link.title || "",
                    textContent: link.content || "",
                    importDate: link.created_at || null,
                    collection: {
                        connect: {
                            id: newCollection.id
                        }
                    },
                    tags: link.tags && link.tags[0] ? {
                        connectOrCreate: link.tags.map((tag)=>({
                                where: {
                                    name_ownerId: {
                                        name: tag.trim(),
                                        ownerId: userId
                                    }
                                },
                                create: {
                                    name: tag.trim(),
                                    owner: {
                                        connect: {
                                            id: userId
                                        }
                                    }
                                }
                            }))
                    } : undefined
                }
            });
        }
    }, {
        timeout: 30000
    }).catch((err)=>console.log(err));
    return {
        response: "Success.",
        status: 200
    };
}


/***/ }),

/***/ 4637:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   config: () => (/* binding */ config),
/* harmony export */   "default": () => (/* binding */ users)
/* harmony export */ });
/* harmony import */ var _lib_api_controllers_migration_exportData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4773);
/* harmony import */ var _lib_api_controllers_migration_importFromHTMLFile__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2409);
/* harmony import */ var _lib_api_controllers_migration_importFromLinkwarden__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2551);
/* harmony import */ var _types_global__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6211);
/* harmony import */ var _lib_api_verifyUser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8005);
/* harmony import */ var _lib_api_controllers_migration_importFromWallabag__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1474);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_lib_api_verifyUser__WEBPACK_IMPORTED_MODULE_4__]);
_lib_api_verifyUser__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






const config = {
    api: {
        bodyParser: {
            sizeLimit: process.env.IMPORT_LIMIT ? process.env.IMPORT_LIMIT + "mb" : "200mb"
        }
    }
};
async function users(req, res) {
    const user = await (0,_lib_api_verifyUser__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)({
        req,
        res
    });
    if (!user) return;
    if (req.method === "GET") {
        const data = await (0,_lib_api_controllers_migration_exportData__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(user.id);
        if (data.status === 200) return res.setHeader("Content-Type", "application/json").setHeader("Content-Disposition", "attachment; filename=backup.json").status(data.status).json(data.response);
    } else if (req.method === "POST") {
        if (false) {}
        const request = JSON.parse(req.body);
        let data;
        if (request.format === _types_global__WEBPACK_IMPORTED_MODULE_3__/* .MigrationFormat */ .en.htmlFile) data = await (0,_lib_api_controllers_migration_importFromHTMLFile__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(user.id, request.data);
        else if (request.format === _types_global__WEBPACK_IMPORTED_MODULE_3__/* .MigrationFormat */ .en.linkwarden) data = await (0,_lib_api_controllers_migration_importFromLinkwarden__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(user.id, request.data);
        else if (request.format === _types_global__WEBPACK_IMPORTED_MODULE_3__/* .MigrationFormat */ .en.wallabag) data = await (0,_lib_api_controllers_migration_importFromWallabag__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)(user.id, request.data);
        if (data) return res.status(data.status).json({
            response: data.response
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
var __webpack_exports__ = __webpack_require__.X(0, [5746,8005,6211,1814], () => (__webpack_exec__(4637)));
module.exports = __webpack_exports__;

})();