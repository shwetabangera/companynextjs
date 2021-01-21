module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/contentstack/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./api/index.js":
/*!**********************!*\
  !*** ./api/index.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst Url = \"https://shwetabangera.github.io/company-website-data/\";\n/* harmony default export */ __webpack_exports__[\"default\"] = (Url);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcGkvaW5kZXguanM/NmNjYyJdLCJuYW1lcyI6WyJVcmwiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUEsTUFBTUEsR0FBRyxHQUFHLHVEQUFaO0FBRWVBLGtFQUFmIiwiZmlsZSI6Ii4vYXBpL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgVXJsID0gXCJodHRwczovL3Nod2V0YWJhbmdlcmEuZ2l0aHViLmlvL2NvbXBhbnktd2Vic2l0ZS1kYXRhL1wiO1xuXG5leHBvcnQgZGVmYXVsdCBVcmw7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./api/index.js\n");

/***/ }),

/***/ "./pages/contentstack/index.js":
/*!*************************************!*\
  !*** ./pages/contentstack/index.js ***!
  \*************************************/
/*! exports provided: getStaticProps, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getStaticProps\", function() { return getStaticProps; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../api */ \"./api/index.js\");\n/* harmony import */ var _index_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./index.module.css */ \"./pages/contentstack/index.module.css\");\n/* harmony import */ var _index_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_index_module_css__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _jsxFileName = \"/home/trainee/Next JS/task/companyfrontend/pages/contentstack/index.js\";\n\n\n\n\n\nfunction Contentstack(props) {\n  let contentstack = props.contentstack[0];\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"title\", {\n        children: \"Contentstack\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 11,\n        columnNumber: 5\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 4\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: _index_module_css__WEBPACK_IMPORTED_MODULE_4___default.a[\"banner\"],\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"nav\", {\n        className: _index_module_css__WEBPACK_IMPORTED_MODULE_4___default.a[\"nav\"],\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n          className: _index_module_css__WEBPACK_IMPORTED_MODULE_4___default.a[\"logo\"],\n          src: contentstack.contentstackLogo,\n          alt: \"Logo\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 15,\n          columnNumber: 6\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: _index_module_css__WEBPACK_IMPORTED_MODULE_4___default.a[\"options\"],\n          children: contentstack.navigationLinks.map((link, i) => {\n            return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n              className: _index_module_css__WEBPACK_IMPORTED_MODULE_4___default.a[\"lists\"],\n              children: link\n            }, i, false, {\n              fileName: _jsxFileName,\n              lineNumber: 23,\n              columnNumber: 9\n            }, this);\n          })\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 20,\n          columnNumber: 6\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 14,\n        columnNumber: 5\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n          className: _index_module_css__WEBPACK_IMPORTED_MODULE_4___default.a[\"heading\"],\n          children: contentstack.heading\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 31,\n          columnNumber: 6\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h3\", {\n          className: _index_module_css__WEBPACK_IMPORTED_MODULE_4___default.a[\"sub-head\"],\n          children: contentstack.subHeading\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 32,\n          columnNumber: 6\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n          className: _index_module_css__WEBPACK_IMPORTED_MODULE_4___default.a[\"button\"],\n          children: \"TRY FOR FREE\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 33,\n          columnNumber: 6\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 30,\n        columnNumber: 5\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 4\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"hr\", {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 4\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"footer\", {\n      className: _index_module_css__WEBPACK_IMPORTED_MODULE_4___default.a[\"footer-section\"],\n      children: contentstack.footer.map((footerLinks, i) => {\n        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n          className: _index_module_css__WEBPACK_IMPORTED_MODULE_4___default.a[\"lists\"],\n          children: footerLinks\n        }, i, false, {\n          fileName: _jsxFileName,\n          lineNumber: 40,\n          columnNumber: 7\n        }, this);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 4\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 9,\n    columnNumber: 3\n  }, this);\n}\n\nconst getStaticProps = async () => {\n  let {\n    data\n  } = await axios__WEBPACK_IMPORTED_MODULE_2___default.a.get(_api__WEBPACK_IMPORTED_MODULE_3__[\"default\"] + \"contentstack.json\");\n  return {\n    props: {\n      contentstack: [...data]\n    }\n  };\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Contentstack);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9jb250ZW50c3RhY2svaW5kZXguanM/MzQxOSJdLCJuYW1lcyI6WyJDb250ZW50c3RhY2siLCJwcm9wcyIsImNvbnRlbnRzdGFjayIsInN0eWxlcyIsImNvbnRlbnRzdGFja0xvZ28iLCJuYXZpZ2F0aW9uTGlua3MiLCJtYXAiLCJsaW5rIiwiaSIsImhlYWRpbmciLCJzdWJIZWFkaW5nIiwiZm9vdGVyIiwiZm9vdGVyTGlua3MiLCJnZXRTdGF0aWNQcm9wcyIsImRhdGEiLCJheGlvcyIsImdldCIsIlVybCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVNBLFlBQVQsQ0FBc0JDLEtBQXRCLEVBQTZCO0FBQzVCLE1BQUlDLFlBQVksR0FBR0QsS0FBSyxDQUFDQyxZQUFOLENBQW1CLENBQW5CLENBQW5CO0FBQ0Esc0JBQ0M7QUFBQSw0QkFDQyxxRUFBQyxnREFBRDtBQUFBLDZCQUNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURELGVBSUM7QUFBSyxlQUFTLEVBQUVDLHdEQUFNLENBQUMsUUFBRCxDQUF0QjtBQUFBLDhCQUNDO0FBQUssaUJBQVMsRUFBRUEsd0RBQU0sQ0FBQyxLQUFELENBQXRCO0FBQUEsZ0NBQ0M7QUFDQyxtQkFBUyxFQUFFQSx3REFBTSxDQUFDLE1BQUQsQ0FEbEI7QUFFQyxhQUFHLEVBQUVELFlBQVksQ0FBQ0UsZ0JBRm5CO0FBR0MsYUFBRyxFQUFDO0FBSEw7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERCxlQU1DO0FBQUssbUJBQVMsRUFBRUQsd0RBQU0sQ0FBQyxTQUFELENBQXRCO0FBQUEsb0JBQ0VELFlBQVksQ0FBQ0csZUFBYixDQUE2QkMsR0FBN0IsQ0FBaUMsQ0FBQ0MsSUFBRCxFQUFPQyxDQUFQLEtBQWE7QUFDOUMsZ0NBQ0M7QUFBRyx1QkFBUyxFQUFFTCx3REFBTSxDQUFDLE9BQUQsQ0FBcEI7QUFBQSx3QkFDRUk7QUFERixlQUFvQ0MsQ0FBcEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFERDtBQUtBLFdBTkE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQU5EO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURELGVBaUJDO0FBQUEsZ0NBQ0M7QUFBSSxtQkFBUyxFQUFFTCx3REFBTSxDQUFDLFNBQUQsQ0FBckI7QUFBQSxvQkFBbUNELFlBQVksQ0FBQ087QUFBaEQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERCxlQUVDO0FBQUksbUJBQVMsRUFBRU4sd0RBQU0sQ0FBQyxVQUFELENBQXJCO0FBQUEsb0JBQW9DRCxZQUFZLENBQUNRO0FBQWpEO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRkQsZUFHQztBQUFRLG1CQUFTLEVBQUVQLHdEQUFNLENBQUMsUUFBRCxDQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFIRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FqQkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSkQsZUEyQkM7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQTNCRCxlQTRCQztBQUFRLGVBQVMsRUFBRUEsd0RBQU0sQ0FBQyxnQkFBRCxDQUF6QjtBQUFBLGdCQUNFRCxZQUFZLENBQUNTLE1BQWIsQ0FBb0JMLEdBQXBCLENBQXdCLENBQUNNLFdBQUQsRUFBY0osQ0FBZCxLQUFvQjtBQUM1Qyw0QkFDQztBQUFHLG1CQUFTLEVBQUVMLHdEQUFNLENBQUMsT0FBRCxDQUFwQjtBQUFBLG9CQUNFUztBQURGLFdBQW9DSixDQUFwQztBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUREO0FBS0EsT0FOQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUE1QkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREQ7QUF3Q0E7O0FBRU0sTUFBTUssY0FBYyxHQUFHLFlBQVk7QUFDekMsTUFBSTtBQUFFQztBQUFGLE1BQVcsTUFBTUMsNENBQUssQ0FBQ0MsR0FBTixDQUFVQyw0Q0FBRyxHQUFHLG1CQUFoQixDQUFyQjtBQUNBLFNBQU87QUFDTmhCLFNBQUssRUFBRTtBQUNOQyxrQkFBWSxFQUFFLENBQUMsR0FBR1ksSUFBSjtBQURSO0FBREQsR0FBUDtBQUtBLENBUE07QUFTUWQsMkVBQWYiLCJmaWxlIjoiLi9wYWdlcy9jb250ZW50c3RhY2svaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgVXJsIGZyb20gXCIuLi8uLi9hcGlcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vaW5kZXgubW9kdWxlLmNzc1wiO1xuXG5mdW5jdGlvbiBDb250ZW50c3RhY2socHJvcHMpIHtcblx0bGV0IGNvbnRlbnRzdGFjayA9IHByb3BzLmNvbnRlbnRzdGFja1swXTtcblx0cmV0dXJuIChcblx0XHQ8ZGl2PlxuXHRcdFx0PEhlYWQ+XG5cdFx0XHRcdDx0aXRsZT5Db250ZW50c3RhY2s8L3RpdGxlPlxuXHRcdFx0PC9IZWFkPlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlc1tcImJhbm5lclwiXX0+XG5cdFx0XHRcdDxuYXYgY2xhc3NOYW1lPXtzdHlsZXNbXCJuYXZcIl19PlxuXHRcdFx0XHRcdDxpbWdcblx0XHRcdFx0XHRcdGNsYXNzTmFtZT17c3R5bGVzW1wibG9nb1wiXX1cblx0XHRcdFx0XHRcdHNyYz17Y29udGVudHN0YWNrLmNvbnRlbnRzdGFja0xvZ299XG5cdFx0XHRcdFx0XHRhbHQ9XCJMb2dvXCJcblx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXNbXCJvcHRpb25zXCJdfT5cblx0XHRcdFx0XHRcdHtjb250ZW50c3RhY2submF2aWdhdGlvbkxpbmtzLm1hcCgobGluaywgaSkgPT4ge1xuXHRcdFx0XHRcdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT17c3R5bGVzW1wibGlzdHNcIl19IGtleT17aX0+XG5cdFx0XHRcdFx0XHRcdFx0XHR7bGlua31cblx0XHRcdFx0XHRcdFx0XHQ8L3A+XG5cdFx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0XHR9KX1cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9uYXY+XG5cdFx0XHRcdDxkaXY+XG5cdFx0XHRcdFx0PGgxIGNsYXNzTmFtZT17c3R5bGVzW1wiaGVhZGluZ1wiXX0+e2NvbnRlbnRzdGFjay5oZWFkaW5nfTwvaDE+XG5cdFx0XHRcdFx0PGgzIGNsYXNzTmFtZT17c3R5bGVzW1wic3ViLWhlYWRcIl19Pntjb250ZW50c3RhY2suc3ViSGVhZGluZ308L2gzPlxuXHRcdFx0XHRcdDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZXNbXCJidXR0b25cIl19PlRSWSBGT1IgRlJFRTwvYnV0dG9uPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdFx0PGhyIC8+XG5cdFx0XHQ8Zm9vdGVyIGNsYXNzTmFtZT17c3R5bGVzW1wiZm9vdGVyLXNlY3Rpb25cIl19PlxuXHRcdFx0XHR7Y29udGVudHN0YWNrLmZvb3Rlci5tYXAoKGZvb3RlckxpbmtzLCBpKSA9PiB7XG5cdFx0XHRcdFx0cmV0dXJuIChcblx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT17c3R5bGVzW1wibGlzdHNcIl19IGtleT17aX0+XG5cdFx0XHRcdFx0XHRcdHtmb290ZXJMaW5rc31cblx0XHRcdFx0XHRcdDwvcD5cblx0XHRcdFx0XHQpO1xuXHRcdFx0XHR9KX1cblx0XHRcdDwvZm9vdGVyPlxuXHRcdDwvZGl2PlxuXHQpO1xufVxuXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUHJvcHMgPSBhc3luYyAoKSA9PiB7XG5cdGxldCB7IGRhdGEgfSA9IGF3YWl0IGF4aW9zLmdldChVcmwgKyBcImNvbnRlbnRzdGFjay5qc29uXCIpO1xuXHRyZXR1cm4ge1xuXHRcdHByb3BzOiB7XG5cdFx0XHRjb250ZW50c3RhY2s6IFsuLi5kYXRhXSxcblx0XHR9LFxuXHR9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ29udGVudHN0YWNrO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/contentstack/index.js\n");

