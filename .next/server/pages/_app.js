"use strict";
(() => {
var exports = {};
exports.id = 2888;
exports.ids = [2888];
exports.modules = {

/***/ 1085:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_icons_bi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6652);
/* harmony import */ var react_icons_bi__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_icons_bi__WEBPACK_IMPORTED_MODULE_4__);





const AboutSidebar = ()=>{
    const { 0: routerClick , 1: setRouterClick  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)("about");
    // useEffect(() => {}, [routerClick]);
    console.log("RouterClick", routerClick);
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "about__page",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                children: "Our Services"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: routerClick !== "about" ? "about__listItem__container short " : "about__listItem__container",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                        onClick: ()=>setRouterClick("about")
                        ,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_1__["default"], {
                            href: "/about/aboutus",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                className: router.pathname.includes("/aboutus") && "Sidebar__activeItem",
                                children: [
                                    routerClick !== "about" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_bi__WEBPACK_IMPORTED_MODULE_4__.BiChevronDownCircle, {
                                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_bi__WEBPACK_IMPORTED_MODULE_4__.BiChevronUpCircle, {
                                    }),
                                    "About us"
                                ]
                            })
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                        className: routerClick !== "about" && "about__listItem",
                        onClick: ()=>setRouterClick("about")
                        ,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_1__["default"], {
                            href: "/about/connect",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                className: router.pathname.includes("/connect") ? "Sidebar__activeItem" : "",
                                children: "connect us"
                            })
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                        className: routerClick !== "about" && "about__listItem",
                        onClick: ()=>setRouterClick("about")
                        ,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_1__["default"], {
                            href: "/about/delevery",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                className: router.pathname.includes("/about/delevery") && "Sidebar__activeItem",
                                children: "Delevery"
                            })
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                        className: routerClick !== "about" && "about__listItem",
                        onClick: ()=>setRouterClick("about")
                        ,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_1__["default"], {
                            href: "/about/contact",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                className: router.pathname.includes("/about/contact") && "Sidebar__activeItem",
                                children: "Contact"
                            })
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                        className: routerClick !== "about" && "about__listItem",
                        onClick: ()=>setRouterClick("about")
                        ,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_1__["default"], {
                            href: "/about/services",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                className: router.pathname.includes("/about/services") && "Sidebar__activeItem",
                                children: "Services"
                            })
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: routerClick !== "BuyProduct" ? "short " : "long",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                        onClick: ()=>setTimeout(()=>setRouterClick("BuyProduct")
                            , 500)
                        ,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_1__["default"], {
                            href: "/about/blog",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                className: router.pathname.includes("/blog") && "Sidebar__activeItem",
                                children: [
                                    routerClick !== "BuyProduct" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_bi__WEBPACK_IMPORTED_MODULE_4__.BiChevronDownCircle, {
                                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_bi__WEBPACK_IMPORTED_MODULE_4__.BiChevronUpCircle, {
                                    }),
                                    "The blog"
                                ]
                            })
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                        onClick: ()=>setRouterClick("BuyProduct")
                        ,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_1__["default"], {
                            href: "/about/faqs",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                className: router.pathname.includes("/faqs") ? "Sidebar__activeItem" : "",
                                children: "FAQs"
                            })
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                        onClick: ()=>setRouterClick("BuyProduct")
                        ,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_1__["default"], {
                            href: "/about/ordertraking",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                className: router.pathname.includes("/ordertraking") && "Sidebar__activeItem",
                                children: "The order"
                            })
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                        onClick: ()=>setRouterClick("BuyProduct")
                        ,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_1__["default"], {
                            href: "/about/shipping",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                className: router.pathname.includes("/shipping") && "Sidebar__activeItem",
                                children: "The shipping"
                            })
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: routerClick !== "address" ? "short " : "long",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                        onClick: ()=>setTimeout(()=>setRouterClick("address")
                            , 500)
                        ,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_1__["default"], {
                            href: "/about/office",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                className: router.pathname.includes("/office") && "Sidebar__activeItem",
                                children: [
                                    routerClick !== "address" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_bi__WEBPACK_IMPORTED_MODULE_4__.BiChevronDownCircle, {
                                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_bi__WEBPACK_IMPORTED_MODULE_4__.BiChevronUpCircle, {
                                    }),
                                    "Office"
                                ]
                            })
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                        onClick: ()=>setRouterClick("address")
                        ,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_1__["default"], {
                            href: "/about/production",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                className: router.pathname.includes("/production") ? "Sidebar__activeItem" : "",
                                children: "Production"
                            })
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                        onClick: ()=>setRouterClick("address")
                        ,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_1__["default"], {
                            href: "/about/number",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                className: router.pathname.includes("/number") && "Sidebar__activeItem",
                                children: "Phone"
                            })
                        })
                    })
                ]
            })
        ]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AboutSidebar);


/***/ }),

