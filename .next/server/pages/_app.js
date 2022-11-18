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

/***/ "./contexts/game.tsx":
/*!***************************!*\
  !*** ./contexts/game.tsx ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"GameContext\": () => (/* binding */ GameContext),\n/* harmony export */   \"GameProvider\": () => (/* binding */ GameProvider)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst GameContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({\n    players: {\n        player1: \"\",\n        player2: \"\"\n    },\n    isPlayerOne: false,\n    setPlayers: ()=>{},\n    setIsPlayerOne: ()=>{},\n    setPlayersName: ()=>{},\n    setWinner: ()=>{},\n    gameHistory: [],\n    setGameHistory: ()=>{}\n});\nconst GameProvider = ({ children  })=>{\n    const [players, setPlayers] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});\n    const [isPlayerOne, setIsPlayerOne] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [gameHistory, setGameHistory] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const player1 = localStorage.getItem(\"X\") || \"\";\n        const player2 = localStorage.getItem(\"O\") || \"\";\n        const isPlayerOne = !!localStorage.getItem(\"isPlayerOne\");\n        setIsPlayerOne(isPlayerOne);\n        setPlayers({\n            player1: player1 ? \"X\" : \"O\",\n            player2: player2 ? \"O\" : \"X\"\n        });\n        setPlayersName({\n            X: player1,\n            O: player2\n        });\n    }, []);\n    const [playersName, setPlayersName] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        X: \"\",\n        O: \"\"\n    });\n    const [winner, setWinner] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(GameContext.Provider, {\n        value: {\n            isPlayerOne,\n            setIsPlayerOne,\n            players,\n            setPlayers,\n            winner,\n            setWinner,\n            playersName,\n            gameHistory,\n            setGameHistory,\n            setPlayersName\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"/Users/oluwagbemikadri/Desktop/tic-tac-toe/contexts/game.tsx\",\n        lineNumber: 54,\n        columnNumber: 5\n    }, undefined);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb250ZXh0cy9nYW1lLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUEyRDtBQVFwRCxNQUFNRyw0QkFBY0gsb0RBQWFBLENBQXVCO0lBQzdESSxTQUFTO1FBQ1BDLFNBQVM7UUFDVEMsU0FBUztJQUNYO0lBQ0FDLGFBQWEsS0FBSztJQUNsQkMsWUFBWSxJQUFNLENBQUM7SUFDbkJDLGdCQUFnQixJQUFNLENBQUM7SUFDdkJDLGdCQUFnQixJQUFNLENBQUM7SUFDdkJDLFdBQVcsSUFBTSxDQUFDO0lBQ2xCQyxhQUFhLEVBQUU7SUFDZkMsZ0JBQWdCLElBQU0sQ0FBQztBQUN6QixHQUFHO0FBRUksTUFBTUMsZUFBZSxDQUFDLEVBQUVDLFNBQVEsRUFBb0IsR0FBSztJQUM5RCxNQUFNLENBQUNYLFNBQVNJLFdBQVcsR0FBR1AsK0NBQVFBLENBQUMsQ0FBQztJQUN4QyxNQUFNLENBQUNNLGFBQWFFLGVBQWUsR0FBR1IsK0NBQVFBLENBQUMsS0FBSztJQUNwRCxNQUFNLENBQUNXLGFBQWFDLGVBQWUsR0FBR1osK0NBQVFBLENBQWdCLEVBQUU7SUFFaEVDLGdEQUFTQSxDQUFDLElBQU07UUFDZCxNQUFNRyxVQUFVVyxhQUFhQyxPQUFPLENBQUMsUUFBUTtRQUM3QyxNQUFNWCxVQUFVVSxhQUFhQyxPQUFPLENBQUMsUUFBUTtRQUM3QyxNQUFNVixjQUFjLENBQUMsQ0FBQ1MsYUFBYUMsT0FBTyxDQUFDO1FBRTNDUixlQUFlRjtRQUVmQyxXQUFXO1lBQ1RILFNBQVNBLFVBQVUsTUFBTSxHQUFHO1lBQzVCQyxTQUFTQSxVQUFVLE1BQU0sR0FBRztRQUM5QjtRQUVBSSxlQUFlO1lBQ2JRLEdBQUdiO1lBQ0hjLEdBQUdiO1FBQ0w7SUFDRixHQUFHLEVBQUU7SUFFTCxNQUFNLENBQUNjLGFBQWFWLGVBQWUsR0FBR1QsK0NBQVFBLENBQUM7UUFDN0NpQixHQUFHO1FBQ0hDLEdBQUc7SUFDTDtJQUVBLE1BQU0sQ0FBQ0UsUUFBUVYsVUFBVSxHQUFHViwrQ0FBUUEsQ0FBQztJQUVyQyxxQkFDRSw4REFBQ0UsWUFBWW1CLFFBQVE7UUFDbkJDLE9BQU87WUFDTGhCO1lBQ0FFO1lBQ0FMO1lBQ0FJO1lBQ0FhO1lBQ0FWO1lBQ0FTO1lBQ0FSO1lBQ0FDO1lBQ0FIO1FBQ0Y7a0JBRUNLOzs7Ozs7QUFHUCxFQUFFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dC8uL2NvbnRleHRzL2dhbWUudHN4P2Y0MjgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlQ29udGV4dCwgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuXG5pbXBvcnQge1xuICBHYW1lQ29udGV4dEludGVyZmFjZSxcbiAgR2FtZUNvbnRleHRQcm9wcyxcbiAgR2FtZUhpc3RvcnksXG59IGZyb20gXCIuLi90eXBlcy9nYW1lXCI7XG5cbmV4cG9ydCBjb25zdCBHYW1lQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQ8R2FtZUNvbnRleHRJbnRlcmZhY2U+KHtcbiAgcGxheWVyczoge1xuICAgIHBsYXllcjE6IFwiXCIsXG4gICAgcGxheWVyMjogXCJcIixcbiAgfSxcbiAgaXNQbGF5ZXJPbmU6IGZhbHNlLFxuICBzZXRQbGF5ZXJzOiAoKSA9PiB7fSxcbiAgc2V0SXNQbGF5ZXJPbmU6ICgpID0+IHt9LFxuICBzZXRQbGF5ZXJzTmFtZTogKCkgPT4ge30sXG4gIHNldFdpbm5lcjogKCkgPT4ge30sXG4gIGdhbWVIaXN0b3J5OiBbXSxcbiAgc2V0R2FtZUhpc3Rvcnk6ICgpID0+IHt9LFxufSk7XG5cbmV4cG9ydCBjb25zdCBHYW1lUHJvdmlkZXIgPSAoeyBjaGlsZHJlbiB9OiBHYW1lQ29udGV4dFByb3BzKSA9PiB7XG4gIGNvbnN0IFtwbGF5ZXJzLCBzZXRQbGF5ZXJzXSA9IHVzZVN0YXRlKHt9KTtcbiAgY29uc3QgW2lzUGxheWVyT25lLCBzZXRJc1BsYXllck9uZV0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtnYW1lSGlzdG9yeSwgc2V0R2FtZUhpc3RvcnldID0gdXNlU3RhdGU8R2FtZUhpc3RvcnlbXT4oW10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgcGxheWVyMSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiWFwiKSB8fCBcIlwiO1xuICAgIGNvbnN0IHBsYXllcjIgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIk9cIikgfHwgXCJcIjtcbiAgICBjb25zdCBpc1BsYXllck9uZSA9ICEhbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJpc1BsYXllck9uZVwiKTtcblxuICAgIHNldElzUGxheWVyT25lKGlzUGxheWVyT25lKTtcblxuICAgIHNldFBsYXllcnMoe1xuICAgICAgcGxheWVyMTogcGxheWVyMSA/IFwiWFwiIDogXCJPXCIsXG4gICAgICBwbGF5ZXIyOiBwbGF5ZXIyID8gXCJPXCIgOiBcIlhcIixcbiAgICB9KTtcblxuICAgIHNldFBsYXllcnNOYW1lKHtcbiAgICAgIFg6IHBsYXllcjEsXG4gICAgICBPOiBwbGF5ZXIyLFxuICAgIH0pO1xuICB9LCBbXSk7XG5cbiAgY29uc3QgW3BsYXllcnNOYW1lLCBzZXRQbGF5ZXJzTmFtZV0gPSB1c2VTdGF0ZSh7XG4gICAgWDogXCJcIixcbiAgICBPOiBcIlwiLFxuICB9KTtcblxuICBjb25zdCBbd2lubmVyLCBzZXRXaW5uZXJdID0gdXNlU3RhdGUoXCJcIik7XG5cbiAgcmV0dXJuIChcbiAgICA8R2FtZUNvbnRleHQuUHJvdmlkZXJcbiAgICAgIHZhbHVlPXt7XG4gICAgICAgIGlzUGxheWVyT25lLFxuICAgICAgICBzZXRJc1BsYXllck9uZSxcbiAgICAgICAgcGxheWVycyxcbiAgICAgICAgc2V0UGxheWVycyxcbiAgICAgICAgd2lubmVyLFxuICAgICAgICBzZXRXaW5uZXIsXG4gICAgICAgIHBsYXllcnNOYW1lLFxuICAgICAgICBnYW1lSGlzdG9yeSxcbiAgICAgICAgc2V0R2FtZUhpc3RvcnksXG4gICAgICAgIHNldFBsYXllcnNOYW1lLFxuICAgICAgfX1cbiAgICA+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9HYW1lQ29udGV4dC5Qcm92aWRlcj5cbiAgKTtcbn07XG4iXSwibmFtZXMiOlsiY3JlYXRlQ29udGV4dCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiR2FtZUNvbnRleHQiLCJwbGF5ZXJzIiwicGxheWVyMSIsInBsYXllcjIiLCJpc1BsYXllck9uZSIsInNldFBsYXllcnMiLCJzZXRJc1BsYXllck9uZSIsInNldFBsYXllcnNOYW1lIiwic2V0V2lubmVyIiwiZ2FtZUhpc3RvcnkiLCJzZXRHYW1lSGlzdG9yeSIsIkdhbWVQcm92aWRlciIsImNoaWxkcmVuIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsIlgiLCJPIiwicGxheWVyc05hbWUiLCJ3aW5uZXIiLCJQcm92aWRlciIsInZhbHVlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./contexts/game.tsx\n");

