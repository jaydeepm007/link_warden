"use strict";
exports.id = 9600;
exports.ids = [9600];
exports.modules = {

/***/ 3906:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ LinkActions)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _hooks_usePermissions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2980);
/* harmony import */ var _components_ModalContent_EditLinkModal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3754);
/* harmony import */ var _components_ModalContent_DeleteLinkModal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(408);
/* harmony import */ var _components_ModalContent_PreservedFormatsModal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8546);
/* harmony import */ var _lib_client_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4446);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1377);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _hooks_store_user__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2676);
/* harmony import */ var _hooks_store_links__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(6496);
/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(6201);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_hooks_usePermissions__WEBPACK_IMPORTED_MODULE_2__, _components_ModalContent_EditLinkModal__WEBPACK_IMPORTED_MODULE_3__, _components_ModalContent_DeleteLinkModal__WEBPACK_IMPORTED_MODULE_4__, _components_ModalContent_PreservedFormatsModal__WEBPACK_IMPORTED_MODULE_5__, _lib_client_utils__WEBPACK_IMPORTED_MODULE_6__, _hooks_store_user__WEBPACK_IMPORTED_MODULE_8__, _hooks_store_links__WEBPACK_IMPORTED_MODULE_9__, react_hot_toast__WEBPACK_IMPORTED_MODULE_10__]);
([_hooks_usePermissions__WEBPACK_IMPORTED_MODULE_2__, _components_ModalContent_EditLinkModal__WEBPACK_IMPORTED_MODULE_3__, _components_ModalContent_DeleteLinkModal__WEBPACK_IMPORTED_MODULE_4__, _components_ModalContent_PreservedFormatsModal__WEBPACK_IMPORTED_MODULE_5__, _lib_client_utils__WEBPACK_IMPORTED_MODULE_6__, _hooks_store_user__WEBPACK_IMPORTED_MODULE_8__, _hooks_store_links__WEBPACK_IMPORTED_MODULE_9__, react_hot_toast__WEBPACK_IMPORTED_MODULE_10__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);











function LinkActions({ link, toggleShowInfo, position, linkInfo, alignToTop, flipDropdown }) {
    const { t } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_7__.useTranslation)();
    const permissions = (0,_hooks_usePermissions__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(link.collection.id);
    const [editLinkModal, setEditLinkModal] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [deleteLinkModal, setDeleteLinkModal] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [preservedFormatsModal, setPreservedFormatsModal] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { data: user = {} } = (0,_hooks_store_user__WEBPACK_IMPORTED_MODULE_8__/* .useUser */ .a)();
    const updateLink = (0,_hooks_store_links__WEBPACK_IMPORTED_MODULE_9__/* .useUpdateLink */ .Yc)();
    const deleteLink = (0,_hooks_store_links__WEBPACK_IMPORTED_MODULE_9__/* .useDeleteLink */ .S5)();
    const pinLink = async ()=>{
        const isAlreadyPinned = link?.pinnedBy && link.pinnedBy[0] ? true : false;
        const load = react_hot_toast__WEBPACK_IMPORTED_MODULE_10__["default"].loading(t("updating"));
        await updateLink.mutateAsync({
            ...link,
            pinnedBy: isAlreadyPinned ? undefined : [
                {
                    id: user.id
                }
            ]
        }, {
            onSettled: (data, error)=>{
                react_hot_toast__WEBPACK_IMPORTED_MODULE_10__["default"].dismiss(load);
                if (error) {
                    react_hot_toast__WEBPACK_IMPORTED_MODULE_10__["default"].error(error.message);
                } else {
                    react_hot_toast__WEBPACK_IMPORTED_MODULE_10__["default"].success(isAlreadyPinned ? t("link_unpinned") : t("link_pinned"));
                }
            }
        });
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: `dropdown dropdown-left absolute ${position || "top-3 right-3"} ${alignToTop ? "" : "dropdown-end"} z-20`,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        tabIndex: 0,
                        role: "button",
                        onMouseDown: _lib_client_utils__WEBPACK_IMPORTED_MODULE_6__/* .dropdownTriggerer */ .Mm,
                        className: "btn btn-ghost btn-sm btn-square text-neutral",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                            title: "More",
                            className: "bi-three-dots text-xl"
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                        className: `dropdown-content z-[20] menu shadow bg-base-200 border border-neutral-content rounded-box mr-1 ${alignToTop ? "" : "translate-y-10"}`,
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    role: "button",
                                    tabIndex: 0,
                                    onClick: ()=>{
                                        (document?.activeElement)?.blur();
                                        pinLink();
                                    },
                                    className: "whitespace-nowrap",
                                    children: link?.pinnedBy && link.pinnedBy[0] ? t("unpin") : t("pin_to_dashboard")
                                })
                            }),
                            linkInfo !== undefined && toggleShowInfo ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    role: "button",
                                    tabIndex: 0,
                                    onClick: ()=>{
                                        (document?.activeElement)?.blur();
                                        toggleShowInfo();
                                    },
                                    className: "whitespace-nowrap",
                                    children: !linkInfo ? t("show_link_details") : t("hide_link_details")
                                })
                            }) : undefined,
                            permissions === true || permissions?.canUpdate ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    role: "button",
                                    tabIndex: 0,
                                    onClick: ()=>{
                                        (document?.activeElement)?.blur();
                                        setEditLinkModal(true);
                                    },
                                    className: "whitespace-nowrap",
                                    children: t("edit_link")
                                })
                            }) : undefined,
                            link.type === "url" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    role: "button",
                                    tabIndex: 0,
                                    onClick: ()=>{
                                        (document?.activeElement)?.blur();
                                        setPreservedFormatsModal(true);
                                    },
                                    className: "whitespace-nowrap",
                                    children: t("preserved_formats")
                                })
                            }),
                            permissions === true || permissions?.canDelete ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    role: "button",
                                    tabIndex: 0,
                                    onClick: async (e)=>{
                                        (document?.activeElement)?.blur();
                                        e.shiftKey ? async ()=>{
                                            const load = react_hot_toast__WEBPACK_IMPORTED_MODULE_10__["default"].loading(t("deleting"));
                                            await deleteLink.mutateAsync(link.id, {
                                                onSettled: (data, error)=>{
                                                    react_hot_toast__WEBPACK_IMPORTED_MODULE_10__["default"].dismiss(load);
                                                    if (error) {
                                                        react_hot_toast__WEBPACK_IMPORTED_MODULE_10__["default"].error(error.message);
                                                    } else {
                                                        react_hot_toast__WEBPACK_IMPORTED_MODULE_10__["default"].success(t("deleted"));
                                                    }
                                                }
                                            });
                                        } : setDeleteLinkModal(true);
                                    },
                                    className: "whitespace-nowrap",
                                    children: t("delete")
                                })
                            }) : undefined
                        ]
                    })
                ]
            }),
            editLinkModal ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ModalContent_EditLinkModal__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                onClose: ()=>setEditLinkModal(false),
                activeLink: link
            }) : undefined,
            deleteLinkModal ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ModalContent_DeleteLinkModal__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                onClose: ()=>setDeleteLinkModal(false),
                activeLink: link
            }) : undefined,
            preservedFormatsModal ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ModalContent_PreservedFormatsModal__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                onClose: ()=>setPreservedFormatsModal(false),
                link: link
            }) : undefined
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 408:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ DeleteLinkModal)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7169);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ui_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7199);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1377);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _hooks_store_links__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6496);
/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6201);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Modal__WEBPACK_IMPORTED_MODULE_2__, _ui_Button__WEBPACK_IMPORTED_MODULE_4__, _hooks_store_links__WEBPACK_IMPORTED_MODULE_6__, react_hot_toast__WEBPACK_IMPORTED_MODULE_7__]);
([_Modal__WEBPACK_IMPORTED_MODULE_2__, _ui_Button__WEBPACK_IMPORTED_MODULE_4__, _hooks_store_links__WEBPACK_IMPORTED_MODULE_6__, react_hot_toast__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);








function DeleteLinkModal({ onClose, activeLink }) {
    const { t } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_5__.useTranslation)();
    const [link, setLink] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(activeLink);
    const deleteLink = (0,_hooks_store_links__WEBPACK_IMPORTED_MODULE_6__/* .useDeleteLink */ .S5)();
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        setLink(activeLink);
    }, []);
    const submit = async ()=>{
        const load = react_hot_toast__WEBPACK_IMPORTED_MODULE_7__["default"].loading(t("deleting"));
        await deleteLink.mutateAsync(link.id, {
            onSettled: (data, error)=>{
                react_hot_toast__WEBPACK_IMPORTED_MODULE_7__["default"].dismiss(load);
                if (error) {
                    react_hot_toast__WEBPACK_IMPORTED_MODULE_7__["default"].error(error.message);
                } else {
                    if (router.pathname.startsWith("/links/[id]")) {
                        router.push("/dashboard");
                    }
                    react_hot_toast__WEBPACK_IMPORTED_MODULE_7__["default"].success(t("deleted"));
                    onClose();
                }
            }
        });
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_Modal__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
        toggleModal: onClose,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                className: "text-xl font-thin text-red-500",
                children: t("delete_link")
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "divider mb-3 mt-1"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex flex-col gap-3",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        children: t("link_deletion_confirmation_message")
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        role: "alert",
                        className: "alert alert-warning",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                className: "bi-exclamation-triangle text-xl"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("b", {
                                        children: [
                                            t("warning"),
                                            ":"
                                        ]
                                    }),
                                    " ",
                                    t("irreversible_warning")
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        children: t("shift_key_tip")
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_ui_Button__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                        className: "ml-auto",
                        intent: "destructive",
                        onClick: submit,
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                className: "bi-trash text-xl"
                            }),
                            t("delete")
                        ]
                    })
                ]
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3754:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ EditLinkModal)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_InputSelect_CollectionSelection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1810);
/* harmony import */ var _components_InputSelect_TagSelection__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2122);
/* harmony import */ var _components_TextInput__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4157);
/* harmony import */ var _lib_client_unescapeString__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(9401);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7169);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1377);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _hooks_store_links__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6496);
/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(6201);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_InputSelect_CollectionSelection__WEBPACK_IMPORTED_MODULE_2__, _components_InputSelect_TagSelection__WEBPACK_IMPORTED_MODULE_3__, _Modal__WEBPACK_IMPORTED_MODULE_6__, _hooks_store_links__WEBPACK_IMPORTED_MODULE_8__, react_hot_toast__WEBPACK_IMPORTED_MODULE_9__]);
([_components_InputSelect_CollectionSelection__WEBPACK_IMPORTED_MODULE_2__, _components_InputSelect_TagSelection__WEBPACK_IMPORTED_MODULE_3__, _Modal__WEBPACK_IMPORTED_MODULE_6__, _hooks_store_links__WEBPACK_IMPORTED_MODULE_8__, react_hot_toast__WEBPACK_IMPORTED_MODULE_9__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);











function EditLinkModal({ onClose, activeLink }) {
    const { t } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_7__.useTranslation)();
    const [link, setLink] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(activeLink);
    let shortenedURL;
    try {
        shortenedURL = new URL(link.url || "").host.toLowerCase();
    } catch (error) {
        console.log(error);
    }
    const [submitLoader, setSubmitLoader] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const updateLink = (0,_hooks_store_links__WEBPACK_IMPORTED_MODULE_8__/* .useUpdateLink */ .Yc)();
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
        setLink(activeLink);
    }, []);
    const submit = async ()=>{
        if (!submitLoader) {
            setSubmitLoader(true);
            const load = react_hot_toast__WEBPACK_IMPORTED_MODULE_9__["default"].loading(t("updating"));
            await updateLink.mutateAsync(link, {
                onSettled: (data, error)=>{
                    react_hot_toast__WEBPACK_IMPORTED_MODULE_9__["default"].dismiss(load);
                    if (error) {
                        react_hot_toast__WEBPACK_IMPORTED_MODULE_9__["default"].error(error.message);
                    } else {
                        onClose();
                        react_hot_toast__WEBPACK_IMPORTED_MODULE_9__["default"].success(t("updated"));
                    }
                }
            });
            setSubmitLoader(false);
        }
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_Modal__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
        toggleModal: onClose,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                className: "text-xl font-thin",
                children: t("edit_link")
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "divider mb-3 mt-1"
            }),
            link.url ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {
                href: link.url,
                className: "truncate text-neutral flex gap-2 mb-5 w-fit max-w-full",
                title: link.url,
                target: "_blank",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                        className: "bi-link-45deg text-xl"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        children: shortenedURL
                    })
                ]
            }) : undefined,
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "w-full",
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
                        placeholder: t("placeholder_example_link"),
                        className: "bg-base-200"
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "mt-5",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "grid sm:grid-cols-2 gap-3",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    className: "mb-2",
                                    children: t("collection")
                                }),
                                link.collection.name ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_InputSelect_CollectionSelection__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                    onChange: setCollection,
                                    defaultValue: link.collection.id ? {
                                        value: link.collection.id,
                                        label: link.collection.name
                                    } : {
                                        value: null,
                                        label: "Unorganized"
                                    },
                                    creatable: false
                                }) : null
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
                                    value: (0,_lib_client_unescapeString__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z)(link.description),
                                    onChange: (e)=>setLink({
                                            ...link,
                                            description: e.target.value
                                        }),
                                    placeholder: t("link_description_placeholder"),
                                    className: "resize-none w-full rounded-md p-2 border-neutral-content bg-base-200 focus:border-sky-300 dark:focus:border-sky-600 border-solid border outline-none duration-100"
                                })
                            ]
                        })
                    ]
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "flex justify-end items-center mt-5",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                    className: "btn btn-accent dark:border-violet-400 text-white",
                    onClick: submit,
                    children: t("save_changes")
                })
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8546:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ PreservedFormatsModal)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _types_global__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7102);
/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6201);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7169);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1649);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _lib_shared_getArchiveValidity__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(326);
/* harmony import */ var _components_PreserverdFormatRow__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6045);
/* harmony import */ var _lib_client_getPublicUserData__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1256);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(1377);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_spinners__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(8176);
/* harmony import */ var react_spinners__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_spinners__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _hooks_store_user__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(2676);
/* harmony import */ var _hooks_store_links__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(6496);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_hot_toast__WEBPACK_IMPORTED_MODULE_3__, _Modal__WEBPACK_IMPORTED_MODULE_5__, _components_PreserverdFormatRow__WEBPACK_IMPORTED_MODULE_8__, _lib_client_getPublicUserData__WEBPACK_IMPORTED_MODULE_9__, _hooks_store_user__WEBPACK_IMPORTED_MODULE_12__, _hooks_store_links__WEBPACK_IMPORTED_MODULE_13__]);
([react_hot_toast__WEBPACK_IMPORTED_MODULE_3__, _Modal__WEBPACK_IMPORTED_MODULE_5__, _components_PreserverdFormatRow__WEBPACK_IMPORTED_MODULE_8__, _lib_client_getPublicUserData__WEBPACK_IMPORTED_MODULE_9__, _hooks_store_user__WEBPACK_IMPORTED_MODULE_12__, _hooks_store_links__WEBPACK_IMPORTED_MODULE_13__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);















function PreservedFormatsModal({ onClose, link }) {
    const { t } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_10__.useTranslation)();
    const session = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_7__.useSession)();
    const getLink = (0,_hooks_store_links__WEBPACK_IMPORTED_MODULE_13__/* .useGetLink */ .mk)();
    const { data: user = {} } = (0,_hooks_store_user__WEBPACK_IMPORTED_MODULE_12__/* .useUser */ .a)();
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter)();
    let isPublic = router.pathname.startsWith("/public") ? true : undefined;
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
            if (link.collection.ownerId !== user.id) {
                const owner = await (0,_lib_client_getPublicUserData__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z)(link.collection.ownerId);
                setCollectionOwner(owner);
            } else if (link.collection.ownerId === user.id) {
                setCollectionOwner({
                    id: user.id,
                    name: user.name,
                    username: user.username,
                    image: user.image,
                    archiveAsScreenshot: user.archiveAsScreenshot,
                    archiveAsMonolith: user.archiveAsScreenshot,
                    archiveAsPDF: user.archiveAsPDF
                });
            }
        };
        fetchOwner();
    }, [
        link.collection.ownerId
    ]);
    const isReady = ()=>{
        return link && (collectionOwner.archiveAsScreenshot === true ? link.pdf && link.pdf !== "pending" : true) && (collectionOwner.archiveAsMonolith === true ? link.monolith && link.monolith !== "pending" : true) && (collectionOwner.archiveAsPDF === true ? link.pdf && link.pdf !== "pending" : true) && link.readable && link.readable !== "pending";
    };
    const atLeastOneFormatAvailable = ()=>{
        return (0,_lib_shared_getArchiveValidity__WEBPACK_IMPORTED_MODULE_14__/* .screenshotAvailable */ .RM)(link) || (0,_lib_shared_getArchiveValidity__WEBPACK_IMPORTED_MODULE_14__/* .pdfAvailable */ .hd)(link) || (0,_lib_shared_getArchiveValidity__WEBPACK_IMPORTED_MODULE_14__/* .readabilityAvailable */ .Ji)(link) || (0,_lib_shared_getArchiveValidity__WEBPACK_IMPORTED_MODULE_14__/* .monolithAvailable */ .ZV)(link);
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        (async ()=>{
            await getLink.mutateAsync(link.id);
        })();
        let interval;
        if (!isReady()) {
            interval = setInterval(async ()=>{
                await getLink.mutateAsync(link.id);
            }, 5000);
        } else {
            if (interval) {
                clearInterval(interval);
            }
        }
        return ()=>{
            if (interval) {
                clearInterval(interval);
            }
        };
    }, [
        link?.monolith
    ]);
    const updateArchive = async ()=>{
        const load = react_hot_toast__WEBPACK_IMPORTED_MODULE_3__["default"].loading(t("sending_request"));
        const response = await fetch(`/api/v1/links/${link?.id}/archive`, {
            method: "PUT"
        });
        const data = await response.json();
        react_hot_toast__WEBPACK_IMPORTED_MODULE_3__["default"].dismiss(load);
        if (response.ok) {
            await getLink.mutateAsync(link?.id);
            react_hot_toast__WEBPACK_IMPORTED_MODULE_3__["default"].success(t("link_being_archived"));
        } else react_hot_toast__WEBPACK_IMPORTED_MODULE_3__["default"].error(data.response);
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_Modal__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
        toggleModal: onClose,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                className: "text-xl font-thin",
                children: t("preserved_formats")
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "divider mb-2 mt-1"
            }),
            (0,_lib_shared_getArchiveValidity__WEBPACK_IMPORTED_MODULE_14__/* .screenshotAvailable */ .RM)(link) || (0,_lib_shared_getArchiveValidity__WEBPACK_IMPORTED_MODULE_14__/* .pdfAvailable */ .hd)(link) || (0,_lib_shared_getArchiveValidity__WEBPACK_IMPORTED_MODULE_14__/* .readabilityAvailable */ .Ji)(link) || (0,_lib_shared_getArchiveValidity__WEBPACK_IMPORTED_MODULE_14__/* .monolithAvailable */ .ZV)(link) ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                className: "mb-3",
                children: t("available_formats")
            }) : "",
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: `flex flex-col gap-3`,
                children: [
                    (0,_lib_shared_getArchiveValidity__WEBPACK_IMPORTED_MODULE_14__/* .monolithAvailable */ .ZV)(link) ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_PreserverdFormatRow__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                        name: t("webpage"),
                        icon: "bi-filetype-html",
                        format: _types_global__WEBPACK_IMPORTED_MODULE_2__/* .ArchivedFormat */ .Gt.monolith,
                        link: link,
                        downloadable: true
                    }) : undefined,
                    (0,_lib_shared_getArchiveValidity__WEBPACK_IMPORTED_MODULE_14__/* .screenshotAvailable */ .RM)(link) ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_PreserverdFormatRow__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                        name: t("screenshot"),
                        icon: "bi-file-earmark-image",
                        format: link?.image?.endsWith("png") ? _types_global__WEBPACK_IMPORTED_MODULE_2__/* .ArchivedFormat */ .Gt.png : _types_global__WEBPACK_IMPORTED_MODULE_2__/* .ArchivedFormat */ .Gt.jpeg,
                        link: link,
                        downloadable: true
                    }) : undefined,
                    (0,_lib_shared_getArchiveValidity__WEBPACK_IMPORTED_MODULE_14__/* .pdfAvailable */ .hd)(link) ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_PreserverdFormatRow__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                        name: t("pdf"),
                        icon: "bi-file-earmark-pdf",
                        format: _types_global__WEBPACK_IMPORTED_MODULE_2__/* .ArchivedFormat */ .Gt.pdf,
                        link: link,
                        downloadable: true
                    }) : undefined,
                    (0,_lib_shared_getArchiveValidity__WEBPACK_IMPORTED_MODULE_14__/* .readabilityAvailable */ .Ji)(link) ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_PreserverdFormatRow__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                        name: t("readable"),
                        icon: "bi-file-earmark-text",
                        format: _types_global__WEBPACK_IMPORTED_MODULE_2__/* .ArchivedFormat */ .Gt.readability,
                        link: link
                    }) : undefined,
                    !isReady() && !atLeastOneFormatAvailable() ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: `w-full h-full flex flex-col justify-center p-10`,
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_spinners__WEBPACK_IMPORTED_MODULE_11__.BeatLoader, {
                                color: "oklch(var(--p))",
                                className: "mx-auto mb-3",
                                size: 30
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: "text-center text-2xl",
                                children: t("preservation_in_queue")
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: "text-center text-lg",
                                children: t("check_back_later")
                            })
                        ]
                    }) : !isReady() && atLeastOneFormatAvailable() ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: `w-full h-full flex flex-col justify-center p-5`,
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_spinners__WEBPACK_IMPORTED_MODULE_11__.BeatLoader, {
                                color: "oklch(var(--p))",
                                className: "mx-auto mb-3",
                                size: 20
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: "text-center",
                                children: t("there_are_more_formats")
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: "text-center text-sm",
                                children: t("check_back_later")
                            })
                        ]
                    }) : undefined,
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: `flex flex-col sm:flex-row gap-3 items-center justify-center ${isReady() ? "sm:mt " : ""}`,
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
                                href: `https://web.archive.org/web/${link?.url?.replace(/(^\w+:|^)\/\//, "")}`,
                                target: "_blank",
                                className: "text-neutral duration-100 hover:opacity-60 flex gap-2 w-1/2 justify-center items-center text-sm",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: "whitespace-nowrap",
                                        children: t("view_latest_snapshot")
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                        className: "bi-box-arrow-up-right"
                                    })
                                ]
                            }),
                            link?.collection.ownerId === session.data?.user.id && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "btn btn-outline",
                                onClick: updateArchive,
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            children: t("refresh_preserved_formats")
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            className: "text-xs",
                                            children: t("this_deletes_current_preservations")
                                        })
                                    ]
                                })
                            })
                        ]
                    })
                ]
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6045:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ PreservedFormatRow)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var _types_global__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7102);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _hooks_store_links__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6496);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_hooks_store_links__WEBPACK_IMPORTED_MODULE_4__]);
_hooks_store_links__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