/***/ 4436:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var _utils_filterSearch__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(7152);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(567);
/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_icons_bs__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _store_GlobalState__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4901);
/* harmony import */ var _locales_en__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7428);
/* harmony import */ var _locales_uz__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1865);

/* eslint-disable @next/next/no-css-tags */ /* eslint-disable @next/next/link-passhref */ /* eslint-disable react-hooks/exhaustive-deps */ 







const Category = ()=>{
    const { state , dispatch  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_store_GlobalState__WEBPACK_IMPORTED_MODULE_5__/* .DataContext */ .R);
    const { categories , categoryName , categoryId  } = state;
    // console.log("cate categoryName >>>:", categoryName);
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    const { locale , pathname , asPath  } = router;
    const t = locale === "en" ? _locales_en__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z : _locales_uz__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z;
    const { 0: status , 1: setStatus  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: categoryNames , 1: setCategoryName  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        setCategoryName(t.all);
    }, [
        locale,
        t.all
    ]);
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "task__adderSelect",
            onMouseEnter: ()=>setStatus(true)
            ,
            onMouseLeave: ()=>setStatus(false)
            ,
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                    children: [
                        " ",
                        categoryName === "" ? categoryNames : categoryName,
                        " "
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: status ? "task__adderStatus" : "hide__status",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                            className: "status",
                            onClick: ()=>router.push({
                                    pathname: '/'
                                }) + (0,_utils_filterSearch__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)({
                                    router,
                                    category: null
                                })
                            ,
                            onMouseEnter: ()=>setStatus(true)
                            ,
                            onMouseLeave: ()=>setStatus(false)
                            ,
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    children: t.all
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: `${categoryName === t.Categories || categoryName === t.category ? "signal" : ""}`
                                })
                            ]
                        }),
                        categories.map((item)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                href: "/",
                                className: "status",
                                onMouseEnter: ()=>setStatus(true)
                                ,
                                onMouseLeave: ()=>setStatus(false)
                                ,
                                onClick: ()=>// setCategoryName(item.name) +
                                    // setCategoryId(item._id) +
                                    // sensor() +
                                    dispatch({
                                        type: "CATEGORYID",
                                        payload: item._id
                                    })
                                ,
                                value: item._id,
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        children: item.name
                                    }),
                                    categoryName === item.name ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("b", {
                                        className: "signal"
                                    }) : ""
                                ]
                            }, item._id)
                        )
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_bs__WEBPACK_IMPORTED_MODULE_4__.BsThreeDots, {
                })
            ]
        })
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Category);


/***/ }),

/***/ 9573:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);

/* eslint-disable @next/next/no-img-element */ 

function LanguageSelect() {
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    const { 0: lang , 1: setLang  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("en");
    const { 0: langImg , 1: setLangImg  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("https://cdn-icons-png.flaticon.com/512/206/206626.png");
    const language_items = [
        {
            id: 0,
            languageImage: "https://cdn-icons-png.flaticon.com/512/206/206626.png",
            title: "English",
            languageCode: "en"
        },
        // {
        //   id: 1,
        //   languageImage: "https://cdn-icons-png.flaticon.com/512/206/206604.png",
        //   title: "Russian",
        //   languageCode: "ru",
        // },
        {
            id: 2,
            languageImage: "https://cdn-icons-png.flaticon.com/512/206/206662.png",
            title: "O'zbek",
            languageCode: "uz"
        }, 
    ];
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const locale = lang;
        // console.log("useEffect value", lang);
        router.push(router.pathname, router.asPath, {
            locale
        });
    }, [
        lang
    ]);
    const { 0: status , 1: setStatus  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "LangugeSelect__headerLanguage",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "language__taskAdderSelect",
            onMouseEnter: ()=>setStatus(true)
            ,
            onMouseLeave: ()=>setStatus(false)
            ,
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                    children: lang
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                    src: langImg,
                    alt: langImg
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: status ? "language__taskAdderStatus" : "language__taskHide__status",
                    children: language_items.map((item)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            href: "/",
                            className: "language__status",
                            onMouseEnter: ()=>setStatus(true)
                            ,
                            onMouseLeave: ()=>setStatus(false)
                            ,
                            onClick: ()=>setLang(item.languageCode) + setLangImg(item.languageImage)
                            ,
                            value: item.id,
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                    src: item.languageImage,
                                    alt: item.languageImage
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    children: item.title
                                })
                            ]
                        }, item.id)
                    )
                })
            ]
        })
    }));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LanguageSelect);


/***/ }),

