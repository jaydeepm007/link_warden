"use strict";
exports.id = 7409;
exports.ids = [7409];
exports.modules = {

/***/ 8026:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ LinkCard)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var _types_global__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7102);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _store_links__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5662);
/* harmony import */ var _lib_client_unescapeString__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(9401);
/* harmony import */ var _components_LinkViews_LinkComponents_LinkActions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3906);
/* harmony import */ var _components_LinkViews_LinkComponents_LinkDate__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(826);
/* harmony import */ var _components_LinkViews_LinkComponents_LinkCollection__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(76);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _lib_shared_getArchiveValidity__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(326);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _LinkIcon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1651);
/* harmony import */ var _hooks_useOnScreen__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(7976);
/* harmony import */ var _lib_client_generateLinkHref__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(2008);
/* harmony import */ var _hooks_usePermissions__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(2980);
/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(6201);
/* harmony import */ var _LinkTypeBadge__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(9557);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(1377);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _hooks_store_collections__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(7179);
/* harmony import */ var _hooks_store_user__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(2676);
/* harmony import */ var _hooks_store_links__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(6496);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_store_links__WEBPACK_IMPORTED_MODULE_3__, _components_LinkViews_LinkComponents_LinkActions__WEBPACK_IMPORTED_MODULE_4__, _hooks_usePermissions__WEBPACK_IMPORTED_MODULE_12__, react_hot_toast__WEBPACK_IMPORTED_MODULE_13__, _hooks_store_collections__WEBPACK_IMPORTED_MODULE_16__, _hooks_store_user__WEBPACK_IMPORTED_MODULE_17__, _hooks_store_links__WEBPACK_IMPORTED_MODULE_18__]);
([_store_links__WEBPACK_IMPORTED_MODULE_3__, _components_LinkViews_LinkComponents_LinkActions__WEBPACK_IMPORTED_MODULE_4__, _hooks_usePermissions__WEBPACK_IMPORTED_MODULE_12__, react_hot_toast__WEBPACK_IMPORTED_MODULE_13__, _hooks_store_collections__WEBPACK_IMPORTED_MODULE_16__, _hooks_store_user__WEBPACK_IMPORTED_MODULE_17__, _hooks_store_links__WEBPACK_IMPORTED_MODULE_18__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





















function LinkCard({ link, flipDropdown, editMode }) {
    const { t } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_15__.useTranslation)();
    const { data: collections = [] } = (0,_hooks_store_collections__WEBPACK_IMPORTED_MODULE_16__/* .useCollections */ .bX)();
    const { data: user = {} } = (0,_hooks_store_user__WEBPACK_IMPORTED_MODULE_17__/* .useUser */ .a)();
    const { setSelectedLinks, selectedLinks } = (0,_store_links__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)();
    const { data: { data: links = [] } } = (0,_hooks_store_links__WEBPACK_IMPORTED_MODULE_18__/* .useLinks */ .u8)();
    const getLink = (0,_hooks_store_links__WEBPACK_IMPORTED_MODULE_18__/* .useGetLink */ .mk)();
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        if (!editMode) {
            setSelectedLinks([]);
        }
    }, [
        editMode
    ]);
    const handleCheckboxClick = (link)=>{
        if (selectedLinks.includes(link)) {
            setSelectedLinks(selectedLinks.filter((e)=>e !== link));
        } else {
            setSelectedLinks([
                ...selectedLinks,
                link
            ]);
        }
    };
    let shortendURL;
    try {
        if (link.url) {
            shortendURL = new URL(link.url).host.toLowerCase();
        }
    } catch (error) {
        console.log(error);
    }
    const [collection, setCollection] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(collections.find((e)=>e.id === link.collection.id));
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        setCollection(collections.find((e)=>e.id === link.collection.id));
    }, [
        collections,
        links
    ]);
    const ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);
    const isVisible = (0,_hooks_useOnScreen__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z)(ref);
    const permissions = (0,_hooks_usePermissions__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z)(collection?.id);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        let interval;
        if (isVisible && !link.preview?.startsWith("archives") && link.preview !== "unavailable") {
            interval = setInterval(async ()=>{
                getLink.mutateAsync(link.id);
            }, 5000);
        }
        return ()=>{
            if (interval) {
                clearInterval(interval);
            }
        };
    }, [
        isVisible,
        link.preview
    ]);
    const [showInfo, setShowInfo] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const selectedStyle = selectedLinks.some((selectedLink)=>selectedLink.id === link.id) ? "border-primary bg-base-300" : "border-neutral-content";
    const selectable = editMode && (permissions === true || permissions?.canCreate || permissions?.canDelete);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        ref: ref,
        className: `${selectedStyle} border border-solid border-neutral-content bg-base-200 shadow-md hover:shadow-none duration-100 rounded-2xl relative`,
        onClick: ()=>selectable ? handleCheckboxClick(link) : editMode ? react_hot_toast__WEBPACK_IMPORTED_MODULE_13__["default"].error(t("link_selection_error")) : undefined,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "rounded-2xl cursor-pointer h-full flex flex-col justify-between",
                onClick: ()=>!editMode && window.open((0,_lib_client_generateLinkHref__WEBPACK_IMPORTED_MODULE_11__/* .generateLinkHref */ .j)(link, user), "_blank"),
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "relative rounded-t-2xl h-40 overflow-hidden",
                                children: [
                                    (0,_lib_shared_getArchiveValidity__WEBPACK_IMPORTED_MODULE_19__/* .previewAvailable */ .je)(link) ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_7___default()), {
                                        src: `/api/v1/archives/${link.id}?format=${_types_global__WEBPACK_IMPORTED_MODULE_1__/* .ArchivedFormat */ .Gt.jpeg}&preview=true`,
                                        width: 1280,
                                        height: 720,
                                        alt: "",
                                        className: "rounded-t-2xl select-none object-cover z-10 h-40 w-full shadow opacity-80 scale-105",
                                        style: link.type !== "image" ? {
                                            filter: "blur(1px)"
                                        } : undefined,
                                        draggable: "false",
                                        onError: (e)=>{
                                            const target = e.target;
                                            target.style.display = "none";
                                        }
                                    }) : link.preview === "unavailable" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "bg-gray-50 duration-100 h-40 bg-opacity-80"
                                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "duration-100 h-40 bg-opacity-80 skeleton rounded-none"
                                    }),
                                    link.type !== "image" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "absolute top-0 left-0 right-0 bottom-0 rounded-t-2xl flex items-center justify-center shadow rounded-md",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_LinkIcon__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                                            link: link
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("hr", {
                                className: "divider my-0 border-t border-neutral-content h-[1px]"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex flex-col justify-between h-full",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "p-3 flex flex-col gap-2",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: "truncate w-full pr-9 text-primary text-sm",
                                        children: (0,_lib_client_unescapeString__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .Z)(link.name)
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_LinkTypeBadge__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
                                        link: link
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("hr", {
                                        className: "divider mt-2 mb-1 last:hidden border-t border-neutral-content h-[1px]"
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "flex justify-between text-xs text-neutral px-3 pb-1 gap-2",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "cursor-pointer truncate",
                                                children: collection && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_LinkViews_LinkComponents_LinkCollection__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                                    link: link,
                                                    collection: collection
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_LinkViews_LinkComponents_LinkDate__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                                link: link
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    })
                ]
            }),
            showInfo && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "p-3 absolute z-30 top-0 left-0 right-0 bottom-0 bg-base-200 rounded-[0.9rem] fade-in overflow-y-auto",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        onClick: ()=>setShowInfo(!showInfo),
                        className: " float-right btn btn-sm outline-none btn-circle btn-ghost z-10",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                            className: "bi-x text-neutral text-2xl"
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        className: "text-neutral text-lg font-semibold",
                        children: t("description")
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("hr", {
                        className: "divider my-2 border-t border-neutral-content h-[1px]"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        children: link.description ? (0,_lib_client_unescapeString__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .Z)(link.description) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            className: "text-neutral text-sm",
                            children: t("no_description")
                        })
                    }),
                    link.tags && link.tags[0] && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: "text-neutral text-lg mt-3 font-semibold",
                                children: t("tags")
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("hr", {
                                className: "divider my-2 border-t border-neutral-content h-[1px]"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "flex gap-3 items-center flex-wrap mt-2 truncate relative",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "flex gap-1 items-center flex-wrap",
                                    children: link.tags.map((e, i)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_8___default()), {
                                            href: "/tags/" + e.id,
                                            onClick: (e)=>{
                                                e.stopPropagation();
                                            },
                                            className: "btn btn-xs btn-ghost truncate max-w-[19rem]",
                                            children: [
                                                "#",
                                                e.name
                                            ]
                                        }, i))
                                })
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_LinkViews_LinkComponents_LinkActions__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                link: link,
                collection: collection,
                position: "top-[10.75rem] right-3",
                toggleShowInfo: ()=>setShowInfo(!showInfo),
                linkInfo: showInfo,
                flipDropdown: flipDropdown
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 76:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ LinkCollection)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);



