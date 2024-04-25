"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/pages/services/advertising-stands/page",{

/***/ "(app-pages-browser)/./src/app/components/Nav/Nav.tsx":
/*!****************************************!*\
  !*** ./src/app/components/Nav/Nav.tsx ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Nav_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Nav.css */ \"(app-pages-browser)/./src/app/components/Nav/Nav.css\");\n/* harmony import */ var _constants_Constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../constants/Constants */ \"(app-pages-browser)/./src/app/constants/Constants.ts\");\n/* harmony import */ var _assets_Property_1_Frame_1_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../assets/Property 1=Frame 1.svg */ \"(app-pages-browser)/./src/app/assets/Property 1=Frame 1.svg\");\n/* harmony import */ var _assets_Property_1_Frame_2_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../assets/Property 1=Frame 2.svg */ \"(app-pages-browser)/./src/app/assets/Property 1=Frame 2.svg\");\n/* harmony import */ var _assets_Property_1_Frame_7_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../assets/Property 1=Frame 7.svg */ \"(app-pages-browser)/./src/app/assets/Property 1=Frame 7.svg\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nconst Nav = (param)=>{\n    let { services, clientPage } = param;\n    _s();\n    const [mouseEnter, setMouseEnter] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const scrollToBlock = ()=>{\n        if (services || clientPage === true) {\n            return;\n        } else {\n            const block = document.getElementById(\"services\");\n            block.scrollIntoView({\n                behavior: \"smooth\"\n            });\n        }\n    };\n    const handleMouseEnter = ()=>{\n        setMouseEnter(true);\n    };\n    const handleMouseLeave = ()=>{\n        setMouseEnter(false);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n        className: \"nav__list\",\n        children: _constants_Constants__WEBPACK_IMPORTED_MODULE_3__.nav_array.map((item, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                    className: \"nav__link\",\n                    href: services === true ? \"/\" : services || clientPage === true && index === 2 ? \"/\" : index === 2 ? \"#\" : item.href,\n                    style: services === true ? {\n                        color: \"black\"\n                    } : {\n                        color: \"white\"\n                    },\n                    onClick: item.id === 2 ? scrollToBlock : undefined,\n                    children: item.id === 4 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                        src: mouseEnter && services ? _assets_Property_1_Frame_7_svg__WEBPACK_IMPORTED_MODULE_6__[\"default\"] : mouseEnter ? _assets_Property_1_Frame_2_svg__WEBPACK_IMPORTED_MODULE_5__[\"default\"] : _assets_Property_1_Frame_1_svg__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n                        alt: \"\",\n                        style: {\n                            marginTop: \"-23px\"\n                        },\n                        onMouseEnter: handleMouseEnter,\n                        onMouseLeave: handleMouseLeave\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Author_new\\\\my-app\\\\src\\\\app\\\\components\\\\Nav\\\\Nav.tsx\",\n                        lineNumber: 40,\n                        columnNumber: 33\n                    }, undefined) : item.value\n                }, void 0, false, {\n                    fileName: \"D:\\\\Author_new\\\\my-app\\\\src\\\\app\\\\components\\\\Nav\\\\Nav.tsx\",\n                    lineNumber: 34,\n                    columnNumber: 25\n                }, undefined)\n            }, item.id, false, {\n                fileName: \"D:\\\\Author_new\\\\my-app\\\\src\\\\app\\\\components\\\\Nav\\\\Nav.tsx\",\n                lineNumber: 33,\n                columnNumber: 21\n            }, undefined))\n    }, void 0, false, {\n        fileName: \"D:\\\\Author_new\\\\my-app\\\\src\\\\app\\\\components\\\\Nav\\\\Nav.tsx\",\n        lineNumber: 31,\n        columnNumber: 9\n    }, undefined);\n};\n_s(Nav, \"uJJrXxujjqr1Nutttnr0gqgkYV4=\");\n_c = Nav;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Nav);\n{}var _c;\n$RefreshReg$(_c, \"Nav\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9OYXYvTmF2LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFDc0M7QUFDcEI7QUFDa0M7QUFDRTtBQUNRO0FBQ007QUFDckM7QUFHL0IsTUFBTU8sTUFBTTtRQUFDLEVBQUNDLFFBQVEsRUFBRUMsVUFBVSxFQUFNOztJQUNwQyxNQUFNLENBQUNDLFlBQVlDLGNBQWMsR0FBR1YsK0NBQVFBLENBQUM7SUFFN0MsTUFBTVcsZ0JBQWdCO1FBQ2xCLElBQUlKLFlBQVlDLGVBQWUsTUFBTTtZQUNqQztRQUNKLE9BQU87WUFDSCxNQUFNSSxRQUFhQyxTQUFTQyxjQUFjLENBQUM7WUFDM0NGLE1BQU1HLGNBQWMsQ0FBQztnQkFBQ0MsVUFBVTtZQUFRO1FBQzVDO0lBQ0o7SUFDQSxNQUFNQyxtQkFBbUI7UUFDckJQLGNBQWM7SUFDbEI7SUFFQSxNQUFNUSxtQkFBbUI7UUFDckJSLGNBQWM7SUFDbEI7SUFFQSxxQkFDSSw4REFBQ1M7UUFBR0MsV0FBVTtrQkFDVG5CLDJEQUFTQSxDQUFDb0IsR0FBRyxDQUFDLENBQUNDLE1BQU1DLHNCQUNkLDhEQUFDQzswQkFDRyw0RUFBQ0M7b0JBQUVMLFdBQVc7b0JBQ1hNLE1BQU1uQixhQUFhLE9BQU8sTUFBTUEsWUFBWUMsZUFBZSxRQUFRZSxVQUFVLElBQUksTUFBTUEsVUFBVSxJQUFJLE1BQU1ELEtBQUtJLElBQUk7b0JBQ3BIQyxPQUFPcEIsYUFBYSxPQUFPO3dCQUFDcUIsT0FBTztvQkFBTyxJQUFJO3dCQUFDQSxPQUFPO29CQUFPO29CQUM3REMsU0FBU1AsS0FBS1EsRUFBRSxLQUFLLElBQUluQixnQkFBZ0JvQjs4QkFFdkNULEtBQUtRLEVBQUUsS0FBSyxrQkFDVCw4REFBQ3pCLGtEQUFLQTt3QkFDRjJCLEtBQUt2QixjQUFjRixXQUFXSCxzRUFBa0JBLEdBQUdLLGFBQWFOLHNFQUFZQSxHQUFHRCxzRUFBSUE7d0JBQ25GK0IsS0FBSzt3QkFBSU4sT0FBTzs0QkFBQ08sV0FBVzt3QkFBTzt3QkFDbkNDLGNBQWNsQjt3QkFBa0JtQixjQUFjbEI7Ozs7O29DQUFzQkksS0FBS2UsS0FBSzs7Ozs7O2VBVnJGZixLQUFLUSxFQUFFOzs7Ozs7Ozs7O0FBaUJwQztHQXZDTXhCO0tBQUFBO0FBeUNOLCtEQUFlQSxHQUFHQSxFQUFDO0FBR25CLENBR0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9jb21wb25lbnRzL05hdi9OYXYudHN4PzY5NmQiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnXHJcbmltcG9ydCBSZWFjdCwge3VzZVN0YXRlfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCAnLi9OYXYuY3NzJ1xyXG5pbXBvcnQge25hdl9hcnJheX0gZnJvbSBcIi4uLy4uL2NvbnN0YW50cy9Db25zdGFudHNcIjtcclxuaW1wb3J0IGJ1dHQgZnJvbSAnLi4vLi4vYXNzZXRzL1Byb3BlcnR5IDE9RnJhbWUgMS5zdmcnXHJcbmltcG9ydCBob3Zlcl9idXR0b24gZnJvbSAnLi4vLi4vYXNzZXRzL1Byb3BlcnR5IDE9RnJhbWUgMi5zdmcnXHJcbmltcG9ydCBob3Zlcl9idXR0b25fYmxhY2sgZnJvbSAnLi4vLi4vYXNzZXRzL1Byb3BlcnR5IDE9RnJhbWUgNy5zdmcnXHJcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xyXG5cclxuXHJcbmNvbnN0IE5hdiA9ICh7c2VydmljZXMsIGNsaWVudFBhZ2V9OiBhbnkpID0+IHtcclxuICAgIGNvbnN0IFttb3VzZUVudGVyLCBzZXRNb3VzZUVudGVyXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG5cclxuICAgIGNvbnN0IHNjcm9sbFRvQmxvY2sgPSAoKSA9PiB7XHJcbiAgICAgICAgaWYgKHNlcnZpY2VzIHx8IGNsaWVudFBhZ2UgPT09IHRydWUpIHtcclxuICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29uc3QgYmxvY2s6IGFueSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZXJ2aWNlcycpO1xyXG4gICAgICAgICAgICBibG9jay5zY3JvbGxJbnRvVmlldyh7YmVoYXZpb3I6ICdzbW9vdGgnfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY29uc3QgaGFuZGxlTW91c2VFbnRlciA9ICgpID0+IHtcclxuICAgICAgICBzZXRNb3VzZUVudGVyKHRydWUpO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVNb3VzZUxlYXZlID0gKCkgPT4ge1xyXG4gICAgICAgIHNldE1vdXNlRW50ZXIoZmFsc2UpO1xyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDx1bCBjbGFzc05hbWU9XCJuYXZfX2xpc3RcIj5cclxuICAgICAgICAgICAge25hdl9hcnJheS5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGxpIGtleT17aXRlbS5pZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17J25hdl9fbGluayd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9e3NlcnZpY2VzID09PSB0cnVlID8gJy8nIDogc2VydmljZXMgfHwgY2xpZW50UGFnZSA9PT0gdHJ1ZSAmJiBpbmRleCA9PT0gMiA/ICcvJyA6IGluZGV4ID09PSAyID8gJyMnIDogaXRlbS5ocmVmfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17c2VydmljZXMgPT09IHRydWUgPyB7Y29sb3I6ICdibGFjayd9IDoge2NvbG9yOiAnd2hpdGUnfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17aXRlbS5pZCA9PT0gMiA/IHNjcm9sbFRvQmxvY2sgOiB1bmRlZmluZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtLmlkID09PSA0ID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXttb3VzZUVudGVyICYmIHNlcnZpY2VzID8gaG92ZXJfYnV0dG9uX2JsYWNrIDogbW91c2VFbnRlciA/IGhvdmVyX2J1dHRvbiA6IGJ1dHR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD17Jyd9IHN0eWxlPXt7bWFyZ2luVG9wOiAnLTIzcHgnfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25Nb3VzZUVudGVyPXtoYW5kbGVNb3VzZUVudGVyfSBvbk1vdXNlTGVhdmU9e2hhbmRsZU1vdXNlTGVhdmV9Lz4gOiBpdGVtLnZhbHVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgKX1cclxuICAgICAgICA8L3VsPlxyXG4gICAgKVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmF2O1xyXG5cclxuXHJcbnsvKjxkaXYgY2xhc3NOYW1lPVwibmF2X19jbG9zZVwiIGlkPVwibmF2LWNsb3NlXCIgb25DbGljaz17dG9nZ2xlTWVudX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxJb0Nsb3NlLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj4qL1xyXG59XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwibmF2X2FycmF5IiwiYnV0dCIsImhvdmVyX2J1dHRvbiIsImhvdmVyX2J1dHRvbl9ibGFjayIsIkltYWdlIiwiTmF2Iiwic2VydmljZXMiLCJjbGllbnRQYWdlIiwibW91c2VFbnRlciIsInNldE1vdXNlRW50ZXIiLCJzY3JvbGxUb0Jsb2NrIiwiYmxvY2siLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwic2Nyb2xsSW50b1ZpZXciLCJiZWhhdmlvciIsImhhbmRsZU1vdXNlRW50ZXIiLCJoYW5kbGVNb3VzZUxlYXZlIiwidWwiLCJjbGFzc05hbWUiLCJtYXAiLCJpdGVtIiwiaW5kZXgiLCJsaSIsImEiLCJocmVmIiwic3R5bGUiLCJjb2xvciIsIm9uQ2xpY2siLCJpZCIsInVuZGVmaW5lZCIsInNyYyIsImFsdCIsIm1hcmdpblRvcCIsIm9uTW91c2VFbnRlciIsIm9uTW91c2VMZWF2ZSIsInZhbHVlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/Nav/Nav.tsx\n"));

/***/ })

});