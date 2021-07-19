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

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/tinyslide.scss":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/tinyslide.scss ***!
  \*********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \".tinyslide-ready {\\n  --tinyslide-size:1;\\n  --tinyslide-autoplay:3s;\\n  --tinyslide-speed:1s;\\n  --tinyslide-gutter:0px;\\n  --tinyslide-overflow-size:0px;\\n  --tinyslide-overflow-opacity:0.3;\\n  --tinyslide-btn-width:0px;\\n  --tinyslide-btn-height:100%;\\n  --tinyslide-btn-fontsize:3em;\\n  --tinyslide-btn-pad-h:0px;\\n  --tinyslide-btn-pad-v:0px;\\n  --tinyslide-btn-background:#fff;\\n  --tinyslide-btn-color:#000;\\n  --tinyslide-btn-opacity:0.5;\\n  --tinyslide-btn-hover-speed:.25s;\\n  --tinyslide-btn-hover-background:var(--tinyslide-btn-background);\\n  --tinyslide-btn-hover-color:var(--tinyslide-btn-color);\\n  --tinyslide-btn-hover-opacity:1;\\n  --tinyslide-private-flex-item-extra:2;\\n  --tinyslide-private-flex-item-count:0;\\n  --tinyslide-private-flex-width: calc(\\n  \\t100% * var(--tinyslide-private-flex-item-count) / var(--tinyslide-size)\\n  \\t- 2 * var(--tinyslide-private-flex-item-count) * var(--tinyslide-overflow-size) / var(--tinyslide-size)\\n  \\t+ 1 * var(--tinyslide-private-flex-item-count) * var(--tinyslide-gutter) / var(--tinyslide-size)\\n  );\\n  --tinyslide-private-flex-item-width: calc(100% / var(--tinyslide-private-flex-item-count));\\n  --tinyslide-private-flex-delta: calc(-1 * var(--tinyslide-gutter) / 2 + var(--tinyslide-overflow-size));\\n  width: 100% !important;\\n  box-sizing: border-box;\\n  position: relative;\\n  padding: 0;\\n}\\n.tinyslide-ready .tinyslide-wrapper {\\n  display: block;\\n  width: 100%;\\n  padding: 0;\\n  margin: 0;\\n  overflow: hidden;\\n}\\n.tinyslide-ready .tinyslide-slider {\\n  width: var(--tinyslide-private-flex-width);\\n  transform: translateX(calc(-1 * var(--tinyslide-private-flex-item-extra) * var(--tinyslide-private-flex-item-width) + var(--tinyslide-private-flex-delta)));\\n  display: flex;\\n  flex-direction: row;\\n  flex-wrap: nowrap;\\n  justify-content: center;\\n  overflow: hidden;\\n}\\n.tinyslide-ready .tinyslide-slider > * {\\n  flex: 1 !important;\\n  position: relative;\\n  margin: 0 calc(var(--tinyslide-gutter) / 2) !important;\\n  width: calc(100% / var(--tinyslide-size)) !important;\\n  opacity: 1;\\n  transition: opacity ease var(--tinyslide-speed);\\n}\\n.tinyslide-ready .tinyslide-slider > .out {\\n  opacity: var(--tinyslide-overflow-opacity);\\n}\\n.tinyslide-ready.anim-next .tinyslide-slider > .in-first {\\n  opacity: var(--tinyslide-overflow-opacity);\\n}\\n.tinyslide-ready.anim-next .tinyslide-slider > .out-after {\\n  opacity: 1;\\n}\\n.tinyslide-ready.anim-prev .tinyslide-slider > .in-last {\\n  opacity: var(--tinyslide-overflow-opacity);\\n}\\n.tinyslide-ready.anim-prev .tinyslide-slider > .out-before {\\n  opacity: 1;\\n}\\n.tinyslide-ready.anim-next .tinyslide-slider, .tinyslide-ready.anim-prev .tinyslide-slider {\\n  transition: transform ease var(--tinyslide-speed);\\n}\\n.tinyslide-ready.anim-next .tinyslide-slider {\\n  transform: translateX(calc(-1 * calc(var(--tinyslide-private-flex-item-extra) + 1) * var(--tinyslide-private-flex-item-width) + var(--tinyslide-private-flex-delta)));\\n}\\n.tinyslide-ready.anim-prev .tinyslide-slider {\\n  transform: translateX(calc(-1 * calc(var(--tinyslide-private-flex-item-extra) - 1) * var(--tinyslide-private-flex-item-width) + var(--tinyslide-private-flex-delta)));\\n}\\n.tinyslide-ready .tinyslide-control {\\n  position: absolute;\\n  left: 0;\\n  right: 0;\\n  top: 0;\\n  bottom: 0;\\n  pointer-events: none;\\n}\\n.tinyslide-ready .tinyslide-control .tinyslide-ctrl-prev,\\n.tinyslide-ready .tinyslide-control .tinyslide-ctrl-next {\\n  pointer-events: all;\\n  position: absolute;\\n  align-items: center;\\n  align-content: center;\\n  text-align: center;\\n  outline: none;\\n  cursor: pointer;\\n  border: none;\\n  transition: all ease var(--tinyslide-btn-hover-speed);\\n  opacity: var(--tinyslide-btn-opacity);\\n  --tinyslide-private-btn-height: min(100%, var(--tinyslide-btn-height), calc(100% - 2 * var(--tinyslide-btn-pad-v)));\\n  top: calc(calc(100% - var(--tinyslide-private-btn-height)) / 2);\\n  height: var(--tinyslide-private-btn-height);\\n  width: var(--tinyslide-btn-width);\\n  background: var(--tinyslide-btn-background);\\n  display: flex;\\n  align-items: center;\\n  justify-content: center;\\n  overflow: hidden;\\n}\\n.tinyslide-ready .tinyslide-control .tinyslide-ctrl-prev span,\\n.tinyslide-ready .tinyslide-control .tinyslide-ctrl-next span {\\n  transition: all ease 0.5s;\\n  font-size: var(--tinyslide-btn-fontsize);\\n  color: var(--tinyslide-btn-color);\\n}\\n.tinyslide-ready .tinyslide-control .tinyslide-ctrl-prev:hover,\\n.tinyslide-ready .tinyslide-control .tinyslide-ctrl-next:hover {\\n  opacity: var(--tinyslide-btn-hover-opacity);\\n  background: var(--tinyslide-btn-hover-background);\\n}\\n.tinyslide-ready .tinyslide-control .tinyslide-ctrl-prev:hover span,\\n.tinyslide-ready .tinyslide-control .tinyslide-ctrl-next:hover span {\\n  color: var(--tinyslide-btn-hover-color);\\n}\\n.tinyslide-ready .tinyslide-control .tinyslide-ctrl-prev {\\n  left: var(--tinyslide-btn-pad-h);\\n}\\n.tinyslide-ready .tinyslide-control .tinyslide-ctrl-next {\\n  right: var(--tinyslide-btn-pad-h);\\n}\\n.tinyslide-ready.hide-out-items .out {\\n  opacity: 0;\\n}\\n.tinyslide-ready.hide-out-items .tinyslide-control {\\n  display: none;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://tinyslide/./src/tinyslide.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === \"string\") {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, \"\"]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://tinyslide/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./src/tinyslide.scss":