function LinkCollection({ link, collection }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
            href: `/collections/${link.collection.id}`,
            onClick: (e)=>{
                e.stopPropagation();
            },
            className: "flex items-center gap-1 max-w-full w-fit hover:opacity-70 duration-100 select-none",
            title: collection?.name,
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                    className: "bi-folder-fill text-lg drop-shadow",
                    style: {
                        color: collection?.color
                    }
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                    className: "truncate capitalize",
                    children: collection?.name
                })
            ]
        })
    });
}


/***/ }),

/***/ 826:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ LinkDate)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


function LinkDate({ link }) {
    const formattedDate = new Date(link.importDate || link.createdAt).toLocaleString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric"
    });
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "flex items-center gap-1 text-neutral min-w-fit",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                className: "bi-calendar3 text-lg"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                children: formattedDate
            })
        ]
    });
}


/***/ }),

/***/ 1651:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ LinkIcon)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_shared_isValidUrl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2602);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);




function LinkIcon({ link, className, size }) {
    let iconClasses = "bg-white shadow rounded-md border-[2px] flex item-center justify-center border-white select-none z-10 " + (className || "");
    let dimension;
    switch(size){
        case "small":
            dimension = " w-8 h-8";
            break;
        case "medium":
            dimension = " w-12 h-12";
            break;
        default:
            size = "medium";
            dimension = " w-12 h-12";
            break;
    }
    const url = (0,_lib_shared_isValidUrl__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(link.url || "") && link.url ? new URL(link.url) : undefined;
    const [showFavicon, setShowFavicon] = react__WEBPACK_IMPORTED_MODULE_2___default().useState(true);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: link.type === "url" && url ? showFavicon ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
            src: `https://t2.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=${link.url}&size=32`,
            width: 64,
            height: 64,
            alt: "",
            className: iconClasses + dimension,
            draggable: "false",
            onError: ()=>{
                setShowFavicon(false);
            }
        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(LinkPlaceholderIcon, {
            iconClasses: iconClasses + dimension,
            size: size,
            icon: "bi-link-45deg"
        }) : link.type === "pdf" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(LinkPlaceholderIcon, {
            iconClasses: iconClasses + dimension,
            size: size,
            icon: "bi-file-earmark-pdf"
        }) : link.type === "image" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(LinkPlaceholderIcon, {
            iconClasses: iconClasses + dimension,
            size: size,
            icon: "bi-file-earmark-image"
        }) : //   <LinkPlaceholderIcon
        //     iconClasses={iconClasses + dimension}
        //     size={size}
        //     icon="bi-filetype-html"
        //   />
        // )
        undefined
    });
}
const LinkPlaceholderIcon = ({ iconClasses, size, icon })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: `${size === "small" ? "text-2xl" : "text-4xl"} text-black aspect-square ${iconClasses}`,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
            className: `${icon} m-auto`
        })
    });
};