/***/ 5789:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _NavBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8019);
/* harmony import */ var _Notify__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4232);
/* harmony import */ var _Modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2280);
/* harmony import */ var _MediaFooter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2282);
/* harmony import */ var _Media_MediaNavBar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7638);
/* harmony import */ var _AboutSidebar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1085);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_8__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_MediaFooter__WEBPACK_IMPORTED_MODULE_5__, _Media_MediaNavBar__WEBPACK_IMPORTED_MODULE_6__, _NavBar__WEBPACK_IMPORTED_MODULE_2__]);
([_MediaFooter__WEBPACK_IMPORTED_MODULE_5__, _Media_MediaNavBar__WEBPACK_IMPORTED_MODULE_6__, _NavBar__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);








// import Link from "next/link";
// import LanguageSelect from "../pages/LanguageSelect";

function Layout({ children  }) {
    const { 0: route , 1: setRoute  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_8__.useRouter)();
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (router.pathname.includes("about")) {
            setRoute(true);
        } else {
            setRoute(false);
        }
    }, [
        router
    ]);
    // console.log("Router", route);
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_NavBar__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Media_MediaNavBar__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Notify__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Modal__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_MediaFooter__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
            }),
            route && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_AboutSidebar__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
            }),
            children
        ]
    }));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Layout);

});

/***/ }),

/***/ 7638:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _store_GlobalState__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4901);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9915);
/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(567);
/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_icons_bs__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9847);
/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_icons_ai__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_icons_bi__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6652);
/* harmony import */ var react_icons_bi__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_icons_bi__WEBPACK_IMPORTED_MODULE_8__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([js_cookie__WEBPACK_IMPORTED_MODULE_5__]);
js_cookie__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];

/* eslint-disable @next/next/link-passhref */ /* eslint-disable @next/next/no-img-element */ /* eslint-disable jsx-a11y/role-supports-aria-props */ 







// import Filter from "./Filter";
// import LanguageSelect from "./LanguageSelect";
function MediaNavBar() {
    var ref;
    // const { t, i18n } = useTranslation();
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    const { state , dispatch  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_store_GlobalState__WEBPACK_IMPORTED_MODULE_4__/* .DataContext */ .R);
    const { auth , cart  } = state;
    const { 0: show , 1: setShow  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: click , 1: setClick  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: userOpen , 1: setUserOpen  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const email = (ref = auth.user) === null || ref === void 0 ? void 0 : ref.email.match(/^.+(?=@)/)[0];
    const emailCut = (email === null || email === void 0 ? void 0 : email.length) < 10 ? email : (email === null || email === void 0 ? void 0 : email.substr(0, 11 - 1)) + "...";
    const isActive = (r)=>{
        if (r === router.pathname) {
            return " active";
        } else {
            return "";
        }
    };
    const transitionNavbar = ()=>{
        if (window.scrollY > 100) {
            setShow(true);
        } else {
            setShow(false);
        }
    };
    // console.log(click);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        window.addEventListener("scroll", transitionNavbar);
        return ()=>window.removeEventListener("scroll", transitionNavbar)
        ;
    }, []);
    const handleLogout = ()=>{
        js_cookie__WEBPACK_IMPORTED_MODULE_5__["default"].remove("refreshtoken", {
            path: "api/auth/accessToken"
        });
        localStorage.removeItem("firstLogin");
        dispatch({
            type: "AUTH",
            payload: {
            }
        });
        dispatch({
            type: "NOTIFY",
            payload: {
                success: "Logged out!"
            }
        });
        return router.push("/");
    };
    // const adminRouter = () => {
    //   return (
    //     <>
    //       <Link href="/users">
    //         <a className="navbar__userlistItem">Users</a>
    //       </Link>
    //       <Link href="/create">
    //         <a className="navbar__userlistItem">Products</a>
    //       </Link>
    //       <Link href="/categories">
    //         <a className="navbar__userlistItem">Categories</a>
    //       </Link>
    //     </>
    //   );
    // };
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("nav", {
        className: `${!show ? "mediaNavbar" : "mediaNavbar navbar__color"} navbar-expand-lg`,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_2__["default"], {
                href: "/",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "mediaNavbar__brandContainer",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                            className: "mediaNavbar__brand",
                            children: "DunyoShop"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "mediaNavbar__dot"
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "mediaNav__menu",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "mediaNavbar__cart",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_2__["default"], {
                            href: "/cart",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                className: "mediaNavbar__cartLink" + isActive("/cart"),
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_bs__WEBPACK_IMPORTED_MODULE_6__.BsCartPlus, {
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("b", {
                                        children: cart.length
                                    })
                                ]
                            })
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "mediaNav__menuBar",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                className: "mediaNavbar__toggler",
                                onClick: ()=>setClick(!click)
                                ,
                                type: "button",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_ai__WEBPACK_IMPORTED_MODULE_7__.AiOutlineMenu, {
                                })
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: click ? "mediaNav__mediaPlus" : "mediaNav__mediaPlus nav__mediaPlusMenu",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                        onClick: ()=>setClick(false)
                                        ,
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_2__["default"], {
                                            href: "/about/aboutus",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                children: "About us"
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                        onClick: ()=>setClick(false)
                                        ,
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_2__["default"], {
                                            href: "/about/blog",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                children: "The blog"
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                        onClick: ()=>setClick(false)
                                        ,
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_2__["default"], {
                                            href: "/about/office",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                children: "The office"
                                            })
                                        })
                                    })
                                ]
                            })
                        ]
                    })
                ]
            })
        ]
    }));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MediaNavBar);

});

