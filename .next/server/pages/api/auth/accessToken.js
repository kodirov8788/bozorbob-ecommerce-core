"use strict";
(() => {
var exports = {};
exports.id = 9210;
exports.ids = [9210];
exports.modules = {

/***/ 9344:
/***/ ((module) => {

module.exports = require("jsonwebtoken");

/***/ }),

/***/ 1185:
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ 857:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_connectDB__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4989);
/* harmony import */ var _models_userModel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8267);
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9344);
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_generateToken__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9455);
/* eslint-disable import/no-anonymous-default-export */ 



(0,_utils_connectDB__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res)=>{
    try {
        const rf_token = req.cookies.refreshtoken;
        if (!rf_token) return res.status(400).json({
            err: "Please login now!"
        });
        const result = jsonwebtoken__WEBPACK_IMPORTED_MODULE_2___default().verify(rf_token, process.env.REFRESH_TOKEN_SECRET);
        if (!result) return res.status(400).json({
            err: "Your token is incorrect or has expired."
        });
        const user = await _models_userModel__WEBPACK_IMPORTED_MODULE_1__/* ["default"].findById */ .Z.findById(result.id);
        if (!user) return res.status(400).json({
            err: "User does not exist."
        });
        const access_token = (0,_utils_generateToken__WEBPACK_IMPORTED_MODULE_3__/* .createAccessToken */ ._)({
            id: user._id
        });
        res.json({
            access_token,
            user: {
                name: user.name,
                email: user.email,
                role: user.role,
                avatar: user.avatar,
                root: user.root,
                boxes: user.boxes
            }
        });
    } catch (err) {
        return res.status(500).json({
            err: err.message
        });
    }
});


/***/ }),

/***/ 9455:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_": () => (/* binding */ createAccessToken),
/* harmony export */   "n": () => (/* binding */ createRefreshToken)
/* harmony export */ });
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9344);
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__);

const createAccessToken = (payload)=>{
    return jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default().sign(payload, process.env.ACCESS_TOKEN_SECRET, {
        expiresIn: "24h"
    });
};
const createRefreshToken = (payload)=>{
    return jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default().sign(payload, process.env.REFRESH_TOKEN_SECRET, {
        expiresIn: "7d"
    });
};


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [5266], () => (__webpack_exec__(857)));
module.exports = __webpack_exports__;

})();