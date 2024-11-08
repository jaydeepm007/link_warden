"use strict";
exports.id = 4699;
exports.ids = [4699];
exports.modules = {

/***/ 4699:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ ReadableView)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var _lib_client_unescapeString__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(9401);
/* harmony import */ var _lib_shared_getArchiveValidity__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(326);
/* harmony import */ var _lib_shared_isValidUrl__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(2602);
/* harmony import */ var _types_global__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7102);
/* harmony import */ var colorthief__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8569);
/* harmony import */ var colorthief__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(colorthief__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var dompurify__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1320);
/* harmony import */ var dompurify__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(dompurify__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _LinkViews_LinkComponents_LinkActions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(3906);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1377);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _hooks_store_collections__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(7179);
/* harmony import */ var _hooks_store_links__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(6496);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_LinkViews_LinkComponents_LinkActions__WEBPACK_IMPORTED_MODULE_8__, _hooks_store_collections__WEBPACK_IMPORTED_MODULE_10__, _hooks_store_links__WEBPACK_IMPORTED_MODULE_11__]);
([_LinkViews_LinkComponents_LinkActions__WEBPACK_IMPORTED_MODULE_8__, _hooks_store_collections__WEBPACK_IMPORTED_MODULE_10__, _hooks_store_links__WEBPACK_IMPORTED_MODULE_11__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);















function ReadableView({ link }) {
    const { t } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_9__.useTranslation)();
    const [linkContent, setLinkContent] = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)();
    const [imageError, setImageError] = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(false);
    const [colorPalette, setColorPalette] = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)();
    const [date, setDate] = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)();
    const colorThief = new (colorthief__WEBPACK_IMPORTED_MODULE_2___default())();
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter)();
    const getLink = (0,_hooks_store_links__WEBPACK_IMPORTED_MODULE_11__/* .useGetLink */ .mk)();
    const { data: collections = [] } = (0,_hooks_store_collections__WEBPACK_IMPORTED_MODULE_10__/* .useCollections */ .bX)();
    const collection = (0,react__WEBPACK_IMPORTED_MODULE_7__.useMemo)(()=>{
        return collections.find((e)=>e.id === link.collection.id);
    }, [
        collections,
        link
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_7__.useEffect)(()=>{
        const fetchLinkContent = async ()=>{
            if (router.query.id && (0,_lib_shared_getArchiveValidity__WEBPACK_IMPORTED_MODULE_12__/* .readabilityAvailable */ .Ji)(link)) {
                const response = await fetch(`/api/v1/archives/${link?.id}?format=${_types_global__WEBPACK_IMPORTED_MODULE_1__/* .ArchivedFormat */ .Gt.readability}`);
                const data = await response?.json();
                setLinkContent(data);
            }
        };
        fetchLinkContent();
        setDate(link.importDate || link.createdAt);
    }, [
        link
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_7__.useEffect)(()=>{
        if (link) getLink.mutateAsync(link?.id);
        let interval;
        if (link && (link?.image === "pending" || link?.pdf === "pending" || link?.readable === "pending" || link?.monolith === "pending" || !link?.image || !link?.pdf || !link?.readable || !link?.monolith)) {
            interval = setInterval(()=>getLink.mutateAsync(link.id), 5000);
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
        link?.image,
        link?.pdf,
        link?.readable,
        link?.monolith
    ]);
    const rgbToHex = (r, g, b)=>"#" + [
            r,
            g,
            b
        ].map((x)=>{
            const hex = x.toString(16);
            return hex.length === 1 ? "0" + hex : hex;
        }).join("");
    (0,react__WEBPACK_IMPORTED_MODULE_7__.useEffect)(()=>{
        const banner = document.getElementById("link-banner");
        const bannerInner = document.getElementById("link-banner-inner");
        if (colorPalette && banner && bannerInner) {
            if (colorPalette[0] && colorPalette[1]) {
                banner.style.background = `linear-gradient(to bottom, ${rgbToHex(colorPalette[0][0], colorPalette[0][1], colorPalette[0][2])}20, ${rgbToHex(colorPalette[1][0], colorPalette[1][1], colorPalette[1][2])}20)`;
            }
            if (colorPalette[2] && colorPalette[3]) {
                bannerInner.style.background = `linear-gradient(to bottom, ${rgbToHex(colorPalette[2][0], colorPalette[2][1], colorPalette[2][2])}30, ${rgbToHex(colorPalette[3][0], colorPalette[3][1], colorPalette[3][2])})30`;
            }
        }
    }, [
        colorPalette
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: `flex flex-col max-w-screen-md h-full mx-auto p-5`,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                id: "link-banner",
                className: "link-banner relative bg-opacity-10 border-neutral-content p-3 border mb-3",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        id: "link-banner-inner",
                        className: "link-banner-inner"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: `flex flex-col gap-3 items-start`,
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "flex gap-3 items-start",
                                children: [
                                    !imageError && link?.url && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {
                                        src: `https://t2.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=${link.url}&size=32`,
                                        width: 42,
                                        height: 42,
                                        alt: "",
                                        id: "favicon-" + link.id,
                                        className: "bg-white shadow rounded-md p-1 select-none mt-1",
                                        draggable: "false",
                                        onLoad: (e)=>{
                                            try {
                                                const color = colorThief.getPalette(e.target, 4);
                                                setColorPalette(color);
                                            } catch (err) {
                                                console.log(err);
                                            }
                                        },
                                        onError: (e)=>{
                                            setImageError(true);
                                        }
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "flex flex-col",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                className: "text-xl pr-10",
                                                children: (0,_lib_client_unescapeString__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z)(link?.name || link?.description || link?.url || "")
                                            }),
                                            link?.url ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {
                                                href: link?.url || "",
                                                title: link?.url,
                                                target: "_blank",
                                                className: "hover:opacity-60 duration-100 break-all text-sm flex items-center gap-1 text-neutral w-fit",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                        className: "bi-link-45deg"
                                                    }),
                                                    (0,_lib_shared_isValidUrl__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z)(link?.url || "") ? new URL(link?.url).host : undefined
                                                ]
                                            }) : undefined
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "flex gap-1 items-center flex-wrap",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {
                                        href: `/collections/${link?.collection.id}`,
                                        className: "flex items-center gap-1 cursor-pointer hover:opacity-60 duration-100 mr-2 z-10",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                className: "bi-folder-fill drop-shadow text-2xl",
                                                style: {
                                                    color: link?.collection.color
                                                }
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                title: link?.collection.name,
                                                className: "text-lg truncate max-w-[12rem]",
                                                children: link?.collection.name
                                            })
                                        ]
                                    }),
                                    link?.tags?.map((e, i)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {
                                            href: `/tags/${e.id}`,
                                            className: "z-10",
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                title: e.name,
                                                className: "btn btn-xs btn-ghost truncate max-w-[19rem]",
                                                children: [
                                                    "#",
                                                    e.name
                                                ]
                                            })
                                        }, i))
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: "min-w-fit text-sm text-neutral",
                                children: date ? new Date(date).toLocaleString("en-US", {
                                    year: "numeric",
                                    month: "long",
                                    day: "numeric"
                                }) : undefined
                            }),
                            link?.name ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                children: (0,_lib_client_unescapeString__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z)(link?.description)
                            }) : undefined
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_LinkViews_LinkComponents_LinkActions__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                        link: link,
                        collection: collection,
                        position: "top-3 right-3",
                        alignToTop: true
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "flex flex-col gap-5 h-full",
                children: link?.readable?.startsWith("archives") ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "line-break px-1 reader-view",
                    dangerouslySetInnerHTML: {
                        __html: dompurify__WEBPACK_IMPORTED_MODULE_3___default().sanitize(linkContent?.content || "") || ""
                    }
                }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: `w-full h-full flex flex-col justify-center p-10 ${link?.readable === "pending" || !link?.readable ? "skeleton" : ""}`,
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            width: "16",
                            height: "16",
                            fill: "currentColor",
                            className: "w-1/4 min-w-[7rem] max-w-[15rem] h-auto mx-auto mb-5",
                            viewBox: "0 0 16 16",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                    d: "m14.12 10.163 1.715.858c.22.11.22.424 0 .534L8.267 15.34a.598.598 0 0 1-.534 0L.165 11.555a.299.299 0 0 1 0-.534l1.716-.858 5.317 2.659c.505.252 1.1.252 1.604 0l5.317-2.66zM7.733.063a.598.598 0 0 1 .534 0l7.568 3.784a.3.3 0 0 1 0 .535L8.267 8.165a.598.598 0 0 1-.534 0L.165 4.382a.299.299 0 0 1 0-.535L7.733.063z"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                    d: "m14.12 6.576 1.715.858c.22.11.22.424 0 .534l-7.568 3.784a.598.598 0 0 1-.534 0L.165 7.968a.299.299 0 0 1 0-.534l1.716-.858 5.317 2.659c.505.252 1.1.252 1.604 0l5.317-2.659z"
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            className: "text-center text-2xl",
                            children: t("link_preservation_in_queue")
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            className: "text-center text-lg mt-2",
                            children: t("check_back_later")
                        })
                    ]
                })
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;