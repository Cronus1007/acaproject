/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/style.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/binnodes.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/binnodes.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \".binnode {\\n    display: inline-block;\\n    white-space: nowrap;\\n    position: absolute;\\n    min-width: var(--normal-outer-w);\\n    height: var(--normal-outer-h);\\n    line-height: var(--normal-inner-h);\\n    padding: 7px;\\n    border-width: var(--normal-bdwidth);\\n    border-style: solid;\\n    border-radius: 10px;\\n    border-color: var(--normal-bdcolor);\\n    /* 居中 */\\n    transform: translate(-50%, -50%);\\n    font-family: \\\"Arial\\\", \\\"Microsoft YaHei\\\", \\\"黑体\\\", \\\"宋体\\\", sans-serif;\\n    font-size: var(--normal-font-size);\\n    font-weight: bold;\\n    text-align: center;\\n    text-shadow: var(--normal-numcolor);\\n    background-color: var(--normal-bgcolor);\\n    color: var(--normal-numcolor);\\n    z-index: 1;\\n}\\n\\n.normal-color-node {\\n    color: var(--normal-numcolor);\\n}\\n\\n.red-node {\\n    color: var(--red-color);\\n}\\n\\n.black-node {\\n    color: var(--black-color);\\n}\\n\\n.extr-binnode {\\n    z-index: 0;\\n    opacity: 0.1;\\n}\\n\\n.extr-binnode:hover {\\n    opacity: 0.5;\\n    z-index: 10;\\n}\\n\\n.binnode-input {\\n    min-width: var(--normal-inner-w);\\n    height: var(--normal-inner-h);\\n    border: none;\\n    outline: none;\\n    text-align: center;\\n    line-height: var(--normal-inner-h);\\n    font-size: var(--normal-font-size);\\n}\\n\\n.active-node {\\n    border-color: var(--active-color) !important;\\n}\\n\\n.visited-node {\\n    border-color: var(--visited-color) !important;\\n    background: rgba(236, 240, 241, 0.5);\\n}\\n\\n.deprecated-node {\\n    color: var(--deprecated-color) !important;\\n    border-color: var(--deprecated-color) !important;\\n}\\n\\n.node-upper-btn, .node-left-btn {\\n    position: absolute;\\n    top: -20px;\\n    font-size: 19px;\\n    line-height: 20px;\\n    width: 15px;\\n    height: 20px;\\n    text-align: center;\\n    color: grey;\\n    opacity: 0;\\n    cursor: pointer;\\n    z-index: 3;\\n}\\n\\n.binnode:hover {\\n    text-shadow: 0px 0px 1px;\\n    box-shadow: 0 0 5px;\\n}\\n\\n.binnode:hover .node-upper-btn, .binnode:hover .node-left-btn {\\n    opacity: 0.5;\\n}\\n\\n.subtree-delete-btn {\\n    right: 0px;\\n}\\n\\n.subtree-delete-btn:hover {\\n    opacity: 1 !important;\\n    color: red;\\n}\\n\\n.node-delete-btn {\\n    left: 0px;\\n}\\n\\n.node-delete-btn:hover {\\n    opacity: 1 !important;\\n    color: blue;\\n}\\n\\n.node-upper-btn:active, .node-left-btn:active {\\n    text-shadow: 0 0 1px;\\n}\\n\\n#top-function-node {\\n    position: absolute;\\n    top: -140px;\\n    transform: translate(-50%, -50%);\\n    color: gray;\\n    border-color: gray;\\n}\\n\\n.top-proper-btn {\\n    left: -20px;\\n}\\n\\n.top-proper-btn:hover {\\n    opacity: 1 !important;\\n}\\n\\n.top-build-btn {\\n    left: 0;\\n}\\n\\n.top-build-btn:hover {\\n    color: red;\\n    opacity: 1 !important;\\n}\\n\\n.top-insert-btn {\\n    left: 50%;\\n    transform: translateX(-50%);\\n}\\n\\n.top-insert-btn:hover {\\n    color: blue;\\n    opacity: 1 !important;\\n}\\n\\n.top-search-btn {\\n    right: 0;\\n}\\n\\n.top-search-btn:hover {\\n    color: black;\\n    opacity: 1 !important;\\n}\\n\\n.node-left-btn {\\n    left: -20px;\\n}\\n\\n.top-help-btn {\\n    top: 10px;\\n}\\n\\n.top-help-btn:hover {\\n    color: blue;\\n    opacity: 1 !important;\\n}\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/css/binnodes.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/button.css":
/*!******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/button.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \".btn {\\n    border: none;\\n    border-radius: 5px;\\n    outline: none;\\n    padding: 5px 10px;\\n    height: 40px;\\n    cursor: pointer;\\n    font-size: 16px;\\n}\\n\\n.btn:active {\\n    transform: scale(0.99);\\n    transform-origin: left;\\n}\\n\\n.btn-default:hover {\\n    box-shadow: 0 0 1px 1px gray;\\n}\\n\\n.btn-trans {\\n    background: none;\\n    border: 1px solid snow;\\n    color: snow;\\n    transition: background-color 0.3s, color 0.3s;\\n}\\n\\n.btn-trans:hover {\\n    background-color: snow;\\n    color: black;\\n}\\n\\n.btn-primary {\\n    background-color: #0984e3;\\n    color: snow;\\n}\\n\\n.btn-primary:hover {\\n    background-color: #0652DD;\\n    /* Dutch MERCHANT MARINE BLUE */\\n    box-shadow: 0 0 5px 0 #0652DD;\\n    text-shadow: 0 0 1px whitesmoke;\\n}\\n\\n.btn-primary:active {\\n    box-shadow: 0 0 2px 1px #0652DD;\\n    color: #ecf0f1;\\n}\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/css/button.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/edges.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/edges.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \".left-edge {\\n    position: absolute;\\n    border-width: var(--normal-edgewidth) 0 0 var(--normal-edgewidth);\\n    border-style: solid;\\n    border-color: var(--normal-edgecolor);\\n    border-radius: 3px;\\n    z-index: -1;\\n}\\n\\n.right-edge {\\n    position: absolute;\\n    border-width: var(--normal-edgewidth) var(--normal-edgewidth) 0 0;\\n    border-style: solid;\\n    border-color: var(--normal-edgecolor);\\n    border-radius: 3px;\\n    z-index: -1;\\n}\\n\\n.extr-edge {\\n    opacity: 0.1;\\n}\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/css/edges.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/index.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/index.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \"* {\\n    padding: 0;\\n    margin: 0;\\n    box-sizing: border-box;\\n    -webkit-touch-callout: none;\\n    /*系统默认菜单被禁用*/\\n    -webkit-user-select: none;\\n    /*webkit浏览器*/\\n    -khtml-user-select: none;\\n    /*早期浏览器*/\\n    -moz-user-select: none;\\n    /*火狐*/\\n    -ms-user-select: none;\\n    /*IE10*/\\n    user-select: none;\\n}\\n\\nhtml, body {\\n    width: 100%;\\n    height: 100%;\\n    min-width: 300px;\\n    position: relative;\\n}\\n\\n:root {\\n    --normal-inner-h: 40px;\\n    --normal-outer-h: 60px;\\n    --normal-inner-w: 40px;\\n    --normal-outer-w: 60px;\\n    --normal-font-size: 25px;\\n    --normal-bdwidth: 3px;\\n    --normal-edgewidth: 3px;\\n    --normal-numcolor: rgba(30, 144, 255, 1.0);\\n    --normal-bdcolor: rgba(30, 144, 255, 1.0);\\n    --normal-bgcolor: white;\\n    --normal-edgecolor: rgba(87, 96, 111, 1.0);\\n    --active-color: rgba(253, 121, 168, 1.0);\\n    --visited-color: gray;\\n    --deprecated-color: rgba(253, 203, 110, 1.0);\\n    --red-color: red;\\n    --black-color: black;\\n}\\n\\n#TreePlayground {\\n    position: relative;\\n    width: 100%;\\n    height: 100%;\\n    z-index: 0;\\n}\\n\\n.tree {\\n    position: absolute;\\n    width: 50px;\\n    left: 50%;\\n    top: 300px;\\n    z-index: 10;\\n}\\n\\n.tree-dragging-btn {\\n    display: block;\\n    width: 35px;\\n    height: 35px;\\n    border: 2px dashed black;\\n    border-radius: 30%;\\n    position: absolute;\\n    top: -80px;\\n    transform: translate(-50%, -50%);\\n    transform-origin: 50% 80px;\\n    cursor: move;\\n    opacity: 0.5;\\n}\\n\\n.tree-dragging-btn::after {\\n    content: \\\"\\\";\\n    display: block;\\n    width: 0px;\\n    height: 31px;\\n    border: 2px solid black;\\n    position: relative;\\n    top: 100%;\\n    left: 50%;\\n    transform: translateX(-50%);\\n    opacity: 0.5;\\n}\\n\\n@keyframes shake {\\n    10% {\\n        transform: translate(-50%, -50%) rotate(-5deg);\\n    }\\n    20% {\\n        transform: translate(-50%, -50%) rotate(5deg);\\n    }\\n    40% {\\n        transform: translate(-50%, -50%) rotate(-3deg);\\n    }\\n    60% {\\n        transform: translate(-50%, -50%) rotate(3deg);\\n    }\\n}\\n\\n.tree-dragging-btn:hover {\\n    animation: shake 1s;\\n    opacity: 1;\\n}\\n\\n.left-message {\\n    position: absolute;\\n    right: 93px;\\n    top: -95px;\\n    font-size: 24px;\\n    color: gray;\\n    white-space: nowrap;\\n}\\n\\n.right-message {\\n    position: absolute;\\n    left: 40px;\\n    top: -95px;\\n    font-size: 24px;\\n    color: gray;\\n    white-space: nowrap;\\n}\\n\\n.loading::after {\\n    display: inline-block;\\n    overflow: hidden;\\n    vertical-align: bottom;\\n    content: \\\"\\\\2026\\\";\\n    animation: loading-ellipsis 2s infinite;\\n}\\n\\n@keyframes loading-ellipsis {\\n    from {\\n        width: 2px;\\n    }\\n    to {\\n        width: 20px;\\n    }\\n}\\n\\n#footer {\\n    font-size: 14px;\\n    z-index: 1;\\n    color: gray;\\n}\\n\\n/* Pad */\\n\\n@media screen and (max-width: 768px) {\\n    .tree {\\n        top: 350px;\\n    }\\n    .tree-dragging-btn {\\n        width: 50px;\\n        height: 50px;\\n    }\\n    .tree-dragging-btn::after {\\n        height: 25px;\\n    }\\n}\\n\\n@media screen and (max-width: 376px) {\\n    #footer, #header {\\n        font-size: 10px;\\n    }\\n}\\n\\n/* Horizontally */\\n\\n@media screen and (max-height: 500px) {\\n    .tree {\\n        top: 200px;\\n    }\\n    #footer, #header {\\n        font-size: 10px;\\n    }\\n}\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/css/index.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/toolbars.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/toolbars.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \".top-toolbar {\\n    position: fixed;\\n    display: flex;\\n    justify-content: center;\\n    align-items: center;\\n    margin-top: 25px;\\n    height: 50px;\\n    width: 100vw;\\n}\\n\\n.top-toolbar-item {\\n    margin: 1px 10px;\\n}\\n\\n.top-toolbar button {\\n    width: 85px;\\n}\\n\\n#interval-ranger {\\n    width: 120px;\\n    display: inline-block;\\n    vertical-align: baseline;\\n}\\n\\n#interval-ranger span {\\n    white-space: nowrap;\\n    font-weight: bold;\\n}\\n\\n#interval-ranger input {\\n    width: 100%;\\n}\\n\\n.left-toolbar {\\n    position: fixed;\\n    display: flex;\\n    flex-direction: column;\\n    justify-content: space-between;\\n    align-items: center;\\n    top: 150px;\\n    left: 50px;\\n    width: 100px;\\n}\\n\\n.left-toolbar #tree-type-selector {\\n    width: 100%;\\n    height: 40px;\\n    margin-top: 10px;\\n    margin-bottom: 60px;\\n    padding: 6px 4px;\\n    font-size: 16px;\\n    border-radius: 5px;\\n    outline: none;\\n}\\n\\n.left-toolbar button {\\n    width: 100%;\\n}\\n\\n.left-toolbar #tree-scale-ranger {\\n    width: 100%;\\n    align-self: center;\\n}\\n\\n.left-toolbar #tree-scale-ranger input {\\n    transform: rotate(-90deg);\\n    transform-origin: bottom;\\n    position: relative;\\n    left: -15px;\\n    width: 150px;\\n    display: inline-block;\\n}\\n\\n.left-toolbar #tree-scale-ranger h4 {\\n    text-align: center;\\n    display: block;\\n    position: relative;\\n    top: 130px;\\n    white-space: nowrap;\\n}\\n\\n/* Pad */\\n@media screen and (max-width: 768px) {\\n    .top-toolbar {\\n        flex-wrap: wrap;\\n        justify-content: left;\\n        width: 350px;\\n        left: 50%;\\n        transform: translateX(-50%);\\n        transform-origin: top;\\n    }\\n    #interval-ranger {\\n        width: 110px;\\n    }\\n    .left-toolbar {\\n        width: 350px;\\n        padding: 0;\\n        left: 50%;\\n        top: 112px;\\n        transform: translateX(-50%);\\n        transform-origin: top;\\n        height: 50px;\\n        flex-direction: row;\\n        justify-content: left;\\n        align-items: center;\\n    }\\n    .left-toolbar-item {\\n        margin: 5px 10px;\\n    }\\n    .left-toolbar button {\\n        width: 85px;\\n    }\\n    .left-toolbar #tree-type-selector {\\n        width: 85px;\\n        height: 35px;\\n        margin: 0 10px;\\n    }\\n    .left-toolbar #tree-scale-ranger {\\n        width: 110px;\\n    }\\n    .left-toolbar #tree-scale-ranger input {\\n        width: 100%;\\n        left: 0;\\n        transform: none;\\n    }\\n    .left-toolbar #tree-scale-ranger h4 {\\n        top: 0;\\n    }\\n}\\n\\n/* Phone */\\n@media screen and (max-width: 376px) {\\n    .top-toolbar {\\n        width: 300px;\\n    }\\n    .top-toolbar-item {\\n        margin: 0px 5px;\\n    }\\n    #interval-ranger {\\n        width: 100px;\\n    }\\n    .left-toolbar {\\n        width: 300px;\\n        top: 106px;\\n    }\\n    .left-toolbar-item {\\n        margin: 5px 5px;\\n    }\\n    .left-toolbar #tree-scale-ranger {\\n        width: 100px;\\n    }\\n}\\n\\n/* Horizontally */\\n@media screen and (max-height: 500px) and (min-width: 768px) {\\n    .left-toolbar {\\n        left: 20px;\\n        top: 100px;\\n    }\\n    .left-toolbar #tree-scale-ranger input {\\n        width: 100px;\\n        left: 5px;\\n        top: -40px;\\n    }\\n    .left-toolbar #tree-scale-ranger h4 {\\n        top: 60px;\\n    }\\n}\\n\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/css/toolbars.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\n\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return \"/*# sourceURL=\".concat(cssMapping.sourceRoot || '').concat(source, \" */\");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n  return \"/*# \".concat(data, \" */\");\n}\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : undefined;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && btoa) {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/css/binnodes.css":
/*!******************************!*\
  !*** ./src/css/binnodes.css ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!./binnodes.css */ \"./node_modules/css-loader/dist/cjs.js!./src/css/binnodes.css\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\nvar exported = content.locals ? content.locals : {};\n\n\n\nmodule.exports = exported;\n\n//# sourceURL=webpack:///./src/css/binnodes.css?");

