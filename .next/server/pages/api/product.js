"use strict";
(() => {
var exports = {};
exports.id = 2759;
exports.ids = [2759];
exports.modules = {

/***/ 9344:
/***/ ((module) => {

module.exports = require("jsonwebtoken");

/***/ }),

/***/ 1185:
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ 8458:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_connectDB__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4989);
/* harmony import */ var _models_productModel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5842);
/* harmony import */ var _middleware_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8930);
/* eslint-disable import/no-anonymous-default-export */ 


(0,_utils_connectDB__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res)=>{
    switch(req.method){
        case "GET":
            await getProducts(req, res);
            break;
        case "POST":
            await createProduct(req, res);
            break;
    }
});
class APIfeatures {
    constructor(query, queryString){
        this.query = query;
        this.queryString = queryString;
    }
    filtering() {
        const queryObj = {
            ...this.queryString
        };
        const excludeFields = [
            "page",
            "sort",
            "limit"
        ];
        excludeFields.forEach((el)=>delete queryObj[el]
        );
        if (queryObj.category !== "all") this.query.find({
            category: queryObj.category
        });
        if (queryObj.title !== "all") this.query.find({
            title: {
                $regex: queryObj.title
            }
        });
        this.query.find();
        return this;
    }
    sorting() {
        if (this.queryString.sort) {
            const sortBy = this.queryString.sort.split(",").join("");
            this.query = this.query.sort(sortBy);
        } else {
            this.query = this.query.sort("-createdAt");
        }
        return this;
    }
}
const getProducts = async (req, res)=>{
    try {
        if (process.env.DEMO_MODE === "true") {
            const mockProducts = [
                {
                    _id: "614b14d28d6f5a0016a9a3b1",
                    title: "NextGen Smart Watch",
                    price: 199,
                    description: "Elevate your daily routine with health tracking and seamless connectivity.",
                    category: "electronics",
                    images: [
                        {
                            url: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=800"
                        }
                    ],
                    inStock: 15,
                    sold: 120
                },
                {
                    _id: "614b14d28d6f5a0016a9a3b2",
                    title: "Premium Wireless Audio",
                    price: 249,
                    description: "Studio-quality sound delivered in a sleek, minimalist package.",
                    category: "electronics",
                    images: [
                        {
                            url: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=800"
                        }
                    ],
                    inStock: 8,
                    sold: 45
                },
                {
                    _id: "614b14d28d6f5a0016a9a3b3",
                    title: "Nomad Canvas Backpack",
                    price: 120,
                    description: "Durable design meets urban aesthetics for the modern explorer.",
                    category: "fashion",
                    images: [
                        {
                            url: "https://images.unsplash.com/photo-1547949003-9792a18a2601?auto=format&fit=crop&q=80&w=800"
                        }
                    ],
                    inStock: 25,
                    sold: 67
                },
                {
                    _id: "614b14d28d6f5a0016a9a3b4",
                    title: "Artisan Ceramic Lamp",
                    price: 155,
                    description: "Handcrafted warmth for your contemporary living space.",
                    category: "interior",
                    images: [
                        {
                            url: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&q=80&w=800"
                        }
                    ],
                    inStock: 5,
                    sold: 12
                },
                {
                    _id: "614b14d28d6f5a0016a9a3b5",
                    title: "Mechanical Desk Clock",
                    price: 75,
                    description: "Precision engineering meets vintage-inspired desktop design.",
                    category: "interior",
                    images: [
                        {
                            url: "https://images.unsplash.com/photo-1563861826100-9cb868fdbe1c?auto=format&fit=crop&q=80&w=800"
                        }
                    ],
                    inStock: 12,
                    sold: 89
                },
                {
                    _id: "614b14d28d6f5a0016a9a3b6",
                    title: "Pure Linen Bedding Set",
                    price: 210,
                    description: "Breathable luxury for the ultimate resting experience.",
                    category: "home",
                    images: [
                        {
                            url: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&q=80&w=800"
                        }
                    ],
                    inStock: 10,
                    sold: 34
                },
                {
                    _id: "614b14d28d6f5a0016a9a3b7",
                    title: "Executive Fountain Pen",
                    price: 45,
                    description: "Timeless elegance for your signature moments.",
                    category: "office",
                    images: [
                        {
                            url: "https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?auto=format&fit=crop&q=80&w=800"
                        }
                    ],
                    inStock: 30,
                    sold: 156
                },
                {
                    _id: "614b14d28d6f5a0016a9a3b8",
                    title: "Minimalist Coffee Brewer",
                    price: 135,
                    description: "Extract the perfect flavor with our award-winning pour-over system.",
                    category: "lifestyle",
                    images: [
                        {
                            url: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=800"
                        }
                    ],
                    inStock: 18,
                    sold: 210
                }
            ];
            return res.json({
                status: "success",
                result: mockProducts.length,
                products: mockProducts
            });
        }
        const features = new APIfeatures(_models_productModel__WEBPACK_IMPORTED_MODULE_1__/* ["default"].find */ .Z.find(), req.query).filtering().sorting();
        //   .paginating();
        const products = await features.query;
        res.json({
            status: "success",
            result: products.length,
            products
        });
    } catch (err) {
        return res.status(500).json({
            err: err.message
        });
    }
};
const createProduct = async (req, res)=>{
    try {
        const result = await (0,_middleware_auth__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(req, res);
        if (result.role !== "admin") return res.status(400).json({
            err: "Authentication is not valid."
        });
        const { video , videoModule , book , sale , title , price , description , content , category , images , book_view ,  } = req.body;
        if (!title || !price || !description || !content || category === "all" || images.length === 0) return res.status(400).json({
            err: "Please add all the fields."
        });
        const newProduct = new _models_productModel__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z({
            title: title.toLowerCase(),
            price,
            description,
            content,
            category,
            images,
            video,
            videoModule,
            book,
            sale,
            book_view
        });
        await newProduct.save();
        res.json({
            msg: "Success! Created a new product"
        });
    } catch (err) {
        return res.status(500).json({
            err: err.message
        });
    }
};


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [5266,4592], () => (__webpack_exec__(8458)));
module.exports = __webpack_exports__;

})();