/***/ }),

/***/ 8683:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ LinkCardCompact)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _store_links__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5662);
/* harmony import */ var _lib_client_unescapeString__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(9401);
/* harmony import */ var _components_LinkViews_LinkComponents_LinkActions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3906);
/* harmony import */ var _components_LinkViews_LinkComponents_LinkDate__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(826);
/* harmony import */ var _components_LinkViews_LinkComponents_LinkCollection__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(76);
/* harmony import */ var _components_LinkViews_LinkComponents_LinkIcon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1651);
/* harmony import */ var _lib_client_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4446);
/* harmony import */ var _lib_client_generateLinkHref__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2008);
/* harmony import */ var _hooks_usePermissions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2980);
/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(6201);
/* harmony import */ var _LinkTypeBadge__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(9557);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(1377);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _hooks_store_collections__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(7179);
/* harmony import */ var _hooks_store_user__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(2676);
/* harmony import */ var _hooks_store_links__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(6496);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_store_links__WEBPACK_IMPORTED_MODULE_2__, _components_LinkViews_LinkComponents_LinkActions__WEBPACK_IMPORTED_MODULE_3__, _lib_client_utils__WEBPACK_IMPORTED_MODULE_7__, _hooks_usePermissions__WEBPACK_IMPORTED_MODULE_9__, react_hot_toast__WEBPACK_IMPORTED_MODULE_10__, _hooks_store_collections__WEBPACK_IMPORTED_MODULE_13__, _hooks_store_user__WEBPACK_IMPORTED_MODULE_14__, _hooks_store_links__WEBPACK_IMPORTED_MODULE_15__]);
([_store_links__WEBPACK_IMPORTED_MODULE_2__, _components_LinkViews_LinkComponents_LinkActions__WEBPACK_IMPORTED_MODULE_3__, _lib_client_utils__WEBPACK_IMPORTED_MODULE_7__, _hooks_usePermissions__WEBPACK_IMPORTED_MODULE_9__, react_hot_toast__WEBPACK_IMPORTED_MODULE_10__, _hooks_store_collections__WEBPACK_IMPORTED_MODULE_13__, _hooks_store_user__WEBPACK_IMPORTED_MODULE_14__, _hooks_store_links__WEBPACK_IMPORTED_MODULE_15__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);

















function LinkCardCompact({ link, flipDropdown, editMode }) {
    const { t } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_12__.useTranslation)();
    const { data: collections = [] } = (0,_hooks_store_collections__WEBPACK_IMPORTED_MODULE_13__/* .useCollections */ .bX)();
    const { data: user = {} } = (0,_hooks_store_user__WEBPACK_IMPORTED_MODULE_14__/* .useUser */ .a)();
    const { setSelectedLinks, selectedLinks } = (0,_store_links__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)();
    const { links } = (0,_hooks_store_links__WEBPACK_IMPORTED_MODULE_15__/* .useLinks */ .u8)();
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (!editMode) {
            setSelectedLinks([]);
        }
    }, [
        editMode
    ]);
    const handleCheckboxClick = (link)=>{
        const linkIndex = selectedLinks.findIndex((selectedLink)=>selectedLink.id === link.id);
        if (linkIndex !== -1) {
            const updatedLinks = [
                ...selectedLinks
            ];
            updatedLinks.splice(linkIndex, 1);
            setSelectedLinks(updatedLinks);
        } else {
            setSelectedLinks([
                ...selectedLinks,
                link
            ]);
        }
    };
    const [collection, setCollection] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(collections.find((e)=>e.id === link.collection.id));
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        setCollection(collections.find((e)=>e.id === link.collection.id));
    }, [
        collections,
        links
    ]);
    const permissions = (0,_hooks_usePermissions__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z)(collection?.id);
    const [showInfo, setShowInfo] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const selectedStyle = selectedLinks.some((selectedLink)=>selectedLink.id === link.id) ? "border border-primary bg-base-300" : "border-transparent";
    const selectable = editMode && (permissions === true || permissions?.canCreate || permissions?.canDelete);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: `${selectedStyle} border relative items-center flex ${!showInfo && !(0,_lib_client_utils__WEBPACK_IMPORTED_MODULE_7__/* .isPWA */ .Ee)() ? "hover:bg-base-300 p-3" : "py-3"} duration-200 rounded-lg w-full`,
                onClick: ()=>selectable ? handleCheckboxClick(link) : editMode ? react_hot_toast__WEBPACK_IMPORTED_MODULE_10__["default"].error(t("link_selection_error")) : undefined,
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex items-center cursor-pointer w-full",
                        onClick: ()=>!editMode && window.open((0,_lib_client_generateLinkHref__WEBPACK_IMPORTED_MODULE_8__/* .generateLinkHref */ .j)(link, user), "_blank"),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "shrink-0",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_LinkViews_LinkComponents_LinkIcon__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                    link: link,
                                    className: "w-12 h-12 text-4xl"
                                })
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "w-[calc(100%-56px)] ml-2",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: "line-clamp-1 mr-8 text-primary select-none",
                                        children: link.name ? (0,_lib_client_unescapeString__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z)(link.name) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "mt-2",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_LinkTypeBadge__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                                                link: link
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "mt-1 flex flex-col sm:flex-row sm:items-center gap-2 text-xs text-neutral",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "flex items-center gap-x-3 text-neutral flex-wrap",
                                            children: [
                                                collection ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_LinkViews_LinkComponents_LinkCollection__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                                    link: link,
                                                    collection: collection
                                                }) : undefined,
                                                link.name && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_LinkTypeBadge__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                                                    link: link
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_LinkViews_LinkComponents_LinkDate__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                                    link: link
                                                })
                                            ]
                                        })
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_LinkViews_LinkComponents_LinkActions__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                        link: link,
                        collection: collection,
                        position: "top-3 right-3",
                        flipDropdown: flipDropdown
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "last:hidden rounded-none",
                style: {
                    borderTop: "1px solid var(--fallback-bc,oklch(var(--bc)/0.1))"
                }
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 463:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ LinkMasonry)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var _types_global__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7102);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _store_links__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5662);
/* harmony import */ var _lib_client_unescapeString__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(9401);
/* harmony import */ var _components_LinkViews_LinkComponents_LinkActions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3906);
/* harmony import */ var _components_LinkViews_LinkComponents_LinkDate__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(826);
/* harmony import */ var _components_LinkViews_LinkComponents_LinkCollection__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(76);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _lib_shared_getArchiveValidity__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(326);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _LinkIcon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1651);
/* harmony import */ var _hooks_useOnScreen__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(7976);
/* harmony import */ var _lib_client_generateLinkHref__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(2008);
/* harmony import */ var _hooks_usePermissions__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(2980);
/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(6201);
/* harmony import */ var _LinkTypeBadge__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(9557);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(1377);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _hooks_store_collections__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(7179);
/* harmony import */ var _hooks_store_user__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(2676);
/* harmony import */ var _hooks_store_links__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(6496);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_store_links__WEBPACK_IMPORTED_MODULE_3__, _components_LinkViews_LinkComponents_LinkActions__WEBPACK_IMPORTED_MODULE_4__, _hooks_usePermissions__WEBPACK_IMPORTED_MODULE_12__, react_hot_toast__WEBPACK_IMPORTED_MODULE_13__, _hooks_store_collections__WEBPACK_IMPORTED_MODULE_16__, _hooks_store_user__WEBPACK_IMPORTED_MODULE_17__, _hooks_store_links__WEBPACK_IMPORTED_MODULE_18__]);
([_store_links__WEBPACK_IMPORTED_MODULE_3__, _components_LinkViews_LinkComponents_LinkActions__WEBPACK_IMPORTED_MODULE_4__, _hooks_usePermissions__WEBPACK_IMPORTED_MODULE_12__, react_hot_toast__WEBPACK_IMPORTED_MODULE_13__, _hooks_store_collections__WEBPACK_IMPORTED_MODULE_16__, _hooks_store_user__WEBPACK_IMPORTED_MODULE_17__, _hooks_store_links__WEBPACK_IMPORTED_MODULE_18__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





















function LinkMasonry({ link, flipDropdown, editMode }) {
    const { t } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_15__.useTranslation)();
    const { data: collections = [] } = (0,_hooks_store_collections__WEBPACK_IMPORTED_MODULE_16__/* .useCollections */ .bX)();
    const { data: user = {} } = (0,_hooks_store_user__WEBPACK_IMPORTED_MODULE_17__/* .useUser */ .a)();
    const { setSelectedLinks, selectedLinks } = (0,_store_links__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)();
    const { links } = (0,_hooks_store_links__WEBPACK_IMPORTED_MODULE_18__/* .useLinks */ .u8)();
    const getLink = (0,_hooks_store_links__WEBPACK_IMPORTED_MODULE_18__/* .useGetLink */ .mk)();
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        if (!editMode) {
            setSelectedLinks([]);
        }
    }, [
        editMode
    ]);
    const handleCheckboxClick = (link)=>{
        if (selectedLinks.includes(link)) {
            setSelectedLinks(selectedLinks.filter((e)=>e !== link));
        } else {
            setSelectedLinks([
                ...selectedLinks,
                link
            ]);
        }
    };
    let shortendURL;
    try {
        if (link.url) {
            shortendURL = new URL(link.url).host.toLowerCase();
        }
    } catch (error) {
        console.log(error);
    }
    const [collection, setCollection] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(collections.find((e)=>e.id === link.collection.id));
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        setCollection(collections.find((e)=>e.id === link.collection.id));
    }, [
        collections,
        links
    ]);
    const ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);
    const isVisible = (0,_hooks_useOnScreen__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z)(ref);
    const permissions = (0,_hooks_usePermissions__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z)(collection?.id);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        let interval;
        if (isVisible && !link.preview?.startsWith("archives") && link.preview !== "unavailable") {
            interval = setInterval(async ()=>{
                getLink.mutateAsync(link.id);
            }, 5000);
        }
        return ()=>{
            if (interval) {
                clearInterval(interval);
            }
        };
    }, [
        isVisible,
        link.preview
    ]);
    const [showInfo, setShowInfo] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const selectedStyle = selectedLinks.some((selectedLink)=>selectedLink.id === link.id) ? "border-primary bg-base-300" : "border-neutral-content";
    const selectable = editMode && (permissions === true || permissions?.canCreate || permissions?.canDelete);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        ref: ref,
        className: `${selectedStyle} border border-solid border-neutral-content bg-base-200 shadow-md hover:shadow-none duration-100 rounded-2xl relative`,
        onClick: ()=>selectable ? handleCheckboxClick(link) : editMode ? react_hot_toast__WEBPACK_IMPORTED_MODULE_13__["default"].error(t("link_selection_error")) : undefined,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "rounded-2xl cursor-pointer",
                onClick: ()=>!editMode && window.open((0,_lib_client_generateLinkHref__WEBPACK_IMPORTED_MODULE_11__/* .generateLinkHref */ .j)(link, user), "_blank"),
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "relative rounded-t-2xl overflow-hidden",
                        children: [
                            (0,_lib_shared_getArchiveValidity__WEBPACK_IMPORTED_MODULE_19__/* .previewAvailable */ .je)(link) ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_7___default()), {
                                src: `/api/v1/archives/${link.id}?format=${_types_global__WEBPACK_IMPORTED_MODULE_1__/* .ArchivedFormat */ .Gt.jpeg}&preview=true`,
                                width: 1280,
                                height: 720,
                                alt: "",
                                className: "rounded-t-2xl select-none object-cover z-10 h-40 w-full shadow opacity-80 scale-105",
                                style: link.type !== "image" ? {
                                    filter: "blur(1px)"
                                } : undefined,
                                draggable: "false",
                                onError: (e)=>{
                                    const target = e.target;
                                    target.style.display = "none";
                                }
                            }) : link.preview === "unavailable" ? null : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "duration-100 h-40 bg-opacity-80 skeleton rounded-none"
                            }),
                            link.type !== "image" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "absolute top-0 left-0 right-0 bottom-0 rounded-t-2xl flex items-center justify-center shadow rounded-md",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_LinkIcon__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                                    link: link
                                })
                            })
                        ]
                    }),
                    link.preview !== "unavailable" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("hr", {
                        className: "divider my-0 last:hidden border-t border-neutral-content h-[1px]"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "p-3 flex flex-col gap-2",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: "hyphens-auto w-full pr-9 text-primary text-sm",
                                children: (0,_lib_client_unescapeString__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .Z)(link.name)
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_LinkTypeBadge__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
                                link: link
                            }),
                            link.description && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: "hyphens-auto text-sm",
                                children: (0,_lib_client_unescapeString__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .Z)(link.description)
                            }),
                            link.tags && link.tags[0] && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "flex gap-1 items-center flex-wrap",
                                children: link.tags.map((e, i)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_8___default()), {
                                        href: "/tags/" + e.id,
                                        onClick: (e)=>{
                                            e.stopPropagation();
                                        },
                                        className: "btn btn-xs btn-ghost truncate max-w-[19rem]",
                                        children: [
                                            "#",
                                            e.name
                                        ]
                                    }, i))
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("hr", {
                        className: "divider mt-2 mb-1 last:hidden border-t border-neutral-content h-[1px]"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex flex-wrap justify-between text-xs text-neutral px-3 pb-1 w-full gap-x-2",
                        children: [
                            collection && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_LinkViews_LinkComponents_LinkCollection__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                link: link,
                                collection: collection
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_LinkViews_LinkComponents_LinkDate__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                link: link
                            })
                        ]
                    })
                ]
            }),
            showInfo && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "p-3 absolute z-30 top-0 left-0 right-0 bottom-0 bg-base-200 rounded-2xl fade-in overflow-y-auto",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        onClick: ()=>setShowInfo(!showInfo),
                        className: " float-right btn btn-sm outline-none btn-circle btn-ghost z-10",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                            className: "bi-x text-neutral text-2xl"
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        className: "text-neutral text-lg font-semibold",
                        children: t("description")
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("hr", {
                        className: "divider my-2 last:hidden border-t border-neutral-content h-[1px]"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        children: link.description ? (0,_lib_client_unescapeString__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .Z)(link.description) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            className: "text-neutral text-sm",
                            children: t("no_description")
                        })
                    }),
                    link.tags && link.tags[0] && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: "text-neutral text-lg mt-3 font-semibold",
                                children: t("tags")
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("hr", {
                                className: "divider my-2 last:hidden border-t border-neutral-content h-[1px]"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "flex gap-3 items-center flex-wrap mt-2 truncate relative",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "flex gap-1 items-center flex-wrap",
                                    children: link.tags.map((e, i)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_8___default()), {
                                            href: "/tags/" + e.id,
                                            onClick: (e)=>{
                                                e.stopPropagation();
                                            },
                                            className: "btn btn-xs btn-ghost truncate max-w-[19rem]",
                                            children: [
                                                "#",
                                                e.name
                                            ]
                                        }, i))
                                })
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_LinkViews_LinkComponents_LinkActions__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                link: link,
                collection: collection,
                position: link.preview !== "unavailable" ? "top-[10.75rem] right-3" : "top-[.75rem] right-3",
                toggleShowInfo: ()=>setShowInfo(!showInfo),
                linkInfo: showInfo,
                flipDropdown: flipDropdown
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9557:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ LinkTypeBadge)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);