/***/ }),

/***/ 2282:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils_filterSearch__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(7152);
/* harmony import */ var _store_GlobalState__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4901);
/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2750);
/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_icons_fi__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6290);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_icons_fa__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_icons_bi__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6652);
/* harmony import */ var react_icons_bi__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_icons_bi__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(9915);
/* harmony import */ var _locales_en__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(7428);
/* harmony import */ var _locales_uz__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(1865);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([js_cookie__WEBPACK_IMPORTED_MODULE_8__]);
js_cookie__WEBPACK_IMPORTED_MODULE_8__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];

/* eslint-disable @next/next/no-img-element */ 










const MediaFooter = ()=>{
    var ref, ref1, ref2, ref3;
    const { state , dispatch  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_store_GlobalState__WEBPACK_IMPORTED_MODULE_4__/* .DataContext */ .R);
    const { categories , auth , categoryName  } = state;
    const { 0: logged , 1: setLogged  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        const x = Object.keys(auth).length !== 0;
        return setLogged(x);
    }, [
        auth
    ]);
    // console.log(Object.keys(auth).length !== 0);
    // console.log(logged);
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    const { 0: status , 1: setStatus  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const { 0: search , 1: setSearch  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("");
    const { 0: searchClick , 1: setSearchClick  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const { 0: userClick , 1: setUserClick  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const { 0: categoryId , 1: setCategoryId  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("Category");
    const email = (ref = auth.user) === null || ref === void 0 ? void 0 : ref.email.match(/^.+(?=@)/)[0];
    const emailCut = (email === null || email === void 0 ? void 0 : email.length) < 8 ? email : (email === null || email === void 0 ? void 0 : email.substr(0, 11 - 1)) + "...";
    // console.log("this is category", categoryId);
    // console.log("this is userClick", userClick);
    const click = ()=>{
        (0,_utils_filterSearch__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z)({
            router,
            category: null
        });
        router.push({
            pathname: '/'
        });
    };
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        (0,_utils_filterSearch__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z)({
            router,
            search: search ? search.toLowerCase() : "all"
        });
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        search
    ]);
    const hundleBtn = (e)=>{
        e.preventDefault();
        setSearch("");
    };
    const { locale  } = router;
    const t = locale === "en" ? _locales_en__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z : _locales_uz__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z;
    // -----------------
    const isActive = (r)=>{
        if (r === router.pathname) {
            return "active";
        } else {
            return "";
        }
    };
    const handleLogout = ()=>{
        js_cookie__WEBPACK_IMPORTED_MODULE_8__["default"].remove("refreshtoken", {
            path: "api/auth/accessToken"
        });
        localStorage.removeItem("firstLogin");
        dispatch({
            type: "AUTH",
            payload: {
            }
        });
        dispatch({
            type: "NOTIFY",
            payload: {
                success: "Logged out!"
            }
        });
        return router.push("/");
    };
    const adminRouter = ()=>{
        return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_1__["default"], {
                    href: "/users",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                        className: "mediaFooter__userlistItem",
                        children: "Users"
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_1__["default"], {
                    href: "/create",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                        className: "mediaFooter__userlistItem",
                        children: "Products"
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_1__["default"], {
                    href: "/categories",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                        className: "mediaFooter__userlistItem",
                        children: "Categories"
                    })
                })
            ]
        }));
    };
    const loggedRouter = ()=>{
        return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "madiaFooter__userToggle",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                        src: auth.user.avatar,
                        alt: auth.user.avatar,
                        style: {
                            borderRadius: "50%",
                            width: "30px",
                            height: "30px",
                            transform: "translateY(-3px)",
                            marginRight: "3px"
                        }
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        className: "mediaFooter__userName",
                        children: emailCut
                    })
                ]
            })
        }));
    };
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "mediafooter",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                onClick: ()=>setStatus(!status) + setSearchClick(false) + setUserClick(false)
                ,
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "mediaFooter__listItems",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_bi__WEBPACK_IMPORTED_MODULE_7__.BiCategory, {
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                children: t.Categories
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: status ? "mediaTask__adderStatus" : "mediaHide__status",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "mediaFooter__status",
                                onClick: click,
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        children: "All"
                                    }),
                                    categoryId === "Category" || null || "" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "signal"
                                    }) : ""
                                ]
                            }),
                            categories.map((item)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    href: "/",
                                    className: "mediaFooter__status",
                                    value: item._id,
                                    onClick: ()=>setStatus(false) + dispatch({
                                            type: "CATEGORYNAME",
                                            payload: item.name
                                        })
                                    ,
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            children: categoryName
                                        }),
                                        categoryId === item.name ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("b", {
                                            className: "signal"
                                        }) : ""
                                    ]
                                }, item._id)
                            )
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: searchClick ? "media__footerSearchContainer" : "media__footerSearchContainer media__footerSearchContainerFalse",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                        type: "text",
                        list: "title_product",
                        value: search.toLowerCase(),
                        onChange: (e)=>setSearch(e.target.value)
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        onClick: hundleBtn,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_fi__WEBPACK_IMPORTED_MODULE_5__.FiSearch, {
                        })
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                // className="media__footerSearch"
                onClick: ()=>setSearchClick(!searchClick) + setStatus(false) + setUserClick(false)
                ,
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                    href: "#",
                    className: "mediaFooter__listItems",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_fi__WEBPACK_IMPORTED_MODULE_5__.FiSearch, {
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            children: t.search
                        })
                    ]
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: `${userClick ? `${((ref1 = auth.user) === null || ref1 === void 0 ? void 0 : ref1.role) === "admin" ? "MediaFooter__customListAdmin" : `${logged ? "MediaFooter__customList" : ""}`}` : `${((ref2 = auth.user) === null || ref2 === void 0 ? void 0 : ref2.role) === "admin" ? "MediaFooter__customListAdmin MediaFooter__customListAdmin__non" : "MediaFooter__customList MediaFooter__customList__non"}`}`,
                children: logged && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_1__["default"], {
                            href: "/profile",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                className: "mediaFooter__userlistItem",
                                children: "Profile"
                            })
                        }),
                        ((ref3 = auth.user) === null || ref3 === void 0 ? void 0 : ref3.role) === "admin" && adminRouter(),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            className: "mediaFooter__userlistItem",
                            onClick: handleLogout,
                            children: "Logout"
                        })
                    ]
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                // className="media__footerUser"
                onClick: ()=>setUserClick(!userClick) + setSearchClick(false) + setStatus(false)
                ,
                children: Object.keys(auth).length === 0 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "mediaFooter__listItems",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_1__["default"], {
                        href: "/signin",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                            className: "mediaFooter__logged" + isActive("/signin"),
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_bi__WEBPACK_IMPORTED_MODULE_7__.BiLogInCircle, {
                                    style: {
                                        marginLeft: "5px"
                                    }
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    children: t.Signin
                                })
                            ]
                        })
                    })
                }) : loggedRouter()
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                onClick: ()=>setUserClick(false) + setSearchClick(false) + setStatus(false)
                ,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_1__["default"], {
                    href: "/about/aboutus",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                        href: "#",
                        className: "mediaFooter__listItems",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_fi__WEBPACK_IMPORTED_MODULE_5__.FiPhoneCall, {
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                children: t.contactus
                            })
                        ]
                    })
                })
            })
        ]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MediaFooter);

});

