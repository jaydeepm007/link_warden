"use strict";
exports.id = 2885;
exports.ids = [2885];
exports.modules = {

/***/ 1947:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ FilterSearchDropdown)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var _lib_client_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4446);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1377);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _hooks_store_links__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6496);
/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9752);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_lib_client_utils__WEBPACK_IMPORTED_MODULE_1__, _hooks_store_links__WEBPACK_IMPORTED_MODULE_4__, _tanstack_react_query__WEBPACK_IMPORTED_MODULE_5__]);
([_lib_client_utils__WEBPACK_IMPORTED_MODULE_1__, _hooks_store_links__WEBPACK_IMPORTED_MODULE_4__, _tanstack_react_query__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






function FilterSearchDropdown({ setSearchFilter, searchFilter }) {
    const { t } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_3__.useTranslation)();
    const queryClient = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_5__.useQueryClient)();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "dropdown dropdown-bottom dropdown-end",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                tabIndex: 0,
                role: "button",
                onMouseDown: _lib_client_utils__WEBPACK_IMPORTED_MODULE_1__/* .dropdownTriggerer */ .Mm,
                className: "btn btn-sm btn-square btn-ghost",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                    className: "bi-funnel text-neutral text-2xl"
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                className: "dropdown-content z-[30] menu shadow bg-base-200 border border-neutral-content rounded-box mt-1",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                            className: "label cursor-pointer flex justify-start",
                            tabIndex: 0,
                            role: "button",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                    type: "checkbox",
                                    name: "search-filter-checkbox",
                                    className: "checkbox checkbox-primary",
                                    checked: searchFilter.name,
                                    onChange: ()=>{
                                        (0,_hooks_store_links__WEBPACK_IMPORTED_MODULE_4__/* .resetInfiniteQueryPagination */ .Sw)(queryClient, [
                                            "links"
                                        ]);
                                        setSearchFilter({
                                            ...searchFilter,
                                            name: !searchFilter.name
                                        });
                                    }
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: "label-text whitespace-nowrap",
                                    children: t("name")
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
                                    type: "checkbox",
                                    name: "search-filter-checkbox",
                                    className: "checkbox checkbox-primary",
                                    checked: searchFilter.url,
                                    onChange: ()=>{
                                        (0,_hooks_store_links__WEBPACK_IMPORTED_MODULE_4__/* .resetInfiniteQueryPagination */ .Sw)(queryClient, [
                                            "links"
                                        ]);
                                        setSearchFilter({
                                            ...searchFilter,
                                            url: !searchFilter.url
                                        });
                                    }
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: "label-text whitespace-nowrap",
                                    children: t("link")
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
                                    type: "checkbox",
                                    name: "search-filter-checkbox",
                                    className: "checkbox checkbox-primary",
                                    checked: searchFilter.description,
                                    onChange: ()=>{
                                        (0,_hooks_store_links__WEBPACK_IMPORTED_MODULE_4__/* .resetInfiniteQueryPagination */ .Sw)(queryClient, [
                                            "links"
                                        ]);
                                        setSearchFilter({
                                            ...searchFilter,
                                            description: !searchFilter.description
                                        });
                                    }
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: "label-text whitespace-nowrap",
                                    children: t("description")
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
                                    type: "checkbox",
                                    name: "search-filter-checkbox",
                                    className: "checkbox checkbox-primary",
                                    checked: searchFilter.tags,
                                    onChange: ()=>{
                                        (0,_hooks_store_links__WEBPACK_IMPORTED_MODULE_4__/* .resetInfiniteQueryPagination */ .Sw)(queryClient, [
                                            "links"
                                        ]);
                                        setSearchFilter({
                                            ...searchFilter,
                                            tags: !searchFilter.tags
                                        });
                                    }
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: "label-text whitespace-nowrap",
                                    children: t("tags")
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                            className: "label cursor-pointer flex justify-between",
                            tabIndex: 0,
                            role: "button",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                    type: "checkbox",
                                    name: "search-filter-checkbox",
                                    className: "checkbox checkbox-primary",
                                    checked: searchFilter.textContent,
                                    onChange: ()=>{
                                        (0,_hooks_store_links__WEBPACK_IMPORTED_MODULE_4__/* .resetInfiniteQueryPagination */ .Sw)(queryClient, [
                                            "links"
                                        ]);
                                        setSearchFilter({
                                            ...searchFilter,
                                            textContent: !searchFilter.textContent
                                        });
                                    }
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: "label-text whitespace-nowrap",
                                    children: t("full_content")
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "ml-auto badge badge-sm badge-neutral whitespace-nowrap",
                                    children: t("slower")
                                })
                            ]
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

