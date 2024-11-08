"use strict";
(() => {
var exports = {};
exports.id = 4316;
exports.ids = [4316];
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

/***/ 9105:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ deleteLinksById)
/* harmony export */ });
/* harmony import */ var _lib_api_db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3009);
/* harmony import */ var _lib_api_getPermission__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4703);
/* harmony import */ var _lib_api_manageLinkFiles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2517);



async function deleteLinksById(userId, linkIds) {
    if (!linkIds || linkIds.length === 0) {
        return {
            response: "Please choose valid links.",
            status: 401
        };
    }
    const collectionIsAccessibleArray = [];
    // Check if the user has access to the collection of each link
    // if any of the links are not accessible, return an error
    // if all links are accessible, continue with the deletion
    // and add the collection to the collectionIsAccessibleArray
    for (const linkId of linkIds){
        const collectionIsAccessible = await (0,_lib_api_getPermission__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)({
            userId,
            linkId
        });
        const memberHasAccess = collectionIsAccessible?.members.some((e)=>e.userId === userId && e.canDelete);
        if (!(collectionIsAccessible?.ownerId === userId || memberHasAccess)) {
            return {
                response: "Collection is not accessible.",
                status: 401
            };
        }
        collectionIsAccessibleArray.push(collectionIsAccessible);
    }
    const deletedLinks = await _lib_api_db__WEBPACK_IMPORTED_MODULE_0__/* .prisma */ ._.link.deleteMany({
        where: {
            id: {
                in: linkIds
            }
        }
    });
    // Loop through each link and delete the associated files
    // if the user has access to the collection
    for(let i = 0; i < linkIds.length; i++){
        const linkId = linkIds[i];
        const collectionIsAccessible = collectionIsAccessibleArray[i];
        if (collectionIsAccessible) (0,_lib_api_manageLinkFiles__WEBPACK_IMPORTED_MODULE_2__/* .removeFiles */ .c)(linkId, collectionIsAccessible.id);
    }
    return {
        response: deletedLinks,
        status: 200
    };
}


/***/ }),

/***/ 1663:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ updateLinks)
/* harmony export */ });
/* harmony import */ var _linkId_updateLinkById__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6524);

async function updateLinks(userId, links, removePreviousTags, newData) {
    let allUpdatesSuccessful = true;
    // Have to use a loop here rather than updateMany, see the following:
    // https://github.com/prisma/prisma/issues/3143
    for (const link of links){
        let updatedTags = [
            ...link.tags,
            ...newData.tags ?? []
        ];
        if (removePreviousTags) {
            // If removePreviousTags is true, replace the existing tags with new tags
            updatedTags = [
                ...newData.tags ?? []
            ];
        }
        const updatedData = {
            ...link,
            tags: updatedTags,
            collection: {
                ...link.collection,
                id: newData.collectionId ?? link.collection.id
            }
        };
        const updatedLink = await (0,_linkId_updateLinkById__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(userId, link.id, updatedData);
        if (updatedLink.status !== 200) {
            allUpdatesSuccessful = false;
        }
    }
    if (allUpdatesSuccessful) {
        return {
            response: "All links updated successfully",
            status: 200
        };
    } else {
        return {
            response: "Some links failed to update",
            status: 400
        };
    }
}


/***/ }),

/***/ 7596:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ getLink)
/* harmony export */ });
/* harmony import */ var _lib_api_db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3009);
/* harmony import */ var _types_global__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6211);