function LinkTypeBadge({ link }) {
    let shortendURL;
    if (link.type === "url" && link.url) {
        try {
            shortendURL = new URL(link.url).host.toLowerCase();
        } catch (error) {
            console.log(error);
        }
    }
    return link.url && shortendURL ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
        href: link.url || "",
        target: "_blank",
        title: link.url || "",
        onClick: (e)=>{
            e.stopPropagation();
        },
        className: "flex gap-1 item-center select-none text-neutral hover:opacity-70 duration-100 max-w-full w-fit",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                className: "bi-link-45deg text-lg leading-none"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                className: "text-xs truncate",
                children: shortendURL
            })
        ]
    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "badge badge-primary badge-sm select-none",
        children: link.type
    });
}


/***/ }),

/***/ 6874:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ZP: () => (/* binding */ Links)
/* harmony export */ });
/* unused harmony exports CardView, MasonryView, ListView */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var _components_LinkViews_LinkComponents_LinkCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8026);
/* harmony import */ var _types_global__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7102);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_intersection_observer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4009);
/* harmony import */ var _components_LinkViews_LinkComponents_LinkMasonry__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(463);
/* harmony import */ var react_masonry_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7125);
/* harmony import */ var react_masonry_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_masonry_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var tailwindcss_resolveConfig__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8842);
/* harmony import */ var tailwindcss_resolveConfig__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(tailwindcss_resolveConfig__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _tailwind_config_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2987);
/* harmony import */ var _tailwind_config_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_tailwind_config_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _components_LinkViews_LinkComponents_LinkList__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(8683);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_LinkViews_LinkComponents_LinkCard__WEBPACK_IMPORTED_MODULE_1__, react_intersection_observer__WEBPACK_IMPORTED_MODULE_4__, _components_LinkViews_LinkComponents_LinkMasonry__WEBPACK_IMPORTED_MODULE_5__, _components_LinkViews_LinkComponents_LinkList__WEBPACK_IMPORTED_MODULE_9__]);
([_components_LinkViews_LinkComponents_LinkCard__WEBPACK_IMPORTED_MODULE_1__, react_intersection_observer__WEBPACK_IMPORTED_MODULE_4__, _components_LinkViews_LinkComponents_LinkMasonry__WEBPACK_IMPORTED_MODULE_5__, _components_LinkViews_LinkComponents_LinkList__WEBPACK_IMPORTED_MODULE_9__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);











function CardView({ links, editMode, isLoading, placeholders, hasNextPage, placeHolderRef }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "grid min-[1901px]:grid-cols-5 min-[1501px]:grid-cols-4 min-[881px]:grid-cols-3 min-[551px]:grid-cols-2 grid-cols-1 gap-5 pb-5",
        children: [
            links?.map((e, i)=>{
                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_LinkViews_LinkComponents_LinkCard__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                    link: e,
                    count: i,
                    flipDropdown: i === links.length - 1,
                    editMode: editMode
                }, i);
            }),
            (hasNextPage || isLoading) && placeholders?.map((e, i)=>{
                return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "flex flex-col gap-4",
                    ref: e === 1 ? placeHolderRef : undefined,
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "skeleton h-40 w-full"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "skeleton h-3 w-2/3"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "skeleton h-3 w-full"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "skeleton h-3 w-full"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "skeleton h-3 w-1/3"
                        })
                    ]
                }, i);
            })
        ]
    });
}
function MasonryView({ links, editMode, isLoading, placeholders, hasNextPage, placeHolderRef }) {
    const fullConfig = tailwindcss_resolveConfig__WEBPACK_IMPORTED_MODULE_7___default()((_tailwind_config_js__WEBPACK_IMPORTED_MODULE_8___default()));
    const breakpointColumnsObj = (0,react__WEBPACK_IMPORTED_MODULE_3__.useMemo)(()=>{
        return {
            default: 5,
            1900: 4,
            1500: 3,
            880: 2,
            550: 1
        };
    }, []);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_masonry_css__WEBPACK_IMPORTED_MODULE_6___default()), {
        breakpointCols: breakpointColumnsObj,
        columnClassName: "flex flex-col gap-5 !w-full",
        className: "grid min-[1901px]:grid-cols-5 min-[1501px]:grid-cols-4 min-[881px]:grid-cols-3 min-[551px]:grid-cols-2 grid-cols-1 gap-5 pb-5",
        children: [
            links?.map((e, i)=>{
                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_LinkViews_LinkComponents_LinkMasonry__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                    link: e,
                    count: i,
                    flipDropdown: i === links.length - 1,
                    editMode: editMode
                }, i);
            }),
            (hasNextPage || isLoading) && placeholders?.map((e, i)=>{
                return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "flex flex-col gap-4",
                    ref: e === 1 ? placeHolderRef : undefined,
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "skeleton h-40 w-full"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "skeleton h-3 w-2/3"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "skeleton h-3 w-full"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "skeleton h-3 w-full"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "skeleton h-3 w-1/3"
                        })
                    ]
                }, i);
            })
        ]
    });
}
function ListView({ links, editMode, isLoading, placeholders, hasNextPage, placeHolderRef }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "flex gap-1 flex-col",
        children: [
            links?.map((e, i)=>{
                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_LinkViews_LinkComponents_LinkList__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                    link: e,
                    count: i,
                    flipDropdown: i === links.length - 1,
                    editMode: editMode
                }, i);
            }),
            (hasNextPage || isLoading) && placeholders?.map((e, i)=>{
                return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    ref: e === 1 ? placeHolderRef : undefined,
                    className: "flex gap-4 p-4",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "skeleton h-16 w-16"
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "flex flex-col gap-4 w-full",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "skeleton h-3 w-2/3"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "skeleton h-3 w-full"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "skeleton h-3 w-1/3"
                                })
                            ]
                        })
                    ]
                }, i);
            })
        ]
    });
}
function Links({ layout, links, editMode, placeholderCount, useData }) {
    const { ref, inView } = (0,react_intersection_observer__WEBPACK_IMPORTED_MODULE_4__.useInView)();
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        if (inView && useData?.fetchNextPage && useData?.hasNextPage) {
            useData.fetchNextPage();
        }
    }, [
        useData,
        inView
    ]);
    if (layout === _types_global__WEBPACK_IMPORTED_MODULE_2__/* .ViewMode */ .wO.List) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ListView, {
            links: links,
            editMode: editMode,
            isLoading: useData?.isLoading,
            placeholders: placeholderCountToArray(placeholderCount),
            hasNextPage: useData?.hasNextPage,
            placeHolderRef: ref
        });
    } else if (layout === _types_global__WEBPACK_IMPORTED_MODULE_2__/* .ViewMode */ .wO.Masonry) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(MasonryView, {
            links: links,
            editMode: editMode,
            isLoading: useData?.isLoading,
            placeholders: placeholderCountToArray(placeholderCount),
            hasNextPage: useData?.hasNextPage,
            placeHolderRef: ref
        });
    } else {
        // Default to card view
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(CardView, {
            links: links,
            editMode: editMode,
            isLoading: useData?.isLoading,
            placeholders: placeholderCountToArray(placeholderCount),
            hasNextPage: useData?.hasNextPage,
            placeHolderRef: ref
        });
    }
}
const placeholderCountToArray = (num)=>num ? Array.from({
        length: num
    }, (_, i)=>i + 1) : [];

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2772:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ ViewDropdown)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _store_localSettings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7472);
/* harmony import */ var _types_global__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7102);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_store_localSettings__WEBPACK_IMPORTED_MODULE_2__]);
_store_localSettings__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




