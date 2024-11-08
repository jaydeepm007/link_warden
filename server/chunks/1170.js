"use strict";
exports.id = 1170;
exports.ids = [1170];
exports.modules = {

/***/ 4006:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ Announcement)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1377);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_3__);




function Announcement({ toggleAnnouncementBar }) {
    const announcementId = localStorage.getItem("announcementId");
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "fixed mx-auto bottom-20 sm:bottom-10 w-full pointer-events-none p-5 z-30",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "mx-auto pointer-events-auto p-2 flex justify-between gap-2 items-center border border-primary shadow-xl rounded-xl bg-base-300 backdrop-blur-sm bg-opacity-80 max-w-md",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                    className: "bi-stars text-2xl text-yellow-600 dark:text-yellow-500"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                    className: "w-4/5 text-center text-sm sm:text-base",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_i18next__WEBPACK_IMPORTED_MODULE_3__.Trans, {
                        i18nKey: "new_version_announcement",
                        values: {
                            version: announcementId
                        },
                        components: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                href: `https://blog.linkwarden.app/releases/${announcementId}`,
                                target: "_blank",
                                className: "underline"
                            }, 0)
                        ]
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                    onClick: toggleAnnouncementBar,
                    className: "btn btn-ghost btn-square btn-sm",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                        className: "bi-x text-xl"
                    })
                })
            ]
        })
    });
}


/***/ }),

