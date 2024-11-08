"use strict";
exports.id = 286;
exports.ids = [286];
exports.modules = {

/***/ 286:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ EditCollectionSharingModal)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_TextInput__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4157);
/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6201);
/* harmony import */ var _lib_client_getPublicUserData__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1256);
/* harmony import */ var _hooks_usePermissions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2980);
/* harmony import */ var _ProfilePhoto__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8465);
/* harmony import */ var _lib_client_addMemberToCollection__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8331);
/* harmony import */ var _Modal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(7169);
/* harmony import */ var _lib_client_utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(4446);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(1377);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _hooks_store_collections__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(7179);
/* harmony import */ var _hooks_store_user__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(2676);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_hot_toast__WEBPACK_IMPORTED_MODULE_3__, _lib_client_getPublicUserData__WEBPACK_IMPORTED_MODULE_4__, _hooks_usePermissions__WEBPACK_IMPORTED_MODULE_5__, _lib_client_addMemberToCollection__WEBPACK_IMPORTED_MODULE_7__, _Modal__WEBPACK_IMPORTED_MODULE_8__, _lib_client_utils__WEBPACK_IMPORTED_MODULE_9__, _hooks_store_collections__WEBPACK_IMPORTED_MODULE_11__, _hooks_store_user__WEBPACK_IMPORTED_MODULE_12__]);
([react_hot_toast__WEBPACK_IMPORTED_MODULE_3__, _lib_client_getPublicUserData__WEBPACK_IMPORTED_MODULE_4__, _hooks_usePermissions__WEBPACK_IMPORTED_MODULE_5__, _lib_client_addMemberToCollection__WEBPACK_IMPORTED_MODULE_7__, _Modal__WEBPACK_IMPORTED_MODULE_8__, _lib_client_utils__WEBPACK_IMPORTED_MODULE_9__, _hooks_store_collections__WEBPACK_IMPORTED_MODULE_11__, _hooks_store_user__WEBPACK_IMPORTED_MODULE_12__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);













function EditCollectionSharingModal({ onClose, activeCollection }) {
    const { t } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_10__.useTranslation)();
    const [collection, setCollection] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(activeCollection);
    const [submitLoader, setSubmitLoader] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const updateCollection = (0,_hooks_store_collections__WEBPACK_IMPORTED_MODULE_11__/* .useUpdateCollection */ .vU)();
    const submit = async ()=>{
        if (!submitLoader) {
            setSubmitLoader(true);
            if (!collection) return null;
            setSubmitLoader(true);
            const load = react_hot_toast__WEBPACK_IMPORTED_MODULE_3__["default"].loading(t("updating_collection"));
            await updateCollection.mutateAsync(collection, {
                onSettled: (data, error)=>{
                    react_hot_toast__WEBPACK_IMPORTED_MODULE_3__["default"].dismiss(load);
                    if (error) {
                        react_hot_toast__WEBPACK_IMPORTED_MODULE_3__["default"].error(error.message);
                    } else {
                        onClose();
                        react_hot_toast__WEBPACK_IMPORTED_MODULE_3__["default"].success(t("updated"));
                    }
                }
            });
            setSubmitLoader(false);
        }
    };
    const { data: user = {} } = (0,_hooks_store_user__WEBPACK_IMPORTED_MODULE_12__/* .useUser */ .a)();
    const permissions = (0,_hooks_usePermissions__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)(collection.id);
    const currentURL = new URL(document.URL);
    const publicCollectionURL = `${currentURL.origin}/public/collections/${collection.id}`;
    const [memberUsername, setMemberUsername] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [collectionOwner, setCollectionOwner] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
        id: null,
        name: "",
        username: "",
        image: "",
        archiveAsScreenshot: undefined,
        archiveAsMonolith: undefined,
        archiveAsPDF: undefined
    });
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const fetchOwner = async ()=>{
            const owner = await (0,_lib_client_getPublicUserData__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(collection.ownerId);
            setCollectionOwner(owner);
        };
        fetchOwner();
        setCollection(activeCollection);
    }, []);
    const setMemberState = (newMember)=>{
        if (!collection) return null;
        setCollection({
            ...collection,
            members: [
                ...collection.members,
                newMember
            ]
        });
        setMemberUsername("");
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_Modal__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
        toggleModal: onClose,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                className: "text-xl font-thin",
                children: permissions === true ? t("share_and_collaborate") : t("team")
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "divider mb-3 mt-1"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex flex-col gap-3",
                children: [
                    permissions === true && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                children: t("make_collection_public")
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                className: "label cursor-pointer justify-start gap-2",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                        type: "checkbox",
                                        checked: collection.isPublic,
                                        onChange: ()=>setCollection({
                                                ...collection,
                                                isPublic: !collection.isPublic
                                            }),
                                        className: "checkbox checkbox-primary"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: "label-text",
                                        children: t("make_collection_public_checkbox")
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: "text-neutral text-sm",
                                children: t("make_collection_public_desc")
                            })
                        ]
                    }),
                    collection.isPublic ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: permissions === true ? "pl-5" : "",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: "mb-2",
                                children: t("sharable_link_guide")
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                onClick: ()=>{
                                    try {
                                        navigator.clipboard.writeText(publicCollectionURL).then(()=>react_hot_toast__WEBPACK_IMPORTED_MODULE_3__["default"].success(t("copied")));
                                    } catch (err) {
                                        console.log(err);
                                    }
                                },
                                className: "w-full hide-scrollbar overflow-x-auto whitespace-nowrap rounded-md p-2 bg-base-200 border-neutral-content border-solid border outline-none hover:border-primary dark:hover:border-primary duration-100 cursor-text",
                                children: publicCollectionURL
                            })
                        ]
                    }) : null,
                    permissions === true && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "divider my-3"
                    }),
                    permissions === true && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                children: t("members")
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_TextInput__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                        value: memberUsername || "",
                                        className: "bg-base-200",
                                        placeholder: t("members_username_placeholder"),
                                        onChange: (e)=>setMemberUsername(e.target.value),
                                        onKeyDown: (e)=>e.key === "Enter" && (0,_lib_client_addMemberToCollection__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)(user.username, memberUsername || "", collection, setMemberState, t)
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        onClick: ()=>(0,_lib_client_addMemberToCollection__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)(user.username, memberUsername || "", collection, setMemberState, t),
                                        className: "btn btn-accent dark:border-violet-400 text-white btn-square btn-sm h-10 w-10",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                            className: "bi-person-add text-xl"
                                        })
                                    })
                                ]
                            })
                        ]
                    }),
                    collection?.members[0]?.user && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "flex flex-col divide-y divide-neutral-content border border-neutral-content rounded-xl bg-base-200",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "relative p-3 bg-base-200 rounded-xl flex gap-2 justify-between",
                                    title: `@${collectionOwner.username} is the owner of this collection`,
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "flex items-center justify-between w-full",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "flex items-center",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "shrink-0",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ProfilePhoto__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                                            src: collectionOwner.image ? collectionOwner.image : undefined,
                                                            name: collectionOwner.name
                                                        })
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "grow ml-2",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                className: "text-sm font-semibold",
                                                                children: collectionOwner.name
                                                            }),
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                                className: "text-xs text-neutral",
                                                                children: [
                                                                    "@",
                                                                    collectionOwner.username
                                                                ]
                                                            })
                                                        ]
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    className: "text-sm font-bold",
                                                    children: t("owner")
                                                })
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "divider my-0 last:hidden h-[3px]"
                                }),
                                collection.members.sort((a, b)=>a.userId - b.userId).map((e, i)=>{
                                    const roleLabel = e.canCreate && e.canUpdate && e.canDelete ? t("admin") : e.canCreate && !e.canUpdate && !e.canDelete ? t("contributor") : !e.canCreate && !e.canUpdate && !e.canDelete ? t("viewer") : undefined;
                                    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), {
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "relative p-3 bg-base-200 rounded-xl flex gap-2 justify-between border-none",
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "flex items-center justify-between w-full",
                                                    children: [
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            className: "flex items-center",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                    className: "shrink-0",
                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ProfilePhoto__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                                                        src: e.user.image ? e.user.image : undefined,
                                                                        name: e.user.name
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                    className: "grow ml-2",
                                                                    children: [
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                            className: "text-sm font-semibold",
                                                                            children: e.user.name
                                                                        }),
                                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                                            className: "text-xs text-neutral",
                                                                            children: [
                                                                                "@",
                                                                                e.user.username
                                                                            ]
                                                                        })
                                                                    ]
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            className: "flex items-center gap-2",
                                                            children: [
                                                                permissions === true ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                    className: "dropdown dropdown-bottom dropdown-end",
                                                                    children: [
                                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                            tabIndex: 0,
                                                                            role: "button",
                                                                            onMouseDown: _lib_client_utils__WEBPACK_IMPORTED_MODULE_9__/* .dropdownTriggerer */ .Mm,
                                                                            className: "btn btn-sm btn-primary font-normal",
                                                                            children: [
                                                                                roleLabel,
                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                                    className: "bi-chevron-down"
                                                                                })
                                                                            ]
                                                                        }),
                                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                                                            className: "dropdown-content z-[30] menu shadow bg-base-200 border border-neutral-content rounded-xl mt-1",
                                                                            children: [
                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                                                                        className: "label cursor-pointer flex justify-start",
                                                                                        tabIndex: 0,
                                                                                        role: "button",
                                                                                        children: [
                                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                                                                type: "radio",
                                                                                                name: `role-radio-${e.userId}`,
                                                                                                className: "radio checked:bg-primary",
                                                                                                checked: !e.canCreate && !e.canUpdate && !e.canDelete,
                                                                                                onChange: ()=>{
                                                                                                    const updatedMember = {
                                                                                                        ...e,
                                                                                                        canCreate: false,
                                                                                                        canUpdate: false,
                                                                                                        canDelete: false
                                                                                                    };
                                                                                                    const updatedMembers = collection.members.map((member)=>member.userId === e.userId ? updatedMember : member);
                                                                                                    setCollection({
                                                                                                        ...collection,
                                                                                                        members: updatedMembers
                                                                                                    });
                                                                                                    (document?.activeElement)?.blur();
                                                                                                }
                                                                                            }),
                                                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                                                children: [
                                                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                                                        className: "font-bold whitespace-nowrap",
                                                                                                        children: t("viewer")
                                                                                                    }),
                                                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                                                        className: "whitespace-nowrap",
                                                                                                        children: t("viewer_desc")
                                                                                                    })
                                                                                                ]
                                                                                            })
                                                                                        ]
                                                                                    })
                                                                                }),
                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                                                                        className: "label cursor-pointer flex justify-start",
                                                                                        tabIndex: 0,
                                                                                        role: "button",
                                                                                        children: [
                                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                                                                type: "radio",
                                                                                                name: `role-radio-${e.userId}`,
                                                                                                className: "radio checked:bg-primary",
                                                                                                checked: e.canCreate && !e.canUpdate && !e.canDelete,
                                                                                                onChange: ()=>{
                                                                                                    const updatedMember = {
                                                                                                        ...e,
                                                                                                        canCreate: true,
                                                                                                        canUpdate: false,
                                                                                                        canDelete: false
                                                                                                    };
                                                                                                    const updatedMembers = collection.members.map((member)=>member.userId === e.userId ? updatedMember : member);
                                                                                                    setCollection({
                                                                                                        ...collection,
                                                                                                        members: updatedMembers
                                                                                                    });
                                                                                                    (document?.activeElement)?.blur();
                                                                                                }
                                                                                            }),
                                                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                                                children: [
                                                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                                                        className: "font-bold whitespace-nowrap",
                                                                                                        children: t("contributor")
                                                                                                    }),
                                                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                                                        className: "whitespace-nowrap",
                                                                                                        children: t("contributor_desc")
                                                                                                    })
                                                                                                ]
                                                                                            })
                                                                                        ]
                                                                                    })
                                                                                }),
                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                                                                        className: "label cursor-pointer flex justify-start",
                                                                                        tabIndex: 0,
                                                                                        role: "button",
                                                                                        children: [
                                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                                                                type: "radio",
                                                                                                name: `role-radio-${e.userId}`,
                                                                                                className: "radio checked:bg-primary",
                                                                                                checked: e.canCreate && e.canUpdate && e.canDelete,
                                                                                                onChange: ()=>{
                                                                                                    const updatedMember = {
                                                                                                        ...e,
                                                                                                        canCreate: true,
                                                                                                        canUpdate: true,
                                                                                                        canDelete: true
                                                                                                    };
                                                                                                    const updatedMembers = collection.members.map((member)=>member.userId === e.userId ? updatedMember : member);
                                                                                                    setCollection({
                                                                                                        ...collection,
                                                                                                        members: updatedMembers
                                                                                                    });
                                                                                                    (document?.activeElement)?.blur();
                                                                                                }
                                                                                            }),
                                                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                                                children: [
                                                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                                                        className: "font-bold whitespace-nowrap",
                                                                                                        children: t("admin")
                                                                                                    }),
                                                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                                                        className: "whitespace-nowrap",
                                                                                                        children: t("admin_desc")
                                                                                                    })
                                                                                                ]
                                                                                            })
                                                                                        ]
                                                                                    })
                                                                                })
                                                                            ]
                                                                        })
                                                                    ]
                                                                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                    className: "text-sm text-neutral",
                                                                    children: roleLabel
                                                                }),
                                                                permissions === true && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                    className: "bi-x text-xl btn btn-sm btn-square btn-ghost text-neutral hover:text-red-500 dark:hover:text-red-500 duration-100 cursor-pointer",
                                                                    title: t("remove_member"),
                                                                    onClick: ()=>{
                                                                        const updatedMembers = collection.members.filter((member)=>{
                                                                            return member.user.username !== e.user.username;
                                                                        });
                                                                        setCollection({
                                                                            ...collection,
                                                                            members: updatedMembers
                                                                        });
                                                                    }
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "divider my-0 last:hidden h-[3px]"
                                            })
                                        ]
                                    }, i);
                                })
                            ]
                        })
                    }),
                    permissions === true && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        className: "btn btn-accent dark:border-violet-400 text-white w-fit ml-auto mt-3",
                        onClick: submit,
                        children: t("save_changes")
                    })
                ]
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8331:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _getPublicUserData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1256);
/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6201);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_getPublicUserData__WEBPACK_IMPORTED_MODULE_0__, react_hot_toast__WEBPACK_IMPORTED_MODULE_1__]);
([_getPublicUserData__WEBPACK_IMPORTED_MODULE_0__, react_hot_toast__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);


const addMemberToCollection = async (ownerUsername, memberUsername, collection, setMember, t)=>{
    const checkIfMemberAlreadyExists = collection.members.find((e)=>{
        const username = (e.user.username || "").toLowerCase();
        return username === memberUsername.toLowerCase();
    });
    if (// no duplicate members
    !checkIfMemberAlreadyExists && // member can't be empty
    memberUsername.trim() !== "" && // member can't be the owner
    memberUsername.trim().toLowerCase() !== ownerUsername.toLowerCase()) {
        // Lookup, get data/err, list ...
        const user = await (0,_getPublicUserData__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(memberUsername.trim().toLowerCase());
        if (user.username) {
            setMember({
                collectionId: collection.id,
                canCreate: false,
                canUpdate: false,
                canDelete: false,
                userId: user.id,
                user: {
                    id: user.id,
                    name: user.name,
                    username: user.username,
                    image: user.image
                }
            });
        }
    } else if (checkIfMemberAlreadyExists) react_hot_toast__WEBPACK_IMPORTED_MODULE_1__.toast.error(t("user_already_member"));
    else if (memberUsername.trim().toLowerCase() === ownerUsername.toLowerCase()) react_hot_toast__WEBPACK_IMPORTED_MODULE_1__.toast.error(t("you_are_already_collection_owner"));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addMemberToCollection);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;