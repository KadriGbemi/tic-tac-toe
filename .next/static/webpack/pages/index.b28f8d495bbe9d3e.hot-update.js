"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _contexts_game__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../contexts/game */ \"./contexts/game.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction Home() {\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    const { setPlayers , setPlayersName , playersName , isPlayerOne , setIsPlayerOne  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_contexts_game__WEBPACK_IMPORTED_MODULE_4__.GameContext);\n    const previousPlayerX = playersName === null || playersName === void 0 ? void 0 : playersName.X;\n    const previousPlayerO = playersName === null || playersName === void 0 ? void 0 : playersName.O;\n    const [player1, setPlayer1] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(previousPlayerX);\n    const [player2, setPlayer2] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(playersName === null || playersName === void 0 ? void 0 : playersName.O);\n    const handlePlayerType = (evt)=>{\n        const target = evt.target;\n        setIsPlayerOne(target.value === \"onePlayer\");\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (previousPlayerX) {\n            setPlayer1(previousPlayerX);\n        }\n        if (previousPlayerO) {\n            setPlayer2(previousPlayerO);\n        }\n    }, [\n        previousPlayerX,\n        previousPlayerO\n    ]);\n    const handleSubmit = (event)=>{\n        event.preventDefault();\n        if (isPlayerOne) {\n            localStorage.setItem(\"isPlayerOne\", \"true\");\n            localStorage.setItem(\"O\", \"Computer\");\n        } else {\n            localStorage.setItem(\"X\", player1 || \"\");\n            localStorage.setItem(\"O\", player2 || \"\");\n        }\n        setPlayers({\n            player1: \"X\",\n            player2: \"O\"\n        });\n        setPlayersName({\n            X: player1,\n            O: player2\n        });\n        router.push(\"/game\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"container\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Tic-tac toe game\"\n                    }, void 0, false, {\n                        fileName: \"/Users/oluwagbemikadri/Desktop/tic-tac-toe/pages/index.tsx\",\n                        lineNumber: 64,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"Generated by create next app\"\n                    }, void 0, false, {\n                        fileName: \"/Users/oluwagbemikadri/Desktop/tic-tac-toe/pages/index.tsx\",\n                        lineNumber: 65,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.ico\"\n                    }, void 0, false, {\n                        fileName: \"/Users/oluwagbemikadri/Desktop/tic-tac-toe/pages/index.tsx\",\n                        lineNumber: 66,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/oluwagbemikadri/Desktop/tic-tac-toe/pages/index.tsx\",\n                lineNumber: 63,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: \"container main\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    id: \"game-form\",\n                    onSubmit: handleSubmit,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                            className: \"form-title\",\n                            children: \"Game Input details\"\n                        }, void 0, false, {\n                            fileName: \"/Users/oluwagbemikadri/Desktop/tic-tac-toe/pages/index.tsx\",\n                            lineNumber: 71,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    children: \"Choose players:\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/oluwagbemikadri/Desktop/tic-tac-toe/pages/index.tsx\",\n                                    lineNumber: 73,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                                        name: \"players\",\n                                        id: \"players\",\n                                        onChange: handlePlayerType,\n                                        value: isPlayerOne ? \"onePlayer\" : \"twoPlayers\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                                value: \"twoPlayers\",\n                                                children: \"Play as two persons\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/oluwagbemikadri/Desktop/tic-tac-toe/pages/index.tsx\",\n                                                lineNumber: 81,\n                                                columnNumber: 17\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                                value: \"onePlayer\",\n                                                children: \"Play with computer\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/oluwagbemikadri/Desktop/tic-tac-toe/pages/index.tsx\",\n                                                lineNumber: 82,\n                                                columnNumber: 17\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/oluwagbemikadri/Desktop/tic-tac-toe/pages/index.tsx\",\n                                        lineNumber: 75,\n                                        columnNumber: 15\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/oluwagbemikadri/Desktop/tic-tac-toe/pages/index.tsx\",\n                                    lineNumber: 74,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                            children: \"Enter player 1:\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/oluwagbemikadri/Desktop/tic-tac-toe/pages/index.tsx\",\n                                            lineNumber: 86,\n                                            columnNumber: 15\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                            placeholder: \"Enter player one's name\",\n                                            id: \"first_name\",\n                                            name: \"player-1\",\n                                            type: \"text\",\n                                            onChange: (event)=>setPlayer1(event.target.value),\n                                            value: player1\n                                        }, void 0, false, {\n                                            fileName: \"/Users/oluwagbemikadri/Desktop/tic-tac-toe/pages/index.tsx\",\n                                            lineNumber: 87,\n                                            columnNumber: 15\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/oluwagbemikadri/Desktop/tic-tac-toe/pages/index.tsx\",\n                                    lineNumber: 85,\n                                    columnNumber: 13\n                                }, this),\n                                !isPlayerOne && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                            children: \"Enter player 2:\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/oluwagbemikadri/Desktop/tic-tac-toe/pages/index.tsx\",\n                                            lineNumber: 98,\n                                            columnNumber: 17\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                            placeholder: \"Enter player two name\",\n                                            name: \"player-2\",\n                                            type: \"text\",\n                                            value: player2,\n                                            onChange: (event)=>setPlayer2(event.target.value)\n                                        }, void 0, false, {\n                                            fileName: \"/Users/oluwagbemikadri/Desktop/tic-tac-toe/pages/index.tsx\",\n                                            lineNumber: 99,\n                                            columnNumber: 17\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/oluwagbemikadri/Desktop/tic-tac-toe/pages/index.tsx\",\n                                    lineNumber: 97,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"action\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        type: \"submit\",\n                                        children: [\n                                            previousPlayerX || previousPlayerO ? \"Continue\" : \"Start\",\n                                            \" game\"\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/oluwagbemikadri/Desktop/tic-tac-toe/pages/index.tsx\",\n                                        lineNumber: 110,\n                                        columnNumber: 15\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/oluwagbemikadri/Desktop/tic-tac-toe/pages/index.tsx\",\n                                    lineNumber: 109,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/oluwagbemikadri/Desktop/tic-tac-toe/pages/index.tsx\",\n                            lineNumber: 72,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/oluwagbemikadri/Desktop/tic-tac-toe/pages/index.tsx\",\n                    lineNumber: 70,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/oluwagbemikadri/Desktop/tic-tac-toe/pages/index.tsx\",\n                lineNumber: 69,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/oluwagbemikadri/Desktop/tic-tac-toe/pages/index.tsx\",\n        lineNumber: 62,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"s0BYEvPHt2rxRTdADFTSadBEZ8k=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Szs0Q0FDTDNCLE9BQU9MOzRDQUNQNEIsVUFBVSxDQUFDckIsUUFBVU4sV0FBV00sTUFBTUgsTUFBTSxDQUFDQyxLQUFLOzs7Ozs7Ozs7Ozs7OENBS3hELDhEQUFDTztvQ0FBSUMsV0FBVTs4Q0FDYiw0RUFBQ29CO3dDQUFPRCxNQUFLOzs0Q0FDVnRDLG1CQUFtQkUsa0JBQWtCLGFBQWEsT0FBTzs0Q0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFRM0UsQ0FBQztHQWpIdUJUOztRQUNQRixrREFBU0E7OztLQURGRSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC50c3g/MDdmZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VDb250ZXh0LCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCB7IEdhbWVDb250ZXh0IH0gZnJvbSBcIi4uL2NvbnRleHRzL2dhbWVcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIGNvbnN0IHtcbiAgICBzZXRQbGF5ZXJzLFxuICAgIHNldFBsYXllcnNOYW1lLFxuICAgIHBsYXllcnNOYW1lLFxuICAgIGlzUGxheWVyT25lLFxuICAgIHNldElzUGxheWVyT25lLFxuICB9ID0gdXNlQ29udGV4dChHYW1lQ29udGV4dCk7XG5cbiAgY29uc3QgcHJldmlvdXNQbGF5ZXJYID0gcGxheWVyc05hbWU/Llg7XG4gIGNvbnN0IHByZXZpb3VzUGxheWVyTyA9IHBsYXllcnNOYW1lPy5PO1xuXG4gIGNvbnN0IFtwbGF5ZXIxLCBzZXRQbGF5ZXIxXSA9IHVzZVN0YXRlKHByZXZpb3VzUGxheWVyWCk7XG4gIGNvbnN0IFtwbGF5ZXIyLCBzZXRQbGF5ZXIyXSA9IHVzZVN0YXRlKHBsYXllcnNOYW1lPy5PKTtcblxuICBjb25zdCBoYW5kbGVQbGF5ZXJUeXBlID0gKGV2dDogUmVhY3QuRm9ybUV2ZW50PEhUTUxTZWxlY3RFbGVtZW50PikgPT4ge1xuICAgIGNvbnN0IHRhcmdldCA9IGV2dC50YXJnZXQgYXMgSFRNTFNlbGVjdEVsZW1lbnQ7XG4gICAgc2V0SXNQbGF5ZXJPbmUodGFyZ2V0LnZhbHVlID09PSBcIm9uZVBsYXllclwiKTtcbiAgfTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChwcmV2aW91c1BsYXllclgpIHtcbiAgICAgIHNldFBsYXllcjEocHJldmlvdXNQbGF5ZXJYKTtcbiAgICB9XG5cbiAgICBpZiAocHJldmlvdXNQbGF5ZXJPKSB7XG4gICAgICBzZXRQbGF5ZXIyKHByZXZpb3VzUGxheWVyTyk7XG4gICAgfVxuICB9LCBbcHJldmlvdXNQbGF5ZXJYLCBwcmV2aW91c1BsYXllck9dKTtcblxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSAoZXZlbnQ6IFJlYWN0LkZvcm1FdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBpZiAoaXNQbGF5ZXJPbmUpIHtcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiaXNQbGF5ZXJPbmVcIiwgXCJ0cnVlXCIpO1xuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJPXCIsIFwiQ29tcHV0ZXJcIik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiWFwiLCBwbGF5ZXIxIHx8IFwiXCIpO1xuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJPXCIsIHBsYXllcjIgfHwgXCJcIik7XG4gICAgfVxuXG4gICAgc2V0UGxheWVycyh7XG4gICAgICBwbGF5ZXIxOiBcIlhcIixcbiAgICAgIHBsYXllcjI6IFwiT1wiLFxuICAgIH0pO1xuXG4gICAgc2V0UGxheWVyc05hbWUoe1xuICAgICAgWDogcGxheWVyMSxcbiAgICAgIE86IHBsYXllcjIsXG4gICAgfSk7XG5cbiAgICByb3V0ZXIucHVzaChcIi9nYW1lXCIpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+VGljLXRhYyB0b2UgZ2FtZTwvdGl0bGU+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9XCJHZW5lcmF0ZWQgYnkgY3JlYXRlIG5leHQgYXBwXCIgLz5cbiAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIiAvPlxuICAgICAgPC9IZWFkPlxuXG4gICAgICA8bWFpbiBjbGFzc05hbWU9XCJjb250YWluZXIgbWFpblwiPlxuICAgICAgICA8ZGl2IGlkPVwiZ2FtZS1mb3JtXCIgb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XG4gICAgICAgICAgPGgzIGNsYXNzTmFtZT1cImZvcm0tdGl0bGVcIj5HYW1lIElucHV0IGRldGFpbHM8L2gzPlxuICAgICAgICAgIDxmb3JtPlxuICAgICAgICAgICAgPGxhYmVsPkNob29zZSBwbGF5ZXJzOjwvbGFiZWw+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICA8c2VsZWN0XG4gICAgICAgICAgICAgICAgbmFtZT1cInBsYXllcnNcIlxuICAgICAgICAgICAgICAgIGlkPVwicGxheWVyc1wiXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZVBsYXllclR5cGV9XG4gICAgICAgICAgICAgICAgdmFsdWU9e2lzUGxheWVyT25lID8gXCJvbmVQbGF5ZXJcIiA6IFwidHdvUGxheWVyc1wifVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cInR3b1BsYXllcnNcIj5QbGF5IGFzIHR3byBwZXJzb25zPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIm9uZVBsYXllclwiPlBsYXkgd2l0aCBjb21wdXRlcjwvb3B0aW9uPlxuICAgICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgPGxhYmVsPkVudGVyIHBsYXllciAxOjwvbGFiZWw+XG4gICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgcGxheWVyIG9uZSdzIG5hbWVcIlxuICAgICAgICAgICAgICAgIGlkPVwiZmlyc3RfbmFtZVwiXG4gICAgICAgICAgICAgICAgbmFtZT1cInBsYXllci0xXCJcbiAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT4gc2V0UGxheWVyMShldmVudC50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICAgIHZhbHVlPXtwbGF5ZXIxfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICB7IWlzUGxheWVyT25lICYmIChcbiAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8bGFiZWw+RW50ZXIgcGxheWVyIDI6PC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgcGxheWVyIHR3byBuYW1lXCJcbiAgICAgICAgICAgICAgICAgIG5hbWU9XCJwbGF5ZXItMlwiXG4gICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17cGxheWVyMn1cbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+IHNldFBsYXllcjIoZXZlbnQudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICl9XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWN0aW9uXCI+XG4gICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPlxuICAgICAgICAgICAgICAgIHtwcmV2aW91c1BsYXllclggfHwgcHJldmlvdXNQbGF5ZXJPID8gXCJDb250aW51ZVwiIDogXCJTdGFydFwifSBnYW1lXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9mb3JtPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvbWFpbj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJ1c2VDb250ZXh0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJIZWFkIiwidXNlUm91dGVyIiwiR2FtZUNvbnRleHQiLCJIb21lIiwicm91dGVyIiwic2V0UGxheWVycyIsInNldFBsYXllcnNOYW1lIiwicGxheWVyc05hbWUiLCJpc1BsYXllck9uZSIsInNldElzUGxheWVyT25lIiwicHJldmlvdXNQbGF5ZXJYIiwiWCIsInByZXZpb3VzUGxheWVyTyIsIk8iLCJwbGF5ZXIxIiwic2V0UGxheWVyMSIsInBsYXllcjIiLCJzZXRQbGF5ZXIyIiwiaGFuZGxlUGxheWVyVHlwZSIsImV2dCIsInRhcmdldCIsInZhbHVlIiwiaGFuZGxlU3VibWl0IiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJwdXNoIiwiZGl2IiwiY2xhc3NOYW1lIiwidGl0bGUiLCJtZXRhIiwibmFtZSIsImNvbnRlbnQiLCJsaW5rIiwicmVsIiwiaHJlZiIsIm1haW4iLCJpZCIsIm9uU3VibWl0IiwiaDMiLCJmb3JtIiwibGFiZWwiLCJzZWxlY3QiLCJvbkNoYW5nZSIsIm9wdGlvbiIsImlucHV0IiwicGxhY2Vob2xkZXIiLCJ0eXBlIiwiYnV0dG9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.tsx\n"));

/***/ })

});