function PreservedFormatRow({ name, icon, format, link, downloadable }) {
    const getLink = (0,_hooks_store_links__WEBPACK_IMPORTED_MODULE_4__/* .useGetLink */ .mk)();
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    let isPublic = router.pathname.startsWith("/public") ? true : undefined;
    const handleDownload = ()=>{
        const path = `/api/v1/archives/${link?.id}?format=${format}`;
        fetch(path).then((response)=>{
            if (response.ok) {
                // Create a temporary link and click it to trigger the download
                const anchorElement = document.createElement("a");
                anchorElement.href = path;
                anchorElement.download = format === _types_global__WEBPACK_IMPORTED_MODULE_1__/* .ArchivedFormat */ .Gt.monolith ? "Webpage" : format === _types_global__WEBPACK_IMPORTED_MODULE_1__/* .ArchivedFormat */ .Gt.pdf ? "PDF" : "Screenshot";
                anchorElement.click();
            } else {
                console.error("Failed to download file");
            }
        }).catch((error)=>{
            console.error("Error:", error);
        });
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "flex justify-between items-center pr-1 border border-neutral-content rounded-md",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex gap-2 items-center",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "bg-primary text-primary-content p-2 rounded-l-md",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                            className: `${icon} text-2xl`
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        children: name
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex gap-1",
                children: [
                    downloadable || false ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        onClick: ()=>handleDownload(),
                        className: "btn btn-sm btn-square",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                            className: "bi-cloud-arrow-down text-xl text-neutral"
                        })
                    }) : undefined,
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                        href: `${isPublic ? "/public" : ""}/preserved/${link?.id}?format=${format}`,
                        target: "_blank",
                        className: "btn btn-sm btn-square",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                            className: "bi-box-arrow-up-right text-xl text-neutral"
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

/***/ 326:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Ji: () => (/* binding */ readabilityAvailable),
/* harmony export */   RM: () => (/* binding */ screenshotAvailable),
/* harmony export */   ZV: () => (/* binding */ monolithAvailable),
/* harmony export */   hd: () => (/* binding */ pdfAvailable),
/* harmony export */   je: () => (/* binding */ previewAvailable)
/* harmony export */ });
function screenshotAvailable(link) {
    return link && link.image && link.image !== "pending" && link.image !== "unavailable";
}
function pdfAvailable(link) {
    return link && link.pdf && link.pdf !== "pending" && link.pdf !== "unavailable";
}
function readabilityAvailable(link) {
    return link && link.readable && link.readable !== "pending" && link.readable !== "unavailable";
}
function monolithAvailable(link) {
    return link && link.monolith && link.monolith !== "pending" && link.monolith !== "unavailable";
}
function previewAvailable(link) {
    return link && link.preview && link.preview !== "pending" && link.preview !== "unavailable";
}


/***/ }),

/***/ 2602:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ isValidUrl)
/* harmony export */ });
function isValidUrl(string) {
    try {
        new URL(string);
        return true;
    } catch (err) {
        return false;
    }
}


/***/ })

};
;