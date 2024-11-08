"use strict";
exports.id = 9078;
exports.ids = [9078];
exports.modules = {

/***/ 1810:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ CollectionSelection)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9760);
/* harmony import */ var react_select_creatable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1159);
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3554);
/* harmony import */ var _hooks_store_collections__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7179);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_select_creatable__WEBPACK_IMPORTED_MODULE_4__, react_select__WEBPACK_IMPORTED_MODULE_5__, _hooks_store_collections__WEBPACK_IMPORTED_MODULE_6__]);
([react_select_creatable__WEBPACK_IMPORTED_MODULE_4__, react_select__WEBPACK_IMPORTED_MODULE_5__, _hooks_store_collections__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







function CollectionSelection({ onChange, defaultValue, showDefaultValue = true, creatable = true }) {
    const { data: collections = [] } = (0,_hooks_store_collections__WEBPACK_IMPORTED_MODULE_6__/* .useCollections */ .bX)();
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
    const [options, setOptions] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);
    const collectionId = Number(router.query.id);
    const activeCollection = collections.find((e)=>{
        return e.id === collectionId;
    });
    if (activeCollection && !defaultValue) {
        defaultValue = {
            value: activeCollection?.id,
            label: activeCollection?.name
        };
    }
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        const formatedCollections = collections.map((e)=>{
            return {
                value: e.id,
                label: e.name,
                ownerId: e.ownerId,
                count: e._count,
                parentId: e.parentId
            };
        });
        setOptions(formatedCollections);
    }, [
        collections
    ]);
    const getParentNames = (parentId)=>{
        const parentNames = [];
        const parent = collections.find((e)=>e.id === parentId);
        if (parent) {
            parentNames.push(parent.name);
            if (parent.parentId) {
                parentNames.push(...getParentNames(parent.parentId));
            }
        }
        // Have the top level parent at beginning
        return parentNames.reverse();
    };
    const customOption = ({ data, innerProps })=>{
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            ...innerProps,
            className: "px-2 py-2 last:border-0 border-b border-neutral-content hover:bg-neutral-content cursor-pointer",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "flex w-full justify-between items-center",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            children: data.label
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            className: "text-sm text-neutral",
                            children: data.count?.links
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "text-xs text-gray-600 dark:text-gray-300",
                    children: getParentNames(data?.parentId).length > 0 ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                        children: [
                            getParentNames(data.parentId).join(" > "),
                            " ",
                            ">",
                            " ",
                            data.label
                        ]
                    }) : data.label
                })
            ]
        });
    };
    if (creatable) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_select_creatable__WEBPACK_IMPORTED_MODULE_4__["default"], {
            isClearable: false,
            className: "react-select-container",
            classNamePrefix: "react-select",
            onChange: onChange,
            options: options,
            styles: _styles__WEBPACK_IMPORTED_MODULE_3__/* .styles */ .W,
            defaultValue: showDefaultValue ? defaultValue : null,
            components: {
                Option: customOption
            }
        });
    } else {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_select__WEBPACK_IMPORTED_MODULE_5__["default"], {
            isClearable: false,
            className: "react-select-container",
            classNamePrefix: "react-select",
            onChange: onChange,
            options: options,
            styles: _styles__WEBPACK_IMPORTED_MODULE_3__/* .styles */ .W,
            defaultValue: showDefaultValue ? defaultValue : null,
            components: {
                Option: customOption
            }
        });
    }
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2122:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ TagSelection)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_select_creatable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1159);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9760);
/* harmony import */ var _hooks_store_tags__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4806);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_select_creatable__WEBPACK_IMPORTED_MODULE_2__, _hooks_store_tags__WEBPACK_IMPORTED_MODULE_4__]);
([react_select_creatable__WEBPACK_IMPORTED_MODULE_2__, _hooks_store_tags__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





function TagSelection({ onChange, defaultValue }) {
    const { data: tags = [] } = (0,_hooks_store_tags__WEBPACK_IMPORTED_MODULE_4__/* .useTags */ .e0)();
    const [options, setOptions] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const formatedCollections = tags.map((e)=>{
            return {
                value: e.id,
                label: e.name
            };
        });
        setOptions(formatedCollections);
    }, [
        tags
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_select_creatable__WEBPACK_IMPORTED_MODULE_2__["default"], {
        isClearable: false,
        className: "react-select-container",
        classNamePrefix: "react-select",
        onChange: onChange,
        options: options,
        styles: _styles__WEBPACK_IMPORTED_MODULE_3__/* .styles */ .W,
        defaultValue: defaultValue,
        // menuPosition="fixed"
        isMulti: true
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9760:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   W: () => (/* binding */ styles)
/* harmony export */ });
const font = "ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji";
const styles = {
    option: (styles, state)=>({
            ...styles,
            fontFamily: font,
            cursor: "pointer",
            backgroundColor: state.isSelected ? "oklch(var(--p))" : "inherit",
            "&:hover": {
                backgroundColor: state.isSelected ? "oklch(var(--p))" : "oklch(var(--nc))"
            },
            transition: "all 50ms"
        }),
    control: (styles, state)=>({
            ...styles,
            fontFamily: font,
            borderRadius: "0.375rem",
            border: state.isFocused ? "1px solid oklch(var(--p))" : "1px solid oklch(var(--nc))",
            boxShadow: "none",
            minHeight: "2.6rem"
        }),
    container: (styles, state)=>({
            ...styles,
            height: "full",
            borderRadius: "0.375rem",
            lineHeight: "1.25rem"
        }),
    input: (styles)=>({
            ...styles,
            cursor: "text"
        }),
    dropdownIndicator: (styles)=>({
            ...styles,
            cursor: "pointer"
        }),
    placeholder: (styles)=>({
            ...styles,
            borderColor: "black"
        }),
    multiValue: (styles)=>{
        return {
            ...styles,
            backgroundColor: "#0ea5e9",
            color: "white"
        };
    },
    multiValueLabel: (styles)=>({
            ...styles,
            color: "white"
        }),
    multiValueRemove: (styles)=>({
            ...styles,
            ":hover": {
                color: "white",
                backgroundColor: "#38bdf8"
            }
        }),
    menuPortal: (base)=>({
            ...base,
            zIndex: 9999
        })
};


/***/ }),