/***/ 4147:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _atlaskit_tree__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6119);
/* harmony import */ var _atlaskit_tree__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_atlaskit_tree__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6201);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1377);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _hooks_store_collections__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7179);
/* harmony import */ var _hooks_store_user__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2676);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_hot_toast__WEBPACK_IMPORTED_MODULE_5__, _hooks_store_collections__WEBPACK_IMPORTED_MODULE_7__, _hooks_store_user__WEBPACK_IMPORTED_MODULE_8__]);
([react_hot_toast__WEBPACK_IMPORTED_MODULE_5__, _hooks_store_collections__WEBPACK_IMPORTED_MODULE_7__, _hooks_store_user__WEBPACK_IMPORTED_MODULE_8__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);









const CollectionListing = ()=>{
    const { t } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_6__.useTranslation)();
    const updateCollection = (0,_hooks_store_collections__WEBPACK_IMPORTED_MODULE_7__/* .useUpdateCollection */ .vU)();
    const { data: collections = [], isLoading } = (0,_hooks_store_collections__WEBPACK_IMPORTED_MODULE_7__/* .useCollections */ .bX)();
    const { data: user = {} } = (0,_hooks_store_user__WEBPACK_IMPORTED_MODULE_8__/* .useUser */ .a)();
    const updateUser = (0,_hooks_store_user__WEBPACK_IMPORTED_MODULE_8__/* .useUpdateUser */ .I)();
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();
    const currentPath = router.asPath;
    const [tree, setTree] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const initialTree = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>{
        if (// !tree &&
        collections.length > 0) {
            return buildTreeFromCollections(collections, router, user.collectionOrder);
        } else return undefined;
    }, [
        collections,
        user,
        router
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        // if (!tree)
        setTree(initialTree);
    }, [
        initialTree
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (user.username) {
            if ((!user.collectionOrder || user.collectionOrder.length === 0) && collections.length > 0) updateUser.mutate({
                ...user,
                collectionOrder: collections.filter((e)=>e.parentId === null || !collections.find((i)=>i.id === e.parentId)) // Filter out collections with non-null parentId
                .map((e)=>e.id)
            });
            else {
                const newCollectionOrder = [
                    ...user.collectionOrder || []
                ];
                // Start with collections that are in both account.collectionOrder and collections
                const existingCollectionIds = collections.map((c)=>c.id);
                const filteredCollectionOrder = user.collectionOrder.filter((id)=>existingCollectionIds.includes(id));
                // Add new collections that are not in account.collectionOrder and meet the specific conditions
                collections.forEach((collection)=>{
                    if (!filteredCollectionOrder.includes(collection.id) && (!collection.parentId || collection.ownerId === user.id)) {
                        filteredCollectionOrder.push(collection.id);
                    }
                });
                // check if the newCollectionOrder is the same as the old one
                if (JSON.stringify(newCollectionOrder) !== JSON.stringify(user.collectionOrder)) {
                    updateUser.mutateAsync({
                        ...user,
                        collectionOrder: newCollectionOrder
                    });
                }
            }
        }
    }, [
        collections
    ]);
    const onExpand = (movedCollectionId)=>{
        setTree((currentTree)=>(0,_atlaskit_tree__WEBPACK_IMPORTED_MODULE_2__.mutateTree)(currentTree, movedCollectionId, {
                isExpanded: true
            }));
    };
    const onCollapse = (movedCollectionId)=>{
        setTree((currentTree)=>(0,_atlaskit_tree__WEBPACK_IMPORTED_MODULE_2__.mutateTree)(currentTree, movedCollectionId, {
                isExpanded: false
            }));
    };
    const onDragEnd = async (source, destination)=>{
        if (!destination || !tree) {
            return;
        }
        if (source.index === destination.index && source.parentId === destination.parentId) {
            return;
        }
        const movedCollectionId = Number(tree.items[source.parentId].children[source.index]);
        const movedCollection = collections.find((c)=>c.id === movedCollectionId);
        const destinationCollection = collections.find((c)=>c.id === Number(destination.parentId));
        if (movedCollection?.ownerId !== user.id && destination.parentId !== source.parentId || destinationCollection?.ownerId !== user.id && destination.parentId !== "root") {
            return react_hot_toast__WEBPACK_IMPORTED_MODULE_5__["default"].error(t("cant_change_collection_you_dont_own"));
        }
        setTree((currentTree)=>(0,_atlaskit_tree__WEBPACK_IMPORTED_MODULE_2__.moveItemOnTree)(currentTree, source, destination));
        const updatedCollectionOrder = [
            ...user.collectionOrder
        ];
        if (source.parentId !== destination.parentId) {
            await updateCollection.mutateAsync({
                ...movedCollection,
                parentId: destination.parentId && destination.parentId !== "root" ? Number(destination.parentId) : destination.parentId === "root" ? "root" : null
            }, {
                onError: (error)=>{
                    react_hot_toast__WEBPACK_IMPORTED_MODULE_5__["default"].error(error.message);
                }
            });
        }
        if (destination.index !== undefined && destination.parentId === source.parentId && source.parentId === "root") {
            updatedCollectionOrder.includes(movedCollectionId) && updatedCollectionOrder.splice(source.index, 1);
            updatedCollectionOrder.splice(destination.index, 0, movedCollectionId);
            await updateUser.mutateAsync({
                ...user,
                collectionOrder: updatedCollectionOrder
            });
        } else if (destination.index !== undefined && destination.parentId === "root") {
            updatedCollectionOrder.splice(destination.index, 0, movedCollectionId);
            updateUser.mutate({
                ...user,
                collectionOrder: updatedCollectionOrder
            });
        } else if (source.parentId === "root" && destination.parentId && destination.parentId !== "root") {
            updatedCollectionOrder.splice(source.index, 1);
            await updateUser.mutateAsync({
                ...user,
                collectionOrder: updatedCollectionOrder
            });
        }
    };
    if (isLoading) {
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "flex flex-col gap-4",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "skeleton h-4 w-full"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "skeleton h-4 w-full"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "skeleton h-4 w-full"
                })
            ]
        });
    } else if (!tree) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
            className: "text-neutral text-xs font-semibold truncate w-full px-2 mt-5 mb-8",
            children: t("you_have_no_collections")
        });
    } else return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_atlaskit_tree__WEBPACK_IMPORTED_MODULE_2___default()), {
        tree: tree,
        renderItem: (itemProps)=>renderItem({
                ...itemProps
            }, currentPath),
        onExpand: onExpand,
        onCollapse: onCollapse,
        onDragEnd: onDragEnd,
        isDragEnabled: true,
        isNestingEnabled: true
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CollectionListing);
const renderItem = ({ item, onExpand, onCollapse, provided }, currentPath)=>{
    const collection = item.data;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        ref: provided.innerRef,
        ...provided.draggableProps,
        className: "mb-1",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: `${currentPath === `/collections/${collection.id}` ? "bg-primary/20 is-active" : "hover:bg-neutral/20"} duration-100 flex gap-1 items-center pr-2 pl-1 rounded-md`,
            children: [
                Icon(item, onExpand, onCollapse),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                    href: `/collections/${collection.id}`,
                    className: "w-full",
                    ...provided.dragHandleProps,
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: `py-1 cursor-pointer flex items-center gap-2 w-full rounded-md h-8 capitalize`,
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                className: "bi-folder-fill text-2xl drop-shadow",
                                style: {
                                    color: collection.color
                                }
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: "truncate w-full",
                                children: collection.name
                            }),
                            collection.isPublic ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                className: "bi-globe2 text-sm text-black/50 dark:text-white/50 drop-shadow",
                                title: "This collection is being shared publicly."
                            }) : undefined,
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "drop-shadow text-neutral text-xs",
                                children: collection._count?.links
                            })
                        ]
                    })
                })
            ]
        })
    });
};
const Icon = (item, onExpand, onCollapse)=>{
    if (item.children && item.children.length > 0) {
        return item.isExpanded ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
            onClick: ()=>onCollapse(item.id),
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "bi-caret-down-fill opacity-50 hover:opacity-100 duration-200"
            })
        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
            onClick: ()=>onExpand(item.id),
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "bi-caret-right-fill opacity-40 hover:opacity-100 duration-200"
            })
        });
    }
    // return <span>&bull;</span>;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {});
};
const buildTreeFromCollections = (collections, router, order)=>{
    if (order) {
        collections.sort((a, b)=>{
            return order.indexOf(a.id) - order.indexOf(b.id);
        });
    }
    const items = collections.reduce((acc, collection)=>{
        acc[collection.id] = {
            id: collection.id,
            children: [],
            hasChildren: false,
            isExpanded: false,
            data: {
                id: collection.id,
                parentId: collection.parentId,
                name: collection.name,
                description: collection.description,
                color: collection.color,
                isPublic: collection.isPublic,
                ownerId: collection.ownerId,
                createdAt: collection.createdAt,
                updatedAt: collection.updatedAt,
                _count: {
                    links: collection._count?.links
                }
            }
        };
        return acc;
    }, {});
    const activeCollectionId = Number(router.asPath.split("/collections/")[1]);
    if (activeCollectionId) {
        for(const item in items){
            const collection = items[item];
            if (Number(item) === activeCollectionId && collection.data.parentId) {
                // get all the parents of the active collection recursively until root and set isExpanded to true
                let parentId = collection.data.parentId || null;
                while(parentId && items[parentId]){
                    items[parentId].isExpanded = true;
                    parentId = items[parentId].data.parentId;
                }
            }
        }
    }
    collections.forEach((collection)=>{
        const parentId = collection.parentId;
        if (parentId && items[parentId] && collection.id) {
            items[parentId].children.push(collection.id);
            items[parentId].hasChildren = true;
        }
    });
    const rootId = "root";
    items[rootId] = {
        id: rootId,
        children: collections.filter((c)=>c.parentId === null || !collections.find((i)=>i.id === c.parentId)).map((c)=>c.id) || "",
        hasChildren: true,
        isExpanded: true,
        data: {
            name: "Root"
        }
    };
    return {
        rootId,
        items
    };
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2693:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ MobileNavigation)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var _lib_client_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4446);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ModalContent_NewLinkModal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5016);
/* harmony import */ var _ModalContent_NewCollectionModal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6081);
/* harmony import */ var _ModalContent_UploadFileModal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4574);
/* harmony import */ var _MobileNavigationButton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5198);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1377);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_7__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_lib_client_utils__WEBPACK_IMPORTED_MODULE_1__, _ModalContent_NewLinkModal__WEBPACK_IMPORTED_MODULE_3__, _ModalContent_NewCollectionModal__WEBPACK_IMPORTED_MODULE_4__, _ModalContent_UploadFileModal__WEBPACK_IMPORTED_MODULE_5__, _MobileNavigationButton__WEBPACK_IMPORTED_MODULE_6__]);
([_lib_client_utils__WEBPACK_IMPORTED_MODULE_1__, _ModalContent_NewLinkModal__WEBPACK_IMPORTED_MODULE_3__, _ModalContent_NewCollectionModal__WEBPACK_IMPORTED_MODULE_4__, _ModalContent_UploadFileModal__WEBPACK_IMPORTED_MODULE_5__, _MobileNavigationButton__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);









function MobileNavigation({}) {
    const { t } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_7__.useTranslation)();
    const [newLinkModal, setNewLinkModal] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const [newCollectionModal, setNewCollectionModal] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const [uploadFileModal, setUploadFileModal] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: `fixed bottom-0 left-0 right-0 z-30 duration-200 sm:hidden`,
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: `w-full flex bg-base-100 ${(0,_lib_client_utils__WEBPACK_IMPORTED_MODULE_1__/* .isIphone */ .qx)() && (0,_lib_client_utils__WEBPACK_IMPORTED_MODULE_1__/* .isPWA */ .Ee)() ? "pb-5" : ""} border-solid border-t-neutral-content border-t`,
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_MobileNavigationButton__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                            href: `/dashboard`,
                            icon: "bi-house"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_MobileNavigationButton__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                            href: `/links/pinned`,
                            icon: "bi-pin-angle"
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "dropdown dropdown-top -mt-4",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    tabIndex: 0,
                                    role: "button",
                                    onMouseDown: _lib_client_utils__WEBPACK_IMPORTED_MODULE_1__/* .dropdownTriggerer */ .Mm,
                                    className: `flex items-center btn btn-accent dark:border-violet-400 text-white btn-circle w-20 h-20 px-2 relative`,
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                            className: "bi-plus text-5xl pointer-events-none"
                                        })
                                    })
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                    className: "dropdown-content z-[1] menu shadow bg-base-200 border border-neutral-content rounded-box mb-1 -ml-12",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                onClick: ()=>{
                                                    (document?.activeElement)?.blur();
                                                    setNewLinkModal(true);
                                                },
                                                tabIndex: 0,
                                                role: "button",
                                                className: "whitespace-nowrap",
                                                children: t("new_link")
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                onClick: ()=>{
                                                    (document?.activeElement)?.blur();
                                                    setUploadFileModal(true);
                                                },
                                                tabIndex: 0,
                                                role: "button",
                                                className: "whitespace-nowrap",
                                                children: t("upload_file")
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                onClick: ()=>{
                                                    (document?.activeElement)?.blur();
                                                    setNewCollectionModal(true);
                                                },
                                                tabIndex: 0,
                                                role: "button",
                                                className: "whitespace-nowrap",
                                                children: t("new_collection")
                                            })
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_MobileNavigationButton__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                            href: `/links`,
                            icon: "bi-link-45deg"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_MobileNavigationButton__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                            href: `/collections`,
                            icon: "bi-folder"
                        })
                    ]
                })
            }),
            newLinkModal ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ModalContent_NewLinkModal__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                onClose: ()=>setNewLinkModal(false)
            }) : undefined,
            newCollectionModal ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ModalContent_NewCollectionModal__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                onClose: ()=>setNewCollectionModal(false)
            }) : undefined,
            uploadFileModal ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ModalContent_UploadFileModal__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                onClose: ()=>setUploadFileModal(false)
            }) : undefined
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5198:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ MobileNavigationButton)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var _lib_client_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4446);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_lib_client_utils__WEBPACK_IMPORTED_MODULE_1__]);
_lib_client_utils__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