/***/ }),

/***/ "./src/css/button.css":
/*!****************************!*\
  !*** ./src/css/button.css ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!./button.css */ \"./node_modules/css-loader/dist/cjs.js!./src/css/button.css\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\nvar exported = content.locals ? content.locals : {};\n\n\n\nmodule.exports = exported;\n\n//# sourceURL=webpack:///./src/css/button.css?");

/***/ }),

/***/ "./src/css/edges.css":
/*!***************************!*\
  !*** ./src/css/edges.css ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!./edges.css */ \"./node_modules/css-loader/dist/cjs.js!./src/css/edges.css\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\nvar exported = content.locals ? content.locals : {};\n\n\n\nmodule.exports = exported;\n\n//# sourceURL=webpack:///./src/css/edges.css?");

/***/ }),

/***/ "./src/css/index.css":
/*!***************************!*\
  !*** ./src/css/index.css ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!./index.css */ \"./node_modules/css-loader/dist/cjs.js!./src/css/index.css\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\nvar exported = content.locals ? content.locals : {};\n\n\n\nmodule.exports = exported;\n\n//# sourceURL=webpack:///./src/css/index.css?");

/***/ }),

/***/ "./src/css/toolbars.css":
/*!******************************!*\
  !*** ./src/css/toolbars.css ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!./toolbars.css */ \"./node_modules/css-loader/dist/cjs.js!./src/css/toolbars.css\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\nvar exported = content.locals ? content.locals : {};\n\n\n\nmodule.exports = exported;\n\n//# sourceURL=webpack:///./src/css/toolbars.css?");

/***/ }),

/***/ "./src/style.js":
/*!**********************!*\
  !*** ./src/style.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/index.css */ \"./src/css/index.css\");\n/* harmony import */ var _css_index_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_index_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _css_button_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./css/button.css */ \"./src/css/button.css\");\n/* harmony import */ var _css_button_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_button_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _css_toolbars_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./css/toolbars.css */ \"./src/css/toolbars.css\");\n/* harmony import */ var _css_toolbars_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_css_toolbars_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _css_binnodes_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./css/binnodes.css */ \"./src/css/binnodes.css\");\n/* harmony import */ var _css_binnodes_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_css_binnodes_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _css_edges_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./css/edges.css */ \"./src/css/edges.css\");\n/* harmony import */ var _css_edges_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_css_edges_css__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\n\n//# sourceURL=webpack:///./src/style.js?");

/***/ })

/******/ });