/***/ 7179:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $J: () => (/* binding */ useCreateCollection),
/* harmony export */   Do: () => (/* binding */ useDeleteCollection),
/* harmony export */   bX: () => (/* binding */ useCollections),
/* harmony export */   vU: () => (/* binding */ useUpdateCollection)
/* harmony export */ });
/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9752);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1649);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_1__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_tanstack_react_query__WEBPACK_IMPORTED_MODULE_0__]);
_tanstack_react_query__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


const useCollections = ()=>{
    const { status } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_1__.useSession)();
    return (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_0__.useQuery)({
        queryKey: [
            "collections"
        ],
        queryFn: async ()=>{
            const response = await fetch("/api/v1/collections");
            const data = await response.json();
            return data.response;
        },
        enabled: status === "authenticated"
    });
};
const useCreateCollection = ()=>{
    const queryClient = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_0__.useQueryClient)();
    return (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_0__.useMutation)({
        mutationFn: async (body)=>{
            const response = await fetch("/api/v1/collections", {
                body: JSON.stringify(body),
                headers: {
                    "Content-Type": "application/json"
                },
                method: "POST"
            });
            const data = await response.json();
            if (!response.ok) throw new Error(data.response);
            return data.response;
        },
        onSuccess: (data)=>{
            return queryClient.setQueryData([
                "collections"
            ], (oldData)=>{
                return [
                    ...oldData,
                    data
                ];
            });
        }
    });
};
const useUpdateCollection = ()=>{
    const queryClient = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_0__.useQueryClient)();
    return (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_0__.useMutation)({
        mutationFn: async (body)=>{
            const response = await fetch(`/api/v1/collections/${body.id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(body)
            });
            const data = await response.json();
            if (!response.ok) throw new Error(data.response);
            return data.response;
        },
        onSuccess: (data)=>{
            {
                return queryClient.setQueryData([
                    "collections"
                ], (oldData)=>{
                    return oldData.map((collection)=>collection.id === data.id ? data : collection);
                });
            }
        }
    });
};
const useDeleteCollection = ()=>{
    const queryClient = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_0__.useQueryClient)();
    return (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_0__.useMutation)({
        mutationFn: async (id)=>{
            const response = await fetch(`/api/v1/collections/${id}`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json"
                }
            });
            const data = await response.json();
            if (!response.ok) throw new Error(data.response);
            return data.response;
        },
        onSuccess: (data)=>{
            return queryClient.setQueryData([
                "collections"
            ], (oldData)=>{
                return oldData.filter((collection)=>collection.id !== data.id);
            });
        }
    });
};


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6496:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Mj: () => (/* binding */ useAddLink),
/* harmony export */   S5: () => (/* binding */ useDeleteLink),
/* harmony export */   Sw: () => (/* binding */ resetInfiniteQueryPagination),
/* harmony export */   Yc: () => (/* binding */ useUpdateLink),
/* harmony export */   Yi: () => (/* binding */ useBulkEditLinks),
/* harmony export */   kR: () => (/* binding */ useUploadFile),
/* harmony export */   mk: () => (/* binding */ useGetLink),
/* harmony export */   tD: () => (/* binding */ useBulkDeleteLinks),
/* harmony export */   u8: () => (/* binding */ useLinks)
/* harmony export */ });
/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9752);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _types_global__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7102);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1649);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_4__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_tanstack_react_query__WEBPACK_IMPORTED_MODULE_0__]);
_tanstack_react_query__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





const useLinks = (params = {})=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    const queryParamsObject = {
        sort: params.sort ?? Number(window.localStorage.getItem("sortBy")) ?? 0,
        collectionId: params.collectionId ?? router.pathname === "/collections/[id]" ? router.query.id : undefined,
        tagId: params.tagId ?? router.pathname === "/tags/[id]" ? router.query.id : undefined,
        pinnedOnly: params.pinnedOnly ?? router.pathname === "/links/pinned" ? true : undefined,
        searchQueryString: params.searchQueryString,
        searchByName: params.searchByName,
        searchByUrl: params.searchByUrl,
        searchByDescription: params.searchByDescription,
        searchByTextContent: params.searchByTextContent,
        searchByTags: params.searchByTags
    };
    const queryString = buildQueryString(queryParamsObject);
    const { data, ...rest } = useFetchLinks(queryString);
    const links = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>{
        return data?.pages.reduce((acc, page)=>{
            return [
                ...acc,
                ...page
            ];
        }, []);
    }, [
        data
    ]);
    return {
        links,
        data: {
            ...data,
            ...rest
        }
    };
};
const useFetchLinks = (params)=>{
    const { status } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_4__.useSession)();
    return (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_0__.useInfiniteQuery)({
        queryKey: [
            "links",
            {
                params
            }
        ],
        queryFn: async (params)=>{
            const response = await fetch("/api/v1/links?cursor=" + params.pageParam + (params.queryKey[1].params ? "&" + params.queryKey[1].params : ""));
            const data = await response.json();
            return data.response;
        },
        initialPageParam: 0,
        refetchOnWindowFocus: false,
        getNextPageParam: (lastPage)=>{
            if (lastPage.length === 0) {
                return undefined;
            }
            return lastPage.at(-1).id;
        },
        enabled: status === "authenticated"
    });
};
const buildQueryString = (params)=>{
    return Object.keys(params).filter((key)=>params[key] !== undefined).map((key)=>`${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`).join("&");
};
const useAddLink = ()=>{
    const queryClient = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_0__.useQueryClient)();
    return (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_0__.useMutation)({
        mutationFn: async (link)=>{
            const response = await fetch("/api/v1/links", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(link)
            });
            const data = await response.json();
            if (!response.ok) throw new Error(data.response);
            return data.response;
        },
        onSuccess: (data)=>{
            queryClient.setQueryData([
                "dashboardData"
            ], (oldData)=>{
                if (!oldData) return undefined;
                return [
                    data,
                    ...oldData
                ];
            });
            queryClient.setQueriesData({
                queryKey: [
                    "links"
                ]
            }, (oldData)=>{
                if (!oldData) return undefined;
                return {
                    pages: [
                        [
                            data,
                            ...oldData?.pages[0]
                        ],
                        ...oldData?.pages.slice(1)
                    ],
                    pageParams: oldData?.pageParams
                };
            });
            queryClient.invalidateQueries({
                queryKey: [
                    "collections"
                ]
            });
            queryClient.invalidateQueries({
                queryKey: [
                    "tags"
                ]
            });
            queryClient.invalidateQueries({
                queryKey: [
                    "publicLinks"
                ]
            });
        }
    });
};
const useUpdateLink = ()=>{
    const queryClient = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_0__.useQueryClient)();
    return (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_0__.useMutation)({
        mutationFn: async (link)=>{
            const response = await fetch(`/api/v1/links/${link.id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(link)
            });
            const data = await response.json();
            if (!response.ok) throw new Error(data.response);
            return data.response;
        },
        onSuccess: (data)=>{
            // queryClient.setQueryData(["dashboardData"], (oldData: any) => {
            //   if (!oldData) return undefined;
            //   return oldData.map((e: any) => (e.id === data.id ? data : e));
            // });
            // queryClient.setQueriesData({ queryKey: ["links"] }, (oldData: any) => {
            //   if (!oldData) return undefined;
            //   return {
            //     pages: oldData.pages.map((page: any) =>
            //       page.map((item: any) => (item.id === data.id ? data : item))
            //     ),
            //     pageParams: oldData.pageParams,
            //   };
            // });
            queryClient.invalidateQueries({
                queryKey: [
                    "links"
                ]
            }); // Temporary workaround
            queryClient.invalidateQueries({
                queryKey: [
                    "dashboardData"
                ]
            }); // Temporary workaround
            queryClient.invalidateQueries({
                queryKey: [
                    "collections"
                ]
            });
            queryClient.invalidateQueries({
                queryKey: [
                    "tags"
                ]
            });
            queryClient.invalidateQueries({
                queryKey: [
                    "publicLinks"
                ]
            });
        }
    });
};
const useDeleteLink = ()=>{
    const queryClient = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_0__.useQueryClient)();
    return (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_0__.useMutation)({
        mutationFn: async (id)=>{
            const response = await fetch(`/api/v1/links/${id}`, {
                method: "DELETE"
            });
            const data = await response.json();
            if (!response.ok) throw new Error(data.response);
            return data.response;
        },
        onSuccess: (data)=>{
            queryClient.setQueryData([
                "dashboardData"
            ], (oldData)=>{
                if (!oldData) return undefined;
                return oldData.filter((e)=>e.id !== data.id);
            });
            queryClient.setQueriesData({
                queryKey: [
                    "links"
                ]
            }, (oldData)=>{
                if (!oldData) return undefined;
                return {
                    pages: oldData.pages.map((page)=>page.filter((item)=>item.id !== data.id)),
                    pageParams: oldData.pageParams
                };
            });
            queryClient.invalidateQueries({
                queryKey: [
                    "collections"
                ]
            });
            queryClient.invalidateQueries({
                queryKey: [
                    "tags"
                ]
            });
            queryClient.invalidateQueries({
                queryKey: [
                    "publicLinks"
                ]
            });
        }
    });
};
const useGetLink = ()=>{
    const queryClient = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_0__.useQueryClient)();
    return (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_0__.useMutation)({
        mutationFn: async (id)=>{
            const response = await fetch(`/api/v1/links/${id}`);
            const data = await response.json();
            if (!response.ok) throw new Error(data.response);
            return data.response;
        },
        onSuccess: (data)=>{
            queryClient.setQueryData([
                "dashboardData"
            ], (oldData)=>{
                if (!oldData) return undefined;
                return oldData.map((e)=>e.id === data.id ? data : e);
            });
            queryClient.setQueriesData({
                queryKey: [
                    "links"
                ]
            }, (oldData)=>{
                if (!oldData) return undefined;
                return {
                    pages: oldData.pages.map((page)=>page.map((item)=>item.id === data.id ? data : item)),
                    pageParams: oldData.pageParams
                };
            });
            queryClient.invalidateQueries({
                queryKey: [
                    "publicLinks"
                ]
            });
        }
    });
};
const useBulkDeleteLinks = ()=>{
    const queryClient = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_0__.useQueryClient)();
    return (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_0__.useMutation)({
        mutationFn: async (linkIds)=>{
            const response = await fetch("/api/v1/links", {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    linkIds
                })
            });
            const data = await response.json();
            if (!response.ok) throw new Error(data.response);
            return linkIds;
        },
        onSuccess: (data)=>{
            queryClient.setQueryData([
                "dashboardData"
            ], (oldData)=>{
                if (!oldData) return undefined;
                return oldData.filter((e)=>!data.includes(e.id));
            });
            queryClient.setQueriesData({
                queryKey: [
                    "links"
                ]
            }, (oldData)=>{
                if (!oldData) return undefined;
                return {
                    pages: oldData.pages.map((page)=>page.filter((item)=>!data.includes(item.id))),
                    pageParams: oldData.pageParams
                };
            });
            queryClient.invalidateQueries({
                queryKey: [
                    "collections"
                ]
            });
            queryClient.invalidateQueries({
                queryKey: [
                    "tags"
                ]
            });
            queryClient.invalidateQueries({
                queryKey: [
                    "publicLinks"
                ]
            });
        }
    });
};
const useUploadFile = ()=>{
    const queryClient = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_0__.useQueryClient)();
    return (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_0__.useMutation)({
        mutationFn: async ({ link, file })=>{
            let fileType = null;
            let linkType = null;
            if (file?.type === "image/jpg" || file.type === "image/jpeg") {
                fileType = _types_global__WEBPACK_IMPORTED_MODULE_2__/* .ArchivedFormat */ .Gt.jpeg;
                linkType = "image";
            } else if (file.type === "image/png") {
                fileType = _types_global__WEBPACK_IMPORTED_MODULE_2__/* .ArchivedFormat */ .Gt.png;
                linkType = "image";
            } else if (file.type === "application/pdf") {
                fileType = _types_global__WEBPACK_IMPORTED_MODULE_2__/* .ArchivedFormat */ .Gt.pdf;
                linkType = "pdf";
            } else {
                return {
                    ok: false,
                    data: "Invalid file type."
                };
            }
            const response = await fetch("/api/v1/links", {
                body: JSON.stringify({
                    ...link,
                    type: linkType,
                    name: link.name ? link.name : file.name
                }),
                headers: {
                    "Content-Type": "application/json"
                },
                method: "POST"
            });
            const data = await response.json();
            if (!response.ok) throw new Error(data.response);
            if (response.ok) {
                const formBody = new FormData();
                file && formBody.append("file", file);
                await fetch(`/api/v1/archives/${data.response.id}?format=${fileType}`, {
                    body: formBody,
                    method: "POST"
                });
            }
            return data.response;
        },
        onSuccess: (data)=>{
            queryClient.setQueryData([
                "dashboardData"
            ], (oldData)=>{
                if (!oldData) return undefined;
                return [
                    data,
                    ...oldData
                ];
            });
            queryClient.setQueriesData({
                queryKey: [
                    "links"
                ]
            }, (oldData)=>{
                if (!oldData) return undefined;
                return {
                    pages: [
                        [
                            data,
                            ...oldData?.pages[0]
                        ],
                        ...oldData?.pages.slice(1)
                    ],
                    pageParams: oldData?.pageParams
                };
            });
            queryClient.invalidateQueries({
                queryKey: [
                    "collections"
                ]
            });
            queryClient.invalidateQueries({
                queryKey: [
                    "tags"
                ]
            });
            queryClient.invalidateQueries({
                queryKey: [
                    "publicLinks"
                ]
            });
        }
    });
};
const useBulkEditLinks = ()=>{
    const queryClient = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_0__.useQueryClient)();
    return (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_0__.useMutation)({
        mutationFn: async ({ links, newData, removePreviousTags })=>{
            const response = await fetch("/api/v1/links", {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    links,
                    newData,
                    removePreviousTags
                })
            });
            const data = await response.json();
            if (!response.ok) throw new Error(data.response);
            return data.response;
        },
        onSuccess: (data, { links, newData, removePreviousTags })=>{
            // TODO: Fix these
            // queryClient.setQueryData(["dashboardData"], (oldData: any) => {
            //   if (!oldData) return undefined;
            //   return oldData.map((e: any) =>
            //     data.find((d: any) => d.id === e.id) ? data : e
            //   );
            // });
            // queryClient.setQueriesData({ queryKey: ["links"] }, (oldData: any) => {
            //   if (!oldData) return undefined;
            //   return {
            //     pages: oldData.pages.map((page: any) => for (item of links) {
            //       page.map((item: any) => (item.id === data.id ? data : item))
            //     }
            //     ),
            //     pageParams: oldData.pageParams,
            //   };
            // });
            queryClient.invalidateQueries({
                queryKey: [
                    "links"
                ]
            }); // Temporary workaround
            queryClient.invalidateQueries({
                queryKey: [
                    "dashboardData"
                ]
            }); // Temporary workaround
            queryClient.invalidateQueries({
                queryKey: [
                    "collections"
                ]
            });
            queryClient.invalidateQueries({
                queryKey: [
                    "tags"
                ]
            });
            queryClient.invalidateQueries({
                queryKey: [
                    "publicLinks"
                ]
            });
        }
    });
};
const resetInfiniteQueryPagination = async (queryClient, queryKey)=>{
    queryClient.setQueriesData({
        queryKey
    }, (oldData)=>{
        if (!oldData) return undefined;
        return {
            pages: oldData.pages.slice(0, 1),
            pageParams: oldData.pageParams.slice(0, 1)
        };
    });
    await queryClient.invalidateQueries(queryKey);
};


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4806:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   e0: () => (/* binding */ useTags),
/* harmony export */   nY: () => (/* binding */ useRemoveTag),
/* harmony export */   yi: () => (/* binding */ useUpdateTag)
/* harmony export */ });
/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9752);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1649);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_1__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_tanstack_react_query__WEBPACK_IMPORTED_MODULE_0__]);
_tanstack_react_query__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


