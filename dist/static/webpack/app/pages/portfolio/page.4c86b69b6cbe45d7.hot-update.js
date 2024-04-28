"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/pages/portfolio/page",{

/***/ "(app-pages-browser)/./src/app/components/Nav/Nav.tsx":
/*!****************************************!*\
  !*** ./src/app/components/Nav/Nav.tsx ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Nav_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Nav.css */ \"(app-pages-browser)/./src/app/components/Nav/Nav.css\");\n/* harmony import */ var _constants_Constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../constants/Constants */ \"(app-pages-browser)/./src/app/constants/Constants.ts\");\n/* harmony import */ var _assets_Property_1_Frame_1_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../assets/Property 1=Frame 1.svg */ \"(app-pages-browser)/./src/app/assets/Property 1=Frame 1.svg\");\n/* harmony import */ var _assets_Property_1_Frame_2_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../assets/Property 1=Frame 2.svg */ \"(app-pages-browser)/./src/app/assets/Property 1=Frame 2.svg\");\n/* harmony import */ var _assets_Property_1_Frame_7_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../assets/Property 1=Frame 7.svg */ \"(app-pages-browser)/./src/app/assets/Property 1=Frame 7.svg\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nconst Nav = (param)=>{\n    let { services, clientPage, contactsPage } = param;\n    _s();\n    const [mouseEnter, setMouseEnter] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const scrollToBlock = ()=>{\n        if (services || clientPage || contactsPage === true) {\n            return;\n        } else {\n            const block = document.getElementById(\"services\");\n            block.scrollIntoView({\n                behavior: \"smooth\"\n            });\n        }\n    };\n    const handleMouseEnter = ()=>{\n        setMouseEnter(true);\n    };\n    const handleMouseLeave = ()=>{\n        setMouseEnter(false);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n        className: \"nav__list\",\n        children: _constants_Constants__WEBPACK_IMPORTED_MODULE_3__.nav_array.map((item, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                    className: \"nav__link\",\n                    href: services === true ? item.href : services || clientPage === true && index === 2 ? \"/\" : contactsPage === true && index === 2 ? \"/\" : item.href,\n                    style: services === true ? {\n                        color: \"black\"\n                    } : {\n                        color: \"white\"\n                    },\n                    onClick: item.id === 2 ? scrollToBlock : undefined,\n                    children: item.id === 4 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                        src: mouseEnter && services ? _assets_Property_1_Frame_7_svg__WEBPACK_IMPORTED_MODULE_6__[\"default\"] : mouseEnter ? _assets_Property_1_Frame_2_svg__WEBPACK_IMPORTED_MODULE_5__[\"default\"] : _assets_Property_1_Frame_1_svg__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n                        alt: \"\",\n                        style: {\n                            marginTop: \"-23px\"\n                        },\n                        onMouseEnter: handleMouseEnter,\n                        onMouseLeave: handleMouseLeave\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Author_new\\\\my-app\\\\src\\\\app\\\\components\\\\Nav\\\\Nav.tsx\",\n                        lineNumber: 40,\n                        columnNumber: 33\n                    }, undefined) : item.value\n                }, void 0, false, {\n                    fileName: \"D:\\\\Author_new\\\\my-app\\\\src\\\\app\\\\components\\\\Nav\\\\Nav.tsx\",\n                    lineNumber: 34,\n                    columnNumber: 25\n                }, undefined)\n            }, item.id, false, {\n                fileName: \"D:\\\\Author_new\\\\my-app\\\\src\\\\app\\\\components\\\\Nav\\\\Nav.tsx\",\n                lineNumber: 33,\n                columnNumber: 21\n            }, undefined))\n    }, void 0, false, {\n        fileName: \"D:\\\\Author_new\\\\my-app\\\\src\\\\app\\\\components\\\\Nav\\\\Nav.tsx\",\n        lineNumber: 31,\n        columnNumber: 9\n    }, undefined);\n};\n_s(Nav, \"uJJrXxujjqr1Nutttnr0gqgkYV4=\");\n_c = Nav;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Nav);\n{}var _c;\n$RefreshReg$(_c, \"Nav\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9OYXYvTmF2LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFDc0M7QUFDcEI7QUFDa0M7QUFDRTtBQUNRO0FBQ007QUFDckM7QUFHL0IsTUFBTU8sTUFBTTtRQUFDLEVBQUNDLFFBQVEsRUFBRUMsVUFBVSxFQUFFQyxZQUFZLEVBQU07O0lBQ2xELE1BQU0sQ0FBQ0MsWUFBWUMsY0FBYyxHQUFHWCwrQ0FBUUEsQ0FBQztJQUU3QyxNQUFNWSxnQkFBZ0I7UUFDbEIsSUFBSUwsWUFBWUMsY0FBY0MsaUJBQWlCLE1BQU07WUFDakQ7UUFDSixPQUFPO1lBQ0gsTUFBTUksUUFBYUMsU0FBU0MsY0FBYyxDQUFDO1lBQzNDRixNQUFNRyxjQUFjLENBQUM7Z0JBQUNDLFVBQVU7WUFBUTtRQUM1QztJQUNKO0lBQ0EsTUFBTUMsbUJBQW1CO1FBQ3JCUCxjQUFjO0lBQ2xCO0lBRUEsTUFBTVEsbUJBQW1CO1FBQ3JCUixjQUFjO0lBQ2xCO0lBRUEscUJBQ0ksOERBQUNTO1FBQUdDLFdBQVU7a0JBQ1RwQiwyREFBU0EsQ0FBQ3FCLEdBQUcsQ0FBQyxDQUFDQyxNQUFNQyxzQkFDZCw4REFBQ0M7MEJBQ0csNEVBQUNDO29CQUFFTCxXQUFXO29CQUNYTSxNQUFNcEIsYUFBYSxPQUFPZ0IsS0FBS0ksSUFBSSxHQUFHcEIsWUFBWUMsZUFBZSxRQUFRZ0IsVUFBVSxJQUFJLE1BQU9mLGlCQUFpQixRQUFRZSxVQUFVLElBQUksTUFBTUQsS0FBS0ksSUFBSTtvQkFDcEpDLE9BQU9yQixhQUFhLE9BQU87d0JBQUNzQixPQUFPO29CQUFPLElBQUk7d0JBQUNBLE9BQU87b0JBQU87b0JBQzdEQyxTQUFTUCxLQUFLUSxFQUFFLEtBQUssSUFBSW5CLGdCQUFnQm9COzhCQUV2Q1QsS0FBS1EsRUFBRSxLQUFLLGtCQUNULDhEQUFDMUIsa0RBQUtBO3dCQUNGNEIsS0FBS3ZCLGNBQWNILFdBQVdILHNFQUFrQkEsR0FBR00sYUFBYVAsc0VBQVlBLEdBQUdELHNFQUFJQTt3QkFDbkZnQyxLQUFLO3dCQUFJTixPQUFPOzRCQUFDTyxXQUFXO3dCQUFPO3dCQUNuQ0MsY0FBY2xCO3dCQUFrQm1CLGNBQWNsQjs7Ozs7b0NBQXNCSSxLQUFLZSxLQUFLOzs7Ozs7ZUFWckZmLEtBQUtRLEVBQUU7Ozs7Ozs7Ozs7QUFpQnBDO0dBdkNNekI7S0FBQUE7QUF5Q04sK0RBQWVBLEdBQUdBLEVBQUM7QUFHbkIsQ0FHQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL2NvbXBvbmVudHMvTmF2L05hdi50c3g/Njk2ZCJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCdcclxuaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGV9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0ICcuL05hdi5jc3MnXHJcbmltcG9ydCB7bmF2X2FycmF5fSBmcm9tIFwiLi4vLi4vY29uc3RhbnRzL0NvbnN0YW50c1wiO1xyXG5pbXBvcnQgYnV0dCBmcm9tICcuLi8uLi9hc3NldHMvUHJvcGVydHkgMT1GcmFtZSAxLnN2ZydcclxuaW1wb3J0IGhvdmVyX2J1dHRvbiBmcm9tICcuLi8uLi9hc3NldHMvUHJvcGVydHkgMT1GcmFtZSAyLnN2ZydcclxuaW1wb3J0IGhvdmVyX2J1dHRvbl9ibGFjayBmcm9tICcuLi8uLi9hc3NldHMvUHJvcGVydHkgMT1GcmFtZSA3LnN2ZydcclxuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XHJcblxyXG5cclxuY29uc3QgTmF2ID0gKHtzZXJ2aWNlcywgY2xpZW50UGFnZSwgY29udGFjdHNQYWdlfTogYW55KSA9PiB7XHJcbiAgICBjb25zdCBbbW91c2VFbnRlciwgc2V0TW91c2VFbnRlcl0gPSB1c2VTdGF0ZShmYWxzZSlcclxuXHJcbiAgICBjb25zdCBzY3JvbGxUb0Jsb2NrID0gKCkgPT4ge1xyXG4gICAgICAgIGlmIChzZXJ2aWNlcyB8fCBjbGllbnRQYWdlIHx8IGNvbnRhY3RzUGFnZSA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICByZXR1cm5cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zdCBibG9jazogYW55ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlcnZpY2VzJyk7XHJcbiAgICAgICAgICAgIGJsb2NrLnNjcm9sbEludG9WaWV3KHtiZWhhdmlvcjogJ3Ntb290aCd9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjb25zdCBoYW5kbGVNb3VzZUVudGVyID0gKCkgPT4ge1xyXG4gICAgICAgIHNldE1vdXNlRW50ZXIodHJ1ZSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZU1vdXNlTGVhdmUgPSAoKSA9PiB7XHJcbiAgICAgICAgc2V0TW91c2VFbnRlcihmYWxzZSk7XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPHVsIGNsYXNzTmFtZT1cIm5hdl9fbGlzdFwiPlxyXG4gICAgICAgICAgICB7bmF2X2FycmF5Lm1hcCgoaXRlbSwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXtpdGVtLmlkfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXsnbmF2X19saW5rJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj17c2VydmljZXMgPT09IHRydWUgPyBpdGVtLmhyZWYgOiBzZXJ2aWNlcyB8fCBjbGllbnRQYWdlID09PSB0cnVlICYmIGluZGV4ID09PSAyID8gJy8nIDogIGNvbnRhY3RzUGFnZSA9PT0gdHJ1ZSAmJiBpbmRleCA9PT0gMiA/ICcvJyA6IGl0ZW0uaHJlZn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3NlcnZpY2VzID09PSB0cnVlID8ge2NvbG9yOiAnYmxhY2snfSA6IHtjb2xvcjogJ3doaXRlJ319XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2l0ZW0uaWQgPT09IDIgPyBzY3JvbGxUb0Jsb2NrIDogdW5kZWZpbmVkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aXRlbS5pZCA9PT0gNCA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17bW91c2VFbnRlciAmJiBzZXJ2aWNlcyA/IGhvdmVyX2J1dHRvbl9ibGFjayA6IG1vdXNlRW50ZXIgPyBob3Zlcl9idXR0b24gOiBidXR0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9eycnfSBzdHlsZT17e21hcmdpblRvcDogJy0yM3B4J319XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uTW91c2VFbnRlcj17aGFuZGxlTW91c2VFbnRlcn0gb25Nb3VzZUxlYXZlPXtoYW5kbGVNb3VzZUxlYXZlfS8+IDogaXRlbS52YWx1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgPC91bD5cclxuICAgIClcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5hdjtcclxuXHJcblxyXG57Lyo8ZGl2IGNsYXNzTmFtZT1cIm5hdl9fY2xvc2VcIiBpZD1cIm5hdi1jbG9zZVwiIG9uQ2xpY2s9e3RvZ2dsZU1lbnV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8SW9DbG9zZS8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+Ki9cclxufVxyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIm5hdl9hcnJheSIsImJ1dHQiLCJob3Zlcl9idXR0b24iLCJob3Zlcl9idXR0b25fYmxhY2siLCJJbWFnZSIsIk5hdiIsInNlcnZpY2VzIiwiY2xpZW50UGFnZSIsImNvbnRhY3RzUGFnZSIsIm1vdXNlRW50ZXIiLCJzZXRNb3VzZUVudGVyIiwic2Nyb2xsVG9CbG9jayIsImJsb2NrIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInNjcm9sbEludG9WaWV3IiwiYmVoYXZpb3IiLCJoYW5kbGVNb3VzZUVudGVyIiwiaGFuZGxlTW91c2VMZWF2ZSIsInVsIiwiY2xhc3NOYW1lIiwibWFwIiwiaXRlbSIsImluZGV4IiwibGkiLCJhIiwiaHJlZiIsInN0eWxlIiwiY29sb3IiLCJvbkNsaWNrIiwiaWQiLCJ1bmRlZmluZWQiLCJzcmMiLCJhbHQiLCJtYXJnaW5Ub3AiLCJvbk1vdXNlRW50ZXIiLCJvbk1vdXNlTGVhdmUiLCJ2YWx1ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/Nav/Nav.tsx\n"));

/***/ })

});