/*!****************************!*\
  !*** ./src/tinyslide.scss ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_tinyslide_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./tinyslide.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/tinyslide.scss\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_tinyslide_scss__WEBPACK_IMPORTED_MODULE_6__.default, options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_tinyslide_scss__WEBPACK_IMPORTED_MODULE_6__.default && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_tinyslide_scss__WEBPACK_IMPORTED_MODULE_6__.default.locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_tinyslide_scss__WEBPACK_IMPORTED_MODULE_6__.default.locals : undefined);\n\n\n//# sourceURL=webpack://tinyslide/./src/tinyslide.scss?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://tinyslide/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://tinyslide/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var style = document.createElement(\"style\");\n  options.setAttributes(style, options.attributes);\n  options.insert(style);\n  return style;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://tinyslide/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(style) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    style.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://tinyslide/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute(\"media\", media);\n  } else {\n    style.removeAttribute(\"media\");\n  }\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, style);\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var style = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(style, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(style);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://tinyslide/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, style) {\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://tinyslide/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _tinyslide_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tinyslide.js */ \"./src/tinyslide.js\");\n\r\n// exposing the application into the brwoser\r\nwindow.Tinyslide = _tinyslide_js__WEBPACK_IMPORTED_MODULE_0__.default;\r\n\n\n//# sourceURL=webpack://tinyslide/./src/index.js?");