/***/ }),

/***/ 2261:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);

/* eslint-disable @next/next/no-img-element */ 

function MediaLanguageSelect() {
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    const { 0: lang , 1: setLang  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("en");
    const { 0: langImg , 1: setLangImg  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("https://cdn-icons-png.flaticon.com/512/206/206626.png");
    const language_items = [
        {
            id: 0,
            languageImage: "https://cdn-icons-png.flaticon.com/512/206/206626.png",
            title: "English",
            languageCode: "en"
        },
        // {
        //   id: 1,
        //   languageImage: "https://cdn-icons-png.flaticon.com/512/206/206604.png",
        //   title: "Russian",
        //   languageCode: "ru",
        // },
        {
            id: 2,
            languageImage: "https://cdn-icons-png.flaticon.com/512/206/206662.png",
            title: "O'zbek",
            languageCode: "uz"
        }, 
    ];
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const locale = lang;
        // console.log("useEffect value", lang);
        router.push(router.pathname, router.asPath, {
            locale
        });
    }, [
        lang
    ]);
    const { 0: status , 1: setStatus  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "MediaLangugeSelect__headerLanguage",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "medialanguage__taskAdderSelect",
            onClick: ()=>setStatus(!status)
            ,
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                    src: langImg,
                    alt: langImg
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                    children: lang
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: status ? "Medialanguage__taskAdderStatus" : "medialanguage__taskHide__status",
                    children: language_items.map((item)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            href: "/",
                            className: "medialanguage__status",
                            onMouseEnter: ()=>setStatus(true)
                            ,
                            onMouseLeave: ()=>setStatus(false)
                            ,
                            onClick: ()=>setLang(item.languageCode) + setLangImg(item.languageImage) + setStatus(false)
                            ,
                            value: item.id,
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                    src: item.languageImage,
                                    alt: item.languageImage
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    children: item.title
                                })
                            ]
                        }, item.id)
                    )
                })
            ]
        })
    }));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MediaLanguageSelect);


/***/ }),

/***/ 2280:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _store_GlobalState__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4901);
/* harmony import */ var _store_Actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6387);
/* harmony import */ var _utils_fetchData__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(843);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);