/***/ }),

/***/ "./pages/contentstack/index.module.css":
/*!*********************************************!*\
  !*** ./pages/contentstack/index.module.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"banner\": \"contentstack_banner__1KLWP\",\n\t\"nav\": \"contentstack_nav__29SIY\",\n\t\"logo\": \"contentstack_logo__37V5v\",\n\t\"options\": \"contentstack_options__3yXal\",\n\t\"lists\": \"contentstack_lists__3oeu1\",\n\t\"heading\": \"contentstack_heading__3BYc7\",\n\t\"sub-head\": \"contentstack_sub-head__2Iqhl\",\n\t\"button\": \"contentstack_button__1fA1_\",\n\t\"footer-section\": \"contentstack_footer-section__1xcrk\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9jb250ZW50c3RhY2svaW5kZXgubW9kdWxlLmNzcz9kNDZjIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiIuL3BhZ2VzL2NvbnRlbnRzdGFjay9pbmRleC5tb2R1bGUuY3NzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiYmFubmVyXCI6IFwiY29udGVudHN0YWNrX2Jhbm5lcl9fMUtMV1BcIixcblx0XCJuYXZcIjogXCJjb250ZW50c3RhY2tfbmF2X18yOVNJWVwiLFxuXHRcImxvZ29cIjogXCJjb250ZW50c3RhY2tfbG9nb19fMzdWNXZcIixcblx0XCJvcHRpb25zXCI6IFwiY29udGVudHN0YWNrX29wdGlvbnNfXzN5WGFsXCIsXG5cdFwibGlzdHNcIjogXCJjb250ZW50c3RhY2tfbGlzdHNfXzNvZXUxXCIsXG5cdFwiaGVhZGluZ1wiOiBcImNvbnRlbnRzdGFja19oZWFkaW5nX18zQlljN1wiLFxuXHRcInN1Yi1oZWFkXCI6IFwiY29udGVudHN0YWNrX3N1Yi1oZWFkX18ySXFobFwiLFxuXHRcImJ1dHRvblwiOiBcImNvbnRlbnRzdGFja19idXR0b25fXzFmQTFfXCIsXG5cdFwiZm9vdGVyLXNlY3Rpb25cIjogXCJjb250ZW50c3RhY2tfZm9vdGVyLXNlY3Rpb25fXzF4Y3JrXCJcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/contentstack/index.module.css\n");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"axios\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJheGlvc1wiPzcwYzYiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiYXhpb3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///axios\n");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/head\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIj81ZWYyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im5leHQvaGVhZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/head\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react/jsx-dev-runtime\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIj9jZDkwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0L2pzeC1kZXYtcnVudGltZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react/jsx-dev-runtime\n");

/***/ })

/******/ });