const useTags = ()=>{
    const { status } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_1__.useSession)();
    return (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_0__.useQuery)({
        queryKey: [
            "tags"
        ],
        queryFn: async ()=>{
            const response = await fetch("/api/v1/tags");
            if (!response.ok) throw new Error("Failed to fetch tags.");
            const data = await response.json();
            return data.response;
        },
        enabled: status === "authenticated"
    });
};
const useUpdateTag = ()=>{
    const queryClient = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_0__.useQueryClient)();
    return (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_0__.useMutation)({
        mutationFn: async (tag)=>{
            const response = await fetch(`/api/v1/tags/${tag.id}`, {
                body: JSON.stringify(tag),
                headers: {
                    "Content-Type": "application/json"
                },
                method: "PUT"
            });
            const data = await response.json();
            if (!response.ok) throw new Error(data.response);
            return data.response;
        },
        onSuccess: (data)=>{
            queryClient.setQueryData([
                "tags"
            ], (oldData)=>oldData.map((tag)=>tag.id === data.id ? data : tag));
        }
    });
};
const useRemoveTag = ()=>{
    const queryClient = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_0__.useQueryClient)();
    return (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_0__.useMutation)({
        mutationFn: async (tagId)=>{
            const response = await fetch(`/api/v1/tags/${tagId}`, {
                method: "DELETE"
            });
            const data = await response.json();
            if (!response.ok) throw new Error(data.response);
            return data.response;
        },
        onSuccess: (data, variables)=>{
            queryClient.setQueryData([
                "tags"
            ], (oldData)=>oldData.filter((tag)=>tag.id !== variables));
        }
    });
};


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2980:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ usePermissions)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _store_collections__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7179);
/* harmony import */ var _store_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2676);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_store_collections__WEBPACK_IMPORTED_MODULE_1__, _store_user__WEBPACK_IMPORTED_MODULE_2__]);
([_store_collections__WEBPACK_IMPORTED_MODULE_1__, _store_user__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



function usePermissions(collectionId) {
    const { data: collections = [] } = (0,_store_collections__WEBPACK_IMPORTED_MODULE_1__/* .useCollections */ .bX)();
    const { data: user = {} } = (0,_store_user__WEBPACK_IMPORTED_MODULE_2__/* .useUser */ .a)();
    const [permissions, setPermissions] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        const collection = collections.find((e)=>e.id === collectionId);
        if (collection) {
            let getPermission = collection.members.find((e)=>e.userId === user.id);
            if (getPermission?.canCreate === false && getPermission?.canUpdate === false && getPermission?.canDelete === false) getPermission = undefined;
            setPermissions(user.id === collection.ownerId || getPermission);
        }
    }, [
        user,
        collections,
        collectionId
    ]);
    return permissions;
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1256:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ getPublicUserData)
/* harmony export */ });
/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6201);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_hot_toast__WEBPACK_IMPORTED_MODULE_0__]);
react_hot_toast__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

async function getPublicUserData(id) {
    const response = await fetch(`/api/v1/public/users/${id}`);
    const data = await response.json();
    if (!response.ok) react_hot_toast__WEBPACK_IMPORTED_MODULE_0__.toast.error(data.response);
    return data.response;
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9401:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ unescapeString)
/* harmony export */ });
function unescapeString(input) {
    var doc = new DOMParser().parseFromString(input, "text/html");
    return doc.documentElement.textContent;
}


/***/ })

};
;