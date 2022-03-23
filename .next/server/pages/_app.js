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
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./context/CafeteriaProvider.jsx":
/*!***************************************!*\
  !*** ./context/CafeteriaProvider.jsx ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"CafeteriaProvider\": () => (/* binding */ CafeteriaProvider),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-toastify */ \"react-toastify\");\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_toastify__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\n\nconst CafeteriaContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();\nconst CafeteriaProvider = ({ children  })=>{\n    const { 0: categorias , 1: setCategorias  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const { 0: categoriaActual , 1: setCategoriaActual  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});\n    const { 0: producto1 , 1: setProducto  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});\n    const { 0: modal , 1: setModal  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const { 0: pedido , 1: setPedido  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const { 0: nombre , 1: setNombre  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');\n    const { 0: total1 , 1: setTotal  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n    const obtenerCategorias = async ()=>{\n        const url = '/api/categorias';\n        const { data  } = await axios__WEBPACK_IMPORTED_MODULE_2___default().get(url);\n        setCategorias(data);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        obtenerCategorias();\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        setCategoriaActual(categorias[0]);\n    }, [\n        categorias\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const nuevoTotal = pedido.reduce((total, producto)=>producto.precio * producto.cantidad + total\n        , 0);\n        setTotal(nuevoTotal);\n    }, [\n        pedido\n    ]);\n    const handlerClickCategoria = async (id)=>{\n        const categoria = categorias.filter((cat)=>cat.id === id\n        );\n        setCategoriaActual(categoria[0]);\n        router.push('/');\n    };\n    const handlerClickProducto = (producto)=>{\n        setProducto(producto);\n    };\n    const handlerClickModal = ()=>{\n        setModal(!modal);\n    };\n    const handlerClickPedido = ({ categoriaId , ...producto })=>{\n        if (pedido.some((productoState)=>productoState.id === producto.id\n        )) {\n            //si existe el producto, actualizamos la cantidad\n            const pedidoActualizado = pedido.map((productoState)=>productoState.id === producto.id ? producto : productoState\n            );\n            setPedido(pedidoActualizado);\n            react_toastify__WEBPACK_IMPORTED_MODULE_3__.toast.info(`Pedido Editado`, {\n                position: \"top-right\",\n                autoClose: 4000,\n                hideProgressBar: false,\n                closeOnClick: true,\n                pauseOnHover: true,\n                draggable: true,\n                progress: undefined\n            });\n        } else {\n            setPedido([\n                ...pedido,\n                producto\n            ]);\n            react_toastify__WEBPACK_IMPORTED_MODULE_3__.toast.success(`Agregado al Pedido`, {\n                position: \"top-right\",\n                autoClose: 4000,\n                hideProgressBar: false,\n                closeOnClick: true,\n                pauseOnHover: true,\n                draggable: true,\n                progress: undefined\n            });\n        }\n        setModal(false);\n    };\n    const handlerEditarCantidades = (id)=>{\n        const productoActualizar = pedido.filter((producto)=>producto.id === id\n        );\n        setProducto(productoActualizar[0]);\n        setModal(!modal);\n    };\n    const handlerEliminarPrducto = (id)=>{\n        const productoEliminar = pedido.filter((producto)=>producto.id !== id\n        );\n        setPedido(productoEliminar);\n        react_toastify__WEBPACK_IMPORTED_MODULE_3__.toast.error(`Producto Eliminado`, {\n            position: \"top-right\",\n            autoClose: 4000,\n            hideProgressBar: false,\n            closeOnClick: true,\n            pauseOnHover: true,\n            draggable: true,\n            progress: undefined\n        });\n    };\n    const colocarOrden = async (e)=>{\n        e.preventDefault();\n        try {\n            await axios__WEBPACK_IMPORTED_MODULE_2___default().post('/api/ordenes', {\n                pedido,\n                nombre,\n                total: total1,\n                fecha: Date.now().toString()\n            });\n            //resetar app\n            setCategoriaActual(categorias[0]);\n            setPedido([]);\n            setNombre('');\n            setTotal(0);\n            react_toastify__WEBPACK_IMPORTED_MODULE_3__.toast.success(`Orden Enviada`, {\n                position: \"top-right\",\n                autoClose: 2000,\n                hideProgressBar: false,\n                closeOnClick: true,\n                pauseOnHover: true,\n                draggable: true,\n                progress: undefined\n            });\n            setTimeout(()=>{\n                //redireccionar\n                router.push('/');\n            }, 2000);\n        } catch (error) {\n            console.log(error);\n        }\n    };\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CafeteriaContext.Provider, {\n        value: {\n            categorias,\n            handlerClickCategoria,\n            categoriaActual,\n            handlerClickProducto,\n            producto: producto1,\n            handlerClickModal,\n            modal,\n            pedido,\n            handlerClickPedido,\n            handlerEditarCantidades,\n            handlerEliminarPrducto,\n            nombre,\n            setNombre,\n            colocarOrden,\n            total: total1\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Maikol\\\\Desktop\\\\menu-nextjs\\\\menu-app\\\\context\\\\CafeteriaProvider.jsx\",\n        lineNumber: 133,\n        columnNumber: 9\n    }, undefined));\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CafeteriaContext);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QixDQUFDO1lBRURlLFVBQVUsS0FBTyxDQUFDO2dCQUNkLEVBQWU7Z0JBQ2Y5QyxNQUFNLENBQUNjLElBQUksQ0FBQyxDQUFHO1lBQ25CLENBQUMsRUFBRSxJQUFJO1FBQ1gsQ0FBQyxDQUFDLEtBQUssRUFBRXVCLEtBQUssRUFBRSxDQUFDO1lBQ2JVLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDWCxLQUFLO1FBQ3JCLENBQUM7SUFDTCxDQUFDO0lBR0QsTUFBTSw2RUFDRHRELGdCQUFnQixDQUFDa0UsUUFBUTtRQUFDQyxLQUFLLEVBQUUsQ0FBQztZQUMvQmhFLFVBQVU7WUFDVnVCLHFCQUFxQjtZQUNyQnJCLGVBQWU7WUFDZjJCLG9CQUFvQjtZQUNwQnpCLFFBQVEsRUFBUkEsU0FBUTtZQUNSMEIsaUJBQWlCO1lBQ2pCeEIsS0FBSztZQUNMRSxNQUFNO1lBQ051QixrQkFBa0I7WUFDbEJnQix1QkFBdUI7WUFDdkJFLHNCQUFzQjtZQUN0QnZDLE1BQU07WUFDTkMsU0FBUztZQUNUeUMsWUFBWTtZQUNaeEMsS0FBSyxFQUFMQSxNQUFLO1FBQ1QsQ0FBQztrQkFDSWIsUUFBUTs7Ozs7O0FBR3JCLENBQUM7QUFHb0I7QUFFckIsaUVBQWVGLGdCQUFnQiIsInNvdXJjZXMiOlsid2VicGFjazovL21lbnUtYXBwLy4vY29udGV4dC9DYWZldGVyaWFQcm92aWRlci5qc3g/Zjc1NCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3VzZVN0YXRlLCB1c2VFZmZlY3QsIGNyZWF0ZUNvbnRleHR9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEF4aW9zIGZyb20gJ2F4aW9zJ1xuaW1wb3J0IHsgdG9hc3QgIH0gZnJvbSAncmVhY3QtdG9hc3RpZnknXG5pbXBvcnQge3VzZVJvdXRlcn0gZnJvbSAnbmV4dC9yb3V0ZXInXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXG5jb25zdCBDYWZldGVyaWFDb250ZXh0ID0gY3JlYXRlQ29udGV4dCgpXG5cbmNvbnN0IENhZmV0ZXJpYVByb3ZpZGVyID0gKHtjaGlsZHJlbn0pID0+IHtcbiAgICBjb25zdCBbY2F0ZWdvcmlhcywgc2V0Q2F0ZWdvcmlhc10gPSB1c2VTdGF0ZShbXSlcbiAgICBjb25zdCBbY2F0ZWdvcmlhQWN0dWFsLCBzZXRDYXRlZ29yaWFBY3R1YWxdID0gdXNlU3RhdGUoe30pXG4gICAgY29uc3QgW3Byb2R1Y3RvLCBzZXRQcm9kdWN0b10gPSB1c2VTdGF0ZSh7fSlcbiAgICBjb25zdCBbbW9kYWwsIHNldE1vZGFsXSA9IHVzZVN0YXRlKGZhbHNlKVxuICAgIGNvbnN0IFtwZWRpZG8sIHNldFBlZGlkb10gPSB1c2VTdGF0ZShbXSlcbiAgICBjb25zdCBbbm9tYnJlLCBzZXROb21icmUgXSA9IHVzZVN0YXRlKCcnKVxuICAgIGNvbnN0IFt0b3RhbCwgc2V0VG90YWxdID0gdXNlU3RhdGUoJycpXG5cbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxuXG4gICAgY29uc3Qgb2J0ZW5lckNhdGVnb3JpYXMgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHVybCA9ICcvYXBpL2NhdGVnb3JpYXMnXG4gICAgICAgIGNvbnN0IHtkYXRhfSA9IGF3YWl0IEF4aW9zLmdldCh1cmwpXG4gICAgICAgIHNldENhdGVnb3JpYXMoZGF0YSlcbiAgICB9XG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgb2J0ZW5lckNhdGVnb3JpYXMoKVxuICAgIH0sIFtdKVxuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgc2V0Q2F0ZWdvcmlhQWN0dWFsKGNhdGVnb3JpYXNbMF0pXG4gICAgfSwgW2NhdGVnb3JpYXNdKVxuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgY29uc3QgbnVldm9Ub3RhbCA9IHBlZGlkby5yZWR1Y2UoKHRvdGFsLCBwcm9kdWN0bykgPT4gKHByb2R1Y3RvLnByZWNpbyAqIHByb2R1Y3RvLmNhbnRpZGFkKSArIHRvdGFsLCAwKVxuICAgICAgICBzZXRUb3RhbChudWV2b1RvdGFsKVxuICAgIH0sIFtwZWRpZG9dKVxuXG4gICAgY29uc3QgaGFuZGxlckNsaWNrQ2F0ZWdvcmlhID0gYXN5bmMgKGlkKSA9PiB7XG4gICAgICAgIGNvbnN0IGNhdGVnb3JpYSA9IGNhdGVnb3JpYXMuZmlsdGVyKGNhdCA9PiBjYXQuaWQgPT09IGlkKVxuICAgICAgICBzZXRDYXRlZ29yaWFBY3R1YWwoY2F0ZWdvcmlhWzBdKVxuICAgICAgICByb3V0ZXIucHVzaCgnLycpXG4gICAgfVxuXG4gICAgY29uc3QgaGFuZGxlckNsaWNrUHJvZHVjdG8gPSAocHJvZHVjdG8pID0+IHtcbiAgICAgICAgc2V0UHJvZHVjdG8ocHJvZHVjdG8pXG4gICAgfVxuXG4gICAgY29uc3QgaGFuZGxlckNsaWNrTW9kYWwgPSAoKSA9PiB7XG4gICAgICAgIHNldE1vZGFsKCFtb2RhbClcbiAgICB9XG5cbiAgICBjb25zdCBoYW5kbGVyQ2xpY2tQZWRpZG8gPSAoe2NhdGVnb3JpYUlkLCAuLi5wcm9kdWN0b30pID0+IHsgLy9zYWNhbW9zIGxhIGNhdGVnb3JpYUlkIHkgbGEgaW1hZ2VuIHBhcmEgbm8gZW52aWFybGEgYWwgc2Vydmlkb3IgXG4gICAgICAgIGlmKHBlZGlkby5zb21lKHByb2R1Y3RvU3RhdGUgPT4gcHJvZHVjdG9TdGF0ZS5pZCA9PT0gcHJvZHVjdG8uaWQpKXsgLy9pdGVyYSBlbiBsb3MgYXJyYXkgeSBzZSBmaWphIHNpIGV4aXN0ZSBlbCBJRCBkZWwgcHJvZHVjdG9cbiAgICAgICAgICAgIC8vc2kgZXhpc3RlIGVsIHByb2R1Y3RvLCBhY3R1YWxpemFtb3MgbGEgY2FudGlkYWRcbiAgICAgICAgICAgIGNvbnN0IHBlZGlkb0FjdHVhbGl6YWRvID0gcGVkaWRvLm1hcChwcm9kdWN0b1N0YXRlID0+IHByb2R1Y3RvU3RhdGUuaWQgPT09IHByb2R1Y3RvLmlkID8gcHJvZHVjdG8gOiBwcm9kdWN0b1N0YXRlKVxuICAgICAgICAgICAgc2V0UGVkaWRvKHBlZGlkb0FjdHVhbGl6YWRvKVxuICAgICAgICAgICAgdG9hc3QuaW5mbyhgUGVkaWRvIEVkaXRhZG9gLCB7XG4gICAgICAgICAgICBwb3NpdGlvbjogXCJ0b3AtcmlnaHRcIixcbiAgICAgICAgICAgIGF1dG9DbG9zZTogNDAwMCxcbiAgICAgICAgICAgIGhpZGVQcm9ncmVzc0JhcjogZmFsc2UsXG4gICAgICAgICAgICBjbG9zZU9uQ2xpY2s6IHRydWUsXG4gICAgICAgICAgICBwYXVzZU9uSG92ZXI6IHRydWUsXG4gICAgICAgICAgICBkcmFnZ2FibGU6IHRydWUsXG4gICAgICAgICAgICBwcm9ncmVzczogdW5kZWZpbmVkLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBzZXRQZWRpZG8oWy4uLnBlZGlkbywgcHJvZHVjdG9dKVxuICAgICAgICAgICAgdG9hc3Quc3VjY2VzcyhgQWdyZWdhZG8gYWwgUGVkaWRvYCwge1xuICAgICAgICAgICAgcG9zaXRpb246IFwidG9wLXJpZ2h0XCIsXG4gICAgICAgICAgICBhdXRvQ2xvc2U6IDQwMDAsXG4gICAgICAgICAgICBoaWRlUHJvZ3Jlc3NCYXI6IGZhbHNlLFxuICAgICAgICAgICAgY2xvc2VPbkNsaWNrOiB0cnVlLFxuICAgICAgICAgICAgcGF1c2VPbkhvdmVyOiB0cnVlLFxuICAgICAgICAgICAgZHJhZ2dhYmxlOiB0cnVlLFxuICAgICAgICAgICAgcHJvZ3Jlc3M6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHNldE1vZGFsKGZhbHNlKVxuICAgIH1cblxuICAgIGNvbnN0IGhhbmRsZXJFZGl0YXJDYW50aWRhZGVzID0gKGlkKSA9PiB7XG4gICAgICAgIGNvbnN0IHByb2R1Y3RvQWN0dWFsaXphciA9IHBlZGlkby5maWx0ZXIocHJvZHVjdG8gPT4gcHJvZHVjdG8uaWQgPT09IGlkKVxuICAgICAgICBzZXRQcm9kdWN0byhwcm9kdWN0b0FjdHVhbGl6YXJbMF0pXG4gICAgICAgIHNldE1vZGFsKCFtb2RhbClcbiAgICB9XG5cbiAgICBjb25zdCBoYW5kbGVyRWxpbWluYXJQcmR1Y3RvID0gKGlkKSA9PiB7XG4gICAgICAgIGNvbnN0IHByb2R1Y3RvRWxpbWluYXIgPSBwZWRpZG8uZmlsdGVyKHByb2R1Y3RvID0+IHByb2R1Y3RvLmlkICE9PSBpZClcbiAgICAgICAgc2V0UGVkaWRvKHByb2R1Y3RvRWxpbWluYXIpXG4gICAgICAgIHRvYXN0LmVycm9yKGBQcm9kdWN0byBFbGltaW5hZG9gLCB7XG4gICAgICAgICAgICBwb3NpdGlvbjogXCJ0b3AtcmlnaHRcIixcbiAgICAgICAgICAgIGF1dG9DbG9zZTogNDAwMCxcbiAgICAgICAgICAgIGhpZGVQcm9ncmVzc0JhcjogZmFsc2UsXG4gICAgICAgICAgICBjbG9zZU9uQ2xpY2s6IHRydWUsXG4gICAgICAgICAgICBwYXVzZU9uSG92ZXI6IHRydWUsXG4gICAgICAgICAgICBkcmFnZ2FibGU6IHRydWUsXG4gICAgICAgICAgICBwcm9ncmVzczogdW5kZWZpbmVkLFxuICAgICAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgY29uc3QgY29sb2Nhck9yZGVuID0gYXN5bmMgKGUpID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgYXdhaXQgYXhpb3MucG9zdCgnL2FwaS9vcmRlbmVzJywge3BlZGlkbywgbm9tYnJlLCB0b3RhbCwgZmVjaGE6IERhdGUubm93KCkudG9TdHJpbmcoKSB9KVxuXG4gICAgICAgICAgICAvL3Jlc2V0YXIgYXBwXG4gICAgICAgICAgICBzZXRDYXRlZ29yaWFBY3R1YWwoY2F0ZWdvcmlhc1swXSlcbiAgICAgICAgICAgIHNldFBlZGlkbyhbXSlcbiAgICAgICAgICAgIHNldE5vbWJyZSgnJylcbiAgICAgICAgICAgIHNldFRvdGFsKDApXG5cbiAgICAgICAgICAgIHRvYXN0LnN1Y2Nlc3MoYE9yZGVuIEVudmlhZGFgLCB7XG4gICAgICAgICAgICBwb3NpdGlvbjogXCJ0b3AtcmlnaHRcIixcbiAgICAgICAgICAgIGF1dG9DbG9zZTogMjAwMCxcbiAgICAgICAgICAgIGhpZGVQcm9ncmVzc0JhcjogZmFsc2UsXG4gICAgICAgICAgICBjbG9zZU9uQ2xpY2s6IHRydWUsXG4gICAgICAgICAgICBwYXVzZU9uSG92ZXI6IHRydWUsXG4gICAgICAgICAgICBkcmFnZ2FibGU6IHRydWUsXG4gICAgICAgICAgICBwcm9ncmVzczogdW5kZWZpbmVkLFxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIC8vcmVkaXJlY2Npb25hclxuICAgICAgICAgICAgICAgIHJvdXRlci5wdXNoKCcvJylcbiAgICAgICAgICAgIH0sIDIwMDApO1xuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXG4gICAgICAgIH1cbiAgICB9XG5cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxDYWZldGVyaWFDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt7XG4gICAgICAgICAgICBjYXRlZ29yaWFzLFxuICAgICAgICAgICAgaGFuZGxlckNsaWNrQ2F0ZWdvcmlhLFxuICAgICAgICAgICAgY2F0ZWdvcmlhQWN0dWFsLFxuICAgICAgICAgICAgaGFuZGxlckNsaWNrUHJvZHVjdG8sXG4gICAgICAgICAgICBwcm9kdWN0byxcbiAgICAgICAgICAgIGhhbmRsZXJDbGlja01vZGFsLFxuICAgICAgICAgICAgbW9kYWwsXG4gICAgICAgICAgICBwZWRpZG8sXG4gICAgICAgICAgICBoYW5kbGVyQ2xpY2tQZWRpZG8sXG4gICAgICAgICAgICBoYW5kbGVyRWRpdGFyQ2FudGlkYWRlcyxcbiAgICAgICAgICAgIGhhbmRsZXJFbGltaW5hclByZHVjdG8sXG4gICAgICAgICAgICBub21icmUsXG4gICAgICAgICAgICBzZXROb21icmUsXG4gICAgICAgICAgICBjb2xvY2FyT3JkZW4sXG4gICAgICAgICAgICB0b3RhbFxuICAgICAgICB9fT5cbiAgICAgICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgPC9DYWZldGVyaWFDb250ZXh0LlByb3ZpZGVyPlxuICAgIClcbn1cblxuZXhwb3J0IHtcbiAgICBDYWZldGVyaWFQcm92aWRlcixcbn1cbmV4cG9ydCBkZWZhdWx0IENhZmV0ZXJpYUNvbnRleHQiXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJjcmVhdGVDb250ZXh0IiwiQXhpb3MiLCJ0b2FzdCIsInVzZVJvdXRlciIsImF4aW9zIiwiQ2FmZXRlcmlhQ29udGV4dCIsIkNhZmV0ZXJpYVByb3ZpZGVyIiwiY2hpbGRyZW4iLCJjYXRlZ29yaWFzIiwic2V0Q2F0ZWdvcmlhcyIsImNhdGVnb3JpYUFjdHVhbCIsInNldENhdGVnb3JpYUFjdHVhbCIsInByb2R1Y3RvIiwic2V0UHJvZHVjdG8iLCJtb2RhbCIsInNldE1vZGFsIiwicGVkaWRvIiwic2V0UGVkaWRvIiwibm9tYnJlIiwic2V0Tm9tYnJlIiwidG90YWwiLCJzZXRUb3RhbCIsInJvdXRlciIsIm9idGVuZXJDYXRlZ29yaWFzIiwidXJsIiwiZGF0YSIsImdldCIsIm51ZXZvVG90YWwiLCJyZWR1Y2UiLCJwcmVjaW8iLCJjYW50aWRhZCIsImhhbmRsZXJDbGlja0NhdGVnb3JpYSIsImlkIiwiY2F0ZWdvcmlhIiwiZmlsdGVyIiwiY2F0IiwicHVzaCIsImhhbmRsZXJDbGlja1Byb2R1Y3RvIiwiaGFuZGxlckNsaWNrTW9kYWwiLCJoYW5kbGVyQ2xpY2tQZWRpZG8iLCJjYXRlZ29yaWFJZCIsInNvbWUiLCJwcm9kdWN0b1N0YXRlIiwicGVkaWRvQWN0dWFsaXphZG8iLCJtYXAiLCJpbmZvIiwicG9zaXRpb24iLCJhdXRvQ2xvc2UiLCJoaWRlUHJvZ3Jlc3NCYXIiLCJjbG9zZU9uQ2xpY2siLCJwYXVzZU9uSG92ZXIiLCJkcmFnZ2FibGUiLCJwcm9ncmVzcyIsInVuZGVmaW5lZCIsInN1Y2Nlc3MiLCJoYW5kbGVyRWRpdGFyQ2FudGlkYWRlcyIsInByb2R1Y3RvQWN0dWFsaXphciIsImhhbmRsZXJFbGltaW5hclByZHVjdG8iLCJwcm9kdWN0b0VsaW1pbmFyIiwiZXJyb3IiLCJjb2xvY2FyT3JkZW4iLCJlIiwicHJldmVudERlZmF1bHQiLCJwb3N0IiwiZmVjaGEiLCJEYXRlIiwibm93IiwidG9TdHJpbmciLCJzZXRUaW1lb3V0IiwiY29uc29sZSIsImxvZyIsIlByb3ZpZGVyIiwidmFsdWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./context/CafeteriaProvider.jsx\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _context_CafeteriaProvider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context/CafeteriaProvider */ \"./context/CafeteriaProvider.jsx\");\n\n\n\nfunction MyApp({ Component , pageProps  }) {\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_context_CafeteriaProvider__WEBPACK_IMPORTED_MODULE_2__.CafeteriaProvider, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n            ...pageProps\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Maikol\\\\Desktop\\\\menu-nextjs\\\\menu-app\\\\pages\\\\_app.js\",\n            lineNumber: 6,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Maikol\\\\Desktop\\\\menu-nextjs\\\\menu-app\\\\pages\\\\_app.js\",\n        lineNumber: 5,\n        columnNumber: 5\n    }, this));\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBOEI7QUFDZ0M7U0FDckRDLEtBQUssQ0FBQyxDQUFDLENBQUNDLFNBQVMsR0FBRUMsU0FBUyxFQUFDLENBQUMsRUFBRSxDQUFDO0lBQ3hDLE1BQU0sNkVBQ0hILHlFQUFpQjs4RkFDZkUsU0FBUztlQUFLQyxTQUFTOzs7Ozs7Ozs7OztBQUc5QixDQUFDO0FBRUQsaUVBQWVGLEtBQUsiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tZW51LWFwcC8uL3BhZ2VzL19hcHAuanM/ZTBhZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJy4uL3N0eWxlcy9nbG9iYWxzLmNzcydcbmltcG9ydCB7Q2FmZXRlcmlhUHJvdmlkZXJ9IGZyb20gJy4uL2NvbnRleHQvQ2FmZXRlcmlhUHJvdmlkZXInXG5mdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcbiAgcmV0dXJuIChcbiAgICA8Q2FmZXRlcmlhUHJvdmlkZXI+XG4gICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgPC9DYWZldGVyaWFQcm92aWRlcj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBNeUFwcFxuIl0sIm5hbWVzIjpbIkNhZmV0ZXJpYVByb3ZpZGVyIiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("axios");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-toastify":
/*!*********************************!*\
  !*** external "react-toastify" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-toastify");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();