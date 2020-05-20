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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/React.js":
/*!**********************!*\
  !*** ./src/React.js ***!
  \**********************/
/*! exports provided: ReactDOM, React */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ReactDOM\", function() { return ReactDOM; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"React\", function() { return React; });\nconst isBasicType = type => typeof type === \"string\" || typeof type === \"number\";\n\nconst addStyle = (node, style) => Object.entries(style).forEach(([key, value]) => node.style[key] = value);\n\nlet timeoutID = -1;\nconst ReactDOM = {\n  render(component, node) {\n    const rend = (component, node) => {\n      let _component = component;\n\n      if (typeof _component.type === 'function') {\n        _component = _component.type(_component.props);\n      }\n\n      if (isBasicType(_component)) {\n        node.appendChild(document.createTextNode(_component));\n      } else {\n        const elem = document.createElement(_component.type);\n        node.appendChild(elem);\n\n        if (_component.props.children) {\n          _component.props.children.forEach(child => {\n            rend(child, elem);\n          });\n        }\n      }\n    };\n\n    rend(component, node);\n  }\n\n};\nconst React = {\n  createElement(elementType, props, ...children) {\n    const elem = {\n      type: elementType,\n      props: {}\n    };\n\n    if (!!props) {\n      elem.props = props;\n    }\n\n    if (children) {\n      elem.props['children'] = children;\n    }\n\n    return elem;\n  }\n\n};\n\n//# sourceURL=webpack:///./src/React.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _React__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./React */ \"./src/React.js\");\n\n\n\nconst A = ({\n  s\n}) => {\n  return /*#__PURE__*/_React__WEBPACK_IMPORTED_MODULE_0__[\"React\"].createElement(\"div\", null, \"1\", /*#__PURE__*/_React__WEBPACK_IMPORTED_MODULE_0__[\"React\"].createElement(\"div\", null, \"2\", /*#__PURE__*/_React__WEBPACK_IMPORTED_MODULE_0__[\"React\"].createElement(\"div\", null, \"3\"), /*#__PURE__*/_React__WEBPACK_IMPORTED_MODULE_0__[\"React\"].createElement(\"button\", null, \"click\")));\n};\n\nconst root = document.getElementById('root');\n_React__WEBPACK_IMPORTED_MODULE_0__[\"ReactDOM\"].render( /*#__PURE__*/_React__WEBPACK_IMPORTED_MODULE_0__[\"React\"].createElement(A, {\n  s: 2\n}), root);\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });