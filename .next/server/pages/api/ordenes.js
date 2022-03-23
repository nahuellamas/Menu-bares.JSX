"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/ordenes";
exports.ids = ["pages/api/ordenes"];
exports.modules = {

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "(api)/./pages/api/ordenes.jsx":
/*!*******************************!*\
  !*** ./pages/api/ordenes.jsx ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\nasync function handler(req, res) {\n    let prisma;\n    if (false) {} else {\n        if (!global.prisma) {\n            global.prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();\n        }\n        prisma = global.prisma;\n    }\n    if (req.method === 'POST') {\n        const orden = await prisma.orden.create({\n            data: {\n                nombre: req.body.nombre,\n                total: req.body.total,\n                pedido: req.body.pedido,\n                fecha: req.body.fecha\n            }\n        });\n        res.json(orden);\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvb3JkZW5lcy5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQTJDO0FBQzVCLGVBQWVDLE9BQU8sQ0FBQ0MsR0FBRyxFQUFFQyxHQUFHLEVBQUUsQ0FBQztJQUM3QyxHQUFHLENBQUNDLE1BQU07SUFFVixFQUFFLEVBSk4sS0FJNkMsRUFBRSxFQUUxQyxNQUFNLENBQUM7UUFDUixFQUFFLEdBQUdDLE1BQU0sQ0FBQ0QsTUFBTSxFQUFFLENBQUM7WUFDakJDLE1BQU0sQ0FBQ0QsTUFBTSxHQUFHLEdBQUcsQ0FBQ0osd0RBQVk7UUFDcEMsQ0FBQztRQUVESSxNQUFNLEdBQUdDLE1BQU0sQ0FBQ0QsTUFBTTtJQUN0QixDQUFDO0lBR0QsRUFBRSxFQUFDRixHQUFHLENBQUNJLE1BQU0sS0FBSyxDQUFNLE9BQUUsQ0FBQztRQUN2QixLQUFLLENBQUNDLEtBQUssR0FBRyxLQUFLLENBQUNILE1BQU0sQ0FBQ0csS0FBSyxDQUFDQyxNQUFNLENBQUMsQ0FBQztZQUNyQ0MsSUFBSSxFQUFFLENBQUM7Z0JBQ0hDLE1BQU0sRUFBRVIsR0FBRyxDQUFDUyxJQUFJLENBQUNELE1BQU07Z0JBQ3ZCRSxLQUFLLEVBQUVWLEdBQUcsQ0FBQ1MsSUFBSSxDQUFDQyxLQUFLO2dCQUNyQkMsTUFBTSxFQUFFWCxHQUFHLENBQUNTLElBQUksQ0FBQ0UsTUFBTTtnQkFDdkJDLEtBQUssRUFBRVosR0FBRyxDQUFDUyxJQUFJLENBQUNHLEtBQUs7WUFDekIsQ0FBQztRQUNMLENBQUM7UUFDRFgsR0FBRyxDQUFDWSxJQUFJLENBQUNSLEtBQUs7SUFDbEIsQ0FBQztBQUNMLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tZW51LWFwcC8uL3BhZ2VzL2FwaS9vcmRlbmVzLmpzeD82NDM2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7UHJpc21hQ2xpZW50fSBmcm9tICdAcHJpc21hL2NsaWVudCc7XHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIocmVxLCByZXMpIHtcclxuICAgIGxldCBwcmlzbWFcclxuXHJcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwicHJvZHVjdGlvblwiKSB7XHJcbiAgICBwcmlzbWEgPSBuZXcgUHJpc21hQ2xpZW50KClcclxuICAgIH0gZWxzZSB7XHJcbiAgICBpZiAoIWdsb2JhbC5wcmlzbWEpIHtcclxuICAgICAgICBnbG9iYWwucHJpc21hID0gbmV3IFByaXNtYUNsaWVudCgpXHJcbiAgICB9XHJcblxyXG4gICAgcHJpc21hID0gZ2xvYmFsLnByaXNtYVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBpZihyZXEubWV0aG9kID09PSAnUE9TVCcpIHtcclxuICAgICAgICBjb25zdCBvcmRlbiA9IGF3YWl0IHByaXNtYS5vcmRlbi5jcmVhdGUoe1xyXG4gICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICBub21icmU6IHJlcS5ib2R5Lm5vbWJyZSxcclxuICAgICAgICAgICAgICAgIHRvdGFsOiByZXEuYm9keS50b3RhbCxcclxuICAgICAgICAgICAgICAgIHBlZGlkbzogcmVxLmJvZHkucGVkaWRvLFxyXG4gICAgICAgICAgICAgICAgZmVjaGE6IHJlcS5ib2R5LmZlY2hhXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICByZXMuanNvbihvcmRlbilcclxuICAgIH1cclxufSJdLCJuYW1lcyI6WyJQcmlzbWFDbGllbnQiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwicHJpc21hIiwiZ2xvYmFsIiwibWV0aG9kIiwib3JkZW4iLCJjcmVhdGUiLCJkYXRhIiwibm9tYnJlIiwiYm9keSIsInRvdGFsIiwicGVkaWRvIiwiZmVjaGEiLCJqc29uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/ordenes.jsx\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/ordenes.jsx"));
module.exports = __webpack_exports__;

})();