async function getLink(userId, query) {
    const POSTGRES_IS_ENABLED = process.env.DATABASE_URL?.startsWith("postgresql");
    let order = {
        id: "desc"
    };
    if (query.sort === _types_global__WEBPACK_IMPORTED_MODULE_1__/* .Sort */ .PE.DateNewestFirst) order = {
        id: "desc"
    };
    else if (query.sort === _types_global__WEBPACK_IMPORTED_MODULE_1__/* .Sort */ .PE.DateOldestFirst) order = {
        id: "asc"
    };
    else if (query.sort === _types_global__WEBPACK_IMPORTED_MODULE_1__/* .Sort */ .PE.NameAZ) order = {
        name: "asc"
    };
    else if (query.sort === _types_global__WEBPACK_IMPORTED_MODULE_1__/* .Sort */ .PE.NameZA) order = {
        name: "desc"
    };
    else if (query.sort === _types_global__WEBPACK_IMPORTED_MODULE_1__/* .Sort */ .PE.DescriptionAZ) order = {
        description: "asc"
    };
    else if (query.sort === _types_global__WEBPACK_IMPORTED_MODULE_1__/* .Sort */ .PE.DescriptionZA) order = {
        description: "desc"
    };
    const searchConditions = [];
    if (query.searchQueryString) {
        if (query.searchByName) {
            searchConditions.push({
                name: {
                    contains: query.searchQueryString,
                    mode: POSTGRES_IS_ENABLED ? "insensitive" : undefined
                }
            });
        }
        if (query.searchByUrl) {
            searchConditions.push({
                url: {
                    contains: query.searchQueryString,
                    mode: POSTGRES_IS_ENABLED ? "insensitive" : undefined
                }
            });
        }
        if (query.searchByDescription) {
            searchConditions.push({
                description: {
                    contains: query.searchQueryString,
                    mode: POSTGRES_IS_ENABLED ? "insensitive" : undefined
                }
            });
        }
        if (query.searchByTextContent) {
            searchConditions.push({
                textContent: {
                    contains: query.searchQueryString,
                    mode: POSTGRES_IS_ENABLED ? "insensitive" : undefined
                }
            });
        }
        if (query.searchByTags) {
            searchConditions.push({
                tags: {
                    some: {
                        name: {
                            contains: query.searchQueryString,
                            mode: POSTGRES_IS_ENABLED ? "insensitive" : undefined
                        },
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
                    }
                }
            });
        }
    }
    const tagCondition = [];
    if (query.tagId) {
        tagCondition.push({
            tags: {
                some: {
                    id: query.tagId
                }
            }
        });
    }
    const collectionCondition = [];
    if (query.collectionId) {
        collectionCondition.push({
            collection: {
                id: query.collectionId
            }
        });
    }
    const links = await _lib_api_db__WEBPACK_IMPORTED_MODULE_0__/* .prisma */ ._.link.findMany({
        take: Number(process.env.PAGINATION_TAKE_COUNT) || 50,
        skip: query.cursor ? 1 : undefined,
        cursor: query.cursor ? {
            id: query.cursor
        } : undefined,
        where: {
            AND: [
                {
                    collection: {
                        OR: [
                            {
                                ownerId: userId
                            },
                            {
                                members: {
                                    some: {
                                        userId
                                    }
                                }
                            }
                        ]
                    }
                },
                ...collectionCondition,
                {
                    OR: [
                        ...tagCondition,
                        {
                            [query.searchQueryString ? "OR" : "AND"]: [
                                {
                                    pinnedBy: query.pinnedOnly ? {
                                        some: {
                                            id: userId
                                        }
                                    } : undefined
                                },
                                ...searchConditions
                            ]
                        }
                    ]
                }
            ]
        },
        include: {
            tags: true,
            collection: true,
            pinnedBy: {
                where: {
                    id: userId
                },
                select: {
                    id: true
                }
            }
        },
        orderBy: order
    });
    return {
        response: links,
        status: 200
    };
}


/***/ }),

/***/ 2305:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ postLink)
});

// EXTERNAL MODULE: ./lib/api/db.ts
var db = __webpack_require__(3009);
;// CONCATENATED MODULE: external "node-fetch"
const external_node_fetch_namespaceObject = require("node-fetch");
var external_node_fetch_default = /*#__PURE__*/__webpack_require__.n(external_node_fetch_namespaceObject);
;// CONCATENATED MODULE: external "https"
const external_https_namespaceObject = require("https");
var external_https_default = /*#__PURE__*/__webpack_require__.n(external_https_namespaceObject);
;// CONCATENATED MODULE: external "socks-proxy-agent"
const external_socks_proxy_agent_namespaceObject = require("socks-proxy-agent");
;// CONCATENATED MODULE: ./lib/shared/fetchTitleAndHeaders.ts



async function fetchTitleAndHeaders(url) {
    try {
        const httpsAgent = new (external_https_default()).Agent({
            rejectUnauthorized: process.env.IGNORE_UNAUTHORIZED_CA === "true" ? false : true
        });
        // fetchOpts allows a proxy to be defined
        let fetchOpts = {
            agent: httpsAgent
        };
        if (process.env.PROXY) {
            // parse proxy url
            let proxy = new URL(process.env.PROXY);
            // if authentication set, apply to proxy URL
            if (process.env.PROXY_USERNAME) {
                proxy.username = process.env.PROXY_USERNAME;
                proxy.password = process.env.PROXY_PASSWORD || "";
            }
            // add socks5 proxy to fetchOpts
            fetchOpts = {
                agent: new external_socks_proxy_agent_namespaceObject.SocksProxyAgent(proxy.toString())
            }; //TODO: add support for http/https proxies
        }
        const responsePromise = external_node_fetch_default()(url, fetchOpts);
        const timeoutPromise = new Promise((_, reject)=>{
            setTimeout(()=>{
                reject(new Error("Fetch title timeout"));
            }, 10 * 1000); // Stop after 10 seconds
        });
        const response = await Promise.race([
            responsePromise,
            timeoutPromise
        ]);
        if (response?.status) {
            const text = await response.text();
            // regular expression to find the <title> tag
            let match = text.match(/<title.*>([^<]*)<\/title>/);
            const title = match[1] || "";
            const headers = response?.headers || null;
            return {
                title,
                headers
            };
        } else {
            return {
                title: "",
                headers: null
            };
        }
    } catch (err) {
        console.log(err);
        return {
            title: "",
            headers: null
        };
    }
}