const Modal = ()=>{
    const { state , dispatch  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_store_GlobalState__WEBPACK_IMPORTED_MODULE_2__/* .DataContext */ .R);
    const { modal , auth  } = state;
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();
    const deleteUser = (item)=>{
        dispatch((0,_store_Actions__WEBPACK_IMPORTED_MODULE_3__/* .deleteItem */ .wz)(item.data, item.id, item.type));
        (0,_utils_fetchData__WEBPACK_IMPORTED_MODULE_5__/* .deleteData */ .SR)(`user/${item.id}`, auth.token).then((res)=>{
            if (res.err) return dispatch({
                type: 'NOTIFY',
                payload: {
                    error: res.err
                }
            });
            return dispatch({
                type: 'NOTIFY',
                payload: {
                    success: res.msg
                }
            });
        });
    };
    const deleteCategories = (item)=>{
        (0,_utils_fetchData__WEBPACK_IMPORTED_MODULE_5__/* .deleteData */ .SR)(`categories/${item.id}`, auth.token).then((res)=>{
            if (res.err) return dispatch({
                type: 'NOTIFY',
                payload: {
                    error: res.err
                }
            });
            dispatch((0,_store_Actions__WEBPACK_IMPORTED_MODULE_3__/* .deleteItem */ .wz)(item.data, item.id, item.type));
            return dispatch({
                type: 'NOTIFY',
                payload: {
                    success: res.msg
                }
            });
        });
    };
    const deleteProduct = (item)=>{
        dispatch({
            type: 'NOTIFY',
            payload: {
                loading: true
            }
        });
        (0,_utils_fetchData__WEBPACK_IMPORTED_MODULE_5__/* .deleteData */ .SR)(`product/${item.id}`, auth.token).then((res)=>{
            if (res.err) return dispatch({
                type: 'NOTIFY',
                payload: {
                    error: res.err
                }
            });
            dispatch({
                type: 'NOTIFY',
                payload: {
                    success: res.msg
                }
            });
            return router.push('/');
        });
    };
    const handleSubmit = ()=>{
        if (modal.length !== 0) {
            for (const item of modal){
                if (item.type === 'ADD_CART') {
                    dispatch((0,_store_Actions__WEBPACK_IMPORTED_MODULE_3__/* .deleteItem */ .wz)(item.data, item.id, item.type));
                }
                if (item.type === 'ADD_USERS') deleteUser(item);
                if (item.type === 'ADD_CATEGORIES') deleteCategories(item);
                if (item.type === 'DELETE_PRODUCT') deleteProduct(item);
                dispatch({
                    type: 'ADD_MODAL',
                    payload: []
                });
            }
        }
    };
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "modal fade",
        id: "exampleModal",
        tabIndex: "-1",
        role: "dialog",
        "aria-labelledby": "exampleModalLabel",
        "aria-hidden": "true",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "modal-dialog",
            role: "document",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "modal-content",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "modal-header",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                                className: "modal-title text-capitalize",
                                id: "exampleModalLabel",
                                children: modal.length !== 0 && modal[0].title
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                type: "button",
                                className: "close",
                                "data-dismiss": "modal",
                                "aria-label": "Close",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    "aria-hidden": "true",
                                    children: "\xd7"
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "modal-body",
                        children: "Do you want to delete this item?"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "modal-footer",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                type: "button",
                                className: "btn btn-secondary",
                                "data-dismiss": "modal",
                                onClick: handleSubmit,
                                children: "Yes"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                type: "button",
                                className: "btn btn-primary",
                                "data-dismiss": "modal",
                                children: "Cancel"
                            })
                        ]
                    })
                ]
            })
        })
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Modal);


/***/ }),

/***/ 8019:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _store_GlobalState__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4901);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9915);
/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(567);
/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_icons_bs__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_icons_bi__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6652);
/* harmony import */ var react_icons_bi__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_icons_bi__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _Category__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(4436);
/* harmony import */ var _Search__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(8587);
/* harmony import */ var _locales_en__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(7428);
/* harmony import */ var _locales_uz__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(1865);
/* harmony import */ var _LanguageSelect__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(9573);
/* harmony import */ var _MediaLanguageSelect__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(2261);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([js_cookie__WEBPACK_IMPORTED_MODULE_5__]);
js_cookie__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];

/* eslint-disable @next/next/link-passhref */ /* eslint-disable @next/next/no-img-element */ /* eslint-disable jsx-a11y/role-supports-aria-props */ 