function ViewDropdown({ viewMode, setViewMode }) {
    const { updateSettings } = (0,_store_localSettings__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)();
    const onChangeViewMode = (e, viewMode)=>{
        setViewMode(viewMode);
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        updateSettings({
            viewMode
        });
    }, [
        viewMode
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "p-1 flex flex-row gap-1 border border-neutral-content rounded-[0.625rem]",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                onClick: (e)=>onChangeViewMode(e, _types_global__WEBPACK_IMPORTED_MODULE_3__/* .ViewMode */ .wO.Card),
                className: `btn btn-square btn-sm btn-ghost ${viewMode == _types_global__WEBPACK_IMPORTED_MODULE_3__/* .ViewMode */ .wO.Card ? "bg-primary/20 hover:bg-primary/20" : "hover:bg-neutral/20"}`,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                    className: "bi-grid w-4 h-4 text-neutral"
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                onClick: (e)=>onChangeViewMode(e, _types_global__WEBPACK_IMPORTED_MODULE_3__/* .ViewMode */ .wO.Masonry),
                className: `btn btn-square btn-sm btn-ghost ${viewMode == _types_global__WEBPACK_IMPORTED_MODULE_3__/* .ViewMode */ .wO.Masonry ? "bg-primary/20 hover:bg-primary/20" : "hover:bg-neutral/20"}`,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                    className: "bi bi-columns-gap w-4 h-4 text-neutral"
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                onClick: (e)=>onChangeViewMode(e, _types_global__WEBPACK_IMPORTED_MODULE_3__/* .ViewMode */ .wO.List),
                className: `btn btn-square btn-sm btn-ghost ${viewMode == _types_global__WEBPACK_IMPORTED_MODULE_3__/* .ViewMode */ .wO.List ? "bg-primary/20 hover:bg-primary/20" : "hover:bg-neutral/20"}`,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                    className: "bi bi-view-stacked w-4 h-4 text-neutral"
                })
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7976:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ useOnScreen)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function useOnScreen(ref) {
    const [isIntersecting, setIntersecting] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    const observer = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>new IntersectionObserver(([entry])=>setIntersecting(entry.isIntersecting)), [
        ref
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        observer.observe(ref.current);
        return ()=>observer.disconnect();
    }, []);
    return isIntersecting;
}


