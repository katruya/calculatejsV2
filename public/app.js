/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/App.js":
/*!*******************************!*\
  !*** ./src/components/App.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _CalculatorBtn_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CalculatorBtn.js */ \"./src/components/CalculatorBtn.js\");\n/* harmony import */ var _OutputArea_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./OutputArea.js */ \"./src/components/OutputArea.js\");\n\n\n\nconst App = function () {\n    return `${(0,_OutputArea_js__WEBPACK_IMPORTED_MODULE_1__.default)()}\n            <div class=\"col\">\n                <div class=\"row\">\n                    ${(0,_CalculatorBtn_js__WEBPACK_IMPORTED_MODULE_0__.default)('7', 'seven')}\n                    ${(0,_CalculatorBtn_js__WEBPACK_IMPORTED_MODULE_0__.default)('8', 'eight')}\n                    ${(0,_CalculatorBtn_js__WEBPACK_IMPORTED_MODULE_0__.default)('9', 'nine')}\n                    ${(0,_CalculatorBtn_js__WEBPACK_IMPORTED_MODULE_0__.default)('/', 'divide')}\n                </div>\n                <div class=\"row\">\n                    ${(0,_CalculatorBtn_js__WEBPACK_IMPORTED_MODULE_0__.default)('4', 'four')}\n                    ${(0,_CalculatorBtn_js__WEBPACK_IMPORTED_MODULE_0__.default)('5', 'five')}\n                    ${(0,_CalculatorBtn_js__WEBPACK_IMPORTED_MODULE_0__.default)('6', 'six')}\n                    ${(0,_CalculatorBtn_js__WEBPACK_IMPORTED_MODULE_0__.default)('x', 'multiply')}\n                </div>\n                <div class=\"row\">\n                    ${(0,_CalculatorBtn_js__WEBPACK_IMPORTED_MODULE_0__.default)('1', 'one')}\n                    ${(0,_CalculatorBtn_js__WEBPACK_IMPORTED_MODULE_0__.default)('2', 'two')}\n                    ${(0,_CalculatorBtn_js__WEBPACK_IMPORTED_MODULE_0__.default)('3', 'three')}\n                    ${(0,_CalculatorBtn_js__WEBPACK_IMPORTED_MODULE_0__.default)('-', 'subtract')}\n                </div>\n                <div class=\"row\">\n                    ${(0,_CalculatorBtn_js__WEBPACK_IMPORTED_MODULE_0__.default)('0', 'zero')}\n                    ${(0,_CalculatorBtn_js__WEBPACK_IMPORTED_MODULE_0__.default)('.', 'decimal')}\n                    ${(0,_CalculatorBtn_js__WEBPACK_IMPORTED_MODULE_0__.default)('=', 'equals')}\n                    ${(0,_CalculatorBtn_js__WEBPACK_IMPORTED_MODULE_0__.default)('+', 'plus')}\n                </div>\n            </div>`;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);\n\n\n//# sourceURL=webpack://calculatejs/./src/components/App.js?");

/***/ }),

/***/ "./src/components/CalculatorBtn.js":
/*!*****************************************!*\
  !*** ./src/components/CalculatorBtn.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst CalculatorBtn = function(text, id) {\n    return `<div id=\"${id}\" class=\"col btn btn-success btn-outline-dark\">\n                ${text}\n            </div>`;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CalculatorBtn);\n\n//# sourceURL=webpack://calculatejs/./src/components/CalculatorBtn.js?");

/***/ }),

/***/ "./src/components/OutputArea.js":
/*!**************************************!*\
  !*** ./src/components/OutputArea.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst OutputArea = function() {\n    return `\n        <div id=\"history\" class=\"col\">\n        </div>\n        <div id=\"mem-out\" class=\"col\">\n        </div>\n        <div id=\"out\" class=\"row\">\n            <h1>0</h1>\n        </div>\n    `;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (OutputArea);\n\n//# sourceURL=webpack://calculatejs/./src/components/OutputArea.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_App_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/App.js */ \"./src/components/App.js\");\n/* harmony import */ var _logic_button_handler_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./logic/button_handler.js */ \"./src/logic/button_handler.js\");\n\n\n\n\n(function () {\n    let app = document.getElementById('app');\n    app.innerHTML.append((0,_components_App_js__WEBPACK_IMPORTED_MODULE_0__.default)()); // load app into DOM\n\n    console.log(app.innerHTML); // debugging\n\n    // event listeners\n    $(document).ready(function () { \n        $('#zero').click(function (e) { \n            e.preventDefault();\n            (0,_logic_button_handler_js__WEBPACK_IMPORTED_MODULE_1__.zero)();\n            console.log('0 clicked');\n        });\n    \n        $('#one').click(function (e) { \n            e.preventDefault();\n            (0,_logic_button_handler_js__WEBPACK_IMPORTED_MODULE_1__.one)();\n            console.log('1 clicked');\n        });\n    });\n\n})();\n\n\n\n//# sourceURL=webpack://calculatejs/./src/index.js?");

/***/ }),

