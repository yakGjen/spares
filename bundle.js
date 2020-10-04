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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/app.scss":
/*!**********************!*\
  !*** ./src/app.scss ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/app.scss?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// $('#pop-up-thnks').hide();\n//     $('#pop-ups-req').hide();\n//     $('#pop-ups-exit').hide();\n$(document).ready(() => {\n  /** move to item card from categories */\n  $('.category').click(() => {\n    console.log('ok');\n    console.log(location);\n    location.pathname = '/catalog-item.html';\n  });\n  $(\"img\").on(\"dragstart\", event => {\n    event.preventDefault();\n  });\n  /** pop-up before exit */\n\n  let init = false;\n  const initQuitFn = $(window).height() / 2;\n\n  const handlerMove1 = e => {\n    const top = e.screenY;\n    if (top > initQuitFn) init = true;\n\n    if (init && top < 110) {\n      console.log('ok');\n      $('#pop-ups-exit').show(); // initQuitTimer();\n\n      $(document).unbind('mousemove', handlerMove1);\n    }\n  };\n\n  $(document).bind('mousemove', handlerMove1);\n  /** pop-up request */\n\n  $('.header__button, .footer__button').click(() => {\n    $('#pop-ups-req').show();\n  });\n  /** pop-up thanks */\n\n  $('input[type=\"submit\"]').click(e => {\n    e.preventDefault();\n    $('#pop-ups-req').hide();\n    $('#pop-ups-exit').hide();\n    $('#pop-up-thnks').show();\n  });\n  /** pop-ups */\n  // $('#pop-up-thnks').hide();\n  // $('#pop-ups-req').hide();\n  // $('#pop-ups-exit').hide();\n\n  $('.pop-up-exit, .pop-up').click(e => {\n    if ($(e.target).hasClass('pop-up-exit') || $(e.target).hasClass('pop-up')) {\n      $('.pop-up').hide();\n    }\n  });\n  /** mobile menu */\n\n  let openMenu = false;\n  $('.mobile-menu').click(() => {\n    if (openMenu) {\n      $('.mobile-menu').removeClass('mobile-menu_white');\n      $('.menu').removeClass('menu_show');\n      openMenu = false;\n      return;\n    }\n\n    $('.mobile-menu').addClass('mobile-menu_white');\n    $('.menu').addClass('menu_show');\n    openMenu = true;\n  });\n  /*categories button*/\n\n  $('.categories-aside__drop-down').click(() => {\n    $('.drop-down__img').toggleClass('mobile-menu_white');\n    $('.categories-aside__list').toggleClass('categories-aside__list_show');\n    $('.drop-down__img').toggleClass('drop-down__img_show');\n  });\n  /*leflet*/\n  // const mymap = L.map('mapid').setView([55.7522200, 37.6155600], 13);\n\n  const map = L.map('mapid', {\n    center: [55.734251, 37.393291],\n    zoom: 15\n  });\n  L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {\n    attribution: '© <a href=\"http://osm.org/copyright\">OpenStreetMap</a> contributors'\n  }).addTo(map);\n  L.marker([55.734251, 37.393291]).addTo(map);\n});\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ 0:
/*!*******************************************!*\
  !*** multi ./src/index.js ./src/app.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! D:\\freelance\\spares/src/index.js */\"./src/index.js\");\nmodule.exports = __webpack_require__(/*! D:\\freelance\\spares/src/app.scss */\"./src/app.scss\");\n\n\n//# sourceURL=webpack:///multi_./src/index.js_./src/app.scss?");

/***/ })

/******/ });