function MobileNavigationButton({ href, icon }) {
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    const [active, setActive] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);
    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{
        setActive(href === router.asPath);
    }, [
        router
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
        href: href,
        className: "w-full active:scale-[80%] duration-200 select-none",
        draggable: "false",
        style: {
            WebkitTouchCallout: "none"
        },
        onContextMenu: (e)=>{
            if ((0,_lib_client_utils__WEBPACK_IMPORTED_MODULE_1__/* .isPWA */ .Ee)()) {
                e.preventDefault();
                e.stopPropagation();
                return false;
            } else return null;
        },
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: `py-2 cursor-pointer gap-2 w-full rounded-full capitalize flex items-center justify-center`,
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                className: `${icon} text-primary text-3xl drop-shadow duration-200 rounded-full w-14 h-14 text-center pt-[0.65rem] ${active || false ? "bg-primary/20" : ""}`
            })
        })
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6081:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ NewCollectionModal)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_TextInput__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4157);
/* harmony import */ var react_colorful__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9559);
/* harmony import */ var _Modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7169);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1377);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _hooks_store_collections__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7179);
/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6201);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_colorful__WEBPACK_IMPORTED_MODULE_3__, _Modal__WEBPACK_IMPORTED_MODULE_4__, _hooks_store_collections__WEBPACK_IMPORTED_MODULE_6__, react_hot_toast__WEBPACK_IMPORTED_MODULE_7__]);
([react_colorful__WEBPACK_IMPORTED_MODULE_3__, _Modal__WEBPACK_IMPORTED_MODULE_4__, _hooks_store_collections__WEBPACK_IMPORTED_MODULE_6__, react_hot_toast__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);








function NewCollectionModal({ onClose, parent }) {
    const { t } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_5__.useTranslation)();
    const initial = {
        parentId: parent?.id,
        name: "",
        description: "",
        color: "#0ea5e9"
    };
    const [collection, setCollection] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(initial);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        setCollection(initial);
    }, []);
    const [submitLoader, setSubmitLoader] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const createCollection = (0,_hooks_store_collections__WEBPACK_IMPORTED_MODULE_6__/* .useCreateCollection */ .$J)();
    const submit = async ()=>{
        if (submitLoader) return;
        if (!collection) return null;
        setSubmitLoader(true);
        const load = react_hot_toast__WEBPACK_IMPORTED_MODULE_7__["default"].loading(t("creating"));
        await createCollection.mutateAsync(collection, {
            onSettled: (data, error)=>{
                react_hot_toast__WEBPACK_IMPORTED_MODULE_7__["default"].dismiss(load);
                if (error) {
                    react_hot_toast__WEBPACK_IMPORTED_MODULE_7__["default"].error(error.message);
                } else {
                    onClose();
                    react_hot_toast__WEBPACK_IMPORTED_MODULE_7__["default"].success(t("created"));
                }
            }
        });
        setSubmitLoader(false);
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_Modal__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
        toggleModal: onClose,
        children: [
            parent?.id ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        className: "text-xl font-thin",
                        children: t("new_sub_collection")
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        className: "capitalize text-sm",
                        children: t("for_collection", {
                            name: parent.name
                        })
                    })
                ]
            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                className: "text-xl font-thin",
                children: t("create_new_collection")
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "divider mb-3 mt-1"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex flex-col gap-3",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex flex-col sm:flex-row gap-3",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "w-full",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: "mb-2",
                                        children: t("name")
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "flex flex-col gap-2",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_TextInput__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                                className: "bg-base-200",
                                                value: collection.name,
                                                placeholder: t("collection_name_placeholder"),
                                                onChange: (e)=>setCollection({
                                                        ...collection,
                                                        name: e.target.value
                                                    })
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        className: "w-full mb-2",
                                                        children: t("color")
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "color-picker flex justify-between items-center",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_colorful__WEBPACK_IMPORTED_MODULE_3__.HexColorPicker, {
                                                                color: collection.color,
                                                                onChange: (color)=>setCollection({
                                                                        ...collection,
                                                                        color
                                                                    })
                                                            }),
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                className: "flex flex-col gap-2 items-center w-32",
                                                                children: [
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                        className: "bi-folder-fill text-5xl",
                                                                        style: {
                                                                            color: collection.color
                                                                        }
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                        className: "btn btn-ghost btn-xs",
                                                                        onClick: ()=>setCollection({
                                                                                ...collection,
                                                                                color: "#0ea5e9"
                                                                            }),
                                                                        children: t("reset")
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "w-full",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: "mb-2",
                                        children: t("description")
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("textarea", {
                                        className: "w-full h-[13rem] resize-none border rounded-md duration-100 bg-base-200 p-2 outline-none border-neutral-content focus:border-primary",
                                        placeholder: t("collection_description_placeholder"),
                                        value: collection.description,
                                        onChange: (e)=>setCollection({
                                                ...collection,
                                                description: e.target.value
                                            })
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        className: "btn btn-accent dark:border-violet-400 text-white w-fit ml-auto",
                        onClick: submit,
                        children: t("create_collection_button")
                    })
                ]
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5016:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ NewLinkModal)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_InputSelect_CollectionSelection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1810);
/* harmony import */ var _components_InputSelect_TagSelection__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2122);
/* harmony import */ var _components_TextInput__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4157);
/* harmony import */ var _lib_client_unescapeString__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(9401);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1649);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _Modal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7169);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1377);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _hooks_store_collections__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(7179);
/* harmony import */ var _hooks_store_links__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(6496);
/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(6201);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_InputSelect_CollectionSelection__WEBPACK_IMPORTED_MODULE_2__, _components_InputSelect_TagSelection__WEBPACK_IMPORTED_MODULE_3__, _Modal__WEBPACK_IMPORTED_MODULE_7__, _hooks_store_collections__WEBPACK_IMPORTED_MODULE_9__, _hooks_store_links__WEBPACK_IMPORTED_MODULE_10__, react_hot_toast__WEBPACK_IMPORTED_MODULE_11__]);
([_components_InputSelect_CollectionSelection__WEBPACK_IMPORTED_MODULE_2__, _components_InputSelect_TagSelection__WEBPACK_IMPORTED_MODULE_3__, _Modal__WEBPACK_IMPORTED_MODULE_7__, _hooks_store_collections__WEBPACK_IMPORTED_MODULE_9__, _hooks_store_links__WEBPACK_IMPORTED_MODULE_10__, react_hot_toast__WEBPACK_IMPORTED_MODULE_11__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);













function NewLinkModal({ onClose }) {
    const { t } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_8__.useTranslation)();
    const { data } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_5__.useSession)();
    const initial = {
        name: "",
        url: "",
        description: "",
        type: "url",
        tags: [],
        preview: "",
        image: "",
        pdf: "",
        readable: "",
        monolith: "",
        textContent: "",
        collection: {
            name: "",
            ownerId: data?.user.id
        }
    };
    const [link, setLink] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(initial);
    const addLink = (0,_hooks_store_links__WEBPACK_IMPORTED_MODULE_10__/* .useAddLink */ .Mj)();
    const [submitLoader, setSubmitLoader] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [optionsExpanded, setOptionsExpanded] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter)();
    const { data: collections = [] } = (0,_hooks_store_collections__WEBPACK_IMPORTED_MODULE_9__/* .useCollections */ .bX)();
    const setCollection = (e)=>{
        if (e?.__isNew__) e.value = null;
        setLink({
            ...link,
            collection: {
                id: e?.value,
                name: e?.label,
                ownerId: e?.ownerId
            }
        });
    };
    const setTags = (e)=>{
        const tagNames = e.map((e)=>({
                name: e.label
            }));
        setLink({
            ...link,
            tags: tagNames
        });
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (router.query.id) {
            const currentCollection = collections.find((e)=>e.id == Number(router.query.id));
            if (currentCollection && currentCollection.ownerId && router.asPath.startsWith("/collections/")) setLink({
                ...initial,
                collection: {
                    id: currentCollection.id,
                    name: currentCollection.name,
                    ownerId: currentCollection.ownerId
                }
            });
        } else setLink({
            ...initial,
            collection: {
                name: "Unorganized",
                ownerId: data?.user.id
            }
        });
    }, []);
    const submit = async ()=>{
        if (!submitLoader) {
            setSubmitLoader(true);
            const load = react_hot_toast__WEBPACK_IMPORTED_MODULE_11__["default"].loading(t("creating_link"));
            await addLink.mutateAsync(link, {
                onSettled: (data, error)=>{
                    react_hot_toast__WEBPACK_IMPORTED_MODULE_11__["default"].dismiss(load);
                    if (error) {
                        react_hot_toast__WEBPACK_IMPORTED_MODULE_11__["default"].error(error.message);
                    } else {
                        onClose();
                        react_hot_toast__WEBPACK_IMPORTED_MODULE_11__["default"].success(t("link_created"));
                    }
                }
            });
            setSubmitLoader(false);
        }
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_Modal__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
        toggleModal: onClose,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                className: "text-xl font-thin",
                children: t("create_new_link")
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "divider mb-3 mt-1"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "grid grid-flow-row-dense sm:grid-cols-5 gap-3",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "sm:col-span-3 col-span-5",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: "mb-2",
                                children: t("link")
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_TextInput__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                value: link.url || "",
                                onChange: (e)=>setLink({
                                        ...link,
                                        url: e.target.value
                                    }),
                                placeholder: t("link_url_placeholder"),
                                className: "bg-base-200"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "sm:col-span-2 col-span-5",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: "mb-2",
                                children: t("collection")
                            }),
                            link.collection.name ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_InputSelect_CollectionSelection__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                onChange: setCollection,
                                defaultValue: {
                                    label: link.collection.name,
                                    value: link.collection.id
                                }
                            }) : null
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "mt-2",
                children: optionsExpanded ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "mt-5",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "grid sm:grid-cols-2 gap-3",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: "mb-2",
                                        children: t("name")
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_TextInput__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                        value: link.name,
                                        onChange: (e)=>setLink({
                                                ...link,
                                                name: e.target.value
                                            }),
                                        placeholder: t("link_name_placeholder"),
                                        className: "bg-base-200"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: "mb-2",
                                        children: t("tags")
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_InputSelect_TagSelection__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                        onChange: setTags,
                                        defaultValue: link.tags.map((e)=>({
                                                label: e.name,
                                                value: e.id
                                            }))
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "sm:col-span-2",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: "mb-2",
                                        children: t("description")
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("textarea", {
                                        value: (0,_lib_client_unescapeString__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z)(link.description),
                                        onChange: (e)=>setLink({
                                                ...link,
                                                description: e.target.value
                                            }),
                                        placeholder: t("link_description_placeholder"),
                                        className: "resize-none w-full rounded-md p-2 border-neutral-content bg-base-200 focus:border-primary border-solid border outline-none duration-100"
                                    })
                                ]
                            })
                        ]
                    })
                }) : undefined
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex justify-between items-center mt-5",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        onClick: ()=>setOptionsExpanded(!optionsExpanded),
                        className: `rounded-md cursor-pointer btn btn-sm btn-ghost duration-100 flex items-center px-2 w-fit text-sm`,
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                children: optionsExpanded ? t("hide_options") : t("more_options")
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                className: `bi-chevron-${optionsExpanded ? "up" : "down"}`
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        className: "btn btn-accent dark:border-violet-400 text-white",
                        onClick: submit,
                        children: t("create_link")
                    })
                ]
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4574:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ UploadFileModal)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_InputSelect_CollectionSelection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1810);
/* harmony import */ var _components_InputSelect_TagSelection__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2122);
/* harmony import */ var _components_TextInput__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4157);
/* harmony import */ var _lib_client_unescapeString__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(9401);
/* harmony import */ var _types_global__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7102);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1649);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6201);
/* harmony import */ var _Modal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(7169);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(1377);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _hooks_store_collections__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(7179);
/* harmony import */ var _hooks_store_links__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(6496);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_InputSelect_CollectionSelection__WEBPACK_IMPORTED_MODULE_2__, _components_InputSelect_TagSelection__WEBPACK_IMPORTED_MODULE_3__, react_hot_toast__WEBPACK_IMPORTED_MODULE_8__, _Modal__WEBPACK_IMPORTED_MODULE_9__, _hooks_store_collections__WEBPACK_IMPORTED_MODULE_11__, _hooks_store_links__WEBPACK_IMPORTED_MODULE_12__]);
([_components_InputSelect_CollectionSelection__WEBPACK_IMPORTED_MODULE_2__, _components_InputSelect_TagSelection__WEBPACK_IMPORTED_MODULE_3__, react_hot_toast__WEBPACK_IMPORTED_MODULE_8__, _Modal__WEBPACK_IMPORTED_MODULE_9__, _hooks_store_collections__WEBPACK_IMPORTED_MODULE_11__, _hooks_store_links__WEBPACK_IMPORTED_MODULE_12__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);














function UploadFileModal({ onClose }) {
    const { t } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_10__.useTranslation)();
    const { data } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_6__.useSession)();
    const initial = {
        name: "",
        url: "",
        description: "",
        type: "url",
        tags: [],
        preview: "",
        image: "",
        pdf: "",
        readable: "",
        monolith: "",
        textContent: "",
        collection: {
            name: "",
            ownerId: data?.user.id
        }
    };
    const [link, setLink] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(initial);
    const [file, setFile] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const uploadFile = (0,_hooks_store_links__WEBPACK_IMPORTED_MODULE_12__/* .useUploadFile */ .kR)();
    const [submitLoader, setSubmitLoader] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [optionsExpanded, setOptionsExpanded] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_7__.useRouter)();
    const { data: collections = [] } = (0,_hooks_store_collections__WEBPACK_IMPORTED_MODULE_11__/* .useCollections */ .bX)();
    const setCollection = (e)=>{
        if (e?.__isNew__) e.value = null;
        setLink({
            ...link,
            collection: {
                id: e?.value,
                name: e?.label,
                ownerId: e?.ownerId
            }
        });
    };
    const setTags = (e)=>{
        const tagNames = e.map((e)=>{
            return {
                name: e.label
            };
        });
        setLink({
            ...link,
            tags: tagNames
        });
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        setOptionsExpanded(false);
        if (router.query.id) {
            const currentCollection = collections.find((e)=>e.id == Number(router.query.id));
            if (currentCollection && currentCollection.ownerId && router.asPath.startsWith("/collections/")) setLink({
                ...initial,
                collection: {
                    id: currentCollection.id,
                    name: currentCollection.name,
                    ownerId: currentCollection.ownerId
                }
            });
        } else setLink({
            ...initial,
            collection: {
                name: "Unorganized",
                ownerId: data?.user.id
            }
        });
    }, [
        router,
        collections
    ]);
    const submit = async ()=>{
        if (!submitLoader && file) {
            let fileType = null;
            let linkType = null;
            if (file?.type === "image/jpg" || file.type === "image/jpeg") {
                fileType = _types_global__WEBPACK_IMPORTED_MODULE_5__/* .ArchivedFormat */ .Gt.jpeg;
                linkType = "image";
            } else if (file.type === "image/png") {
                fileType = _types_global__WEBPACK_IMPORTED_MODULE_5__/* .ArchivedFormat */ .Gt.png;
                linkType = "image";
            } else if (file.type === "application/pdf") {
                fileType = _types_global__WEBPACK_IMPORTED_MODULE_5__/* .ArchivedFormat */ .Gt.pdf;
                linkType = "pdf";
            }
            // else if (file.type === "text/html") {
            //   fileType = ArchivedFormat.monolith;
            //   linkType = "monolith";
            // }
            setSubmitLoader(true);
            const load = react_hot_toast__WEBPACK_IMPORTED_MODULE_8__["default"].loading(t("creating"));
            await uploadFile.mutateAsync({
                link,
                file
            }, {
                onSettled: (data, error)=>{
                    react_hot_toast__WEBPACK_IMPORTED_MODULE_8__["default"].dismiss(load);
                    if (error) {
                        react_hot_toast__WEBPACK_IMPORTED_MODULE_8__["default"].error(error.message);
                    } else {
                        onClose();
                        react_hot_toast__WEBPACK_IMPORTED_MODULE_8__["default"].success(t("created_success"));
                    }
                }
            });
            setSubmitLoader(false);
        }
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_Modal__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
        toggleModal: onClose,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "flex gap-2 items-start",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                    className: "text-xl font-thin",
                    children: t("upload_file")
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "divider mb-3 mt-1"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "grid grid-flow-row-dense sm:grid-cols-5 gap-3",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "sm:col-span-3 col-span-5",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: "mb-2",
                                children: t("file")
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                className: "btn h-10 btn-sm w-full border border-neutral-content hover:border-neutral-content flex justify-between",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                    type: "file",
                                    accept: ".pdf,.png,.jpg,.jpeg,.html",
                                    className: "cursor-pointer custom-file-input",
                                    onChange: (e)=>e.target.files && setFile(e.target.files[0])
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: "text-xs font-semibold mt-2",
                                children: t("file_types", {
                                    size:  false || 10
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "sm:col-span-2 col-span-5",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: "mb-2",
                                children: t("collection")
                            }),
                            link.collection.name ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_InputSelect_CollectionSelection__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                onChange: setCollection,
                                defaultValue: {
                                    label: link.collection.name,
                                    value: link.collection.id
                                }
                            }) : null
                        ]
                    })
                ]
            }),
            optionsExpanded ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "mt-5",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "grid sm:grid-cols-2 gap-3",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    className: "mb-2",
                                    children: t("name")
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_TextInput__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                    value: link.name,
                                    onChange: (e)=>setLink({
                                            ...link,
                                            name: e.target.value
                                        }),
                                    placeholder: t("example_link"),
                                    className: "bg-base-200"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    className: "mb-2",
                                    children: t("tags")
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_InputSelect_TagSelection__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                    onChange: setTags,
                                    defaultValue: link.tags.map((e)=>({
                                            label: e.name,
                                            value: e.id
                                        }))
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "sm:col-span-2",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    className: "mb-2",
                                    children: t("description")
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("textarea", {
                                    value: (0,_lib_client_unescapeString__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z)(link.description),
                                    onChange: (e)=>setLink({
                                            ...link,
                                            description: e.target.value
                                        }),
                                    placeholder: t("description_placeholder"),
                                    className: "resize-none w-full rounded-md p-2 border-neutral-content bg-base-200 focus:border-sky-300 dark:focus:border-sky-600 border-solid border outline-none duration-100"
                                })
                            ]
                        })
                    ]
                })
            }) : undefined,
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex justify-between items-center mt-5",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        onClick: ()=>setOptionsExpanded(!optionsExpanded),
                        className: `rounded-md cursor-pointer btn btn-sm btn-ghost duration-100 flex items-center px-2 w-fit text-sm`,
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                            children: [
                                optionsExpanded ? t("hide") : t("more"),
                                " ",
                                t("options")
                            ]
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        className: "btn btn-accent dark:border-violet-400 text-white",
                        onClick: submit,
                        children: t("upload_file")
                    })
                ]
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6232:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ Navbar)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_ClickAwayHandler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2144);
/* harmony import */ var _components_Sidebar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8678);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_SearchBar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2948);
/* harmony import */ var _hooks_useWindowDimensions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8050);
/* harmony import */ var _ToggleDarkMode__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1566);
/* harmony import */ var _ModalContent_NewLinkModal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5016);
/* harmony import */ var _ModalContent_NewCollectionModal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(6081);
/* harmony import */ var _ModalContent_UploadFileModal__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(4574);
/* harmony import */ var _lib_client_utils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(4446);
/* harmony import */ var _MobileNavigation__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(2693);
/* harmony import */ var _ProfileDropdown__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(4644);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(1377);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_14__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_Sidebar__WEBPACK_IMPORTED_MODULE_3__, _components_SearchBar__WEBPACK_IMPORTED_MODULE_5__, _ToggleDarkMode__WEBPACK_IMPORTED_MODULE_7__, _ModalContent_NewLinkModal__WEBPACK_IMPORTED_MODULE_8__, _ModalContent_NewCollectionModal__WEBPACK_IMPORTED_MODULE_9__, _ModalContent_UploadFileModal__WEBPACK_IMPORTED_MODULE_10__, _lib_client_utils__WEBPACK_IMPORTED_MODULE_11__, _MobileNavigation__WEBPACK_IMPORTED_MODULE_12__, _ProfileDropdown__WEBPACK_IMPORTED_MODULE_13__]);
([_components_Sidebar__WEBPACK_IMPORTED_MODULE_3__, _components_SearchBar__WEBPACK_IMPORTED_MODULE_5__, _ToggleDarkMode__WEBPACK_IMPORTED_MODULE_7__, _ModalContent_NewLinkModal__WEBPACK_IMPORTED_MODULE_8__, _ModalContent_NewCollectionModal__WEBPACK_IMPORTED_MODULE_9__, _ModalContent_UploadFileModal__WEBPACK_IMPORTED_MODULE_10__, _lib_client_utils__WEBPACK_IMPORTED_MODULE_11__, _MobileNavigation__WEBPACK_IMPORTED_MODULE_12__, _ProfileDropdown__WEBPACK_IMPORTED_MODULE_13__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);















function Navbar() {
    const { t } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_14__.useTranslation)();
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();
    const [sidebar, setSidebar] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { width } = (0,_hooks_useWindowDimensions__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)();
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        setSidebar(false);
        document.body.style.overflow = "auto";
    }, [
        width,
        router
    ]);
    const toggleSidebar = ()=>{
        setSidebar(false);
        document.body.style.overflow = "auto";
    };
    const [newLinkModal, setNewLinkModal] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [newCollectionModal, setNewCollectionModal] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [uploadFileModal, setUploadFileModal] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "flex justify-between gap-2 items-center pl-3 pr-4 py-2 border-solid border-b-neutral-content border-b",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                onClick: ()=>{
                    setSidebar(true);
                    document.body.style.overflow = "hidden";
                },
                className: "text-neutral btn btn-square btn-sm btn-ghost lg:hidden sm:inline-flex",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                    className: "bi-list text-2xl leading-none"
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_SearchBar__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex items-center gap-2",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ToggleDarkMode__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                        className: "hidden sm:inline-grid"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "dropdown dropdown-end sm:inline-block hidden",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "tooltip tooltip-bottom",
                                "data-tip": t("create_new"),
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    tabIndex: 0,
                                    role: "button",
                                    onMouseDown: _lib_client_utils__WEBPACK_IMPORTED_MODULE_11__/* .dropdownTriggerer */ .Mm,
                                    className: "flex min-w-[3.4rem] items-center btn btn-accent dark:border-violet-400 text-white btn-sm max-h-[2rem] px-2 relative",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                className: "bi-plus text-4xl absolute -top-[0.3rem] left-0 pointer-events-none"
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                className: "bi-caret-down-fill text-xs absolute top-2 right-[0.3rem] pointer-events-none"
                                            })
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                className: "dropdown-content z-[1] menu shadow bg-base-200 border border-neutral-content rounded-box mt-1",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            onClick: ()=>{
                                                (document?.activeElement)?.blur();
                                                setNewLinkModal(true);
                                            },
                                            tabIndex: 0,
                                            role: "button",
                                            className: "whitespace-nowrap",
                                            children: t("new_link")
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            onClick: ()=>{
                                                (document?.activeElement)?.blur();
                                                setUploadFileModal(true);
                                            },
                                            tabIndex: 0,
                                            role: "button",
                                            className: "whitespace-nowrap",
                                            children: t("upload_file")
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            onClick: ()=>{
                                                (document?.activeElement)?.blur();
                                                setNewCollectionModal(true);
                                            },
                                            tabIndex: 0,
                                            role: "button",
                                            className: "whitespace-nowrap",
                                            children: t("new_collection")
                                        })
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ProfileDropdown__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {})
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_MobileNavigation__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {}),
            sidebar ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "fixed top-0 bottom-0 right-0 left-0 bg-black bg-opacity-10 backdrop-blur-sm flex items-center fade-in z-40",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ClickAwayHandler__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                    className: "h-full",
                    onClickOutside: toggleSidebar,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "slide-right h-full shadow-lg",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Sidebar__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {})
                    })
                })
            }) : null,
            newLinkModal ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ModalContent_NewLinkModal__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                onClose: ()=>setNewLinkModal(false)
            }) : undefined,
            newCollectionModal ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ModalContent_NewCollectionModal__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                onClose: ()=>setNewCollectionModal(false)
            }) : undefined,
            uploadFileModal ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ModalContent_UploadFileModal__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                onClose: ()=>setUploadFileModal(false)
            }) : undefined
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4644:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ ProfileDropdown)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var _store_localSettings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7472);
/* harmony import */ var _lib_client_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4446);
/* harmony import */ var _ProfilePhoto__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8465);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1649);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1377);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _hooks_store_user__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2676);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_store_localSettings__WEBPACK_IMPORTED_MODULE_1__, _lib_client_utils__WEBPACK_IMPORTED_MODULE_2__, _hooks_store_user__WEBPACK_IMPORTED_MODULE_7__]);
([_store_localSettings__WEBPACK_IMPORTED_MODULE_1__, _lib_client_utils__WEBPACK_IMPORTED_MODULE_2__, _hooks_store_user__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);








function ProfileDropdown() {
    const { t } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_6__.useTranslation)();
    const { settings, updateSettings } = (0,_store_localSettings__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)();
    const { data: user = {} } = (0,_hooks_store_user__WEBPACK_IMPORTED_MODULE_7__/* .useUser */ .a)();
    const isAdmin = user.id === Number( false || 1);
    const handleToggle = ()=>{
        const newTheme = settings.theme === "dark" ? "light" : "dark";
        updateSettings({
            theme: newTheme
        });
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "dropdown dropdown-end",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                tabIndex: 0,
                role: "button",
                onMouseDown: _lib_client_utils__WEBPACK_IMPORTED_MODULE_2__/* .dropdownTriggerer */ .Mm,
                className: "btn btn-circle btn-ghost",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ProfilePhoto__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                    src: user.image ? user.image : undefined,
                    priority: true
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                className: `dropdown-content z-[1] menu shadow bg-base-200 border border-neutral-content rounded-box mt-1`,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
                            href: "/settings/account",
                            onClick: ()=>(document?.activeElement)?.blur(),
                            tabIndex: 0,
                            role: "button",
                            className: "whitespace-nowrap",
                            children: t("settings")
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                        className: "block sm:hidden",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            onClick: ()=>{
                                (document?.activeElement)?.blur();
                                handleToggle();
                            },
                            tabIndex: 0,
                            role: "button",
                            className: "whitespace-nowrap",
                            children: t("switch_to", {
                                theme: settings.theme === "light" ? t("dark") : t("light")
                            })
                        })
                    }),
                    isAdmin ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
                            href: "/admin",
                            onClick: ()=>(document?.activeElement)?.blur(),
                            tabIndex: 0,
                            role: "button",
                            className: "whitespace-nowrap",
                            children: t("server_administration")
                        })
                    }) : null,
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            onClick: ()=>{
                                (document?.activeElement)?.blur();
                                (0,next_auth_react__WEBPACK_IMPORTED_MODULE_5__.signOut)();
                            },
                            tabIndex: 0,
                            role: "button",
                            className: "whitespace-nowrap",
                            children: t("logout")
                        })
                    })
                ]
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8678:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ Sidebar)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1185);
/* harmony import */ var _components_SidebarHighlightLink__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2074);
/* harmony import */ var _components_CollectionListing__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4147);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1377);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _hooks_store_collections__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(7179);
/* harmony import */ var _hooks_store_tags__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(4806);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_headlessui_react__WEBPACK_IMPORTED_MODULE_4__, _components_CollectionListing__WEBPACK_IMPORTED_MODULE_6__, _hooks_store_collections__WEBPACK_IMPORTED_MODULE_8__, _hooks_store_tags__WEBPACK_IMPORTED_MODULE_9__]);
([_headlessui_react__WEBPACK_IMPORTED_MODULE_4__, _components_CollectionListing__WEBPACK_IMPORTED_MODULE_6__, _hooks_store_collections__WEBPACK_IMPORTED_MODULE_8__, _hooks_store_tags__WEBPACK_IMPORTED_MODULE_9__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);










function Sidebar({ className }) {
    const { t } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_7__.useTranslation)();
    const [tagDisclosure, setTagDisclosure] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(()=>{
        const storedValue = localStorage.getItem("tagDisclosure");
        return storedValue ? storedValue === "true" : true;
    });
    const [collectionDisclosure, setCollectionDisclosure] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(()=>{
        const storedValue = localStorage.getItem("collectionDisclosure");
        return storedValue ? storedValue === "true" : true;
    });
    const { data: collections } = (0,_hooks_store_collections__WEBPACK_IMPORTED_MODULE_8__/* .useCollections */ .bX)();
    const { data: tags = [], isLoading } = (0,_hooks_store_tags__WEBPACK_IMPORTED_MODULE_9__/* .useTags */ .e0)();
    const [active, setActive] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)("");
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        localStorage.setItem("tagDisclosure", tagDisclosure ? "true" : "false");
    }, [
        tagDisclosure
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        localStorage.setItem("collectionDisclosure", collectionDisclosure ? "true" : "false");
    }, [
        collectionDisclosure
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        setActive(router.asPath);
    }, [
        router,
        collections
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        id: "sidebar",
        className: `bg-base-200 h-full w-80 overflow-y-auto border-solid border border-base-200 border-r-neutral-content p-2 z-20 ${className || ""}`,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "grid grid-cols-2 gap-2",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_SidebarHighlightLink__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                        title: t("dashboard"),
                        href: `/dashboard`,
                        icon: "bi-house",
                        active: active === `/dashboard`
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_SidebarHighlightLink__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                        title: t("pinned"),
                        href: `/links/pinned`,
                        icon: "bi-pin-angle",
                        active: active === `/links/pinned`
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_SidebarHighlightLink__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                        title: t("all_links"),
                        href: `/links`,
                        icon: "bi-link-45deg",
                        active: active === `/links`
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_SidebarHighlightLink__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                        title: t("all_collections"),
                        href: `/collections`,
                        icon: "bi-folder",
                        active: active === `/collections`
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_headlessui_react__WEBPACK_IMPORTED_MODULE_4__.Disclosure, {
                defaultOpen: collectionDisclosure,
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_headlessui_react__WEBPACK_IMPORTED_MODULE_4__.Disclosure.Button, {
                        onClick: ()=>{
                            setCollectionDisclosure(!collectionDisclosure);
                        },
                        className: "flex items-center justify-between w-full text-left mb-2 pl-2 font-bold text-neutral mt-5",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: "text-sm",
                                children: t("collections")
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                className: `bi-chevron-down ${collectionDisclosure ? "rotate-reverse" : "rotate"}`
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_4__.Transition, {
                        enter: "transition duration-100 ease-out",
                        enterFrom: "transform opacity-0 -translate-y-3",
                        enterTo: "transform opacity-100 translate-y-0",
                        leave: "transition duration-100 ease-out",
                        leaveFrom: "transform opacity-100 translate-y-0",
                        leaveTo: "transform opacity-0 -translate-y-3",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_4__.Disclosure.Panel, {
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_CollectionListing__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {})
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_headlessui_react__WEBPACK_IMPORTED_MODULE_4__.Disclosure, {
                defaultOpen: tagDisclosure,
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_headlessui_react__WEBPACK_IMPORTED_MODULE_4__.Disclosure.Button, {
                        onClick: ()=>{
                            setTagDisclosure(!tagDisclosure);
                        },
                        className: "flex items-center justify-between w-full text-left mb-2 pl-2 font-bold text-neutral mt-5",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: "text-sm",
                                children: t("tags")
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                className: `bi-chevron-down  ${tagDisclosure ? "rotate-reverse" : "rotate"}`
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_4__.Transition, {
                        enter: "transition duration-100 ease-out",
                        enterFrom: "transform opacity-0 -translate-y-3",
                        enterTo: "transform opacity-100 translate-y-0",
                        leave: "transition duration-100 ease-out",
                        leaveFrom: "transform opacity-100 translate-y-0",
                        leaveTo: "transform opacity-0 -translate-y-3",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_4__.Disclosure.Panel, {
                            className: "flex flex-col gap-1",
                            children: isLoading ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "flex flex-col gap-4",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "skeleton h-4 w-full"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "skeleton h-4 w-full"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "skeleton h-4 w-full"
                                    })
                                ]
                            }) : tags[0] ? tags.sort((a, b)=>a.name.localeCompare(b.name)).map((e, i)=>{
                                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                    href: `/tags/${e.id}`,
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: `${active === `/tags/${e.id}` ? "bg-primary/20" : "hover:bg-neutral/20"} duration-100 py-1 px-2 cursor-pointer flex items-center gap-2 w-full rounded-md h-8`,
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                className: "bi-hash text-2xl text-primary drop-shadow"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                className: "truncate w-full pr-7",
                                                children: e.name
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "drop-shadow text-neutral text-xs",
                                                children: e._count?.links
                                            })
                                        ]
                                    })
                                }, i);
                            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: `duration-100 py-1 px-2 flex items-center gap-2 w-full rounded-md h-8 capitalize`,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    className: "text-neutral text-xs font-semibold truncate w-full pr-7",
                                    children: t("you_have_no_tags")
                                })
                            })
                        })
                    })
                ]
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2074:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ SidebarHighlightLink)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);