// EXTERNAL MODULE: ./lib/api/storage/createFolder.ts
var createFolder = __webpack_require__(1814);
// EXTERNAL MODULE: ./lib/api/getPermission.ts
var getPermission = __webpack_require__(4703);
;// CONCATENATED MODULE: ./lib/api/setLinkCollection.ts


const setLinkCollection = async (link, userId)=>{
    if (link?.collection?.id && typeof link?.collection?.id === "number") {
        const existingCollection = await db/* prisma */._.collection.findUnique({
            where: {
                id: link.collection.id
            }
        });
        if (!existingCollection) return null;
        const collectionIsAccessible = await (0,getPermission/* default */.Z)({
            userId,
            collectionId: existingCollection.id
        });
        const memberHasAccess = collectionIsAccessible?.members.some((e)=>e.userId === userId && e.canCreate);
        if (!(collectionIsAccessible?.ownerId === userId || memberHasAccess)) return null;
        return existingCollection;
    } else if (link?.collection?.name) {
        if (link.collection.name === "Unorganized") {
            const firstTopLevelUnorganizedCollection = await db/* prisma */._.collection.findFirst({
                where: {
                    name: "Unorganized",
                    ownerId: userId,
                    parentId: null
                }
            });
            if (firstTopLevelUnorganizedCollection) return firstTopLevelUnorganizedCollection;
        }
        const newCollection = await db/* prisma */._.collection.create({
            data: {
                name: link.collection.name.trim(),
                ownerId: userId
            }
        });
        await db/* prisma */._.user.update({
            where: {
                id: userId
            },
            data: {
                collectionOrder: {
                    push: newCollection.id
                }
            }
        });
        return newCollection;
    } else {
        const firstTopLevelUnorganizedCollection = await db/* prisma */._.collection.findFirst({
            where: {
                name: "Unorganized",
                ownerId: userId,
                parentId: null
            }
        });
        if (firstTopLevelUnorganizedCollection) return firstTopLevelUnorganizedCollection;
        else return await db/* prisma */._.collection.create({
            data: {
                name: "Unorganized",
                ownerId: userId,
                parentId: null
            }
        });
    }
};
/* harmony default export */ const api_setLinkCollection = (setLinkCollection);

;// CONCATENATED MODULE: ./lib/api/controllers/links/postLink.ts