/***/ }),

/***/ 2008:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   j: () => (/* binding */ generateLinkHref)
/* harmony export */ });
/* harmony import */ var _types_global__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7102);
/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3524);
/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _shared_getArchiveValidity__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(326);



const generateLinkHref = (link, account)=>{
    // Return the links href based on the account's preference
    // If the user's preference is not available, return the original link
    if (account.linksRouteTo === _prisma_client__WEBPACK_IMPORTED_MODULE_1__.LinksRouteTo.ORIGINAL && link.type === "url") {
        return link.url || "";
    } else if (account.linksRouteTo === _prisma_client__WEBPACK_IMPORTED_MODULE_1__.LinksRouteTo.PDF || link.type === "pdf") {
        if (!(0,_shared_getArchiveValidity__WEBPACK_IMPORTED_MODULE_2__/* .pdfAvailable */ .hd)(link)) return link.url || "";
        return `/preserved/${link?.id}?format=${_types_global__WEBPACK_IMPORTED_MODULE_0__/* .ArchivedFormat */ .Gt.pdf}`;
    } else if (account.linksRouteTo === _prisma_client__WEBPACK_IMPORTED_MODULE_1__.LinksRouteTo.READABLE && link.type === "url") {
        if (!(0,_shared_getArchiveValidity__WEBPACK_IMPORTED_MODULE_2__/* .readabilityAvailable */ .Ji)(link)) return link.url || "";
        return `/preserved/${link?.id}?format=${_types_global__WEBPACK_IMPORTED_MODULE_0__/* .ArchivedFormat */ .Gt.readability}`;
    } else if (account.linksRouteTo === _prisma_client__WEBPACK_IMPORTED_MODULE_1__.LinksRouteTo.SCREENSHOT || link.type === "image") {
        if (!(0,_shared_getArchiveValidity__WEBPACK_IMPORTED_MODULE_2__/* .screenshotAvailable */ .RM)(link)) return link.url || "";
        return `/preserved/${link?.id}?format=${link?.image?.endsWith("png") ? _types_global__WEBPACK_IMPORTED_MODULE_0__/* .ArchivedFormat */ .Gt.png : _types_global__WEBPACK_IMPORTED_MODULE_0__/* .ArchivedFormat */ .Gt.jpeg}`;
    } else if (account.linksRouteTo === _prisma_client__WEBPACK_IMPORTED_MODULE_1__.LinksRouteTo.MONOLITH) {
        if (!(0,_shared_getArchiveValidity__WEBPACK_IMPORTED_MODULE_2__/* .monolithAvailable */ .ZV)(link)) return link.url || "";
        return `/preserved/${link?.id}?format=${_types_global__WEBPACK_IMPORTED_MODULE_0__/* .ArchivedFormat */ .Gt.monolith}`;
    } else {
        return link.url || "";
    }
};