function SidebarHighlightLink({ title, href, icon, active }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
        href: href,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            title: title,
            className: `${active || false ? "bg-primary/20" : "bg-neutral-content/20 hover:bg-neutral/20"} duration-200 px-3 py-2 cursor-pointer gap-2 w-full rounded-lg capitalize`,
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "w-10 h-10 inline-flex items-center justify-center bg-black/10 dark:bg-white/5 rounded-full",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                        className: `${icon} text-primary text-2xl drop-shadow`
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "mt-1",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        className: "truncate w-full font-semibold text-xs",
                        children: title
                    })
                })
            ]
        })
    });
}


/***/ }),

/***/ 8050:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ useWindowDimensions)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function useWindowDimensions() {
    const [dimensions, setDimensions] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
        height: window.innerHeight,
        width: window.innerWidth
    });
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        function handleResize() {
            setDimensions({
                height: window.innerHeight,
                width: window.innerWidth
            });
        }
        window.addEventListener("resize", handleResize);
        return ()=>{
            window.removeEventListener("resize", handleResize);
        };
    }, []);
    return dimensions;
}


/***/ }),

/***/ 1170:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ MainLayout)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var _components_Navbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6232);
/* harmony import */ var _components_Announcement__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4006);
/* harmony import */ var _components_Sidebar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8678);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _lib_client_getLatestVersion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(201);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_Navbar__WEBPACK_IMPORTED_MODULE_1__, _components_Sidebar__WEBPACK_IMPORTED_MODULE_3__]);
([_components_Navbar__WEBPACK_IMPORTED_MODULE_1__, _components_Sidebar__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






function MainLayout({ children }) {
    const showAnnouncementBar = localStorage.getItem("showAnnouncementBar");
    const [showAnnouncement, setShowAnnouncement] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(showAnnouncementBar ? showAnnouncementBar === "true" : true);
    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{
        (0,_lib_client_getLatestVersion__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)(setShowAnnouncement);
    }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{
        if (showAnnouncement) {
            localStorage.setItem("showAnnouncementBar", "true");
            setShowAnnouncement(true);
        } else if (!showAnnouncement) {
            localStorage.setItem("showAnnouncementBar", "false");
            setShowAnnouncement(false);
        }
    }, [
        showAnnouncement
    ]);
    const toggleAnnouncementBar = ()=>{
        setShowAnnouncement(!showAnnouncement);
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "flex",
        "data-testid": "dashboard-wrapper",
        children: [
            showAnnouncement ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Announcement__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                toggleAnnouncementBar: toggleAnnouncementBar
            }) : undefined,
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "hidden lg:block",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Sidebar__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                    className: `fixed top-0`
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: `w-full sm:pb-0 pb-20 flex flex-col min-h-screen lg:ml-80`,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Navbar__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {}),
                    children
                ]
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 201:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ getLatestVersion)
/* harmony export */ });
async function getLatestVersion(setShowAnnouncement) {
    const announcementId = localStorage.getItem("announcementId");
    const response = await fetch(`https://blog.linkwarden.app/latest-announcement.json`);
    const data = await response.json();
    const latestAnnouncement = data.id;
    if (announcementId !== latestAnnouncement) {
        setShowAnnouncement(true);
        localStorage.setItem("announcementId", latestAnnouncement);
    }
}


/***/ })

};
;