/***/ "./src/logic/button_handler.js":
/*!*************************************!*\
  !*** ./src/logic/button_handler.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"zero\": () => (/* binding */ zero),\n/* harmony export */   \"one\": () => (/* binding */ one),\n/* harmony export */   \"two\": () => (/* binding */ two),\n/* harmony export */   \"three\": () => (/* binding */ three),\n/* harmony export */   \"four\": () => (/* binding */ four),\n/* harmony export */   \"five\": () => (/* binding */ five),\n/* harmony export */   \"six\": () => (/* binding */ six),\n/* harmony export */   \"seven\": () => (/* binding */ seven),\n/* harmony export */   \"eight\": () => (/* binding */ eight),\n/* harmony export */   \"nine\": () => (/* binding */ nine)\n/* harmony export */ });\n/* harmony import */ var _memory_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./memory.js */ \"./src/logic/memory.js\");\n/* harmony import */ var _evaluate_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./evaluate.js */ \"./src/logic/evaluate.js\");\n\n\n\n// Setting up\nlet output = document.getElementById('out');\nlet memoryOutput = document.getElementById('mem-out');\n\nlet memory = new _memory_js__WEBPACK_IMPORTED_MODULE_0__.default();\nlet disk = memory;\nconst placeholderText = '<h1>0</h1>';\n\nconst isDefault = function() {\n    return output.innerHTML == placeholderText;\n}\n\nconst check = (isDefault() || !inputIsValid(memory.getMemory()));\n\n// initializes output in DOM\nconst init = function(symbol, text) {\n    if (check && symbol != '.') {\n        output.innerHTML = text;\n    }\n    else {\n        output.innerHTML += text;\n        memory.update(symbol);\n        disk = memory;\n        memoryOutput.innerHTML = `<h3>[${disk}]</h3>`;\n    }   \n}\n\n// clears the screen\nconst clear = function() {\n    // reset output\n    \n\n    // Save memory to disk  \n    // disk.update(memory.getMemory()); \n    \n    // clear memory & clear memory output\n    //memory.reset();\n    \n}\n\n// handle operations\nconst add = function() {\n\n}\n\nconst subtract = function() {\n\n}\n\nconst multiply = function() {\n\n}\n\nconst divide = function() {\n\n}\n\n// handle clear button\nconst clearOutput = function() {\n    \n}\n\n// handle = button\nconst equal = function() {\n    \n}\n\n// handle . button\nconst decimal = function() {\n    init('.', '<h1>.</h1>');\n}\n\n// handle 0 button\nconst zero = function() {\n    init('0', '<h1>0</h1>');\n}\n// handle 1 button\nconst one = function() {\n    init('1', '<h1>1</h1>');\n}\n\n// handle 2 button\nconst two = function() {\n    init('2', '<h1>2</h1>');\n}\n\n// handle 3 button\nconst three = function() {\n    init('3', '<h1>3</h1>');\n}\n\n// handle 4 button\nconst four = function() {\n    init('4', '<h1>4</h1>');\n}\n\n// handle 5 button\nconst five = function() {  \n    init('5', '<h1>5</h1>')\n}\n\n// handle 6 button\nconst six = function() {\n    init('6', '<h1>6</h1>');\n}\n\n// handle 7 button\nconst seven = function() {\n    init('7', '<h1>7</h1>');\n}\n\n// handle 8 button\nconst eight = function() {\n    init('8', '<h1>8</h1>');\n}\n\n// handle 9 button\nconst nine = function() {\n    init('9', '<h1>9</h1>');\n}\n\n\n\n//# sourceURL=webpack://calculatejs/./src/logic/button_handler.js?");

/***/ }),

/***/ "./src/logic/error_handler.js":
/*!************************************!*\
  !*** ./src/logic/error_handler.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst inputIsValid = function(expression) {\n    try {\n        return !isNaN(eval(expression));\n    } catch (err) {\n        return false;\n    }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (inputIsValid);\n\n//# sourceURL=webpack://calculatejs/./src/logic/error_handler.js?");

/***/ }),

/***/ "./src/logic/evaluate.js":
/*!*******************************!*\
  !*** ./src/logic/evaluate.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _error_handler_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./error_handler.js */ \"./src/logic/error_handler.js\");\n\n\nconst evaluate = function(expression) {\n    return !(0,_error_handler_js__WEBPACK_IMPORTED_MODULE_0__.default)(expression) ? \n           `<h2 class=\"text-danger\">Error - Invalid Syntax</h2>`\n           : eval(expression);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (evaluate);\n\n//# sourceURL=webpack://calculatejs/./src/logic/evaluate.js?");

/***/ }),

/***/ "./src/logic/memory.js":
/*!*****************************!*\
  !*** ./src/logic/memory.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass Memory {\n    constructor(value = '') {\n        this.value = value;\n    }\n\n    getMemory() { return this.value; }\n    toArray() { return this.value.split(''); }\n    update(symbol) { this.value += symbol; }\n    reset() { this.value = ''; }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Memory);\n\n//# sourceURL=webpack://calculatejs/./src/logic/memory.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;