/***/ }),

/***/ 5662:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var zustand__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6912);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([zustand__WEBPACK_IMPORTED_MODULE_0__]);
zustand__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const useLinkStore = (0,zustand__WEBPACK_IMPORTED_MODULE_0__.create)()((set)=>({
        selectedLinks: [],
        setSelectedLinks: (links)=>set({
                selectedLinks: links
            }),
        updateLinks: async (links, removePreviousTags, newData)=>{
            const response = await fetch("/api/v1/links", {
                body: JSON.stringify({
                    links,
                    removePreviousTags,
                    newData
                }),
                headers: {
                    "Content-Type": "application/json"
                },
                method: "PUT"
            });
            const data = await response.json();
            if (response.ok) {
            // Update the selected links with the new data
            }
            return {
                ok: response.ok,
                data: data.response
            };
        }
    }));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useLinkStore);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2987:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/** @type {import('tailwindcss').Config} */ 
const plugin = __webpack_require__(6735);
module.exports = {
    daisyui: {
        themes: [
            {
                light: {
                    primary: "#0369a1",
                    secondary: "#0891b2",
                    accent: "#6d28d9",
                    neutral: "#6b7280",
                    "neutral-content": "#d1d5db",
                    "base-100": "#ffffff",
                    "base-200": "#f3f4f6",
                    "base-content": "#0a0a0a",
                    info: "#a5f3fc",
                    success: "#22c55e",
                    warning: "#facc15",
                    error: "#dc2626"
                }
            },
            {
                dark: {
                    primary: "#7dd3fc",
                    secondary: "#22d3ee",
                    accent: "#6d28d9",
                    neutral: "#9ca3af",
                    "neutral-content": "#404040",
                    "base-100": "#171717",
                    "base-200": "#262626",
                    "base-content": "#fafafa",
                    info: "#009ee4",
                    success: "#00b17d",
                    warning: "#eac700",
                    error: "#f1293c"
                }
            }
        ]
    },
    darkMode: [
        "class",
        '[data-theme="dark"]'
    ],
    content: [
        "./app/**/*.{js,ts,jsx,tsx}",
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
        // For the "layouts" directory
        "./layouts/**/*.{js,ts,jsx,tsx}"
    ],
    plugins: [
        __webpack_require__(8582),
        plugin(({ addVariant })=>{
            addVariant("dark", '&[data-theme="dark"]');
        })
    ]
};


/***/ })

};
;