/***/ }),

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/main.scss */ \"./styles/main.scss\");\n/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_main_scss__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _contexts_game__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../contexts/game */ \"./contexts/game.tsx\");\n\n\n\nfunction App({ Component , pageProps  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_contexts_game__WEBPACK_IMPORTED_MODULE_2__.GameProvider, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n            ...pageProps\n        }, void 0, false, {\n            fileName: \"/Users/oluwagbemikadri/Desktop/tic-tac-toe/pages/_app.tsx\",\n            lineNumber: 9,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/oluwagbemikadri/Desktop/tic-tac-toe/pages/_app.tsx\",\n        lineNumber: 8,\n        columnNumber: 5\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUE2QjtBQUNtQjtBQUlqQyxTQUFTQyxJQUFJLEVBQUVDLFVBQVMsRUFBRUMsVUFBUyxFQUFZLEVBQUU7SUFDOUQscUJBQ0UsOERBQUNILHdEQUFZQTtrQkFDWCw0RUFBQ0U7WUFBVyxHQUFHQyxTQUFTOzs7Ozs7Ozs7OztBQUc5QixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dC8uL3BhZ2VzL19hcHAudHN4PzJmYmUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFwiLi4vc3R5bGVzL21haW4uc2Nzc1wiO1xuaW1wb3J0IHsgR2FtZVByb3ZpZGVyIH0gZnJvbSBcIi4uL2NvbnRleHRzL2dhbWVcIjtcblxuaW1wb3J0IHR5cGUgeyBBcHBQcm9wcyB9IGZyb20gXCJuZXh0L2FwcFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9OiBBcHBQcm9wcykge1xuICByZXR1cm4gKFxuICAgIDxHYW1lUHJvdmlkZXI+XG4gICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgPC9HYW1lUHJvdmlkZXI+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiR2FtZVByb3ZpZGVyIiwiQXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

/***/ }),

/***/ "./styles/main.scss":
/*!**************************!*\
  !*** ./styles/main.scss ***!
  \**************************/
/***/ (() => {



/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

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
var __webpack_exports__ = (__webpack_exec__("./pages/_app.tsx"));
module.exports = __webpack_exports__;

})();