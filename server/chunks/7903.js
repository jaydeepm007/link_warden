"use strict";
exports.id = 7903;
exports.ids = [7903];
exports.modules = {

/***/ 4080:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ DeleteCollectionModal)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_TextInput__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4157);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _hooks_usePermissions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2980);
/* harmony import */ var _Modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7169);
/* harmony import */ var _ui_Button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7199);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1377);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _hooks_store_collections__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(7179);
/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(6201);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_hooks_usePermissions__WEBPACK_IMPORTED_MODULE_4__, _Modal__WEBPACK_IMPORTED_MODULE_5__, _ui_Button__WEBPACK_IMPORTED_MODULE_6__, _hooks_store_collections__WEBPACK_IMPORTED_MODULE_8__, react_hot_toast__WEBPACK_IMPORTED_MODULE_9__]);
([_hooks_usePermissions__WEBPACK_IMPORTED_MODULE_4__, _Modal__WEBPACK_IMPORTED_MODULE_5__, _ui_Button__WEBPACK_IMPORTED_MODULE_6__, _hooks_store_collections__WEBPACK_IMPORTED_MODULE_8__, react_hot_toast__WEBPACK_IMPORTED_MODULE_9__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);










function DeleteCollectionModal({ onClose, activeCollection }) {
    const { t } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_7__.useTranslation)();
    const [collection, setCollection] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(activeCollection);
    const [submitLoader, setSubmitLoader] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    const [inputField, setInputField] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const permissions = (0,_hooks_usePermissions__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(collection.id);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        setCollection(activeCollection);
    }, []);
    const deleteCollection = (0,_hooks_store_collections__WEBPACK_IMPORTED_MODULE_8__/* .useDeleteCollection */ .Do)();
    const submit = async ()=>{
        if (permissions === true && collection.name !== inputField) return;
        if (!submitLoader) {
            setSubmitLoader(true);
            if (!collection) return null;
            setSubmitLoader(true);
            const load = react_hot_toast__WEBPACK_IMPORTED_MODULE_9__["default"].loading(t("deleting_collection"));
            deleteCollection.mutateAsync(collection.id, {
                onSettled: (data, error)=>{
                    react_hot_toast__WEBPACK_IMPORTED_MODULE_9__["default"].dismiss(load);
                    if (error) {
                        react_hot_toast__WEBPACK_IMPORTED_MODULE_9__["default"].error(error.message);
                    } else {
                        onClose();
                        react_hot_toast__WEBPACK_IMPORTED_MODULE_9__["default"].success(t("deleted"));
                        router.push("/collections");
                    }
                }
            });
            setSubmitLoader(false);
        }
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_Modal__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
        toggleModal: onClose,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                className: "text-xl font-thin text-red-500",
                children: permissions === true ? t("delete_collection") : t("leave_collection")
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "divider mb-3 mt-1"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex flex-col gap-3",
                children: [
                    permissions === true ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                children: t("confirm_deletion_prompt", {
                                    name: collection.name
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_TextInput__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                value: inputField,
                                onChange: (e)=>setInputField(e.target.value),
                                placeholder: t("type_name_placeholder", {
                                    name: collection.name
                                }),
                                className: "w-3/4 mx-auto"
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
                                                    ": "
                                                ]
                                            }),
                                            t("deletion_warning")
                                        ]
                                    })
                                ]
                            })
                        ]
                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        children: t("leave_prompt")
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_ui_Button__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                        disabled: permissions === true && inputField !== collection.name,
                        onClick: submit,
                        intent: "destructive",
                        className: "ml-auto",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                className: "bi-trash text-xl"
                            }),
                            permissions === true ? t("delete") : t("leave")
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

/***/ 377:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ EditCollectionModal)
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








function EditCollectionModal({ onClose, activeCollection }) {
    const { t } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_5__.useTranslation)();
    const [collection, setCollection] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(activeCollection);
    const [submitLoader, setSubmitLoader] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const updateCollection = (0,_hooks_store_collections__WEBPACK_IMPORTED_MODULE_6__/* .useUpdateCollection */ .vU)();
    const submit = async ()=>{
        if (!submitLoader) {
            setSubmitLoader(true);
            if (!collection) return null;
            setSubmitLoader(true);
            const load = react_hot_toast__WEBPACK_IMPORTED_MODULE_7__["default"].loading(t("updating_collection"));
            await updateCollection.mutateAsync(collection, {
                onSettled: (data, error)=>{
                    react_hot_toast__WEBPACK_IMPORTED_MODULE_7__["default"].dismiss(load);
                    if (error) {
                        react_hot_toast__WEBPACK_IMPORTED_MODULE_7__["default"].error(error.message);
                    } else {
                        onClose();
                        react_hot_toast__WEBPACK_IMPORTED_MODULE_7__["default"].success(t("updated"));
                    }
                }
            });
            setSubmitLoader(false);
        }
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_Modal__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
        toggleModal: onClose,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                className: "text-xl font-thin",
                children: t("edit_collection_info")
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
                                        className: "flex flex-col gap-3",
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
                        children: t("save_changes")
                    })
                ]
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;