function NavBar() {
    var ref;
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    const { state , dispatch  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_store_GlobalState__WEBPACK_IMPORTED_MODULE_4__/* .DataContext */ .R);
    const { auth , cart  } = state;
    const { 0: show , 1: setShow  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: userOpen , 1: setUserOpen  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const email = (ref = auth.user) === null || ref === void 0 ? void 0 : ref.email.match(/^.+(?=@)/)[0];
    const emailCut = (email === null || email === void 0 ? void 0 : email.length) < 10 ? email : (email === null || email === void 0 ? void 0 : email.substr(0, 11 - 1)) + "...";
    const isActive = (r)=>{
        if (r === router.pathname) {
            return " active";
        } else {
            return "";
        }
    };
    const transitionNavbar = ()=>{
        if (window.scrollY > 100) {
            setShow(true);
        } else {
            setShow(false);
        }
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        window.addEventListener("scroll", transitionNavbar);
        return ()=>window.removeEventListener("scroll", transitionNavbar)
        ;
    }, []);
    const handleLogout = ()=>{
        js_cookie__WEBPACK_IMPORTED_MODULE_5__["default"].remove("refreshtoken", {
            path: "api/auth/accessToken"
        });
        localStorage.removeItem("firstLogin");
        dispatch({
            type: "AUTH",
            payload: {
            }
        });
        dispatch({
            type: "NOTIFY",
            payload: {
                success: t.logged_out
            }
        });
        return router.push("/");
    };
    const adminRouter = ()=>{
        return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_2__["default"], {
                    href: "/users",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                        className: "navbar__userlistItem",
                        children: t.users
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_2__["default"], {
                    href: "/create",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                        className: "navbar__userlistItem",
                        children: t.products
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_2__["default"], {
                    href: "/categories",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                        className: "navbar__userlistItem",
                        children: t.categories
                    })
                })
            ]
        }));
    };
    const loggedRouter = ()=>{
        return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            onMouseEnter: ()=>setUserOpen(true)
            ,
            onMouseLeave: ()=>setUserOpen(false)
            ,
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "navbart__userToggle",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                            src: auth.user.avatar,
                            alt: auth.user.avatar,
                            style: {
                                borderRadius: "50%",
                                width: "30px",
                                height: "30px"
                            }
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            className: "navbar__userName",
                            children: emailCut
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: `${userOpen ? "navbar__customList" : "navbar__customList navbar__customList__non"}`,
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_2__["default"], {
                            href: "/profile",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                className: "navbar__userlistItem",
                                children: t.profile
                            })
                        }),
                        auth.user.role === "admin" && adminRouter(),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            className: "navbar__userlistItem",
                            onClick: handleLogout,
                            children: t.logout
                        })
                    ]
                })
            ]
        }));
    };
    const { locale , pathname  } = router;
    const t = locale === "en" ? _locales_en__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z : _locales_uz__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z;
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("nav", {
            className: `${!show ? "navbar" : "navbar navbar__color"} navbar-expand-lg`,
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "navbar__brandContainer",
                    onClick: ()=>router.push({
                            pathname: '/'
                        })
                    ,
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                            className: "navbar__brand",
                            children: "BozorBoB"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "navbar__dot"
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "navbar__filter",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Category__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Search__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "nav__menu",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "navbar__cart",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_2__["default"], {
                                href: "/cart",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                    className: "navbar__cartLink" + isActive("/cart"),
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_bs__WEBPACK_IMPORTED_MODULE_6__.BsCartPlus, {
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("b", {
                                            children: cart.length
                                        })
                                    ]
                                })
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "navbar__nav",
                            children: Object.keys(auth).length === 0 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                className: "nav__listItem",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_2__["default"], {
                                    href: "/signin",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                        className: "nav__link" + isActive("/signin"),
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_bi__WEBPACK_IMPORTED_MODULE_7__.BiLogInCircle, {
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                children: t.Sign__in
                                            })
                                        ]
                                    })
                                })
                            }) : loggedRouter()
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                            href: "tel:+998939427899",
                            className: "nav__phone",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("b", {
                                children: "(93) 942-78-99"
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_LanguageSelect__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_MediaLanguageSelect__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                        })
                    ]
                })
            ]
        })
    }));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NavBar);

});

/***/ }),

/***/ 4232:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components_Notify)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./store/GlobalState.js + 1 modules
var GlobalState = __webpack_require__(4901);
;// CONCATENATED MODULE: ./components/Loading.js

const Loading = ()=>{
    return(/*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "position-fixed w-100 h-100 text-center loading",
        style: {
            background: '#0008',
            color: 'white',
            top: 0,
            left: 0,
            zIndex: 9
        },
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
            width: "205",
            height: "250",
            viewBox: "0 0 40 50",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("polygon", {
                    strokeWidth: "1",
                    stroke: "#fff",
                    fill: "none",
                    points: "20,1 40,40 1,40"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("text", {
                    fill: "#fff",
                    x: "5",
                    y: "47",
                    children: "Loading"
                })
            ]
        })
    }));
};
/* harmony default export */ const components_Loading = (Loading);

;// CONCATENATED MODULE: ./components/Toast.js


const Toast = ({ msg , handleShow , bgColor  })=>{
    const { 0: time , 1: setTime  } = (0,external_react_.useState)(true);
    const title = msg.title;
    (0,external_react_.useEffect)(()=>{
        const timer = setTimeout(()=>{
            setTime(false);
        }, 2000);
        return ()=>clearTimeout(timer)
        ;
    }, []);
    return time && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: `toast show position-fixed text-light ${bgColor}`,
        style: {
            top: "5px",
            right: "5px",
            zIndex: 100,
            minWidth: "280px"
        },
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: `toast-header ${bgColor} text-light`,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("strong", {
                        className: "mr-auto text-light",
                        children: title
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        children: time
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                        type: "button",
                        className: "ml-2 mb-1 close text-light",
                        "data-dismiss": "toast",
                        style: {
                            outline: "none"
                        },
                        onClick: handleShow,
                        children: "x"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "toast-body",
                children: msg.msg
            })
        ]
    });
};
/* harmony default export */ const components_Toast = (Toast);