/***/ 2885:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _FilterSearchDropdown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1947);
/* harmony import */ var _SortDropdown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8590);
/* harmony import */ var _ViewDropdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2772);
/* harmony import */ var _ModalContent_BulkDeleteLinksModal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(654);
/* harmony import */ var _ModalContent_BulkEditLinksModal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2890);
/* harmony import */ var _hooks_useCollectivePermissions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8782);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _store_links__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(5662);
/* harmony import */ var _hooks_store_links__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(6496);
/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(6201);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_FilterSearchDropdown__WEBPACK_IMPORTED_MODULE_2__, _SortDropdown__WEBPACK_IMPORTED_MODULE_3__, _ViewDropdown__WEBPACK_IMPORTED_MODULE_4__, _ModalContent_BulkDeleteLinksModal__WEBPACK_IMPORTED_MODULE_5__, _ModalContent_BulkEditLinksModal__WEBPACK_IMPORTED_MODULE_6__, _hooks_useCollectivePermissions__WEBPACK_IMPORTED_MODULE_7__, _store_links__WEBPACK_IMPORTED_MODULE_9__, _hooks_store_links__WEBPACK_IMPORTED_MODULE_10__, react_hot_toast__WEBPACK_IMPORTED_MODULE_11__]);
([_FilterSearchDropdown__WEBPACK_IMPORTED_MODULE_2__, _SortDropdown__WEBPACK_IMPORTED_MODULE_3__, _ViewDropdown__WEBPACK_IMPORTED_MODULE_4__, _ModalContent_BulkDeleteLinksModal__WEBPACK_IMPORTED_MODULE_5__, _ModalContent_BulkEditLinksModal__WEBPACK_IMPORTED_MODULE_6__, _hooks_useCollectivePermissions__WEBPACK_IMPORTED_MODULE_7__, _store_links__WEBPACK_IMPORTED_MODULE_9__, _hooks_store_links__WEBPACK_IMPORTED_MODULE_10__, react_hot_toast__WEBPACK_IMPORTED_MODULE_11__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);












const LinkListOptions = ({ children, t, viewMode, setViewMode, searchFilter, setSearchFilter, sortBy, setSortBy, editMode, setEditMode })=>{
    const { selectedLinks, setSelectedLinks } = (0,_store_links__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z)();
    const deleteLinksById = (0,_hooks_store_links__WEBPACK_IMPORTED_MODULE_10__/* .useBulkDeleteLinks */ .tD)();
    const { links } = (0,_hooks_store_links__WEBPACK_IMPORTED_MODULE_10__/* .useLinks */ .u8)();
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_8__.useRouter)();
    const [bulkDeleteLinksModal, setBulkDeleteLinksModal] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [bulkEditLinksModal, setBulkEditLinksModal] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (editMode && setEditMode) return setEditMode(false);
    }, [
        router
    ]);
    const collectivePermissions = (0,_hooks_useCollectivePermissions__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)(selectedLinks.map((link)=>link.collectionId));
    const handleSelectAll = ()=>{
        if (selectedLinks.length === links.length) {
            setSelectedLinks([]);
        } else {
            setSelectedLinks(links.map((link)=>link));
        }
    };
    const bulkDeleteLinks = async ()=>{
        const load = react_hot_toast__WEBPACK_IMPORTED_MODULE_11__["default"].loading(t("deleting"));
        await deleteLinksById.mutateAsync(selectedLinks.map((link)=>link.id), {
            onSettled: (data, error)=>{
                react_hot_toast__WEBPACK_IMPORTED_MODULE_11__["default"].dismiss(load);
                if (error) {
                    react_hot_toast__WEBPACK_IMPORTED_MODULE_11__["default"].error(error.message);
                } else {
                    setSelectedLinks([]);
                    react_hot_toast__WEBPACK_IMPORTED_MODULE_11__["default"].success(t("deleted"));
                }
            }
        });
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex justify-between items-center",
                children: [
                    children,
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "flex gap-3 items-center justify-end",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "flex gap-2 items-center mt-2",
                            children: [
                                links && links.length > 0 && editMode !== undefined && setEditMode && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    role: "button",
                                    onClick: ()=>{
                                        setEditMode(!editMode);
                                        setSelectedLinks([]);
                                    },
                                    className: `btn btn-square btn-sm btn-ghost ${editMode ? "bg-primary/20 hover:bg-primary/20" : "hover:bg-neutral/20"}`,
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                        className: "bi-pencil-fill text-neutral text-xl"
                                    })
                                }),
                                searchFilter && setSearchFilter && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_FilterSearchDropdown__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                    searchFilter: searchFilter,
                                    setSearchFilter: setSearchFilter
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_SortDropdown__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                    sortBy: sortBy,
                                    setSort: (value)=>{
                                        setSortBy(value);
                                    },
                                    t: t
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ViewDropdown__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                    viewMode: viewMode,
                                    setViewMode: setViewMode
                                })
                            ]
                        })
                    })
                ]
            }),
            links && editMode && links.length > 0 && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "w-full flex justify-between items-center min-h-[32px]",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex gap-3 ml-3",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                type: "checkbox",
                                className: "checkbox checkbox-primary",
                                onChange: ()=>handleSelectAll(),
                                checked: selectedLinks.length === links.length && links.length > 0
                            }),
                            selectedLinks.length > 0 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                children: selectedLinks.length === 1 ? t("link_selected") : t("links_selected", {
                                    count: selectedLinks.length
                                })
                            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                children: t("nothing_selected")
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex gap-3",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                onClick: ()=>setBulkEditLinksModal(true),
                                className: "btn btn-sm btn-accent text-white w-fit ml-auto",
                                disabled: selectedLinks.length === 0 || !(collectivePermissions === true || collectivePermissions?.canUpdate),
                                children: t("edit")
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                onClick: (e)=>{
                                    (document?.activeElement)?.blur();
                                    e.shiftKey ? bulkDeleteLinks() : setBulkDeleteLinksModal(true);
                                },
                                className: "btn btn-sm bg-red-500 hover:bg-red-400 text-white w-fit ml-auto",
                                disabled: selectedLinks.length === 0 || !(collectivePermissions === true || collectivePermissions?.canDelete),
                                children: t("delete")
                            })
                        ]
                    })
                ]
            }),
            bulkDeleteLinksModal && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ModalContent_BulkDeleteLinksModal__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                onClose: ()=>{
                    setBulkDeleteLinksModal(false);
                }
            }),
            bulkEditLinksModal && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ModalContent_BulkEditLinksModal__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                onClose: ()=>{
                    setBulkEditLinksModal(false);
                }
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LinkListOptions);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 654:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ BulkDeleteLinksModal)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _store_links__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5662);
/* harmony import */ var _Modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7169);
/* harmony import */ var _ui_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7199);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1377);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _hooks_store_links__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6496);
/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6201);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_store_links__WEBPACK_IMPORTED_MODULE_2__, _Modal__WEBPACK_IMPORTED_MODULE_3__, _ui_Button__WEBPACK_IMPORTED_MODULE_4__, _hooks_store_links__WEBPACK_IMPORTED_MODULE_6__, react_hot_toast__WEBPACK_IMPORTED_MODULE_7__]);
([_store_links__WEBPACK_IMPORTED_MODULE_2__, _Modal__WEBPACK_IMPORTED_MODULE_3__, _ui_Button__WEBPACK_IMPORTED_MODULE_4__, _hooks_store_links__WEBPACK_IMPORTED_MODULE_6__, react_hot_toast__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);








function BulkDeleteLinksModal({ onClose }) {
    const { t } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_5__.useTranslation)();
    const { selectedLinks, setSelectedLinks } = (0,_store_links__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)();
    const deleteLinksById = (0,_hooks_store_links__WEBPACK_IMPORTED_MODULE_6__/* .useBulkDeleteLinks */ .tD)();
    const deleteLink = async ()=>{
        const load = react_hot_toast__WEBPACK_IMPORTED_MODULE_7__["default"].loading(t("deleting"));
        await deleteLinksById.mutateAsync(selectedLinks.map((link)=>link.id), {
            onSettled: (data, error)=>{
                react_hot_toast__WEBPACK_IMPORTED_MODULE_7__["default"].dismiss(load);
                if (error) {
                    react_hot_toast__WEBPACK_IMPORTED_MODULE_7__["default"].error(error.message);
                } else {
                    setSelectedLinks([]);
                    onClose();
                    react_hot_toast__WEBPACK_IMPORTED_MODULE_7__["default"].success(t("deleted"));
                }
            }
        });
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_Modal__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
        toggleModal: onClose,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                className: "text-xl font-thin text-red-500",
                children: selectedLinks.length === 1 ? t("delete_link") : t("delete_links", {
                    count: selectedLinks.length
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "divider mb-3 mt-1"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex flex-col gap-3",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        children: selectedLinks.length === 1 ? t("link_deletion_confirmation_message") : t("links_deletion_confirmation_message", {
                            count: selectedLinks.length
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        role: "alert",
                        className: "alert alert-warning",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                className: "bi-exclamation-triangle text-xl"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                children: t("warning_irreversible")
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        children: t("shift_key_tip")
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_ui_Button__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                        className: "ml-auto",
                        intent: "destructive",
                        onClick: deleteLink,
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

/***/ 2890:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ BulkEditLinksModal)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_InputSelect_CollectionSelection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1810);
/* harmony import */ var _components_InputSelect_TagSelection__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2122);
/* harmony import */ var _store_links__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5662);
/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6201);
/* harmony import */ var _Modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7169);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1377);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _hooks_store_links__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6496);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_InputSelect_CollectionSelection__WEBPACK_IMPORTED_MODULE_2__, _components_InputSelect_TagSelection__WEBPACK_IMPORTED_MODULE_3__, _store_links__WEBPACK_IMPORTED_MODULE_4__, react_hot_toast__WEBPACK_IMPORTED_MODULE_5__, _Modal__WEBPACK_IMPORTED_MODULE_6__, _hooks_store_links__WEBPACK_IMPORTED_MODULE_8__]);
([_components_InputSelect_CollectionSelection__WEBPACK_IMPORTED_MODULE_2__, _components_InputSelect_TagSelection__WEBPACK_IMPORTED_MODULE_3__, _store_links__WEBPACK_IMPORTED_MODULE_4__, react_hot_toast__WEBPACK_IMPORTED_MODULE_5__, _Modal__WEBPACK_IMPORTED_MODULE_6__, _hooks_store_links__WEBPACK_IMPORTED_MODULE_8__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);









function BulkEditLinksModal({ onClose }) {
    const { t } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_7__.useTranslation)();
    const { selectedLinks, setSelectedLinks } = (0,_store_links__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)();
    const [submitLoader, setSubmitLoader] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [removePreviousTags, setRemovePreviousTags] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [updatedValues, setUpdatedValues] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
        tags: []
    });
    const updateLinks = (0,_hooks_store_links__WEBPACK_IMPORTED_MODULE_8__/* .useBulkEditLinks */ .Yi)();
    const setCollection = (e)=>{
        const collectionId = e?.value || null;
        setUpdatedValues((prevValues)=>({
                ...prevValues,
                collectionId
            }));
    };
    const setTags = (e)=>{
        const tags = e.map((tag)=>({
                name: tag.label
            }));
        setUpdatedValues((prevValues)=>({
                ...prevValues,
                tags
            }));
    };
    const submit = async ()=>{
        if (!submitLoader) {
            setSubmitLoader(true);
            const load = react_hot_toast__WEBPACK_IMPORTED_MODULE_5__["default"].loading(t("updating"));
            await updateLinks.mutateAsync({
                links: selectedLinks,
                newData: updatedValues,
                removePreviousTags
            }, {
                onSettled: (data, error)=>{
                    react_hot_toast__WEBPACK_IMPORTED_MODULE_5__["default"].dismiss(load);
                    if (error) {
                        react_hot_toast__WEBPACK_IMPORTED_MODULE_5__["default"].error(error.message);
                    } else {
                        setSelectedLinks([]);
                        onClose();
                        react_hot_toast__WEBPACK_IMPORTED_MODULE_5__["default"].success(t("updated"));
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
                children: selectedLinks.length === 1 ? t("edit_link") : t("edit_links", {
                    count: selectedLinks.length
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "divider mb-3 mt-1"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "mt-5",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "grid sm:grid-cols-2 gap-3",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: "mb-2",
                                        children: t("move_to_collection")
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_InputSelect_CollectionSelection__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                        showDefaultValue: false,
                                        onChange: setCollection,
                                        creatable: false
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: "mb-2",
                                        children: t("add_tags")
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_InputSelect_TagSelection__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                        onChange: setTags
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "sm:ml-auto w-1/2 p-3",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                            className: "flex items-center gap-2 ",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                    type: "checkbox",
                                    className: "checkbox checkbox-primary",
                                    checked: removePreviousTags,
                                    onChange: (e)=>setRemovePreviousTags(e.target.checked)
                                }),
                                t("remove_previous_tags")
                            ]
                        })
                    })
                ]
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

/***/ 8782:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ useCollectivePermissions)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _store_collections__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7179);
/* harmony import */ var _store_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2676);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_store_collections__WEBPACK_IMPORTED_MODULE_1__, _store_user__WEBPACK_IMPORTED_MODULE_2__]);
([_store_collections__WEBPACK_IMPORTED_MODULE_1__, _store_user__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



function useCollectivePermissions(collectionIds) {
    const { data: collections = [] } = (0,_store_collections__WEBPACK_IMPORTED_MODULE_1__/* .useCollections */ .bX)();
    const { data: user = {} } = (0,_store_user__WEBPACK_IMPORTED_MODULE_2__/* .useUser */ .a)();
    const [permissions, setPermissions] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        for (const collectionId of collectionIds){
            const collection = collections.find((e)=>e.id === collectionId);
            if (collection) {
                let getPermission = collection.members.find((e)=>e.userId === user.id);
                if (getPermission?.canCreate === false && getPermission?.canUpdate === false && getPermission?.canDelete === false) getPermission = undefined;
                setPermissions(user.id === collection.ownerId || getPermission);
            }
        }
    }, [
        user,
        collections,
        collectionIds
    ]);
    return permissions;
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;