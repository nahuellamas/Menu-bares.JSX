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
exports.id = "pages/api/categorias";
exports.ids = ["pages/api/categorias"];
exports.modules = {

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "(api)/./pages/api/categorias.js":
/*!*********************************!*\
  !*** ./pages/api/categorias.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n// Next.js API route support: https://nextjs.org/docs/api-routes/introduction\n\nlet prisma;\nif (false) {} else {\n    if (!global.prisma) {\n        global.prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();\n    }\n    prisma = global.prisma;\n}\nasync function handler(req, res) {\n    const categorias = await prisma.categoria.findMany({\n        include: {\n            productos: true\n        }\n    });\n    res.status(200).json(categorias);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvY2F0ZWdvcmlhcy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxFQUE2RTtBQUNsQztBQUUzQyxHQUFHLENBQUNDLE1BQU07QUFFVixFQUFFLEVBTEYsS0FLeUMsRUFBRSxFQUUxQyxNQUFNLENBQUM7SUFDTixFQUFFLEdBQUdDLE1BQU0sQ0FBQ0QsTUFBTSxFQUFFLENBQUM7UUFDbkJDLE1BQU0sQ0FBQ0QsTUFBTSxHQUFHLEdBQUcsQ0FBQ0Qsd0RBQVk7SUFDbEMsQ0FBQztJQUVEQyxNQUFNLEdBQUdDLE1BQU0sQ0FBQ0QsTUFBTTtBQUN4QixDQUFDO0FBRWMsZUFBZUUsT0FBTyxDQUFDQyxHQUFHLEVBQUVDLEdBQUcsRUFBRSxDQUFDO0lBQy9DLEtBQUssQ0FBQ0MsVUFBVSxHQUFHLEtBQUssQ0FBQ0wsTUFBTSxDQUFDTSxTQUFTLENBQUNDLFFBQVEsQ0FBQyxDQUFDO1FBQ2xEQyxPQUFPLEVBQUUsQ0FBQztZQUNSQyxTQUFTLEVBQUUsSUFBSTtRQUNqQixDQUFDO0lBQ0gsQ0FBQztJQUNETCxHQUFHLENBQUNNLE1BQU0sQ0FBQyxHQUFHLEVBQUVDLElBQUksQ0FBQ04sVUFBVTtBQUNqQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbWVudS1hcHAvLi9wYWdlcy9hcGkvY2F0ZWdvcmlhcy5qcz9mOGNiIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIE5leHQuanMgQVBJIHJvdXRlIHN1cHBvcnQ6IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL2FwaS1yb3V0ZXMvaW50cm9kdWN0aW9uXG5pbXBvcnQge1ByaXNtYUNsaWVudH0gZnJvbSAnQHByaXNtYS9jbGllbnQnXG5cbmxldCBwcmlzbWFcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcInByb2R1Y3Rpb25cIikge1xuICBwcmlzbWEgPSBuZXcgUHJpc21hQ2xpZW50KClcbn0gZWxzZSB7XG4gIGlmICghZ2xvYmFsLnByaXNtYSkge1xuICAgIGdsb2JhbC5wcmlzbWEgPSBuZXcgUHJpc21hQ2xpZW50KClcbiAgfVxuXG4gIHByaXNtYSA9IGdsb2JhbC5wcmlzbWFcbn1cblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihyZXEsIHJlcykge1xuICBjb25zdCBjYXRlZ29yaWFzID0gYXdhaXQgcHJpc21hLmNhdGVnb3JpYS5maW5kTWFueSh7XG4gICAgaW5jbHVkZToge1xuICAgICAgcHJvZHVjdG9zOiB0cnVlXG4gICAgfSxcbiAgfSlcbiAgcmVzLnN0YXR1cygyMDApLmpzb24oY2F0ZWdvcmlhcylcbn1cbiJdLCJuYW1lcyI6WyJQcmlzbWFDbGllbnQiLCJwcmlzbWEiLCJnbG9iYWwiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwiY2F0ZWdvcmlhcyIsImNhdGVnb3JpYSIsImZpbmRNYW55IiwiaW5jbHVkZSIsInByb2R1Y3RvcyIsInN0YXR1cyIsImpzb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/categorias.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/categorias.js"));
module.exports = __webpack_exports__;

})();