;// CONCATENATED MODULE: ./components/Notify.js





const Notify = ()=>{
    const { state , dispatch  } = (0,external_react_.useContext)(GlobalState/* DataContext */.R);
    const { notify  } = state;
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            notify.loading && /*#__PURE__*/ jsx_runtime_.jsx(components_Loading, {
            }),
            notify.error && /*#__PURE__*/ jsx_runtime_.jsx(components_Toast, {
                msg: {
                    msg: notify.error,
                    title: "Error"
                },
                handleShow: ()=>dispatch({
                        type: 'NOTIFY',
                        payload: {
                        }
                    })
                ,
                bgColor: "bg-danger"
            }),
            notify.success && /*#__PURE__*/ jsx_runtime_.jsx(components_Toast, {
                msg: {
                    msg: notify.success,
                    title: "Success"
                },
                handleShow: ()=>dispatch({
                        type: 'NOTIFY',
                        payload: {
                        }
                    })
                ,
                bgColor: "bg-success"
            })
        ]
    }));
};
/* harmony default export */ const components_Notify = (Notify);


/***/ }),

/***/ 8587:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2750);
/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_icons_fi__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _store_GlobalState__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4901);
/* harmony import */ var _utils_filterSearch__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7152);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _locales_en__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7428);
/* harmony import */ var _locales_uz__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1865);








const Search = ()=>{
    const { state , dispatch  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_store_GlobalState__WEBPACK_IMPORTED_MODULE_3__/* .DataContext */ .R);
    const { isSearchClick , cart  } = state;
    // console.log("isSearchClick", isSearchClick);
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();
    const { locale  } = router;
    const t = locale === "en" ? _locales_en__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z : _locales_uz__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z;
    const { 0: search , 1: setSearch  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    //   const { state, dispatch } = useContext(DataContext);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (search) {
            (0,_utils_filterSearch__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)({
                router,
                search: search ? search.toLowerCase() : "all"
            });
        }
        if (search !== "") {
            dispatch({
                type: "SEARCHCLICK",
                payload: {
                    isSearchClick: true
                }
            });
        } else {
            dispatch({
                type: "SEARCHCLICK",
                payload: {
                    isSearchClick: false
                }
            });
        }
    }, [
        search
    ]);
    // console.log("search", search);
    const hundleBtn = (e)=>{
        e.preventDefault();
        setSearch("");
    };
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
        autoComplete: "on",
        className: "search__form",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                type: "text",
                list: "title_product",
                placeholder: t.search,
                value: search.toLowerCase(),
                onChange: (e)=>setSearch(e.target.value)
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                onClick: hundleBtn,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_fi__WEBPACK_IMPORTED_MODULE_2__.FiSearch, {
                })
            })
        ]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Search);


/***/ }),

/***/ 8510:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5789);
/* harmony import */ var _store_GlobalState__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4901);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_Layout__WEBPACK_IMPORTED_MODULE_2__]);
_components_Layout__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];

/* eslint-disable react/jsx-no-undef */ 




function MyApp({ Component , pageProps  }) {
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_store_GlobalState__WEBPACK_IMPORTED_MODULE_3__/* .DataProvider */ .F, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
                ...pageProps
            })
        })
    }));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);

});

/***/ }),

/***/ 562:
/***/ ((module) => {

module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 3539:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/detect-domain-locale.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 4365:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 9847:
/***/ ((module) => {

module.exports = require("react-icons/ai");

/***/ }),

/***/ 6652:
/***/ ((module) => {

module.exports = require("react-icons/bi");

/***/ }),

/***/ 567:
/***/ ((module) => {

module.exports = require("react-icons/bs");

/***/ }),

/***/ 6290:
/***/ ((module) => {

module.exports = require("react-icons/fa");

/***/ }),

/***/ 2750:
/***/ ((module) => {

module.exports = require("react-icons/fi");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 9915:
/***/ ((module) => {

module.exports = import("js-cookie");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [7730,1664,4901,8461], () => (__webpack_exec__(8510)));
module.exports = __webpack_exports__;

})();