/***/ }),

/***/ "./src/tinyslide.js":
/*!**************************!*\
  !*** ./src/tinyslide.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Tinyslide\": () => (/* binding */ Tinyslide),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n__webpack_require__(/*! ./tinyslide.scss */ \"./src/tinyslide.scss\")\r\n\r\nconst TINYSLIDE_GLOBALS = {\r\n\tindex:0,\r\n\tinstances:{},\r\n}\r\nwindow.TINYSLIDE_GLOBALS = TINYSLIDE_GLOBALS;\r\n\r\nfunction BuildTinyslideOnLoad() {\r\n\tfunction domReady(fn) {\r\n\t\t// If late; I mean on time.\r\n\t\tif (document.readyState === \"interactive\" || document.readyState === \"complete\" )\r\n\t\t\tfn();\r\n\t\t// If we're early to the party\r\n\t\tdocument.addEventListener(\"DOMContentLoaded\", fn);\r\n\t}\r\n\tdomReady(function() {\r\n\t\t//******************************************************************\r\n\t\t// TINYSLIDE AUTOMATIC INSTANCIER 😎\r\n\t\t//******************************************************************\r\n\t\tconst domElements = document.querySelectorAll('.tinyslide')\r\n\t\tdomElements.forEach(function(domElement){\r\n\t\t\tTinyslide.Build(domElement)\r\n\t\t})\r\n\r\n\t\twindow.addEventListener('resize', function(){\r\n\t\t\tTinyslide.GetInstances().forEach(function([id,tinyslide]){\r\n\t\t\t\ttinyslide.redraw();\r\n\t\t\t});\r\n\t\t});\r\n\t});\r\n}\r\n\r\n\r\nclass Tinyslide {\r\n\r\n\tstatic AutomaticBuild() {\r\n\t\tBuildTinyslideOnLoad();\r\n\t}\r\n\r\n\tstatic GetInstances() {\r\n\t\treturn Object.entries(TINYSLIDE_GLOBALS.instances);\r\n\t}\r\n\tstatic GetInstance(id) {\r\n\t\treturn TINYSLIDE_GLOBALS.instances[id] || undefined;\r\n\t}\r\n\tstatic Build(domSource,options) {\r\n\t\tif(typeof domSource==='string')\r\n\t\t{\r\n\t\t\treturn Object.entries(document.querySelectorAll(domSource)).map(([key,node]) => {\r\n\t\t\t\tTinyslide.Build(node,options)\r\n\t\t\t});\r\n\t\t}\r\n\r\n\t\tconst ts = new Tinyslide(domSource,options);\r\n\t\tconsole.log(domSource,ts);\r\n\t\tts.init();\r\n\t\treturn ts;\r\n\t}\r\n\r\n\t// -------------------------------------------------\r\n\r\n\tconstructor(domSource,options) {\r\n\t\tif(domSource.dataset.tinyslideID>0)\r\n\t\t{\r\n\t\t\treturn Tinyslide.GetInstance(domSource.dataset.tinyslideID);\r\n\t\t}\r\n\t\telse\r\n\t\t{\r\n\t\t\tlet ID = ++TINYSLIDE_GLOBALS.index;\r\n\t\t\tdomSource.dataset.tinyslideID = ID;\r\n\t\t\tthis.state = {\r\n\t\t\t\tID:ID,\r\n\t\t\t\tinit:false,\r\n\t\t\t\tindex:0,\r\n\t\t\t\tanimation: {\r\n\t\t\t\t\tmode:null,\r\n\t\t\t\t\ttimeout:null,\r\n\t\t\t\t},\r\n\t\t\t\tautoplay: {\r\n\t\t\t\t\tmode:true,\r\n\t\t\t\t\ttimeout:null,\r\n\t\t\t\t},\r\n\t\t\t\tdomSource:domSource,\r\n\t\t\t\tdomWrapper:null,\r\n\t\t\t\tdomSlider:null,\r\n\t\t\t\tdomControls:null,\r\n\t\t\t\tdomControlPrev:null,\r\n\t\t\t\tdomControlNext:null,\r\n\t\t\t\tdomItems:[],\r\n\t\t\t\tstyle:options?.style || {},\r\n\t\t\t\titemDecorator:options?.itemDecorator || null\r\n\t\t\t}\r\n\t\t}\r\n\t}\r\n\tgetId() {\r\n\t\treturn this.state.ID;\r\n\t}\r\n\tinit() {\r\n\t\tif(TINYSLIDE_GLOBALS.instances[this.getId()] === undefined)\r\n\t\t\tTINYSLIDE_GLOBALS.instances[this.getId()] = this;\r\n\r\n\t\tif(!this.state.init)\r\n\t\t{\r\n\t\t\tthis.state.init=true\r\n\t\t\tthis.__init_clone_original_item();\r\n\t\t\tthis.__init_build_dom();\r\n\t\t\tthis.__init_apply_style();\r\n\t\t}\r\n\t\tthis.redraw();\r\n\t}\r\n\tdestroy() {\r\n\t\tclearTimeout(this.state.animation.timeout);\r\n\t\tclearTimeout(this.state.autoplay.timeout);\r\n\t\tthis.state.domSource.innerHTML = '';\r\n\t\tthis.state.domSource.classList.remove('tinyslide-ready');\r\n\t\tthis.state.domItems.forEach((node) => this.state.domSource.appendChild(node))\r\n\t\tdelete TINYSLIDE_GLOBALS.instances[this.getId()];\r\n\t\tdelete this;\r\n\t}\r\n\tredraw() {\r\n\t\tif(document.body.contains(this.state.domSource))\r\n\t\t{\r\n\t\t\tvar current_size = parseInt(this.getCssProperty('size'));\r\n\r\n\t\t\tif(this.state.domItems.length <= current_size)\r\n\t\t\t{\r\n\t\t\t\tthis.autoplay(false);\r\n\t\t\t\tthis.state.index = 0;\r\n\t\t\t\tcurrent_size = this.state.domItems.length;\r\n\t\t\t\tthis.state.domSource.classList.add('hide-out-items');\r\n\t\t\t\tthis.state.domSource.style.setProperty('--tinyslide-size', current_size);\r\n\t\t\t}\r\n\t\t\telse\r\n\t\t\t{\r\n\t\t\t\tthis.state.domSource.classList.remove('hide-out-items');\r\n\t\t\t}\r\n\r\n\t\t\tlet flexItemExtra = 2;\r\n\t\t\tlet flexItemCount = Math.max(current_size*3+flexItemExtra,this.state.domItems.length);\r\n\t\t\tthis.state.domSource.style.setProperty('--tinyslide-private-flex-item-extra',flexItemExtra)\r\n\t\t\tthis.state.domSource.style.setProperty('--tinyslide-private-flex-item-count',flexItemCount)\r\n\r\n\t\t\tthis.state.domSlider.innerHTML = '';\r\n\t\t\tfor(var i=0; i<flexItemCount; i++)\r\n\t\t\t{\r\n\t\t\t\tvar _i = (this.state.index + i - flexItemExtra) % this.state.domItems.length;\r\n\t\t\t\t_i = _i >= 0 ? _i : _i + this.state.domItems.length;\r\n\t\t\t\t_i = _i % this.state.domItems.length;\r\n\r\n\t\t\t\tvar item = this.state.domItems[_i].cloneNode(true);\r\n\t\t\t\tif(i < flexItemExtra || i > current_size + flexItemExtra-1)\r\n\t\t\t\t{\r\n\t\t\t\t\titem.classList.add('out')\r\n\t\t\t\t}\r\n\t\t\t\telse\r\n\t\t\t\t{\r\n\t\t\t\t\titem.classList.add('in')\r\n\t\t\t\t}\r\n\r\n\t\t\t\tif(i==flexItemExtra-1)\r\n\t\t\t\t{\r\n\t\t\t\t\titem.classList.add('out-before')\r\n\t\t\t\t}\r\n\t\t\t\tif(i==flexItemExtra)\r\n\t\t\t\t{\r\n\t\t\t\t\titem.classList.add('in-first')\r\n\t\t\t\t}\r\n\r\n\t\t\t\tif(i==current_size + (flexItemExtra))\r\n\t\t\t\t{\r\n\t\t\t\t\titem.classList.add('out-after')\r\n\t\t\t\t}\r\n\r\n\t\t\t\tif(i==current_size + (flexItemExtra-1))\r\n\t\t\t\t{\r\n\t\t\t\t\titem.classList.add('in-last')\r\n\t\t\t\t}\r\n\r\n\t\t\t\tthis.state.domSlider.appendChild(item);\r\n\t\t\t}\r\n\t\t}\r\n\t\tthis.play();\r\n\t}\r\n\tplay()\r\n\t{\r\n\t\tif(this.state.animation.mode!==null)\r\n\t\t\treturn ;\r\n\t\tvar current_autoplay = this.getCssProperty('autoplay', 'timing');\r\n\t\tif(current_autoplay>0 && this.state.autoplay.mode===true)\r\n\t\t{\r\n\t\t\tclearTimeout(this.state.autoplay.timeout);\r\n\t\t\tthis.state.autoplay.timeout = setTimeout(() => {\r\n\t\t\t\tthis.next();\r\n\t\t\t},current_autoplay);\r\n\t\t}\r\n\t}\r\n\r\n\tautoplay(v)\r\n\t{\r\n\t\tclearTimeout(this.state.autoplay.timeout);\r\n\t\tif(v!=='clear')\r\n\t\t{\r\n\t\t\tthis.state.autoplay.mode = v ? true:false;\r\n\t\t}\r\n\t\tif(this.state.autoplay.mode)\r\n\t\t{\r\n\t\t\tthis.play();\r\n\t\t}\r\n\t}\r\n\r\n\tanim_reset()\r\n\t{\r\n\t\tthis.autoplay('clear');\r\n\t\tclearTimeout(this.state.animation.timeout);\r\n\t\tthis.state.domSource.classList.remove('anim-prev');\r\n\t\tthis.state.domSource.classList.remove('anim-next');\r\n\t\tthis.state.animation.mode = null;\r\n\t}\r\n\r\n\tnext()\r\n\t{\r\n\t\tif(this.state.animation.mode!=='next')\r\n\t\t{\r\n\t\t\tthis.anim_reset();\r\n\t\t\tthis.state.animation.mode = 'next';\r\n\t\t\tthis.state.domSource.classList.add('anim-next');\r\n\t\t\tthis.state.animation.timeout = setTimeout(() => {\r\n\t\t\t\tthis.state.index++;\r\n\t\t\t\tthis.anim_reset();\r\n\t\t\t\tthis.redraw();\r\n\t\t\t},this.getCssProperty('speed', 'timing'))\r\n\t\t}\r\n\t}\r\n\r\n\tprev()\r\n\t{\r\n\t\tif(this.state.animation.mode!=='prev')\r\n\t\t{\r\n\t\t\tthis.anim_reset();\r\n\t\t\tthis.state.animation.mode = 'prev';\r\n\t\t\tthis.state.domSource.classList.add('anim-prev');\r\n\t\t\tthis.state.animation.timeout = setTimeout(() => {\r\n\t\t\t\tthis.state.index--;\r\n\t\t\t\tthis.anim_reset();\r\n\t\t\t\tthis.redraw();\r\n\t\t\t},this.getCssProperty('speed', 'timing'))\r\n\t\t}\r\n\t}\r\n\r\n\tgetCssProperty(propertyName, type=null)\r\n\t{\r\n\t\tlet value =  getComputedStyle(this.state.domSource).getPropertyValue('--tinyslide-'+propertyName);\r\n\t\tif(type==\"timing\")\r\n\t\t{\r\n\t\t\tvalue =\r\n\t\t\t\tvalue.match(/^[0-9.]+s$/) ? 1000 * value.replaceAll(/[^0-9.]/g,'') // s\r\n\t\t\t\t: value.replaceAll(/[^0-9.]/g,''); // ms\r\n\t\t}\r\n\t\treturn value;\r\n\t}\r\n\r\n\t__init_clone_original_item() {\r\n\t\twindow.test = this.state.domSource\r\n\t\tthis.state.domItems = Object.entries(this.state.domSource.children).map(function([index,domItem]){\r\n\t\t\treturn domItem.cloneNode(true);\r\n\t\t});\r\n\t}\r\n\r\n\t__init_build_dom() {\r\n\t\tthis.state.domSource.innerHTML = '';\r\n\r\n\t\t// build a wrapper in the source root\r\n\t\tthis.state.domWrapper = document.createElement('div');\r\n\t\tthis.state.domWrapper.classList.add('tinyslide-wrapper');\r\n\t\t// add mouseevent to the global wrapper\r\n\t\tthis.state.domWrapper.addEventListener('mousemove',() => this.autoplay(false), true);\r\n\t\tthis.state.domWrapper.addEventListener('mouseout',() => this.autoplay(true), true);\r\n\r\n\t\tthis.state.domSlider = document.createElement('div');\r\n\t\tthis.state.domSlider.classList.add('tinyslide-slider');\r\n\t\t// add slider container to the main wrapper\r\n\t\tthis.state.domWrapper.appendChild(this.state.domSlider);\r\n\r\n\t\tthis.state.domControls = document.createElement('div');\r\n\t\tthis.state.domControls.classList.add('tinyslide-control');\r\n\r\n\t\tthis.state.domControlPrev = document.createElement('div');\r\n\t\tthis.state.domControlPrev.classList.add('tinyslide-ctrl-prev');\r\n\t\tthis.state.domControlPrev.innerHTML = '<span>◄</span>';\r\n\t\tthis.state.domControlPrev.addEventListener('click', ()=>this.prev(), true);\r\n\t\tthis.state.domControls.appendChild(this.state.domControlPrev);\r\n\r\n\t\tthis.state.domControlNext = document.createElement('div');\r\n\t\tthis.state.domControlNext.classList.add('tinyslide-ctrl-next');\r\n\t\tthis.state.domControlNext.innerHTML = '<span>►</span>';\r\n\t\tthis.state.domControlNext.addEventListener('click', ()=>this.next(), true);\r\n\t\tthis.state.domControls.appendChild(this.state.domControlNext);\r\n\r\n\t\t// add control container to the main wrapper\r\n\t\tthis.state.domWrapper.appendChild(this.state.domControls);\r\n\r\n\t\t// mark original element as \"Init\" and inject dom content\r\n\t\tthis.state.domSource.appendChild(this.state.domWrapper);\r\n\t\tthis.state.domSource.classList.add('tinyslide-ready');\r\n\t}\r\n\r\n\t__init_apply_style() {\r\n\t\tObject.entries(this.state.style).forEach(([key,value]) => {\r\n\t\t\tthis.state.domSource.style.setProperty('--tinyslide-'+key, value);\r\n\t\t});\r\n\t}\r\n\r\n\t__helper_wrap(el, wrapper) {\r\n\t\tel.parentNode.insertBefore(wrapper, el);\r\n\t\twrapper.appendChild(el);\r\n\t\treturn wrapper;\r\n\t}\r\n\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Tinyslide);\n\n//# sourceURL=webpack://tinyslide/./src/tinyslide.js?");

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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