const MAX_LINKS_PER_USER = Number(process.env.MAX_LINKS_PER_USER) || 30000;
async function postLink(link, userId) {
    if (link.url || link.type === "url") {
        try {
            new URL(link.url || "");
        } catch (error) {
            return {
                response: "Please enter a valid Address for the Link. (It should start with http/https)",
                status: 400
            };
        }
    }
    const linkCollection = await api_setLinkCollection(link, userId);
    if (!linkCollection) return {
        response: "Collection is not accessible.",
        status: 400
    };
    const user = await db/* prisma */._.user.findUnique({
        where: {
            id: userId
        }
    });
    if (user?.preventDuplicateLinks) {
        const url = link.url?.trim().replace(/\/+$/, ""); // trim and remove trailing slashes from the URL
        const hasWwwPrefix = url?.includes(`://www.`);
        const urlWithoutWww = hasWwwPrefix ? url?.replace(`://www.`, "://") : url;
        const urlWithWww = hasWwwPrefix ? url : url?.replace("://", `://www.`);
        const existingLink = await db/* prisma */._.link.findFirst({
            where: {
                OR: [
                    {
                        url: urlWithWww
                    },
                    {
                        url: urlWithoutWww
                    }
                ],
                collection: {
                    ownerId: userId
                }
            }
        });
        if (existingLink) return {
            response: "Link already exists",
            status: 409
        };
    }
    const numberOfLinksTheUserHas = await db/* prisma */._.link.count({
        where: {
            collection: {
                ownerId: linkCollection.ownerId
            }
        }
    });
    if (numberOfLinksTheUserHas > MAX_LINKS_PER_USER) return {
        response: `Each collection owner can only have a maximum of ${MAX_LINKS_PER_USER} Links.`,
        status: 400
    };
    const { title, headers } = await fetchTitleAndHeaders(link.url || "");
    const name = link.name && link.name !== "" ? link.name : link.url ? title : "";
    const contentType = headers?.get("content-type");
    let linkType = "url";
    let imageExtension = "png";
    if (!link.url) linkType = link.type;
    else if (contentType === "application/pdf") linkType = "pdf";
    else if (contentType?.startsWith("image")) {
        linkType = "image";
        if (contentType === "image/jpeg") imageExtension = "jpeg";
        else if (contentType === "image/png") imageExtension = "png";
    }
    if (!link.tags) link.tags = [];
    const newLink = await db/* prisma */._.link.create({
        data: {
            url: link.url?.trim() || null,
            name,
            description: link.description,
            type: linkType,
            collection: {
                connect: {
                    id: linkCollection.id
                }
            },
            tags: {
                connectOrCreate: link.tags?.map((tag)=>({
                        where: {
                            name_ownerId: {
                                name: tag.name.trim(),
                                ownerId: linkCollection.ownerId
                            }
                        },
                        create: {
                            name: tag.name.trim(),
                            owner: {
                                connect: {
                                    id: linkCollection.ownerId
                                }
                            }
                        }
                    }))
            }
        },
        include: {
            tags: true,
            collection: true
        }
    });
    (0,createFolder/* default */.Z)({
        filePath: `archives/${newLink.collectionId}`
    });
    return {
        response: newLink,
        status: 200
    };
}


/***/ }),

/***/ 4422:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ links)
/* harmony export */ });
/* harmony import */ var _lib_api_controllers_links_getLinks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7596);
/* harmony import */ var _lib_api_controllers_links_postLink__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2305);
/* harmony import */ var _lib_api_verifyUser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8005);
/* harmony import */ var _lib_api_controllers_links_bulk_deleteLinksById__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9105);
/* harmony import */ var _lib_api_controllers_links_bulk_updateLinks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1663);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_lib_api_verifyUser__WEBPACK_IMPORTED_MODULE_2__]);
_lib_api_verifyUser__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





async function links(req, res) {
    const user = await (0,_lib_api_verifyUser__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)({
        req,
        res
    });
    if (!user) return;
    if (req.method === "GET") {
        // Convert the type of the request query to "LinkRequestQuery"
        const convertedData = {
            sort: Number(req.query.sort),
            cursor: req.query.cursor ? Number(req.query.cursor) : undefined,
            collectionId: req.query.collectionId ? Number(req.query.collectionId) : undefined,
            tagId: req.query.tagId ? Number(req.query.tagId) : undefined,
            pinnedOnly: req.query.pinnedOnly ? req.query.pinnedOnly === "true" : undefined,
            searchQueryString: req.query.searchQueryString ? req.query.searchQueryString : undefined,
            searchByName: req.query.searchByName === "true" ? true : undefined,
            searchByUrl: req.query.searchByUrl === "true" ? true : undefined,
            searchByDescription: req.query.searchByDescription === "true" ? true : undefined,
            searchByTextContent: req.query.searchByTextContent === "true" ? true : undefined,
            searchByTags: req.query.searchByTags === "true" ? true : undefined
        };
        const links = await (0,_lib_api_controllers_links_getLinks__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(user.id, convertedData);
        return res.status(links.status).json({
            response: links.response
        });
    } else if (req.method === "POST") {
        if (false) {}
        const newlink = await (0,_lib_api_controllers_links_postLink__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(req.body, user.id);
        return res.status(newlink.status).json({
            response: newlink.response
        });
    } else if (req.method === "PUT") {
        if (false) {}
        const updated = await (0,_lib_api_controllers_links_bulk_updateLinks__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(user.id, req.body.links, req.body.removePreviousTags, req.body.newData);
        return res.status(updated.status).json({
            response: updated.response
        });
    } else if (req.method === "DELETE") {
        if (false) {}
        const deleted = await (0,_lib_api_controllers_links_bulk_deleteLinksById__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(user.id, req.body.linkIds);
        return res.status(deleted.status).json({
            response: deleted.response
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
var __webpack_exports__ = __webpack_require__.X(0, [5746,8005,6211,1814,4703,2517,6524], () => (__webpack_exec__(4422)));
module.exports = __webpack_exports__;

})();