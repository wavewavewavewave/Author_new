"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/pages/services/threeD-modeling/page",{

/***/ "(app-pages-browser)/./src/app/components/Nav/Nav.tsx":
/*!****************************************!*\
  !*** ./src/app/components/Nav/Nav.tsx ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Nav_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Nav.css */ \"(app-pages-browser)/./src/app/components/Nav/Nav.css\");\n/* harmony import */ var _constants_Constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../constants/Constants */ \"(app-pages-browser)/./src/app/constants/Constants.ts\");\n/* harmony import */ var _assets_Property_1_Frame_1_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../assets/Property 1=Frame 1.svg */ \"(app-pages-browser)/./src/app/assets/Property 1=Frame 1.svg\");\n/* harmony import */ var _assets_Property_1_Frame_2_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../assets/Property 1=Frame 2.svg */ \"(app-pages-browser)/./src/app/assets/Property 1=Frame 2.svg\");\n/* harmony import */ var _assets_Property_1_Frame_7_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../assets/Property 1=Frame 7.svg */ \"(app-pages-browser)/./src/app/assets/Property 1=Frame 7.svg\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nconst Nav = (param)=>{\n    let { services, clientPage } = param;\n    _s();\n    const [mouseEnter, setMouseEnter] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const scrollToBlock = ()=>{\n        if (services || clientPage === true) {\n            return;\n        } else {\n            const block = document.getElementById(\"services\");\n            block.scrollIntoView({\n                behavior: \"smooth\"\n            });\n        }\n    };\n    const handleMouseEnter = ()=>{\n        setMouseEnter(true);\n    };\n    const handleMouseLeave = ()=>{\n        setMouseEnter(false);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n        className: \"nav__list\",\n        children: _constants_Constants__WEBPACK_IMPORTED_MODULE_3__.nav_array.map((item, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                    className: \"nav__link\",\n                    href: services === true ? item.href : services || clientPage === true && index === 2 ? \"/\" : index === 2 ? \"#\" : item.href,\n                    style: services === true ? {\n                        color: \"black\"\n                    } : {\n                        color: \"white\"\n                    },\n                    onClick: item.id === 2 ? scrollToBlock : undefined,\n                    children: item.id === 4 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                        src: mouseEnter && services ? _assets_Property_1_Frame_7_svg__WEBPACK_IMPORTED_MODULE_6__[\"default\"] : mouseEnter ? _assets_Property_1_Frame_2_svg__WEBPACK_IMPORTED_MODULE_5__[\"default\"] : _assets_Property_1_Frame_1_svg__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n                        alt: \"\",\n                        style: {\n                            marginTop: \"-23px\"\n                        },\n                        onMouseEnter: handleMouseEnter,\n                        onMouseLeave: handleMouseLeave\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Author_new\\\\my-app\\\\src\\\\app\\\\components\\\\Nav\\\\Nav.tsx\",\n                        lineNumber: 40,\n                        columnNumber: 33\n                    }, undefined) : item.value\n                }, void 0, false, {\n                    fileName: \"D:\\\\Author_new\\\\my-app\\\\src\\\\app\\\\components\\\\Nav\\\\Nav.tsx\",\n                    lineNumber: 34,\n                    columnNumber: 25\n                }, undefined)\n            }, item.id, false, {\n                fileName: \"D:\\\\Author_new\\\\my-app\\\\src\\\\app\\\\components\\\\Nav\\\\Nav.tsx\",\n                lineNumber: 33,\n                columnNumber: 21\n            }, undefined))\n    }, void 0, false, {\n        fileName: \"D:\\\\Author_new\\\\my-app\\\\src\\\\app\\\\components\\\\Nav\\\\Nav.tsx\",\n        lineNumber: 31,\n        columnNumber: 9\n    }, undefined);\n};\n_s(Nav, \"uJJrXxujjqr1Nutttnr0gqgkYV4=\");\n_c = Nav;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Nav);\n{}var _c;\n$RefreshReg$(_c, \"Nav\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9OYXYvTmF2LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFDc0M7QUFDcEI7QUFDa0M7QUFDRTtBQUNRO0FBQ007QUFDckM7QUFHL0IsTUFBTU8sTUFBTTtRQUFDLEVBQUNDLFFBQVEsRUFBRUMsVUFBVSxFQUFNOztJQUNwQyxNQUFNLENBQUNDLFlBQVlDLGNBQWMsR0FBR1YsK0NBQVFBLENBQUM7SUFFN0MsTUFBTVcsZ0JBQWdCO1FBQ2xCLElBQUlKLFlBQVlDLGVBQWUsTUFBTTtZQUNqQztRQUNKLE9BQU87WUFDSCxNQUFNSSxRQUFhQyxTQUFTQyxjQUFjLENBQUM7WUFDM0NGLE1BQU1HLGNBQWMsQ0FBQztnQkFBQ0MsVUFBVTtZQUFRO1FBQzVDO0lBQ0o7SUFDQSxNQUFNQyxtQkFBbUI7UUFDckJQLGNBQWM7SUFDbEI7SUFFQSxNQUFNUSxtQkFBbUI7UUFDckJSLGNBQWM7SUFDbEI7SUFFQSxxQkFDSSw4REFBQ1M7UUFBR0MsV0FBVTtrQkFDVG5CLDJEQUFTQSxDQUFDb0IsR0FBRyxDQUFDLENBQUNDLE1BQU1DLHNCQUNkLDhEQUFDQzswQkFDRyw0RUFBQ0M7b0JBQUVMLFdBQVc7b0JBQ1hNLE1BQU1uQixhQUFhLE9BQU9lLEtBQUtJLElBQUksR0FBR25CLFlBQVlDLGVBQWUsUUFBUWUsVUFBVSxJQUFJLE1BQU1BLFVBQVUsSUFBSSxNQUFNRCxLQUFLSSxJQUFJO29CQUMxSEMsT0FBT3BCLGFBQWEsT0FBTzt3QkFBQ3FCLE9BQU87b0JBQU8sSUFBSTt3QkFBQ0EsT0FBTztvQkFBTztvQkFDN0RDLFNBQVNQLEtBQUtRLEVBQUUsS0FBSyxJQUFJbkIsZ0JBQWdCb0I7OEJBRXZDVCxLQUFLUSxFQUFFLEtBQUssa0JBQ1QsOERBQUN6QixrREFBS0E7d0JBQ0YyQixLQUFLdkIsY0FBY0YsV0FBV0gsc0VBQWtCQSxHQUFHSyxhQUFhTixzRUFBWUEsR0FBR0Qsc0VBQUlBO3dCQUNuRitCLEtBQUs7d0JBQUlOLE9BQU87NEJBQUNPLFdBQVc7d0JBQU87d0JBQ25DQyxjQUFjbEI7d0JBQWtCbUIsY0FBY2xCOzs7OztvQ0FBc0JJLEtBQUtlLEtBQUs7Ozs7OztlQVZyRmYsS0FBS1EsRUFBRTs7Ozs7Ozs7OztBQWlCcEM7R0F2Q014QjtLQUFBQTtBQXlDTiwrREFBZUEsR0FBR0EsRUFBQztBQUduQixDQUdBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvY29tcG9uZW50cy9OYXYvTmF2LnRzeD82OTZkIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50J1xyXG5pbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZX0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgJy4vTmF2LmNzcydcclxuaW1wb3J0IHtuYXZfYXJyYXl9IGZyb20gXCIuLi8uLi9jb25zdGFudHMvQ29uc3RhbnRzXCI7XHJcbmltcG9ydCBidXR0IGZyb20gJy4uLy4uL2Fzc2V0cy9Qcm9wZXJ0eSAxPUZyYW1lIDEuc3ZnJ1xyXG5pbXBvcnQgaG92ZXJfYnV0dG9uIGZyb20gJy4uLy4uL2Fzc2V0cy9Qcm9wZXJ0eSAxPUZyYW1lIDIuc3ZnJ1xyXG5pbXBvcnQgaG92ZXJfYnV0dG9uX2JsYWNrIGZyb20gJy4uLy4uL2Fzc2V0cy9Qcm9wZXJ0eSAxPUZyYW1lIDcuc3ZnJ1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcclxuXHJcblxyXG5jb25zdCBOYXYgPSAoe3NlcnZpY2VzLCBjbGllbnRQYWdlfTogYW55KSA9PiB7XHJcbiAgICBjb25zdCBbbW91c2VFbnRlciwgc2V0TW91c2VFbnRlcl0gPSB1c2VTdGF0ZShmYWxzZSlcclxuXHJcbiAgICBjb25zdCBzY3JvbGxUb0Jsb2NrID0gKCkgPT4ge1xyXG4gICAgICAgIGlmIChzZXJ2aWNlcyB8fCBjbGllbnRQYWdlID09PSB0cnVlKSB7XHJcbiAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGJsb2NrOiBhbnkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VydmljZXMnKTtcclxuICAgICAgICAgICAgYmxvY2suc2Nyb2xsSW50b1ZpZXcoe2JlaGF2aW9yOiAnc21vb3RoJ30pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNvbnN0IGhhbmRsZU1vdXNlRW50ZXIgPSAoKSA9PiB7XHJcbiAgICAgICAgc2V0TW91c2VFbnRlcih0cnVlKTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgaGFuZGxlTW91c2VMZWF2ZSA9ICgpID0+IHtcclxuICAgICAgICBzZXRNb3VzZUVudGVyKGZhbHNlKTtcclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8dWwgY2xhc3NOYW1lPVwibmF2X19saXN0XCI+XHJcbiAgICAgICAgICAgIHtuYXZfYXJyYXkubWFwKChpdGVtLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e2l0ZW0uaWR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9eyduYXZfX2xpbmsnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPXtzZXJ2aWNlcyA9PT0gdHJ1ZSA/IGl0ZW0uaHJlZiA6IHNlcnZpY2VzIHx8IGNsaWVudFBhZ2UgPT09IHRydWUgJiYgaW5kZXggPT09IDIgPyAnLycgOiBpbmRleCA9PT0gMiA/ICcjJyA6IGl0ZW0uaHJlZn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3NlcnZpY2VzID09PSB0cnVlID8ge2NvbG9yOiAnYmxhY2snfSA6IHtjb2xvcjogJ3doaXRlJ319XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2l0ZW0uaWQgPT09IDIgPyBzY3JvbGxUb0Jsb2NrIDogdW5kZWZpbmVkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aXRlbS5pZCA9PT0gNCA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17bW91c2VFbnRlciAmJiBzZXJ2aWNlcyA/IGhvdmVyX2J1dHRvbl9ibGFjayA6IG1vdXNlRW50ZXIgPyBob3Zlcl9idXR0b24gOiBidXR0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9eycnfSBzdHlsZT17e21hcmdpblRvcDogJy0yM3B4J319XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uTW91c2VFbnRlcj17aGFuZGxlTW91c2VFbnRlcn0gb25Nb3VzZUxlYXZlPXtoYW5kbGVNb3VzZUxlYXZlfS8+IDogaXRlbS52YWx1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgPC91bD5cclxuICAgIClcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5hdjtcclxuXHJcblxyXG57Lyo8ZGl2IGNsYXNzTmFtZT1cIm5hdl9fY2xvc2VcIiBpZD1cIm5hdi1jbG9zZVwiIG9uQ2xpY2s9e3RvZ2dsZU1lbnV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8SW9DbG9zZS8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+Ki9cclxufVxyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIm5hdl9hcnJheSIsImJ1dHQiLCJob3Zlcl9idXR0b24iLCJob3Zlcl9idXR0b25fYmxhY2siLCJJbWFnZSIsIk5hdiIsInNlcnZpY2VzIiwiY2xpZW50UGFnZSIsIm1vdXNlRW50ZXIiLCJzZXRNb3VzZUVudGVyIiwic2Nyb2xsVG9CbG9jayIsImJsb2NrIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInNjcm9sbEludG9WaWV3IiwiYmVoYXZpb3IiLCJoYW5kbGVNb3VzZUVudGVyIiwiaGFuZGxlTW91c2VMZWF2ZSIsInVsIiwiY2xhc3NOYW1lIiwibWFwIiwiaXRlbSIsImluZGV4IiwibGkiLCJhIiwiaHJlZiIsInN0eWxlIiwiY29sb3IiLCJvbkNsaWNrIiwiaWQiLCJ1bmRlZmluZWQiLCJzcmMiLCJhbHQiLCJtYXJnaW5Ub3AiLCJvbk1vdXNlRW50ZXIiLCJvbk1vdXNlTGVhdmUiLCJ2YWx1ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/Nav/Nav.tsx\n"));

/***/ })

});